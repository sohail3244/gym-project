"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

import EmployeeAttendanceTable from "@/components/table/EmployeeAttendanceTable";
import StaffAttendanceModal from "@/components/modals/StaffAttendanceModal";

import { useStaff } from "@/lib/hooks/useStaff";

export default function EmployeeAttendancePage() {
  const [showAttendanceModal, setShowAttendanceModal] =
    useState(false);

  /* =========================================================
     FETCH STAFF
  ========================================================= */

  const {
    data: staffResponse,
    isLoading: isStaffLoading,
  } = useStaff({
    page: 1,
    limit: 100,
  });

  const staffOptions =
    staffResponse?.data?.staff || [];

  /* =========================================================
     CREATE ATTENDANCE
  ========================================================= */

  const handleCreateAttendance = async (payload) => {
    try {
      console.log(
        "Staff Attendance Payload:",
        payload
      );

      // Yaha attendance mutation connect karna hai
      // await createAttendanceMutation.mutateAsync(payload);

      setShowAttendanceModal(false);
    } catch (error) {
      console.error(
        "Create Staff Attendance Error:",
        error
      );
    }
  };

  return (
    <>
      <div className="space-y-6 p-6">
        {/* =========================
            PAGE HEADER
        ========================== */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Employee Attendance
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage and monitor employee attendance
              records.
            </p>
          </div>

          {/* =========================
              MARK ATTENDANCE BUTTON
          ========================== */}

          <button
            type="button"
            onClick={() =>
              setShowAttendanceModal(true)
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
            "
          >
            <Plus size={18} />

            Mark Attendance
          </button>
        </div>

        {/* =========================
            TABLE
        ========================== */}

        <div
          className="
            rounded-2xl
            border
            border-border
            bg-background
            shadow-sm
          "
        >
          <div className="p-5">
            <EmployeeAttendanceTable />
          </div>
        </div>
      </div>

      {/* =========================
          STAFF ATTENDANCE MODAL
      ========================== */}

      <StaffAttendanceModal
        isOpen={showAttendanceModal}
        onClose={() =>
          setShowAttendanceModal(false)
        }
        mode="create"
        attendance={null}
        staffOptions={staffOptions}
        onSuccess={handleCreateAttendance}
        isLoading={isStaffLoading}
      />
    </>
  );
}