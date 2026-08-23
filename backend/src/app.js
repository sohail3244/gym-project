import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import planRoutes from "./routes/plan.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";

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
