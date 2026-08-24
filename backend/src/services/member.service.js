import prisma from "../prisma/prisma.js";

const verifyAdmin = async (adminId) => {
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
      role: "ADMIN",
    },
    select: {
      id: true,
      status: true,
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  if (admin.status !== "ACTIVE") {
    throw new Error("Admin account is not active");
  }

  return admin;
};

const createMember = async (adminId, data) => {
  await verifyAdmin(adminId);

  const {
    name,
    mobileNumber,
    email,
    gender,
    dateOfBirth,
    address,
    city,
    state,
    pincode,
  } = data;

  if (!name || !mobileNumber) {
    throw new Error(
      "Name and mobile number are required"
    );
  }

  if (email) {
    const existingMember =
      await prisma.member.findFirst({
        where: {
          adminId,
          email,
        },
      });

    if (existingMember) {
      throw new Error(
        "Member with this email already exists"
      );
    }
  }

  const existingMobile =
    await prisma.member.findFirst({
      where: {
        adminId,
        mobileNumber,
      },
    });

  if (existingMobile) {
    throw new Error(
      "Member with this mobile number already exists"
    );
  }

  const member = await prisma.member.create({
    data: {
      adminId,
      name: name.trim(),
      mobileNumber: mobileNumber.trim(),
      email: email || null,
      gender: gender || null,
      dateOfBirth: dateOfBirth
        ? new Date(dateOfBirth)
        : null,
      address: address || null,
      city: city || null,
      state: state || null,
      pincode: pincode || null,
      status: "ACTIVE",
    },
  });

  return member;
};

const getAllMembers = async (adminId, query) => {
  await verifyAdmin(adminId);

  const {
    search,
    status,
    page = 1,
    limit = 10,
  } = query || {};

  const pageNumber = Math.max(
    Number(page) || 1,
    1
  );

  const limitNumber = Math.min(
    Math.max(Number(limit) || 10, 1),
    100
  );

  const skip =
    (pageNumber - 1) * limitNumber;

  const where = {
    adminId,
  };

  if (status) {
    where.status = status;
  }

  if (search) {
    where.OR = [
      {
        name: {
          contains: search,
        },
      },
      {
        mobileNumber: {
          contains: search,
        },
      },
      {
        email: {
          contains: search,
        },
      },
    ];
  }

  const [members, total] =
    await prisma.$transaction([
      prisma.member.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limitNumber,
      }),

      prisma.member.count({
        where,
      }),
    ]);

  return {
    members,
    pagination: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(
        total / limitNumber
      ),
    },
  };
};

const getMemberById = async (
  adminId,
  memberId
) => {
  await verifyAdmin(adminId);

  const member =
    await prisma.member.findFirst({
      where: {
        id: memberId,
        adminId,
      },
    });

  if (!member) {
    throw new Error("Member not found");
  }

  return member;
};

const updateMember = async (
  adminId,
  memberId,
  data
) => {
  await verifyAdmin(adminId);

  const member =
    await prisma.member.findFirst({
      where: {
        id: memberId,
        adminId,
      },
    });

  if (!member) {
    throw new Error("Member not found");
  }

  const {
    name,
    mobileNumber,
    email,
    gender,
    dateOfBirth,
    address,
    city,
    state,
    pincode,
  } = data;

  if (mobileNumber) {
    const existingMobile =
      await prisma.member.findFirst({
        where: {
          adminId,
          mobileNumber,
          NOT: {
            id: memberId,
          },
        },
      });

    if (existingMobile) {
      throw new Error(
        "Mobile number already exists"
      );
    }
  }

  if (email) {
    const existingEmail =
      await prisma.member.findFirst({
        where: {
          adminId,
          email,
          NOT: {
            id: memberId,
          },
        },
      });

    if (existingEmail) {
      throw new Error(
        "Email already exists"
      );
    }
  }

  const updateData = {};

  if (name !== undefined) {
    if (!name.trim()) {
      throw new Error(
        "Name cannot be empty"
      );
    }

    updateData.name = name.trim();
  }

  if (mobileNumber !== undefined) {
    updateData.mobileNumber =
      mobileNumber.trim();
  }

  if (email !== undefined) {
    updateData.email =
      email === "" ? null : email;
  }

  if (gender !== undefined) {
    updateData.gender =
      gender === "" ? null : gender;
  }

  if (dateOfBirth !== undefined) {
    updateData.dateOfBirth =
      dateOfBirth
        ? new Date(dateOfBirth)
        : null;
  }

  if (address !== undefined) {
    updateData.address =
      address === "" ? null : address;
  }

  if (city !== undefined) {
    updateData.city =
      city === "" ? null : city;
  }

  if (state !== undefined) {
    updateData.state =
      state === "" ? null : state;
  }

  if (pincode !== undefined) {
    updateData.pincode =
      pincode === "" ? null : pincode;
  }

  if (Object.keys(updateData).length === 0) {
    throw new Error(
      "No member data provided"
    );
  }

  return prisma.member.update({
    where: {
      id: memberId,
    },
    data: updateData,
  });
};

const updateMemberStatus = async (
  adminId,
  memberId,
  status
) => {
  await verifyAdmin(adminId);

  const allowedStatuses = [
    "ACTIVE",
    "INACTIVE",
    "SUSPENDED",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error(
      "Invalid member status"
    );
  }

  const member =
    await prisma.member.findFirst({
      where: {
        id: memberId,
        adminId,
      },
    });

  if (!member) {
    throw new Error("Member not found");
  }

  return prisma.member.update({
    where: {
      id: memberId,
    },
    data: {
      status,
    },
  });
};

const deleteMember = async (
  adminId,
  memberId
) => {
  await verifyAdmin(adminId);

  const member =
    await prisma.member.findFirst({
      where: {
        id: memberId,
        adminId,
      },
    });

  if (!member) {
    throw new Error("Member not found");
  }

  await prisma.member.delete({
    where: {
      id: memberId,
    },
  });

  return {
    id: memberId,
  };
};

export default {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  updateMemberStatus,
  deleteMember,
};