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

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Click outside to close handler
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:p-6"
    >
      <div
        ref={modalRef}
        className="relative my-8 flex w-full max-w-3xl flex-col rounded-3xl border border-black/10 bg-secondary p-6 shadow-2xl shadow-black/20 animate-in zoom-in-95 duration-200 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header */}
        <div className="flex items-start justify-between border-b border-black/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white shadow-sm shadow-primary/20">
              {mode === "register" ? (
                <UserPlus size={20} />
              ) : (
                <ShieldPlus size={20} />
              )}
            </div>
            <div>
              <h2 className="text-lg font-bold text-black sm:text-xl">
                {mode === "register" ? "Register Admin Account" : "Add New Administrator"}
              </h2>
              <p className="text-xs text-black/60">
                Configure credentials and business permissions.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-black/50 transition hover:bg-black/5 hover:text-black active:scale-95"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="mt-6 max-h-[calc(85vh-12rem)] overflow-y-auto pr-1">
          <AdminForm
            mode={mode}
            onSuccess={() => {
              if (onSuccess) onSuccess();
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}