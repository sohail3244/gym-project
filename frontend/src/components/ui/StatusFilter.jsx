"use client";

import React from "react";
import { ListFilter } from "lucide-react";

const DEFAULT_OPTIONS = [
  { value: "ALL", label: "All Status" },
  { value: "ACTIVE", label: "Active" },
  { value: "PENDING", label: "Pending" },
  { value: "INACTIVE", label: "Inactive" },
  { value: "SUSPENDED", label: "Suspended" },
];

export default function StatusFilter({
  value = "ALL",
  onChange,
  options = DEFAULT_OPTIONS,
  placeholder = "Status",
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <ListFilter
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