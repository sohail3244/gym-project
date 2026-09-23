"use client";

import React, { useState } from "react";

import {
  Plus,
  CreditCard,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import Button from "@/components/ui/Button";
import BusinessPlanTable from "@/components/table/BusinessPlanTable";
import PlanModal from "@/components/modals/PlanModal";
import {
  useCreatePlan,
  usePlans,
  useUpdatePlan,
  useUpdatePlanStatus,
} from "@/lib/hooks/usePlans";



export default function PlansPage() {
  /* =====================================================
     MODAL STATE
  ===================================================== */

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  /* =====================================================
     GET PLANS
  ===================================================== */

  const {
    data: plansResponse,
    isLoading: plansLoading,
    isError: plansError,
    error: plansErrorData,
  } = usePlans();

  /* =====================================================
     CREATE PLAN
  ===================================================== */

  const updatePlanMutation = useUpdatePlan();
  const updatePlanStatusMutation = useUpdatePlanStatus();

  /* =====================================================
     NORMALIZE PLANS RESPONSE
     
     Backend response:
     {
       success: true,
       data: {
         plans: []
       }
     }
  ===================================================== */

  const plans = Array.isArray(plansResponse?.data?.plans)
    ? plansResponse.data.plans
    : [];

  /* =====================================================
     PLAN ACTIONS
  ===================================================== */

  const handleView = (plan) => {
    console.log("View Plan:", plan);
  };

  const handleEdit = (plan) => {
    if (!plan?.id) return;

    setSelectedPlan(plan);
    setShowEditModal(true);
  };

  const handleDelete = (plan) => {
    console.log("Delete Plan:", plan);
  };

  const handleToggleStatus = async (plan) => {
    if (!plan?.id) return;

    const nextStatus =
      plan.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

    try {
      await updatePlanStatusMutation.mutateAsync({
        planId: plan.id,
        status: nextStatus,
      });
    } catch (error) {
      console.error("Update Plan Status Error:", error);
    }
  };

  /* =====================================================
     CREATE PLAN HANDLER
  ===================================================== */

  const handleCreatePlan = async (payload) => {
    try {
      await createPlanMutation.mutateAsync(payload);

      setShowCreateModal(false);
    } catch (error) {
      console.error("Create Plan Error:", error);
    }
  };

  const handleUpdatePlan = async (payload) => {
    if (!selectedPlan?.id) return;

    try {
      await updatePlanMutation.mutateAsync({
        planId: selectedPlan.id,
        data: payload,
      });

      setShowEditModal(false);
      setSelectedPlan(null);
    } catch (error) {
      console.error("Update Plan Error:", error);
    }
  };

  /* =====================================================
     SUMMARY DATA
  ===================================================== */

  const totalPlans = plans.length;

  const activePlans = plans.filter(
    (plan) => plan.status === "ACTIVE"
  ).length;

  const prices = plans
    .map((plan) => Number(plan.price))
    .filter((price) => Number.isFinite(price));

  const startingPrice =
    prices.length > 0 ? Math.min(...prices) : 0;

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <main className="min-h-screen bg-background">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          space-y-6
          p-4
          sm:p-6
          lg:p-8
        "
      >
        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* PAGE TITLE */}

          <div>
            <div className="flex items-center gap-2">
              {/* ICON */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <CreditCard size={20} />
              </div>

              {/* TITLE */}

              <div>
                <h1
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-foreground
                    sm:text-2xl
                  "
                >
                  Business Plans
                </h1>

                <p className="mt-0.5 text-sm text-muted-foreground">
                  Manage subscription plans for your businesses.
                </p>
              </div>
            </div>
          </div>

          {/* CREATE BUTTON */}

          <Button
            type="button"
            icon={Plus}
            iconPosition="left"
            onClick={() => setShowCreateModal(true)}
          >
            Create Plan
          </Button>
        </div>

        {/* =================================================
            ERROR MESSAGE
        ================================================= */}

        {plansError && (
          <div
            className="
              rounded-xl
              border
              border-destructive/20
              bg-destructive/10
              p-4
              text-sm
              text-destructive
            "
          >
            {plansErrorData?.response?.data?.message ||
              plansErrorData?.message ||
              "Failed to load plans."}
          </div>
        )}

        {/* =================================================
            SUMMARY CARDS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* =================================================
              TOTAL PLANS
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-muted-foreground
                  "
                >
                  Total Plans
                </p>

                <p
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-foreground
                  "
                >
                  {plansLoading ? "..." : totalPlans}
                </p>
              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <Layers3 size={19} />
              </div>
            </div>
          </div>

          {/* =================================================
              ACTIVE PLANS
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-muted-foreground
                  "
                >
                  Active Plans
                </p>

                <p
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-foreground
                  "
                >
                  {plansLoading ? "..." : activePlans}
                </p>
              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500/10
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                <CheckCircle2 size={19} />
              </div>
            </div>
          </div>

          {/* =================================================
              STARTING PRICE
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-muted-foreground
                  "
                >
                  Starting Price
                </p>

                <p
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-foreground
                  "
                >
                  {plansLoading
                    ? "..."
                    : `₹${startingPrice.toLocaleString("en-IN")}`}
                </p>
              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <CreditCard size={19} />
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            PLAN TABLE
        ================================================= */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-card
            shadow-sm
          "
        >
          <BusinessPlanTable
            plans={plans}
            loading={plansLoading}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
            statusLoading={updatePlanStatusMutation.isPending}
          />
        </div>
      </div>

      {/* ===================================================
          CREATE PLAN MODAL
      =================================================== */}

      <PlanModal
        isOpen={showEditModal}
        onClose={() => {
          if (!updatePlanMutation.isPending) {
            setShowEditModal(false);
            setSelectedPlan(null);
          }
        }}
        mode="edit"
        plan={selectedPlan}
        onSuccess={handleUpdatePlan}
        isLoading={updatePlanMutation.isPending}
      />
    </main>
  );
}