import bcrypt from "bcrypt";
import crypto from "crypto";

import prisma from "../prisma/prisma.js";

const getEncryptionKey = () => {
  const key = process.env.PASSWORD_ENCRYPTION_KEY;

  if (!key) {
    throw new Error(
      "PASSWORD_ENCRYPTION_KEY is not configured"
    );
  }

  if (!/^[0-9a-fA-F]{64}$/.test(key)) {
    throw new Error(
      "PASSWORD_ENCRYPTION_KEY must be exactly 64 hexadecimal characters"
    );
  }

  return Buffer.from(key, "hex");
};

const encryptPassword = (password) => {
  const key = getEncryptionKey();

  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv(
    "aes-256-gcm",
    key,
    iv
  );

  let encrypted = cipher.update(
    password,
    "utf8",
    "hex"
  );

  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag();

  return [
    iv.toString("hex"),
    authTag.toString("hex"),
    encrypted,
  ].join(":");
};

const decryptPassword = (encryptedPassword) => {
  if (!encryptedPassword) {
    return null;
  }

  const key = getEncryptionKey();

  const parts =
    encryptedPassword.split(":");

  if (parts.length !== 3) {
    throw new Error(
      "Invalid encrypted password format"
    );
  }

  const [
    ivHex,
    authTagHex,
    encryptedHex,
  ] = parts;

  const decipher =
    crypto.createDecipheriv(
      "aes-256-gcm",
      key,
      Buffer.from(ivHex, "hex")
    );

  decipher.setAuthTag(
    Buffer.from(authTagHex, "hex")
  );

  let decrypted =
    decipher.update(
      encryptedHex,
      "hex",
      "utf8"
    );

  decrypted += decipher.final(
    "utf8"
  );

  return decrypted;
};

const generateUsername = async (
  prefix = "admin"
) => {
  let username;
  let existingUser;

  do {
    const random =
      crypto
        .randomBytes(3)
        .toString("hex")
        .toUpperCase();

    username =
      `${prefix}_${random}`;

    existingUser =
      await prisma.user.findUnique({
        where: {
          username,
        },
      });
  } while (existingUser);

  return username;
};

const generateRandomPassword = (
  length = 12
) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "@#$%&*!";

  const randomBytes =
    crypto.randomBytes(length);

  let password = "";

  for (
    let i = 0;
    i < length;
    i++
  ) {
    password +=
      characters[
        randomBytes[i] %
          characters.length
      ];
  }

  return password;
};

const verifySuperAdmin = async (
  superAdminId
) => {
  const superAdmin =
    await prisma.user.findUnique({
      where: {
        id: superAdminId,
      },
    });

  if (!superAdmin) {
    throw new Error(
      "Super Admin not found"
    );
  }

  if (
    superAdmin.role !==
    "SUPER_ADMIN"
  ) {
    throw new Error(
      "Only Super Admin can perform this action"
    );
  }

  if (
    superAdmin.status !==
    "ACTIVE"
  ) {
    throw new Error(
      "Super Admin account is not active"
    );
  }

  return superAdmin;
};

const getPlan = async (
  tx,
  planId
) => {
  if (!planId) {
    throw new Error(
      "Plan is required"
    );
  }

  const plan =
    await tx.plan.findUnique({
      where: {
        id: planId,
      },
    });

  if (!plan) {
    throw new Error(
      "Plan not found"
    );
  }

  if (
    plan.status &&
    plan.status !== "ACTIVE"
  ) {
    throw new Error(
      "Selected plan is not active"
    );
  }

  return plan;
};

const createPendingSubscription = async (
  tx,
  {
    userId,
    planId,
    paymentRequired,
  }
) => {
  const plan =
    await getPlan(
      tx,
      planId
    );

  const subscription =
    await tx.subscription.create({
      data: {
        userId,
        planId,
        status: paymentRequired
          ? "PENDING"
          : "ACTIVE",
      },
    });

  return {
    subscription,
    plan,
  };
};

const createPayment = async (
  tx,
  {
    userId,
    subscriptionId,
    plan,
    paymentRequired,
  }
) => {
  if (!paymentRequired) {
    return null;
  }

  const amount =
    Number(
      plan.price
    );

  const payment =
    await tx.payment.create({
      data: {
        userId,
        subscriptionId,
        amount,
        status: "PENDING",
      },
    });

  return payment;
};

