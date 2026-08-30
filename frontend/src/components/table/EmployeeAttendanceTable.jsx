"use client";

import React, { useState } from "react";
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

export default function EmployeeAttendanceTable({
  attendance = [],
  total = 0,
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [date, setDate] = useState("");

  const totalPages = Math.max(
    1,
    Math.ceil(total / rowsPerPage)
  );

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };

  const formatDate = (value) => {
    if (!value) return "-";

    return new Date(value).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (value) => {
    if (!value) return "-";

    return new Date(value).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusClass = (value) => {
    switch (value) {
      case "PRESENT":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

      case "ABSENT":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

      case "LATE":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

      case "HALF_DAY":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";

      case "LEAVE":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";

      default:
        return "bg-muted text-foreground";
    }
  };

  /*
   * Dummy data fallback
   * API data nahi aane par testing ke liye use hoga.
   */
  const dummyAttendance = [
    {
      id: "attendance-1",
      attendanceDate: "2026-08-30T00:00:00.000Z",
      checkIn: "2026-08-30T09:05:00.000Z",
      checkOut: "2026-08-30T18:10:00.000Z",
      status: "PRESENT",
      notes: "Regular attendance",
      staff: {
        id: "staff-1",
        name: "Rahul Sharma",
        username: "rahul",
        mobileNumber: "9876543210",
        designation: "Manager",
      },
    },
    {
      id: "attendance-2",
      attendanceDate: "2026-08-30T00:00:00.000Z",
      checkIn: "2026-08-30T09:35:00.000Z",
      checkOut: "2026-08-30T18:00:00.000Z",
      status: "LATE",
      notes: "Traffic delay",
      staff: {
        id: "staff-2",
        name: "Amit Kumar",
        username: "amit",
        mobileNumber: "9876543211",
        designation: "Sales Executive",
      },
    },
    {
      id: "attendance-3",
      attendanceDate: "2026-08-30T00:00:00.000Z",
      checkIn: null,
      checkOut: null,
      status: "ABSENT",
      notes: "No information",
      staff: {
        id: "staff-3",
        name: "Priya Singh",
        username: "priya",
        mobileNumber: "9876543212",
        designation: "Accountant",
      },
    },
    {
      id: "attendance-4",
      attendanceDate: "2026-08-30T00:00:00.000Z",
      checkIn: "2026-08-30T10:00:00.000Z",
      checkOut: "2026-08-30T14:00:00.000Z",
      status: "HALF_DAY",
      notes: "Personal work",
      staff: {
        id: "staff-4",
        name: "Neha Verma",
        username: "neha",
        mobileNumber: "9876543213",
        designation: "HR Executive",
      },
    },
    {
      id: "attendance-5",
      attendanceDate: "2026-08-30T00:00:00.000Z",
      checkIn: null,
      checkOut: null,
      status: "LEAVE",
      notes: "Approved leave",
      staff: {
        id: "staff-5",
        name: "Vikas Yadav",
        username: "vikas",
        mobileNumber: "9876543214",
        designation: "Developer",
      },
    },
  ];

  /*
   * Agar attendance prop empty hai,
   * dummy data show hoga.
   */
  const data = attendance.length > 0 ? attendance : dummyAttendance;

  /*
   * Search + status + date filtering
   */
  const filteredAttendance = data.filter((item) => {
    const employee = item.staff || item.employee || {};

    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      !searchText ||
      employee.name?.toLowerCase().includes(searchText) ||
      employee.username?.toLowerCase().includes(searchText) ||
      employee.mobileNumber?.includes(searchText) ||
      employee.designation?.toLowerCase().includes(searchText);

    const matchesStatus =
      status === "ALL" ||
      !status ||
      item.status === status;

    const attendanceDate = item.attendanceDate
      ? new Date(item.attendanceDate).toISOString().split("T")[0]
      : "";

    const matchesDate =
      !date || attendanceDate === date;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesDate
    );
  });

  /*
   * Dummy pagination ke liye
   */
  const startIndex = (page - 1) * rowsPerPage;

  const paginatedData = filteredAttendance.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const displayTotal =
    attendance.length > 0 ? total : filteredAttendance.length;

  return (
    <div className="space-y-4">

      {/* =========================
          FILTERS
      ========================== */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="w-full lg:max-w-sm">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search employee..."
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 sm:flex-row">

          <StatusFilter
            value={status}
            onChange={(value) => {
              setStatus(value);
              setPage(1);
            }}
            options={[
              { label: "All Status", value: "ALL" },
              { label: "Present", value: "PRESENT" },
              { label: "Absent", value: "ABSENT" },
              { label: "Late", value: "LATE" },
              { label: "Half Day", value: "HALF_DAY" },
              { label: "Leave", value: "LEAVE" },
            ]}
          />

          <DateFilter
            value={date}
            onChange={(value) => {
              setDate(value);
              setPage(1);
            }}
          />

        </div>
      </div>

      {/* =========================
          TABLE
      ========================== */}
      <Table>

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
              Attendance Date
            </TableCell>

            <TableCell header>
              Check In
            </TableCell>

            <TableCell header>
              Check Out
            </TableCell>

            <TableCell header>
              Status
            </TableCell>

            <TableCell header>
              Notes
            </TableCell>

          </TableRow>
        </TableHeader>

        <TableBody>

          {paginatedData.length === 0 ? (
            <TableRow>

              <TableCell
                colSpan={7}
                align="center"
                className="py-12"
              >
                <div className="text-sm text-muted-foreground">
                  No attendance records found.
                </div>
              </TableCell>

            </TableRow>
          ) : (
            paginatedData.map((item, index) => {

              const employee =
                item.staff ||
                item.employee ||
                {};

              return (
                <TableRow key={item.id}>

                  {/* Number */}
                  <TableCell>
                    {startIndex + index + 1}
                  </TableCell>

                  {/* Employee */}
                  <TableCell>

                    <div>
                      <p className="font-medium text-foreground">
                        {employee.name || "-"}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {employee.designation ||
                          `@${employee.username || "-"}`}
                      </p>
                    </div>

                  </TableCell>

                  {/* Date */}
                  <TableCell>
                    {formatDate(item.attendanceDate)}
                  </TableCell>

                  {/* Check In */}
                  <TableCell>
                    {formatTime(item.checkIn)}
                  </TableCell>

                  {/* Check Out */}
                  <TableCell>
                    {formatTime(item.checkOut)}
                  </TableCell>

                  {/* Status */}
                  <TableCell>

                    <span
                      className={`
                        inline-flex
                        rounded-full
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        ${getStatusClass(item.status)}
                      `}
                    >
                      {item.status
                        ?.replaceAll("_", " ")
                        ?.replace(
                          /\b\w/g,
                          (char) => char.toUpperCase()
                        ) || "-"}
                    </span>

                  </TableCell>

                  {/* Notes */}
                  <TableCell>

                    <span className="text-sm text-muted-foreground">
                      {item.notes || "-"}
                    </span>

                  </TableCell>

                </TableRow>
              );
            })
          )}

        </TableBody>

        {/* =========================
            PAGINATION
        ========================== */}
        <tfoot>

          <tr>

            <td colSpan={7}>

              <TablePagination
                page={page}
                totalPages={
                  Math.max(
                    1,
                    Math.ceil(
                      displayTotal / rowsPerPage
                    )
                  )
                }
                totalRows={displayTotal}
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
  );
}