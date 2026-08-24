import MemberPaymentService from "../services/memberPayment.service.js";

export const createMemberPayment = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result =
      await MemberPaymentService.createMemberPayment(
        adminId,
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Member payment recorded successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Create Member Payment Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to record member payment",
    });
  }
};

export const getMemberPayments = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result =
      await MemberPaymentService.getMemberPayments(
        adminId,
        req.query
      );

    return res.status(200).json({
      success: true,
      message: "Member payments fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Member Payments Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch member payments",
    });
  }
};

export const getMemberPaymentById = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Payment ID is required",
      });
    }

    const result =
      await MemberPaymentService.getMemberPaymentById(
        adminId,
        id
      );

    return res.status(200).json({
      success: true,
      message: "Member payment fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Member Payment Error:",
      error
    );

    return res.status(404).json({
      success: false,
      message:
        error.message || "Member payment not found",
    });
  }
};

export const getPaymentsByMember = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { memberId } = req.params;

    if (!memberId) {
      return res.status(400).json({
        success: false,
        message: "Member ID is required",
      });
    }

    const result =
      await MemberPaymentService.getPaymentsByMember(
        adminId,
        memberId
      );

    return res.status(200).json({
      success: true,
      message: "Member payments fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Member Payments By Member Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch member payments",
    });
  }
};

export const updateMemberPayment = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Payment ID is required",
      });
    }

    const result =
      await MemberPaymentService.updateMemberPayment(
        adminId,
        id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Member payment updated successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Update Member Payment Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update member payment",
    });
  }
};

export const updateMemberPaymentStatus = async (
  req,
  res
) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;
    const { status } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Payment ID is required",
      });
    }

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    const result =
      await MemberPaymentService.updateMemberPaymentStatus(
        adminId,
        id,
        status
      );

    return res.status(200).json({
      success: true,
      message: "Payment status updated successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Update Member Payment Status Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update payment status",
    });
  }
};

export const deleteMemberPayment = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Payment ID is required",
      });
    }

    const result =
      await MemberPaymentService.deleteMemberPayment(
        adminId,
        id
      );

    return res.status(200).json({
      success: true,
      message: "Member payment deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Delete Member Payment Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to delete member payment",
    });
  }
};

export const getPaymentSummary = async (req, res) => {
  try {
    const adminId = req.user.id;

    const result =
      await MemberPaymentService.getPaymentSummary(
        adminId,
        req.query
      );

    return res.status(200).json({
      success: true,
      message: "Payment summary fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Payment Summary Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch payment summary",
    });
  }
};