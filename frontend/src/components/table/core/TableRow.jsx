"use client";

import React from "react";

export default function TableRow({
  children,
  className = "",
  onClick,
  ...props
}) {
  return (
    <tr
      onClick={onClick}
      className={`
        group
        border-border
        transition-colors
        hover:bg-muted/30
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </tr>
  );
}