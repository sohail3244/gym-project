
import prisma from "../prisma/prisma.js";

/**
 * Dashboard access:
 * SUPER_ADMIN = all gym data
 * ADMIN       = only their own gym data
 */
const getDashboardAccess = async (userId) => {
  if (!userId) {
    const error = new Error("User ID is required");
    error.statusCode = 401;
    throw error;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      role: true,
      status: true,
      business: true,
    },
  });

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  if (!["SUPER_ADMIN", "ADMIN"].includes(user.role)) {
    const error = new Error(
      "You are not authorized to access dashboard"
    );
    error.statusCode = 403;
    throw error;
  }

  const isSuperAdmin = user.role === "SUPER_ADMIN";

  return {
    user,
    isSuperAdmin,
    scope: isSuperAdmin ? "ALL" : "OWN",

    // Gym data models use adminId, not userId.
    adminFilter: isSuperAdmin ? {} : { adminId: user.id },

    // Attendance is scoped through its staff relation.
    attendanceFilter: isSuperAdmin
      ? {}
      : { staff: { adminId: user.id } },
  };
};

const toNumber = (value) => Number(value ?? 0);

/**
 * Common gym dashboard data used by all dashboard endpoints.
 */
const getGymDashboardData = async (adminFilter, attendanceFilter) => {
  const [
    totalMembers,
    activeMembers,
    totalMembershipPlans,
    activeMembershipPlans,
    totalMemberPayments,
    successfulMemberPayments,
    pendingMemberPayments,
    failedMemberPayments,
    totalStaff,
    activeStaff,
    totalStaffAttendance,
    recentMembers,
    recentMemberPayments,
    recentStaff,
    recentStaffAttendance,
  ] = await Promise.all([
    prisma.member.count({
      where: adminFilter,
    }),

    prisma.member.count({
      where: { ...adminFilter, status: "ACTIVE" },
    }),

    prisma.membershipPlan.count({
      where: adminFilter,
    }),

    prisma.membershipPlan.count({
      where: { ...adminFilter, status: "ACTIVE" },
    }),

    prisma.memberPayment.count({
      where: adminFilter,
    }),

    prisma.memberPayment.aggregate({
      where: { ...adminFilter, status: "SUCCESS" },
      _count: { id: true },
      _sum: { amount: true },
    }),

    prisma.memberPayment.aggregate({
      where: { ...adminFilter, status: "PENDING" },
      _count: { id: true },
      _sum: { amount: true },
    }),

    prisma.memberPayment.aggregate({
      where: { ...adminFilter, status: "FAILED" },
      _count: { id: true },
      _sum: { amount: true },
    }),

    prisma.staff.count({
      where: adminFilter,
    }),

    prisma.staff.count({
      where: { ...adminFilter, status: "ACTIVE" },
    }),

    prisma.staffAttendance.count({
      where: attendanceFilter,
    }),

    prisma.member.findMany({
      where: adminFilter,
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        name: true,
        mobileNumber: true,
        email: true,
        status: true,
        createdAt: true,
      },
    }),

    prisma.memberPayment.findMany({
      where: adminFilter,
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        amount: true,
        currency: true,
        paymentMethod: true,
        status: true,
        transactionId: true,
        paidAt: true,
        createdAt: true,
        member: {
          select: {
            id: true,
            name: true,
            mobileNumber: true,
          },
        },
      },
    }),

    prisma.staff.findMany({
      where: adminFilter,
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        name: true,
        mobileNumber: true,
        staffType: true,
        designation: true,
        status: true,
        createdAt: true,
      },
    }),

    prisma.staffAttendance.findMany({
      where: attendanceFilter,
      orderBy: { attendanceDate: "desc" },
      take: 10,
      select: {
        id: true,
        attendanceDate: true,
        checkIn: true,
        checkOut: true,
        status: true,
        notes: true,
        staff: {
          select: {
            id: true,
            name: true,
            staffType: true,
            designation: true,
          },
        },
      },
    }),
  ]);

  return {
    counts: {
      totalMembers,
      activeMembers,
      totalMembershipPlans,
      activeMembershipPlans,
      totalMemberPayments,
      successfulMemberPayments: successfulMemberPayments._count.id,
      pendingMemberPayments: pendingMemberPayments._count.id,
      failedMemberPayments: failedMemberPayments._count.id,
      totalStaff,
      activeStaff,
      totalStaffAttendance,
    },

    payments: {
      total: totalMemberPayments,
      successful: successfulMemberPayments._count.id,
      successfulAmount: toNumber(successfulMemberPayments._sum.amount),
      pending: pendingMemberPayments._count.id,
      pendingAmount: toNumber(pendingMemberPayments._sum.amount),
      failed: failedMemberPayments._count.id,
      failedAmount: toNumber(failedMemberPayments._sum.amount),
    },

    recentMembers,

    recentMemberPayments: recentMemberPayments.map((payment) => ({
      ...payment,
      amount: toNumber(payment.amount),
    })),

    recentStaff,

    recentStaffAttendance,
  };
};

