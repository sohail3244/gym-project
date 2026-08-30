"use client";

import React, { useMemo, useState } from "react";
import {
  MoreVertical,
  Pencil,
  Trash2,
  Eye,
  Users,
  UserCog,
  Building2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "./core";

import SearchBar from "@/components/ui/SearchBar";
import StatusFilter from "@/components/ui/StatusFilter";
import DateFilter from "@/components/ui/DateFilter";


// ============================================================
// DUMMY DATA
// ============================================================

const dummyPlans = [
  {
    id: "plan_001",
    name: "Basic",
    description: "Basic plan for small gyms",
    price: 999,
    billingInterval: "MONTHLY",
    durationInDays: 30,
    maxMembers: 100,
    maxStaff: 5,
    maxBusinesses: 1,
    features: [
      "Member Management",
      "Attendance",
      "Basic Reports",
    ],
    status: "ACTIVE",
    createdAt: "2026-08-01T10:30:00Z",
    updatedAt: "2026-08-20T12:00:00Z",
  },

  {
    id: "plan_002",
    name: "Professional",
    description: "Professional plan for growing gyms",
    price: 2499,
    billingInterval: "MONTHLY",
    durationInDays: 30,
    maxMembers: 500,
    maxStaff: 20,
    maxBusinesses: 3,
    features: [
      "Member Management",
      "Attendance",
      "Reports",
      "Payments",
      "Staff Management",
    ],
    status: "ACTIVE",
    createdAt: "2026-07-20T09:00:00Z",
    updatedAt: "2026-08-15T11:00:00Z",
  },

  {
    id: "plan_003",
    name: "Enterprise",
    description: "Advanced plan for large businesses",
    price: 5999,
    billingInterval: "YEARLY",
    durationInDays: 365,
    maxMembers: 5000,
    maxStaff: 100,
    maxBusinesses: 20,
    features: [
      "Unlimited Reports",
      "Advanced Analytics",
      "Staff Management",
      "Multi Business",
      "Priority Support",
    ],
    status: "ACTIVE",
    createdAt: "2026-06-15T08:30:00Z",
    updatedAt: "2026-08-10T15:00:00Z",
  },

  {
    id: "plan_004",
    name: "Starter",
    description: "Starter plan for new businesses",
    price: 499,
    billingInterval: "MONTHLY",
    durationInDays: 30,
    maxMembers: 50,
    maxStaff: 2,
    maxBusinesses: 1,
    features: [
      "Member Management",
      "Attendance",
    ],
    status: "INACTIVE",
    createdAt: "2026-05-10T10:00:00Z",
    updatedAt: "2026-07-01T10:00:00Z",
  },

  {
    id: "plan_005",
    name: "Premium",
    description: "Premium plan with advanced features",
    price: 3999,
    billingInterval: "QUARTERLY",
    durationInDays: 90,
    maxMembers: 1500,
    maxStaff: 50,
    maxBusinesses: 10,
    features: [
      "Member Management",
      "Attendance",
      "Reports",
      "Payments",
      "Analytics",
      "Staff Management",
    ],
    status: "ACTIVE",
    createdAt: "2026-04-25T13:00:00Z",
    updatedAt: "2026-08-05T14:00:00Z",
  },

  {
    id: "plan_006",
    name: "Legacy",
    description: "Old subscription plan",
    price: 799,
    billingInterval: "MONTHLY",
    durationInDays: 30,
    maxMembers: 100,
    maxStaff: 5,
    maxBusinesses: 1,
    features: [
      "Member Management",
      "Attendance",
    ],
    status: "INACTIVE",
    createdAt: "2026-03-12T10:00:00Z",
    updatedAt: "2026-06-12T10:00:00Z",
  },
];


// ============================================================
// HELPERS
// ============================================================

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price);
};


const formatInterval = (interval) => {
  switch (interval) {
    case "MONTHLY":
      return "Monthly";

    case "QUARTERLY":
      return "Quarterly";

    case "YEARLY":
      return "Yearly";

    case "WEEKLY":
      return "Weekly";

    case "DAILY":
      return "Daily";

    default:
      return interval || "-";
  }
};


const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};


