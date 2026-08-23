import prisma from "../prisma/prisma.js";

const createPlan = async ({
  name,
  description,
  price,
  billingInterval,
  durationInDays,
  maxMembers,
  maxStaff,
  maxBusinesses,
  features,
}) => {
  const existingPlan = await prisma.plan.findFirst({
    where: {
      name,
    },
  });

  if (existingPlan) {
    throw new Error("A plan with this name already exists");
  }

  const plan = await prisma.plan.create({
    data: {
      name,
      description: description || null,
      price,
      billingInterval,
      durationInDays,
      maxMembers: maxMembers ?? null,
      maxStaff: maxStaff ?? null,
      maxBusinesses: maxBusinesses ?? null,
      features: features || null,
    },
  });

  return plan;
};

const getPlans = async ({
  status,
  billingInterval,
  search,
}) => {
  const where = {};

  if (status) {
    where.status = status;
  }

  if (billingInterval) {
    where.billingInterval = billingInterval;
  }

  if (search) {
    where.name = {
      contains: search,
    };
  }

  const plans = await prisma.plan.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          subscriptions: true,
        },
      },
    },
  });

  return plans;
};

const getPlanById = async (id) => {
  const plan = await prisma.plan.findUnique({
    where: {
      id,
    },
    include: {
      _count: {
        select: {
          subscriptions: true,
        },
      },
    },
  });

  if (!plan) {
    throw new Error("Plan not found");
  }

  return plan;
};

const updatePlan = async (
  id,
  {
    name,
    description,
    price,
    billingInterval,
    durationInDays,
    maxMembers,
    maxStaff,
    maxBusinesses,
    features,
  }
) => {
  const existingPlan = await prisma.plan.findUnique({
    where: {
      id,
    },
  });

  if (!existingPlan) {
    throw new Error("Plan not found");
  }

  if (name && name !== existingPlan.name) {
    const duplicatePlan = await prisma.plan.findFirst({
      where: {
        name,
        NOT: {
          id,
        },
      },
    });

    if (duplicatePlan) {
      throw new Error("A plan with this name already exists");
    }
  }

  const data = {};

  if (name !== undefined) data.name = name;
  if (description !== undefined) data.description = description;
  if (price !== undefined) data.price = price;
  if (billingInterval !== undefined) {
    data.billingInterval = billingInterval;
  }
  if (durationInDays !== undefined) {
    data.durationInDays = durationInDays;
  }
  if (maxMembers !== undefined) {
    data.maxMembers = maxMembers;
  }
  if (maxStaff !== undefined) {
    data.maxStaff = maxStaff;
  }
  if (maxBusinesses !== undefined) {
    data.maxBusinesses = maxBusinesses;
  }
  if (features !== undefined) {
    data.features = features;
  }

  const plan = await prisma.plan.update({
    where: {
      id,
    },
    data,
  });

  return plan;
};

const updatePlanStatus = async (id, status) => {
  const plan = await prisma.plan.findUnique({
    where: {
      id,
    },
  });

  if (!plan) {
    throw new Error("Plan not found");
  }

  const updatedPlan = await prisma.plan.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });

  return updatedPlan;
};

const deletePlan = async (id) => {
  const plan = await prisma.plan.findUnique({
    where: {
      id,
    },
    include: {
      _count: {
        select: {
          subscriptions: true,
        },
      },
    },
  });

  if (!plan) {
    throw new Error("Plan not found");
  }

  if (plan._count.subscriptions > 0) {
    throw new Error(
      "Plan cannot be deleted because it has subscriptions"
    );
  }

  await prisma.plan.delete({
    where: {
      id,
    },
  });

  return {
    id,
    message: "Plan deleted successfully",
  };
};

export default {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  updatePlanStatus,
  deletePlan,
};