import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import planRoutes from "./routes/plan.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import adminProfileRoutes from "./routes/admin-profile.routes.js";
import memberRoutes from "./routes/member.routes.js";
import membershipPlanRoutes from "./routes/membershipPlan.routes.js";
import memberPaymentRoutes from "./routes/memberPayment.routes.js";
import staffRoutes from "./routes/staff.routes.js";
import attendanceRoutes from "./routes/attendance.routes.js";
import reportsRoutes from "./routes/reports.routes.js";
import adminSubscriptionRoutes from "./routes/adminSubscription.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",

    credentials: true,
  }),
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Gym Management API is running",
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/plans", planRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/admin/dashboard", dashboardRoutes);
app.use("/api/v1/admin", adminProfileRoutes);
app.use("/api/v1/admin/members", memberRoutes);
app.use("/api/v1/admin/membership-plans", membershipPlanRoutes);
app.use("/api/v1/admin/member-payments", memberPaymentRoutes);
app.use("/api/v1/admin/staff", staffRoutes);
app.use("/api/v1/admin/attendance", attendanceRoutes);
app.use("/api/v1/admin/reports", reportsRoutes);
app.use("/api/v1/admin/subscription", adminSubscriptionRoutes);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

app.use((err, req, res, next) => {
  console.error("❌ Error:", err);

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

export default app;
