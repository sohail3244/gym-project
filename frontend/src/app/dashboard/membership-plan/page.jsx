"use client";

import React from "react";
import {
  Plus,
  CreditCard,
  Users,
  TrendingUp,
} from "lucide-react";

import Button from "@/components/ui/Button";
import MembershipPlanTable from "@/components/table/MembershipPlanTable";

export default function MembershipPlansPage() {
  return (
    <div className="space-y-6 p-6">
      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Membership Plans
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Create and manage membership plans for your gym members.
          </p>
        </div>

        <Button
          icon={Plus}
          onClick={() =>
            console.log("Create membership plan")
          }
        >
          Create Plan
        </Button>
      </div>

      {/* =========================
          STATS
      ========================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Plans
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

        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Active Plans
              </p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                6
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <TrendingUp size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Members
              </p>

              <h2 className="mt-1 text-2xl font-bold text-foreground">
                324
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users size={20} />
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
            All Membership Plans
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            Manage pricing, duration, features and plan status.
          </p>
        </div>

        <div className="p-6">
          <MembershipPlanTable />
        </div>
      </div>
    </div>
  );
}