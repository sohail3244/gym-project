"use client";

import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function Button({
  children,
  text,
  icon: Icon = null,
  iconPosition = "right",
  onClick,
  type = "button",
  href,
  isLoading = false,
  loadingText,
  disabled = false,
  variant = "default",
  className = "",
  ...props
}) {
  const contentText = text || children || "Button";
  const isInteractiveDisabled = disabled || isLoading;

  // Only variant added
  const variantClasses = {
    default: `
      border-border
      bg-background
      text-foreground
      hover:border-primary/30
    `,

    primary: `
      border-primary
      bg-primary
      text-primary-foreground
      hover:bg-primary/90
    `,

    secondary: `
      border-border
      bg-secondary
      text-secondary-foreground
      hover:bg-secondary/80
    `,

    outline: `
      border-border
      bg-transparent
      text-foreground
      hover:border-primary
      hover:bg-primary/10
      hover:text-primary
    `,

    ghost: `
      border-transparent
      bg-transparent
      text-foreground
      shadow-none
      hover:border-transparent
      hover:bg-secondary
    `,

    destructive: `
      border-destructive
      bg-destructive
      text-destructive-foreground
      hover:bg-destructive/90
    `,
  };

  const baseButtonClasses = `
    group/btn
    relative
    overflow-hidden
    rounded-xl
    border
    px-4
    py-2
    text-sm
    font-semibold
    shadow-sm
    transition-all
    duration-300
    active:scale-95
    disabled:pointer-events-none
    disabled:opacity-50
    select-none
    cursor-pointer
    ${variantClasses[variant] || variantClasses.default}
    ${className}
  `;

  const buttonInner = (
    <>
      {/* Sliding Bubble Background */}
      <span
        className="
          absolute
          bottom-0
          left-0
          h-48
          w-full
          origin-bottom
          translate-y-full
          transform
          rounded-full
          bg-primary
          transition-transform
          duration-300
          ease-out
          group-hover/btn:translate-y-14
        "
      />

      {/* Button Content */}
      <div className="relative flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <Loader2
              size={18}
              className="
                animate-spin
                text-foreground
                transition-colors
                duration-300
                group-hover/btn:text-primary-foreground
              "
            />

            <span
              className="
                font-semibold
                text-foreground
                transition-colors
                duration-300
                group-hover/btn:text-primary-foreground
              "
            >
              {loadingText || contentText}
            </span>
          </>
        ) : (
          <>
            {/* Left Icon */}
            {Icon && iconPosition === "left" && (
              <Icon
                size={18}
                className="
                  shrink-0
                  text-foreground
                  transition-all
                  duration-300
                  group-hover/btn:text-primary-foreground
                  group-hover/btn:-translate-x-1
                "
              />
            )}

            {/* Label */}
            <span
              className="
                font-semibold
                text-foreground
                transition-colors
                duration-300
                group-hover/btn:text-primary-foreground
              "
            >
              {contentText}
            </span>

            {/* Right Icon */}
            {Icon && iconPosition === "right" && (
              <Icon
                size={18}
                className="
                  shrink-0
                  text-foreground
                  transition-all
                  duration-300
                  group-hover/btn:text-primary-foreground
                  group-hover/btn:translate-x-1
                "
              />
            )}
          </>
        )}
      </div>
    </>
  );

  /* Link Support */
  if (href && !isInteractiveDisabled) {
    return (
      <Link
        href={href}
        className={baseButtonClasses}
        {...props}
      >
        {buttonInner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isInteractiveDisabled}
      className={baseButtonClasses}
      {...props}
    >
      {buttonInner}
    </button>
  );
}