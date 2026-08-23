import prisma from "../prisma/prisma.js";

const createSubscription = async ({
  userId,
  planId,
  startDate,
  autoRenew = false,
}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const plan = await prisma.plan.findUnique({
    where: {
      id: planId,
    },
  });

  if (!plan) {
    throw new Error("Plan not found");
  }

  if (plan.status !== "ACTIVE") {
    throw new Error("Selected plan is not active");
  }

  const existingSubscription =
    await prisma.subscription.findFirst({
      where: {
        userId,
        status: {
          in: ["PENDING", "ACTIVE"],
        },
      },
    });

  if (existingSubscription) {
    throw new Error(
      "User already has an active or pending subscription"
    );
  }

  const subscriptionStartDate = startDate
    ? new Date(startDate)
    : new Date();

  const subscriptionEndDate =
    new Date(subscriptionStartDate);

  subscriptionEndDate.setDate(
    subscriptionEndDate.getDate() +
      plan.durationInDays
  );

  const subscription =
    await prisma.subscription.create({
      data: {
        userId,
        planId,
        startDate: subscriptionStartDate,
        endDate: subscriptionEndDate,
        status: "PENDING",
        autoRenew,
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
        plan: true,
      },
    });

  return subscription;
};

const getSubscriptions = async ({
  status,
  userId,
  planId,
  search,
}) => {
  const where = {};

  if (status) {
    where.status = status;
  }

  if (userId) {
    where.userId = userId;
  }

  if (planId) {
    where.planId = planId;
  }

  if (search) {
    where.OR = [
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
      {
        user: {
          email: {
            contains: search,
          },
        },
      },
      {
        plan: {
          name: {
            contains: search,
          },
        },
      },
    ];
  }

  const subscriptions =
    await prisma.subscription.findMany({
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
            status: true,
          },
        },
        plan: true,
        _count: {
          select: {
            payments: true,
          },
        },
      },
    });

  return subscriptions;
};

const getSubscriptionById = async (id) => {
  const subscription =
    await prisma.subscription.findUnique({
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
            parentId: true,
          },
        },
        plan: true,
        payments: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  return subscription;
};

const updateSubscriptionStatus = async (
  id,
  status
) => {
  const subscription =
    await prisma.subscription.findUnique({
      where: {
        id,
      },
    });

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  const updateData = {
    status,
  };

  if (status === "CANCELLED") {
    updateData.autoRenew = false;
  }

  if (status === "ACTIVE") {
    if (!subscription.startDate) {
      updateData.startDate = new Date();
    }

    if (!subscription.endDate) {
      const plan = await prisma.plan.findUnique({
        where: {
          id: subscription.planId,
        },
      });

      if (plan) {
        const startDate =
          subscription.startDate ||
          new Date();

        const endDate = new Date(startDate);

        endDate.setDate(
          endDate.getDate() +
            plan.durationInDays
        );

        updateData.endDate = endDate;
      }
    }
  }

  const updatedSubscription =
    await prisma.subscription.update({
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
            role: true,
            status: true,
          },
        },
        plan: true,
        payments: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

  return updatedSubscription;
};

const updateAutoRenew = async (
  id,
  autoRenew
) => {
  const subscription =
    await prisma.subscription.findUnique({
      where: {
        id,
      },
    });

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  const updatedSubscription =
    await prisma.subscription.update({
      where: {
        id,
      },
      data: {
        autoRenew,
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
        plan: true,
      },
    });

  return updatedSubscription;
};

const cancelSubscription = async (id) => {
  const subscription =
    await prisma.subscription.findUnique({
      where: {
        id,
      },
    });

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  if (subscription.status === "CANCELLED") {
    throw new Error(
      "Subscription is already cancelled"
    );
  }

  const updatedSubscription =
    await prisma.subscription.update({
      where: {
        id,
      },
      data: {
        status: "CANCELLED",
        autoRenew: false,
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
        plan: true,
      },
    });

  return updatedSubscription;
};

const deleteSubscription = async (id) => {
  const subscription =
    await prisma.subscription.findUnique({
      where: {
        id,
      },
      include: {
        _count: {
          select: {
            payments: true,
          },
        },
      },
    });

  if (!subscription) {
    throw new Error("Subscription not found");
  }

  if (subscription._count.payments > 0) {
    throw new Error(
      "Subscription cannot be deleted because it has payments"
    );
  }

  await prisma.subscription.delete({
    where: {
      id,
    },
  });

  return {
    id,
    message:
      "Subscription deleted successfully",
  };
};

export default {
  createSubscription,
  getSubscriptions,
  getSubscriptionById,
  updateSubscriptionStatus,
  updateAutoRenew,
  cancelSubscription,
  deleteSubscription,
};