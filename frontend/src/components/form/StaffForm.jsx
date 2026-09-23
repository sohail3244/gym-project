"use client";

import React, { useEffect, useState } from "react";

const STAFF_TYPES = [
  { value: "TRAINER", label: "Trainer" },
  { value: "RECEPTIONIST", label: "Receptionist" },
  { value: "CLEANER", label: "Cleaner" },
  { value: "MANAGER", label: "Manager" },
  { value: "ACCOUNTANT", label: "Accountant" },
  { value: "SECURITY", label: "Security" },
  { value: "OTHER", label: "Other" },
];

const DEFAULT_FORM = {
  name: "",
  username: "",
  email: "",
  mobileNumber: "",
  password: "",
  staffType: "TRAINER",
  designation: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

export default function StaffForm({
  mode = "create",
  initialData = null,
  onSubmit,
  onClose,
  isLoading = false,
}) {
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        name: initialData.name || "",
        username: initialData.username || "",
        email: initialData.email || "",
        mobileNumber: initialData.mobileNumber || "",
        password: "",
        staffType: initialData.staffType || "TRAINER",
        designation: initialData.designation || "",
        address: initialData.address || "",
        city: initialData.city || "",
        state: initialData.state || "",
        pincode: initialData.pincode || "",
      });
    } else {
      setFormData(DEFAULT_FORM);
    }

    setErrors({});
  }, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Staff name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    }

    if (mode === "create" && !formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (
      mode === "create" &&
      formData.password &&
      formData.password.length < 6
    ) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.staffType) {
      newErrors.staffType = "Staff type is required";
    }

    if (
      formData.pincode &&
      !/^[0-9]{6}$/.test(formData.pincode)
    ) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      name: formData.name.trim(),
      username: formData.username.trim(),
      email: formData.email.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      password: formData.password,
      staffType: formData.staffType,
      designation: formData.designation.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      state: formData.state.trim(),
      pincode: formData.pincode.trim(),
    };

    // Edit mode mein empty password send nahi karna
    if (mode === "edit" && !payload.password) {
      delete payload.password;
    }

    await onSubmit(payload);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10 ${
      errors[field]
        ? "border-destructive"
        : "border-border"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div>
        <h3 className="text-sm font-semibold text-foreground">
          Basic Information
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Enter staff account and personal details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Rahul Sharma"
            className={inputClass("name")}
            disabled={isLoading}
          />

          {errors.name && (
            <p className="mt-1 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        {/* Staff Type */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Staff Type <span className="text-destructive">*</span>
          </label>

          <select
            name="staffType"
            value={formData.staffType}
            onChange={handleChange}
            className={inputClass("staffType")}
            disabled={isLoading}
          >
            {STAFF_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>

          {errors.staffType && (
            <p className="mt-1 text-xs text-destructive">
              {errors.staffType}
            </p>
          )}
        </div>

        {/* Designation */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Designation
          </label>

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Senior Gym Trainer"
            className={inputClass("designation")}
            disabled={isLoading}
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Mobile Number <span className="text-destructive">*</span>
          </label>

          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength={10}
            className={inputClass("mobileNumber")}
            disabled={isLoading}
          />

          {errors.mobileNumber && (
            <p className="mt-1 text-xs text-destructive">
              {errors.mobileNumber}
            </p>
          )}
        </div>

        {/* Username */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Username <span className="text-destructive">*</span>
          </label>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="rahul.trainer"
            className={inputClass("username")}
            disabled={isLoading}
          />

          {errors.username && (
            <p className="mt-1 text-xs text-destructive">
              {errors.username}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rahul.trainer@example.com"
            className={inputClass("email")}
            disabled={isLoading}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Password{" "}
            {mode === "create" && (
              <span className="text-destructive">*</span>
            )}
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={
              mode === "edit"
                ? "Leave blank to keep current password"
                : "Rahul@12345"
            }
            className={inputClass("password")}
            disabled={isLoading}
          />

          {errors.password && (
            <p className="mt-1 text-xs text-destructive">
              {errors.password}
            </p>
          )}
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-sm font-semibold text-foreground">
          Address Information
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Enter staff location details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Address */}
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Address
          </label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Vaishali Nagar"
            rows={3}
            className={inputClass("address")}
            disabled={isLoading}
          />
        </div>

        {/* City */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Jaipur"
            className={inputClass("city")}
            disabled={isLoading}
          />
        </div>

        {/* State */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Rajasthan"
            className={inputClass("state")}
            disabled={isLoading}
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Pincode
          </label>

          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="302021"
            maxLength={6}
            className={inputClass("pincode")}
            disabled={isLoading}
          />

          {errors.pincode && (
            <p className="mt-1 text-xs text-destructive">
              {errors.pincode}
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading
            ? "Saving..."
            : mode === "edit"
            ? "Update Staff"
            : "Create Staff"}
        </button>
      </div>
    </form>
  );
}