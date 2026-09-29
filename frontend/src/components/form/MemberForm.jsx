"use client";

import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useMembershipPlans } from "@/lib/hooks/useMembershipPlan";

const MemberForm = ({
  mode = "create",
  initialData = null,
  isLoading = false,
  onClose,
  onSubmit,
}) => {
  const isEditMode = mode === "edit";

  /*
   * ---------------------------------------------------------
   * MEMBERSHIP PLANS
   * ---------------------------------------------------------
   */
  const {
    data: membershipPlansResponse,
    isLoading: isMembershipPlansLoading,
    isError: isMembershipPlansError,
  } = useMembershipPlans({
    status: "ACTIVE",
  });

  /*
   * ---------------------------------------------------------
   * NORMALIZE MEMBERSHIP PLAN RESPONSE
   * ---------------------------------------------------------
   */
  const membershipPlans = useMemo(() => {
    const data = membershipPlansResponse?.data;

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.plans)) {
      return data.plans;
    }

    if (Array.isArray(membershipPlansResponse?.plans)) {
      return membershipPlansResponse.plans;
    }

    return [];
  }, [membershipPlansResponse]);

  /*
   * ---------------------------------------------------------
   * FORM
   * ---------------------------------------------------------
   */
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobileNumber: "",
      email: "",
      gender: "",
      dateOfBirth: "",
      address: "",
      city: "",
      state: "",
      pincode: "",

      membershipPlanId: "",
      paymentMethod: "",
    },
  });

  /*
   * ---------------------------------------------------------
   * RESET FORM FOR EDIT
   * ---------------------------------------------------------
   */
  useEffect(() => {
    if (isEditMode && initialData) {
      reset({
        name: initialData.name || "",
        mobileNumber: initialData.mobileNumber || "",
        email: initialData.email || "",
        gender: initialData.gender || "",
        dateOfBirth: initialData.dateOfBirth
          ? new Date(initialData.dateOfBirth)
              .toISOString()
              .split("T")[0]
          : "",
        address: initialData.address || "",
        city: initialData.city || "",
        state: initialData.state || "",
        pincode: initialData.pincode || "",

        membershipPlanId: "",
        paymentMethod: "",
      });
    }

    if (!isEditMode && !initialData) {
      reset({
        name: "",
        mobileNumber: "",
        email: "",
        gender: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        pincode: "",

        membershipPlanId: "",
        paymentMethod: "",
      });
    }
  }, [isEditMode, initialData, reset]);

  /*
   * ---------------------------------------------------------
   * WATCH MEMBERSHIP PLAN
   * ---------------------------------------------------------
   */
  const selectedPlanId = watch("membershipPlanId");

  const selectedPlan = useMemo(() => {
    return membershipPlans.find(
      (plan) => plan.id === selectedPlanId
    );
  }, [membershipPlans, selectedPlanId]);

  /*
   * ---------------------------------------------------------
   * FORM SUBMIT
   * ---------------------------------------------------------
   */
  const submitHandler = async (data) => {
    /*
     * EDIT MEMBER
     */
    if (isEditMode) {
      const payload = {
        name: data.name.trim(),
        mobileNumber: data.mobileNumber.trim(),
        email: data.email?.trim() || null,
        gender: data.gender || null,
        dateOfBirth: data.dateOfBirth || null,
        address: data.address?.trim() || null,
        city: data.city?.trim() || null,
        state: data.state?.trim() || null,
        pincode: data.pincode?.trim() || null,
      };

      await onSubmit?.(payload);
      return;
    }

    /*
     * CREATE MEMBER
     */
    if (!data.membershipPlanId) {
      return;
    }

    if (!data.paymentMethod) {
      return;
    }

    const payload = {
      name: data.name.trim(),
      mobileNumber: data.mobileNumber.trim(),
      email: data.email?.trim() || null,
      gender: data.gender || null,
      dateOfBirth: data.dateOfBirth || null,
      address: data.address?.trim() || null,
      city: data.city?.trim() || null,
      state: data.state?.trim() || null,
      pincode: data.pincode?.trim() || null,

      membershipPlanId: data.membershipPlanId,

      payment: {
        amount: selectedPlan
          ? Number(selectedPlan.price)
          : 0,
        paymentMethod: data.paymentMethod,
      },
    };

    await onSubmit?.(payload);
  };

  /*
   * ---------------------------------------------------------
   * INPUT CLASS
   * ---------------------------------------------------------
   */
  const inputClass = `
    w-full
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
    disabled:cursor-not-allowed
    disabled:opacity-60
  `;

  const labelClass =
    "mb-1.5 block text-sm font-medium text-foreground";

  const errorClass =
    "mt-1 text-xs text-red-500";

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6"
    >
      {/* =====================================================
          PERSONAL INFORMATION
      ====================================================== */}
      <div>
        <div className="mb-4">
          <h3 className="text-base font-semibold text-foreground">
            Personal Information
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Enter the member's basic information.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* NAME */}
          <div>
            <label className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter member name"
              disabled={isLoading}
              {...register("name", {
                required: "Name is required",
                validate: (value) =>
                  value.trim().length >= 2 ||
                  "Name must contain at least 2 characters",
              })}
              className={inputClass}
            />

            {errors.name && (
              <p className={errorClass}>
                {errors.name.message}
              </p>
            )}
          </div>

          {/* MOBILE */}
          <div>
            <label className={labelClass}>
              Mobile Number{" "}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              maxLength={10}
              disabled={isLoading}
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message:
                    "Enter a valid 10-digit mobile number",
                },
              })}
              className={inputClass}
            />

            {errors.mobileNumber && (
              <p className={errorClass}>
                {errors.mobileNumber.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className={labelClass}>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              disabled={isLoading}
              {...register("email", {
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={inputClass}
            />

            {errors.email && (
              <p className={errorClass}>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* GENDER */}
          <div>
            <label className={labelClass}>
              Gender
            </label>

            <select
              disabled={isLoading}
              {...register("gender")}
              className={inputClass}
            >
              <option value="">Select gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {/* DATE OF BIRTH */}
          <div>
            <label className={labelClass}>
              Date of Birth
            </label>

            <input
              type="date"
              disabled={isLoading}
              {...register("dateOfBirth")}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          ADDRESS INFORMATION
      ====================================================== */}
      <div>
        <div className="mb-4">
          <h3 className="text-base font-semibold text-foreground">
            Address Information
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Enter the member's address details.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* ADDRESS */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Address
            </label>

            <textarea
              rows={3}
              placeholder="Enter full address"
              disabled={isLoading}
              {...register("address")}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* CITY */}
          <div>
            <label className={labelClass}>
              City
            </label>

            <input
              type="text"
              placeholder="Enter city"
              disabled={isLoading}
              {...register("city")}
              className={inputClass}
            />
          </div>

          {/* STATE */}
          <div>
            <label className={labelClass}>
              State
            </label>

            <input
              type="text"
              placeholder="Enter state"
              disabled={isLoading}
              {...register("state")}
              className={inputClass}
            />
          </div>

          {/* PINCODE */}
          <div>
            <label className={labelClass}>
              Pincode
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter pincode"
              disabled={isLoading}
              {...register("pincode", {
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Enter a valid 6-digit pincode",
                },
              })}
              className={inputClass}
            />

            {errors.pincode && (
              <p className={errorClass}>
                {errors.pincode.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          MEMBERSHIP & PAYMENT
      ====================================================== */}
      {!isEditMode && (
        <div>
          <div className="mb-4">
            <h3 className="text-base font-semibold text-foreground">
              Membership & Payment
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Select a membership plan and record the payment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* MEMBERSHIP PLAN */}
            <div>
              <label className={labelClass}>
                Membership Plan{" "}
                <span className="text-red-500">*</span>
              </label>

              <select
                disabled={
                  isLoading ||
                  isMembershipPlansLoading
                }
                {...register("membershipPlanId", {
                  required:
                    "Membership plan is required",
                })}
                className={inputClass}
              >
                <option value="">
                  {isMembershipPlansLoading
                    ? "Loading membership plans..."
                    : "Select membership plan"}
                </option>

                {membershipPlans.map((plan) => (
                  <option
                    key={plan.id}
                    value={plan.id}
                  >
                    {plan.name} - ₹
                    {Number(plan.price).toFixed(2)}
                  </option>
                ))}
              </select>

              {errors.membershipPlanId && (
                <p className={errorClass}>
                  {errors.membershipPlanId.message}
                </p>
              )}

              {isMembershipPlansError && (
                <p className={errorClass}>
                  Failed to load membership plans.
                </p>
              )}

              {!isMembershipPlansLoading &&
                !isMembershipPlansError &&
                membershipPlans.length === 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    No active membership plans available.
                  </p>
                )}
            </div>

            {/* PAYMENT METHOD */}
            <div>
              <label className={labelClass}>
                Payment Method{" "}
                <span className="text-red-500">*</span>
              </label>

              <select
                disabled={isLoading}
                {...register("paymentMethod", {
                  required:
                    "Payment method is required",
                })}
                className={inputClass}
              >
                <option value="">
                  Select payment method
                </option>

                <option value="CASH">
                  Cash
                </option>

                <option value="UPI">
                  UPI
                </option>

                <option value="CARD">
                  Card
                </option>

                <option value="BANK_TRANSFER">
                  Bank Transfer
                </option>

                <option value="ONLINE">
                  Online
                </option>
              </select>

              {errors.paymentMethod && (
                <p className={errorClass}>
                  {errors.paymentMethod.message}
                </p>
              )}
            </div>

            {/* PLAN PRICE */}
            <div>
              <label className={labelClass}>
                Payment Amount
              </label>

              <div
                className={`${inputClass} flex items-center bg-muted`}
              >
                ₹
                {selectedPlan
                  ? Number(
                      selectedPlan.price
                    ).toFixed(2)
                  : "0.00"}
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                Amount is automatically taken from
                the selected membership plan.
              </p>
            </div>

            {/* PLAN DURATION */}
            <div>
              <label className={labelClass}>
                Plan Duration
              </label>

              <div
                className={`${inputClass} flex items-center bg-muted`}
              >
                {selectedPlan
                  ? `${selectedPlan.durationInDays} days`
                  : "Select a plan"}
              </div>
            </div>

            {/* PLAN DESCRIPTION */}
            {selectedPlan?.description && (
              <div className="md:col-span-2">
                <label className={labelClass}>
                  Plan Description
                </label>

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    bg-muted
                    px-3
                    py-2.5
                    text-sm
                    text-muted-foreground
                  "
                >
                  {selectedPlan.description}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          ACTION BUTTONS
      ====================================================== */}
      <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="
            rounded-lg
            border
            border-border
            px-5
            py-2.5
            text-sm
            font-medium
            text-foreground
            transition
            hover:bg-secondary
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={
            isLoading ||
            (!isEditMode &&
              isMembershipPlansLoading)
          }
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-primary
            px-5
            py-2.5
            text-sm
            font-medium
            text-primary-foreground
            transition
            hover:bg-primary/90
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isLoading && (
            <Loader2
              size={16}
              className="animate-spin"
            />
          )}

          {isEditMode
            ? "Update Member"
            : "Create Member"}
        </button>
      </div>
    </form>
  );
};

export default MemberForm;