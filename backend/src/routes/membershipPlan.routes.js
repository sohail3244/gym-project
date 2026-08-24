import express from "express";

import {
  createMembershipPlan,
  getMembershipPlans,
  getMembershipPlanById,
  updateMembershipPlan,
  updateMembershipPlanStatus,
  deleteMembershipPlan,
} from "../controllers/membershipPlan.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  createMembershipPlan
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getMembershipPlans
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getMembershipPlanById
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateMembershipPlan
);

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateMembershipPlanStatus
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  deleteMembershipPlan
);

export default router;