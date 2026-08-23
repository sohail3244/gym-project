import SubscriptionService from "../services/subscription.service.js";

export const createSubscription = async (
  req,
  res
) => {
  try {
    const {
      userId,
      planId,
      startDate,
      autoRenew,
    } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    if (!planId) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    if (
      startDate &&
      isNaN(new Date(startDate).getTime())
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid start date",
      });
    }

    const subscription =
      await SubscriptionService.createSubscription({
        userId,
        planId,
        startDate,
        autoRenew,
      });

    return res.status(201).json({
      success: true,
      message:
        "Subscription created successfully",
      data: {
        subscription,
      },
    });
  } catch (error) {
    console.error(
      "Create Subscription Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to create subscription",
    });
  }
};

export const getSubscriptions = async (
  req,
  res
) => {
  try {
    const {
      status,
      userId,
      planId,
      search,
    } = req.query;

    const subscriptions =
      await SubscriptionService.getSubscriptions({
        status,
        userId,
        planId,
        search,
      });

    return res.status(200).json({
      success: true,
      message:
        "Subscriptions fetched successfully",
      data: {
        subscriptions,
      },
    });
  } catch (error) {
    console.error(
      "Get Subscriptions Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch subscriptions",
    });
  }
};

export const getSubscriptionById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const subscription =
      await SubscriptionService.getSubscriptionById(
        id
      );

    return res.status(200).json({
      success: true,
      message:
        "Subscription fetched successfully",
      data: {
        subscription,
      },
    });
  } catch (error) {
    console.error(
      "Get Subscription Error:",
      error
    );

    return res.status(404).json({
      success: false,
      message:
        error.message ||
        "Subscription not found",
    });
  }
};

export const updateSubscriptionStatus = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message:
          "Subscription status is required",
      });
    }

    const validStatuses = [
      "PENDING",
      "ACTIVE",
      "EXPIRED",
      "CANCELLED",
      "SUSPENDED",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid subscription status",
      });
    }

    const subscription =
      await SubscriptionService.updateSubscriptionStatus(
        id,
        status
      );

    return res.status(200).json({
      success: true,
      message:
        "Subscription status updated successfully",
      data: {
        subscription,
      },
    });
  } catch (error) {
    console.error(
      "Update Subscription Status Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update subscription status",
    });
  }
};

export const updateAutoRenew = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { autoRenew } = req.body;

    if (typeof autoRenew !== "boolean") {
      return res.status(400).json({
        success: false,
        message:
          "autoRenew must be a boolean",
      });
    }

    const subscription =
      await SubscriptionService.updateAutoRenew(
        id,
        autoRenew
      );

    return res.status(200).json({
      success: true,
      message:
        "Auto renew updated successfully",
      data: {
        subscription,
      },
    });
  } catch (error) {
    console.error(
      "Update Auto Renew Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update auto renew",
    });
  }
};

export const cancelSubscription = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const subscription =
      await SubscriptionService.cancelSubscription(
        id
      );

    return res.status(200).json({
      success: true,
      message:
        "Subscription cancelled successfully",
      data: {
        subscription,
      },
    });
  } catch (error) {
    console.error(
      "Cancel Subscription Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to cancel subscription",
    });
  }
};

export const deleteSubscription = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const result =
      await SubscriptionService.deleteSubscription(
        id
      );

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        id: result.id,
      },
    });
  } catch (error) {
    console.error(
      "Delete Subscription Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to delete subscription",
    });
  }
};