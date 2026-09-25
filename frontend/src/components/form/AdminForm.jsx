"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { useForm } from "react-hook-form";

import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  ArrowRight,
  AlertCircle,
  ShieldAlert,
  CreditCard,
} from "lucide-react";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";

import {
  useRegisterAdmin,
  useCreateAdmin,
  useUpdateAdmin,
} from "@/lib/hooks/useAdmin";

import { usePlans } from "@/lib/hooks/usePlans";
import { useVerifyRegistrationPayment } from "@/lib/hooks/usePayment";
import api from "@/lib/api";

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

export default function AdminForm({
  mode = "create",
  admin = null,
  onSuccess,
  onClose,
}) {
  /* =========================================================
     MUTATIONS
  ========================================================= */

  const registerAdminMutation = useRegisterAdmin();
  const createAdminMutation = useCreateAdmin();
  const updateAdminMutation = useUpdateAdmin();
  const verifyPaymentMutation =
    useVerifyRegistrationPayment();

  /* =========================================================
     FETCH PLANS
  ========================================================= */

  const {
    data: plansResponse,
    isLoading: plansLoading,
    isError: plansError,
  } = usePlans();

  /* =========================================================
     NORMALIZE PLANS RESPONSE
  ========================================================= */

  const plans = Array.isArray(plansResponse)
    ? plansResponse
    : Array.isArray(plansResponse?.data)
      ? plansResponse.data
      : Array.isArray(plansResponse?.plans)
        ? plansResponse.plans
        : Array.isArray(plansResponse?.data?.plans)
          ? plansResponse.data.plans
          : [];

  /* =========================================================
     DEBUG
  ========================================================= */

  console.log("PLANS RESPONSE:", plansResponse);
  console.log("FINAL PLANS:", plans);

  /* =========================================================
     FORM
  ========================================================= */

  const {
    register,
    handleSubmit,
    reset,
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
    },
  });

  /* =========================================================
     RESET FORM
  ========================================================= */

  useEffect(() => {
    /*
     * EDIT MODE
     */
    if (mode === "edit" && admin) {
      reset({
        name: admin.name || "",
        email: admin.email || "",
        password: "",
        mobileNumber:
          admin.business?.mobileNumber || "",
        businessName:
          admin.business?.businessName || "",
        businessType:
          admin.business?.businessType || "",
        address:
          admin.business?.address || "",
        city:
          admin.business?.city || "",
        state:
          admin.business?.state || "",
        pincode:
          admin.business?.pincode || "",
        planId:
          admin.subscriptions?.[0]?.planId || "",
      });

      return;
    }

    /*
     * CREATE / REGISTER MODE
     */
    if (
      mode === "create" ||
      mode === "register"
    ) {
      reset({
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
      });
    }
  }, [mode, admin, reset]);

  /* =========================================================
     RAZORPAY CHECKOUT
  ========================================================= */

  const openRazorpayCheckout = (
    razorpayData,
    formData
  ) => {
    if (
      typeof window === "undefined" ||
      !window.Razorpay
    ) {
      throw new Error(
        "Razorpay Checkout is not loaded. Please try again."
      );
    }

    if (!razorpayData?.keyId) {
      throw new Error(
        "Razorpay key was not received."
      );
    }

    if (!razorpayData?.orderId) {
      throw new Error(
        "Razorpay order ID was not received."
      );
    }

    if (!razorpayData?.amount) {
      throw new Error(
        "Razorpay payment amount was not received."
      );
    }

    const options = {
      key: razorpayData.keyId,

      amount: razorpayData.amount,

      currency:
        razorpayData.currency || "INR",

      order_id: razorpayData.orderId,

      name: "Your Company Name",

      description: "Registration Payment",

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobileNumber,
      },

      notes: {
        businessName:
          formData.businessName,
        planId: formData.planId,
      },

      handler: (response) => {
        console.log(
          "RAZORPAY RESPONSE:",
          response
        );

        verifyPaymentMutation.mutate({
          razorpayOrderId:
            response.razorpay_order_id,

          razorpayPaymentId:
            response.razorpay_payment_id,

          razorpaySignature:
            response.razorpay_signature,
        });
      },

      modal: {
        ondismiss: () => {
          console.log(
            "Razorpay checkout closed"
          );
        },
      },

      theme: {
        color: "#2563eb",
      },
    };

    const razorpay =
      new window.Razorpay(options);

    razorpay.on(
      "payment.failed",
      (response) => {
        console.error(
          "Razorpay Payment Failed:",
          response
        );

        alert(
          response?.error?.description ||
          "Payment failed. Please try again."
        );
      }
    );

    razorpay.open();
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name.trim(),
        email: data.email.trim(),
        mobileNumber:
          data.mobileNumber.trim(),
        businessName:
          data.businessName.trim(),
        businessType: data.businessType,
        address:
          data.address?.trim() || "",
        city:
          data.city?.trim() || "",
        state:
          data.state?.trim() || "",
        pincode:
          data.pincode?.trim() || "",
        planId: data.planId,
      };

      /*
       * PUBLIC REGISTER
       */
      if (mode === "register") {
        const result =
          await registerAdminMutation.mutateAsync(
            {
              ...payload,
              password: data.password,
            }
          );

        console.log(
          "REGISTER RESPONSE:",
          result
        );

        const razorpayData =
          result?.data?.razorpay;

        if (!razorpayData) {
          throw new Error(
            "Razorpay payment details were not received."
          );
        }

        openRazorpayCheckout(
          razorpayData,
          data
        );

        /*
         * IMPORTANT:
         * Do not call onSuccess here.
         * onSuccess will be called only after
         * successful Razorpay verification.
         */
        return;
      }

      /*
       * EDIT ADMIN
       */
      else if (mode === "edit") {
        await updateAdminMutation.mutateAsync({
          adminId: admin.id,
          data: payload,
        });
      }

      /*
       * SUPER ADMIN CREATE
       */
      else {
        await createAdminMutation.mutateAsync({
          ...payload,
          paymentRequired: false,
        });
      }

      onSuccess?.();
    } catch (error) {
      console.error(
        mode === "register"
          ? "Register Admin Error:"
          : mode === "edit"
            ? "Update Admin Error:"
            : "Create Admin Error:",
        error?.response?.data || error
      );
    }
  };

  /* =========================================================
     MUTATION STATE
  ========================================================= */

  const isSubmitting =
    registerAdminMutation.isPending ||
    createAdminMutation.isPending ||
    updateAdminMutation.isPending ||
    verifyPaymentMutation.isPending;

  const hasError =
    registerAdminMutation.isError ||
    createAdminMutation.isError ||
    updateAdminMutation.isError ||
    verifyPaymentMutation.isError;

  /*
   * Register mutation becomes successful when
   * registration API completes, but payment may
   * still be pending. Therefore don't show the
   * normal success message for register mode.
   */
  const isSuccess =
    mode === "register"
      ? false
      : createAdminMutation.isSuccess ||
      updateAdminMutation.isSuccess;

  /* =========================================================
     ERROR MESSAGE
  ========================================================= */

  const errorMessage =
    registerAdminMutation.error?.response?.data
      ?.message ||
    createAdminMutation.error?.response?.data
      ?.message ||
    updateAdminMutation.error?.response?.data
      ?.message ||
    verifyPaymentMutation.error?.response?.data
      ?.message ||
    registerAdminMutation.error?.message ||
    createAdminMutation.error?.message ||
    updateAdminMutation.error?.message ||
    verifyPaymentMutation.error?.message ||
    "Something went wrong. Please try again.";

  /* =========================================================
     SUCCESS MESSAGE
  ========================================================= */

  const successMessage =
    mode === "register"
      ? "Registration and payment completed successfully."
      : mode === "edit"
        ? "Admin updated successfully."
        : "Admin created successfully and activated.";

  /* =========================================================
     BUTTON TEXT
  ========================================================= */

  const buttonText =
    mode === "register"
      ? "Register & Pay"
      : mode === "edit"
        ? "Update Admin"
        : "Create Admin";

  const loadingText =
    mode === "register"
      ? "Registering..."
      : mode === "edit"
        ? "Updating..."
        : "Creating...";

  /* =========================================================
     UI
  ========================================================= */

  return (
    <>
      {/* =====================================================
          RAZORPAY SCRIPT
      ===================================================== */}

      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="space-y-5 rounded-2xl border border-border bg-card p-5 shadow-sm">

          {/* =====================================================
              ADMIN PROFILE
          ===================================================== */}

          <div className="flex items-center gap-2 border-b border-border pb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <User size={16} />
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Admin Profile
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* Full Name */}

            <InputField
              label="Full Name"
              placeholder="Vikas Singh"
              icon={User}
              error={errors.name?.message}
              {...register("name", {
                required:
                  "Full name is required",
                minLength: {
                  value: 2,
                  message:
                    "Name must be at least 2 characters",
                },
              })}
            />

            {/* Email */}

            <InputField
              label="Email Address"
              type="email"
              placeholder="vikas@danceworld.com"
              icon={Mail}
              error={errors.email?.message}
              {...register("email", {
                required:
                  "Email address is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:
                    "Enter a valid email address",
                },
              })}
            />

            {/* Password - PUBLIC REGISTER ONLY */}

            {mode === "register" && (
              <InputField
                label="Password"
                type="password"
                placeholder="Enter password"
                icon={ShieldAlert}
                error={errors.password?.message}
                {...register("password", {
                  required:
                    "Password is required",
                  minLength: {
                    value: 8,
                    message:
                      "Password must be at least 8 characters",
                  },
                })}
              />
            )}

            {/* Mobile */}

            <InputField
              label="Mobile Number"
              type="tel"
              inputMode="numeric"
              placeholder="9876543212"
              icon={Phone}
              error={
                errors.mobileNumber?.message
              }
              {...register("mobileNumber", {
                required:
                  "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message:
                    "Enter a valid 10-digit mobile number",
                },
              })}
            />
          </div>

          {/* =====================================================
              BUSINESS DETAILS
          ===================================================== */}

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
              placeholder="Dance World"
              icon={Building2}
              error={
                errors.businessName?.message
              }
              {...register("businessName", {
                required:
                  "Business name is required",
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
                <span className="ml-1 text-destructive">
                  *
                </span>
              </label>

              <select
                {...register("businessType", {
                  required:
                    "Please select a business type",
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
                  ${errors.businessType
                    ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/10"
                    : "border-border focus:border-primary focus:ring-2 focus:ring-primary/10"
                  }
                `}
              >
                <option value="">
                  Choose business type...
                </option>

                {businessTypes.map((type) => (
                  <option
                    key={type.value}
                    value={type.value}
                  >
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

          {/* =====================================================
              SUBSCRIPTION PLAN
          ===================================================== */}

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
              <span className="ml-1 text-destructive">
                *
              </span>
            </label>

            <select
              {...register("planId", {
                required:
                  "Please select a subscription plan",
              })}
              disabled={plansLoading}
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
                ${errors.planId
                  ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/10"
                  : "border-border focus:border-primary focus:ring-2 focus:ring-primary/10"
                }
                ${plansLoading
                  ? "cursor-not-allowed opacity-60"
                  : ""
                }
              `}
            >
              <option value="">
                {plansLoading
                  ? "Loading plans..."
                  : "Choose subscription plan..."}
              </option>

              {plans.map((plan) => (
                <option
                  key={plan.id}
                  value={plan.id}
                >
                  {plan.name} - ₹
                  {Number(plan.price).toFixed(2)} -{" "}
                  {plan.durationInDays} Days
                </option>
              ))}
            </select>

            {/* Plan Validation Error */}

            {errors.planId && (
              <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
                <AlertCircle size={12} />
                {errors.planId.message}
              </p>
            )}

            {/* Plan API Error */}

            {plansError && (
              <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-destructive">
                <AlertCircle size={12} />
                Failed to load subscription plans.
              </p>
            )}

            {/* No Plans */}

            {!plansLoading &&
              !plansError &&
              plans.length === 0 && (
                <p className="mt-1.5 text-xs text-muted-foreground">
                  No subscription plans available.
                </p>
              )}
          </div>

          {/* =====================================================
              LOCATION & ADDRESS
          ===================================================== */}

          <div className="flex items-center gap-2 border-b border-border pb-3 pt-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin size={16} />
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Location & Address
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Address */}

            <div className="md:col-span-3">
              <InputField
                label="Street Address"
                placeholder="Bandra West"
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
              placeholder="400050"
              error={errors.pincode?.message}
              {...register("pincode", {
                pattern: {
                  value: /^[0-9]{6}$/,
                  message:
                    "Enter a valid 6-digit postal code",
                },
              })}
            />
          </div>

          {/* =====================================================
              PAYMENT INFO
          ===================================================== */}

          {mode === "register" ? (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
              <p className="text-sm font-medium text-primary">
                Complete your registration
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                After submitting the registration
                form, Razorpay checkout will open.
                Complete the payment to activate
                your account.
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Payment is not required for this
                admin.
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                The admin will be created and
                activated without payment.
              </p>
            </div>
          )}

          {/* =====================================================
              ACTION BUTTONS
          ===================================================== */}

          <div className="flex items-center justify-end gap-3 pt-1">

            {/* Cancel */}

            {onClose && (
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
            )}

            {/* Submit */}

            <Button
              type="submit"
              disabled={
                isSubmitting ||
                plansLoading ||
                plans.length === 0
              }
              isLoading={isSubmitting}
              loadingText={loadingText}
              icon={ArrowRight}
              iconPosition="right"
            >
              {buttonText}
            </Button>
          </div>
        </div>

        {/* =====================================================
            API ERROR
        ===================================================== */}

        {hasError && (
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
            <ShieldAlert
              size={18}
              className="mt-0.5 shrink-0"
            />

            <span>{errorMessage}</span>
          </div>
        )}

        {/* =====================================================
            SUCCESS MESSAGE
        ===================================================== */}

        {isSuccess && (
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
            {successMessage}
          </div>
        )}
      </form>
    </>
  );
}