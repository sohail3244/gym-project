import MembershipPlanService from "../services/membershipPlan.service.js";

export const createMembershipPlan = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result =
      await MembershipPlanService.createMembershipPlan(
        adminId,
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Membership plan created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Create Membership Plan Error:", error);

    return res.status(400).json({
      success: false,
      message:
        error.message || "Failed to create membership plan",
    });
  }
};

export const getMembershipPlans = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result =
      await MembershipPlanService.getMembershipPlans(
        adminId,
        req.query
      );

    return res.status(200).json({
      success: true,
      message: "Membership plans fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get Membership Plans Error:", error);

    return res.status(400).json({
      success: false,
      message:
        error.message || "Failed to fetch membership plans",
    });
  }
};

export const getMembershipPlanById = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Membership plan ID is required",
      });
    }

    const result =
      await MembershipPlanService.getMembershipPlanById(
        adminId,
        id
      );

    return res.status(200).json({
      success: true,
      message: "Membership plan fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get Membership Plan Error:", error);

    return res.status(404).json({
      success: false,
      message:
        error.message || "Membership plan not found",
    });
  }
};

export const updateMembershipPlan = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Membership plan ID is required",
      });
    }

    const result =
      await MembershipPlanService.updateMembershipPlan(
        adminId,
        id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Membership plan updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Update Membership Plan Error:", error);

    return res.status(400).json({
      success: false,
      message:
        error.message || "Failed to update membership plan",
    });
  }
};

export const updateMembershipPlanStatus = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Membership plan ID is required",
      });
    }

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    const result =
      await MembershipPlanService.updateMembershipPlanStatus(
        adminId,
        id,
        status
      );

    return res.status(200).json({
      success: true,
      message: "Membership plan status updated successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Update Membership Plan Status Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update membership plan status",
    });
  }
};

export const deleteMembershipPlan = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Membership plan ID is required",
      });
    }

    const result =
      await MembershipPlanService.deleteMembershipPlan(
        adminId,
        id
      );

    return res.status(200).json({
      success: true,
      message: "Membership plan deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error("Delete Membership Plan Error:", error);

    return res.status(400).json({
      success: false,
      message:
        error.message || "Failed to delete membership plan",
    });
  }
};