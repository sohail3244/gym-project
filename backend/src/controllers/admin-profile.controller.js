import AdminProfileService from "../services/admin-profile.service.js";

export const getProfile = async (
  req,
  res
) => {
  try {
    const result =
      await AdminProfileService.getProfile(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      message:
        "Admin profile fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Admin Profile Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch admin profile",
    });
  }
};

export const updateProfile = async (
  req,
  res
) => {
  try {
    const result =
      await AdminProfileService.updateProfile(
        req.user.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message:
        "Admin profile updated successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Update Admin Profile Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update admin profile",
    });
  }
};

export const getBusiness = async (
  req,
  res
) => {
  try {
    const result =
      await AdminProfileService.getBusiness(
        req.user.id
      );

    return res.status(200).json({
      success: true,
      message:
        "Business details fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Get Business Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch business details",
    });
  }
};

export const updateBusiness = async (
  req,
  res
) => {
  try {
    const result =
      await AdminProfileService.updateBusiness(
        req.user.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message:
        "Business details updated successfully",
      data: result,
    });
  } catch (error) {
    console.error(
      "Update Business Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update business details",
    });
  }
};