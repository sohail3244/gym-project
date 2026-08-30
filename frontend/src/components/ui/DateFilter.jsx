"use client";

import React from "react";
import { CalendarDays } from "lucide-react";

const DEFAULT_OPTIONS = [
  { value: "ALL", label: "All Dates" },
  { value: "TODAY", label: "Today" },
  { value: "YESTERDAY", label: "Yesterday" },
  { value: "LAST_7_DAYS", label: "Last 7 Days" },
  { value: "LAST_30_DAYS", label: "Last 30 Days" },
  { value: "THIS_MONTH", label: "This Month" },
];

export default function DateFilter({
  value = "ALL",
  onChange,
  options = DEFAULT_OPTIONS,
  placeholder = "Date",
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <CalendarDays
        size={16}
        className="
          pointer-events-none
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-muted-foreground
        "
      />

      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          h-10
          min-w-40
          appearance-none
          rounded-xl
          border
          border-border
          bg-background
          pl-9
          pr-8
          text-sm
          font-medium
          text-foreground
          outline-none
          transition
          focus:border-primary
          focus:ring-2
          focus:ring-primary/10
          hover:bg-secondary/50
        "
        aria-label={placeholder}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Dropdown Arrow */}
      <span
        className="
          pointer-events-none
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-xs
          text-muted-foreground
        "
      >
        ▾
      </span>
    </div>
  );
}