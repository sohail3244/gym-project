import express from "express";

import {
  getProfile,
  updateProfile,
  getBusiness,
  updateBusiness,
} from "../controllers/admin-profile.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.get(
  "/profile",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getProfile
);

router.patch(
  "/profile",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateProfile
);

router.get(
  "/business",
  authMiddleware,
  roleMiddleware("ADMIN"),
  getBusiness
);

router.patch(
  "/business",
  authMiddleware,
  roleMiddleware("ADMIN"),
  updateBusiness
);

export default router;