"use client";

import React, { useEffect } from "react";
import { X, UserPlus, Pencil } from "lucide-react";
import MemberForm from "../form/MemberForm";

export default function MemberModal({
  isOpen,
  onClose,
  mode = "create",
  member = null,
  onSuccess,
  isLoading = false,
}) {
  const isEditMode = mode === "edit";

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape" && !isLoading) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isLoading, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget && !isLoading) {
      onClose?.();
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50 p-4 backdrop-blur-sm
      "
      onMouseDown={handleBackdropClick}
    >
      <div
        className="
          flex w-full max-w-3xl
          max-h-[90vh]
          flex-col
          overflow-hidden
          rounded-2xl
          border border-border
          bg-background
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              {isEditMode ? (
                <Pencil size={20} className="text-primary" />
              ) : (
                <UserPlus size={20} className="text-primary" />
              )}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {isEditMode ? "Edit Member" : "Add New Member"}
              </h2>

              <p className="text-xs text-muted-foreground">
                {isEditMode
                  ? "Update member information"
                  : "Add a new gym member"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="
              rounded-lg p-2
              text-muted-foreground
              transition
              hover:bg-secondary
              hover:text-foreground
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="overflow-y-auto px-6 py-5">
          <MemberForm
            mode={mode}
            initialData={member}
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