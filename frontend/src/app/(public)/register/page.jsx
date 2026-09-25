"use client";

import AdminForm from "@/components/form/AdminForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto w-full max-w-4xl">
        <AdminForm mode="register" />
      </div>
    </div>
  );
}