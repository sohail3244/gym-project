"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

import EmployeeTable from "@/components/table/EmployeeTable";
import StaffModal from "@/components/modals/StaffModal";

import {
  useStaff,
  useCreateStaff,
} from "@/lib/hooks/useStaff";

export default function EmployeesPage() {
  const [showStaffModal, setShowStaffModal] = useState(false);

  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: "",
    status: "",
    staffType: "",
  });

  const {
    data,
    isLoading,
    isFetching,
    error,
  } = useStaff(filters);

  const createStaffMutation = useCreateStaff();

  const handleCreateStaff = async (payload) => {
    try {
      await createStaffMutation.mutateAsync(payload);

      setShowStaffModal(false);

      // New staff ke baad first page par le aao
      setFilters((prev) => ({
        ...prev,
        page: 1,
      }));
    } catch (error) {
      console.error("Create Staff Error:", error);
    }
  };

  const staff = data?.data?.staff || [];

  const pagination = data?.data?.pagination || {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  };

  return (
    <>
      <div className="space-y-6 p-6">
        {/* ================= PAGE HEADER ================= */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Employees
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your employees and their details.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowStaffModal(true)}
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
            "
          >
            <Plus size={18} />
            Add Employee
          </button>
        </div>

        {/* ================= TABLE ================= */}
        <EmployeeTable
          employees={staff}
          pagination={pagination}
          filters={filters}
          setFilters={setFilters}
          isLoading={isLoading}
          isFetching={isFetching}
          error={error}
        />
      </div>

      {/* ================= STAFF MODAL ================= */}
      <StaffModal
        isOpen={showStaffModal}
        onClose={() => setShowStaffModal(false)}
        mode="create"
        staff={null}
        onSuccess={handleCreateStaff}
        isLoading={createStaffMutation.isPending}
      />
    </>
  );
}