// ============================================================
// STATUS BADGE
// ============================================================

function StatusBadge({ status }) {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        px-2.5
        py-1
        text-xs
        font-semibold
        ${
          isActive
            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            : "bg-muted text-muted-foreground"
        }
      `}
    >
      {isActive ? (
        <CheckCircle2 size={13} />
      ) : (
        <XCircle size={13} />
      )}

      {status}
    </span>
  );
}


// ============================================================
// ACTION MENU
// ============================================================

function ActionMenu({ plan, onView, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex justify-end">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
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
        <MoreVertical size={18} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />

          <div
            className="
              absolute
              right-0
              top-9
              z-20
              w-40
              overflow-hidden
              rounded-xl
              border
              border-border
              bg-background
              p-1
              shadow-xl
            "
          >
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onView?.(plan);
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
                hover:bg-secondary
              "
            >
              <Eye size={15} />
              View
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onEdit?.(plan);
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
                hover:bg-secondary
              "
            >
              <Pencil size={15} />
              Edit
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onDelete?.(plan);
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
                text-destructive
                hover:bg-destructive/10
              "
            >
              <Trash2 size={15} />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}


// ============================================================
// MAIN TABLE
// ============================================================

export default function BusinessPlanTable({
  plans = dummyPlans,
  onView,
  onEdit,
  onDelete,
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [dateFilter, setDateFilter] = useState(null);


  // ==========================================================
  // FILTER DATA
  // ==========================================================

  const filteredPlans = useMemo(() => {
    let result = [...plans];

    // SEARCH
    if (search.trim()) {
      const value = search.toLowerCase().trim();

      result = result.filter((plan) => {
        return (
          plan.name?.toLowerCase().includes(value) ||
          plan.description?.toLowerCase().includes(value) ||
          plan.billingInterval
            ?.toLowerCase()
            .includes(value)
        );
      });
    }


    // STATUS
    if (status) {
      result = result.filter(
        (plan) => plan.status === status
      );
    }


    // DATE FILTER
    if (dateFilter?.from || dateFilter?.to) {
      result = result.filter((plan) => {
        const createdDate = new Date(plan.createdAt);

        if (dateFilter.from) {
          const fromDate = new Date(dateFilter.from);
          fromDate.setHours(0, 0, 0, 0);

          if (createdDate < fromDate) {
            return false;
          }
        }

        if (dateFilter.to) {
          const toDate = new Date(dateFilter.to);
          toDate.setHours(23, 59, 59, 999);

          if (createdDate > toDate) {
            return false;
          }
        }

        return true;
      });
    }

    return result;
  }, [plans, search, status, dateFilter]);


  // ==========================================================
  // PAGINATION
  // ==========================================================

  const total = filteredPlans.length;

  const totalPages = Math.max(
    1,
    Math.ceil(total / rowsPerPage)
  );

  const paginatedPlans = filteredPlans.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );


  // ==========================================================
  // HANDLERS
  // ==========================================================

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


  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        shadow-sm
      "
    >

      {/* ======================================================
          FILTER SECTION
      ======================================================= */}

      <div
        className="
          flex
          flex-col
          gap-3
          border-b
          border-border
          p-4
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        {/* SEARCH */}

        <div className="w-full lg:max-w-sm">
          <SearchBar
            value={search}
            onChange={handleSearchChange}
            placeholder="Search plans..."
          />
        </div>


        {/* FILTERS */}

        <div className="flex flex-wrap items-center gap-2">

          <StatusFilter
            value={status}
            onChange={handleStatusChange}
            options={[
              {
                label: "All Status",
                value: "",
              },
              {
                label: "Active",
                value: "ACTIVE",
              },
              {
                label: "Inactive",
                value: "INACTIVE",
              },
            ]}
          />

          <DateFilter
            value={dateFilter}
            onChange={handleDateChange}
          />

        </div>
      </div>


      {/* ======================================================
          TABLE
      ======================================================= */}

      <div className="overflow-x-auto">

        <Table>

          <TableHeader>

            <TableRow>

              <TableCell
                header
                className="w-14"
              >
                #
              </TableCell>

              <TableCell header>
                Plan
              </TableCell>

              <TableCell header>
                Price
              </TableCell>

              <TableCell header>
                Billing
              </TableCell>

              <TableCell header>
                Limits
              </TableCell>

              {/* <TableCell header>
                Features
              </TableCell> */}

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


          <TableBody>

            {paginatedPlans.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={9}
                  align="center"
                  className="py-14"
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
                        rounded-xl
                        bg-muted
                      "
                    >
                      <Building2
                        size={22}
                        className="text-muted-foreground"
                      />
                    </div>

                    <p className="text-sm font-medium text-foreground">
                      No plans found
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Try changing your search or filters.
                    </p>

                  </div>
                </TableCell>

              </TableRow>

            ) : (

              paginatedPlans.map((plan, index) => (

                <TableRow key={plan.id}>

                  {/* INDEX */}

                  <TableCell>
                    {(page - 1) * rowsPerPage +
                      index +
                      1}
                  </TableCell>


                  {/* PLAN */}

                  <TableCell>

                    <div className="min-w-45">

                      <p className="font-semibold text-foreground">
                        {plan.name}
                      </p>

                      <p
                        className="
                          mt-0.5
                          max-w-62.5
                          truncate
                          text-xs
                          text-muted-foreground
                        "
                      >
                        {plan.description || "-"}
                      </p>

                    </div>

                  </TableCell>


                  {/* PRICE */}

                  <TableCell>

                    <div>

                      <p className="font-semibold text-foreground">
                        {formatPrice(plan.price)}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        / {formatInterval(plan.billingInterval)}
                      </p>

                    </div>

                  </TableCell>


                  {/* BILLING */}

                  <TableCell>

                    <div>

                      <p className="text-sm font-medium text-foreground">
                        {formatInterval(
                          plan.billingInterval
                        )}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {plan.durationInDays} days
                      </p>

                    </div>

                  </TableCell>


                  {/* LIMITS */}

                  <TableCell>

                    <div className="space-y-1.5">

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          text-muted-foreground
                        "
                      >
                        <Users size={13} />

                        <span>
                          {plan.maxMembers ?? "Unlimited"}{" "}
                          Members
                        </span>
                      </div>


                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          text-muted-foreground
                        "
                      >
                        <UserCog size={13} />

                        <span>
                          {plan.maxStaff ?? "Unlimited"}{" "}
                          Staff
                        </span>
                      </div>


                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          text-muted-foreground
                        "
                      >
                        <Building2 size={13} />

                        <span>
                          {plan.maxBusinesses ?? "Unlimited"}{" "}
                          Businesses
                        </span>
                      </div>

                    </div>

                  </TableCell>


                  {/* FEATURES */}

                  {/* <TableCell>

                    <div className="flex max-w-55 flex-wrap gap-1.5">

                      {plan.features?.length ? (
                        <>
                          {plan.features
                            .slice(0, 2)
                            .map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="
                                  rounded-md
                                  bg-muted
                                  px-2
                                  py-1
                                  text-[11px]
                                  font-medium
                                  text-foreground
                                "
                              >
                                {feature}
                              </span>
                            ))}

                          {plan.features.length > 2 && (
                            <span
                              className="
                                rounded-md
                                bg-primary/10
                                px-2
                                py-1
                                text-[11px]
                                font-medium
                                text-primary
                              "
                            >
                              +{plan.features.length - 2}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          No features
                        </span>
                      )}

                    </div>

                  </TableCell> */}


                  {/* STATUS */}

                  <TableCell>
                    <StatusBadge status={plan.status} />
                  </TableCell>


                  {/* DATE */}

                  <TableCell>

                    <span className="whitespace-nowrap text-xs text-muted-foreground">
                      {formatDate(plan.createdAt)}
                    </span>

                  </TableCell>


                  {/* ACTION */}

                  <TableCell align="right">

                    <ActionMenu
                      plan={plan}
                      onView={onView}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />

                  </TableCell>

                </TableRow>

              ))

            )}

          </TableBody>


          {/* ==================================================
              PAGINATION
          =================================================== */}

          <tfoot>

            <tr>

              <td colSpan={9}>

                <TablePagination
                  page={page}
                  totalPages={totalPages}
                  totalRows={total}
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