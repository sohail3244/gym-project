"use client";

import React, { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "./core";

import SearchBar from "../ui/SearchBar";
import StatusFilter from "../ui/StatusFilter";

import {
  Eye,
  Pencil,
  Trash2,
  MoreVertical,
} from "lucide-react";

export default function EmployeeTable({
  employees = [],
  pagination = {},
  filters = {},
  setFilters,
  isLoading = false,
  isFetching = false,
  error = null,
  showSearch = true,
  showStatusFilter = true,
}) {
  /* =========================================================
     PAGINATION DATA
  ========================================================= */

  const page = pagination?.page || 1;
  const rowsPerPage = pagination?.limit || 10;
  const totalRows = pagination?.total || 0;
  const totalPages = pagination?.totalPages || 1;

  /* =========================================================
     FILTER DATA
  ========================================================= */

  const search = filters?.search || "";
  const status = filters?.status || "";

  /* =========================================================
     ACTION MENU
  ========================================================= */

  const [openAction, setOpenAction] = useState(null);

  /* =========================================================
     HANDLERS
  ========================================================= */

  const handleRowsPerPageChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      limit: Number(value),
    }));
  };

  const handleSearchChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      search: value,
    }));
  };

  const handleStatusChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      status: value === "ALL" ? "" : value,
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  /* =========================================================
     CLOSE ACTION MENU
  ========================================================= */

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenAction(null);
    };

    if (openAction) {
      document.addEventListener(
        "click",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, [openAction]);

  /* =========================================================
     STATUS STYLE
  ========================================================= */

  const getStatusClass = (employeeStatus) => {
    switch (employeeStatus) {
      case "ACTIVE":
        return `
          bg-green-100
          text-green-700
          dark:bg-green-900/30
          dark:text-green-400
        `;

      case "INACTIVE":
        return `
          bg-gray-100
          text-gray-700
          dark:bg-gray-800
          dark:text-gray-400
        `;

      default:
        return `
          bg-muted
          text-foreground
        `;
    }
  };

  /* =========================================================
     STAFF TYPE LABEL
  ========================================================= */

  const getStaffTypeLabel = (type) => {
    if (!type) return "-";

    return type
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  /* =========================================================
     DATE FORMAT
  ========================================================= */

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "-";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  /* =========================================================
     ACTION HANDLERS
  ========================================================= */

  const handleView = (employee) => {
    setOpenAction(null);

    console.log("View Employee:", employee);

    // Yaha future me view modal/page open kar sakte ho
  };

  const handleEdit = (employee) => {
    setOpenAction(null);

    console.log("Edit Employee:", employee);

    // Yaha future me edit modal open kar sakte ho
  };

  const handleDelete = (employee) => {
    setOpenAction(null);

    console.log("Delete Employee:", employee);

    // Yaha future me delete confirmation modal open kar sakte ho
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="space-y-4">
      {/* =====================================================
          FILTER SECTION
      ====================================================== */}

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          {/* SEARCH */}

          {showSearch && (
            <div className="w-full sm:max-w-sm">
              <SearchBar
                value={search}
                onChange={handleSearchChange}
                placeholder="Search employees..."
              />
            </div>
          )}

          {/* STATUS FILTER */}

          {showStatusFilter && (
            <div className="flex flex-wrap gap-3">
              <StatusFilter
                value={status || "ALL"}
                onChange={handleStatusChange}
              />
            </div>
          )}
        </div>

        {/* FETCHING INDICATOR */}

        {isFetching && !isLoading && (
          <div className="text-xs text-muted-foreground">
            Updating...
          </div>
        )}
      </div>

      {/* =====================================================
          TABLE
      ====================================================== */}

      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <Table>
          {/* =================================================
              HEADER
          ================================================== */}

          <TableHeader>
            <TableRow>
              {/* INDEX */}

              <TableCell
                header
                className="w-12.5"
              >
                #
              </TableCell>

              {/* EMPLOYEE */}

              <TableCell header>
                Employee
              </TableCell>

              {/* EMPLOYEE TYPE */}

              <TableCell header>
                Employee Type
              </TableCell>

              {/* DESIGNATION */}

              <TableCell header>
                Designation
              </TableCell>

              {/* MOBILE */}

              <TableCell header>
                Mobile
              </TableCell>

              {/* STATUS */}

              <TableCell header>
                Status
              </TableCell>

              {/* JOINED */}

              <TableCell header>
                Joined
              </TableCell>

              {/* ACTIONS */}

              <TableCell
                header
                align="right"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* =================================================
              BODY
          ================================================== */}

          <TableBody>
            {/* ================= LOADING ================= */}

            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  align="center"
                  className="py-12"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-primary" />

                    <span className="text-sm text-muted-foreground">
                      Loading employees...
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ) : /* ================= ERROR ================= */

            error ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  align="center"
                  className="py-12"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-red-600">
                      Failed to load employees.
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Please try again.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : /* ================= EMPTY ================= */

            employees.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  align="center"
                  className="py-12"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      No employees found.
                    </p>

                    {search || status ? (
                      <p className="text-xs text-muted-foreground">
                        Try changing your search or filters.
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        Add your first employee to get started.
                      </p>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              /* ================= EMPLOYEES ================= */

              employees.map((employee, index) => (
                <TableRow key={employee.id}>
                  {/* =========================================
                      INDEX
                  ========================================== */}

                  <TableCell>
                    {(page - 1) * rowsPerPage +
                      index +
                      1}
                  </TableCell>

                  {/* =========================================
                      EMPLOYEE
                  ========================================== */}

                  <TableCell>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-foreground">
                        {employee.name || "-"}
                      </p>

                      {employee.username && (
                        <p className="text-xs text-muted-foreground">
                          @{employee.username}
                        </p>
                      )}

                      {employee.email && (
                        <p className="max-w-50 truncate text-xs text-muted-foreground">
                          {employee.email}
                        </p>
                      )}
                    </div>
                  </TableCell>

                  {/* =========================================
                      EMPLOYEE TYPE
                  ========================================== */}

                  <TableCell>
                    <span className="text-sm font-medium text-foreground">
                      {getStaffTypeLabel(
                        employee.staffType
                      )}
                    </span>
                  </TableCell>

                  {/* =========================================
                      DESIGNATION
                  ========================================== */}

                  <TableCell>
                    <span className="text-sm text-foreground">
                      {employee.designation || "-"}
                    </span>
                  </TableCell>

                  {/* =========================================
                      MOBILE
                  ========================================== */}

                  <TableCell>
                    <span className="text-sm text-foreground">
                      {employee.mobileNumber || "-"}
                    </span>
                  </TableCell>

                  {/* =========================================
                      STATUS
                  ========================================== */}

                  <TableCell>
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        ${getStatusClass(employee.status)}
                      `}
                    >
                      {employee.status || "-"}
                    </span>
                  </TableCell>

                  {/* =========================================
                      JOINED DATE
                  ========================================== */}

                  <TableCell>
                    <span className="text-sm text-foreground">
                      {formatDate(employee.createdAt)}
                    </span>
                  </TableCell>

                  {/* =========================================
                      ACTIONS
                  ========================================== */}

                  <TableCell align="right">
                    <div
                      className="relative inline-block"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      {/* THREE DOT BUTTON */}

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();

                          setOpenAction(
                            openAction === employee.id
                              ? null
                              : employee.id
                          );
                        }}
                        aria-label="Employee actions"
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          text-muted-foreground
                          transition
                          hover:bg-secondary
                          hover:text-foreground
                          active:scale-95
                        "
                      >
                        <MoreVertical size={18} />
                      </button>

                      {/* ACTION MENU */}

                      {openAction === employee.id && (
                        <div
                          className="
                            absolute
                            right-0
                            z-50
                            mt-2
                            w-40
                            overflow-hidden
                            rounded-xl
                            border
                            border-border
                            bg-background
                            p-1
                            shadow-lg
                          "
                        >
                          {/* VIEW */}

                          <button
                            type="button"
                            onClick={() =>
                              handleView(employee)
                            }
                            className="
                              flex
                              w-full
                              items-center
                              gap-2
                              rounded-lg
                              px-3
                              py-2
                              text-sm
                              text-foreground
                              transition
                              hover:bg-secondary
                            "
                          >
                            <Eye size={15} />

                            <span>
                              View
                            </span>
                          </button>

                          {/* EDIT */}

                          <button
                            type="button"
                            onClick={() =>
                              handleEdit(employee)
                            }
                            className="
                              flex
                              w-full
                              items-center
                              gap-2
                              rounded-lg
                              px-3
                              py-2
                              text-sm
                              text-foreground
                              transition
                              hover:bg-secondary
                            "
                          >
                            <Pencil size={15} />

                            <span>
                              Edit
                            </span>
                          </button>

                          {/* DELETE */}

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(employee)
                            }
                            className="
                              flex
                              w-full
                              items-center
                              gap-2
                              rounded-lg
                              px-3
                              py-2
                              text-sm
                              text-red-600
                              transition
                              hover:bg-red-50
                              dark:hover:bg-red-950/30
                            "
                          >
                            <Trash2 size={15} />

                            <span>
                              Delete
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>

          {/* =================================================
              PAGINATION
          ================================================== */}

          <tfoot>
            <tr>
              <td colSpan={8}>
                <TablePagination
                  page={page}
                  totalPages={totalPages}
                  totalRows={totalRows}
                  selectedRows={0}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={
                    handleRowsPerPageChange
                  }
                />
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
}