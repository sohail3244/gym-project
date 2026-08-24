import * as adminSubscriptionService from "../services/adminSubscription.service.js";

/**
 * =========================================================
 * GET AVAILABLE PLANS
 * =========================================================
 */
export const getAvailablePlans = async (
  req,
  res
) => {
  try {
    const plans =
      await adminSubscriptionService.getAvailablePlans();

    return res.status(200).json({
      success: true,
      message: "Available plans fetched successfully",
      data: plans,
    });
  } catch (error) {
    console.error(
      "Get Available Plans Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch plans",
      error: error.message,
    });
  }
};


/**
 * =========================================================
 * GET CURRENT SUBSCRIPTION
 * =========================================================
 */
export const getCurrentSubscription = async (
  req,
  res
) => {
  try {
    const adminId = req.user.id;

    const subscription =
      await adminSubscriptionService.getCurrentSubscription(
        adminId
      );

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "No subscription found",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Current subscription fetched successfully",
      data: subscription,
    });
  } catch (error) {
    console.error(
      "Get Current Subscription Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch current subscription",
      error: error.message,
    });
  }
};


/**
 * =========================================================
 * CREATE SUBSCRIPTION
 * =========================================================
 */
export const createSubscription = async (
  req,
  res
) => {
  try {
    const adminId = req.user.id;

    const subscription =
      await adminSubscriptionService.createSubscription(
        adminId,
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    console.error(
      "Create Admin Subscription Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * =========================================================
 * CANCEL SUBSCRIPTION
 * =========================================================
 */
export const cancelSubscription = async (
  req,
  res
) => {
  try {
    const adminId = req.user.id;

    const subscription =
      await adminSubscriptionService.cancelSubscription(
        adminId
      );

    return res.status(200).json({
      success: true,
      message:
        "Subscription cancelled successfully",
      data: subscription,
    });
  } catch (error) {
    console.error(
      "Cancel Subscription Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * =========================================================
 * RENEW SUBSCRIPTION
 * =========================================================
 */
export const renewSubscription = async (
  req,
  res
) => {
  try {
    const adminId = req.user.id;

    const subscription =
      await adminSubscriptionService.renewSubscription(
        adminId,
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Subscription renewed successfully",
      data: subscription,
    });
  } catch (error) {
    console.error(
      "Renew Subscription Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * =========================================================
 * GET PAYMENT HISTORY
 * =========================================================
 */
export const getSubscriptionPayments = async (
  req,
  res
) => {
  try {
    const adminId = req.user.id;

    const payments =
      await adminSubscriptionService.getSubscriptionPayments(
        adminId
      );

    return res.status(200).json({
      success: true,
      message:
        "Subscription payments fetched successfully",
      data: payments,
    });
  } catch (error) {
    console.error(
      "Get Subscription Payments Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch subscription payments",
      error: error.message,
    });
  }
};