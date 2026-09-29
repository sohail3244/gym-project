"use client";

import React from "react";
import { CreditCard, CheckCircle2, Clock3, IndianRupee } from "lucide-react";

import MemberPaymentTable from "@/components/table/MemberPaymentTable";

import {
  usePaymentSummary,
  useMemberPayments,
} from "@/lib/hooks/useMemberPayment";

export default function MemberPaymentsPage() {
  const {
    data: paymentsResponse,
    isLoading: paymentsLoading,
    isError: paymentsError,
    error: paymentsErrorData,
  } = useMemberPayments();

  const {
    data: summaryResponse,
    isLoading: summaryLoading,
    isError: summaryError,
    error: summaryErrorData,
  } = usePaymentSummary();

  /*
   * API response:
   *
   * {
   *   success: true,
   *   message: "...",
   *   data: {
   *      totalPayments: 8,
   *      totalAmount: 18193
   *   }
   * }
   */

  const summary = summaryResponse?.data || {};

  const totalPayments = summary?.totalPayments || 0;
  const totalRevenue = Number(summary?.totalAmount || 0);

  /*
   * Agar getMemberPayments API complete payment list return karti hai,
   * to Successful aur Pending frontend se calculate kar sakte hain.
   */
  const payments = Array.isArray(paymentsResponse?.data)
    ? paymentsResponse.data
    : [];

  const successfulPayments = payments.filter(
    (payment) => payment.status === "SUCCESS",
  ).length;

  const pendingPayments = payments.filter(
    (payment) => payment.status === "PENDING",
  ).length;

  const isLoading = paymentsLoading || summaryLoading;

  return (
    <div className="space-y-6 p-6">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Member Payments</h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track all payments received from your gym members.
        </p>
      </div>

      {/* =========================
          ERROR
      ========================== */}
      {(paymentsError || summaryError) && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {paymentsErrorData?.response?.data?.message ||
            summaryErrorData?.response?.data?.message ||
            "Failed to load payment data"}
        </div>
      )}

      {/* =========================
          STATS
      ========================== */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Payments */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Payments</p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                {isLoading ? "..." : totalPayments}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CreditCard size={20} />
            </div>
          </div>
        </div>

        {/* Successful */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Successful</p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                {isLoading ? "..." : successfulPayments}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={20} />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                {isLoading ? "..." : pendingPayments}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Clock3 size={20} />
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                {isLoading ? "..." : `₹${totalRevenue.toLocaleString("en-IN")}`}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <IndianRupee size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          TABLE SECTION
      ========================== */}
      <div className="rounded-2xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-base font-semibold text-foreground">
            Payment History
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            View member payments, transactions and payment status.
          </p>
        </div>

        <div className="p-6">
          <MemberPaymentTable payments={payments} isLoading={paymentsLoading} />
        </div>
      </div>
    </div>
  );
}
