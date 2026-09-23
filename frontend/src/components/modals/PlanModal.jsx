"use client";

import React, { useEffect } from "react";
import { X, CreditCard, Plus } from "lucide-react";
import PlanForm from "../form/PlanForm";

export default function PlanModal({
  isOpen,
  onClose,
  mode = "create",
  plan = null,
  onSuccess,
  isLoading = false,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isEditMode = mode === "edit";

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={handleBackdropClick}
    >
      <div
        className="
          flex
          max-h-[95vh]
          w-full
          max-w-4xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-background
          shadow-2xl
        "
      >
        {/* HEADER */}
        <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {isEditMode ? (
                <CreditCard className="h-5 w-5" />
              ) : (
                <Plus className="h-5 w-5" />
              )}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {isEditMode ? "Edit Plan" : "Create New Plan"}
              </h2>

              <p className="text-sm text-muted-foreground">
                {isEditMode
                  ? "Update plan details and features"
                  : "Create a new subscription plan"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="
              rounded-lg
              p-2
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* FORM */}
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          <PlanForm
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