"use client";

import React from "react";

export default function TableBody({
  children,
  className = "",
}) {
  return (
    <tbody
      className={`
        divide-y
        divide-border
        ${className}
      `}
    >
      {children}
    </tbody>
  );
}