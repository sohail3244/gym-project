import "dotenv/config";
import bcrypt from "bcrypt";
import crypto from "crypto";
import prisma from "../src/prisma/prisma.js";

const generateUsername = () => {
  const random = crypto.randomBytes(3).toString("hex").toUpperCase();

  return `superadmin_${random}`;
};

const seed = async () => {
  try {
    console.log("🌱 Seeding started...\n");

    const existingSuperAdmin = await prisma.user.findFirst({
      where: {
        role: "SUPER_ADMIN",
      },
    });

    if (existingSuperAdmin) {
      console.log("⚠️ Super Admin already exists.");
      console.log(`Username: ${existingSuperAdmin.username}`);
      return;
    }

    const username = generateUsername();

    /*
|--------------------------------------------------------------------------
| Generate Random Password
|--------------------------------------------------------------------------
*/

const generateRandomPassword = (length = 12) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "@#$%&*!";

  const randomBytes = crypto.randomBytes(length);

  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters[
      randomBytes[i] % characters.length
    ];
  }

  return password;
};

    const password = "Admin@123";

    const passwordHash = await bcrypt.hash(password, 12);

    const superAdmin = await prisma.user.create({
      data: {
        name: "Super Admin",
        username,
        passwordHash,
        role: "SUPER_ADMIN",
        status: "ACTIVE",
        parentId: null,
        isFirstLogin: true,
      },
    });

    console.log("=================================");
    console.log("✅ SUPER ADMIN CREATED");
    console.log("=================================");
    console.log(`ID       : ${superAdmin.id}`);
    console.log(`Name     : ${superAdmin.name}`);
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);
    console.log(`Role     : ${superAdmin.role}`);
    console.log("=================================");
    console.log("⚠️ Please save these credentials.");
    console.log("=================================\n");
  } catch (error) {
    console.error("❌ Seed failed:");
    console.error(error);

    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seed();