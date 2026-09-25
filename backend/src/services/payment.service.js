import prisma from "../prisma/prisma.js";
import { verifyRazorpaySignature } from "./payment/razorpay.service.js";
import PDFDocument from "pdfkit";

const createPayment = async ({
  userId,
  subscriptionId,
  amount,
  currency,
  paymentMethod,
  transactionId,
  gatewayOrderId,
  gatewayPaymentId,
  gatewaySignature,
  status = "PENDING",
}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const subscription = await prisma.subscription.findUnique({
    where: {
      id: subscriptionId,
    },
    include: {
      plan: true,
    },
  });

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  if (subscription.userId !== userId) {
    throw new Error(
      "Subscription does not belong to this user"
    );
  }

  if (transactionId) {
    const existingPayment = await prisma.payment.findUnique({
      where: {
        transactionId,
      },
    });

    if (existingPayment) {
      throw new Error(
        "Payment with this transaction ID already exists"
      );
    }
  }

  const payment = await prisma.payment.create({
    data: {
      userId,
      subscriptionId,
      amount,
      currency: currency || "INR",
      paymentMethod,
      transactionId: transactionId || null,
      gatewayOrderId: gatewayOrderId || null,
      gatewayPaymentId: gatewayPaymentId || null,
      gatewaySignature: gatewaySignature || null,
      status,
      paidAt: status === "SUCCESS" ? new Date() : null,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
        },
      },
      subscription: {
        include: {
          plan: true,
        },
      },
    },
  });

  if (
    status === "SUCCESS" &&
    subscription.status !== "ACTIVE"
  ) {
    const startDate = new Date();

    const endDate = new Date(startDate);

    endDate.setDate(
      endDate.getDate() +
      subscription.plan.durationInDays
    );

    await prisma.subscription.update({
      where: {
        id: subscriptionId,
      },
      data: {
        status: "ACTIVE",
        startDate,
        endDate,
      },
    });
  }

  return payment;
};

const verifyRegistrationPayment = async ({
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) => {
  if (!razorpayOrderId) {
    throw new Error("Razorpay order ID is required");
  }

  if (!razorpayPaymentId) {
    throw new Error("Razorpay payment ID is required");
  }

  if (!razorpaySignature) {
    throw new Error("Razorpay signature is required");
  }

  // 1. Verify Razorpay signature
  const isValidSignature = verifyRazorpaySignature({
    orderId: razorpayOrderId,
    paymentId: razorpayPaymentId,
    signature: razorpaySignature,
  });

  if (!isValidSignature) {
    throw new Error("Invalid Razorpay payment signature");
  }

  // 2. Find local payment using Razorpay Order ID
  const payment = await prisma.payment.findFirst({
    where: {
      gatewayOrderId: razorpayOrderId,
    },
    include: {
      user: true,
      subscription: {
        include: {
          plan: true,
        },
      },
    },
  });

  if (!payment) {
    throw new Error("Registration payment not found");
  }

  // 3. Idempotency
  if (payment.status === "SUCCESS") {
    return payment;
  }

  // 4. Payment + subscription + user update
  const result = await prisma.$transaction(async (tx) => {
    const updatedPayment = await tx.payment.update({
      where: {
        id: payment.id,
      },
      data: {
        status: "SUCCESS",
        paymentMethod: "ONLINE",
        transactionId: razorpayPaymentId,
        gatewayPaymentId: razorpayPaymentId,
        gatewaySignature: razorpaySignature,
        paidAt: new Date(),
      },
    });

    const startDate = new Date();

    const endDate = new Date(startDate);
    endDate.setDate(
      endDate.getDate() +
      payment.subscription.plan.durationInDays
    );

    await tx.subscription.update({
      where: {
        id: payment.subscriptionId,
      },
      data: {
        status: "ACTIVE",
        startDate,
        endDate,
      },
    });

    await tx.user.update({
      where: {
        id: payment.userId,
      },
      data: {
        status: "ACTIVE",
      },
    });

    return updatedPayment;
  });

  return result;
};

const getPayments = async ({
  status,
  paymentMethod,
  userId,
  subscriptionId,
  search,
}) => {
  const where = {};

  if (status) {
    where.status = status;
  }

  if (paymentMethod) {
    where.paymentMethod = paymentMethod;
  }

  if (userId) {
    where.userId = userId;
  }

  if (subscriptionId) {
    where.subscriptionId = subscriptionId;
  }

  if (search) {
    where.OR = [
      {
        transactionId: {
          contains: search,
        },
      },
      {
        gatewayOrderId: {
          contains: search,
        },
      },
      {
        gatewayPaymentId: {
          contains: search,
        },
      },
      {
        user: {
          name: {
            contains: search,
          },
        },
      },
      {
        user: {
          username: {
            contains: search,
          },
        },
      },
    ];
  }

  const payments = await prisma.payment.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          role: true,
        },
      },
      subscription: {
        include: {
          plan: true,
        },
      },
    },
  });

  return payments;
};

