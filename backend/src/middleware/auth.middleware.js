import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!process.env.JWT_ACCESS_SECRET) {
      console.error(
        "JWT_ACCESS_SECRET is missing"
      );

      console.log("JWT DECODED:", decoded);
console.log("JWT ROLE:", decoded.role);

      return res.status(500).json({
        success: false,
        message: "Authentication configuration error",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET
    );

    /*
    |--------------------------------------------------------------------------
    | Attach User Information
    |--------------------------------------------------------------------------
    */

    req.user = {
      id: decoded.id,
      role: decoded.role,
      username: decoded.username,
    };

    next();
  } catch (error) {
    console.error(
      "Auth Middleware Error:",
      error.message
    );

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;