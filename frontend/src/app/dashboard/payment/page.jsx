"use client";

import React from "react";
import {
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  IndianRupee,
} from "lucide-react";
import PaymentTable from "@/components/table/PaymentTable";


const stats = [
  {
    title: "Total Payments",
    value: "6",
    icon: CreditCard,
  },
  {
    title: "Successful",
    value: "3",
    icon: CheckCircle,
  },
  {
    title: "Pending",
    value: "1",
    icon: Clock,
  },
  {
    title: "Failed",
    value: "1",
    icon: XCircle,
  },
];

export default function PaymentsPage() {
  return (
    <main className="space-y-6 p-6">

      {/* =========================
          PAGE HEADER
      ========================== */}

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Payments
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage and monitor all subscription payments.
        </p>
      </div>

      {/* =========================
          STATS
      ========================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-5
                shadow-sm
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-muted-foreground">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon size={20} />
                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* =========================
          PAYMENT TABLE
      ========================== */}

      <section
        className="
          rounded-2xl
          border
          border-border
          bg-card
          p-5
          shadow-sm
        "
      >

        <div className="mb-5">

          <h2 className="text-base font-semibold text-foreground">
            Payment Transactions
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            View subscription payment history and transaction status.
          </p>

        </div>

        <PaymentTable />

      </section>

    </main>
  );
}