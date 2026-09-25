import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Home,
  CreditCard,
  Download,
} from "lucide-react";

export default async function PaymentResultPage({
  searchParams,
}) {
  const params = await searchParams;

  const status = params?.status;
  const message = params?.message;
  const paymentId = params?.paymentId;

  const isSuccess = status === "success";

  // ---------------------------------------------------------
  // UNKNOWN PAYMENT STATUS
  // ---------------------------------------------------------

  if (!isSuccess && status !== "failed") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <CreditCard
              size={32}
              className="text-slate-500"
            />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Payment Status
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            We could not determine the payment status.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Home size={17} />
            Go to Home
          </Link>
        </div>
      </main>
    );
  }

  // ---------------------------------------------------------
  // PAYMENT RESULT
  // ---------------------------------------------------------

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div
        className={`w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm ${
          isSuccess
            ? "border-emerald-200"
            : "border-red-200"
        }`}
      >
        {/* STATUS ICON */}
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${
            isSuccess
              ? "bg-emerald-100"
              : "bg-red-100"
          }`}
        >
          {isSuccess ? (
            <CheckCircle2
              size={44}
              className="text-emerald-600"
            />
          ) : (
            <XCircle
              size={44}
              className="text-red-600"
            />
          )}
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          {isSuccess
            ? "Payment Successful!"
            : "Payment Failed"}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {isSuccess
            ? "Your registration and payment have been completed successfully."
            : "We could not complete your registration payment."}
        </p>

        {/* SUCCESS */}
        {isSuccess ? (
          <>
            {/* ACCOUNT ACTIVATED */}
            <div className="mt-6 rounded-xl bg-emerald-50 p-4">
              <p className="text-sm font-medium text-emerald-700">
                Your account has been activated.
              </p>
            </div>

            {/* DOWNLOAD RECEIPT */}
            {paymentId && (
              <a
                href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/payments/${encodeURIComponent(
                  paymentId
                )}/receipt`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Download size={17} />
                Download Receipt
              </a>
            )}

            {/* CONTINUE TO LOGIN */}
            <Link
              href="/login"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Continue to Login
              <ArrowRight size={17} />
            </Link>
          </>
        ) : (
          <>
            {/* FAILURE MESSAGE */}
            <div className="mt-6 rounded-xl bg-red-50 p-4">
              <p className="text-sm font-medium text-red-700">
                {message ||
                  "Please try the payment again."}
              </p>
            </div>

            {/* TRY AGAIN */}
            <Link
              href="/register"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Try Again
              <ArrowRight size={17} />
            </Link>
          </>
        )}

        {/* BACK TO HOME */}
        <Link
          href="/"
          className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          <Home size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}