const registerAdmin = async ({
  name,
  email,
  password,
  mobileNumber,
  businessName,
  businessType,
  address,
  city,
  state,
  pincode,
  planId,
}) => {
  if (email) {
    const existingEmail =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingEmail) {
      throw new Error(
        "Email is already registered"
      );
    }
  }

  const existingMobile =
    await prisma.business.findFirst({
      where: {
        mobileNumber,
      },
    });

  if (existingMobile) {
    throw new Error(
      "Mobile number is already registered"
    );
  }

  const superAdmin =
    await prisma.user.findFirst({
      where: {
        role: "SUPER_ADMIN",
        status: "ACTIVE",
      },
    });

  if (!superAdmin) {
    throw new Error(
      "Active Super Admin not found"
    );
  }

  const username =
    await generateUsername("admin");

  const passwordHash =
    await bcrypt.hash(
      password,
      12
    );

  const encryptedPassword =
    encryptPassword(password);

  const result =
    await prisma.$transaction(
      async (tx) => {
        const plan =
          await getPlan(
            tx,
            planId
          );

        const admin =
          await tx.user.create({
            data: {
              name,
              username,
              email:
                email || null,
              passwordHash,
              encryptedPassword,
              role: "ADMIN",
              status: "PENDING",
              parentId:
                superAdmin.id,
              isFirstLogin: true,
            },
          });

        const business =
          await tx.business.create({
            data: {
              userId: admin.id,
              businessName,
              businessType,
              mobileNumber,
              email:
                email || null,
              address:
                address || null,
              city:
                city || null,
              state:
                state || null,
              pincode:
                pincode || null,
            },
          });

        const subscription =
          await tx.subscription.create({
            data: {
              userId: admin.id,
              planId: plan.id,
              status: "PENDING",
            },
          });

        const payment =
          await tx.payment.create({
            data: {
              userId: admin.id,
              subscriptionId:
                subscription.id,
              amount:
                Number(plan.price),
              status: "PENDING",
            },
          });

        return {
          admin,
          business,
          plan,
          subscription,
          payment,
        };
      }
    );

  return {
    admin: {
      id:
        result.admin.id,
      name:
        result.admin.name,
      username:
        result.admin.username,
      email:
        result.admin.email,
      role:
        result.admin.role,
      status:
        result.admin.status,
      parentId:
        result.admin.parentId,
      isFirstLogin:
        result.admin.isFirstLogin,
      createdAt:
        result.admin.createdAt,
    },

    business: {
      id:
        result.business.id,
      businessName:
        result.business.businessName,
      businessType:
        result.business.businessType,
      mobileNumber:
        result.business.mobileNumber,
      email:
        result.business.email,
      address:
        result.business.address,
      city:
        result.business.city,
      state:
        result.business.state,
      pincode:
        result.business.pincode,
      createdAt:
        result.business.createdAt,
    },

    plan: {
      id:
        result.plan.id,
      name:
        result.plan.name,
      price:
        result.plan.price,
    },

    subscription: {
      id:
        result.subscription.id,
      status:
        result.subscription.status,
    },

    payment: {
      id:
        result.payment.id,
      amount:
        result.payment.amount,
      status:
        result.payment.status,
    },
  };
};

const createAdmin = async ({
  superAdminId,
  name,
  email,
  mobileNumber,
  businessName,
  businessType,
  address,
  city,
  state,
  pincode,
  planId,
  paymentRequired,
}) => {
  await verifySuperAdmin(
    superAdminId
  );

  if (
    typeof paymentRequired !==
    "boolean"
  ) {
    throw new Error(
      "paymentRequired must be true or false"
    );
  }

  if (email) {
    const existingEmail =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingEmail) {
      throw new Error(
        "Email is already registered"
      );
    }
  }

  const existingMobile =
    await prisma.business.findFirst({
      where: {
        mobileNumber,
      },
    });

  if (existingMobile) {
    throw new Error(
      "Mobile number is already registered"
    );
  }

  const username =
    await generateUsername("admin");

  const adminPassword =
    generateRandomPassword(12);

  const passwordHash =
    await bcrypt.hash(
      adminPassword,
      12
    );

  const encryptedPassword =
    encryptPassword(
      adminPassword
    );

  const result =
    await prisma.$transaction(
      async (tx) => {
        const plan =
          await getPlan(
            tx,
            planId
          );

        const admin =
          await tx.user.create({
            data: {
              name,
              username,
              email:
                email || null,
              passwordHash,
              encryptedPassword,
              role: "ADMIN",
              status:
                paymentRequired
                  ? "PENDING"
                  : "ACTIVE",
              parentId:
                superAdminId,
              isFirstLogin: true,
            },
          });

        const business =
          await tx.business.create({
            data: {
              userId: admin.id,
              businessName,
              businessType,
              mobileNumber,
              email:
                email || null,
              address:
                address || null,
              city:
                city || null,
              state:
                state || null,
              pincode:
                pincode || null,
            },
          });

        const subscription =
          await tx.subscription.create({
            data: {
              userId: admin.id,
              planId: plan.id,
              status:
                paymentRequired
                  ? "PENDING"
                  : "ACTIVE",
            },
          });

        const payment =
          await createPayment(
            tx,
            {
              userId:
                admin.id,
              subscriptionId:
                subscription.id,
              plan,
              paymentRequired,
            }
          );

        return {
          admin,
          business,
          plan,
          subscription,
          payment,
        };
      }
    );

  return {
    admin: {
      id:
        result.admin.id,
      name:
        result.admin.name,
      username:
        result.admin.username,
      email:
        result.admin.email,
      role:
        result.admin.role,
      status:
        result.admin.status,
      parentId:
        result.admin.parentId,
      isFirstLogin:
        result.admin.isFirstLogin,
      createdAt:
        result.admin.createdAt,
    },

    business: {
      id:
        result.business.id,
      businessName:
        result.business.businessName,
      businessType:
        result.business.businessType,
      mobileNumber:
        result.business.mobileNumber,
      email:
        result.business.email,
      address:
        result.business.address,
      city:
        result.business.city,
      state:
        result.business.state,
      pincode:
        result.business.pincode,
      createdAt:
        result.business.createdAt,
    },

    plan: {
      id:
        result.plan.id,
      name:
        result.plan.name,
      price:
        result.plan.price,
    },

    subscription: {
      id:
        result.subscription.id,
      status:
        result.subscription.status,
    },

    payment: result.payment
      ? {
          id:
            result.payment.id,
          amount:
            result.payment.amount,
          status:
            result.payment.status,
        }
      : null,

    credentials: {
      username,
      adminPassword,
    },
  };
};

