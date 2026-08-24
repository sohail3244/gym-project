import bcrypt from "bcrypt";
import prisma from "../prisma/prisma.js";

const getProfile = async (adminId) => {
  const admin = await prisma.user.findUnique({
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

  return admin;
};

const updateProfile = async (
  adminId,
  data
) => {
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
      role: "ADMIN",
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  const {
    name,
    email,
    password,
  } = data;

  const updateData = {};

  if (name !== undefined) {
    if (!name.trim()) {
      throw new Error("Name cannot be empty");
    }

    updateData.name = name.trim();
  }

  if (email !== undefined) {
    if (email === null || email === "") {
      updateData.email = null;
    } else {
      const existingEmail =
        await prisma.user.findFirst({
          where: {
            email,
            NOT: {
              id: adminId,
            },
          },
        });

      if (existingEmail) {
        throw new Error(
          "Email is already in use"
        );
      }

      updateData.email = email;
    }
  }

  if (password !== undefined) {
    if (password.length < 8) {
      throw new Error(
        "Password must be at least 8 characters"
      );
    }

    updateData.passwordHash =
      await bcrypt.hash(password, 12);

    updateData.isFirstLogin = false;
  }

  if (Object.keys(updateData).length === 0) {
    throw new Error(
      "No profile data provided"
    );
  }

  return prisma.user.update({
    where: {
      id: adminId,
    },
    data: updateData,
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
    },
  });
};

const getBusiness = async (adminId) => {
  const business = await prisma.business.findUnique({
    where: {
      userId: adminId,
    },
    select: {
      id: true,
      userId: true,
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
  });

  if (!business) {
    throw new Error(
      "Business not found"
    );
  }

  return business;
};

const updateBusiness = async (
  adminId,
  data
) => {
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
      role: "ADMIN",
    },
    select: {
      id: true,
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  const business =
    await prisma.business.findUnique({
      where: {
        userId: adminId,
      },
    });

  if (!business) {
    throw new Error(
      "Business not found"
    );
  }

  const {
    businessName,
    businessType,
    mobileNumber,
    email,
    address,
    city,
    state,
    pincode,
  } = data;

  const updateData = {};

  if (businessName !== undefined) {
    if (!businessName.trim()) {
      throw new Error(
        "Business name cannot be empty"
      );
    }

    updateData.businessName =
      businessName.trim();
  }

  if (businessType !== undefined) {
    const allowedBusinessTypes = [
      "GYM",
      "YOGA_STUDIO",
      "DANCE_STUDIO",
      "PILATES_STUDIO",
      "SWIMMING_ACADEMY",
      "SPORTS_CENTER",
      "MIXED_MARTIAL_ARTS_ACADEMY",
      "BADMINTON_ACADEMY",
      "PICKLEBALL_CLUB",
      "ZUMBA_STUDIO",
      "OTHER",
    ];

    if (
      !allowedBusinessTypes.includes(
        businessType
      )
    ) {
      throw new Error(
        "Invalid business type"
      );
    }

    updateData.businessType =
      businessType;
  }

  if (mobileNumber !== undefined) {
    if (!mobileNumber.trim()) {
      throw new Error(
        "Mobile number cannot be empty"
      );
    }

    updateData.mobileNumber =
      mobileNumber.trim();
  }

  if (email !== undefined) {
    updateData.email =
      email === "" ? null : email;
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
      "No business data provided"
    );
  }

  return prisma.business.update({
    where: {
      userId: adminId,
    },
    data: updateData,
    select: {
      id: true,
      userId: true,
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
  });
};

export default {
  getProfile,
  updateProfile,
  getBusiness,
  updateBusiness,
};