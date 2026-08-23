import express from "express";

import {
  registerAdmin,
  createAdmin,
  getAllAdmins,
  getAdminById,
} from "../controllers/admin.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/register",
  registerAdmin
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  createAdmin
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  getAllAdmins
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  getAdminById
);

export default router;