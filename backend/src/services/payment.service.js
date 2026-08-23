import prisma from "../prisma/prisma.js";

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

export default {
  createPayment,
  getPayments,
  getPaymentById,
  updatePaymentStatus,
  deletePayment,
};