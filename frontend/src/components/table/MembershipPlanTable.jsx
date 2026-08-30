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

const DUMMY_MEMBERSHIP_PLANS = [
  {
    id: "mp_001",
    name: "Monthly Fitness",
    description: "Full gym access for one month",
    price: "999.00",
    durationInDays: 30,
    features: ["Gym Access", "Locker", "Free Assessment"],
    status: "ACTIVE",
    createdAt: "2026-08-01T10:30:00Z",
  },
  {
    id: "mp_002",
    name: "Quarterly Fitness",
    description: "Affordable 3 month membership",
    price: "2499.00",
    durationInDays: 90,
    features: ["Gym Access", "Locker", "Trainer Support"],
    status: "ACTIVE",
    createdAt: "2026-07-15T11:00:00Z",
  },
  {
    id: "mp_003",
    name: "Half Yearly",
    description: "Six month complete fitness plan",
    price: "4499.00",
    durationInDays: 180,
    features: ["Gym Access", "Locker", "Trainer Support", "Diet Plan"],
    status: "ACTIVE",
    createdAt: "2026-06-20T09:15:00Z",
  },
  {
    id: "mp_004",
    name: "Annual Premium",
    description: "Complete annual premium membership",
    price: "7999.00",
    durationInDays: 365,
    features: [
      "Gym Access",
      "Locker",
      "Personal Trainer",
      "Diet Plan",
      "Body Analysis",
    ],
    status: "ACTIVE",
    createdAt: "2026-05-10T14:20:00Z",
  },
  {
    id: "mp_005",
    name: "Basic Membership",
    description: "Basic gym access",
    price: "699.00",
    durationInDays: 30,
    features: ["Gym Access"],
    status: "INACTIVE",
    createdAt: "2026-04-05T08:45:00Z",
  },
  {
    id: "mp_006",
    name: "Student Plan",
    description: "Special membership for students",
    price: "599.00",
    durationInDays: 30,
    features: ["Gym Access", "Locker"],
    status: "ACTIVE",
    createdAt: "2026-03-25T12:30:00Z",
  },
  {
    id: "mp_007",
    name: "Premium Monthly",
    description: "Premium monthly fitness membership",
    price: "1499.00",
    durationInDays: 30,
    features: ["Gym Access", "Personal Trainer", "Diet Plan"],
    status: "ACTIVE",
    createdAt: "2026-02-15T10:00:00Z",
  },
  {
    id: "mp_008",
    name: "Couple Plan",
    description: "Membership for two people",
    price: "1799.00",
    durationInDays: 30,
    features: ["Gym Access", "Locker", "Couple Training"],
    status: "INACTIVE",
    createdAt: "2026-01-18T16:00:00Z",
  },
];

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

export default function MembershipPlanTable({
  plans = DUMMY_MEMBERSHIP_PLANS,
  total,
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [selectedRows, setSelectedRows] = useState([]);

  const filteredPlans = useMemo(() => {
    return plans.filter((plan) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        !search ||
        plan.name?.toLowerCase().includes(searchText) ||
        plan.description?.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "ALL" ||
        plan.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [plans, search, statusFilter]);

  const totalRows = total ?? filteredPlans.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalRows / rowsPerPage)
  );

  const paginatedPlans = filteredPlans.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      {/* =========================
          FILTERS
      ========================== */}

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="w-full md:max-w-sm">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
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

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) =>
            handleStatusChange(e.target.value)
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
          <option value="ALL">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>
      </div>

      {/* =========================
          TABLE
      ========================== */}

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell header className="w-12.5">
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

        <TableBody>
          {paginatedPlans.length === 0 ? (
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
            paginatedPlans.map((plan, index) => (
              <TableRow key={plan.id}>
                {/* Number */}
                <TableCell>
                  {(page - 1) * rowsPerPage +
                    index +
                    1}
                </TableCell>

                {/* Plan */}
                <TableCell>
                  <div className="min-w-40">
                    <p className="font-medium text-foreground">
                      {plan.name}
                    </p>

                    <p className="mt-0.5 max-w-xs truncate text-xs text-muted-foreground">
                      {plan.description || "-"}
                    </p>
                  </div>
                </TableCell>

                {/* Price */}
                <TableCell>
                  <span className="font-semibold text-foreground">
                    ₹{Number(plan.price).toLocaleString("en-IN")}
                  </span>
                </TableCell>

                {/* Duration */}
                <TableCell>
                  <span className="text-sm">
                    {plan.durationInDays} days
                  </span>
                </TableCell>

                {/* Features */}
                <TableCell>
                  <div className="flex max-w-60 flex-wrap gap-1">
                    {plan.features
                      ?.slice(0, 2)
                      .map((feature) => (
                        <span
                          key={feature}
                          className="
                            rounded-md
                            bg-muted
                            px-2
                            py-1
                            text-xs
                            text-muted-foreground
                          "
                        >
                          {feature}
                        </span>
                      ))}

                    {plan.features?.length > 2 && (
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
                        +{plan.features.length - 2}
                      </span>
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
                      font-medium
                      ${getStatusClass(plan.status)}
                    `}
                  >
                    {plan.status}
                  </span>
                </TableCell>

                {/* Created */}
                <TableCell>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(plan.createdAt)}
                  </span>
                </TableCell>

                {/* Actions */}
                <TableCell align="right">
                  <button
                    type="button"
                    className="
                      text-xs
                      font-medium
                      text-primary
                      hover:underline
                    "
                    onClick={() =>
                      console.log(
                        "View Membership Plan:",
                        plan.id
                      )
                    }
                  >
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>

        {/* =========================
            PAGINATION
        ========================== */}

        <tfoot>
          <tr>
            <td colSpan={8}>
              <TablePagination
                page={page}
                totalPages={totalPages}
                totalRows={totalRows}
                selectedRows={selectedRows.length}
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