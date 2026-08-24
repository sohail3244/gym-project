import MemberService from "../services/member.service.js";

export const createMember = async (
  req,
  res
) => {
  try {
    const member =
      await MemberService.createMember(
        req.user.id,
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Member created successfully",
      data: member,
    });
  } catch (error) {
    console.error(
      "Create Member Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to create member",
    });
  }
};

export const getAllMembers = async (
  req,
  res
) => {
  try {
    const result =
      await MemberService.getAllMembers(
        req.user.id,
        req.query
      );

    return res.status(200).json({
      success: true,
      message:
        "Members fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get All Members Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch members",
    });
  }
};

export const getMemberById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Member ID is required",
      });
    }

    const member =
      await MemberService.getMemberById(
        req.user.id,
        id
      );

    return res.status(200).json({
      success: true,
      message:
        "Member fetched successfully",
      data: member,
    });
  } catch (error) {
    console.error(
      "Get Member Error:",
      error
    );

    return res.status(404).json({
      success: false,
      message:
        error.message ||
        "Member not found",
    });
  }
};

export const updateMember = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Member ID is required",
      });
    }

    const member =
      await MemberService.updateMember(
        req.user.id,
        id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message:
        "Member updated successfully",
      data: member,
    });
  } catch (error) {
    console.error(
      "Update Member Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update member",
    });
  }
};

export const updateMemberStatus =
  async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!id) {
        return res.status(400).json({
          success: false,
          message:
            "Member ID is required",
        });
      }

      if (!status) {
        return res.status(400).json({
          success: false,
          message:
            "Member status is required",
        });
      }

      const member =
        await MemberService.updateMemberStatus(
          req.user.id,
          id,
          status
        );

      return res.status(200).json({
        success: true,
        message:
          "Member status updated successfully",
        data: member,
      });
    } catch (error) {
      console.error(
        "Update Member Status Error:",
        error
      );

      return res.status(400).json({
        success: false,
        message:
          error.message ||
          "Failed to update member status",
      });
    }
  };

export const deleteMember = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Member ID is required",
      });
    }

    const result =
      await MemberService.deleteMember(
        req.user.id,
        id
      );

    return res.status(200).json({
      success: true,
      message:
        "Member deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Delete Member Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to delete member",
    });
  }
};