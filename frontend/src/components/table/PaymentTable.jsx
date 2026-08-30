"use client";

import React, { useMemo, useState } from "react";
import {
  MoreVertical,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCcw,
} from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "./core";

import DateFilter from "../ui/DateFilter";
import SearchBar from "../ui/SearchBar";
import StatusFilter from "../ui/StatusFilter";

const DUMMY_PAYMENTS = [
  {
    id: "pay_001",
    userId: "usr_001",
    userName: "Rahul Sharma",
    username: "admin_A12B3C",
    subscriptionId: "sub_001",
    planName: "Premium",
    amount: 2999,
    currency: "INR",
    paymentMethod: "UPI",
    status: "PAID",
    transactionId: "TXN_20260829001",
    gatewayOrderId: "order_RH001",
    gatewayPaymentId: "pay_RH001",
    paidAt: "2026-08-29T10:30:00",
    createdAt: "2026-08-29T10:25:00",
  },
  {
    id: "pay_002",
    userId: "usr_002",
    userName: "Amit Verma",
    username: "admin_X92KLM",
    subscriptionId: "sub_002",
    planName: "Basic",
    amount: 999,
    currency: "INR",
    paymentMethod: "CARD",
    status: "PENDING",
    transactionId: null,
    gatewayOrderId: "order_AM002",
    gatewayPaymentId: null,
    paidAt: null,
    createdAt: "2026-08-28T14:15:00",
  },
  {
    id: "pay_003",
    userId: "usr_003",
    userName: "Priya Singh",
    username: "admin_P34XYZ",
    subscriptionId: "sub_003",
    planName: "Enterprise",
    amount: 7999,
    currency: "INR",
    paymentMethod: "NET_BANKING",
    status: "PAID",
    transactionId: "TXN_20260827003",
    gatewayOrderId: "order_PS003",
    gatewayPaymentId: "pay_PS003",
    paidAt: "2026-08-27T09:45:00",
    createdAt: "2026-08-27T09:40:00",
  },
  {
    id: "pay_004",
    userId: "usr_004",
    userName: "Vikas Kumar",
    username: "admin_VK78QWE",
    subscriptionId: "sub_004",
    planName: "Premium",
    amount: 2999,
    currency: "INR",
    paymentMethod: "UPI",
    status: "FAILED",
    transactionId: null,
    gatewayOrderId: "order_VK004",
    gatewayPaymentId: null,
    paidAt: null,
    createdAt: "2026-08-26T18:20:00",
  },
  {
    id: "pay_005",
    userId: "usr_005",
    userName: "Neha Gupta",
    username: "admin_NG55ABC",
    subscriptionId: "sub_005",
    planName: "Basic",
    amount: 999,
    currency: "INR",
    paymentMethod: "CARD",
    status: "REFUNDED",
    transactionId: "TXN_20260825005",
    gatewayOrderId: "order_NG005",
    gatewayPaymentId: "pay_NG005",
    paidAt: "2026-08-25T11:10:00",
    createdAt: "2026-08-25T11:05:00",
  },
  {
    id: "pay_006",
    userId: "usr_006",
    userName: "Arjun Mehta",
    username: "admin_AM66DEF",
    subscriptionId: "sub_006",
    planName: "Enterprise",
    amount: 7999,
    currency: "INR",
    paymentMethod: "UPI",
    status: "PAID",
    transactionId: "TXN_20260824006",
    gatewayOrderId: "order_AM006",
    gatewayPaymentId: "pay_AM006",
    paidAt: "2026-08-24T16:30:00",
    createdAt: "2026-08-24T16:25:00",
  },
];

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatAmount = (amount, currency = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
};

const getStatusClass = (status) => {
  switch (status) {
    case "PAID":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";

    case "PENDING":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400";

    case "FAILED":
      return "bg-red-500/10 text-red-600 dark:text-red-400";

    case "REFUNDED":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400";

    default:
      return "bg-muted text-foreground";
  }
};

