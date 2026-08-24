import * as reportsService from "../services/reports.service.js";

/**
 * =========================================================
 * DASHBOARD REPORT
 * =========================================================
 */
export const getDashboardReport = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result =
      await reportsService.getDashboardReport(adminId);

    return res.status(200).json({
      success: true,
      message: "Dashboard report fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Dashboard Report Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard report",
      error: error.message,
    });
  }
};


/**
 * =========================================================
 * MEMBERS REPORT
 * =========================================================
 */
export const getMembersReport = async (req, res) => {
  try {
    const adminId = req.user.id;

    const filters = {
      status: req.query.status,
    };

    const result =
      await reportsService.getMembersReport(
        adminId,
        filters
      );

    return res.status(200).json({
      success: true,
      message: "Members report fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Members Report Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch members report",
      error: error.message,
    });
  }
};


/**
 * =========================================================
 * MEMBERSHIP REPORT
 * =========================================================
 */
export const getMembershipsReport = async (req, res) => {
  try {
    const adminId = req.user.id;

    const filters = {
      status: req.query.status,
      planId: req.query.planId,
    };

    const result =
      await reportsService.getMembershipsReport(
        adminId,
        filters
      );

    return res.status(200).json({
      success: true,
      message: "Membership report fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Membership Report Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch membership report",
      error: error.message,
    });
  }
};


/**
 * =========================================================
 * PAYMENT REPORT
 * =========================================================
 */
export const getPaymentsReport = async (req, res) => {
  try {
    const adminId = req.user.id;

    const filters = {
      status: req.query.status,
      paymentMethod: req.query.paymentMethod,
      memberId: req.query.memberId,
      fromDate: req.query.fromDate,
      toDate: req.query.toDate,
    };

    const result =
      await reportsService.getPaymentsReport(
        adminId,
        filters
      );

    return res.status(200).json({
      success: true,
      message: "Payment report fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Payment Report Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch payment report",
      error: error.message,
    });
  }
};


/**
 * =========================================================
 * STAFF ATTENDANCE REPORT
 * =========================================================
 */
export const getStaffAttendanceReport = async (req, res) => {
  try {
    const adminId = req.user.id;

    const filters = {
      staffId: req.query.staffId,
      status: req.query.status,
      fromDate: req.query.fromDate,
      toDate: req.query.toDate,
    };

    const result =
      await reportsService.getStaffAttendanceReport(
        adminId,
        filters
      );

    return res.status(200).json({
      success: true,
      message: "Staff attendance report fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Staff Attendance Report Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch staff attendance report",
      error: error.message,
    });
  }
};


/**
 * =========================================================
 * REVENUE REPORT
 * =========================================================
 */
export const getRevenueReport = async (req, res) => {
  try {
    const adminId = req.user.id;

    const filters = {
      fromDate: req.query.fromDate,
      toDate: req.query.toDate,
    };

    const result =
      await reportsService.getRevenueReport(
        adminId,
        filters
      );

    return res.status(200).json({
      success: true,
      message: "Revenue report fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Revenue Report Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch revenue report",
      error: error.message,
    });
  }
};