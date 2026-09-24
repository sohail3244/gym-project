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
  useUpdateMember,
  useUpdateMemberStatus,
  useDeleteMember,
} from "@/lib/hooks/useMember";

export default function MembersPage() {
  // =========================================================
  // MODAL STATE
  // =========================================================

  const [showMemberModal, setShowMemberModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  // =========================================================
  // GET MEMBERS
  // =========================================================

  const {
    data: membersResponse,
    isLoading: isMembersLoading,
    isFetching: isMembersFetching,
    error: membersError,
  } = useMembers({
    page: 1,
    limit: 10,
  });

  const members =
    membersResponse?.data?.members || [];

  // =========================================================
  // CREATE MEMBER
  // =========================================================

  const createMemberMutation =
    useCreateMember();

  // =========================================================
  // UPDATE MEMBER
  // =========================================================

  const updateMemberMutation =
    useUpdateMember();

  // =========================================================
  // UPDATE MEMBER STATUS
  // =========================================================

  const updateMemberStatusMutation =
    useUpdateMemberStatus();

  // =========================================================
  // DELETE MEMBER
  // =========================================================

  const deleteMemberMutation =
    useDeleteMember();

  // =========================================================
  // CREATE MEMBER
  // =========================================================

  const handleCreateMember = async (payload) => {
    try {
      await createMemberMutation.mutateAsync(
        payload
      );

      setShowMemberModal(false);
      setEditingMember(null);
    } catch (error) {
      console.error(
        "Create Member Error:",
        error
      );
    }
  };

  // =========================================================
  // OPEN EDIT MODAL
  // =========================================================

  const handleEditMember = (member) => {
    setEditingMember(member);
    setShowMemberModal(true);
  };

  // =========================================================
  // UPDATE MEMBER
  // =========================================================

  const handleUpdateMember = async (payload) => {
    if (!editingMember?.id) return;

    try {
      await updateMemberMutation.mutateAsync({
        memberId: editingMember.id,
        data: payload,
      });

      setShowMemberModal(false);
      setEditingMember(null);
    } catch (error) {
      console.error(
        "Update Member Error:",
        error
      );
    }
  };

  // =========================================================
  // TOGGLE MEMBER STATUS
  // =========================================================

  const handleToggleMemberStatus = async (
    member
  ) => {
    if (!member?.id) return;

    const newStatus =
      member.status === "ACTIVE"
        ? "INACTIVE"
        : "ACTIVE";

    try {
      await updateMemberStatusMutation.mutateAsync(
        {
          memberId: member.id,
          status: newStatus,
        }
      );
    } catch (error) {
      console.error(
        "Update Member Status Error:",
        error
      );
    }
  };

  // =========================================================
  // DELETE MEMBER
  // =========================================================

  const handleDeleteMember = async (member) => {
    if (!member?.id) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete ${member.name}?`
    );

    if (!confirmed) return;

    try {
      await deleteMemberMutation.mutateAsync(
        member.id
      );
    } catch (error) {
      console.error(
        "Delete Member Error:",
        error
      );
    }
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const handleCloseModal = () => {
    if (
      createMemberMutation.isPending ||
      updateMemberMutation.isPending
    ) {
      return;
    }

    setShowMemberModal(false);
    setEditingMember(null);
  };

  // =========================================================
  // DYNAMIC STATS
  // =========================================================

  const stats = useMemo(() => {
    const total =
      membersResponse?.data?.pagination?.total ??
      members.length;

    const active = members.filter(
      (member) =>
        member.status === "ACTIVE"
    ).length;

    const inactive = members.filter(
      (member) =>
        member.status === "INACTIVE"
    ).length;

    const suspended = members.filter(
      (member) =>
        member.status === "SUSPENDED"
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

  // =========================================================
  // ERROR MESSAGE
  // =========================================================

  const errorMessage =
    membersError?.response?.data?.message ||
    membersError?.message ||
    "Failed to load members";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <>
      <main className="space-y-6 p-6">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Members
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your gym members and their
              account status.
            </p>
          </div>

          <Button
            text="Add Member"
            icon={Plus}
            iconPosition="left"
            type="button"
            onClick={() => {
              setEditingMember(null);
              setShowMemberModal(true);
            }}
            disabled={
              createMemberMutation.isPending ||
              updateMemberMutation.isPending
            }
          />
        </div>

        {/* =====================================================
            ERROR
        ====================================================== */}

        {membersError && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4">
            <p className="text-sm text-destructive">
              {errorMessage}
            </p>
          </div>
        )}

        {/* =====================================================
            STATS
        ====================================================== */}

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
                      {isMembersLoading
                        ? "..."
                        : stat.value}
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

        {/* =====================================================
            MEMBER TABLE
        ====================================================== */}

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
              View and manage members registered
              with your gym.
            </p>
          </div>

          <MemberTable
            members={members}
            isLoading={isMembersLoading}
            isFetching={isMembersFetching}
            onEdit={handleEditMember}
            onToggleStatus={
              handleToggleMemberStatus
            }
            onDelete={handleDeleteMember}
          />
        </section>
      </main>

      {/* =====================================================
          ADD / EDIT MEMBER MODAL
      ====================================================== */}

      <MemberModal
        isOpen={showMemberModal}
        onClose={handleCloseModal}
        mode={
          editingMember ? "edit" : "create"
        }
        member={editingMember}
        onSuccess={
          editingMember
            ? handleUpdateMember
            : handleCreateMember
        }
        isLoading={
          createMemberMutation.isPending ||
          updateMemberMutation.isPending
        }
      />
    </>
  );
}