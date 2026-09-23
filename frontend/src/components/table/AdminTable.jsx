"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  Eye,
  Pencil,
  UserCheck,
  UserX,
  MoreVertical,
} from "lucide-react";

import SearchBar from "@/components/ui/SearchBar";
import StatusFilter from "@/components/ui/StatusFilter";
import DateFilter from "@/components/ui/DateFilter";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "./core";




/* =========================================================
   STATUS BADGE
========================================================= */

const getStatusClasses = (status) => {
  switch (status) {
    case "ACTIVE":
      return `
        bg-emerald-500/10
        text-emerald-600
        dark:text-emerald-400
      `;

    case "PENDING":
      return `
        bg-amber-500/10
        text-amber-600
        dark:text-amber-400
      `;

    case "INACTIVE":
      return `
        bg-muted
        text-muted-foreground
      `;

    case "SUSPENDED":
      return `
        bg-destructive/10
        text-destructive
      `;

    default:
      return `
        bg-muted
        text-foreground
      `;
  }
};

/* =========================================================
   DATE FILTER HELPER
========================================================= */

const isDateInRange = (dateString, filter) => {
  if (filter === "ALL") {
    return true;
  }

  const itemDate = new Date(dateString);

  const now = new Date();

  /* Start of today */
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  /* Start of yesterday */
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  /* End of yesterday */
  const yesterdayEnd = new Date(today);
  yesterdayEnd.setMilliseconds(-1);

  switch (filter) {
    case "TODAY":
      return itemDate >= today;

    case "YESTERDAY":
      return (
        itemDate >= yesterday &&
        itemDate <= yesterdayEnd
      );

    case "LAST_7_DAYS": {
      const last7Days = new Date(now);
      last7Days.setDate(last7Days.getDate() - 7);

      return itemDate >= last7Days;
    }

    case "LAST_30_DAYS": {
      const last30Days = new Date(now);
      last30Days.setDate(last30Days.getDate() - 30);

      return itemDate >= last30Days;
    }

    case "THIS_MONTH": {
      const startOfMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      );

      return itemDate >= startOfMonth;
    }

    default:
      return true;
  }
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AdminTable({
  admins = [],
  total,
  showSearch = true,
  showStatusFilter = true,
  showDateFilter = true,
  onView,
  onEdit,
  onActivate,
  onSuspend,
  actionLoading = false,
}) {
  /* =======================================================
     STATES
  ======================================================== */

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("ALL");

  const [dateFilter, setDateFilter] = useState("ALL");

  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [selectedRows, setSelectedRows] = useState([]);

  const [openActionId, setOpenActionId] = useState(null);

  const actionMenuRef = useRef(null);

  /* =======================================================
     RESET PAGE WHEN FILTER CHANGES
  ======================================================== */

  useEffect(() => {
    setPage(1);
  }, [search, status, dateFilter, rowsPerPage]);

  /* =======================================================
     CLOSE ACTION MENU ON OUTSIDE CLICK
  ======================================================== */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target)
      ) {
        setOpenActionId(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =======================================================
     FILTER DATA
  ======================================================== */

  const filteredAdmins = useMemo(() => {
    let result = [...admins];

    /* Search */
    if (search.trim()) {
      const searchValue =
        search.trim().toLowerCase();

      result = result.filter((admin) => {
        return (
          admin.name
            ?.toLowerCase()
            .includes(searchValue) ||

          admin.username
            ?.toLowerCase()
            .includes(searchValue) ||

          admin.email
            ?.toLowerCase()
            .includes(searchValue) ||

          admin.business?.businessName
            ?.toLowerCase()
            .includes(searchValue) ||

          admin.business?.mobileNumber
            ?.toLowerCase()
            .includes(searchValue)
        );
      });
    }

    /* Status */
    if (status !== "ALL") {
      result = result.filter(
        (admin) => admin.status === status
      );
    }

    /* Date */
    if (dateFilter !== "ALL") {
      result = result.filter((admin) =>
        isDateInRange(
          admin.createdAt,
          dateFilter
        )
      );
    }

    return result;
  }, [
    admins,
    search,
    status,
    dateFilter,
  ]);

  /* =======================================================
     PAGINATION
  ======================================================== */

  const totalFilteredRows =
    filteredAdmins.length;

  const totalPages = Math.max(
    1,
    Math.ceil(
      totalFilteredRows / rowsPerPage
    )
  );

  /* Make sure page doesn't exceed total pages */
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedAdmins =
    filteredAdmins.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    );

  /* =======================================================
     ROWS PER PAGE
  ======================================================== */

  const handleRowsPerPageChange = (
    value
  ) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };

  /* =======================================================
     SELECT ROW
  ======================================================== */

  const handleSelectRow = (id) => {
    setSelectedRows((previous) => {
      if (previous.includes(id)) {
        return previous.filter(
          (rowId) => rowId !== id
        );
      }

      return [...previous, id];
    });
  };

  /* =======================================================
     SELECT ALL CURRENT PAGE
  ======================================================== */

  const handleSelectAll = () => {
    const currentPageIds =
      paginatedAdmins.map(
        (admin) => admin.id
      );

    const allSelected =
      currentPageIds.every((id) =>
        selectedRows.includes(id)
      );

    if (allSelected) {
      setSelectedRows((previous) =>
        previous.filter(
          (id) =>
            !currentPageIds.includes(id)
        )
      );
    } else {
      setSelectedRows((previous) => [
        ...new Set([
          ...previous,
          ...currentPageIds,
        ]),
      ]);
    }
  };

  const allCurrentPageSelected =
    paginatedAdmins.length > 0 &&
    paginatedAdmins.every((admin) =>
      selectedRows.includes(admin.id)
    );

  /* =======================================================
     ACTION HANDLERS
  ======================================================== */

  const handleAction = (
    action,
    admin
  ) => {
    setOpenActionId(null);

    switch (action) {
      case "view":
        onView?.(admin);
        break;

      case "edit":
        onEdit?.(admin);
        break;

      case "activate":
        onActivate?.(admin);
        break;

      case "suspend":
        onSuspend?.(admin);
        break;

      default:
        break;
    }
  };

  /* =======================================================
     FORMAT DATE
  ======================================================== */

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  /* =======================================================
     RENDER
  ======================================================== */

  return (
    <div className="space-y-4">

      {/* =================================================
          TOOLBAR
      ================================================== */}

      {(showSearch ||
        showStatusFilter ||
        showDateFilter) && (
          <div
            className="
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-border
            bg-card
            p-4
            shadow-sm
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
          >
            {/* Search */}
            {showSearch && (
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search admins..."
                className="w-full lg:max-w-sm"
              />
            )}

            {/* Filters */}
            <div
              className="
              flex
              flex-wrap
              items-center
              gap-2
            "
            >
              {showStatusFilter && (
                <StatusFilter
                  value={status}
                  onChange={setStatus}
                />
              )}

              {showDateFilter && (
                <DateFilter
                  value={dateFilter}
                  onChange={setDateFilter}
                />
              )}
            </div>
          </div>
        )}

      {/* =================================================
          TABLE
      ================================================== */}

      <Table>

        {/* =================================================
            HEADER
        ================================================== */}

        <TableHeader>
          <TableRow>

            {/* Checkbox */}
            <TableCell
              header
              className="w-12"
            >
              <input
                type="checkbox"
                checked={
                  allCurrentPageSelected
                }
                onChange={
                  handleSelectAll
                }
                className="
                  h-4
                  w-4
                  cursor-pointer
                  rounded
                  border-border
                  accent-primary
                "
                aria-label="Select all admins"
              />
            </TableCell>

            <TableCell header>
              #
            </TableCell>

            <TableCell header>
              Admin
            </TableCell>

            <TableCell header>
              Business
            </TableCell>

            <TableCell header>
              Mobile
            </TableCell>

            <TableCell header>
              Plan
            </TableCell>

            <TableCell header>
              Status
            </TableCell>

            <TableCell header>
              Created
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

          {paginatedAdmins.length === 0 ? (
            <TableRow>

              <TableCell
                colSpan={9}
                align="center"
                className="py-16"
              >
                <div className="flex flex-col items-center justify-center">

                  <div
                    className="
                      mb-3
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-muted
                      text-muted-foreground
                    "
                  >
                    <Eye size={20} />
                  </div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-foreground
                    "
                  >
                    No admins found
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-muted-foreground
                    "
                  >
                    Try changing your search
                    or filters.
                  </p>

                </div>
              </TableCell>

            </TableRow>
          ) : (
            paginatedAdmins.map(
              (admin, index) => {

                const isSelected =
                  selectedRows.includes(
                    admin.id
                  );

                const isActionOpen =
                  openActionId ===
                  admin.id;

                const plan =
                  admin
                    .subscriptions?.[0]
                    ?.plan;

                return (
                  <TableRow
                    key={admin.id}
                  >

                    {/* Checkbox */}
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={
                          isSelected
                        }
                        onChange={() =>
                          handleSelectRow(
                            admin.id
                          )
                        }
                        className="
                          h-4
                          w-4
                          cursor-pointer
                          rounded
                          border-border
                          accent-primary
                        "
                        aria-label={`Select ${admin.name}`}
                      />
                    </TableCell>

                    {/* Number */}
                    <TableCell>
                      {(page - 1) *
                        rowsPerPage +
                        index +
                        1}
                    </TableCell>

                    {/* Admin */}
                    <TableCell>
                      <div className="min-w-45">

                        <p
                          className="
                            font-semibold
                            text-foreground
                          "
                        >
                          {admin.name}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-xs
                            text-muted-foreground
                          "
                        >
                          @{admin.username}
                        </p>

                        {admin.email && (
                          <p
                            className="
                              mt-0.5
                              text-xs
                              text-muted-foreground
                            "
                          >
                            {admin.email}
                          </p>
                        )}

                      </div>
                    </TableCell>

                    {/* Business */}
                    <TableCell>
                      <div className="min-w-45">

                        <p
                          className="
                            font-medium
                            text-foreground
                          "
                        >
                          {admin.business
                            ?.businessName ||
                            "-"}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-xs
                            text-muted-foreground
                          "
                        >
                          {admin.business
                            ?.businessType ||
                            "-"}
                        </p>

                      </div>
                    </TableCell>

                    {/* Mobile */}
                    <TableCell>
                      <span className="whitespace-nowrap">
                        {admin.business
                          ?.mobileNumber ||
                          "-"}
                      </span>
                    </TableCell>

                    {/* Plan */}
                    <TableCell>
                      <div>

                        <p
                          className="
                            font-medium
                            text-foreground
                          "
                        >
                          {plan?.name ||
                            "-"}
                        </p>

                        {plan?.price != null && (
                          <p
                            className="
                              mt-0.5
                              text-xs
                              text-muted-foreground
                            "
                          >
                            ₹
                            {Number(
                              plan.price
                            ).toLocaleString(
                              "en-IN"
                            )}
                          </p>
                        )}

                      </div>
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
                          font-semibold
                          ${getStatusClasses(
                          admin.status
                        )}
                        `}
                      >
                        {admin.status}
                      </span>
                    </TableCell>

                    {/* Created */}
                    <TableCell>
                      <span
                        className="
                          whitespace-nowrap
                          text-xs
                          text-muted-foreground
                        "
                      >
                        {formatDate(
                          admin.createdAt
                        )}
                      </span>
                    </TableCell>

                    {/* Actions */}
                    <TableCell
                      align="right"
                    >
                      <div
                        ref={
                          isActionOpen
                            ? actionMenuRef
                            : null
                        }
                        className="
                          relative
                          inline-block
                          text-left
                        "
                      >

                        {/* Three Dot Button */}
                        <button
                          type="button"
                          onClick={() =>
                            setOpenActionId(
                              isActionOpen
                                ? null
                                : admin.id
                            )
                          }
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
                          aria-label={`Actions for ${admin.name}`}
                        >
                          <MoreVertical
                            size={18}
                          />
                        </button>

                        {/* Action Menu */}
                        {isActionOpen && (
                          <div
                            className="
                              absolute
                              right-0
                              z-30
                              mt-2
                              w-44
                              overflow-hidden
                              rounded-xl
                              border
                              border-border
                              bg-popover
                              p-1
                              shadow-xl
                            "
                          >

                            {/* View */}
                            <button
                              type="button"
                              onClick={() =>
                                handleAction(
                                  "view",
                                  admin
                                )
                              }
                              className="
                                flex
                                w-full
                                items-center
                                gap-2
                                rounded-lg
                                px-3
                                py-2
                                text-left
                                text-sm
                                text-foreground
                                transition
                                hover:bg-secondary
                              "
                            >
                              <Eye
                                size={15}
                              />
                              View
                            </button>

                            {/* Edit */}
                            <button
                              type="button"
                              onClick={() =>
                                handleAction(
                                  "edit",
                                  admin
                                )
                              }
                              className="
                                flex
                                w-full
                                items-center
                                gap-2
                                rounded-lg
                                px-3
                                py-2
                                text-left
                                text-sm
                                text-foreground
                                transition
                                hover:bg-secondary
                              "
                            >
                              <Pencil
                                size={15}
                              />
                              Edit
                            </button>

                            {/* Activate */}
                            {admin.status !==
                              "ACTIVE" && (
                                <button
                                  type="button"
                                  disabled={actionLoading}
                                  onClick={() =>
                                    handleAction(
                                      "activate",
                                      admin
                                    )
                                  }
                                  className="
                                  flex
                                  w-full
                                  items-center
                                  gap-2
                                  rounded-lg
                                  px-3
                                  py-2
                                  text-left
                                  text-sm
                                  text-emerald-600
                                  transition
                                  hover:bg-emerald-500/10
                                  dark:text-emerald-400
                                "
                                >
                                  <UserCheck
                                    size={15}
                                  />
                                  Activate
                                </button>
                              )}

                            {/* Suspend */}
                            {admin.status ===
                              "ACTIVE" && (
                                <button
                                  type="button"
                                  disabled={actionLoading}
                                  onClick={() =>
                                    handleAction(
                                      "suspend",
                                      admin
                                    )
                                  }
                                  className="
                                  flex
                                  w-full
                                  items-center
                                  gap-2
                                  rounded-lg
                                  px-3
                                  py-2
                                  text-left
                                  text-sm
                                  text-destructive
                                  transition
                                  hover:bg-destructive/10
                                "
                                >
                                  <UserX
                                    size={15}
                                  />
                                  Suspend
                                </button>
                              )}

                          </div>
                        )}

                      </div>
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
            <td colSpan={9}>

              <TablePagination
                page={page}
                totalPages={totalPages}
                totalRows={
                  total ??
                  totalFilteredRows
                }
                selectedRows={
                  selectedRows.length
                }
                rowsPerPage={
                  rowsPerPage
                }
                onPageChange={
                  setPage
                }
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