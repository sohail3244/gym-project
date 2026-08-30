"use client";

import React from "react";
import {
  Users,
  UserCheck,
  UserX,
  UserRoundX,
} from "lucide-react";
import MemberTable from "@/components/table/MemberTable";


const stats = [
  {
    title: "Total Members",
    value: "6",
    icon: Users,
  },
  {
    title: "Active Members",
    value: "4",
    icon: UserCheck,
  },
  {
    title: "Inactive Members",
    value: "1",
    icon: UserX,
  },
  {
    title: "Suspended",
    value: "1",
    icon: UserRoundX,
  },
];

export default function MembersPage() {
  return (
    <main className="space-y-6 p-6">

      {/* =========================
          PAGE HEADER
      ========================== */}

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Members
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your gym members and their account status.
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
          MEMBER TABLE
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
            All Members
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            View and manage members registered with your gym.
          </p>

        </div>

        <MemberTable />

      </section>

    </main>
  );
}