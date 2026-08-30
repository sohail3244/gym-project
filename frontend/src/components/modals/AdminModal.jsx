"use client";

import React, { useEffect, useRef } from "react";
import { X, ShieldPlus, UserPlus } from "lucide-react";

import AdminForm from "../form/AdminForm";

export default function AdminModal({
  isOpen,
  onClose,
  mode = "create",
  onSuccess,
}) {
  const modalRef = useRef(null);

  // Escape key + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Click outside modal
  const handleBackdropClick = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const isRegisterMode = mode === "register";

  return (
    <div
      onClick={handleBackdropClick}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        p-4
        backdrop-blur-md
      "
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-modal-title"
        className="
          relative
          flex
          max-h-[90vh]
          w-full
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-background
          shadow-2xl
          shadow-black/20
        "
      >
        {/* =========================
            HEADER
        ========================== */}
        <div
          className="
            flex
            shrink-0
            items-start
            justify-between
            border-b
            border-border
            px-6
            py-4
          "
        >
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary
                text-primary-foreground
                shadow-sm
              "
            >
              {isRegisterMode ? (
                <UserPlus size={20} />
              ) : (
                <ShieldPlus size={20} />
              )}
            </div>

            {/* Title */}
            <div>
              <h2
                id="admin-modal-title"
                className="
                  text-base
                  font-bold
                  text-foreground
                  sm:text-lg
                "
              >
                {isRegisterMode
                  ? "Register Admin Account"
                  : "Add New Administrator"}
              </h2>

              <p className="mt-0.5 text-xs text-muted-foreground">
                {isRegisterMode
                  ? "Create your admin account and business profile."
                  : "Create an administrator and assign a subscription plan."}
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-muted-foreground
              transition
              hover:bg-secondary
              hover:text-foreground
              active:scale-95
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* =========================
            FORM
        ========================== */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <AdminForm
            mode={mode}
            onSuccess={() => {
              onSuccess?.();
              onClose();
            }}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}