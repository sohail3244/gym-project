"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCcw,
  MoreVertical,
  Download,
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
   FORMAT DATE
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
   FORMAT AMOUNT
========================================================= */

const formatAmount = (
  amount,
  currency = "INR"
) => {
  if (amount === null || amount === undefined) {
    return "-";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(Number(amount));
};

/* =========================================================
   PAYMENT METHOD LABEL
========================================================= */

const formatPaymentMethod = (method) => {
  if (!method) {
    return "-";
  }

  return method
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
};

/* =========================================================
   STATUS CLASS
========================================================= */

const getStatusClasses = (status) => {
  switch (status) {
    case "SUCCESS":
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

    case "FAILED":
      return `
        bg-red-500/10
        text-red-600
        dark:text-red-400
      `;

    case "REFUNDED":
      return `
        bg-blue-500/10
        text-blue-600
        dark:text-blue-400
      `;

    default:
      return `
        bg-muted
        text-muted-foreground
      `;
  }
};

/* =========================================================
   STATUS ICON
========================================================= */

const StatusIcon = ({ status }) => {
  switch (status) {
    case "SUCCESS":
      return <CheckCircle size={13} />;

    case "PENDING":
      return <Clock size={13} />;

    case "FAILED":
      return <XCircle size={13} />;

    case "REFUNDED":
      return <RefreshCcw size={13} />;

    default:
      return null;
  }
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PaymentTable({
  payments = [],
  isLoading = false,
  isFetching = false,
  onView,
  onDownloadReceipt,
}) {
  /* =======================================================
     STATES
  ======================================================== */

  const [search, setSearch] = useState("");

  const [status, setStatus] =
    useState("ALL");

  const [dateFilter, setDateFilter] =
    useState("ALL");

  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] =
    useState(10);

  const [selectedRows, setSelectedRows] =
    useState([]);

  const [openActionId, setOpenActionId] =
    useState(null);

  const actionMenuRef = useRef(null);

  /* =======================================================
     RESET PAGE WHEN FILTER CHANGES
  ======================================================== */

  useEffect(() => {
    setPage(1);
  }, [
    search,
    status,
    dateFilter,
    rowsPerPage,
  ]);

  /* =======================================================
     CLOSE ACTION MENU ON OUTSIDE CLICK
  ======================================================== */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(
          event.target
        )
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
     FILTER PAYMENTS
  ======================================================== */

  const filteredPayments = useMemo(() => {
    let result = [...payments];

    /* -----------------------------------------------------
       SEARCH
    ----------------------------------------------------- */

    if (search.trim()) {
      const searchValue =
        search.trim().toLowerCase();

      result = result.filter((payment) => {
        return (
          payment.user?.name
            ?.toLowerCase()
            .includes(searchValue) ||

          payment.user?.username
            ?.toLowerCase()
            .includes(searchValue) ||

          payment.user?.email
            ?.toLowerCase()
            .includes(searchValue) ||

          payment.id
            ?.toLowerCase()
            .includes(searchValue) ||

          payment.transactionId
            ?.toLowerCase()
            .includes(searchValue) ||

          payment.gatewayOrderId
            ?.toLowerCase()
            .includes(searchValue) ||

          payment.gatewayPaymentId
            ?.toLowerCase()
            .includes(searchValue) ||

          payment.subscription?.plan?.name
            ?.toLowerCase()
            .includes(searchValue)
        );
      });
    }

    /* -----------------------------------------------------
       STATUS
    ----------------------------------------------------- */

    if (status !== "ALL") {
      result = result.filter(
        (payment) =>
          payment.status === status
      );
    }

    /* -----------------------------------------------------
       DATE
    ----------------------------------------------------- */

    if (dateFilter !== "ALL") {
      const now = new Date();

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const yesterday = new Date(today);
      yesterday.setDate(
        yesterday.getDate() - 1
      );

      const yesterdayEnd = new Date(today);
      yesterdayEnd.setMilliseconds(-1);

      result = result.filter((payment) => {
        if (!payment.createdAt) {
          return false;
        }

        const paymentDate = new Date(
          payment.createdAt
        );

        switch (dateFilter) {
          case "TODAY":
            return paymentDate >= today;

          case "YESTERDAY":
            return (
              paymentDate >= yesterday &&
              paymentDate <= yesterdayEnd
            );

          case "LAST_7_DAYS": {
            const last7Days = new Date(now);

            last7Days.setDate(
              last7Days.getDate() - 7
            );

            return paymentDate >= last7Days;
          }

          case "LAST_30_DAYS": {
            const last30Days = new Date(now);

            last30Days.setDate(
              last30Days.getDate() - 30
            );

            return paymentDate >= last30Days;
          }

          case "THIS_MONTH": {
            const startOfMonth = new Date(
              now.getFullYear(),
              now.getMonth(),
              1
            );

            return (
              paymentDate >= startOfMonth
            );
          }

          default:
            return true;
        }
      });
    }

    return result;
  }, [
    payments,
    search,
    status,
    dateFilter,
  ]);

  /* =======================================================
     PAGINATION
  ======================================================== */

  const totalFilteredRows =
    filteredPayments.length;

  const totalPages = Math.max(
    1,
    Math.ceil(
      totalFilteredRows / rowsPerPage
    )
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedPayments =
    filteredPayments.slice(
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
      paginatedPayments.map(
        (payment) => payment.id
      );

    const allSelected =
      currentPageIds.length > 0 &&
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
    paginatedPayments.length > 0 &&
    paginatedPayments.every((payment) =>
      selectedRows.includes(payment.id)
    );

  /* =======================================================
     ACTION HANDLER
  ======================================================== */

  const handleAction = (
    action,
    payment
  ) => {
    setOpenActionId(null);

    switch (action) {
      case "view":
        onView?.(payment);
        break;

      case "receipt":
        onDownloadReceipt?.(payment);
        break;

      default:
        break;
    }
  };

  /* =======================================================
     LOADING
  ======================================================== */

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-16 animate-pulse rounded-2xl bg-muted" />

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="space-y-3 p-6">
            {Array.from({ length: 6 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-12 animate-pulse rounded-lg bg-muted"
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     RENDER
  ======================================================== */

  return (
    <div className="space-y-4">

      {/* =================================================
          TOOLBAR
      ================================================== */}

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

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search payments..."
          className="w-full lg:max-w-sm"
        />

        {/* Filters */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-2
          "
        >
          <StatusFilter
            value={status}
            onChange={setStatus}
            options={[
              {
                value: "ALL",
                label: "All Status",
              },
              {
                value: "SUCCESS",
                label: "Success",
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
            value={dateFilter}
            onChange={setDateFilter}
          />
        </div>
      </div>

      {/* =================================================
          TABLE
      ================================================== */}

      <div className="overflow-x-auto rounded-2xl border border-border bg-card">

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
                  aria-label="Select all payments"
                />
              </TableCell>

              {/* Number */}

              <TableCell header>
                #
              </TableCell>

              {/* User */}

              <TableCell header>
                User
              </TableCell>

              {/* Plan */}

              <TableCell header>
                Plan
              </TableCell>

              {/* Amount */}

              <TableCell header>
                Amount
              </TableCell>

              {/* Method */}

              <TableCell header>
                Method
              </TableCell>

              {/* Transaction */}

              <TableCell header>
                Transaction
              </TableCell>

              {/* Status */}

              <TableCell header>
                Status
              </TableCell>

              {/* Paid */}

              <TableCell header>
                Paid At
              </TableCell>

              {/* Actions */}

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

            {isFetching &&
              !isLoading && (
                <TableRow>
                  <TableCell
                    colSpan={11}
                    align="center"
                    className="py-4"
                  >
                    <span className="text-xs text-muted-foreground">
                      Updating payments...
                    </span>
                  </TableCell>
                </TableRow>
              )}

            {paginatedPayments.length ===
            0 ? (
              <TableRow>

                <TableCell
                  colSpan={11}
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
                      <XCircle
                        size={20}
                      />
                    </div>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      No payments found
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
              paginatedPayments.map(
                (payment, index) => {

                  const isSelected =
                    selectedRows.includes(
                      payment.id
                    );

                  const isActionOpen =
                    openActionId ===
                    payment.id;

                  const plan =
                    payment.subscription
                      ?.plan;

                  return (
                    <TableRow
                      key={payment.id}
                    >

                      {/* Checkbox */}

                      <TableCell>

                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() =>
                            handleSelectRow(
                              payment.id
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
                          aria-label={`Select payment ${payment.id}`}
                        />

                      </TableCell>

                      {/* Number */}

                      <TableCell>
                        {(page - 1) *
                          rowsPerPage +
                          index +
                          1}
                      </TableCell>

                      {/* User */}

                      <TableCell>

                        <div className="min-w-48">

                          <p
                            className="
                              font-semibold
                              text-foreground
                            "
                          >
                            {payment.user
                              ?.name ||
                              "-"}
                          </p>

                          <p
                            className="
                              mt-0.5
                              text-xs
                              text-muted-foreground
                            "
                          >
                            @
                            {payment.user
                              ?.username ||
                              "-"}
                          </p>

                          {payment.user
                            ?.email && (
                            <p
                              className="
                                mt-0.5
                                text-xs
                                text-muted-foreground
                              "
                            >
                              {
                                payment.user
                                  .email
                              }
                            </p>
                          )}

                        </div>

                      </TableCell>

                      {/* Plan */}

                      <TableCell>

                        <div className="min-w-32">

                          <p
                            className="
                              font-medium
                              text-foreground
                            "
                          >
                            {plan?.name ||
                              "-"}
                          </p>

                          <p
                            className="
                              mt-0.5
                              text-xs
                              text-muted-foreground
                            "
                          >
                            {payment.subscriptionId ||
                              "-"}
                          </p>

                        </div>

                      </TableCell>

                      {/* Amount */}

                      <TableCell>

                        <span
                          className="
                            whitespace-nowrap
                            font-semibold
                            text-foreground
                          "
                        >
                          {formatAmount(
                            payment.amount,
                            payment.currency
                          )}
                        </span>

                      </TableCell>

                      {/* Method */}

                      <TableCell>

                        <span
                          className="
                            whitespace-nowrap
                            text-sm
                            text-foreground
                          "
                        >
                          {formatPaymentMethod(
                            payment.paymentMethod
                          )}
                        </span>

                      </TableCell>

                      {/* Transaction */}

                      <TableCell>

                        <div className="min-w-44">

                          <p
                            className="
                              text-sm
                              font-medium
                              text-foreground
                            "
                          >
                            {payment.transactionId ||
                              "-"}
                          </p>

                          {payment.gatewayOrderId && (
                            <p
                              className="
                                mt-0.5
                                text-xs
                                text-muted-foreground
                              "
                            >
                              Order:{" "}
                              {
                                payment.gatewayOrderId
                              }
                            </p>
                          )}

                        </div>

                      </TableCell>

                      {/* Status */}

                      <TableCell>

                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-1.5
                            whitespace-nowrap
                            rounded-full
                            px-2.5
                            py-1
                            text-xs
                            font-semibold
                            ${getStatusClasses(
                              payment.status
                            )}
                          `}
                        >

                          <StatusIcon
                            status={
                              payment.status
                            }
                          />

                          {payment.status}

                        </span>

                      </TableCell>

                      {/* Paid At */}

                      <TableCell>

                        <span
                          className="
                            whitespace-nowrap
                            text-xs
                            text-muted-foreground
                          "
                        >
                          {formatDate(
                            payment.paidAt
                          )}
                        </span>

                      </TableCell>

                      {/* Actions */}

                      <TableCell align="right">

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
                              active:scale-95
                            "
                            aria-label={`Actions for payment ${payment.id}`}
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
                                w-48
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
                                    payment
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

                                View Details
                              </button>

                              {/* Receipt */}

                              {payment.status ===
                                "SUCCESS" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleAction(
                                      "receipt",
                                      payment
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
                                  <Download
                                    size={15}
                                  />

                                  Download Receipt
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

              <td colSpan={11}>

                <TablePagination
                  page={page}
                  totalPages={totalPages}
                  totalRows={
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

    </div>
  );
}