"use client";

import React, { useMemo, useState } from "react";
import {
  Users,
  UserCheck,
  UserX,
  UserRoundX,
  Plus,
} from "lucide-react";

import MemberTable from "@/components/table/MemberTable";
import MemberModal from "@/components/modals/MemberModal";
import Button from "@/components/ui/Button";

import {
  useMembers,
  useCreateMember,
} from "@/lib/hooks/useMember";

export default function MembersPage() {
  const [showMemberModal, setShowMemberModal] = useState(false);

  // =========================
  // GET MEMBERS
  // =========================
  const {
    data: membersResponse,
    isLoading: isMembersLoading,
    isFetching: isMembersFetching,
    error: membersError,
  } = useMembers({
    page: 1,
    limit: 10,
  });

  // Backend response:
  // {
  //   success: true,
  //   message: "...",
  //   data: {
  //     members: [],
  //     pagination: {}
  //   }
  // }

  const members = membersResponse?.data?.members || [];

  // =========================
  // CREATE MEMBER
  // =========================
  const createMemberMutation = useCreateMember();

  const handleCreateMember = async (payload) => {
    try {
      await createMemberMutation.mutateAsync(payload);

      setShowMemberModal(false);
    } catch (error) {
      console.error("Create Member Error:", error);
    }
  };

  // =========================
  // DYNAMIC STATS
  // =========================
  const stats = useMemo(() => {
    const total =
      membersResponse?.data?.pagination?.total ??
      members.length;

    const active = members.filter(
      (member) => member.status === "ACTIVE"
    ).length;

    const inactive = members.filter(
      (member) => member.status === "INACTIVE"
    ).length;

    const suspended = members.filter(
      (member) => member.status === "SUSPENDED"
    ).length;

    return [
      {
        title: "Total Members",
        value: total,
        icon: Users,
      },
      {
        title: "Active Members",
        value: active,
        icon: UserCheck,
      },
      {
        title: "Inactive Members",
        value: inactive,
        icon: UserX,
      },
      {
        title: "Suspended",
        value: suspended,
        icon: UserRoundX,
      },
    ];
  }, [members, membersResponse]);

  return (
    <>
      <main className="space-y-6 p-6">
        {/* =========================
            PAGE HEADER
        ========================== */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Members
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your gym members and their account status.
            </p>
          </div>

          <Button
            text="Add Member"
            icon={Plus}
            iconPosition="left"
            type="button"
            onClick={() => setShowMemberModal(true)}
          />
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

          <MemberTable
            members={members}
            isLoading={isMembersLoading}
            isFetching={isMembersFetching}
          />

          {/* Error */}
          {membersError && (
            <p className="mt-4 text-sm text-destructive">
              {membersError?.response?.data?.message ||
                membersError?.message ||
                "Failed to load members"}
            </p>
          )}
        </section>
      </main>

      {/* =========================
          ADD MEMBER MODAL
      ========================== */}
      <MemberModal
        isOpen={showMemberModal}
        onClose={() => setShowMemberModal(false)}
        mode="create"
        member={null}
        onSuccess={handleCreateMember}
        isLoading={createMemberMutation.isPending}
      />
    </>
  );
}