
import express from "express";

import {
  getDashboard,
  getDashboardStats,
  getRecentPayments,
  getRecentSubscriptions,
} from "../controllers/dashboard.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);
router.use(roleMiddleware("SUPER_ADMIN", "ADMIN"));

router.get("/", getDashboard);
router.get("/stats", getDashboardStats);
router.get("/recent-payments", getRecentPayments);
router.get("/recent-subscriptions", getRecentSubscriptions);

export default router;
