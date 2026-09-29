"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Shield,
  Building2,
  MapPin,
  BriefcaseBusiness,
  Save,
  Pencil,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  useAdminProfile,
  useAdminBusiness,
  useUpdateAdminProfile,
  useUpdateAdminBusiness,
} from "@/lib/hooks/useAdminProfile";

export default function Page() {
  /* ---------------------------------------------------------------------- /
/ API HOOKS /
/ ---------------------------------------------------------------------- */

  const {
    data: profileResponse,
    isLoading: profileLoading,
    isError: profileError,
  } = useAdminProfile();

  const {
    data: businessResponse,
    isLoading: businessLoading,
    isError: businessError,
  } = useAdminBusiness();

  const updateProfile = useUpdateAdminProfile();
  const updateBusiness = useUpdateAdminBusiness();

  /* ---------------------------------------------------------------------- /
/ STATE /
/ ---------------------------------------------------------------------- */

  const [editingProfile, setEditingProfile] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState(false);

  const [profileForm, setProfileForm] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [businessForm, setBusinessForm] = useState({
    businessName: "",
    businessType: "",
    mobileNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  /* ---------------------------------------------------------------------- /
/ RESPONSE DATA /
/ ---------------------------------------------------------------------- */

  const profile = profileResponse?.data;
  const business = businessResponse?.data;

  /* ---------------------------------------------------------------------- /
/ START PROFILE EDIT /
/ ---------------------------------------------------------------------- */

  const handleEditProfile = () => {
    setProfileForm({
      name: profile?.name || "",
      username: profile?.username || "",
      email: profile?.email || "",
    });

    setEditingProfile(true);
  };

  /* ---------------------------------------------------------------------- /
/ START BUSINESS EDIT /
/ ---------------------------------------------------------------------- */

  const handleEditBusiness = () => {
    setBusinessForm({
      businessName: business?.businessName || "",
      businessType: business?.businessType || "",
      mobileNumber: business?.mobileNumber || "",
      email: business?.email || "",
      address: business?.address || "",
      city: business?.city || "",
      state: business?.state || "",
      pincode: business?.pincode || "",
    });

    setEditingBusiness(true);
  };

  /* ---------------------------------------------------------------------- /
/ PROFILE CHANGE /
/ ---------------------------------------------------------------------- */

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfileForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* ---------------------------------------------------------------------- /
/ BUSINESS CHANGE /
/ ---------------------------------------------------------------------- */

  const handleBusinessChange = (event) => {
    const { name, value } = event.target;

    setBusinessForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* ---------------------------------------------------------------------- /
/ UPDATE PROFILE /
/ ---------------------------------------------------------------------- */

  const handleProfileSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateProfile.mutateAsync(profileForm);
      setEditingProfile(false);
    } catch (error) {
      console.error("Update profile error:", error);
    }
  };

  /* ---------------------------------------------------------------------- /
/ UPDATE BUSINESS /
/ ---------------------------------------------------------------------- */

  const handleBusinessSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateBusiness.mutateAsync(businessForm);
      setEditingBusiness(false);
    } catch (error) {
      console.error("Update business error:", error);
    }
  };

  /* ---------------------------------------------------------------------- /
/ LOADING /
/ ---------------------------------------------------------------------- */

  if (profileLoading || businessLoading) {
    return (
      <main className="flex min-h-125 items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 size={32} className="animate-spin text-primary" />

          <p className="text-sm text-muted-foreground">Loading profile...</p>
        </div>
      </main>
    );
  }

  /* ---------------------------------------------------------------------- /
/ ERROR /
/ ---------------------------------------------------------------------- */

  if (profileError || businessError) {
    return (
      <main className="p-6">
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
          <AlertCircle size={22} />

          <div>
            <p className="font-semibold">Failed to load profile</p>

            <p className="mt-1 text-sm">
              Please refresh the page and try again.
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------------------------------------------------------------- /
/ PAGE /
/ ---------------------------------------------------------------------- */

  return (
    <main className="space-y-6 p-6">
      {/* ================================================================== /}
{/ PAGE HEADER /}
{/ ================================================================== */}

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Admin Profile
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your personal and business information.
        </p>
      </div>

      {/* ================================================================== */}
      {/* PROFILE CARD                                                        */}
      {/* ================================================================== */}

      <section className="rounded-2xl border border-border bg-card shadow-sm">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <User size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-foreground">
                Personal Information
              </h2>

              <p className="text-xs text-muted-foreground">
                Your admin account information
              </p>
            </div>
          </div>

          {!editingProfile && (
            <button
              type="button"
              onClick={handleEditProfile}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              <Pencil size={16} />
              Edit
            </button>
          )}
        </div>

        {/* Content */}

        {editingProfile ? (
          <form onSubmit={handleProfileSubmit} className="space-y-5 p-5">
            {/* Name */}

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  name="name"
                  value={profileForm.name}
                  onChange={handleProfileChange}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary"
                  placeholder="Enter name"
                />
              </div>
            </div>

            {/* Username */}

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Username
              </label>

              <div className="relative">
                <Shield
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  name="username"
                  value={profileForm.username}
                  onChange={handleProfileChange}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary"
                  placeholder="Enter username"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="email"
                  name="email"
                  value={profileForm.email}
                  onChange={handleProfileChange}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingProfile(false)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={updateProfile.isPending}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updateProfile.isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
            {/* Name */}

            <InfoItem icon={User} label="Name" value={profile?.name} />

            {/* Username */}

            <InfoItem
              icon={Shield}
              label="Username"
              value={profile?.username}
            />

            {/* Email */}

            <InfoItem icon={Mail} label="Email" value={profile?.email} />

            {/* Role */}

            <InfoItem icon={Shield} label="Role" value={profile?.role} />

            {/* Status */}

            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                Status
              </p>

              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    profile?.status === "ACTIVE"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <CheckCircle2 size={13} />

                  {profile?.status || "N/A"}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ================================================================== */}
      {/* BUSINESS CARD                                                       */}
      {/* ================================================================== */}

      <section className="rounded-2xl border border-border bg-card shadow-sm">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Building2 size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-foreground">
                Business Information
              </h2>

              <p className="text-xs text-muted-foreground">
                Your registered business details
              </p>
            </div>
          </div>

          {!editingBusiness && (
            <button
              type="button"
              onClick={handleEditBusiness}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              <Pencil size={16} />
              Edit
            </button>
          )}
        </div>

        {/* Business Content */}

        {editingBusiness ? (
          <form onSubmit={handleBusinessSubmit} className="space-y-5 p-5">
            {/* Business Name */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Business Name
              </label>

              <div className="relative">
                <Building2
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  name="businessName"
                  value={businessForm.businessName}
                  onChange={handleBusinessChange}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
                  placeholder="Business name"
                />
              </div>
            </div>

            {/* Business Type */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Business Type
              </label>

              <div className="relative">
                <BriefcaseBusiness
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="text"
                  name="businessType"
                  value={businessForm.businessType}
                  onChange={handleBusinessChange}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
                  placeholder="Business type"
                />
              </div>
            </div>

            {/* Mobile */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Mobile Number
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="tel"
                  name="mobileNumber"
                  value={businessForm.mobileNumber}
                  onChange={handleBusinessChange}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
                  placeholder="Mobile number"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Business Email
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  type="email"
                  name="email"
                  value={businessForm.email}
                  onChange={handleBusinessChange}
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
                  placeholder="Business email"
                />
              </div>
            </div>

            {/* Address */}

            <div>
              <label className="mb-2 block text-sm font-medium">Address</label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-3 top-3 text-muted-foreground"
                />

                <textarea
                  name="address"
                  value={businessForm.address}
                  onChange={handleBusinessChange}
                  rows={3}
                  className="w-full resize-none rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
                  placeholder="Business address"
                />
              </div>
            </div>

            {/* City / State / Pincode */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium">City</label>

                <input
                  type="text"
                  name="city"
                  value={businessForm.city}
                  onChange={handleBusinessChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                  placeholder="City"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">State</label>

                <input
                  type="text"
                  name="state"
                  value={businessForm.state}
                  onChange={handleBusinessChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                  placeholder="State"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={businessForm.pincode}
                  onChange={handleBusinessChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                  placeholder="Pincode"
                />
              </div>
            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingBusiness(false)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={updateBusiness.isPending}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updateBusiness.isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
            <InfoItem
              icon={Building2}
              label="Business Name"
              value={business?.businessName}
            />

            <InfoItem
              icon={BriefcaseBusiness}
              label="Business Type"
              value={business?.businessType}
            />

            <InfoItem
              icon={Phone}
              label="Mobile Number"
              value={business?.mobileNumber}
            />

            <InfoItem
              icon={Mail}
              label="Business Email"
              value={business?.email}
            />

            <InfoItem icon={MapPin} label="City" value={business?.city} />

            <InfoItem icon={MapPin} label="State" value={business?.state} />

            <InfoItem icon={MapPin} label="Pincode" value={business?.pincode} />

            <div className="md:col-span-2 xl:col-span-3">
              <InfoItem
                icon={MapPin}
                label="Address"
                value={business?.address}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- /
/ Reusable Info Item /
/ -------------------------------------------------------------------------- */

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-muted-foreground">{label}</p>

      <div className="flex min-h-10.5 items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5">
        <Icon size={17} className="shrink-0 text-muted-foreground" />

        <p className="break-all text-sm font-medium text-foreground">
          {value || "Not available"}
        </p>
      </div>
    </div>
  );
}
