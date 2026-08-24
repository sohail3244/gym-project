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

router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getDashboard
);

router.get(
  "/stats",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getDashboardStats
);

router.get(
  "/recent-payments",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getRecentPayments
);

router.get(
  "/recent-subscriptions",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getRecentSubscriptions
);

export default router;