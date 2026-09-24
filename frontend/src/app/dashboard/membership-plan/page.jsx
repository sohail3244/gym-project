"use client";

import React, { useState } from "react";

import {
  Plus,
  CreditCard,
  Users,
  TrendingUp,
} from "lucide-react";

import Button from "@/components/ui/Button";
import MembershipPlanTable from "@/components/table/MembershipPlanTable";
import MembershipPlanModal from "@/components/modals/MembershipPlanModal";

import {
  useMembershipPlans,
  useCreateMembershipPlan,
  useUpdateMembershipPlan,
  useUpdateMembershipPlanStatus,
  useDeleteMembershipPlan,
} from "@/lib/hooks/useMembershipPlan";

export default function MembershipPlansPage() {
  // =========================================================
  // MODAL STATE
  // =========================================================

  const [showCreateModal, setShowCreateModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [selectedPlan, setSelectedPlan] =
    useState(null);

  // =========================================================
  // GET MEMBERSHIP PLANS
  // =========================================================

  const {
    data: membershipPlansResponse,
    isLoading: plansLoading,
    isError: plansIsError,
    error: plansError,
  } = useMembershipPlans();

  // =========================================================
  // CREATE MEMBERSHIP PLAN
  // =========================================================

  const createMembershipPlanMutation =
    useCreateMembershipPlan();

  // =========================================================
  // UPDATE MEMBERSHIP PLAN
  // =========================================================

  const updateMembershipPlanMutation =
    useUpdateMembershipPlan();

  // =========================================================
  // UPDATE MEMBERSHIP PLAN STATUS
  // =========================================================

  const updateMembershipPlanStatusMutation =
    useUpdateMembershipPlanStatus();

  // =========================================================
  // DELETE MEMBERSHIP PLAN
  // =========================================================

  const deleteMembershipPlanMutation =
    useDeleteMembershipPlan();

  // =========================================================
  // NORMALIZE RESPONSE
  // =========================================================

  const membershipPlans = Array.isArray(
    membershipPlansResponse?.data
  )
    ? membershipPlansResponse.data
    : [];

  // =========================================================
  // STATS
  // =========================================================

  const totalPlans =
    membershipPlans.length;

  const activePlans =
    membershipPlans.filter(
      (plan) =>
        plan.status === "ACTIVE"
    ).length;

  const totalMembers =
    membershipPlans.reduce(
      (total, plan) =>
        total +
        Number(
          plan?._count?.memberships || 0
        ),
      0
    );

  // =========================================================
  // CREATE PLAN
  // =========================================================

  const handleCreatePlan = async (
    payload
  ) => {
    try {
      await createMembershipPlanMutation.mutateAsync(
        payload
      );

      setShowCreateModal(false);
    } catch (error) {
      console.error(
        "Create Membership Plan Error:",
        error
      );
    }
  };

  // =========================================================
  // VIEW PLAN
  // =========================================================

  const handleViewPlan = (plan) => {
    console.log(
      "View Membership Plan:",
      plan
    );

    // Abhi detail page/modal nahi banaya hai.
    // Isliye selected plan ko store kar rahe hain.
    setSelectedPlan(plan);
  };

  // =========================================================
  // EDIT PLAN
  // =========================================================

  const handleEditPlan = (plan) => {
    setSelectedPlan(plan);
    setShowEditModal(true);
  };

  // =========================================================
  // UPDATE PLAN
  // =========================================================

  const handleUpdatePlan = async (
    payload
  ) => {
    if (!selectedPlan?.id) return;

    try {
      await updateMembershipPlanMutation.mutateAsync(
        {
          planId: selectedPlan.id,
          data: payload,
        }
      );

      setShowEditModal(false);
      setSelectedPlan(null);
    } catch (error) {
      console.error(
        "Update Membership Plan Error:",
        error
      );
    }
  };

  // =========================================================
  // TOGGLE PLAN STATUS
  // =========================================================

  const handleTogglePlanStatus = async (
    plan
  ) => {
    if (!plan?.id) return;

    const newStatus =
      plan.status === "ACTIVE"
        ? "INACTIVE"
        : "ACTIVE";

    try {
      await updateMembershipPlanStatusMutation.mutateAsync(
        {
          planId: plan.id,
          status: newStatus,
        }
      );
    } catch (error) {
      console.error(
        "Update Membership Plan Status Error:",
        error
      );
    }
  };

  // =========================================================
  // DELETE PLAN
  // =========================================================

  const handleDeletePlan = async (
    plan
  ) => {
    if (!plan?.id) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${plan.name}"?`
    );

    if (!confirmed) return;

    try {
      await deleteMembershipPlanMutation.mutateAsync(
        plan.id
      );
    } catch (error) {
      console.error(
        "Delete Membership Plan Error:",
        error
      );
    }
  };

  // =========================================================
  // ERROR MESSAGE
  // =========================================================

  const errorMessage =
    plansError?.response?.data?.message ||
    plansError?.message ||
    "Failed to load membership plans.";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <>
      <div className="space-y-6 p-6">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Membership Plans
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Create and manage membership plans
              for your gym members.
            </p>
          </div>

          <Button
            icon={Plus}
            onClick={() => {
              setSelectedPlan(null);
              setShowCreateModal(true);
            }}
            disabled={
              createMembershipPlanMutation.isPending
            }
          >
            Create Plan
          </Button>
        </div>

        {/* =====================================================
            ERROR
        ====================================================== */}

        {plansIsError && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
            {errorMessage}
          </div>
        )}

        {/* =====================================================
            STATS
        ====================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* TOTAL PLANS */}

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Plans
                </p>

                <h2 className="mt-1 text-2xl font-bold text-foreground">
                  {plansLoading
                    ? "..."
                    : totalPlans}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CreditCard size={20} />
              </div>
            </div>
          </div>

          {/* ACTIVE PLANS */}

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Active Plans
                </p>

                <h2 className="mt-1 text-2xl font-bold text-foreground">
                  {plansLoading
                    ? "..."
                    : activePlans}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>

          {/* TOTAL MEMBERS */}

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Members
                </p>

                <h2 className="mt-1 text-2xl font-bold text-foreground">
                  {plansLoading
                    ? "..."
                    : totalMembers}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TABLE SECTION
        ====================================================== */}

        <div className="rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-base font-semibold text-foreground">
              All Membership Plans
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Manage pricing, duration, features
              and plan status.
            </p>
          </div>

          <div className="p-6">
            <MembershipPlanTable
              plans={membershipPlans}
              total={membershipPlans.length}
              loading={plansLoading}
              onView={handleViewPlan}
              onEdit={handleEditPlan}
              onToggleStatus={
                handleTogglePlanStatus
              }
              onDelete={handleDeletePlan}
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          CREATE MEMBERSHIP PLAN MODAL
      ====================================================== */}

      <MembershipPlanModal
        isOpen={showCreateModal}
        onClose={() => {
          if (
            !createMembershipPlanMutation.isPending
          ) {
            setShowCreateModal(false);
          }
        }}
        mode="create"
        plan={null}
        onSuccess={handleCreatePlan}
        isLoading={
          createMembershipPlanMutation.isPending
        }
      />

      {/* =====================================================
          EDIT MEMBERSHIP PLAN MODAL
      ====================================================== */}

      <MembershipPlanModal
        isOpen={showEditModal}
        onClose={() => {
          if (
            !updateMembershipPlanMutation.isPending
          ) {
            setShowEditModal(false);
            setSelectedPlan(null);
          }
        }}
        mode="edit"
        plan={selectedPlan}
        onSuccess={handleUpdatePlan}
        isLoading={
          updateMembershipPlanMutation.isPending
        }
      />
    </>
  );
}