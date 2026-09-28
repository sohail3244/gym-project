"use client";

import React from "react";
import PaymentTable from "@/components/table/PaymentTable";
import { usePayments } from "@/lib/hooks/usePayment";


export default function PaymentsPage() {
  const {
    data,
    isLoading,
    isFetching,
  } = usePayments();

  const payments =
    data?.data?.payments || [];

  const handleViewPayment = (payment) => {
    console.log("View payment:", payment);
  };

  const handleDownloadReceipt = (
    payment
  ) => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL;

    window.open(
      `${baseUrl}/payments/${payment.id}/receipt`,
      "_blank"
    );
  };

  return (
    <main className="space-y-6 p-6">

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Payments
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage and monitor all subscription payments.
        </p>
      </div>

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

        <PaymentTable
          payments={payments}
          isLoading={isLoading}
          isFetching={isFetching}
          onView={handleViewPayment}
          onDownloadReceipt={
            handleDownloadReceipt
          }
        />
      </section>

    </main>
  );
}