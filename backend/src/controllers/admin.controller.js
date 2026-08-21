import AdminService from "../services/admin.service.js";

/*
|--------------------------------------------------------------------------
| ADMIN SELF REGISTRATION
|--------------------------------------------------------------------------
| Public API
|--------------------------------------------------------------------------
*/

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
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !mobileNumber ||
      !businessName ||
      !businessType
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
    });

    return res.status(201).json({
      success: true,
      message:
        "Registration successful. Your account is waiting for Super Admin approval.",
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

/*
|--------------------------------------------------------------------------
| GET ALL ADMINS
|--------------------------------------------------------------------------
| Protected
| SUPER_ADMIN only
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| GET SINGLE ADMIN
|--------------------------------------------------------------------------
| Protected
| SUPER_ADMIN only
|--------------------------------------------------------------------------
*/

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