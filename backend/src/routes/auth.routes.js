import express from "express";

import {
  login,
  me,
  logout,
} from "../controllers/auth.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| LOGIN
|--------------------------------------------------------------------------
| POST /api/v1/super-admin/auth/login
|--------------------------------------------------------------------------
*/

router.post(
  "/login",
  login
);

/*
|--------------------------------------------------------------------------
| GET CURRENT USER
|--------------------------------------------------------------------------
| GET /api/v1/super-admin/auth/me
|--------------------------------------------------------------------------
*/

router.get(
  "/me",
  authMiddleware,
  roleMiddleware(
    "SUPER_ADMIN",
    "ADMIN"
  ),
  me
);

/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
| POST /api/v1/super-admin/auth/logout
|--------------------------------------------------------------------------
*/

router.post(
  "/logout",
  authMiddleware,
  roleMiddleware(
    "SUPER_ADMIN",
    "ADMIN"
  ),
  logout
);

export default router;