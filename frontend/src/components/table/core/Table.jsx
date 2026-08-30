"use client";

import React from "react";
import SearchBar from "@/components/ui/SearchBar";

export default function Table({
  children,

  // Search
  searchable = false,
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search...",

  // Custom toolbar
  toolbar = null,

  className = "",
}) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        shadow-sm
        ${className}
      `}
    >
      {/* =========================
          TABLE TOOLBAR
      ========================== */}
      {(searchable || toolbar) && (
        <div
          className="
            flex
            flex-col
            gap-3
            border-b
            border-border
            bg-card
            px-4
            py-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Search */}
          {searchable && (
            <SearchBar
              value={searchValue}
              onChange={onSearchChange}
              placeholder={searchPlaceholder}
              className="w-full sm:max-w-sm"
            />
          )}

          {/* Custom toolbar content */}
          {toolbar && (
            <div className="flex items-center gap-2">
              {toolbar}
            </div>
          )}
        </div>
      )}

      {/* =========================
          TABLE
      ========================== */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    </div>
  );
}