const getPaymentById = async (id) => {
  const payment = await prisma.payment.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          role: true,
          status: true,
        },
      },
      subscription: {
        include: {
          plan: true,
        },
      },
    },
  });

  if (!payment) {
    throw new Error("Payment not found");
  }

  return payment;
};

const updatePaymentStatus = async (
  id,
  status
) => {
  const payment = await prisma.payment.findUnique({
    where: {
      id,
    },
    include: {
      subscription: {
        include: {
          plan: true,
        },
      },
    },
  });

  if (!payment) {
    throw new Error("Payment not found");
  }

  const updateData = {
    status,
  };

  if (status === "SUCCESS") {
    updateData.paidAt =
      payment.paidAt || new Date();
  }

  if (status === "REFUNDED") {
    updateData.paidAt = payment.paidAt;
  }

  const updatedPayment =
    await prisma.payment.update({
      where: {
        id,
      },
      data: updateData,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true,
            email: true,
          },
        },
        subscription: {
          include: {
            plan: true,
          },
        },
      },
    });

  if (status === "SUCCESS") {
    const subscription =
      payment.subscription;

    const startDate =
      subscription.startDate || new Date();

    const endDate =
      subscription.endDate ||
      new Date(startDate);

    if (!subscription.startDate) {
      endDate.setDate(
        endDate.getDate() +
        subscription.plan.durationInDays
      );
    }

    await prisma.subscription.update({
      where: {
        id: subscription.id,
      },
      data: {
        status: "ACTIVE",
        startDate,
        endDate,
      },
    });
  }

  if (status === "REFUNDED") {
    await prisma.subscription.update({
      where: {
        id: payment.subscriptionId,
      },
      data: {
        status: "CANCELLED",
      },
    });
  }

  return updatedPayment;
};

const deletePayment = async (id) => {
  const payment = await prisma.payment.findUnique({
    where: {
      id,
    },
  });

  if (!payment) {
    throw new Error("Payment not found");
  }

  if (payment.status === "SUCCESS") {
    throw new Error(
      "Successful payment cannot be deleted"
    );
  }

  await prisma.payment.delete({
    where: {
      id,
    },
  });

  return {
    id,
    message: "Payment deleted successfully",
  };
};

