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


const getStatusClass = (status) => {
  switch (status) {
    case "SUCCESS":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";

    case "PENDING":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400";

    case "FAILED":
      return "bg-destructive/10 text-destructive";

    case "REFUNDED":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400";

    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPaymentMethodLabel = (method) => {
  if (!method) return "-";

  return method
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function MemberPaymentTable({
  payments = [],
  total,
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [selectedRows, setSelectedRows] = useState([]);

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        !search ||
        payment.member?.name
          ?.toLowerCase()
          .includes(searchText) ||
        payment.member?.mobileNumber
          ?.toLowerCase()
          .includes(searchText) ||
        payment.transactionId
          ?.toLowerCase()
          .includes(searchText) ||
        payment.membership?.name
          ?.toLowerCase()
          .includes(searchText);

      const matchesStatus =
        statusFilter === "ALL" ||
        payment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [payments, search, statusFilter]);

  const totalRows =
    total ?? filteredPayments.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalRows / rowsPerPage)
  );

  const paginatedPayments =
    filteredPayments.slice(
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

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const formatAmount = (amount, currency) => {
    const symbol =
      currency === "INR" ? "₹" : currency;

    return `${symbol}${Number(
      amount
    ).toLocaleString("en-IN")}`;
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
            onChange={(e) =>
              handleSearch(e.target.value)
            }
            placeholder="Search member, mobile, transaction..."
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

        {/* Status */}
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
          <option value="ALL">
            All Status
          </option>

          <option value="SUCCESS">
            Success
          </option>

          <option value="PENDING">
            Pending
          </option>

          <option value="FAILED">
            Failed
          </option>

          <option value="REFUNDED">
            Refunded
          </option>
        </select>
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
              Member
            </TableCell>

            <TableCell header>
              Membership
            </TableCell>

            <TableCell header>
              Amount
            </TableCell>

            <TableCell header>
              Payment Method
            </TableCell>

            <TableCell header>
              Transaction ID
            </TableCell>

            <TableCell header>
              Status
            </TableCell>

            <TableCell header>
              Paid At
            </TableCell>

            {/* <TableCell
              header
              align="right"
            >
              Actions
            </TableCell> */}
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedPayments.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={9}
                align="center"
                className="py-12"
              >
                <div className="text-sm text-muted-foreground">
                  No payments found.
                </div>
              </TableCell>
            </TableRow>
          ) : (
            paginatedPayments.map(
              (payment, index) => (
                <TableRow
                  key={payment.id}
                >
                  {/* # */}
                  <TableCell>
                    {(page - 1) *
                      rowsPerPage +
                      index +
                      1}
                  </TableCell>

                  {/* Member */}
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">
                        {payment.member
                          ?.name || "-"}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {payment.member
                          ?.mobileNumber ||
                          "-"}
                      </p>
                    </div>
                  </TableCell>

                  {/* Membership */}
                  <TableCell>
                    {payment.membership
                      ?.name || (
                      <span className="text-muted-foreground">
                        No Membership
                      </span>
                    )}
                  </TableCell>

                  {/* Amount */}
                  <TableCell>
                    <span className="font-semibold text-foreground">
                      {formatAmount(
                        payment.amount,
                        payment.currency
                      )}
                    </span>
                  </TableCell>

                  {/* Payment Method */}
                  <TableCell>
                    <span className="text-sm">
                      {getPaymentMethodLabel(
                        payment.paymentMethod
                      )}
                    </span>
                  </TableCell>

                  {/* Transaction ID */}
                  <TableCell>
                    <span className="font-mono text-xs text-muted-foreground">
                      {payment.transactionId ||
                        "-"}
                    </span>
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
                        ${getStatusClass(
                          payment.status
                        )}
                      `}
                    >
                      {payment.status}
                    </span>
                  </TableCell>

                  {/* Paid At */}
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(
                        payment.paidAt
                      )}
                    </span>
                  </TableCell>

                  {/* Actions */}
                  {/* <TableCell align="right">
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
                          "View Payment:",
                          payment.id
                        )
                      }
                    >
                      View
                    </button>
                  </TableCell> */}
                </TableRow>
              )
            )
          )}
        </TableBody>

        {/* =========================
            PAGINATION
        ========================== */}

        <tfoot>
          <tr>
            <td colSpan={9}>
              <TablePagination
                page={page}
                totalPages={totalPages}
                totalRows={totalRows}
                selectedRows={
                  selectedRows.length
                }
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