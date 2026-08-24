import express from "express";

import {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  updateMemberStatus,
  deleteMember,
} from "../controllers/member.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  createMember
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAllMembers
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getMemberById
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateMember
);

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateMemberStatus
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  deleteMember
);

export default router;