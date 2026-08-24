import express from "express";

import {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  updateStaffStatus,
  deleteStaff,
} from "../controllers/staff.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  createStaff
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAllStaff
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getStaffById
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateStaff
);

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateStaffStatus
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  deleteStaff
);

export default router;