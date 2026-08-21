import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../prisma/prisma.js";

/*
|--------------------------------------------------------------------------
| Generate JWT Access Token
|--------------------------------------------------------------------------
*/

const generateAccessToken = (user) => {
  if (!process.env.JWT_ACCESS_SECRET) {
    throw new Error(
      "JWT_ACCESS_SECRET is not configured"
    );
  }

  return jwt.sign(
    {
      id: user.id,
      role: user.role,
      username: user.username,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn:
        process.env.JWT_ACCESS_EXPIRES_IN || "1d",
    }
  );
};

/*
|--------------------------------------------------------------------------
| LOGIN
|--------------------------------------------------------------------------
*/

const login = async ({
  username,
  password,
}) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },

    include: {
      business: true,
    },
  });

  if (!user) {
    throw new Error(
      "Invalid username or password"
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Check Account Status
  |--------------------------------------------------------------------------
  */

  if (user.status === "PENDING") {
    throw new Error(
      "Your account is waiting for Super Admin approval"
    );
  }

  if (user.status !== "ACTIVE") {
    throw new Error(
      "Your account is not active"
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Verify Password
  |--------------------------------------------------------------------------
  */

  const isPasswordValid =
    await bcrypt.compare(
      password,
      user.passwordHash
    );

  if (!isPasswordValid) {
    throw new Error(
      "Invalid username or password"
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Generate Access Token
  |--------------------------------------------------------------------------
  */

  const accessToken =
    generateAccessToken(user);

  /*
  |--------------------------------------------------------------------------
  | Return User
  |--------------------------------------------------------------------------
  */

  return {
    accessToken,

    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      status: user.status,
      parentId: user.parentId,
      isFirstLogin: user.isFirstLogin,

      business: user.business
        ? {
            id: user.business.id,
            businessName:
              user.business.businessName,
            businessType:
              user.business.businessType,
            mobileNumber:
              user.business.mobileNumber,
            email: user.business.email,
            address:
              user.business.address,
            city: user.business.city,
            state: user.business.state,
            pincode:
              user.business.pincode,
          }
        : null,
    },
  };
};

/*
|--------------------------------------------------------------------------
| GET CURRENT USER
|--------------------------------------------------------------------------
*/

const getMe = async (userId) => {
  const user =
    await prisma.user.findUnique({
      where: {
        id: userId,
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

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

/*
|--------------------------------------------------------------------------
| EXPORT
|--------------------------------------------------------------------------
*/

export default {
  login,
  getMe,
};