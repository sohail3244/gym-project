"use client";

import React, { useMemo } from "react";

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

  page = 1,
  rowsPerPage = 10,

  isLoading = false,
  isFetching = false,

  onPageChange,
  onRowsPerPageChange,

  onSearchChange,
  onStatusChange,
  onDateChange,
}) {

  /* =========================================================
     FORMAT DATE
  ========================================================= */

  const formatDate = (value) => {
    if (!value) return "-";

    const parsedDate = new Date(value);

    if (Number.isNaN(parsedDate.getTime())) {
      return "-";
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };


  /* =========================================================
     FORMAT TIME
  ========================================================= */

  const formatTime = (value) => {
    if (!value) return "-";

    const parsedDate = new Date(value);

    if (Number.isNaN(parsedDate.getTime())) {
      return "-";
    }

    return parsedDate.toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  };


  /* =========================================================
     STATUS CLASS
  ========================================================= */

  const getStatusClass = (value) => {
    switch (value) {
      case "PRESENT":
        return `
          bg-green-100
          text-green-700
          dark:bg-green-900/30
          dark:text-green-400
        `;

      case "ABSENT":
        return `
          bg-red-100
          text-red-700
          dark:bg-red-900/30
          dark:text-red-400
        `;

      case "LATE":
        return `
          bg-yellow-100
          text-yellow-700
          dark:bg-yellow-900/30
          dark:text-yellow-400
        `;

      case "HALF_DAY":
        return `
          bg-orange-100
          text-orange-700
          dark:bg-orange-900/30
          dark:text-orange-400
        `;

      case "LEAVE":
        return `
          bg-blue-100
          text-blue-700
          dark:bg-blue-900/30
          dark:text-blue-400
        `;

      default:
        return "bg-muted text-foreground";
    }
  };


  /* =========================================================
     API DATA
  ========================================================= */

  const data = attendance;


  /* =========================================================
     FILTER DATA
     
     NOTE:
     Search/status/date API filters are handled by parent.
     We only render API response here.
  ========================================================= */

  const displayData = useMemo(() => {
    return data;
  }, [data]);


  /* =========================================================
     START INDEX
  ========================================================= */

  const startIndex =
    (page - 1) * rowsPerPage;


  /* =========================================================
     TOTAL PAGES
  ========================================================= */

  const totalPages = Math.max(
    1,
    Math.ceil(
      total / rowsPerPage
    )
  );


  return (
    <div className="space-y-4">

      {/* =====================================================
          FILTERS
      ====================================================== */}

      <div
        className="
          flex
          flex-col
          gap-3
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        {/* ===================================================
            SEARCH
        ==================================================== */}

        <div className="w-full lg:max-w-sm">
          <SearchBar
            value=""
            onChange={onSearchChange}
            placeholder="Search employee..."
          />
        </div>


        {/* ===================================================
            FILTERS
        ==================================================== */}

        <div className="flex flex-col gap-3 sm:flex-row">

          <StatusFilter
            value="ALL"
            onChange={onStatusChange}
            options={[
              {
                label: "All Status",
                value: "ALL",
              },
              {
                label: "Present",
                value: "PRESENT",
              },
              {
                label: "Absent",
                value: "ABSENT",
              },
              {
                label: "Late",
                value: "LATE",
              },
              {
                label: "Half Day",
                value: "HALF_DAY",
              },
              {
                label: "Leave",
                value: "LEAVE",
              },
            ]}
          />


          <DateFilter
            value=""
            onChange={onDateChange}
          />

        </div>
      </div>


      {/* =====================================================
          LOADING
      ====================================================== */}

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div
            className="
              h-7
              w-7
              animate-spin
              rounded-full
              border-2
              border-primary/30
              border-t-primary
            "
          />
        </div>
      )}


      {/* =====================================================
          TABLE
      ====================================================== */}

      {!isLoading && (
        <div className="overflow-x-auto">

          <Table>

            {/* =================================================
                TABLE HEADER
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


            {/* =================================================
                TABLE BODY
            ================================================== */}

            <TableBody>

              {displayData.length === 0 ? (

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

                displayData.map(
                  (item, index) => {

                    const employee =
                      item.staff ||
                      item.employee ||
                      {};


                    return (
                      <TableRow
                        key={item.id}
                      >

                        {/* ===================================
                            NUMBER
                        ==================================== */}

                        <TableCell>
                          {startIndex +
                            index +
                            1}
                        </TableCell>


                        {/* ===================================
                            EMPLOYEE
                        ==================================== */}

                        <TableCell>

                          <div>

                            <p className="font-medium text-foreground">
                              {employee.name ||
                                "-"}
                            </p>

                            <p className="text-xs text-muted-foreground">
                              {employee.designation ||
                                employee.username ||
                                employee.mobileNumber ||
                                "-"}
                            </p>

                          </div>

                        </TableCell>


                        {/* ===================================
                            DATE
                        ==================================== */}

                        <TableCell>
                          {formatDate(
                            item.attendanceDate
                          )}
                        </TableCell>


                        {/* ===================================
                            CHECK IN
                        ==================================== */}

                        <TableCell>
                          {formatTime(
                            item.checkIn
                          )}
                        </TableCell>


                        {/* ===================================
                            CHECK OUT
                        ==================================== */}

                        <TableCell>
                          {formatTime(
                            item.checkOut
                          )}
                        </TableCell>


                        {/* ===================================
                            STATUS
                        ==================================== */}

                        <TableCell>

                          <span
                            className={`
                              inline-flex
                              rounded-full
                              px-2.5
                              py-1
                              text-xs
                              font-medium
                              ${getStatusClass(
                                item.status
                              )}
                            `}
                          >
                            {item.status
                              ?.replaceAll(
                                "_",
                                " "
                              )
                              ?.replace(
                                /\b\w/g,
                                (char) =>
                                  char.toUpperCase()
                              ) || "-"}
                          </span>

                        </TableCell>


                        {/* ===================================
                            NOTES
                        ==================================== */}

                        <TableCell>

                          <span className="text-sm text-muted-foreground">
                            {item.notes || "-"}
                          </span>

                        </TableCell>

                      </TableRow>
                    );
                  }
                )
              )}

            </TableBody>


            {/* =================================================
                PAGINATION
            ================================================== */}

            <tfoot>

              <tr>

                <td colSpan={7}>

                  <TablePagination
                    page={page}
                    totalPages={totalPages}
                    totalRows={total}
                    selectedRows={0}
                    rowsPerPage={rowsPerPage}
                    onPageChange={
                      onPageChange
                    }
                    onRowsPerPageChange={
                      onRowsPerPageChange
                    }
                  />

                </td>

              </tr>

            </tfoot>

          </Table>

        </div>
      )}


      {/* =====================================================
          FETCHING INDICATOR
      ====================================================== */}

      {!isLoading && isFetching && (
        <div className="text-center text-xs text-muted-foreground">
          Updating attendance...
        </div>
      )}

    </div>
  );
}