const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    /*
    |--------------------------------------------------------------------------
    | Check Authentication
    |--------------------------------------------------------------------------
    */

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Check Role
    |--------------------------------------------------------------------------
    */

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    next();
  };
};

export default roleMiddleware;