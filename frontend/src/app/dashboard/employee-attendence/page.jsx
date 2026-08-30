"use client";

import EmployeeAttendanceTable from "@/components/table/EmployeeAttendanceTable";
import React from "react";

export default function EmployeeAttendancePage() {
  return (
    <div className="space-y-6 p-6">

      {/* =========================
          PAGE HEADER
      ========================== */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Employee Attendance
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage and monitor employee attendance records.
        </p>
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
  );
}