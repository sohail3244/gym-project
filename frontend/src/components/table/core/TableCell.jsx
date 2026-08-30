"use client";

import React from "react";

export default function TableCell({
  children,
  className = "",
  header = false,
  align = "left",
  ...props
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  if (header) {
    return (
      <th
        className={`
          h-12
          whitespace-nowrap
          px-5
          py-3
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-muted-foreground
          ${alignment[align]}
          ${className}
        `}
        {...props}
      >
        {children}
      </th>
    );
  }

  return (
    <td
      className={`
        px-5
        py-4
        text-sm
        text-foreground
        ${alignment[align]}
        ${className}
      `}
      {...props}
    >
      {children}
    </td>
  );
}