'use client';

import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function Button({
  children,
  text,
  icon: Icon = null,
  iconPosition = 'right',
  onClick,
  type = 'button',
  href,
  isLoading = false,
  loadingText,
  disabled = false,
  className = '',
  ...props
}) {
  const contentText = text || children || 'Button';
  const isInteractiveDisabled = disabled || isLoading;

  const baseButtonClasses = `group/btn relative overflow-hidden rounded-xl border border-primary/20 bg-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer ${className}`;

  const buttonInner = (
    <>
      {/* Sliding Bubble Background */}
      <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform rounded-full bg-primary transition-transform duration-300 ease-out group-hover/btn:translate-y-14" />

      {/* Button Content */}
      <div className="relative flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin text-black transition-colors duration-300 group-hover/btn:text-white" />
            <span className="font-semibold text-black transition-colors duration-300 group-hover/btn:text-white">
              {loadingText || contentText}
            </span>
          </>
        ) : (
          <>
            {/* Left Icon */}
            {Icon && iconPosition === 'left' && (
              <Icon
                size={18}
                className="shrink-0 text-black transition-all duration-300 group-hover/btn:text-white group-hover/btn:-translate-x-1"
              />
            )}

            {/* Label */}
            <span className="font-semibold text-black transition-colors duration-300 group-hover/btn:text-white">
              {contentText}
            </span>

            {/* Right Icon */}
            {Icon && iconPosition === 'right' && (
              <Icon
                size={18}
                className="shrink-0 text-black transition-all duration-300 group-hover/btn:text-white group-hover/btn:translate-x-1"
              />
            )}
          </>
        )}
      </div>
    </>
  );

  // Link Polymorphism Support
  if (href && !isInteractiveDisabled) {
    return (
      <Link href={href} className={baseButtonClasses} {...props}>
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