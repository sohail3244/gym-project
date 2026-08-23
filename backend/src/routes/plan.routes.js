import express from "express";

import {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  updatePlanStatus,
  deletePlan,
} from "../controllers/plan.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);
router.use(roleMiddleware("SUPER_ADMIN"));

router.post("/", createPlan);

router.get("/", getPlans);

router.get("/:id", getPlanById);

router.patch("/:id", updatePlan);

router.patch("/:id/status", updatePlanStatus);

router.delete("/:id", deletePlan);

export default router;