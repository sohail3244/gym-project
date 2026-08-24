import * as attendanceService from "../services/attendance.service.js";


/**
 * Create Attendance
 */
export const createAttendance = async (req, res) => {
  try {
    const adminId = req.user.id;

    const attendance = await attendanceService.createAttendance(
      adminId,
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      data: attendance,
    });
  } catch (error) {
    console.error("Create Attendance Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * Get All Attendance
 */
export const getAllAttendance = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result = await attendanceService.getAllAttendance(
      adminId,
      req.query
    );

    return res.status(200).json({
      success: true,
      message: "Attendance fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get Attendance Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * Get Attendance By ID
 */
export const getAttendanceById = async (req, res) => {
  try {
    const adminId = req.user.id;

    const attendance = await attendanceService.getAttendanceById(
      adminId,
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Attendance fetched successfully",
      data: attendance,
    });
  } catch (error) {
    console.error("Get Attendance By ID Error:", error);

    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * Update Attendance
 */
export const updateAttendance = async (req, res) => {
  try {
    const adminId = req.user.id;

    const attendance =
      await attendanceService.updateAttendance(
        adminId,
        req.params.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Attendance updated successfully",
      data: attendance,
    });
  } catch (error) {
    console.error("Update Attendance Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * Delete Attendance
 */
export const deleteAttendance = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result = await attendanceService.deleteAttendance(
      adminId,
      req.params.id
    );

    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error("Delete Attendance Error:", error);

    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * Get Staff Attendance
 */
export const getStaffAttendance = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result =
      await attendanceService.getStaffAttendance(
        adminId,
        req.params.staffId,
        req.query
      );

    return res.status(200).json({
      success: true,
      message: "Staff attendance fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get Staff Attendance Error:", error);

    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * Attendance Summary
 */
export const getAttendanceSummary = async (req, res) => {
  try {
    const adminId = req.user.id;

    const summary =
      await attendanceService.getAttendanceSummary(
        adminId,
        req.query
      );

    return res.status(200).json({
      success: true,
      message: "Attendance summary fetched successfully",
      data: summary,
    });
  } catch (error) {
    console.error("Attendance Summary Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};