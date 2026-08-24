import prisma from "../prisma/prisma.js";

/**
 * =========================================================
 * DASHBOARD REPORT
 * =========================================================
 */
export const getDashboardReport = async (adminId) => {
  const [
    totalMembers,
    activeMembers,
    inactiveMembers,
    suspendedMembers,

    totalStaff,
    activeStaff,
    inactiveStaff,

    totalMemberships,
    activeMemberships,
    expiredMemberships,

    totalPlans,
    activePlans,

    totalPayments,
    successfulPayments,
    failedPayments,
    refundedPayments,

    totalRevenue,
    todayRevenue,
  ] = await Promise.all([
    // Members
    prisma.member.count({
      where: { adminId },
    }),

    prisma.member.count({
      where: {
        adminId,
        status: "ACTIVE",
      },
    }),

    prisma.member.count({
      where: {
        adminId,
        status: "INACTIVE",
      },
    }),

    prisma.member.count({
      where: {
        adminId,
        status: "SUSPENDED",
      },
    }),

    // Staff
    prisma.staff.count({
      where: { adminId },
    }),

    prisma.staff.count({
      where: {
        adminId,
        status: "ACTIVE",
      },
    }),

    prisma.staff.count({
      where: {
        adminId,
        status: "INACTIVE",
      },
    }),

    // Memberships
    prisma.membership.count({
      where: {
        member: {
          adminId,
        },
      },
    }),

    prisma.membership.count({
      where: {
        member: {
          adminId,
        },
        status: "ACTIVE",
      },
    }),

    prisma.membership.count({
      where: {
        member: {
          adminId,
        },
        status: "EXPIRED",
      },
    }),

    // Membership Plans
    prisma.membershipPlan.count({
      where: { adminId },
    }),

    prisma.membershipPlan.count({
      where: {
        adminId,
        status: "ACTIVE",
      },
    }),

    // Payments
    prisma.memberPayment.count({
      where: { adminId },
    }),

    prisma.memberPayment.count({
      where: {
        adminId,
        status: "SUCCESS",
      },
    }),

    prisma.memberPayment.count({
      where: {
        adminId,
        status: "FAILED",
      },
    }),

    prisma.memberPayment.count({
      where: {
        adminId,
        status: "REFUNDED",
      },
    }),

    // Revenue
    prisma.memberPayment.aggregate({
      where: {
        adminId,
        status: "SUCCESS",
      },
      _sum: {
        amount: true,
      },
    }),

    // Today's revenue
    prisma.memberPayment.aggregate({
      where: {
        adminId,
        status: "SUCCESS",
        paidAt: {
          gte: startOfToday(),
          lt: startOfTomorrow(),
        },
      },
      _sum: {
        amount: true,
      },
    }),
  ]);

  return {
    members: {
      total: totalMembers,
      active: activeMembers,
      inactive: inactiveMembers,
      suspended: suspendedMembers,
    },

    staff: {
      total: totalStaff,
      active: activeStaff,
      inactive: inactiveStaff,
    },

    memberships: {
      total: totalMemberships,
      active: activeMemberships,
      expired: expiredMemberships,
    },

    membershipPlans: {
      total: totalPlans,
      active: activePlans,
    },

    payments: {
      total: totalPayments,
      successful: successfulPayments,
      failed: failedPayments,
      refunded: refundedPayments,
    },

    revenue: {
      total: Number(totalRevenue._sum.amount || 0),
      today: Number(todayRevenue._sum.amount || 0),
      currency: "INR",
    },
  };
};


/**
 * =========================================================
 * MEMBERS REPORT
 * =========================================================
 */
