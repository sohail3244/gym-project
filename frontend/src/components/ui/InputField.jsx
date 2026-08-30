import React from "react";

const InputField = React.forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      error = "",
      icon: Icon,
      className = "",
      disabled = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`w-full ${className}`}>
        {/* Label */}
        {label && (
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            {label}
          </label>
        )}

        {/* Input Wrapper */}
        <div
          className={`
            flex
            min-h-10
            items-center
            rounded-xl
            border
            bg-background
            px-3
            py-2
            transition-all
            duration-200

            ${
              error
                ? "border-destructive focus-within:border-destructive focus-within:ring-2 focus-within:ring-destructive/10"
                : "border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10"
            }

            ${
              disabled
                ? "cursor-not-allowed bg-muted/50 opacity-60"
                : ""
            }
          `}
        >
          {/* Icon */}
          {Icon && (
            <Icon
              size={18}
              className={`
                mr-2
                shrink-0
                transition-colors
                ${
                  error
                    ? "text-destructive"
                    : "text-muted-foreground"
                }
              `}
            />
          )}

          {/* Input */}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className="
              w-full
              bg-transparent
              text-sm
              text-foreground
              outline-none
              placeholder:text-muted-foreground
              disabled:cursor-not-allowed
            "
            {...rest}
          />
        </div>

        {/* Error */}
        {error && (
          <p className="mt-1.5 text-xs font-medium text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;