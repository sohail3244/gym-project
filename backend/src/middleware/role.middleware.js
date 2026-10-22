const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    

    if (!allowedRoles.includes(req.user.role)) {
      console.log("ACCESS DENIED");
      
      return res.status(403).json({
        success: false,
        message: "Access denied",
        debug: {
          userRole: req.user.role,
          allowedRoles,
        },
      });
    }

    next();
  };
};

export default roleMiddleware;