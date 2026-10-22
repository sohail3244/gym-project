
"use client";

import {
  useState,
  useCallback,
} from "react";

import {
  Users,
  Building2,
  CreditCard,
  Activity,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Wallet,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";

import Link from "next/link";

import {
  useDashboard,
  useDashboardStats,
  useRecentPayments,
  useRecentSubscriptions,
  useDashboardActions,
} from "@/lib/hooks/dashboard.hooks";

export default function DashboardPage() {
  const [activePeriod, setActivePeriod] = useState("3months");

  const {
    data: dashboardResponse,
    isLoading: dashboardLoading,
    isError: dashboardError,
    error: dashboardErrorMessage,
    refetch: refetchDashboard,
  } = useDashboard();

  const {
    data: statsResponse,
    isLoading: statsLoading,
    isError: statsError,
  } = useDashboardStats();

  const {
    data: paymentsResponse,
    isLoading: paymentsLoading,
    isError: paymentsError,
  } = useRecentPayments();

  const {
    data: subscriptionsResponse,
    isLoading: subscriptionsLoading,
    isError: subscriptionsError,
  } = useRecentSubscriptions();

  const { refreshDashboard } = useDashboardActions();

  // API response structure:
  // { success: true, data: { ...dashboardData } }
  const dashboard = dashboardResponse?.data ?? {};
  const statsData = statsResponse?.data ?? {};

  const recentPayments = Array.isArray(paymentsResponse?.data)
    ? paymentsResponse.data
    : [];

  const recentMemberships = Array.isArray(
    subscriptionsResponse?.data
  )
    ? subscriptionsResponse.data
    : [];

  const isLoading =
    dashboardLoading ||
    statsLoading ||
    paymentsLoading ||
    subscriptionsLoading;

  const hasError =
    dashboardError ||
    statsError ||
    paymentsError ||
    subscriptionsError;

  const refresh = useCallback(async () => {
    if (typeof refreshDashboard === "function") {
      await refreshDashboard();
    } else {
      await Promise.all([
        refetchDashboard(),
      ]);
    }
  }, [refreshDashboard, refetchDashboard]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(Number(amount ?? 0));

  const formatDate = (date) => {
    if (!date) return "-";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "-";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatStatus = (status) => {
    if (!status) return "Unknown";

    return String(status)
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  const statusClass = (status) => {
    switch (String(status ?? "").toUpperCase()) {
      case "ACTIVE":
      case "SUCCESS":
      case "PAID":
      case "PRESENT":
      case "COMPLETED":
        return "bg-emerald-500/10 text-emerald-600";

      case "PENDING":
      case "PARTIAL":
      case "LATE":
        return "bg-amber-500/10 text-amber-600";

      case "EXPIRED":
      case "CANCELLED":
      case "FAILED":
      case "ABSENT":
      case "INACTIVE":
        return "bg-rose-500/10 text-rose-600";

      default:
        return "bg-secondary text-muted-foreground";
    }
  };

  // Updated service response fields
  const members = statsData.members ?? {};
  const plans = statsData.membershipPlans ?? {};
  const payments = statsData.payments ?? {};
  const staff = statsData.staff ?? {};
  const attendance = statsData.staffAttendance ?? {};

  const stats = [
    {
      title: "TOTAL MEMBERS",
      value: members.total ?? 0,
      description: `${members.active ?? 0} active members`,
      icon: Users,
      positive: true,
    },
    {
      title: "MEMBERSHIP PLANS",
      value: plans.total ?? 0,
      description: `${plans.active ?? 0} active plans`,
      icon: Building2,
      positive: true,
    },
    {
      title: "SUCCESSFUL REVENUE",
      value: formatCurrency(payments.successfulAmount),
      description: `${payments.successful ?? 0} successful payments`,
      icon: Wallet,
      positive: true,
    },
    {
      title: "TOTAL STAFF",
      value: staff.total ?? 0,
      description: `${staff.active ?? 0} active staff`,
      icon: UserCheck,
      positive: true,
    },
  ];

  if (isLoading) {
    return (
      <div className="flex min-h-72 items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw
            className="animate-spin text-primary"
            size={28}
          />
          <p className="text-sm text-muted-foreground">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Unable to load dashboard
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {dashboardErrorMessage?.message ||
            "Dashboard API request failed. Please check your connection."}
        </p>

        <button
          onClick={refresh}
          className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Welcome, {dashboard.user?.name || "Admin"}!
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Here&apos;s your gym management overview.
          </p>

          {dashboard.scope && (
            <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {dashboard.scope === "ALL"
                ? "Platform-wide overview"
                : "Your gym overview"}
            </span>
          )}
        </div>

        <button
          onClick={refresh}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <RefreshCw size={15} />
          Refresh
        </button>
      </div>

      {/* Main KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 wrap-break-word text-2xl font-bold text-foreground">
                    {stat.value}
                  </h2>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={21} />
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                {stat.positive ? (
                  <ArrowUpRight
                    size={14}
                    className="text-emerald-600"
                  />
                ) : (
                  <ArrowDownRight
                    size={14}
                    className="text-rose-600"
                  />
                )}

                <span className="text-xs text-muted-foreground">
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Total Payments",
            value: payments.total ?? 0,
            icon: CreditCard,
          },
          {
            title: "Pending Payments",
            value: payments.pending ?? 0,
            icon: Activity,
          },
          {
            title: "Failed Payments",
            value: payments.failed ?? 0,
            icon: TrendingUp,
          },
          {
            title: "Staff Attendance Records",
            value: attendance.total ?? 0,
            icon: ClipboardCheck,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>
                <Icon
                  size={18}
                  className="text-muted-foreground"
                />
              </div>

              <p className="mt-3 text-2xl font-bold text-foreground">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Payment amount summary */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            title: "Successful Payment Amount",
            value: payments.successfulAmount,
          },
          {
            title: "Pending Payment Amount",
            value: payments.pendingAmount,
          },
          {
            title: "Failed Payment Amount",
            value: payments.failedAmount,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-sm text-muted-foreground">
              {item.title}
            </p>

            <p className="mt-2 text-2xl font-bold text-foreground">
              {formatCurrency(item.value)}
            </p>
          </div>
        ))}
      </div>

      {/* Revenue placeholder */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Revenue Overview
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Total successful member payment revenue.
            </p>
          </div>

          <span className="rounded-md bg-secondary px-3 py-2 text-xs text-muted-foreground">
            All-time summary
          </span>
        </div>

        <div className="mt-5 rounded-lg border border-dashed border-border p-6 text-center">
          <TrendingUp
            size={30}
            className="mx-auto text-primary"
          />

          <p className="mt-3 text-2xl font-bold text-foreground">
            {formatCurrency(payments.successfulAmount)}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Successful payments recorded in the database.
            A date-wise chart requires a separate analytics API.
          </p>
        </div>
      </div>

      {/* Recent memberships and payments */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Recent memberships */}
        <div className="overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Recent Members & Memberships
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                Latest members and their most recent membership plan.
              </p>
            </div>

            <Users
              size={18}
              className="text-muted-foreground"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 pr-4 font-semibold">
                    Member
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Plan
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Price
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Status
                  </th>
                  <th className="py-3 pl-4 text-right font-semibold">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {recentMemberships.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-8 text-center text-sm text-muted-foreground"
                    >
                      No members found.
                    </td>
                  </tr>
                ) : (
                  recentMemberships.map((member) => {
                    const membership = member.memberships?.[0];
                    const plan = membership?.plan;

                    const status =
                      membership?.status || member.status;

                    return (
                      <tr
                        key={member.id}
                        className="transition hover:bg-secondary/50"
                      >
                        <td className="py-3 pr-4">
                          <p className="font-semibold text-foreground">
                            {member.name || "-"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {member.mobileNumber || member.email || "-"}
                          </p>
                        </td>

                        <td className="px-4 py-3 text-foreground">
                          {plan?.name || "No plan"}
                        </td>

                        <td className="px-4 py-3 font-semibold text-foreground">
                          {plan
                            ? formatCurrency(plan.price)
                            : "-"}
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(status)}`}
                          >
                            {formatStatus(status)}
                          </span>
                        </td>

                        <td className="py-3 pl-4 text-right text-xs text-muted-foreground">
                          {formatDate(
                            membership?.startDate ||
                              member.createdAt
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent payments */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Recent Payments
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Latest member transactions.
              </p>
            </div>

            <CreditCard
              size={18}
              className="text-muted-foreground"
            />
          </div>

          <div className="mt-5 space-y-4">
            {recentPayments.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">
                No payments found.
              </p>
            ) : (
              recentPayments.slice(0, 8).map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-start justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {payment.member?.name ||
                        payment.transactionId ||
                        "Member payment"}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {formatDate(
                        payment.paidAt || payment.createdAt
                      )}
                    </p>

                    <span
                      className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusClass(payment.status)}`}
                    >
                      {formatStatus(payment.status)}
                    </span>
                  </div>

                  <p className="shrink-0 text-sm font-semibold text-foreground">
                    {formatCurrency(payment.amount)}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Staff summary */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Staff Overview
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Staff and attendance summary for your accessible gym data.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-lg bg-secondary px-3 py-2">
              Total: <strong>{staff.total ?? 0}</strong>
            </span>
            <span className="rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-600">
              Active: <strong>{staff.active ?? 0}</strong>
            </span>
            <span className="rounded-lg bg-secondary px-3 py-2">
              Attendance: <strong>{attendance.total ?? 0}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-foreground">
          Quick Actions
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Quickly navigate to management sections.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Members",
              description: "View and manage members",
              href: "/dashboard/members",
            },
            {
              title: "Membership Plans",
              description: "Manage gym plans",
              href: "/dashboard/membership-plans",
            },
            {
              title: "Member Payments",
              description: "Review transactions",
              href: "/dashboard/member-payments",
            },
            {
              title: "Staff",
              description: "Manage staff and attendance",
              href: "/dashboard/staff",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg border border-border bg-secondary/30 p-4 transition hover:border-primary/30 hover:bg-secondary"
            >
              <p className="text-sm font-medium text-foreground">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
