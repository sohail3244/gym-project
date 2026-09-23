"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  CreditCard,
  FileText,
  IndianRupee,
  CalendarDays,
  Users,
  UserCog,
  Building2,
  Check,
  Save,
} from "lucide-react";

import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

const defaultValues = {
  name: "",
  description: "",
  price: "",
  billingInterval: "MONTHLY",
  durationInDays: 30,
  maxMembers: "",
  maxStaff: "",
  maxBusinesses: 1,

  features: {
    attendance: false,
    bookings: false,
    payments: false,
    reports: false,
    whatsapp: false,
  },
};

export default function PlanForm({
  onSubmit: handleFormSubmit,
  onClose,
  isLoading = false,
  initialData = null,
}) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialData
      ? {
          ...defaultValues,
          ...initialData,
          features: {
            ...defaultValues.features,
            ...(initialData.features || {}),
          },
        }
      : defaultValues,
  });

  const features = watch("features");

  const handleFeatureChange = (feature) => {
    setValue(
      `features.${feature}`,
      !features?.[feature]
    );
  };

  const onSubmit = (data) => {
    const payload = {
      name: data.name.trim(),

      description:
        data.description?.trim() || "",

      price: Number(data.price),

      billingInterval:
        data.billingInterval,

      durationInDays:
        Number(data.durationInDays),

      maxMembers:
        data.maxMembers === ""
          ? null
          : Number(data.maxMembers),

      maxStaff:
        data.maxStaff === ""
          ? null
          : Number(data.maxStaff),

      maxBusinesses:
        data.maxBusinesses === ""
          ? null
          : Number(data.maxBusinesses),

      features: {
        attendance:
          Boolean(data.features.attendance),

        bookings:
          Boolean(data.features.bookings),

        payments:
          Boolean(data.features.payments),

        reports:
          Boolean(data.features.reports),

        whatsapp:
          Boolean(data.features.whatsapp),
      },
    };

    handleFormSubmit?.(payload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* =====================================================
          BASIC INFORMATION
      ===================================================== */}

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2 border-b border-border pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <CreditCard size={17} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">
              Plan Information
            </h3>

            <p className="text-xs text-muted-foreground">
              Configure basic subscription details
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Plan Name */}

          <InputField
            label="Plan Name"
            placeholder="Growth"
            icon={CreditCard}
            error={errors.name?.message}
            {...register("name", {
              required: "Plan name is required",
              minLength: {
                value: 2,
                message:
                  "Plan name must be at least 2 characters",
              },
            })}
          />

          {/* Price */}

          <InputField
            label="Price"
            type="number"
            placeholder="1999"
            icon={IndianRupee}
            error={errors.price?.message}
            {...register("price", {
              required: "Price is required",
              min: {
                value: 0,
                message:
                  "Price cannot be negative",
              },
            })}
          />

          {/* Description */}

          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Description
            </label>

            <textarea
              placeholder="For growing businesses"
              rows={3}
              {...register("description")}
              className="
                w-full
                rounded-xl
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

      {/* =====================================================
          BILLING
      ===================================================== */}

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2 border-b border-border pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <CalendarDays size={17} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">
              Billing Configuration
            </h3>

            <p className="text-xs text-muted-foreground">
              Configure billing interval and duration
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Billing Interval */}

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Billing Interval
            </label>

            <select
              {...register("billingInterval", {
                required:
                  "Billing interval is required",
              })}
              className="
                min-h-10
                w-full
                rounded-xl
                border
                border-border
                bg-background
                px-3
                py-2
                text-sm
                text-foreground
                outline-none
                focus:border-primary
                focus:ring-2
                focus:ring-primary/10
              "
            >
              <option value="MONTHLY">
                Monthly
              </option>

              <option value="YEARLY">
                Yearly
              </option>
            </select>
          </div>

          {/* Duration */}

          <InputField
            label="Duration (Days)"
            type="number"
            placeholder="30"
            icon={CalendarDays}
            error={
              errors.durationInDays?.message
            }
            {...register("durationInDays", {
              required:
                "Duration is required",
              min: {
                value: 1,
                message:
                  "Duration must be at least 1 day",
              },
              valueAsNumber: true,
            })}
          />
        </div>
      </div>

      {/* =====================================================
          LIMITS
      ===================================================== */}

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2 border-b border-border pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Users size={17} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">
              Plan Limits
            </h3>

            <p className="text-xs text-muted-foreground">
              Set usage limits for this plan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Members */}

          <InputField
            label="Maximum Members"
            type="number"
            placeholder="2000"
            icon={Users}
            error={errors.maxMembers?.message}
            {...register("maxMembers", {
              min: {
                value: 1,
                message:
                  "Members must be greater than 0",
              },
            })}
          />

          {/* Staff */}

          <InputField
            label="Maximum Staff"
            type="number"
            placeholder="20"
            icon={UserCog}
            error={errors.maxStaff?.message}
            {...register("maxStaff", {
              min: {
                value: 1,
                message:
                  "Staff must be greater than 0",
              },
            })}
          />

          {/* Businesses */}

          <InputField
            label="Maximum Businesses"
            type="number"
            placeholder="1"
            icon={Building2}
            error={
              errors.maxBusinesses?.message
            }
            {...register("maxBusinesses", {
              min: {
                value: 1,
                message:
                  "Businesses must be greater than 0",
              },
            })}
          />
        </div>
      </div>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2 border-b border-border pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Check size={17} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">
              Plan Features
            </h3>

            <p className="text-xs text-muted-foreground">
              Select features available in this plan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              key: "attendance",
              label: "Attendance",
            },
            {
              key: "bookings",
              label: "Bookings",
            },
            {
              key: "payments",
              label: "Payments",
            },
            {
              key: "reports",
              label: "Reports",
            },
            {
              key: "whatsapp",
              label: "WhatsApp",
            },
          ].map((feature) => {
            const checked =
              Boolean(
                features?.[feature.key]
              );

            return (
              <button
                key={feature.key}
                type="button"
                onClick={() =>
                  handleFeatureChange(
                    feature.key
                  )
                }
                className={`
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  px-4
                  py-3
                  text-left
                  transition
                  ${
                    checked
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:bg-secondary"
                  }
                `}
              >
                <span className="text-sm font-medium text-foreground">
                  {feature.label}
                </span>

                <span
                  className={`
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-md
                    border
                    ${
                      checked
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background"
                    }
                  `}
                >
                  {checked && (
                    <Check size={13} />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="flex items-center justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isLoading}
          isLoading={isLoading}
          loadingText="Saving..."
          icon={Save}
          iconPosition="left"
        >
          Save Plan
        </Button>
      </div>
    </form>
  );
}