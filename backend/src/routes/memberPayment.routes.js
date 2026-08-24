import express from "express";

import {
  createMemberPayment,
  getMemberPayments,
  getMemberPaymentById,
  getPaymentsByMember,
  updateMemberPayment,
  updateMemberPaymentStatus,
  deleteMemberPayment,
  getPaymentSummary,
} from "../controllers/memberPayment.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  createMemberPayment
);

router.get(
  "/summary",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getPaymentSummary
);

router.get(
  "/member/:memberId",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getPaymentsByMember
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getMemberPayments
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getMemberPaymentById
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateMemberPayment
);

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateMemberPaymentStatus
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  deleteMemberPayment
);

export default router;