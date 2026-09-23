import express from "express";

import {
  registerAdmin,
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  changeAdminStatus,
} from "../controllers/admin.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

/* -------------------------------------------------------------------------- */
/* Public Registration                                                        */
/* -------------------------------------------------------------------------- */

router.post(
  "/register",
  registerAdmin
);

/* -------------------------------------------------------------------------- */
/* Create Admin                                                               */
/* -------------------------------------------------------------------------- */

router.post(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  createAdmin
);

/* -------------------------------------------------------------------------- */
/* Get All Admins                                                             */
/* -------------------------------------------------------------------------- */

router.get(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  getAllAdmins
);

/* -------------------------------------------------------------------------- */
/* Get Admin By ID                                                            */
/* -------------------------------------------------------------------------- */

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  getAdminById
);

/* -------------------------------------------------------------------------- */
/* Update Admin                                                               */
/* -------------------------------------------------------------------------- */

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  updateAdmin
);

/* -------------------------------------------------------------------------- */
/* Change Admin Status                                                        */
/* -------------------------------------------------------------------------- */

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  changeAdminStatus
);

export default router;