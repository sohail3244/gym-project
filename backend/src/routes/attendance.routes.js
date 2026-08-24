import express from "express";


import {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
  getStaffAttendance,
  getAttendanceSummary,
} from "../controllers/attendance.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Attendance Routes
|--------------------------------------------------------------------------
| All attendance APIs are only accessible by ADMIN.
|--------------------------------------------------------------------------
*/


// Create / Mark Attendance
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  createAttendance
);


// Get All Attendance
router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAllAttendance
);


// Attendance Summary
router.get(
  "/summary",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAttendanceSummary
);


// Get Attendance For Specific Staff
router.get(
  "/staff/:staffId",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getStaffAttendance
);


// Get Attendance By ID
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getAttendanceById
);


// Update Attendance
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateAttendance
);


// Delete Attendance
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  deleteAttendance
);

export default router;