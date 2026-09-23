"use client";

import React, { useEffect, useState } from "react";

const ATTENDANCE_STATUSES = [
  {
    value: "PRESENT",
    label: "Present",
  },
  {
    value: "ABSENT",
    label: "Absent",
  },
  {
    value: "HALF_DAY",
    label: "Half Day",
  },
  {
    value: "LATE",
    label: "Late",
  },
  {
    value: "LEAVE",
    label: "Leave",
  },
];

const DEFAULT_FORM = {
  staffId: "",
  attendanceDate: "",
  checkIn: "",
  checkOut: "",
  status: "PRESENT",
  notes: "",
};

export default function StaffAttendanceForm({
  mode = "create",
  initialData = null,
  staffOptions = [],
  onSubmit,
  onClose,
  isLoading = false,
}) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});

  /* =========================================================
     INITIAL DATA
  ========================================================= */

  useEffect(() => {
    if (initialData) {
      setForm({
        staffId: initialData.staffId || "",
        attendanceDate: initialData.attendanceDate
          ? String(initialData.attendanceDate).slice(0, 10)
          : "",
        checkIn: initialData.checkIn
          ? formatDateTimeLocal(initialData.checkIn)
          : "",
        checkOut: initialData.checkOut
          ? formatDateTimeLocal(initialData.checkOut)
          : "",
        status: initialData.status || "PRESENT",
        notes: initialData.notes || "",
      });
    } else {
      setForm(DEFAULT_FORM);
    }

    setErrors({});
  }, [initialData]);

  /* =========================================================
     DATE TIME FORMAT
  ========================================================= */

  const formatDateTimeLocal = (date) => {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    const year = parsedDate.getFullYear();
    const month = String(
      parsedDate.getMonth() + 1
    ).padStart(2, "0");
    const day = String(
      parsedDate.getDate()
    ).padStart(2, "0");
    const hours = String(
      parsedDate.getHours()
    ).padStart(2, "0");
    const minutes = String(
      parsedDate.getMinutes()
    ).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  /* =========================================================
     CHANGE HANDLER
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!form.staffId) {
      newErrors.staffId = "Please select a staff member";
    }

    if (!form.attendanceDate) {
      newErrors.attendanceDate =
        "Attendance date is required";
    }

    if (!form.status) {
      newErrors.status = "Attendance status is required";
    }

    if (form.checkIn && form.checkOut) {
      const checkInDate = new Date(form.checkIn);
      const checkOutDate = new Date(form.checkOut);

      if (checkOutDate <= checkInDate) {
        newErrors.checkOut =
          "Check-out must be after check-in";
      }
    }

    if (form.notes && form.notes.length > 500) {
      newErrors.notes =
        "Notes cannot exceed 500 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
     ISO DATE CONVERTER
  ========================================================= */

  const toISOString = (value) => {
    if (!value) return null;

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return date.toISOString();
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = {
      staffId: form.staffId,
      attendanceDate: form.attendanceDate,
      checkIn: toISOString(form.checkIn),
      checkOut: toISOString(form.checkOut),
      status: form.status,
      notes: form.notes.trim() || null,
    };

    try {
      await onSubmit(payload);
    } catch (error) {
      console.error(
        "Staff Attendance Submit Error:",
        error
      );
    }
  };

  /* =========================================================
     INPUT CLASS
  ========================================================= */

  const inputClass = (fieldName) => `
    w-full
    rounded-lg
    border
    ${
      errors[fieldName]
        ? "border-red-500"
        : "border-border"
    }
    bg-background
    px-3
    py-2.5
    text-sm
    text-foreground
    outline-none
    transition
    placeholder:text-muted-foreground
    focus:border-primary
    focus:ring-2
    focus:ring-primary/10
    disabled:cursor-not-allowed
    disabled:opacity-60
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* =====================================================
          STAFF
      ====================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="staffId"
          className="text-sm font-medium text-foreground"
        >
          Staff
          <span className="ml-1 text-red-500">*</span>
        </label>

        <select
          id="staffId"
          name="staffId"
          value={form.staffId}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClass("staffId")}
        >
          <option value="">
            Select staff member
          </option>

          {staffOptions.map((staff) => (
            <option
              key={staff.id}
              value={staff.id}
            >
              {staff.name}
              {staff.staffType
                ? ` - ${staff.staffType}`
                : ""}
            </option>
          ))}
        </select>

        {errors.staffId && (
          <p className="text-xs text-red-500">
            {errors.staffId}
          </p>
        )}
      </div>

      {/* =====================================================
          ATTENDANCE DATE
      ====================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="attendanceDate"
          className="text-sm font-medium text-foreground"
        >
          Attendance Date
          <span className="ml-1 text-red-500">*</span>
        </label>

        <input
          id="attendanceDate"
          name="attendanceDate"
          type="date"
          value={form.attendanceDate}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClass(
            "attendanceDate"
          )}
        />

        {errors.attendanceDate && (
          <p className="text-xs text-red-500">
            {errors.attendanceDate}
          </p>
        )}
      </div>

      {/* =====================================================
          CHECK IN / CHECK OUT
      ====================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* CHECK IN */}

        <div className="space-y-2">
          <label
            htmlFor="checkIn"
            className="text-sm font-medium text-foreground"
          >
            Check In
          </label>

          <input
            id="checkIn"
            name="checkIn"
            type="datetime-local"
            value={form.checkIn}
            onChange={handleChange}
            disabled={isLoading}
            className={inputClass("checkIn")}
          />

          {errors.checkIn && (
            <p className="text-xs text-red-500">
              {errors.checkIn}
            </p>
          )}
        </div>

        {/* CHECK OUT */}

        <div className="space-y-2">
          <label
            htmlFor="checkOut"
            className="text-sm font-medium text-foreground"
          >
            Check Out
          </label>

          <input
            id="checkOut"
            name="checkOut"
            type="datetime-local"
            value={form.checkOut}
            onChange={handleChange}
            disabled={isLoading}
            className={inputClass("checkOut")}
          />

          {errors.checkOut && (
            <p className="text-xs text-red-500">
              {errors.checkOut}
            </p>
          )}
        </div>
      </div>

      {/* =====================================================
          STATUS
      ====================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="status"
          className="text-sm font-medium text-foreground"
        >
          Status
          <span className="ml-1 text-red-500">*</span>
        </label>

        <select
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClass("status")}
        >
          {ATTENDANCE_STATUSES.map(
            (status) => (
              <option
                key={status.value}
                value={status.value}
              >
                {status.label}
              </option>
            )
          )}
        </select>

        {errors.status && (
          <p className="text-xs text-red-500">
            {errors.status}
          </p>
        )}
      </div>

      {/* =====================================================
          NOTES
      ====================================================== */}

      <div className="space-y-2">
        <label
          htmlFor="notes"
          className="text-sm font-medium text-foreground"
        >
          Notes
        </label>

        <textarea
          id="notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          disabled={isLoading}
          rows={4}
          maxLength={500}
          placeholder="Enter attendance notes..."
          className={`${inputClass(
            "notes"
          )} resize-none`}
        />

        <div className="flex justify-between">
          {errors.notes ? (
            <p className="text-xs text-red-500">
              {errors.notes}
            </p>
          ) : (
            <span />
          )}

          <span className="text-xs text-muted-foreground">
            {form.notes.length}/500
          </span>
        </div>
      </div>

      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="
            rounded-lg
            border
            border-border
            px-4
            py-2.5
            text-sm
            font-medium
            text-foreground
            transition
            hover:bg-secondary
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="
            inline-flex
            min-w-32
            items-center
            justify-center
            rounded-lg
            bg-primary
            px-4
            py-2.5
            text-sm
            font-medium
            text-primary-foreground
            shadow-sm
            transition
            hover:bg-primary/90
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isLoading ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />

              Saving...
            </>
          ) : mode === "edit" ? (
            "Update Attendance"
          ) : (
            "Mark Attendance"
          )}
        </button>
      </div>
    </form>
  );
}