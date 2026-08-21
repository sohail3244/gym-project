"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useMe } from "@/lib/hooks/useAuth";

export default function DashboardGuard({ children }) {
  const router = useRouter();

  const {
    data,
    isLoading,
    isError,
  } = useMe();

  const user = data?.data?.user;

  useEffect(() => {
    if (!isLoading && (isError || !user)) {
      router.replace("/login");
    }
  }, [isLoading, isError, user, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <p className="text-sm text-slate-500">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  if (isError || !user) {
    return null;
  }

  return children;
}