"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

import EmployeeTable from "@/components/table/EmployeeTable";
import StaffModal from "@/components/modals/StaffModal";

import {
  useStaff,
  useCreateStaff,
  useUpdateStaff,
  useUpdateStaffStatus,
  useDeleteStaff,
} from "@/lib/hooks/useStaff";

export default function EmployeesPage() {
  // =========================================================
  // STAFF MODAL
  // =========================================================

  const [showStaffModal, setShowStaffModal] =
    useState(false);

  const [editingStaff, setEditingStaff] =
    useState(null);

  // =========================================================
  // FILTERS
  // =========================================================

  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: "",
    status: "",
    staffType: "",
  });

  // =========================================================
  // GET STAFF
  // =========================================================

  const {
    data,
    isLoading,
    isFetching,
    error,
  } = useStaff(filters);

  // =========================================================
  // CREATE STAFF
  // =========================================================

  const createStaffMutation =
    useCreateStaff();

  // =========================================================
  // UPDATE STAFF
  // =========================================================

  const updateStaffMutation =
    useUpdateStaff();

  // =========================================================
  // UPDATE STAFF STATUS
  // =========================================================

  const updateStaffStatusMutation =
    useUpdateStaffStatus();

  // =========================================================
  // DELETE STAFF
  // =========================================================

  const deleteStaffMutation =
    useDeleteStaff();

  // =========================================================
  // STAFF DATA
  // =========================================================

  const staff =
    data?.data?.staff || [];

  const pagination =
    data?.data?.pagination || {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 1,
    };

  // =========================================================
  // CREATE STAFF
  // =========================================================

  const handleCreateStaff = async (
    payload
  ) => {
    try {
      await createStaffMutation.mutateAsync(
        payload
      );

      setShowStaffModal(false);
      setEditingStaff(null);

      setFilters((prev) => ({
        ...prev,
        page: 1,
      }));
    } catch (error) {
      console.error(
        "Create Staff Error:",
        error
      );
    }
  };

  // =========================================================
  // OPEN EDIT STAFF
  // =========================================================

  const handleEditStaff = (employee) => {
    setEditingStaff(employee);
    setShowStaffModal(true);
  };

  // =========================================================
  // UPDATE STAFF
  // =========================================================

  const handleUpdateStaff = async (
    payload
  ) => {
    if (!editingStaff?.id) return;

    try {
      await updateStaffMutation.mutateAsync({
        staffId: editingStaff.id,
        data: payload,
      });

      setShowStaffModal(false);
      setEditingStaff(null);
    } catch (error) {
      console.error(
        "Update Staff Error:",
        error
      );
    }
  };

  // =========================================================
  // CHANGE STAFF STATUS
  // =========================================================

  const handleToggleStaffStatus = async (
    employee
  ) => {
    if (!employee?.id) return;

    const newStatus =
      employee.status === "ACTIVE"
        ? "INACTIVE"
        : "ACTIVE";

    try {
      await updateStaffStatusMutation.mutateAsync(
        {
          staffId: employee.id,
          status: newStatus,
        }
      );
    } catch (error) {
      console.error(
        "Update Staff Status Error:",
        error
      );
    }
  };

  // =========================================================
  // DELETE STAFF
  // =========================================================

  const handleDeleteStaff = async (
    employee
  ) => {
    if (!employee?.id) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (!confirmed) return;

    try {
      await deleteStaffMutation.mutateAsync(
        employee.id
      );
    } catch (error) {
      console.error(
        "Delete Staff Error:",
        error
      );
    }
  };

  // =========================================================
  // VIEW STAFF
  // =========================================================

  const handleViewStaff = (employee) => {
    console.log(
      "View Staff:",
      employee
    );

    // Future me yaha detail page/modal
    // open kar sakte ho.
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const handleCloseStaffModal = () => {
    if (
      createStaffMutation.isPending ||
      updateStaffMutation.isPending
    ) {
      return;
    }

    setShowStaffModal(false);
    setEditingStaff(null);
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <>
      <div className="space-y-6 p-6">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Employees
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your employees and their
              details.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setEditingStaff(null);
              setShowStaffModal(true);
            }}
            disabled={
              createStaffMutation.isPending ||
              updateStaffMutation.isPending
            }
            className="
              inline-flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-primary
              px-4
              text-sm
              font-medium
              text-primary-foreground
              shadow-sm
              transition
              hover:bg-primary/90
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <Plus size={18} />

            Add Employee
          </button>
        </div>

        {/* =====================================================
            TABLE
        ====================================================== */}

        <EmployeeTable
          employees={staff}
          pagination={pagination}
          filters={filters}
          setFilters={setFilters}
          isLoading={isLoading}
          isFetching={isFetching}
          error={error}
          onView={handleViewStaff}
          onEdit={handleEditStaff}
          onToggleStatus={
            handleToggleStaffStatus
          }
          onDelete={handleDeleteStaff}
        />
      </div>

      {/* =====================================================
          STAFF MODAL
      ====================================================== */}

      <StaffModal
        isOpen={showStaffModal}
        onClose={handleCloseStaffModal}
        mode={
          editingStaff
            ? "edit"
            : "create"
        }
        staff={editingStaff}
        onSuccess={
          editingStaff
            ? handleUpdateStaff
            : handleCreateStaff
        }
        isLoading={
          createStaffMutation.isPending ||
          updateStaffMutation.isPending
        }
      />
    </>
  );
}