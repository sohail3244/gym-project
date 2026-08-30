"use client";

import React, { useMemo, useState } from "react";

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
import DateFilter from "../ui/DateFilter";

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  MoreVertical,
} from "lucide-react";

/* =========================================================
   DUMMY EMPLOYEE DATA
========================================================= */

const dummyEmployees = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    username: "rahul.sharma",
    email: "rahul@example.com",
    mobileNumber: "9876543210",
    staffType: "MANAGER",
    designation: "Branch Manager",
    status: "ACTIVE",
    createdAt: "2026-08-25",
  },
  {
    id: "EMP002",
    name: "Amit Kumar",
    username: "amit.kumar",
    email: "amit@example.com",
    mobileNumber: "9876543211",
    staffType: "ACCOUNTANT",
    designation: "Accountant",
    status: "ACTIVE",
    createdAt: "2026-08-22",
  },
  {
    id: "EMP003",
    name: "Priya Singh",
    username: "priya.singh",
    email: "priya@example.com",
    mobileNumber: "9876543212",
    staffType: "SUPPORT",
    designation: "Customer Support",
    status: "INACTIVE",
    createdAt: "2026-08-18",
  },
  {
    id: "EMP004",
    name: "Vikas Verma",
    username: "vikas.verma",
    email: "vikas@example.com",
    mobileNumber: "9876543213",
    staffType: "SALES",
    designation: "Sales Executive",
    status: "ACTIVE",
    createdAt: "2026-08-15",
  },
  {
    id: "EMP005",
    name: "Neha Gupta",
    username: "neha.gupta",
    email: "neha@example.com",
    mobileNumber: "9876543214",
    staffType: "STAFF",
    designation: "Office Executive",
    status: "ACTIVE",
    createdAt: "2026-08-10",
  },
  {
    id: "EMP006",
    name: "Sandeep Yadav",
    username: "sandeep.yadav",
    email: "sandeep@example.com",
    mobileNumber: "9876543215",
    staffType: "MANAGER",
    designation: "Operations Manager",
    status: "SUSPENDED",
    createdAt: "2026-08-05",
  },
  {
    id: "EMP007",
    name: "Pooja Mehta",
    username: "pooja.mehta",
    email: "pooja@example.com",
    mobileNumber: "9876543216",
    staffType: "SUPPORT",
    designation: "Support Executive",
    status: "ACTIVE",
    createdAt: "2026-08-02",
  },
  {
    id: "EMP008",
    name: "Arjun Patel",
    username: "arjun.patel",
    email: "arjun@example.com",
    mobileNumber: "9876543217",
    staffType: "SALES",
    designation: "Sales Executive",
    status: "INACTIVE",
    createdAt: "2026-07-28",
  },
  {
    id: "EMP009",
    name: "Karan Malhotra",
    username: "karan.malhotra",
    email: "karan@example.com",
    mobileNumber: "9876543218",
    staffType: "ACCOUNTANT",
    designation: "Senior Accountant",
    status: "ACTIVE",
    createdAt: "2026-07-24",
  },
  {
    id: "EMP010",
    name: "Anjali Verma",
    username: "anjali.verma",
    email: "anjali@example.com",
    mobileNumber: "9876543219",
    staffType: "STAFF",
    designation: "Office Assistant",
    status: "ACTIVE",
    createdAt: "2026-07-20",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function EmployeeTable({
  employees = dummyEmployees,
  total = employees.length,
  showSearch = true,
  showStatusFilter = true,
  showDateFilter = true,
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [dateFilter, setDateFilter] = useState(null);

  const [openAction, setOpenAction] = useState(null);

  /* =========================================================
     FILTER EMPLOYEES
  ========================================================= */

  const filteredEmployees = useMemo(() => {
    let result = [...employees];

    /* -------------------------
       SEARCH
    ------------------------- */

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((employee) =>
        [
          employee.name,
          employee.username,
          employee.email,
          employee.mobileNumber,
          employee.staffType,
          employee.designation,
        ]
          .filter(Boolean)
          .some((value) =>
            String(value).toLowerCase().includes(query)
          )
      );
    }

    /* -------------------------
       STATUS FILTER
    ------------------------- */

    if (status && status !== "ALL") {
      result = result.filter(
        (employee) => employee.status === status
      );
    }

    /* -------------------------
       DATE FILTER
    ------------------------- */

    if (dateFilter?.from || dateFilter?.to) {
      result = result.filter((employee) => {
        const employeeDate = new Date(employee.createdAt);

        if (dateFilter.from) {
          const fromDate = new Date(dateFilter.from);
          fromDate.setHours(0, 0, 0, 0);

          if (employeeDate < fromDate) {
            return false;
          }
        }

        if (dateFilter.to) {
          const toDate = new Date(dateFilter.to);
          toDate.setHours(23, 59, 59, 999);

          if (employeeDate > toDate) {
            return false;
          }
        }

        return true;
      });
    }

    return result;
  }, [
    employees,
    search,
    status,
    dateFilter,
  ]);

  /* =========================================================
     PAGINATION
  ========================================================= */

  const totalFilteredRows = filteredEmployees.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalFilteredRows / rowsPerPage)
  );

  /*
   * Agar filter lagane ke baad current page available
   * na rahe to page 1 par aa jayega.
   */
  React.useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const currentEmployees = filteredEmployees.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  /* =========================================================
     HANDLERS
  ========================================================= */

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setPage(1);
  };

  const handleDateChange = (value) => {
    setDateFilter(value);
    setPage(1);
  };

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

      case "SUSPENDED":
        return `
          bg-red-100
          text-red-700
          dark:bg-red-900/30
          dark:text-red-400
        `;

      default:
        return `
          bg-muted
          text-foreground
        `;
    }
  };

  /* =========================================================
     DATE FORMAT
  ========================================================= */

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
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

          {/* STATUS + DATE */}

          <div className="flex flex-wrap gap-3">

            {showStatusFilter && (
              <StatusFilter
                value={status}
                onChange={handleStatusChange}
              />
            )}

            {showDateFilter && (
              <DateFilter
                value={dateFilter}
                onChange={handleDateChange}
              />
            )}

          </div>

        </div>

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

              <TableCell
                header
                className="w-12.5"
              >
                #
              </TableCell>

              <TableCell header>
                Employee
              </TableCell>

              <TableCell header>
                Employee Type
              </TableCell>

              <TableCell header>
                Designation
              </TableCell>

              <TableCell header>
                Mobile
              </TableCell>

              <TableCell header>
                Status
              </TableCell>

              <TableCell header>
                Joined
              </TableCell>

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

            {currentEmployees.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={8}
                  align="center"
                  className="py-12"
                >

                  <div className="text-sm text-muted-foreground">
                    No employees found.
                  </div>

                </TableCell>

              </TableRow>

            ) : (

              currentEmployees.map((employee, index) => (

                <TableRow key={employee.id}>

                  {/* =========================================
                      INDEX
                  ========================================== */}

                  <TableCell>
                    {(page - 1) * rowsPerPage + index + 1}
                  </TableCell>

                  {/* =========================================
                      EMPLOYEE
                  ========================================== */}

                  <TableCell>

                    <div className="min-w-0">

                      <p className="truncate font-medium text-foreground">
                        {employee.name}
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
                      {employee.staffType || "-"}
                    </span>

                  </TableCell>

                  {/* =========================================
                      DESIGNATION
                  ========================================== */}

                  <TableCell>
                    {employee.designation || "-"}
                  </TableCell>

                  {/* =========================================
                      MOBILE
                  ========================================== */}

                  <TableCell>
                    {employee.mobileNumber || "-"}
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
                      {employee.status}
                    </span>

                  </TableCell>

                  {/* =========================================
                      JOINED DATE
                  ========================================== */}

                  <TableCell>
                    {formatDate(employee.createdAt)}
                  </TableCell>

                  {/* =========================================
                      ACTIONS
                  ========================================== */}

                  <TableCell align="right">

                    <div className="relative inline-block">

                      {/* THREE DOT BUTTON */}

                      <button
                        type="button"
                        onClick={() =>
                          setOpenAction(
                            openAction === employee.id
                              ? null
                              : employee.id
                          )
                        }
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
                            onClick={() => {
                              setOpenAction(null);

                              console.log(
                                "View Employee:",
                                employee
                              );
                            }}
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
                            onClick={() => {
                              setOpenAction(null);

                              console.log(
                                "Edit Employee:",
                                employee
                              );
                            }}
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
                            onClick={() => {
                              setOpenAction(null);

                              console.log(
                                "Delete Employee:",
                                employee
                              );
                            }}
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
                  totalRows={totalFilteredRows}
                  selectedRows={0}
                  rowsPerPage={rowsPerPage}
                  onPageChange={setPage}
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