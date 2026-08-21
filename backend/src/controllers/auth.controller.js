import AuthService from "../services/auth.service.js";

/*
|--------------------------------------------------------------------------
| Cookie Options
|--------------------------------------------------------------------------
*/

const cookieOptions = {
  httpOnly: true,

  secure:
    process.env.NODE_ENV === "production",

  sameSite:
    process.env.NODE_ENV === "production"
      ? "none"
      : "lax",

  maxAge: 24 * 60 * 60 * 1000,
};

/*
|--------------------------------------------------------------------------
| LOGIN
|--------------------------------------------------------------------------
*/

export const login = async (req, res) => {
  try {
    const {
      username,
      password,
    } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Username and password are required",
      });
    }

    const result = await AuthService.login({
      username,
      password,
    });

    res.cookie(
      "accessToken",
      result.accessToken,
      cookieOptions
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",

      data: {
        user: result.user,
      },
    });
  } catch (error) {
    console.error(
      "Login Error:",
      error
    );

    return res.status(401).json({
      success: false,
      message:
        error.message ||
        "Invalid username or password",
    });
  }
};

/*
|--------------------------------------------------------------------------
| GET CURRENT USER
|--------------------------------------------------------------------------
*/

export const me = async (req, res) => {
  try {
    const user =
      await AuthService.getMe(
        req.user.id
      );

    return res.status(200).json({
      success: true,

      message:
        "User fetched successfully",

      data: {
        user,
      },
    });
  } catch (error) {
    console.error(
      "Get Me Error:",
      error
    );

    return res.status(404).json({
      success: false,
      message:
        error.message ||
        "User not found",
    });
  }
};

/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
*/

export const logout = async (req, res) => {
  try {
    res.clearCookie(
      "accessToken",
      {
        httpOnly: true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite:
          process.env.NODE_ENV ===
          "production"
            ? "none"
            : "lax",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error(
      "Logout Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};