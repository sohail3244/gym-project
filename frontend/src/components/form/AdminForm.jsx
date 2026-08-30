"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  User,
  Mail,
  Lock,
  Phone,
  Building2,
  MapPin,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  ShieldAlert,
  CreditCard,
} from "lucide-react";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { useRegisterAdmin } from "@/lib/hooks/useAdmin";

const businessTypes = [
  {
    value: "GYM",
    label: "Gym",
  },
  {
    value: "YOGA_STUDIO",
    label: "Yoga Studio",
  },
  {
    value: "DANCE_STUDIO",
    label: "Dance Studio",
  },
  {
    value: "PILATES_STUDIO",
    label: "Pilates Studio",
  },
  {
    value: "SWIMMING_ACADEMY",
    label: "Swimming Academy",
  },
  {
    value: "SPORTS_CENTER",
    label: "Sports Center",
  },
  {
    value: "MIXED_MARTIAL_ARTS_ACADEMY",
    label: "Mixed Martial Arts Academy",
  },
  {
    value: "BADMINTON_ACADEMY",
    label: "Badminton Academy",
  },
  {
    value: "PICKLEBALL_CLUB",
    label: "Pickleball Club",
  },
  {
    value: "ZUMBA_STUDIO",
    label: "Zumba Studio",
  },
  {
    value: "OTHER",
    label: "Other",
  },
];

/*
|--------------------------------------------------------------------------
| IMPORTANT
|--------------------------------------------------------------------------
| Backend registerAdmin API planId ko REQUIRED rakhta hai.
|
| Isliye yahan plans ko API se load karna better hai.
|
| Agar tumhare paas already usePlans() hook hai to usko yahan use karo.
| Neeche temporary example ke liye plans prop rakha gaya hai.
|--------------------------------------------------------------------------
*/

