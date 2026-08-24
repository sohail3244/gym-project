import prisma from "../prisma/prisma.js";

const createMemberPayment = async (adminId, data) => {
  const {
    memberId,
    membershipId,
    amount,
    currency,
    paymentMethod,
    transactionId,
    notes,
    paidAt,
  } = data;

  if (!memberId) {
    throw new Error("Member ID is required");
  }

  if (amount === undefined || amount === null) {
    throw new Error("Amount is required");
  }

  if (Number(amount) <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  const member = await prisma.member.findFirst({
    where: {
      id: memberId,
      adminId,
    },
  });

  if (!member) {
    throw new Error("Member not found");
  }

  if (membershipId) {
    const membership = await prisma.membership.findFirst({
      where: {
        id: membershipId,
        memberId,
      },
    });

    if (!membership) {
      throw new Error(
        "Membership not found or does not belong to this member"
      );
    }
  }

  if (paymentMethod) {
    const validMethods = [
      "ONLINE",
      "CASH",
      "BANK_TRANSFER",
      "UPI",
      "CARD",
    ];

    if (!validMethods.includes(paymentMethod)) {
      throw new Error("Invalid payment method");
    }
  }

  if (transactionId) {
    const existingPayment = await prisma.memberPayment.findUnique({
      where: {
        transactionId,
      },
    });

    if (existingPayment) {
      throw new Error("Transaction ID already exists");
    }
  }

  const payment = await prisma.memberPayment.create({
    data: {
      adminId,
      memberId,
      membershipId: membershipId || null,
      amount,
      currency: currency || "INR",
      paymentMethod: paymentMethod || null,
      status: "SUCCESS",
      transactionId: transactionId || null,
      notes: notes || null,
      paidAt: paidAt ? new Date(paidAt) : new Date(),
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
      membership: {
        include: {
          membershipPlan: true,
        },
      },
    },
  });

  return payment;
};

const getMemberPayments = async (adminId, query = {}) => {
  const {
    memberId,
    membershipId,
    status,
    paymentMethod,
    fromDate,
    toDate,
    search,
  } = query;

  const where = {
    adminId,
  };

  if (memberId) {
    where.memberId = memberId;
  }

  if (membershipId) {
    where.membershipId = membershipId;
  }

  if (status) {
    where.status = status;
  }

  if (paymentMethod) {
    where.paymentMethod = paymentMethod;
  }

  if (fromDate || toDate) {
    where.createdAt = {};

    if (fromDate) {
      where.createdAt.gte = new Date(fromDate);
    }

    if (toDate) {
      const endDate = new Date(toDate);
      endDate.setHours(23, 59, 59, 999);
      where.createdAt.lte = endDate;
    }
  }

  if (search) {
    where.OR = [
      {
        transactionId: {
          contains: search,
        },
      },
      {
        notes: {
          contains: search,
        },
      },
      {
        member: {
          name: {
            contains: search,
          },
        },
      },
      {
        member: {
          mobileNumber: {
            contains: search,
          },
        },
      },
    ];
  }

  return await prisma.memberPayment.findMany({
    where,
    include: {
      member: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          email: true,
        },
      },
      membership: {
        include: {
          membershipPlan: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getMemberPaymentById = async (adminId, paymentId) => {
  const payment = await prisma.memberPayment.findFirst({
    where: {
      id: paymentId,
      adminId,
    },
    include: {
      member: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          email: true,
          status: true,
        },
      },
      membership: {
        include: {
          membershipPlan: true,
        },
      },
    },
  });

  if (!payment) {
    throw new Error("Member payment not found");
  }

  return payment;
};

const getPaymentsByMember = async (adminId, memberId) => {
  const member = await prisma.member.findFirst({
    where: {
      id: memberId,
      adminId,
    },
  });

  if (!member) {
    throw new Error("Member not found");
  }

  return await prisma.memberPayment.findMany({
    where: {
      adminId,
      memberId,
    },
    include: {
      membership: {
        include: {
          membershipPlan: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const updateMemberPayment = async (
  adminId,
  paymentId,
  data
) => {
  const existingPayment =
    await prisma.memberPayment.findFirst({
      where: {
        id: paymentId,
        adminId,
      },
    });

  if (!existingPayment) {
    throw new Error("Member payment not found");
  }

  const {
    amount,
    currency,
    paymentMethod,
    transactionId,
    status,
    notes,
    paidAt,
  } = data;

  const updateData = {};

  if (amount !== undefined) {
    if (Number(amount) <= 0) {
      throw new Error("Amount must be greater than 0");
    }

    updateData.amount = amount;
  }

  if (currency !== undefined) {
    updateData.currency = currency;
  }

  if (paymentMethod !== undefined) {
    const validMethods = [
      "ONLINE",
      "CASH",
      "BANK_TRANSFER",
      "UPI",
      "CARD",
    ];

    if (
      paymentMethod !== null &&
      !validMethods.includes(paymentMethod)
    ) {
      throw new Error("Invalid payment method");
    }

    updateData.paymentMethod = paymentMethod;
  }

  if (transactionId !== undefined) {
    if (transactionId) {
      const duplicate =
        await prisma.memberPayment.findFirst({
          where: {
            transactionId,
            id: {
              not: paymentId,
            },
          },
        });

      if (duplicate) {
        throw new Error("Transaction ID already exists");
      }
    }

    updateData.transactionId = transactionId;
  }

  if (status !== undefined) {
    const validStatuses = [
      "PENDING",
      "SUCCESS",
      "FAILED",
      "REFUNDED",
    ];

    if (!validStatuses.includes(status)) {
      throw new Error("Invalid payment status");
    }

    updateData.status = status;
  }

  if (notes !== undefined) {
    updateData.notes = notes;
  }

  if (paidAt !== undefined) {
    updateData.paidAt = paidAt
      ? new Date(paidAt)
      : null;
  }

  return await prisma.memberPayment.update({
    where: {
      id: paymentId,
    },
    data: updateData,
    include: {
      member: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          email: true,
        },
      },
      membership: {
        include: {
          membershipPlan: true,
        },
      },
    },
  });
};

const updateMemberPaymentStatus = async (
  adminId,
  paymentId,
  status
) => {
  const validStatuses = [
    "PENDING",
    "SUCCESS",
    "FAILED",
    "REFUNDED",
  ];

  if (!validStatuses.includes(status)) {
    throw new Error("Invalid payment status");
  }

  const existingPayment =
    await prisma.memberPayment.findFirst({
      where: {
        id: paymentId,
        adminId,
      },
    });

  if (!existingPayment) {
    throw new Error("Member payment not found");
  }

  return await prisma.memberPayment.update({
    where: {
      id: paymentId,
    },
    data: {
      status,
      paidAt:
        status === "SUCCESS"
          ? existingPayment.paidAt || new Date()
          : existingPayment.paidAt,
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
      membership: {
        include: {
          membershipPlan: true,
        },
      },
    },
  });
};

const deleteMemberPayment = async (
  adminId,
  paymentId
) => {
  const existingPayment =
    await prisma.memberPayment.findFirst({
      where: {
        id: paymentId,
        adminId,
      },
    });

  if (!existingPayment) {
    throw new Error("Member payment not found");
  }

  await prisma.memberPayment.delete({
    where: {
      id: paymentId,
    },
  });

  return {
    id: paymentId,
  };
};

const getPaymentSummary = async (adminId, query = {}) => {
  const { memberId, fromDate, toDate } = query;

  const where = {
    adminId,
    status: "SUCCESS",
  };

  if (memberId) {
    where.memberId = memberId;
  }

  if (fromDate || toDate) {
    where.paidAt = {};

    if (fromDate) {
      where.paidAt.gte = new Date(fromDate);
    }

    if (toDate) {
      const endDate = new Date(toDate);
      endDate.setHours(23, 59, 59, 999);
      where.paidAt.lte = endDate;
    }
  }

  const payments = await prisma.memberPayment.findMany({
    where,
    select: {
      amount: true,
    },
  });

  const totalAmount = payments.reduce(
    (total, payment) =>
      total + Number(payment.amount),
    0
  );

  return {
    totalPayments: payments.length,
    totalAmount,
  };
};

export default {
  createMemberPayment,
  getMemberPayments,
  getMemberPaymentById,
  getPaymentsByMember,
  updateMemberPayment,
  updateMemberPaymentStatus,
  deleteMemberPayment,
  getPaymentSummary,
};