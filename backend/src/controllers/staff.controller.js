import StaffService from "../services/staff.service.js";

export const createStaff = async (req, res) => {
  try {
    const staff = await StaffService.createStaff(
      req.user.id,
      req.body
    );

    return res.status(201).json({
      success: true,
      message: "Staff created successfully",
      data: staff,
    });
  } catch (error) {
    console.error("Create Staff Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to create staff",
    });
  }
};

export const getAllStaff = async (req, res) => {
  try {
    const result = await StaffService.getAllStaff(
      req.user.id,
      req.query
    );

    return res.status(200).json({
      success: true,
      message: "Staff fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get All Staff Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch staff",
    });
  }
};

export const getStaffById = async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await StaffService.getStaffById(
      req.user.id,
      id
    );

    return res.status(200).json({
      success: true,
      message: "Staff fetched successfully",
      data: staff,
    });
  } catch (error) {
    console.error("Get Staff Error:", error);

    return res.status(404).json({
      success: false,
      message: error.message || "Staff not found",
    });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await StaffService.updateStaff(
      req.user.id,
      id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Staff updated successfully",
      data: staff,
    });
  } catch (error) {
    console.error("Update Staff Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update staff",
    });
  }
};

export const updateStaffStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const staff = await StaffService.updateStaffStatus(
      req.user.id,
      id,
      status
    );

    return res.status(200).json({
      success: true,
      message: "Staff status updated successfully",
      data: staff,
    });
  } catch (error) {
    console.error("Update Staff Status Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update staff status",
    });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await StaffService.deleteStaff(
      req.user.id,
      id
    );

    return res.status(200).json({
      success: true,
      message: "Staff deleted successfully",
      data: result,
    });
  } catch (error) {
    console.error("Delete Staff Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to delete staff",
    });
  }
};