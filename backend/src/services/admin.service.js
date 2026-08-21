import bcrypt from "bcrypt";
import crypto from "crypto";

import prisma from "../prisma/prisma.js";

/*
|--------------------------------------------------------------------------
| PASSWORD ENCRYPTION
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| ENCRYPT PASSWORD
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| DECRYPT PASSWORD
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| GENERATE UNIQUE USERNAME
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| GENERATE RANDOM PASSWORD
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| VERIFY SUPER ADMIN
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| ADMIN SELF REGISTRATION
|--------------------------------------------------------------------------
*/

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
}) => {
  /*
  |--------------------------------------------------------------------------
  | CHECK EMAIL
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | CHECK MOBILE
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | GENERATE USERNAME
  |--------------------------------------------------------------------------
  */

  const username =
    await generateUsername("admin");

  /*
  |--------------------------------------------------------------------------
  | HASH PASSWORD
  |--------------------------------------------------------------------------
  */

  const passwordHash =
    await bcrypt.hash(
      password,
      12
    );

  /*
  |--------------------------------------------------------------------------
  | ENCRYPT ORIGINAL PASSWORD
  |--------------------------------------------------------------------------
  */

  const encryptedPassword =
    encryptPassword(password);

  /*
  |--------------------------------------------------------------------------
  | CREATE ADMIN + BUSINESS
  |--------------------------------------------------------------------------
  */

  const result =
    await prisma.$transaction(
      async (tx) => {
        /*
        |--------------------------------------------------------------------------
        | CREATE ADMIN
        |--------------------------------------------------------------------------
        */

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

              // Self registered admin
              // requires approval
              status: "PENDING",

              // No Super Admin assigned
              parentId: null,

              isFirstLogin: true,
            },
          });

        /*
        |--------------------------------------------------------------------------
        | CREATE BUSINESS
        |--------------------------------------------------------------------------
        */

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

        return {
          admin,
          business,
        };
      }
    );

  /*
  |--------------------------------------------------------------------------
  | RESPONSE
  |--------------------------------------------------------------------------
  */

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
  };
};

/*
|--------------------------------------------------------------------------
| CREATE ADMIN BY SUPER ADMIN
|--------------------------------------------------------------------------
*/

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
}) => {
  /*
  |--------------------------------------------------------------------------
  | VERIFY SUPER ADMIN
  |--------------------------------------------------------------------------
  */

  await verifySuperAdmin(
    superAdminId
  );

  /*
  |--------------------------------------------------------------------------
  | CHECK EMAIL
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | CHECK MOBILE
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | GENERATE USERNAME
  |--------------------------------------------------------------------------
  */

  const username =
    await generateUsername("admin");

  /*
  |--------------------------------------------------------------------------
  | GENERATE RANDOM PASSWORD
  |--------------------------------------------------------------------------
  */

  const adminPassword =
    generateRandomPassword(12);

  /*
  |--------------------------------------------------------------------------
  | HASH PASSWORD
  |--------------------------------------------------------------------------
  */

  const passwordHash =
    await bcrypt.hash(
      adminPassword,
      12
    );

  /*
  |--------------------------------------------------------------------------
  | ENCRYPT ORIGINAL PASSWORD
  |--------------------------------------------------------------------------
  */

  const encryptedPassword =
    encryptPassword(
      adminPassword
    );

  /*
  |--------------------------------------------------------------------------
  | CREATE ADMIN + BUSINESS
  |--------------------------------------------------------------------------
  */

  const result =
    await prisma.$transaction(
      async (tx) => {
        /*
        |--------------------------------------------------------------------------
        | CREATE ADMIN
        |--------------------------------------------------------------------------
        */

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

              // Super Admin created
              // admin is active
              status: "ACTIVE",

              // Assign Super Admin
              parentId:
                superAdminId,

              isFirstLogin: true,
            },
          });

        /*
        |--------------------------------------------------------------------------
        | CREATE BUSINESS
        |--------------------------------------------------------------------------
        */

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

        /*
        |--------------------------------------------------------------------------
        | DEBUG
        |--------------------------------------------------------------------------
        */

        console.log(
          "Admin Created:",
          {
            id: admin.id,
            username:
              admin.username,

            encryptedPassword:
              admin.encryptedPassword
                ? "SAVED"
                : "NULL",
          }
        );

        return {
          admin,
          business,
        };
      }
    );

  /*
  |--------------------------------------------------------------------------
  | RESPONSE
  |--------------------------------------------------------------------------
  */

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

    credentials: {
      username,
      adminPassword,
    },
  };
};

/*
|--------------------------------------------------------------------------
| GET ALL ADMINS
|--------------------------------------------------------------------------
*/

const getAllAdmins = async (
  superAdminId,
  query = {}
) => {
  await verifySuperAdmin(superAdminId);

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

  const skip = (page - 1) * limit;

  const search = query.search?.trim();

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
    where.status = query.status;
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
        },
      }),

      prisma.user.count({
        where,
      }),
    ]);

  const totalPages = Math.ceil(
    total / limit
  );

  return {
    admins,

    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
};

/*
|--------------------------------------------------------------------------
| GET SINGLE ADMIN
|--------------------------------------------------------------------------
*/

const getAdminById = async (
  superAdminId,
  adminId
) => {
  await verifySuperAdmin(superAdminId);

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
      },
    });

  if (!admin) {
    throw new Error("Admin not found");
  }

  let password = null;

  if (admin.encryptedPassword) {
    password = decryptPassword(
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

/*
|--------------------------------------------------------------------------
| EXPORT
|--------------------------------------------------------------------------
*/

export default {
  registerAdmin,
  createAdmin,
  getAllAdmins,
  getAdminById,
};