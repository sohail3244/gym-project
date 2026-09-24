"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

import EmployeeAttendanceTable from "@/components/table/EmployeeAttendanceTable";
import StaffAttendanceModal from "@/components/modals/StaffAttendanceModal";

import { useStaff } from "@/lib/hooks/useStaff";

import {
  useAttendance,
  useCreateAttendance,
} from "@/lib/hooks/useAttendance";

export default function EmployeeAttendancePage() {
  /* =========================================================
     MODAL STATE
  ========================================================= */

  const [showAttendanceModal, setShowAttendanceModal] =
    useState(false);


  /* =========================================================
     STAFF FILTERS
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
     ATTENDANCE FILTERS
  ========================================================= */

  const [attendanceFilters, setAttendanceFilters] =
    useState({
      page: 1,
      limit: 10,
      search: "",
      status: "",
      date: "",
    });


  /* =========================================================
     FETCH ATTENDANCE
  ========================================================= */

  const {
    data: attendanceResponse,
    isLoading: isAttendanceLoading,
    isFetching: isAttendanceFetching,
    error: attendanceError,
  } = useAttendance(attendanceFilters);


  const attendance =
    attendanceResponse?.data?.attendance || [];


  const attendancePagination =
    attendanceResponse?.data?.pagination || {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 1,
    };


  /* =========================================================
     CREATE ATTENDANCE MUTATION
  ========================================================= */

  const createAttendanceMutation =
    useCreateAttendance();


  /* =========================================================
     CREATE ATTENDANCE
  ========================================================= */

  const handleCreateAttendance = async (payload) => {
    try {
      await createAttendanceMutation.mutateAsync(
        payload
      );

      /*
       * After successful creation,
       * go back to first page.
       */

      setAttendanceFilters((prev) => ({
        ...prev,
        page: 1,
      }));

      setShowAttendanceModal(false);
    } catch (error) {
      console.error(
        "Create Staff Attendance Error:",
        error
      );
    }
  };


  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const handleCloseAttendanceModal = () => {
    if (createAttendanceMutation.isPending) {
      return;
    }

    setShowAttendanceModal(false);
  };


  /* =========================================================
     PAGE CHANGE
  ========================================================= */

  const handlePageChange = (page) => {
    setAttendanceFilters((prev) => ({
      ...prev,
      page,
    }));
  };


  /* =========================================================
     ROWS PER PAGE CHANGE
  ========================================================= */

  const handleRowsPerPageChange = (limit) => {
    setAttendanceFilters((prev) => ({
      ...prev,
      page: 1,
      limit: Number(limit),
    }));
  };


  /* =========================================================
     SEARCH CHANGE
  ========================================================= */

  const handleSearchChange = (search) => {
    setAttendanceFilters((prev) => ({
      ...prev,
      page: 1,
      search,
    }));
  };


  /* =========================================================
     STATUS CHANGE
  ========================================================= */

  const handleStatusChange = (status) => {
    setAttendanceFilters((prev) => ({
      ...prev,
      page: 1,
      status:
        status === "ALL" ? "" : status,
    }));
  };


  /* =========================================================
     DATE CHANGE
  ========================================================= */

  const handleDateChange = (date) => {
    setAttendanceFilters((prev) => ({
      ...prev,
      page: 1,
      date,
    }));
  };


  return (
    <>
      <div className="space-y-6 p-6">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

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


          {/* ===================================================
              MARK ATTENDANCE BUTTON
          ==================================================== */}

          <button
            type="button"
            onClick={() =>
              setShowAttendanceModal(true)
            }
            disabled={
              createAttendanceMutation.isPending
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

            Mark Attendance
          </button>
        </div>


        {/* =====================================================
            ATTENDANCE TABLE
        ====================================================== */}

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

            <EmployeeAttendanceTable
              attendance={attendance}
              total={attendancePagination.total}
              page={attendanceFilters.page}
              rowsPerPage={attendanceFilters.limit}
              isLoading={isAttendanceLoading}
              isFetching={isAttendanceFetching}
              onPageChange={handlePageChange}
              onRowsPerPageChange={
                handleRowsPerPageChange
              }
              onSearchChange={
                handleSearchChange
              }
              onStatusChange={
                handleStatusChange
              }
              onDateChange={
                handleDateChange
              }
            />


            {/* =================================================
                API ERROR
            ================================================== */}

            {attendanceError && (
              <p className="mt-4 text-sm text-destructive">
                {attendanceError?.response?.data
                  ?.message ||
                  attendanceError?.message ||
                  "Failed to load attendance"}
              </p>
            )}

          </div>
        </div>
      </div>


      {/* =======================================================
          STAFF ATTENDANCE MODAL
      ======================================================== */}

      <StaffAttendanceModal
        isOpen={showAttendanceModal}
        onClose={handleCloseAttendanceModal}
        mode="create"
        attendance={null}
        staffOptions={staffOptions}
        onSuccess={handleCreateAttendance}
        isLoading={
          isStaffLoading ||
          createAttendanceMutation.isPending
        }
      />
    </>
  );
}