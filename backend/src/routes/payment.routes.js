import express from "express";

import {
  createPayment,
  getPayments,
  getPaymentById,
  updatePaymentStatus,
  deletePayment,
} from "../controllers/payment.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.use(
  roleMiddleware("SUPER_ADMIN")
);

router.post("/", createPayment);

router.get("/", getPayments);

router.get("/:id", getPaymentById);

router.patch(
  "/:id/status",
  updatePaymentStatus
);

router.delete("/:id", deletePayment);

export default router;