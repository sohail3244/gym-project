import express from "express";



import {
  getDashboardReport,
  getMembersReport,
  getMembershipsReport,
  getPaymentsReport,
  getStaffAttendanceReport,
  getRevenueReport,
} from "../controllers/reports.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

/**
 * =========================================================
 * ADMIN REPORTS
 * =========================================================
 */

router.get(
  "/dashboard",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getDashboardReport
);

router.get(
  "/members",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getMembersReport
);

router.get(
  "/memberships",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getMembershipsReport
);

router.get(
  "/payments",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getPaymentsReport
);

router.get(
  "/staff-attendance",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getStaffAttendanceReport
);

router.get(
  "/revenue",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getRevenueReport
);

export default router;