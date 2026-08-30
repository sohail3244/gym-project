"use client";

import React from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

export default function TablePagination({
  page = 1,
  totalPages = 1,
  totalRows = 0,
  selectedRows = 0,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 20, 50, 100],
  onPageChange,
  onRowsPerPageChange,
  className = "",
}) {
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  const handleRowsPerPageChange = (event) => {
    const value = Number(event.target.value);

    onRowsPerPageChange?.(value);
  };

  return (
    <div
      className={`
        flex
        flex-col
        gap-4
        border-t
        border-border
        bg-card
        px-5
        py-3
        sm:flex-row
        sm:items-center
        sm:justify-between
        ${className}
      `}
    >
      {/* Selected rows */}
      <div className="text-xs text-muted-foreground">
        <span className="font-medium text-foreground">
          {selectedRows}
        </span>{" "}
        of{" "}
        <span className="font-medium text-foreground">
          {totalRows}
        </span>{" "}
        row(s) selected.
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap text-xs font-medium text-foreground">
            Rows per page
          </span>

          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="
              h-8
              min-w-17.5
              cursor-pointer
              rounded-lg
              border
              border-border
              bg-background
              px-2
              text-xs
              font-medium
              text-foreground
              outline-none
              transition
              hover:bg-muted/40
              focus:border-primary
              focus:ring-2
              focus:ring-primary/10
            "
          >
            {rowsPerPageOptions.map((option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Page information */}
        <div className="whitespace-nowrap text-xs font-medium text-foreground">
          Page {page} of {totalPages}
        </div>

        {/* Pagination buttons */}
        <div className="flex items-center gap-1">
          {/* First */}
          <PaginationButton
            disabled={isFirstPage}
            onClick={() => onPageChange?.(1)}
            aria-label="First page"
          >
            <ChevronsLeft size={16} />
          </PaginationButton>

          {/* Previous */}
          <PaginationButton
            disabled={isFirstPage}
            onClick={() =>
              onPageChange?.(Math.max(1, page - 1))
            }
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </PaginationButton>

          {/* Next */}
          <PaginationButton
            disabled={isLastPage}
            onClick={() =>
              onPageChange?.(
                Math.min(totalPages, page + 1)
              )
            }
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </PaginationButton>

          {/* Last */}
          <PaginationButton
            disabled={isLastPage}
            onClick={() =>
              onPageChange?.(totalPages)
            }
            aria-label="Last page"
          >
            <ChevronsRight size={16} />
          </PaginationButton>
        </div>
      </div>
    </div>
  );
}

function PaginationButton({
  children,
  disabled,
  onClick,
  ...props
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-lg
        border
        border-border
        bg-background
        text-muted-foreground
        transition-all
        hover:bg-muted
        hover:text-foreground
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-40
        disabled:hover:bg-background
        disabled:hover:text-muted-foreground
      "
      {...props}
    >
      {children}
    </button>
  );
}