import prisma from "../prisma/prisma.js";

const createMembershipPlan = async (adminId, data) => {
  const {
    name,
    description,
    price,
    durationInDays,
    features,
  } = data;

  if (!name || price === undefined || !durationInDays) {
    throw new Error("Name, price and duration are required");
  }

  const admin = await prisma.user.findFirst({
    where: {
      id: adminId,
      role: "ADMIN",
      status: "ACTIVE",
    },
  });

  if (!admin) {
    throw new Error("Admin not found or inactive");
  }

  const membershipPlan = await prisma.membershipPlan.create({
    data: {
      adminId,
      name,
      description: description || null,
      price,
      durationInDays: Number(durationInDays),
      features: features || null,
      status: "ACTIVE",
    },
  });

  return membershipPlan;
};

const getMembershipPlans = async (adminId, query = {}) => {
  const { status, search } = query;

  const where = {
    adminId,
  };

  if (status) {
    where.status = status;
  }

  if (search) {
    where.OR = [
      {
        name: {
          contains: search,
        },
      },
      {
        description: {
          contains: search,
        },
      },
    ];
  }

  return await prisma.membershipPlan.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          memberships: true,
        },
      },
    },
  });
};

const getMembershipPlanById = async (adminId, planId) => {
  const membershipPlan = await prisma.membershipPlan.findFirst({
    where: {
      id: planId,
      adminId,
    },
    include: {
      _count: {
        select: {
          memberships: true,
        },
      },
    },
  });

  if (!membershipPlan) {
    throw new Error("Membership plan not found");
  }

  return membershipPlan;
};

const updateMembershipPlan = async (adminId, planId, data) => {
  const existingPlan = await prisma.membershipPlan.findFirst({
    where: {
      id: planId,
      adminId,
    },
  });

  if (!existingPlan) {
    throw new Error("Membership plan not found");
  }

  const {
    name,
    description,
    price,
    durationInDays,
    features,
    status,
  } = data;

  const updateData = {};

  if (name !== undefined) {
    updateData.name = name;
  }

  if (description !== undefined) {
    updateData.description = description;
  }

  if (price !== undefined) {
    updateData.price = price;
  }

  if (durationInDays !== undefined) {
    updateData.durationInDays = Number(durationInDays);
  }

  if (features !== undefined) {
    updateData.features = features;
  }

  if (status !== undefined) {
    if (!["ACTIVE", "INACTIVE"].includes(status)) {
      throw new Error("Invalid membership plan status");
    }

    updateData.status = status;
  }

  return await prisma.membershipPlan.update({
    where: {
      id: planId,
    },
    data: updateData,
  });
};

const updateMembershipPlanStatus = async (
  adminId,
  planId,
  status
) => {
  if (!["ACTIVE", "INACTIVE"].includes(status)) {
    throw new Error("Invalid membership plan status");
  }

  const existingPlan = await prisma.membershipPlan.findFirst({
    where: {
      id: planId,
      adminId,
    },
  });

  if (!existingPlan) {
    throw new Error("Membership plan not found");
  }

  return await prisma.membershipPlan.update({
    where: {
      id: planId,
    },
    data: {
      status,
    },
  });
};

const deleteMembershipPlan = async (adminId, planId) => {
  const existingPlan = await prisma.membershipPlan.findFirst({
    where: {
      id: planId,
      adminId,
    },
    include: {
      _count: {
        select: {
          memberships: true,
        },
      },
    },
  });

  if (!existingPlan) {
    throw new Error("Membership plan not found");
  }

  if (existingPlan._count.memberships > 0) {
    throw new Error(
      "Cannot delete membership plan because memberships are already assigned to it"
    );
  }

  await prisma.membershipPlan.delete({
    where: {
      id: planId,
    },
  });

  return {
    id: planId,
  };
};

export default {
  createMembershipPlan,
  getMembershipPlans,
  getMembershipPlanById,
  updateMembershipPlan,
  updateMembershipPlanStatus,
  deleteMembershipPlan,
};