export default function AdminForm({
  mode = "create",
  onSuccess,
  onClose,
  plans = [],
}) {
  const [showPassword, setShowPassword] = useState(false);

  const registerMutation = useRegisterAdmin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      mobileNumber: "",
      businessName: "",
      businessType: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      planId: "",
      paymentRequired: false,
    },
  });

  const onSubmit = async (data) => {
  try {
    const payload = {
      ...data,
      paymentRequired: false,
    };

    await registerMutation.mutateAsync(payload);

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error("Admin Registration Error:", error);
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* =========================================================
          ADMIN PROFILE & SECURITY
      ========================================================= */}

      <div className="space-y-5 rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <User size={16} />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Admin Profile & Security
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Full Name */}

          <InputField
            label="Full Name"
            placeholder="Rahul Sharma"
            icon={User}
            error={errors.name?.message}
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />

          {/* Email */}

          <InputField
            label="Email Address"
            type="email"
            placeholder="rahul@example.com"
            icon={Mail}
            error={errors.email?.message}
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />

          {/* Password */}

          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              icon={Lock}
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="
                absolute
                right-3
                top-8.5
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                text-muted-foreground
                transition
                hover:bg-secondary
                hover:text-foreground
                active:scale-95
              "
              tabIndex={-1}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          </div>

          {/* Mobile */}

          <InputField
            label="Mobile Number"
            type="tel"
            inputMode="numeric"
            placeholder="9876543210"
            icon={Phone}
            error={errors.mobileNumber?.message}
            {...register("mobileNumber", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
          />
        </div>

        {/* =========================================================
            BUSINESS DETAILS
        ========================================================= */}

        <div className="flex items-center gap-2 border-b border-border pb-3 pt-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Building2 size={16} />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Business Details
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Business Name */}

          <InputField
            label="Business / Gym Name"
            placeholder="Apex Fitness & Performance"
            icon={Building2}
            error={errors.businessName?.message}
            {...register("businessName", {
              required: "Business name is required",
              minLength: {
                value: 2,
                message:
                  "Business name must be at least 2 characters",
              },
            })}
          />

          {/* Business Type */}

          <div className="w-full">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Business Type
              <span className="ml-1 text-destructive">*</span>
            </label>

            <select
              {...register("businessType", {
                required: "Please select a business type",
              })}
              className={`
                min-h-10
                w-full
                rounded-xl
                border
                bg-background
                px-3
                py-2
                text-sm
                text-foreground
                outline-none
                transition-all
                duration-200
                ${
                  errors.businessType
                    ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/10"
                    : "border-border focus:border-primary focus:ring-2 focus:ring-primary/10"
                }
              `}
            >
              <option value="">Choose business type...</option>

              {businessTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {errors.businessType && (
              <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
                <AlertCircle size={12} />
                {errors.businessType.message}
              </p>
            )}
          </div>
        </div>

        {/* =========================================================
            PLAN
        ========================================================= */}

        <div className="flex items-center gap-2 border-b border-border pb-3 pt-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <CreditCard size={16} />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Subscription Plan
          </h3>
        </div>

        <div className="w-full">
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Select Plan
            <span className="ml-1 text-destructive">*</span>
          </label>

          <select
  {...register("paymentRequired", {
    
    setValueAs: (value) => value === "true",
  })}
  defaultValue="false"
>
  <option value="false">No Payment Required</option>
  <option value="true">Payment Required</option>
</select>

          {errors.planId && (
            <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
              <AlertCircle size={12} />
              {errors.planId.message}
            </p>
          )}

          {plans.length === 0 && (
            <p className="mt-1.5 text-xs text-muted-foreground">
              No subscription plans available.
            </p>
          )}
        </div>

        {/* =========================================================
            LOCATION & ADDRESS
        ========================================================= */}

        <div className="flex items-center gap-2 border-b border-border pb-3 pt-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin size={16} />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Location & Address
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Street Address */}

          <div className="md:col-span-3">
            <InputField
              label="Street Address"
              placeholder="Plot No. 42, Kings Avenue, Sector 5"
              icon={MapPin}
              error={errors.address?.message}
              {...register("address")}
            />
          </div>

          {/* City */}

          <InputField
            label="City"
            placeholder="Mumbai"
            error={errors.city?.message}
            {...register("city")}
          />

          {/* State */}

          <InputField
            label="State / Province"
            placeholder="Maharashtra"
            error={errors.state?.message}
            {...register("state")}
          />

          {/* PIN */}

          <InputField
            label="Postal Code (PIN)"
            type="text"
            inputMode="numeric"
            placeholder="400053"
            error={errors.pincode?.message}
            {...register("pincode", {
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Enter a valid 6-digit postal code",
              },
            })}
          />
        </div>

        {/* =========================================================
            ACTION BUTTONS
        ========================================================= */}

        <div className="flex items-center justify-end gap-3 pt-1">
          <Button
            variant="outline"
            type="button"
            onClick={onClose}
            className="
              border-border
              bg-background
              text-foreground
              hover:bg-secondary
            "
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={
              registerMutation.isPending || plans.length === 0
            }
            isLoading={registerMutation.isPending}
            loadingText="Registering..."
            icon={ArrowRight}
            iconPosition="right"
          >
            Complete Registration
          </Button>
        </div>
      </div>

      {/* =========================================================
          API ERROR
      ========================================================= */}

      {registerMutation.isError && (
        <div
          className="
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-destructive/20
            bg-destructive/10
            p-4
            text-sm
            font-medium
            text-destructive
          "
        >
          <ShieldAlert size={18} className="mt-0.5 shrink-0" />

          <span>
            {registerMutation.error?.response?.data?.message ||
              registerMutation.error?.message ||
              "Registration failed. Please try again."}
          </span>
        </div>
      )}

      {/* =========================================================
          SUCCESS MESSAGE
      ========================================================= */}

      {registerMutation.isSuccess && (
        <div
          className="
            rounded-2xl
            border
            border-emerald-500/20
            bg-emerald-500/10
            p-4
            text-sm
            font-medium
            text-emerald-600
            dark:text-emerald-400
          "
        >
          Registration successful. Please complete your payment
          to activate your account.
        </div>
      )}
    </form>
  );
}