export default function PaymentTable() {
  const [payments] = useState(DUMMY_PAYMENTS);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const [openAction, setOpenAction] = useState(null);

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        !search ||
        payment.userName.toLowerCase().includes(searchText) ||
        payment.username.toLowerCase().includes(searchText) ||
        payment.id.toLowerCase().includes(searchText) ||
        payment.planName.toLowerCase().includes(searchText) ||
        payment.transactionId?.toLowerCase().includes(searchText);

      const matchesStatus =
        !status || payment.status === status;

      let matchesDate = true;

      if (date) {
        const paymentDate = new Date(payment.createdAt)
          .toISOString()
          .split("T")[0];

        matchesDate = paymentDate === date;
      }

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDate
      );
    });
  }, [payments, search, status, date]);

  const total = filteredPayments.length;

  const totalPages = Math.max(
    1,
    Math.ceil(total / rowsPerPage)
  );

  const paginatedPayments = filteredPayments.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setPage(1);
  };

  const handleDateChange = (value) => {
    setDate(value);
    setPage(1);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setStatus("");
    setDate("");
    setPage(1);
  };

  return (
    <div className="space-y-4">

      {/* =========================
          FILTERS
      ========================== */}

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-1 flex-col gap-3 sm:flex-row">

          <SearchBar
            value={search}
            onChange={handleSearch}
            placeholder="Search payments..."
          />

          <StatusFilter
            value={status}
            onChange={handleStatusChange}
            options={[
              {
                value: "PAID",
                label: "Paid",
              },
              {
                value: "PENDING",
                label: "Pending",
              },
              {
                value: "FAILED",
                label: "Failed",
              },
              {
                value: "REFUNDED",
                label: "Refunded",
              },
            ]}
          />

          <DateFilter
            value={date}
            onChange={handleDateChange}
          />

        </div>

        {(search || status || date) && (
          <button
            type="button"
            onClick={clearFilters}
            className="
              inline-flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-border
              px-4
              text-sm
              font-medium
              text-muted-foreground
              transition
              hover:bg-secondary
              hover:text-foreground
            "
          >
            <RefreshCcw size={15} />
            Clear
          </button>
        )}

      </div>

      {/* =========================
          TABLE
      ========================== */}

      <div className="overflow-hidden rounded-2xl border border-border bg-background">

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
                User
              </TableCell>

              <TableCell header>
                Plan
              </TableCell>

              <TableCell header>
                Amount
              </TableCell>

              <TableCell header>
                Method
              </TableCell>

              <TableCell header>
                Status
              </TableCell>

              <TableCell header>
                Paid At
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

            {paginatedPayments.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={8}
                  align="center"
                  className="py-14"
                >
                  <div className="flex flex-col items-center gap-2">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <XCircle
                        size={20}
                        className="text-muted-foreground"
                      />
                    </div>

                    <p className="text-sm font-medium text-foreground">
                      No payments found
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Try changing your search or filters.
                    </p>

                  </div>
                </TableCell>

              </TableRow>

            ) : (

              paginatedPayments.map(
                (payment, index) => (

                  <TableRow
                    key={payment.id}
                  >

                    {/* INDEX */}

                    <TableCell>
                      {(page - 1) *
                        rowsPerPage +
                        index +
                        1}
                    </TableCell>

                    {/* USER */}

                    <TableCell>

                      <div>
                        <p className="font-medium text-foreground">
                          {payment.userName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          @{payment.username}
                        </p>
                      </div>

                    </TableCell>

                    {/* PLAN */}

                    <TableCell>

                      <div>
                        <p className="font-medium text-foreground">
                          {payment.planName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {payment.subscriptionId}
                        </p>
                      </div>

                    </TableCell>

                    {/* AMOUNT */}

                    <TableCell>

                      <span className="font-semibold text-foreground">
                        {formatAmount(
                          payment.amount,
                          payment.currency
                        )}
                      </span>

                    </TableCell>

                    {/* METHOD */}

                    <TableCell>

                      <span className="text-sm text-foreground">
                        {payment.paymentMethod
                          ?.replaceAll("_", " ") ||
                          "-"}
                      </span>

                    </TableCell>

                    {/* STATUS */}

                    <TableCell>

                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-1.5
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

                        {payment.status ===
                          "PAID" && (
                          <CheckCircle
                            size={12}
                          />
                        )}

                        {payment.status ===
                          "PENDING" && (
                          <Clock
                            size={12}
                          />
                        )}

                        {payment.status ===
                          "FAILED" && (
                          <XCircle
                            size={12}
                          />
                        )}

                        {payment.status ===
                          "REFUNDED" && (
                          <RefreshCcw
                            size={12}
                          />
                        )}

                        {payment.status}

                      </span>

                    </TableCell>

                    {/* PAID AT */}

                    <TableCell>

                      <span className="text-sm text-muted-foreground">
                        {formatDate(
                          payment.paidAt
                        )}
                      </span>

                    </TableCell>

                    {/* ACTION */}

                    <TableCell align="right">

                      <div className="relative inline-flex">

                        <button
                          type="button"
                          onClick={() =>
                            setOpenAction(
                              openAction ===
                                payment.id
                                ? null
                                : payment.id
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

                        {openAction ===
                          payment.id && (

                          <>

                            <div
                              className="fixed inset-0 z-10"
                              onClick={() =>
                                setOpenAction(null)
                              }
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
                                  console.log(
                                    "View payment:",
                                    payment
                                  );
                                  setOpenAction(
                                    null
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
                                  text-left
                                  text-sm
                                  text-foreground
                                  hover:bg-secondary
                                "
                              >
                                <Eye size={15} />
                                View Details
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

          <tfoot>

            <tr>

              <td colSpan={8}>

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