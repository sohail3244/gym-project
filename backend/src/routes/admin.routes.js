import express from "express";

import {
  registerAdmin,
  getAllAdmins,
  getAdminById,
} from "../controllers/admin.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| ADMIN SELF REGISTRATION
|--------------------------------------------------------------------------
| Public API
|
| POST /api/v1/admin/register
|--------------------------------------------------------------------------
*/

router.post(
  "/register",
  registerAdmin
);

/*
|--------------------------------------------------------------------------
| SUPER ADMIN - CREATE ADMIN
|--------------------------------------------------------------------------
| Protected
| Only SUPER_ADMIN can create Admin
|
| POST /api/v1/super-admin/admins
|--------------------------------------------------------------------------
*/

// router.post(
//   "/",
//   authMiddleware,
//   roleMiddleware("SUPER_ADMIN"),
//   createAdmin
// );

/*
|--------------------------------------------------------------------------
| SUPER ADMIN - GET ALL ADMINS
|--------------------------------------------------------------------------
| Protected
|
| GET /api/v1/super-admin/admins
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  getAllAdmins
);

/*
|--------------------------------------------------------------------------
| SUPER ADMIN - GET SINGLE ADMIN
|--------------------------------------------------------------------------
| Protected
|
| GET /api/v1/super-admin/admins/:id
|--------------------------------------------------------------------------
*/

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("SUPER_ADMIN"),
  getAdminById
);

export default router;