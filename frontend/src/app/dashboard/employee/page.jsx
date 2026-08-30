"use client";

import React from "react";
import { Plus } from "lucide-react";
import EmployeeTable from "@/components/table/EmployeeTable";

export default function EmployeesPage() {
  return (
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
      <EmployeeTable />

    </div>
  );
}