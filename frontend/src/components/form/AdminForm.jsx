"use client";

import React, { useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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
} from "lucide-react";

import Button from "@/components/ui/Button";
import { useRegisterAdmin } from "@/lib/hooks/useAdmin";

const businessTypes = [
  { value: "GYM", label: "Gym" },
  { value: "YOGA_STUDIO", label: "Yoga Studio" },
  { value: "DANCE_STUDIO", label: "Dance Studio" },
  { value: "PILATES_STUDIO", label: "Pilates Studio" },
  { value: "SWIMMING_ACADEMY", label: "Swimming Academy" },
  { value: "SPORTS_CENTER", label: "Sports Center" },
  {
    value: "MIXED_MARTIAL_ARTS_ACADEMY",
    label: "Mixed Martial Arts Academy",
  },
  { value: "BADMINTON_ACADEMY", label: "Badminton Academy" },
  { value: "PICKLEBALL_CLUB", label: "Pickleball Club" },
  { value: "ZUMBA_STUDIO", label: "Zumba Studio" },
  { value: "OTHER", label: "Other" },
];

export default function AdminForm() {
  const router = useRouter();
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
    },
  });

  const onSubmit = async (data) => {
    try {
      await registerMutation.mutateAsync(data);

    } catch (error) {
      console.error("Admin Registration Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
        <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          Create Admin Account
        </h2>

        <p className="mt-1 text-xs text-black/60 sm:text-sm">
          Register your administrator account and business information.
        </p>
      </div>

      <div className="space-y-5 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-black/10 pb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <User size={16} />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-black">
            Admin Profile & Security
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormInput
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

          <FormInput
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

          <div className="relative">
            <FormInput
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
              className="absolute right-3.5 top-9.5 text-black/40 transition hover:text-black"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          </div>

          <FormInput
            label="Mobile Number"
            type="tel"
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
      </div>

      <div className="space-y-5 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-black/10 pb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Building2 size={16} />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-black">
            Business Details
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormInput
            label="Business / Gym Name"
            placeholder="Apex Fitness & Performance"
            icon={Building2}
            error={errors.businessName?.message}
            {...register("businessName", {
              required: "Business name is required",
              minLength: {
                value: 2,
                message: "Business name must be at least 2 characters",
              },
            })}
          />

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/70">
              Business Type <span className="text-rose-500">*</span>
            </label>

            <select
              {...register("businessType", {
                required: "Please select a business type",
              })}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-xs text-black outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 ${
                errors.businessType
                  ? "border-rose-500"
                  : "border-black/10"
              }`}
            >
              <option value="">Choose business type...</option>

              {businessTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {errors.businessType && (
              <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-500">
                <AlertCircle size={12} />
                {errors.businessType.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-5 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-black/10 pb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin size={16} />
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-black">
            Location & Address
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="md:col-span-3">
            <FormInput
              label="Street Address"
              placeholder="Plot No. 42, Kings Avenue, Sector 5"
              icon={MapPin}
              {...register("address")}
            />
          </div>

          <FormInput
            label="City"
            placeholder="Jaipur"
            {...register("city")}
          />

          <FormInput
            label="State / Province"
            placeholder="Rajasthan"
            {...register("state")}
          />

          <FormInput
            label="Postal Code (PIN)"
            placeholder="302001"
            error={errors.pincode?.message}
            {...register("pincode", {
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Enter a valid 6-digit postal code",
              },
            })}
          />
        </div>
      </div>

      {registerMutation.isError && (
        <div className="flex items-center gap-3 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-xs font-medium text-rose-700">
          <ShieldAlert
            size={18}
            className="shrink-0 text-rose-600"
          />

          <span>
            {registerMutation.error?.response?.data?.message ||
              registerMutation.error?.message ||
              "Registration failed. Please try again."}
          </span>
        </div>
      )}

      {registerMutation.isSuccess && (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-700">
          Registration successful. Your account is waiting for
          Super Admin approval.
        </div>
      )}

      <div className="flex items-center justify-end gap-3 pt-2">
        <Button
          type="button"
          onClick={() => router.back()}
          className="border-black/10 bg-white/80 text-black hover:bg-black/5"
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={registerMutation.isPending}
          isLoading={registerMutation.isPending}
          loadingText="Registering..."
          icon={ArrowRight}
          iconPosition="right"
        >
          Complete Registration
        </Button>
      </div>
    </form>
  );
}

const FormInput = forwardRef(
  ({ label, error, icon: Icon, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/70">
            {label}
          </label>
        )}

        <div className="relative">
          {Icon && (
            <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40">
              <Icon size={16} />
            </div>
          )}

          <input
            ref={ref}
            {...props}
            className={`w-full rounded-xl border bg-white py-3 text-xs text-black outline-none transition placeholder:text-black/30 focus:border-primary focus:ring-4 focus:ring-primary/10 ${
              Icon ? "pl-10 pr-4" : "px-4"
            } ${
              error ? "border-rose-500" : "border-black/10"
            } ${className}`}
          />
        </div>

        {error && (
          <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-rose-500">
            <AlertCircle size={12} />
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";