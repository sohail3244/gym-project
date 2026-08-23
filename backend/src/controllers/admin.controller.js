import AdminService from "../services/admin.service.js";

export const registerAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      mobileNumber,
      businessName,
      businessType,
      address,
      city,
      state,
      pincode,
      planId,
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !mobileNumber ||
      !businessName ||
      !businessType ||
      !planId
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, password, mobile number, business name and business type are required",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    const result = await AdminService.registerAdmin({
      name,
      email,
      password,
      mobileNumber,
      businessName,
      businessType,
      address,
      city,
      state,
      pincode,
      planId,
    });

    return res.status(201).json({
      success: true,
      message:
        "Registration successful. Please complete your payment to activate your account.",
      data: result,
    });
  } catch (error) {
    console.error("Admin Registration Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Registration failed",
    });
  }
};

export const createAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      mobileNumber,
      businessName,
      businessType,
      address,
      city,
      state,
      pincode,
      planId,
      paymentRequired,
    } = req.body;

    if (
      !name ||
      !mobileNumber ||
      !businessName ||
      !businessType ||
      !planId
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, mobile number, business name, business type and plan are required",
      });
    }

    if (typeof paymentRequired !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "paymentRequired must be true or false",
      });
    }

    const result = await AdminService.createAdmin({
      superAdminId: req.user.id,
      name,
      email,
      mobileNumber,
      businessName,
      businessType,
      address,
      city,
      state,
      pincode,
      planId,
      paymentRequired,
    });

    return res.status(201).json({
      success: true,
      message: paymentRequired
        ? "Admin created successfully. Payment is required to activate the account."
        : "Admin created successfully and activated.",
      data: result,
    });
  } catch (error) {
    console.error("Create Admin Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to create admin",
    });
  }
};

export const getAllAdmins = async (req, res) => {
  try {
    const result = await AdminService.getAllAdmins(
      req.user.id,
      req.query
    );

    return res.status(200).json({
      success: true,
      message: "Admins fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Get All Admins Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message || "Failed to fetch admins",
    });
  }
};

export const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Admin ID is required",
      });
    }

    const admin = await AdminService.getAdminById(
      req.user.id,
      id
    );

    return res.status(200).json({
      success: true,
      message: "Admin fetched successfully",
      data: {
        admin,
      },
    });
  } catch (error) {
    console.error("Get Admin Error:", error);

    return res.status(404).json({
      success: false,
      message: error.message || "Admin not found",
    });
  }
};

export default {
  registerAdmin,
  createAdmin,
  getAllAdmins,
  getAdminById,
};