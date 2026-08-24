import DashboardService from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    const result = await DashboardService.getDashboard(
      req.user.id
    );

    return res.status(200).json({
      success: true,
      message: "Dashboard fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get Dashboard Error:", error);

    return res.status(400).json({
      success: false,
      message:
        error.message || "Failed to fetch dashboard",
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const result =
      await DashboardService.getDashboardStats(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      message: "Dashboard stats fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Dashboard Stats Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch dashboard stats",
    });
  }
};

export const getRecentPayments = async (req, res) => {
  try {
    const result =
      await DashboardService.getRecentPayments(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      message: "Recent payments fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Recent Payments Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch recent payments",
    });
  }
};

export const getRecentSubscriptions = async (
  req,
  res
) => {
  try {
    const result =
      await DashboardService.getRecentSubscriptions(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      message:
        "Recent subscriptions fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Recent Subscriptions Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch recent subscriptions",
    });
  }
};