import express from "express";

import {
  createPayment,
  verifyRegistrationPayment,
  getPayments,
  getPaymentById,
  updatePaymentStatus,
  deletePayment,
  downloadPaymentReceipt,
} from "../controllers/payment.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

// ---------------------------------------------------------
// PUBLIC REGISTRATION PAYMENT VERIFICATION
// ---------------------------------------------------------

router.post(
  "/registration/verify",
  verifyRegistrationPayment
);

// ---------------------------------------------------------
// PUBLIC PAYMENT RECEIPT
// ---------------------------------------------------------

router.get(
  "/:id/receipt",
  downloadPaymentReceipt
);

// ---------------------------------------------------------
// PROTECTED PAYMENT ROUTES
// ---------------------------------------------------------

router.use(authMiddleware);

router.use(
  roleMiddleware("SUPER_ADMIN")
);

router.post(
  "/",
  createPayment
);

router.get(
  "/",
  getPayments
);

router.get(
  "/:id",
  getPaymentById
);

router.patch(
  "/:id/status",
  updatePaymentStatus
);

router.delete(
  "/:id",
  deletePayment
);

export default router;