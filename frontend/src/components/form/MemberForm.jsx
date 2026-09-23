"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Save,
  X,
} from "lucide-react";

const DEFAULT_VALUES = {
  name: "",
  mobileNumber: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

export default function MemberForm({
  mode = "create",
  initialData = null,
  onSubmit,
  onClose,
  isLoading = false,
}) {
  const [formData, setFormData] = useState(DEFAULT_VALUES);
  const [errors, setErrors] = useState({});

  const isEditMode = mode === "edit";

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        mobileNumber: initialData.mobileNumber || "",
        email: initialData.email || "",
        gender: initialData.gender || "",
        dateOfBirth: initialData.dateOfBirth
          ? String(initialData.dateOfBirth).slice(0, 10)
          : "",
        address: initialData.address || "",
        city: initialData.city || "",
        state: initialData.state || "",
        pincode: initialData.pincode || "",
      });
    } else {
      setFormData(DEFAULT_VALUES);
    }

    setErrors({});
  }, [initialData, mode]);

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
      newErrors.name = "Name is required";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10 digit mobile number";
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6 digit pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      name: formData.name.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      email: formData.email.trim(),
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      address: formData.address.trim(),
      city: formData.city.trim(),
      state: formData.state.trim(),
      pincode: formData.pincode.trim(),
    };

    await onSubmit?.(payload);
  };

  const inputClass = (field) => `
    w-full rounded-lg border px-3 py-2.5
    text-sm outline-none transition
    bg-background text-foreground
    ${
      errors[field]
        ? "border-destructive focus:ring-2 focus:ring-destructive/20"
        : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
    }
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <User size={18} className="text-primary" />

          <h3 className="text-sm font-semibold text-foreground">
            Personal Information
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className={inputClass("name")}
              disabled={isLoading}
            />

            {errors.name && (
              <p className="mt-1 text-xs text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Mobile Number <span className="text-destructive">*</span>
            </label>

            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="9876543210"
                maxLength={10}
                className={`${inputClass("mobileNumber")} pl-9`}
                disabled={isLoading}
              />
            </div>

            {errors.mobileNumber && (
              <p className="mt-1 text-xs text-destructive">
                {errors.mobileNumber}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Email
            </label>

            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@gmail.com"
                className={`${inputClass("email")} pl-9`}
                disabled={isLoading}
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Gender <span className="text-destructive">*</span>
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={inputClass("gender")}
              disabled={isLoading}
            >
              <option value="">Select gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>

            {errors.gender && (
              <p className="mt-1 text-xs text-destructive">
                {errors.gender}
              </p>
            )}
          </div>

          {/* DOB */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Date of Birth <span className="text-destructive">*</span>
            </label>

            <div className="relative">
              <Calendar
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`${inputClass("dateOfBirth")} pl-9`}
                disabled={isLoading}
              />
            </div>

            {errors.dateOfBirth && (
              <p className="mt-1 text-xs text-destructive">
                {errors.dateOfBirth}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <MapPin size={18} className="text-primary" />

          <h3 className="text-sm font-semibold text-foreground">
            Address Information
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium">
              Address <span className="text-destructive">*</span>
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows={3}
              className={`${inputClass("address")} resize-none`}
              disabled={isLoading}
            />

            {errors.address && (
              <p className="mt-1 text-xs text-destructive">
                {errors.address}
              </p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              City <span className="text-destructive">*</span>
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Mumbai"
              className={inputClass("city")}
              disabled={isLoading}
            />

            {errors.city && (
              <p className="mt-1 text-xs text-destructive">
                {errors.city}
              </p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              State <span className="text-destructive">*</span>
            </label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Maharashtra"
              className={inputClass("state")}
              disabled={isLoading}
            />

            {errors.state && (
              <p className="mt-1 text-xs text-destructive">
                {errors.state}
              </p>
            )}
          </div>

          {/* Pincode */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Pincode <span className="text-destructive">*</span>
            </label>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="400058"
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
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="
            inline-flex items-center gap-2 rounded-lg
            border border-border px-4 py-2.5
            text-sm font-medium transition
            hover:bg-secondary
            disabled:cursor-not-allowed disabled:opacity-50
          "
        >
          <X size={16} />
          Cancel
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="
            inline-flex items-center gap-2 rounded-lg
            bg-primary px-5 py-2.5
            text-sm font-medium text-primary-foreground
            transition hover:bg-primary/90
            disabled:cursor-not-allowed disabled:opacity-50
          "
        >
          <Save size={16} />

          {isLoading
            ? "Saving..."
            : isEditMode
              ? "Update Member"
              : "Create Member"}
        </button>
      </div>
    </form>
  );
}