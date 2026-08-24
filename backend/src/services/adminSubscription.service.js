import prisma from "../prisma/prisma.js";

/**
 * =========================================================
 * GET AVAILABLE PLANS
 * =========================================================
 */
export const getAvailablePlans = async () => {
  const plans = await prisma.plan.findMany({
    where: {
      status: "ACTIVE",
    },

    orderBy: {
      price: "asc",
    },

    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      billingInterval: true,
      durationInDays: true,
      maxMembers: true,
      maxStaff: true,
      maxBusinesses: true,
      features: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return plans.map((plan) => ({
    ...plan,
    price: Number(plan.price),
  }));
};


/**
 * =========================================================
 * GET CURRENT ADMIN SUBSCRIPTION
 * =========================================================
 */
export const getCurrentSubscription = async (adminId) => {
  const subscription = await prisma.subscription.findFirst({
    where: {
      userId: adminId,
    },

    orderBy: {
      createdAt: "desc",
    },

    include: {
      plan: {
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          billingInterval: true,
          durationInDays: true,
          maxMembers: true,
          maxStaff: true,
          maxBusinesses: true,
          features: true,
          status: true,
        },
      },

      payments: {
        orderBy: {
          createdAt: "desc",
        },

        select: {
          id: true,
          amount: true,
          currency: true,
          paymentMethod: true,
          status: true,
          transactionId: true,
          paidAt: true,
          createdAt: true,
        },
      },
    },
  });

  if (!subscription) {
    return null;
  }

  return {
    ...subscription,

    plan: subscription.plan
      ? {
          ...subscription.plan,
          price: Number(subscription.plan.price),
        }
      : null,

    payments: subscription.payments.map((payment) => ({
      ...payment,
      amount: Number(payment.amount),
    })),
  };
};


/**
 * =========================================================
 * CREATE ADMIN SUBSCRIPTION
 * =========================================================
 */
export const createSubscription = async (
  adminId,
  data
) => {
  const {
    planId,
    paymentRequired = true,
    autoRenew = false,
    paymentMethod,
    paymentStatus = "PENDING",
    transactionId,
  } = data;

  if (!planId) {
    throw new Error("planId is required");
  }

  // Check admin
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
    },

    select: {
      id: true,
      role: true,
      status: true,
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  if (admin.role !== "ADMIN") {
    throw new Error("Only ADMIN can create subscription");
  }

  // Check plan
  const plan = await prisma.plan.findUnique({
    where: {
      id: planId,
    },
  });

  if (!plan) {
    throw new Error("Plan not found");
  }

  if (plan.status !== "ACTIVE") {
    throw new Error("Selected plan is inactive");
  }

  // Check existing active/pending subscription
  const existingSubscription =
    await prisma.subscription.findFirst({
      where: {
        userId: adminId,

        status: {
          in: ["ACTIVE", "PENDING"],
        },
      },
    });

  if (existingSubscription) {
    throw new Error(
      "Admin already has an active or pending subscription"
    );
  }

  const startDate = new Date();

  const endDate = new Date(startDate);

  endDate.setDate(
    endDate.getDate() + plan.durationInDays
  );

  const subscriptionStatus =
    paymentRequired && paymentStatus !== "SUCCESS"
      ? "PENDING"
      : "ACTIVE";

  const result = await prisma.$transaction(
    async (tx) => {
      const subscription =
        await tx.subscription.create({
          data: {
            userId: adminId,
            planId: plan.id,

            paymentRequired,

            startDate:
              subscriptionStatus === "ACTIVE"
                ? startDate
                : null,

            endDate:
              subscriptionStatus === "ACTIVE"
                ? endDate
                : null,

            status: subscriptionStatus,

            autoRenew,
          },

          include: {
            plan: true,
          },
        });

      // Create payment only when payment is required
      if (paymentRequired) {
        await tx.payment.create({
          data: {
            userId: adminId,

            subscriptionId:
              subscription.id,

            amount: plan.price,

            currency: "INR",

            paymentMethod:
              paymentMethod || null,

            status: paymentStatus,

            transactionId:
              transactionId || null,

            paidAt:
              paymentStatus === "SUCCESS"
                ? new Date()
                : null,
          },
        });
      }

      return subscription;
    }
  );

  return {
    ...result,

    plan: {
      ...result.plan,
      price: Number(result.plan.price),
    },
  };
};


/**
 * =========================================================
 * CANCEL SUBSCRIPTION
 * =========================================================
 */
export const cancelSubscription = async (
  adminId
) => {
  const subscription =
    await prisma.subscription.findFirst({
      where: {
        userId: adminId,

        status: {
          in: ["ACTIVE", "PENDING"],
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

  if (!subscription) {
    throw new Error(
      "No active or pending subscription found"
    );
  }

  const updatedSubscription =
    await prisma.subscription.update({
      where: {
        id: subscription.id,
      },

      data: {
        status: "CANCELLED",
        autoRenew: false,
      },

      include: {
        plan: true,
      },
    });

  return {
    ...updatedSubscription,

    plan: {
      ...updatedSubscription.plan,
      price: Number(
        updatedSubscription.plan.price
      ),
    },
  };
};


/**
 * =========================================================
 * RENEW SUBSCRIPTION
 * =========================================================
 */
export const renewSubscription = async (
  adminId,
  data = {}
) => {
  const currentSubscription =
    await prisma.subscription.findFirst({
      where: {
        userId: adminId,
      },

      orderBy: {
        createdAt: "desc",
      },

      include: {
        plan: true,
      },
    });

  if (!currentSubscription) {
    throw new Error(
      "No previous subscription found"
    );
  }

  const planId =
    data.planId || currentSubscription.planId;

  const plan = await prisma.plan.findUnique({
    where: {
      id: planId,
    },
  });

  if (!plan) {
    throw new Error("Plan not found");
  }

  if (plan.status !== "ACTIVE") {
    throw new Error("Selected plan is inactive");
  }

  const paymentRequired =
    data.paymentRequired ?? true;

  const paymentStatus =
    data.paymentStatus || "PENDING";

  const paymentMethod =
    data.paymentMethod || null;

  const transactionId =
    data.transactionId || null;

  const autoRenew =
    data.autoRenew ?? false;

  const startDate = new Date();

  const endDate = new Date(startDate);

  endDate.setDate(
    endDate.getDate() + plan.durationInDays
  );

  const status =
    paymentRequired &&
    paymentStatus !== "SUCCESS"
      ? "PENDING"
      : "ACTIVE";

  const result = await prisma.$transaction(
    async (tx) => {
      const subscription =
        await tx.subscription.create({
          data: {
            userId: adminId,

            planId: plan.id,

            paymentRequired,

            startDate:
              status === "ACTIVE"
                ? startDate
                : null,

            endDate:
              status === "ACTIVE"
                ? endDate
                : null,

            status,

            autoRenew,
          },

          include: {
            plan: true,
          },
        });

      if (paymentRequired) {
        await tx.payment.create({
          data: {
            userId: adminId,

            subscriptionId:
              subscription.id,

            amount: plan.price,

            currency: "INR",

            paymentMethod,

            status: paymentStatus,

            transactionId,

            paidAt:
              paymentStatus === "SUCCESS"
                ? new Date()
                : null,
          },
        });
      }

      return subscription;
    }
  );

  return {
    ...result,

    plan: {
      ...result.plan,
      price: Number(result.plan.price),
    },
  };
};


/**
 * =========================================================
 * GET SUBSCRIPTION PAYMENTS
 * =========================================================
 */
export const getSubscriptionPayments = async (
  adminId
) => {
  const payments = await prisma.payment.findMany({
    where: {
      userId: adminId,
    },

    orderBy: {
      createdAt: "desc",
    },

    include: {
      subscription: {
        include: {
          plan: {
            select: {
              id: true,
              name: true,
              price: true,
              billingInterval: true,
              durationInDays: true,
            },
          },
        },
      },
    },
  });

  return payments.map((payment) => ({
    id: payment.id,

    amount: Number(payment.amount),

    currency: payment.currency,

    paymentMethod: payment.paymentMethod,

    status: payment.status,

    transactionId: payment.transactionId,

    paidAt: payment.paidAt,

    createdAt: payment.createdAt,

    subscription: {
      id: payment.subscription.id,

      status: payment.subscription.status,

      startDate:
        payment.subscription.startDate,

      endDate:
        payment.subscription.endDate,

      plan: payment.subscription.plan
        ? {
            ...payment.subscription.plan,

            price: Number(
              payment.subscription.plan.price
            ),
          }
        : null,
    },
  }));
};