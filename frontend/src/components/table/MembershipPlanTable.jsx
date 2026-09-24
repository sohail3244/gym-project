"use client";

import React, { useMemo, useState } from "react";

import {
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  Power,
  PowerOff,
} from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "./core";

// =========================================================
// FEATURE LABELS
// =========================================================

const FEATURE_LABELS = {
  gymAccess: "Gym Access",
  personalTrainer: "Personal Trainer",
  groupClasses: "Group Classes",
};

// =========================================================
// GET FEATURE LABELS
// =========================================================

const getFeatureLabels = (features) => {
  if (!features) return [];

  if (Array.isArray(features)) {
    return features;
  }

  return Object.entries(features)
    .filter(([, value]) => value === true)
    .map(([key]) => FEATURE_LABELS[key] || key);
};

// =========================================================
// STATUS CLASS
// =========================================================

const getStatusClass = (status) => {
  switch (status) {
    case "ACTIVE":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";

    case "INACTIVE":
      return "bg-muted text-muted-foreground";

    default:
      return "bg-muted text-foreground";
  }
};

// =========================================================
// MAIN COMPONENT
// =========================================================

export default function MembershipPlanTable({
  plans = [],
  total,
  loading = false,

  // Action callbacks
  onView,
  onEdit,
  onToggleStatus,
  onDelete,
}) {
  // =========================================================
  // PAGINATION
  // =========================================================

  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] =
    useState(10);

  // =========================================================
  // FILTERS
  // =========================================================

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("ALL");

  // =========================================================
  // SELECTED ROWS
  // =========================================================

  const [selectedRows, setSelectedRows] =
    useState([]);

  // =========================================================
  // ACTION MENU
  // =========================================================

  const [openAction, setOpenAction] =
    useState(null);

  // =========================================================
  // FILTER PLANS
  // =========================================================

  const filteredPlans = useMemo(() => {
    return plans.filter((plan) => {
      const searchText =
        search.toLowerCase().trim();

      const matchesSearch =
        !search ||
        plan.name
          ?.toLowerCase()
          .includes(searchText) ||
        plan.description
          ?.toLowerCase()
          .includes(searchText);

      const matchesStatus =
        statusFilter === "ALL" ||
        plan.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [plans, search, statusFilter]);

  // =========================================================
  // PAGINATION DATA
  // =========================================================

  const totalRows =
    total ?? filteredPlans.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalRows / rowsPerPage)
  );

  const paginatedPlans =
    filteredPlans.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    );

  // =========================================================
  // SEARCH
  // =========================================================

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  // =========================================================
  // STATUS FILTER
  // =========================================================

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setPage(1);
  };

  // =========================================================
  // ROWS PER PAGE
  // =========================================================

  const handleRowsPerPageChange = (
    value
  ) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };

  // =========================================================
  // VIEW PLAN
  // =========================================================

  const handleViewPlan = (plan) => {
    onView?.(plan);

    setOpenAction(null);
  };

  // =========================================================
  // EDIT PLAN
  // =========================================================

  const handleEditPlan = (plan) => {
    onEdit?.(plan);

    setOpenAction(null);
  };

  // =========================================================
  // TOGGLE STATUS
  // =========================================================

  const handleTogglePlanStatus = (
    plan
  ) => {
    onToggleStatus?.(plan);

    setOpenAction(null);
  };

  // =========================================================
  // DELETE PLAN
  // =========================================================

  const handleDeletePlan = (plan) => {
    onDelete?.(plan);

    setOpenAction(null);
  };

  // =========================================================
  // FORMAT DATE
  // =========================================================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="space-y-4">
      {/* =====================================================
          FILTERS
      ====================================================== */}

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* SEARCH */}

        <div className="w-full md:max-w-sm">
          <input
            type="text"
            value={search}
            onChange={(e) =>
              handleSearch(
                e.target.value
              )
            }
            placeholder="Search membership plans..."
            className="
              h-10
              w-full
              rounded-xl
              border
              border-border
              bg-background
              px-3
              text-sm
              text-foreground
              outline-none
              transition
              placeholder:text-muted-foreground
              focus:border-primary
              focus:ring-2
              focus:ring-primary/10
            "
          />
        </div>

        {/* STATUS FILTER */}

        <select
          value={statusFilter}
          onChange={(e) =>
            handleStatusChange(
              e.target.value
            )
          }
          className="
            h-10
            rounded-xl
            border
            border-border
            bg-background
            px-3
            text-sm
            text-foreground
            outline-none
            focus:border-primary
            focus:ring-2
            focus:ring-primary/10
          "
        >
          <option value="ALL">
            All Status
          </option>

          <option value="ACTIVE">
            Active
          </option>

          <option value="INACTIVE">
            Inactive
          </option>
        </select>
      </div>

      {/* =====================================================
          TABLE
      ====================================================== */}

      <Table>
        {/* ===================================================
            HEADER
        ==================================================== */}

        <TableHeader>
          <TableRow>
            <TableCell
              header
              className="w-12.5"
            >
              #
            </TableCell>

            <TableCell header>
              Membership Plan
            </TableCell>

            <TableCell header>
              Price
            </TableCell>

            <TableCell header>
              Duration
            </TableCell>

            <TableCell header>
              Features
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

        {/* ===================================================
            BODY
        ==================================================== */}

        <TableBody>
          {/* LOADING */}

          {loading ? (
            <TableRow>
              <TableCell
                colSpan={8}
                align="center"
                className="py-14"
              >
                <div className="text-sm text-muted-foreground">
                  Loading membership plans...
                </div>
              </TableCell>
            </TableRow>
          ) : paginatedPlans.length === 0 ? (
            /* EMPTY */
            <TableRow>
              <TableCell
                colSpan={8}
                align="center"
                className="py-12"
              >
                <div className="text-sm text-muted-foreground">
                  No membership plans found.
                </div>
              </TableCell>
            </TableRow>
          ) : (
            /* PLANS */
            paginatedPlans.map(
              (plan, index) => (
                <TableRow
                  key={plan.id}
                >
                  {/* =========================================
                      NUMBER
                  ========================================== */}

                  <TableCell>
                    {(page - 1) *
                      rowsPerPage +
                      index +
                      1}
                  </TableCell>

                  {/* =========================================
                      PLAN
                  ========================================== */}

                  <TableCell>
                    <div className="min-w-40">
                      <p className="font-medium text-foreground">
                        {plan.name || "-"}
                      </p>

                      <p className="mt-0.5 max-w-xs truncate text-xs text-muted-foreground">
                        {plan.description ||
                          "-"}
                      </p>
                    </div>
                  </TableCell>

                  {/* =========================================
                      PRICE
                  ========================================== */}

                  <TableCell>
                    <span className="font-semibold text-foreground">
                      ₹
                      {Number(
                        plan.price || 0
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </TableCell>

                  {/* =========================================
                      DURATION
                  ========================================== */}

                  <TableCell>
                    <span className="text-sm">
                      {plan.durationInDays ??
                        0}{" "}
                      days
                    </span>
                  </TableCell>

                  {/* =========================================
                      FEATURES
                  ========================================== */}

                  <TableCell>
                    {(() => {
                      const featureLabels =
                        getFeatureLabels(
                          plan.features
                        );

                      return (
                        <div className="flex max-w-60 flex-wrap gap-1">
                          {featureLabels.length ===
                          0 ? (
                            <span className="text-xs text-muted-foreground">
                              No features
                            </span>
                          ) : (
                            <>
                              {featureLabels
                                .slice(0, 2)
                                .map(
                                  (
                                    feature
                                  ) => (
                                    <span
                                      key={
                                        feature
                                      }
                                      className="
                                        rounded-md
                                        bg-muted
                                        px-2
                                        py-1
                                        text-xs
                                        text-muted-foreground
                                      "
                                    >
                                      {
                                        feature
                                      }
                                    </span>
                                  )
                                )}

                              {featureLabels.length >
                                2 && (
                                <span
                                  className="
                                    rounded-md
                                    bg-primary/10
                                    px-2
                                    py-1
                                    text-xs
                                    font-medium
                                    text-primary
                                  "
                                >
                                  +
                                  {featureLabels.length -
                                    2}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })()}
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
                        ${getStatusClass(
                          plan.status
                        )}
                      `}
                    >
                      {plan.status ||
                        "-"}
                    </span>
                  </TableCell>

                  {/* =========================================
                      CREATED
                  ========================================== */}

                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(
                        plan.createdAt
                      )}
                    </span>
                  </TableCell>

                  {/* =========================================
                      ACTIONS
                  ========================================== */}

                  <TableCell align="right">
                    <div className="relative inline-flex">
                      {/* =====================================
                          MORE BUTTON
                      ====================================== */}

                      <button
                        type="button"
                        onClick={() =>
                          setOpenAction(
                            openAction ===
                              plan.id
                              ? null
                              : plan.id
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
                        "
                      >
                        <MoreVertical
                          size={17}
                        />
                      </button>

                      {/* =====================================
                          ACTION MENU
                      ====================================== */}

                      {openAction ===
                        plan.id && (
                        <>
                          {/* BACKDROP */}

                          <div
                            className="fixed inset-0 z-10"
                            onClick={() =>
                              setOpenAction(
                                null
                              )
                            }
                          />

                          {/* MENU */}

                          <div
                            className="
                              absolute
                              right-0
                              top-9
                              z-20
                              w-44
                              overflow-hidden
                              rounded-xl
                              border
                              border-border
                              bg-background
                              p-1
                              shadow-xl
                            "
                          >
                            {/* VIEW */}

                            <button
                              type="button"
                              onClick={() =>
                                handleViewPlan(
                                  plan
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
                                hover:bg-secondary
                              "
                            >
                              <Eye
                                size={15}
                              />

                              View Details
                            </button>

                            {/* EDIT */}

                            <button
                              type="button"
                              onClick={() =>
                                handleEditPlan(
                                  plan
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
                                hover:bg-secondary
                              "
                            >
                              <Pencil
                                size={15}
                              />

                              Edit Plan
                            </button>

                            {/* STATUS */}

                            <button
                              type="button"
                              onClick={() =>
                                handleTogglePlanStatus(
                                  plan
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
                                hover:bg-secondary
                              "
                            >
                              {plan.status ===
                              "ACTIVE" ? (
                                <>
                                  <PowerOff
                                    size={
                                      15
                                    }
                                  />

                                  Deactivate
                                </>
                              ) : (
                                <>
                                  <Power
                                    size={
                                      15
                                    }
                                  />

                                  Activate
                                </>
                              )}
                            </button>

                            {/* DELETE */}

                            <button
                              type="button"
                              onClick={() =>
                                handleDeletePlan(
                                  plan
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
                                hover:bg-destructive/10
                              "
                            >
                              <Trash2
                                size={15}
                              />

                              Delete Plan
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )
            )
          )}
        </TableBody>

        {/* ===================================================
            PAGINATION
        ==================================================== */}

        <tfoot>
          <tr>
            <td colSpan={8}>
              <TablePagination
                page={page}
                totalPages={totalPages}
                totalRows={totalRows}
                selectedRows={
                  selectedRows.length
                }
                rowsPerPage={
                  rowsPerPage
                }
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