export const getMembersReport = async (adminId, filters = {}) => {
  const where = {
    adminId,
  };

  if (filters.status) {
    where.status = filters.status;
  }

  const members = await prisma.member.findMany({
    where,

    orderBy: {
      createdAt: "desc",
    },

    include: {
      memberships: {
        orderBy: {
          createdAt: "desc",
        },

        include: {
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

      _count: {
        select: {
          memberships: true,
          payments: true,
        },
      },
    },
  });

  return members.map((member) => ({
    id: member.id,
    name: member.name,
    mobileNumber: member.mobileNumber,
    email: member.email,
    gender: member.gender,
    status: member.status,
    createdAt: member.createdAt,

    membershipCount: member._count.memberships,
    paymentCount: member._count.payments,

    memberships: member.memberships.map((membership) => ({
      id: membership.id,
      name: membership.membershipName,
      amount: Number(membership.amount),
      startDate: membership.startDate,
      endDate: membership.endDate,
      status: membership.status,

      plan: membership.membershipPlan
        ? {
            id: membership.membershipPlan.id,
            name: membership.membershipPlan.name,
            price: Number(membership.membershipPlan.price),
            durationInDays: membership.membershipPlan.durationInDays,
          }
        : null,
    })),
  }));
};


/**
 * =========================================================
 * MEMBERSHIP REPORT
 * =========================================================
 */
export const getMembershipsReport = async (adminId, filters = {}) => {
  const where = {
    member: {
      adminId,
    },
  };

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.planId) {
    where.membershipPlanId = filters.planId;
  }

  const memberships = await prisma.membership.findMany({
    where,

    orderBy: {
      createdAt: "desc",
    },

    include: {
      member: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          email: true,
        },
      },

      membershipPlan: {
        select: {
          id: true,
          name: true,
          price: true,
          durationInDays: true,
          status: true,
        },
      },

      _count: {
        select: {
          payments: true,
        },
      },
    },
  });

  return memberships.map((membership) => ({
    id: membership.id,

    member: membership.member,

    membershipName: membership.membershipName,
    amount: Number(membership.amount),

    startDate: membership.startDate,
    endDate: membership.endDate,

    status: membership.status,

    plan: membership.membershipPlan
      ? {
          id: membership.membershipPlan.id,
          name: membership.membershipPlan.name,
          price: Number(membership.membershipPlan.price),
          durationInDays: membership.membershipPlan.durationInDays,
          status: membership.membershipPlan.status,
        }
      : null,

    paymentCount: membership._count.payments,
  }));
};


/**
 * =========================================================
 * PAYMENT REPORT
 * =========================================================
 */
export const getPaymentsReport = async (adminId, filters = {}) => {
  const where = {
    adminId,
  };

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.paymentMethod) {
    where.paymentMethod = filters.paymentMethod;
  }

  if (filters.memberId) {
    where.memberId = filters.memberId;
  }

  if (filters.fromDate || filters.toDate) {
    where.createdAt = {};

    if (filters.fromDate) {
      where.createdAt.gte = new Date(filters.fromDate);
    }

    if (filters.toDate) {
      const endDate = new Date(filters.toDate);
      endDate.setDate(endDate.getDate() + 1);

      where.createdAt.lt = endDate;
    }
  }

  const [payments, summary] = await Promise.all([
    prisma.memberPayment.findMany({
      where,

      orderBy: {
        createdAt: "desc",
      },

      include: {
        member: {
          select: {
            id: true,
            name: true,
            mobileNumber: true,
          },
        },

        membership: {
          select: {
            id: true,
            membershipName: true,
            startDate: true,
            endDate: true,
          },
        },
      },
    }),

    prisma.memberPayment.aggregate({
      where: {
        ...where,
        status: "SUCCESS",
      },

      _sum: {
        amount: true,
      },

      _count: {
        id: true,
      },
    }),
  ]);

  return {
    summary: {
      totalSuccessfulPayments: summary._count.id,
      totalRevenue: Number(summary._sum.amount || 0),
      currency: "INR",
    },

    payments: payments.map((payment) => ({
      id: payment.id,

      member: payment.member,

      membership: payment.membership,

      amount: Number(payment.amount),
      currency: payment.currency,

      paymentMethod: payment.paymentMethod,
      status: payment.status,

      transactionId: payment.transactionId,
      notes: payment.notes,

      paidAt: payment.paidAt,
      createdAt: payment.createdAt,
    })),
  };
};


