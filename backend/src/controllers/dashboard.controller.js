
import DashboardService from "../services/dashboard.service.js";

const getUserId = (req) => req.user?._id ?? req.user?.id;

const handleError = (res, error, fallbackMessage) => {
  console.error("Dashboard error:", error);

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.statusCode
      ? error.message
      : fallbackMessage,
  });
};

/**
 * GET /dashboard
 */
export const getDashboard = async (req, res) => {
  try {
    const userId = getUserId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const data = await DashboardService.getDashboard(userId);

    return res.status(200).json({
      success: true,
      message: "Dashboard fetched successfully",
      data,
    });
  } catch (error) {
    return handleError(
      res,
      error,
      "Failed to fetch dashboard"
    );
  }
};

/**
 * GET /dashboard/stats
 */
export const getDashboardStats = async (req, res) => {
  try {
    const userId = getUserId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const data = await DashboardService.getDashboardStats(userId);

    return res.status(200).json({
      success: true,
      message: "Dashboard stats fetched successfully",
      data,
    });
  } catch (error) {
    return handleError(
      res,
      error,
      "Failed to fetch dashboard stats"
    );
  }
};

/**
 * GET /dashboard/recent-payments
 */
export const getRecentPayments = async (req, res) => {
  try {
    const userId = getUserId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const data = await DashboardService.getRecentPayments(userId);

    return res.status(200).json({
      success: true,
      message: "Recent member payments fetched successfully",
      data,
    });
  } catch (error) {
    return handleError(
      res,
      error,
      "Failed to fetch recent payments"
    );
  }
};

/**
 * GET /dashboard/recent-subscriptions
 */
export const getRecentSubscriptions = async (req, res) => {
  try {
    const userId = getUserId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const data =
      await DashboardService.getRecentSubscriptions(userId);

    return res.status(200).json({
      success: true,
      message: "Recent memberships fetched successfully",
      data,
    });
  } catch (error) {
    return handleError(
      res,
      error,
      "Failed to fetch recent memberships"
    );
  }
};
