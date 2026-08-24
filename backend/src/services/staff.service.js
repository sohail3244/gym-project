import prisma from "../prisma/prisma.js";

const createStaff = async (adminId, data) => {
  const {
    name,
    mobileNumber,
    email,
    staffType,
    designation,
    address,
    city,
    state,
    pincode,
  } = data;

  if (!name || !mobileNumber || !staffType) {
    throw new Error(
      "Name, mobile number and staff type are required"
    );
  }

  const allowedTypes = [
    "TRAINER",
    "RECEPTIONIST",
    "MANAGER",
    "CLEANER",
    "SECURITY",
    "ACCOUNTANT",
    "OTHER",
  ];

  if (!allowedTypes.includes(staffType)) {
    throw new Error("Invalid staff type");
  }

  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
    },
  });

  if (!admin || admin.role !== "ADMIN") {
    throw new Error("Admin not found");
  }

  if (admin.status !== "ACTIVE") {
    throw new Error("Admin account is not active");
  }

  const staff = await prisma.staff.create({
    data: {
      adminId,
      name,
      mobileNumber,
      email: email || null,
      staffType,
      designation: designation || null,
      address: address || null,
      city: city || null,
      state: state || null,
      pincode: pincode || null,
      username: null,
      passwordHash: null,
    },
    select: {
      id: true,
      adminId: true,
      name: true,
      mobileNumber: true,
      email: true,
      staffType: true,
      designation: true,
      address: true,
      city: true,
      state: true,
      pincode: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return staff;
};

const getAllStaff = async (adminId, query = {}) => {
  const {
    search,
    status,
    staffType,
    page = 1,
    limit = 10,
  } = query;

  const pageNumber = Math.max(Number(page) || 1, 1);
  const limitNumber = Math.min(
    Math.max(Number(limit) || 10, 1),
    100
  );

  const where = {
    adminId,
  };

  if (status) {
    where.status = status;
  }

  if (staffType) {
    where.staffType = staffType;
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
      {
        designation: {
          contains: search,
        },
      },
    ];
  }

  const skip = (pageNumber - 1) * limitNumber;

  const [staff, total] = await prisma.$transaction([
    prisma.staff.findMany({
      where,
      skip,
      take: limitNumber,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        adminId: true,
        name: true,
        mobileNumber: true,
        email: true,
        staffType: true,
        designation: true,
        address: true,
        city: true,
        state: true,
        pincode: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    }),

    prisma.staff.count({
      where,
    }),
  ]);

  return {
    staff,
    pagination: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(total / limitNumber),
    },
  };
};

const getStaffById = async (adminId, staffId) => {
  const staff = await prisma.staff.findFirst({
    where: {
      id: staffId,
      adminId,
    },
    select: {
      id: true,
      adminId: true,
      name: true,
      mobileNumber: true,
      email: true,
      staffType: true,
      designation: true,
      address: true,
      city: true,
      state: true,
      pincode: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!staff) {
    throw new Error("Staff not found");
  }

  return staff;
};

const updateStaff = async (adminId, staffId, data) => {
  const existingStaff = await prisma.staff.findFirst({
    where: {
      id: staffId,
      adminId,
    },
  });

  if (!existingStaff) {
    throw new Error("Staff not found");
  }

  const {
    name,
    mobileNumber,
    email,
    staffType,
    designation,
    address,
    city,
    state,
    pincode,
  } = data;

  const allowedTypes = [
    "TRAINER",
    "RECEPTIONIST",
    "MANAGER",
    "CLEANER",
    "SECURITY",
    "ACCOUNTANT",
    "OTHER",
  ];

  if (staffType && !allowedTypes.includes(staffType)) {
    throw new Error("Invalid staff type");
  }

  const updateData = {};

  if (name !== undefined) {
    updateData.name = name;
  }

  if (mobileNumber !== undefined) {
    updateData.mobileNumber = mobileNumber;
  }

  if (email !== undefined) {
    updateData.email = email || null;
  }

  if (staffType !== undefined) {
    updateData.staffType = staffType;
  }

  if (designation !== undefined) {
    updateData.designation = designation || null;
  }

  if (address !== undefined) {
    updateData.address = address || null;
  }

  if (city !== undefined) {
    updateData.city = city || null;
  }

  if (state !== undefined) {
    updateData.state = state || null;
  }

  if (pincode !== undefined) {
    updateData.pincode = pincode || null;
  }

  const staff = await prisma.staff.update({
    where: {
      id: staffId,
    },
    data: updateData,
    select: {
      id: true,
      adminId: true,
      name: true,
      mobileNumber: true,
      email: true,
      staffType: true,
      designation: true,
      address: true,
      city: true,
      state: true,
      pincode: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return staff;
};

const updateStaffStatus = async (
  adminId,
  staffId,
  status
) => {
  const allowedStatuses = [
    "ACTIVE",
    "INACTIVE",
    "SUSPENDED",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error(
      "Invalid status. Allowed values: ACTIVE, INACTIVE, SUSPENDED"
    );
  }

  const existingStaff = await prisma.staff.findFirst({
    where: {
      id: staffId,
      adminId,
    },
  });

  if (!existingStaff) {
    throw new Error("Staff not found");
  }

  return await prisma.staff.update({
    where: {
      id: staffId,
    },
    data: {
      status,
    },
    select: {
      id: true,
      adminId: true,
      name: true,
      mobileNumber: true,
      email: true,
      staffType: true,
      designation: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const deleteStaff = async (adminId, staffId) => {
  const existingStaff = await prisma.staff.findFirst({
    where: {
      id: staffId,
      adminId,
    },
  });

  if (!existingStaff) {
    throw new Error("Staff not found");
  }

  await prisma.staff.delete({
    where: {
      id: staffId,
    },
  });

  return {
    id: staffId,
  };
};

export default {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  updateStaffStatus,
  deleteStaff,
};