"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  CreditCard,
  IndianRupee,
  CalendarDays,
  Check,
  Dumbbell,
  UserRound,
  Users,
} from "lucide-react";

const defaultValues = {
  name: "",
  description: "",
  price: "",
  durationInDays: "",
  features: {
    gymAccess: false,
    personalTrainer: false,
    groupClasses: false,
  },
};

export default function MembershipPlanForm({
  mode = "create",
  initialData = null,
  onSubmit: handleFormSubmit,
  onClose,
  isLoading = false,
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  /*
   * ============================================================
   * EDIT MODE
   * ============================================================
   */

  useEffect(() => {
    if (!initialData) {
      reset(defaultValues);
      return;
    }

    reset({
      name: initialData.name || "",
      description: initialData.description || "",
      price: initialData.price ?? "",
      durationInDays: initialData.durationInDays ?? "",
      features: {
        ...defaultValues.features,
        ...(initialData.features || {}),
      },
    });
  }, [initialData, reset]);

  /*
   * ============================================================
   * SUBMIT
   * ============================================================
   */

  const onSubmit = async (data) => {
    const payload = {
      name: data.name.trim(),
      description: data.description?.trim() || "",
      price: Number(data.price),
      durationInDays: Number(data.durationInDays),

      features: {
        gymAccess: Boolean(data.features.gymAccess),
        personalTrainer: Boolean(data.features.personalTrainer),
        groupClasses: Boolean(data.features.groupClasses),
      },
    };

    await handleFormSubmit?.(payload);
  };

  const features = watch("features");

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* ========================================================
          BASIC INFORMATION
      ========================================================= */}

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <CreditCard size={20} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Membership Information
            </h3>

            <p className="text-xs text-muted-foreground">
              Enter the basic membership plan details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {/* NAME */}

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Plan Name
              <span className="ml-1 text-destructive">*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. Premium"
              {...register("name", {
                required: "Plan name is required",
                minLength: {
                  value: 2,
                  message: "Plan name must be at least 2 characters",
                },
              })}
              className="
                h-10
                w-full
                rounded-lg
                border
                border-border
                bg-background
                px-3
                text-sm
                text-foreground
                outline-none
                transition
                placeholder:text-muted-foreground
                focus:border-primary
                focus:ring-2
                focus:ring-primary/10
              "
            />

            {errors.name && (
              <p className="mt-1 text-xs text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* DESCRIPTION */}

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Description
            </label>

            <textarea
              rows={3}
              placeholder="e.g. Premium gym membership"
              {...register("description")}
              className="
                w-full
                resize-none
                rounded-lg
                border
                border-border
                bg-background
                px-3
                py-2.5
                text-sm
                text-foreground
                outline-none
                transition
                placeholder:text-muted-foreground
                focus:border-primary
                focus:ring-2
                focus:ring-primary/10
              "
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          PRICE & DURATION
      ========================================================= */}

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-foreground">
            Pricing & Duration
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Set the membership price and validity period.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* PRICE */}

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Price
              <span className="ml-1 text-destructive">*</span>
            </label>

            <div className="relative">
              <IndianRupee
                size={16}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="1999"
                {...register("price", {
                  required: "Price is required",
                  min: {
                    value: 0,
                    message: "Price cannot be negative",
                  },
                  validate: (value) =>
                    Number(value) >= 0 ||
                    "Enter a valid price",
                })}
                className="
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-background
                  pl-9
                  pr-3
                  text-sm
                  text-foreground
                  outline-none
                  transition
                  placeholder:text-muted-foreground
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />
            </div>

            {errors.price && (
              <p className="mt-1 text-xs text-destructive">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* DURATION */}

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Duration
              <span className="ml-1 text-destructive">*</span>
            </label>

            <div className="relative">
              <CalendarDays
                size={16}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <input
                type="number"
                min="1"
                placeholder="90"
                {...register("durationInDays", {
                  required: "Duration is required",
                  min: {
                    value: 1,
                    message: "Duration must be at least 1 day",
                  },
                  validate: (value) =>
                    Number(value) > 0 ||
                    "Enter a valid duration",
                })}
                className="
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-background
                  pl-9
                  pr-16
                  text-sm
                  text-foreground
                  outline-none
                  transition
                  placeholder:text-muted-foreground
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                Days
              </span>
            </div>

            {errors.durationInDays && (
              <p className="mt-1 text-xs text-destructive">
                {errors.durationInDays.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================
          FEATURES
      ========================================================= */}

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-foreground">
            Membership Features
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Select the features included in this membership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* GYM ACCESS */}

          <label
            className={`
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-xl
              border
              p-4
              transition
              ${
                features?.gymAccess
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted/50"
              }
            `}
          >
            <div className="relative">
              <input
                type="checkbox"
                {...register("features.gymAccess")}
                className="peer sr-only"
              />

              <div
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-background
                  peer-checked:border-primary
                  peer-checked:bg-primary
                "
              >
                <Check
                  size={13}
                  className="
                    text-white
                    opacity-0
                    peer-checked:opacity-100
                  "
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Dumbbell
                size={17}
                className="text-primary"
              />

              <div>
                <p className="text-sm font-medium text-foreground">
                  Gym Access
                </p>

                <p className="text-xs text-muted-foreground">
                  Full gym access
                </p>
              </div>
            </div>
          </label>

          {/* PERSONAL TRAINER */}

          <label
            className={`
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-xl
              border
              p-4
              transition
              ${
                features?.personalTrainer
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted/50"
              }
            `}
          >
            <div className="relative">
              <input
                type="checkbox"
                {...register("features.personalTrainer")}
                className="peer sr-only"
              />

              <div
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-background
                  peer-checked:border-primary
                  peer-checked:bg-primary
                "
              >
                <Check
                  size={13}
                  className="
                    text-white
                    opacity-0
                    peer-checked:opacity-100
                  "
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <UserRound
                size={17}
                className="text-primary"
              />

              <div>
                <p className="text-sm font-medium text-foreground">
                  Personal Trainer
                </p>

                <p className="text-xs text-muted-foreground">
                  Trainer support
                </p>
              </div>
            </div>
          </label>

          {/* GROUP CLASSES */}

          <label
            className={`
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-xl
              border
              p-4
              transition
              ${
                features?.groupClasses
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted/50"
              }
            `}
          >
            <div className="relative">
              <input
                type="checkbox"
                {...register("features.groupClasses")}
                className="peer sr-only"
              />

              <div
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-background
                  peer-checked:border-primary
                  peer-checked:bg-primary
                "
              >
                <Check
                  size={13}
                  className="
                    text-white
                    opacity-0
                    peer-checked:opacity-100
                  "
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users
                size={17}
                className="text-primary"
              />

              <div>
                <p className="text-sm font-medium text-foreground">
                  Group Classes
                </p>

                <p className="text-xs text-muted-foreground">
                  Group workout classes
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* ========================================================
          ACTIONS
      ========================================================= */}

      <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="
            h-10
            rounded-lg
            border
            border-border
            bg-background
            px-4
            text-sm
            font-medium
            text-foreground
            transition
            hover:bg-muted
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="
            inline-flex
            h-10
            items-center
            justify-center
            rounded-lg
            bg-primary
            px-5
            text-sm
            font-medium
            text-primary-foreground
            transition
            hover:bg-primary/90
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isLoading
            ? "Saving..."
            : mode === "edit"
              ? "Update Plan"
              : "Create Plan"}
        </button>
      </div>
    </form>
  );
}