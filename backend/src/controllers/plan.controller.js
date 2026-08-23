import PlanService from "../services/plan.service.js";

export const createPlan = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      billingInterval,
      durationInDays,
      maxMembers,
      maxStaff,
      maxBusinesses,
      features,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Plan name is required",
      });
    }

    if (price === undefined || price === null) {
      return res.status(400).json({
        success: false,
        message: "Plan price is required",
      });
    }

    if (!billingInterval) {
      return res.status(400).json({
        success: false,
        message: "Billing interval is required",
      });
    }

    if (!durationInDays) {
      return res.status(400).json({
        success: false,
        message: "Duration is required",
      });
    }

    if (!["MONTHLY", "YEARLY"].includes(billingInterval)) {
      return res.status(400).json({
        success: false,
        message: "Invalid billing interval",
      });
    }

    const plan = await PlanService.createPlan({
      name,
      description,
      price,
      billingInterval,
      durationInDays,
      maxMembers,
      maxStaff,
      maxBusinesses,
      features,
    });

    return res.status(201).json({
      success: true,
      message: "Plan created successfully",
      data: {
        plan,
      },
    });
  } catch (error) {
    console.error("Create Plan Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to create plan",
    });
  }
};

export const getPlans = async (req, res) => {
  try {
    const {
      status,
      billingInterval,
      search,
    } = req.query;

    const plans = await PlanService.getPlans({
      status,
      billingInterval,
      search,
    });

    return res.status(200).json({
      success: true,
      message: "Plans fetched successfully",
      data: {
        plans,
      },
    });
  } catch (error) {
    console.error("Get Plans Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch plans",
    });
  }
};

export const getPlanById = async (req, res) => {
  try {
    const { id } = req.params;

    const plan = await PlanService.getPlanById(id);

    return res.status(200).json({
      success: true,
      message: "Plan fetched successfully",
      data: {
        plan,
      },
    });
  } catch (error) {
    console.error("Get Plan Error:", error);

    return res.status(404).json({
      success: false,
      message: error.message || "Plan not found",
    });
  }
};

export const updatePlan = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      price,
      billingInterval,
      durationInDays,
      maxMembers,
      maxStaff,
      maxBusinesses,
      features,
    } = req.body;

    if (
      billingInterval &&
      !["MONTHLY", "YEARLY"].includes(billingInterval)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid billing interval",
      });
    }

    const plan = await PlanService.updatePlan(id, {
      name,
      description,
      price,
      billingInterval,
      durationInDays,
      maxMembers,
      maxStaff,
      maxBusinesses,
      features,
    });

    return res.status(200).json({
      success: true,
      message: "Plan updated successfully",
      data: {
        plan,
      },
    });
  } catch (error) {
    console.error("Update Plan Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update plan",
    });
  }
};

export const updatePlanStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["ACTIVE", "INACTIVE"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid plan status",
      });
    }

    const plan = await PlanService.updatePlanStatus(
      id,
      status
    );

    return res.status(200).json({
      success: true,
      message: "Plan status updated successfully",
      data: {
        plan,
      },
    });
  } catch (error) {
    console.error("Update Plan Status Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update plan status",
    });
  }
};

export const deletePlan = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await PlanService.deletePlan(id);

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        id: result.id,
      },
    });
  } catch (error) {
    console.error("Delete Plan Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to delete plan",
    });
  }
};