"use client";

import React, { useState } from "react";
import {
  Plus,
  Building2,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

import Button from "@/components/ui/Button";
import AdminModal from "@/components/modals/AdminModal";
import AdminTable from "@/components/table/AdminTable";

import {
  useAdmins,
  useChangeAdminStatus,
} from "@/lib/hooks/useAdmin";

export default function BusinessPage() {
  /* =========================================================
     ADMIN LIST
  ========================================================= */

  const {
    data: adminsResponse,
    isLoading: adminsLoading,
    isError: adminsError,
    error: adminsErrorData,
  } = useAdmins();

  /* =========================================================
     CHANGE ADMIN STATUS
  ========================================================= */

  const changeAdminStatusMutation =
    useChangeAdminStatus();

  /* =========================================================
     NORMALIZE API RESPONSE
     
     Backend response:
     {
       success: true,
       message: "...",
       data: {
         admins: [],
         pagination: {}
       }
     }
  ========================================================= */

  const admins = Array.isArray(
    adminsResponse?.data?.admins
  )
    ? adminsResponse.data.admins
    : [];

  const pagination =
    adminsResponse?.data?.pagination;

  const totalAdmins =
    pagination?.total ?? admins.length;

  /* =========================================================
     STATS
  ========================================================= */

  const activeAdmins = admins.filter(
    (admin) => admin.status === "ACTIVE"
  ).length;

  const pendingAdmins = admins.filter(
    (admin) => admin.status === "PENDING"
  ).length;

  const inactiveAdmins = admins.filter(
    (admin) =>
      admin.status === "INACTIVE" ||
      admin.status === "SUSPENDED"
  ).length;

  /* =========================================================
     MODAL STATES
  ========================================================= */

  const [isAdminModalOpen, setIsAdminModalOpen] =
    useState(false);

  const [selectedAdmin, setSelectedAdmin] =
    useState(null);

  /* =========================================================
     CREATE ADMIN
  ========================================================= */

  const handleCreate = () => {
    setSelectedAdmin(null);
    setIsAdminModalOpen(true);
  };

  /* =========================================================
     EDIT ADMIN
  ========================================================= */

  const handleEdit = (admin) => {
    setSelectedAdmin(admin);
    setIsAdminModalOpen(true);
  };

  /* =========================================================
     ACTIVATE ADMIN
  ========================================================= */

  const handleActivate = async (admin) => {
    try {
      await changeAdminStatusMutation.mutateAsync({
        adminId: admin.id,
        status: "ACTIVE",
      });
    } catch (error) {
      console.error(
        "Failed to activate admin:",
        error
      );
    }
  };

  /* =========================================================
     SUSPEND ADMIN
  ========================================================= */

  const handleSuspend = async (admin) => {
    try {
      await changeAdminStatusMutation.mutateAsync({
        adminId: admin.id,
        status: "SUSPENDED",
      });
    } catch (error) {
      console.error(
        "Failed to suspend admin:",
        error
      );
    }
  };

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const handleCloseModal = () => {
    setIsAdminModalOpen(false);
    setSelectedAdmin(null);
  };

  /* =========================================================
     MODAL SUCCESS
  ========================================================= */

  const handleModalSuccess = () => {
    setIsAdminModalOpen(false);
    setSelectedAdmin(null);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="space-y-6">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Business Directory
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage all registered gym businesses
          </p>
        </div>

        <Button
          text="Add New"
          icon={Plus}
          iconPosition="left"
          onClick={handleCreate}
        />
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {/* TOTAL */}

        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Building2
              size={16}
              className="text-primary"
            />

            <span className="text-xs font-medium text-muted-foreground">
              Total
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-foreground">
            {totalAdmins}
          </p>
        </div>

        {/* ACTIVE */}

        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle
              size={16}
              className="text-emerald-500"
            />

            <span className="text-xs font-medium text-muted-foreground">
              Active
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-foreground">
            {activeAdmins}
          </p>
        </div>

        {/* PENDING */}

        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock
              size={16}
              className="text-amber-500"
            />

            <span className="text-xs font-medium text-muted-foreground">
              Pending
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-foreground">
            {pendingAdmins}
          </p>
        </div>

        {/* INACTIVE */}

        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <XCircle
              size={16}
              className="text-rose-500"
            />

            <span className="text-xs font-medium text-muted-foreground">
              Inactive
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-foreground">
            {inactiveAdmins}
          </p>
        </div>
      </div>

      {/* =====================================================
          API ERROR
      ===================================================== */}

      {adminsError && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
          {adminsErrorData?.response?.data?.message ||
            adminsErrorData?.message ||
            "Failed to load admins."}
        </div>
      )}

      {/* =====================================================
          ADMIN TABLE
      ===================================================== */}

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        {adminsLoading ? (
          <div className="flex min-h-80 items-center justify-center">
            <div className="text-sm text-muted-foreground">
              Loading admins...
            </div>
          </div>
        ) : (
          <AdminTable
            admins={admins}
            total={totalAdmins}
            onEdit={handleEdit}
            onActivate={handleActivate}
            onSuspend={handleSuspend}
            actionLoading={changeAdminStatusMutation.isPending}
          />
        )}
      </div>

      {/* =====================================================
          ADMIN MODAL
          
          selectedAdmin === null
          => CREATE MODE

          selectedAdmin exists
          => EDIT MODE
      ===================================================== */}

      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={handleCloseModal}
        mode={
          selectedAdmin
            ? "edit"
            : "create"
        }
        admin={selectedAdmin}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
}