"use client";

import React from "react";
import {
  CreditCard,
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";
import MemberPaymentTable from "@/components/table/MemberPaymentTable";


export default function MemberPaymentsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* =========================
          PAGE HEADER
      ========================== */}

      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Member Payments
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track all payments received from your gym members.
        </p>
      </div>

      {/* =========================
          STATS
      ========================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Payments */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Payments
              </p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                8
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
              <p className="text-sm text-muted-foreground">
                Successful
              </p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                6
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
              <p className="text-sm text-muted-foreground">
                Pending
              </p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                1
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
              <p className="text-sm text-muted-foreground">
                Total Revenue
              </p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                ₹18,193
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
          <MemberPaymentTable />
        </div>
      </div>
    </div>
  );
}