/**
 * =========================================================
 * STAFF ATTENDANCE REPORT
 * =========================================================
 */
export const getStaffAttendanceReport = async (
  adminId,
  filters = {}
) => {
  const where = {
    adminId,
  };

  if (filters.staffId) {
    where.staffId = filters.staffId;
  }

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.fromDate || filters.toDate) {
    where.attendanceDate = {};

    if (filters.fromDate) {
      where.attendanceDate.gte = new Date(filters.fromDate);
    }

    if (filters.toDate) {
      const endDate = new Date(filters.toDate);
      endDate.setDate(endDate.getDate() + 1);

      where.attendanceDate.lt = endDate;
    }
  }

  const attendance = await prisma.staffAttendance.findMany({
    where,

    orderBy: [
      {
        attendanceDate: "desc",
      },
      {
        createdAt: "desc",
      },
    ],

    include: {
      staff: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          staffType: true,
          designation: true,
          status: true,
        },
      },
    },
  });

  const summary = {
    total: attendance.length,
    present: 0,
    absent: 0,
    halfDay: 0,
    late: 0,
    leave: 0,
  };

  attendance.forEach((item) => {
    switch (item.status) {
      case "PRESENT":
        summary.present++;
        break;

      case "ABSENT":
        summary.absent++;
        break;

      case "HALF_DAY":
        summary.halfDay++;
        break;

      case "LATE":
        summary.late++;
        break;

      case "LEAVE":
        summary.leave++;
        break;
    }
  });

  return {
    summary,

    attendance: attendance.map((item) => ({
      id: item.id,

      staff: item.staff,

      attendanceDate: item.attendanceDate,

      checkIn: item.checkIn,
      checkOut: item.checkOut,

      status: item.status,
      notes: item.notes,

      createdAt: item.createdAt,
    })),
  };
};


/**
 * =========================================================
 * REVENUE REPORT
 * =========================================================
 */
export const getRevenueReport = async (adminId, filters = {}) => {
  const where = {
    adminId,
    status: "SUCCESS",
  };

  if (filters.fromDate || filters.toDate) {
    where.paidAt = {};

    if (filters.fromDate) {
      where.paidAt.gte = new Date(filters.fromDate);
    }

    if (filters.toDate) {
      const endDate = new Date(filters.toDate);
      endDate.setDate(endDate.getDate() + 1);

      where.paidAt.lt = endDate;
    }
  }

  const payments = await prisma.memberPayment.findMany({
    where,

    select: {
      id: true,
      amount: true,
      paymentMethod: true,
      paidAt: true,
      memberId: true,
      membershipId: true,
    },

    orderBy: {
      paidAt: "asc",
    },
  });

  let totalRevenue = 0;

  const paymentMethodSummary = {
    CASH: 0,
    UPI: 0,
    CARD: 0,
    BANK_TRANSFER: 0,
    ONLINE: 0,
  };

  const dailyRevenue = {};

  payments.forEach((payment) => {
    const amount = Number(payment.amount);

    totalRevenue += amount;

    if (payment.paymentMethod) {
      if (paymentMethodSummary[payment.paymentMethod] !== undefined) {
        paymentMethodSummary[payment.paymentMethod] += amount;
      }
    }

    if (payment.paidAt) {
      const date = new Date(payment.paidAt)
        .toISOString()
        .split("T")[0];

      if (!dailyRevenue[date]) {
        dailyRevenue[date] = 0;
      }

      dailyRevenue[date] += amount;
    }
  });

  return {
    currency: "INR",

    totalRevenue,

    totalPayments: payments.length,

    paymentMethodSummary,

    dailyRevenue: Object.entries(dailyRevenue).map(
      ([date, amount]) => ({
        date,
        amount,
      })
    ),
  };
};


/**
 * =========================================================
 * DATE HELPERS
 * =========================================================
 */
const startOfToday = () => {
  const date = new Date();

  date.setHours(0, 0, 0, 0);

  return date;
};

const startOfTomorrow = () => {
  const date = new Date();

  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1);

  return date;
};