"use client";

import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search...",
  className = "",
  disabled = false,
  onClear,
}) {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange("");
    }
  };

  return (
    <div
      className={`
        relative
        w-full
        ${className}
      `}
    >
      {/* Search Icon */}
      <Search
        size={18}
        className="
          pointer-events-none
          absolute
          left-3.5
          top-1/2
          -translate-y-1/2
          text-muted-foreground
        "
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="
          min-h-10
          w-full
          rounded-xl
          border
          border-border
          bg-background
          py-2
          pl-10
          pr-10
          text-sm
          text-foreground
          outline-none
          placeholder:text-muted-foreground
          transition-all
          duration-200
          focus:border-primary
          focus:ring-2
          focus:ring-primary/10
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      />

      {/* Clear Button */}
      {value && (
        <button
          type="button"
          onClick={handleClear}
          disabled={disabled}
          aria-label="Clear search"
          className="
            absolute
            right-3
            top-1/2
            flex
            h-6
            w-6
            -translate-y-1/2
            items-center
            justify-center
            rounded-md
            text-muted-foreground
            transition
            hover:bg-secondary
            hover:text-foreground
            active:scale-95
          "
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}