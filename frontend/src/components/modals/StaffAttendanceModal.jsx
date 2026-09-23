"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import StaffAttendanceForm from "../form/StaffAttendanceForm";


export default function StaffAttendanceModal({
  isOpen,
  onClose,
  mode = "create",
  attendance = null,
  staffOptions = [],
  onSuccess,
  isLoading = false,
}) {
  /* =========================================================
     ESCAPE + BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape" && !isLoading) {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [isOpen, onClose, isLoading]);

  if (!isOpen) {
    return null;
  }

  /* =========================================================
     BACKDROP
  ========================================================= */

  const handleBackdropClick = (event) => {
    if (
      event.target === event.currentTarget &&
      !isLoading
    ) {
      onClose();
    }
  };

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
          max-h-[90vh]
          w-full
          max-w-2xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-card
          shadow-2xl
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {mode === "edit"
                ? "Edit Attendance"
                : "Mark Staff Attendance"}
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              {mode === "edit"
                ? "Update staff attendance details."
                : "Record attendance for a staff member."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            aria-label="Close"
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
          >
            <X size={20} />
          </button>
        </div>

        {/* =================================================
            FORM
        ================================================== */}

        <div className="overflow-y-auto px-6 py-6">
          <StaffAttendanceForm
            mode={mode}
            initialData={attendance}
            staffOptions={staffOptions}
            onSubmit={onSuccess}
            onClose={onClose}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}