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

/*
|--------------------------------------------------------------------------
| Create Plan
|--------------------------------------------------------------------------
| Only SUPER_ADMIN can create a plan
*/
router.post(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  createPlan
);

/*
|--------------------------------------------------------------------------
| Get All Plans
|--------------------------------------------------------------------------
| SUPER_ADMIN + ADMIN can view plans
*/
router.get(
  "/",
  getPlans
);

/*
|--------------------------------------------------------------------------
| Get Plan By ID
|--------------------------------------------------------------------------
| SUPER_ADMIN + ADMIN can view a single plan
*/
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN", "ADMIN"),
  getPlanById
);

/*
|--------------------------------------------------------------------------
| Update Plan
|--------------------------------------------------------------------------
| Only SUPER_ADMIN can update a plan
*/
router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  updatePlan
);

/*
|--------------------------------------------------------------------------
| Update Plan Status
|--------------------------------------------------------------------------
| Only SUPER_ADMIN can change plan status
*/
router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  updatePlanStatus
);

/*
|--------------------------------------------------------------------------
| Delete Plan
|--------------------------------------------------------------------------
| Only SUPER_ADMIN can delete a plan
*/
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  deletePlan
);

export default router;