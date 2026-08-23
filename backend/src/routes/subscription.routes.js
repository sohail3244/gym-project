import express from "express";

import {
  createSubscription,
  getSubscriptions,
  getSubscriptionById,
  updateSubscriptionStatus,
  updateAutoRenew,
  cancelSubscription,
  deleteSubscription,
} from "../controllers/subscription.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.use(
  roleMiddleware("SUPER_ADMIN")
);

router.post("/", createSubscription);

router.get("/", getSubscriptions);

router.get("/:id", getSubscriptionById);

router.patch(
  "/:id/status",
  updateSubscriptionStatus
);

router.patch(
  "/:id/auto-renew",
  updateAutoRenew
);

router.patch(
  "/:id/cancel",
  cancelSubscription
);

router.delete("/:id", deleteSubscription);

export default router;