/**
 * GET /dashboard
 */
const getDashboard = async (userId) => {
  const {
    user,
    scope,
    adminFilter,
    attendanceFilter,
  } = await getDashboardAccess(userId);

  const gym = await getGymDashboardData(
    adminFilter,
    attendanceFilter
  );

  return {
    scope,

    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      status: user.status,
    },

    business: user.business,

    stats: {
      members: {
        total: gym.counts.totalMembers,
        active: gym.counts.activeMembers,
      },

      membershipPlans: {
        total: gym.counts.totalMembershipPlans,
        active: gym.counts.activeMembershipPlans,
      },

      memberPayments: gym.payments,

      staff: {
        total: gym.counts.totalStaff,
        active: gym.counts.activeStaff,
      },

      staffAttendance: {
        total: gym.counts.totalStaffAttendance,
      },
    },

    gym,
  };
};

/**
 * GET /dashboard/stats
 */
const getDashboardStats = async (userId) => {
  const { scope, adminFilter, attendanceFilter } =
    await getDashboardAccess(userId);

  const gym = await getGymDashboardData(
    adminFilter,
    attendanceFilter
  );

  return {
    scope,
    members: {
      total: gym.counts.totalMembers,
      active: gym.counts.activeMembers,
    },

    membershipPlans: {
      total: gym.counts.totalMembershipPlans,
      active: gym.counts.activeMembershipPlans,
    },

    payments: gym.payments,

    staff: {
      total: gym.counts.totalStaff,
      active: gym.counts.activeStaff,
    },

    staffAttendance: {
      total: gym.counts.totalStaffAttendance,
    },
  };
};

/**
 * GET /dashboard/recent-payments
 */
const getRecentPayments = async (userId) => {
  const { adminFilter } = await getDashboardAccess(userId);

  const payments = await prisma.memberPayment.findMany({
    where: adminFilter,
    orderBy: { createdAt: "desc" },
    take: 10,
    select: {
      id: true,
      amount: true,
      currency: true,
      paymentMethod: true,
      status: true,
      transactionId: true,
      paidAt: true,
      createdAt: true,
      member: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
        },
      },
    },
  });

  return payments.map((payment) => ({
    ...payment,
    amount: toNumber(payment.amount),
  }));
};

/**
 * GET /dashboard/recent-subscriptions
 */
const getRecentSubscriptions = async (userId) => {
  const { adminFilter } = await getDashboardAccess(userId);

  const members = await prisma.member.findMany({
    where: adminFilter,
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    select: {
      id: true,
      name: true,
      mobileNumber: true,
      email: true,
      status: true,
      createdAt: true,

      memberships: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
        select: {
          id: true,
          membershipName: true,
          amount: true,
          status: true,
          startDate: true,
          endDate: true,
          createdAt: true,

          // Correct relation name from schema.prisma
          membershipPlan: {
            select: {
              id: true,
              name: true,
              price: true,
              durationInDays: true,
            },
          },
        },
      },
    },
  });

  return members.map((member) => ({
    ...member,

    memberships: member.memberships.map((membership) => ({
      ...membership,

      amount: Number(membership.amount ?? 0),

      // Keep "plan" for compatibility with the current frontend.
      plan: membership.membershipPlan
        ? {
            ...membership.membershipPlan,
            price: Number(membership.membershipPlan.price ?? 0),
          }
        : {
            name: membership.membershipName,
            price: Number(membership.amount ?? 0),
            durationInDays: null,
          },
    })),
  }));
};

export default {
  getDashboard,
  getDashboardStats,
  getRecentPayments,
  getRecentSubscriptions,
};