const generatePaymentReceipt = async (id) => {
  const payment = await prisma.payment.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          status: true,

          business: {
            select: {
              businessName: true,
              businessType: true,
              mobileNumber: true,
              email: true,
              address: true,
              city: true,
              state: true,
              pincode: true,
            },
          },
        },
      },

      subscription: {
        include: {
          plan: true,
        },
      },
    },
  });

  if (!payment) {
    throw new Error("Payment not found");
  }

  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
  });

  const chunks = [];

  doc.on("data", (chunk) => {
    chunks.push(chunk);
  });

  const pdfBufferPromise = new Promise((resolve, reject) => {
    doc.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    doc.on("error", reject);
  });

  // --------------------------------------------------
  // RECEIPT HEADER
  // --------------------------------------------------

  doc
    .fontSize(22)
    .font("Helvetica-Bold")
    .text("PAYMENT RECEIPT", {
      align: "center",
    });

  doc.moveDown();

  doc
    .fontSize(11)
    .font("Helvetica")
    .text(
      `Receipt Date: ${new Date(
        payment.createdAt
      ).toLocaleString("en-IN")}`,
      {
        align: "right",
      }
    );

  doc.moveDown(2);

  // --------------------------------------------------
  // PAYMENT STATUS
  // --------------------------------------------------

  doc
    .fontSize(14)
    .font("Helvetica-Bold")
    .text(`Payment Status: ${payment.status}`);

  doc.moveDown();

  // --------------------------------------------------
  // ADMIN DETAILS
  // --------------------------------------------------

  doc
    .fontSize(15)
    .font("Helvetica-Bold")
    .text("Admin Details");

  doc.moveDown(0.5);

  doc
    .fontSize(11)
    .font("Helvetica")
    .text(`Name: ${payment.user?.name || "N/A"}`)
    .text(`Username: ${payment.user?.username || "N/A"}`)
    .text(`Email: ${payment.user?.email || "N/A"}`)
    .text(`Account Status: ${payment.user?.status || "N/A"}`);

  doc.moveDown();

  // --------------------------------------------------
  // BUSINESS DETAILS
  // --------------------------------------------------

  doc
    .fontSize(15)
    .font("Helvetica-Bold")
    .text("Business Details");

  doc.moveDown(0.5);

  doc
    .fontSize(11)
    .font("Helvetica")
    .text(
      `Business Name: ${
        payment.user?.business?.businessName || "N/A"
      }`
    )
    .text(
      `Business Type: ${
        payment.user?.business?.businessType || "N/A"
      }`
    )
    .text(
      `Mobile Number: ${
        payment.user?.business?.mobileNumber || "N/A"
      }`
    )
    .text(
      `Email: ${
        payment.user?.business?.email || "N/A"
      }`
    )
    .text(
      `Address: ${
        payment.user?.business?.address || "N/A"
      }`
    )
    .text(
      `City: ${
        payment.user?.business?.city || "N/A"
      }`
    )
    .text(
      `State: ${
        payment.user?.business?.state || "N/A"
      }`
    )
    .text(
      `Pincode: ${
        payment.user?.business?.pincode || "N/A"
      }`
    );

  doc.moveDown();

  // --------------------------------------------------
  // SUBSCRIPTION DETAILS
  // --------------------------------------------------

  doc
    .fontSize(15)
    .font("Helvetica-Bold")
    .text("Subscription Details");

  doc.moveDown(0.5);

  doc
    .fontSize(11)
    .font("Helvetica")
    .text(
      `Plan: ${
        payment.subscription?.plan?.name || "N/A"
      }`
    )
    .text(
      `Duration: ${
        payment.subscription?.plan?.durationInDays || "N/A"
      } Days`
    )
    .text(
      `Subscription Status: ${
        payment.subscription?.status || "N/A"
      }`
    );

  doc.moveDown();

  // --------------------------------------------------
  // PAYMENT DETAILS
  // --------------------------------------------------

  doc
    .fontSize(15)
    .font("Helvetica-Bold")
    .text("Payment Details");

  doc.moveDown(0.5);

  doc
    .fontSize(11)
    .font("Helvetica")
    .text(
      `Amount: ${payment.currency || "INR"} ${payment.amount}`
    )
    .text(
      `Payment Method: ${
        payment.paymentMethod || "N/A"
      }`
    )
    .text(
      `Transaction ID: ${
        payment.transactionId || "N/A"
      }`
    )
    .text(
      `Razorpay Order ID: ${
        payment.gatewayOrderId || "N/A"
      }`
    )
    .text(
      `Razorpay Payment ID: ${
        payment.gatewayPaymentId || "N/A"
      }`
    )
    .text(
      `Payment Date: ${
        payment.paidAt
          ? new Date(payment.paidAt).toLocaleString("en-IN")
          : "N/A"
      }`
    );

  doc.moveDown(2);

  // --------------------------------------------------
  // ACCOUNT INFORMATION
  // --------------------------------------------------

  doc
    .fontSize(15)
    .font("Helvetica-Bold")
    .text("Account Information");

  doc.moveDown(0.5);

  doc
    .fontSize(11)
    .font("Helvetica")
    .text(
      `Username: ${
        payment.user?.username || "N/A"
      }`
    )
    .text(
      `Account Status: ${
        payment.user?.status || "N/A"
      }`
    );

  doc.moveDown(3);

  // --------------------------------------------------
  // FOOTER
  // --------------------------------------------------

  doc
    .fontSize(9)
    .fillColor("gray")
    .text(
      "This is a system generated payment receipt.",
      {
        align: "center",
      }
    );

  doc.end();

  const pdfBuffer = await pdfBufferPromise;

  return {
    pdfBuffer,
    fileName: `payment-receipt-${payment.id}.pdf`,
  };
};

export default {
  createPayment,
  verifyRegistrationPayment,
  getPayments,
  getPaymentById,
  updatePaymentStatus,
  deletePayment,
  generatePaymentReceipt,
};