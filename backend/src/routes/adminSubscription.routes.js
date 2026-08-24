import express from "express";



import {
  getAvailablePlans,
  getCurrentSubscription,
  createSubscription,
  cancelSubscription,
  renewSubscription,
  getSubscriptionPayments,
} from "../controllers/adminSubscription.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

/**
 * =========================================================
 * ADMIN SUBSCRIPTION ROUTES
 * =========================================================
 */

// Get available subscription plans
router.get(
  "/plans",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAvailablePlans
);

// Get current admin subscription
router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getCurrentSubscription
);

// Create new subscription
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  createSubscription
);

// Cancel current subscription
router.patch(
  "/cancel",
  authMiddleware,
  roleMiddleware("ADMIN"),
  cancelSubscription
);

// Renew subscription
router.patch(
  "/renew",
  authMiddleware,
  roleMiddleware("ADMIN"),
  renewSubscription
);

// Payment history
router.get(
  "/payments",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getSubscriptionPayments
);

export default router;