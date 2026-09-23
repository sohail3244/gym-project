"use client";

import React, { useEffect } from "react";
import {
  X,
  CreditCard,
  Plus,
  Pencil,
} from "lucide-react";

import MembershipPlanForm from "../form/MembershipPlanForm";

export default function MembershipPlanModal({
  isOpen,
  onClose,
  mode = "create",
  plan = null,
  onSuccess,
  isLoading = false,
}) {
  /*
   * ============================================================
   * ESCAPE KEY
   * ============================================================
   */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape" && !isLoading) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, isLoading, onClose]);

  /*
   * ============================================================
   * BODY SCROLL
   * ============================================================
   */

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isEditMode = mode === "edit";

  /*
   * ============================================================
   * BACKDROP
   * ============================================================
   */

  const handleBackdropClick = (event) => {
    if (
      event.target === event.currentTarget &&
      !isLoading
    ) {
      onClose?.();
    }
  };

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
      "
      onMouseDown={handleBackdropClick}
    >
      <div
        className="
          flex
          max-h-[92vh]
          w-full
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-background
          shadow-2xl
        "
      >
        {/* ====================================================
            HEADER
        ===================================================== */}

        <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {isEditMode ? (
                <Pencil size={19} />
              ) : (
                <Plus size={20} />
              )}
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">
                {isEditMode
                  ? "Edit Membership Plan"
                  : "Create Membership Plan"}
              </h2>

              <p className="mt-0.5 text-xs text-muted-foreground">
                {isEditMode
                  ? "Update membership plan details."
                  : "Create a new membership plan for your gym."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
            aria-label="Close"
          >
            <X size={19} />
          </button>
        </div>

        {/* ====================================================
            FORM
        ===================================================== */}

        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
          <MembershipPlanForm
            mode={mode}
            initialData={plan}
            isLoading={isLoading}
            onClose={onClose}
            onSubmit={async (payload) => {
              await onSuccess?.(payload);
            }}
          />
        </div>
      </div>
    </div>
  );
}