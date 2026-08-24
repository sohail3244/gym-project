import prisma from "../prisma/prisma.js";

const getDashboard = async (adminId) => {
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
    },
    include: {
      business: true,
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  if (admin.role !== "ADMIN") {
    throw new Error("Only Admin can access dashboard");
  }

  const [
    activeSubscriptions,
    pendingSubscriptions,
    expiredSubscriptions,
    cancelledSubscriptions,
    paymentStats,
    recentPayments,
    currentSubscription,
  ] = await Promise.all([
    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "ACTIVE",
      },
    }),

    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "PENDING",
      },
    }),

    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "EXPIRED",
      },
    }),

    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "CANCELLED",
      },
    }),

    prisma.payment.aggregate({
      where: {
        userId: adminId,
      },
      _sum: {
        amount: true,
      },
      _count: {
        id: true,
      },
    }),

    prisma.payment.findMany({
      where: {
        userId: adminId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
      select: {
        id: true,
        amount: true,
        currency: true,
        paymentMethod: true,
        status: true,
        transactionId: true,
        gatewayOrderId: true,
        paidAt: true,
        createdAt: true,
        subscription: {
          select: {
            id: true,
            status: true,
            startDate: true,
            endDate: true,
            plan: {
              select: {
                id: true,
                name: true,
                price: true,
                billingInterval: true,
              },
            },
          },
        },
      },
    }),

    prisma.subscription.findFirst({
      where: {
        userId: adminId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        status: true,
        startDate: true,
        endDate: true,
        autoRenew: true,
        createdAt: true,
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
          },
        },
      },
    }),
  ]);

  const successfulPayments = await prisma.payment.aggregate({
    where: {
      userId: adminId,
      status: "SUCCESS",
    },
    _sum: {
      amount: true,
    },
    _count: {
      id: true,
    },
  });

  const pendingPayments = await prisma.payment.aggregate({
    where: {
      userId: adminId,
      status: "PENDING",
    },
    _sum: {
      amount: true,
    },
    _count: {
      id: true,
    },
  });

  const failedPayments = await prisma.payment.aggregate({
    where: {
      userId: adminId,
      status: "FAILED",
    },
    _sum: {
      amount: true,
    },
    _count: {
      id: true,
    },
  });

  return {
    admin: {
      id: admin.id,
      name: admin.name,
      username: admin.username,
      email: admin.email,
      status: admin.status,
    },

    business: admin.business
      ? {
          id: admin.business.id,
          businessName: admin.business.businessName,
          businessType: admin.business.businessType,
          mobileNumber: admin.business.mobileNumber,
          email: admin.business.email,
          address: admin.business.address,
          city: admin.business.city,
          state: admin.business.state,
          pincode: admin.business.pincode,
        }
      : null,

    stats: {
      activeSubscriptions,
      pendingSubscriptions,
      expiredSubscriptions,
      cancelledSubscriptions,

      totalPayments: paymentStats._count.id,

      totalPaymentAmount: Number(
        paymentStats._sum.amount || 0
      ),

      successfulPayments: successfulPayments._count.id,

      successfulPaymentAmount: Number(
        successfulPayments._sum.amount || 0
      ),

      pendingPayments: pendingPayments._count.id,

      pendingPaymentAmount: Number(
        pendingPayments._sum.amount || 0
      ),

      failedPayments: failedPayments._count.id,

      failedPaymentAmount: Number(
        failedPayments._sum.amount || 0
      ),
    },

    currentSubscription,

    recentPayments: recentPayments.map((payment) => ({
      ...payment,
      amount: Number(payment.amount),
      subscription: payment.subscription
        ? {
            ...payment.subscription,
            plan: payment.subscription.plan
              ? {
                  ...payment.subscription.plan,
                  price: Number(payment.subscription.plan.price),
                }
              : null,
          }
        : null,
    })),
  };
};

const getDashboardStats = async (adminId) => {
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
      role: "ADMIN",
    },
    select: {
      id: true,
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  const [
    activeSubscriptions,
    pendingSubscriptions,
    expiredSubscriptions,
    cancelledSubscriptions,
    totalPayments,
    successfulPayments,
    pendingPayments,
    failedPayments,
  ] = await Promise.all([
    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "ACTIVE",
      },
    }),

    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "PENDING",
      },
    }),

    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "EXPIRED",
      },
    }),

    prisma.subscription.count({
      where: {
        userId: adminId,
        status: "CANCELLED",
      },
    }),

    prisma.payment.count({
      where: {
        userId: adminId,
      },
    }),

    prisma.payment.aggregate({
      where: {
        userId: adminId,
        status: "SUCCESS",
      },
      _count: {
        id: true,
      },
      _sum: {
        amount: true,
      },
    }),

    prisma.payment.aggregate({
      where: {
        userId: adminId,
        status: "PENDING",
      },
      _count: {
        id: true,
      },
      _sum: {
        amount: true,
      },
    }),

    prisma.payment.aggregate({
      where: {
        userId: adminId,
        status: "FAILED",
      },
      _count: {
        id: true,
      },
      _sum: {
        amount: true,
      },
    }),
  ]);

  return {
    subscriptions: {
      active: activeSubscriptions,
      pending: pendingSubscriptions,
      expired: expiredSubscriptions,
      cancelled: cancelledSubscriptions,
    },

    payments: {
      total: totalPayments,

      successful: successfulPayments._count.id,
      successfulAmount: Number(
        successfulPayments._sum.amount || 0
      ),

      pending: pendingPayments._count.id,
      pendingAmount: Number(
        pendingPayments._sum.amount || 0
      ),

      failed: failedPayments._count.id,
      failedAmount: Number(
        failedPayments._sum.amount || 0
      ),
    },
  };
};

const getRecentPayments = async (adminId) => {
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
      role: "ADMIN",
    },
    select: {
      id: true,
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  const payments = await prisma.payment.findMany({
    where: {
      userId: adminId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    select: {
      id: true,
      amount: true,
      currency: true,
      paymentMethod: true,
      status: true,
      transactionId: true,
      gatewayOrderId: true,
      gatewayPaymentId: true,
      paidAt: true,
      createdAt: true,
      subscription: {
        select: {
          id: true,
          status: true,
          startDate: true,
          endDate: true,
          plan: {
            select: {
              id: true,
              name: true,
              price: true,
              billingInterval: true,
            },
          },
        },
      },
    },
  });

  return payments.map((payment) => ({
    ...payment,
    amount: Number(payment.amount),
    subscription: payment.subscription
      ? {
          ...payment.subscription,
          plan: payment.subscription.plan
            ? {
                ...payment.subscription.plan,
                price: Number(payment.subscription.plan.price),
              }
            : null,
        }
      : null,
  }));
};

const getRecentSubscriptions = async (adminId) => {
  const admin = await prisma.user.findUnique({
    where: {
      id: adminId,
      role: "ADMIN",
    },
    select: {
      id: true,
    },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  return prisma.subscription.findMany({
    where: {
      userId: adminId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    select: {
      id: true,
      startDate: true,
      endDate: true,
      status: true,
      autoRenew: true,
      createdAt: true,
      plan: {
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          billingInterval: true,
          durationInDays: true,
        },
      },
    },
  }).then((subscriptions) =>
    subscriptions.map((subscription) => ({
      ...subscription,
      plan: subscription.plan
        ? {
            ...subscription.plan,
            price: Number(subscription.plan.price),
          }
        : null,
    }))
  );
};

export default {
  getDashboard,
  getDashboardStats,
  getRecentPayments,
  getRecentSubscriptions,
};