const getAllAdmins = async (
  superAdminId,
  query = {}
) => {
  await verifySuperAdmin(
    superAdminId
  );

  const page = Math.max(
    parseInt(query.page, 10) || 1,
    1
  );

  const limit = Math.min(
    Math.max(
      parseInt(query.limit, 10) || 10,
      1
    ),
    100
  );

  const skip =
    (page - 1) * limit;

  const search =
    query.search?.trim();

  const where = {
    role: "ADMIN",
  };

  if (search) {
    where.AND = [
      {
        OR: [
          {
            name: {
              contains: search,
            },
          },
          {
            username: {
              contains: search,
            },
          },
          {
            email: {
              contains: search,
            },
          },
          {
            business: {
              businessName: {
                contains: search,
              },
            },
          },
          {
            business: {
              mobileNumber: {
                contains: search,
              },
            },
          },
        ],
      },
    ];
  }

  if (
    query.status &&
    [
      "PENDING",
      "ACTIVE",
      "INACTIVE",
      "SUSPENDED",
    ].includes(query.status)
  ) {
    where.status =
      query.status;
  }

  const [admins, total] =
    await prisma.$transaction([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          role: true,
          status: true,
          parentId: true,
          isFirstLogin: true,
          createdAt: true,
          updatedAt: true,

          business: {
            select: {
              id: true,
              businessName: true,
              businessType: true,
              mobileNumber: true,
              email: true,
              address: true,
              city: true,
              state: true,
              pincode: true,
              createdAt: true,
              updatedAt: true,
            },
          },

          subscriptions: {
            orderBy: {
              createdAt: "desc",
            },
            take: 1,
            select: {
              id: true,
              status: true,
              plan: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                },
              },
            },
          },
        },
      }),

      prisma.user.count({
        where,
      }),
    ]);

  const totalPages =
    Math.ceil(
      total / limit
    );

  return {
    admins,

    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage:
        page < totalPages,
      hasPreviousPage:
        page > 1,
    },
  };
};

const getAdminById = async (
  superAdminId,
  adminId
) => {
  await verifySuperAdmin(
    superAdminId
  );

  const admin =
    await prisma.user.findFirst({
      where: {
        id: adminId,
        role: "ADMIN",
      },

      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        status: true,
        parentId: true,
        isFirstLogin: true,
        createdAt: true,
        updatedAt: true,

        encryptedPassword: true,

        business: {
          select: {
            id: true,
            businessName: true,
            businessType: true,
            mobileNumber: true,
            email: true,
            address: true,
            city: true,
            state: true,
            pincode: true,
            createdAt: true,
            updatedAt: true,
          },
        },

        subscriptions: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
          select: {
            id: true,
            status: true,
            startDate: true,
            endDate: true,
            autoRenew: true,

            plan: {
              select: {
                id: true,
                name: true,
                price: true,
              },
            },
          },
        },

        payments: {
          orderBy: {
            createdAt: "desc",
          },
          take: 10,
          select: {
            id: true,
            amount: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

  if (!admin) {
    throw new Error(
      "Admin not found"
    );
  }

  let password = null;

  if (admin.encryptedPassword) {
    password =
      decryptPassword(
        admin.encryptedPassword
      );
  }

  const {
    encryptedPassword,
    ...adminData
  } = admin;

  return {
    ...adminData,
    password,
  };
};

export default {
  registerAdmin,
  createAdmin,
  getAllAdmins,
  getAdminById,
};