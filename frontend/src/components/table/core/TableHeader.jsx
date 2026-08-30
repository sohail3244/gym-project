"use client";

import React from "react";

export default function TableHeader({
  children,
  className = "",
}) {
  return (
    <thead
      className={`
        border-b
        border-border
        bg-muted/40
        ${className}
      `}
    >
      {children}
    </thead>
  );
}