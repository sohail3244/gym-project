"use client";

import React, { useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Building2,
  MapPin,
  Phone,
  Mail,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import Button from "@/components/ui/Button";
import AdminModal from "@/components/modals/AdminModal";
import AdminTable from "@/components/table/AdminTable";

// Dummy Data
const businesses = [
  {
    id: 1,
    name: "FitZone Gym",
    email: "contact@fitzone.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, New York, NY 10001",
    type: "Gym",
    status: "Active",
    members: 234,
    joined: "Jan 15, 2024",
    revenue: "$12,450",
    manager: "John Doe",
  },
  {
    id: 2,
    name: "PowerHouse Fitness",
    email: "info@powerhouse.com",
    phone: "+1 234 567 8901",
    address: "456 Oak Ave, Los Angeles, CA 90001",
    type: "Gym",
    status: "Active",
    members: 189,
    joined: "Mar 22, 2024",
    revenue: "$8,920",
    manager: "Jane Smith",
  },
  {
    id: 3,
    name: "Yoga Wellness Center",
    email: "hello@yogawellness.com",
    phone: "+1 234 567 8902",
    address: "789 Pine St, Chicago, IL 60601",
    type: "Wellness",
    status: "Pending",
    members: 45,
    joined: "Jun 10, 2024",
    revenue: "$3,200",
    manager: "Mike Johnson",
  },
  {
    id: 4,
    name: "Iron Paradise Gym",
    email: "info@ironparadise.com",
    phone: "+1 234 567 8903",
    address: "321 Elm Blvd, Miami, FL 33101",
    type: "Gym",
    status: "Active",
    members: 312,
    joined: "Feb 5, 2024",
    revenue: "$15,800",
    manager: "Sarah Wilson",
  },
  {
    id: 5,
    name: "CrossFit Arena",
    email: "info@crossfitarena.com",
    phone: "+1 234 567 8904",
    address: "654 Maple Dr, Austin, TX 73301",
    type: "CrossFit",
    status: "Inactive",
    members: 78,
    joined: "Aug 1, 2024",
    revenue: "$4,100",
    manager: "Tom Brown",
  },
];

export default function BusinessPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Filter businesses
  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || business.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Stats
  const totalBusinesses = businesses.length;
  const activeBusinesses = businesses.filter(
    (b) => b.status === "Active",
  ).length;
  const pendingBusinesses = businesses.filter(
    (b) => b.status === "Pending",
  ).length;
  const inactiveBusinesses = businesses.filter(
    (b) => b.status === "Inactive",
  ).length;

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-200";
      case "Pending":
        return "bg-amber-500/10 text-amber-600 border-amber-200";
      case "Inactive":
        return "bg-rose-500/10 text-rose-600 border-rose-200";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <CheckCircle size={14} className="text-emerald-600" />;
      case "Pending":
        return <Clock size={14} className="text-amber-600" />;
      case "Inactive":
        return <XCircle size={14} className="text-rose-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Business Directory
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage all registered gym businesses
          </p>
        </div>
        <Button
  text="Add New"
  icon={Plus}
  iconPosition="left"
  onClick={() => setIsAdminModalOpen(true)}
/>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Total
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {totalBusinesses}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-500" />
            <span className="text-xs font-medium text-muted-foreground">
              Active
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {activeBusinesses}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-amber-500" />
            <span className="text-xs font-medium text-muted-foreground">
              Pending
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {pendingBusinesses}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <XCircle size={16} className="text-rose-500" />
            <span className="text-xs font-medium text-muted-foreground">
              Inactive
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {inactiveBusinesses}
          </p>
        </div>
      </div>

     

      {/* Table */}
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
       <AdminTable/>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl mx-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-600 mb-4">
                <Trash2 size={32} />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Delete Business
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Are you sure you want to delete{" "}
                <strong className="text-foreground">
                  {selectedBusiness?.name}
                </strong>
                ? This action cannot be undone.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsDeleteModalOpen(false);
                    setSelectedBusiness(null);
                  }}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle delete logic here
                    setIsDeleteModalOpen(false);
                    setSelectedBusiness(null);
                  }}
                  className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 transition"
                >
                  Delete Business
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Business Modal */}
      {isViewModalOpen && selectedBusiness && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl bg-card p-6 shadow-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">
                Business Details
              </h2>
              <button
                onClick={() => {
                  setIsViewModalOpen(false);
                  setSelectedBusiness(null);
                }}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary transition"
              >
                <XCircle size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {selectedBusiness.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedBusiness.type}
                  </p>
                </div>
                <span
                  className={`ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(selectedBusiness.status)}`}
                >
                  {getStatusIcon(selectedBusiness.status)}
                  {selectedBusiness.status}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {selectedBusiness.email}
                  </p>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {selectedBusiness.phone}
                  </p>
                </div>
                <div className="sm:col-span-2 rounded-lg border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Address
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {selectedBusiness.address}
                  </p>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Manager
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {selectedBusiness.manager}
                  </p>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Total Members
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {selectedBusiness.members}
                  </p>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Revenue
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {selectedBusiness.revenue}
                  </p>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Joined
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {selectedBusiness.joined}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <AdminModal
  isOpen={isAdminModalOpen}
  onClose={() => setIsAdminModalOpen(false)}
  mode="create"
  onSuccess={() => {
    // Admin successfully created
    // Yahan admin list refresh kar sakte ho
  }}
/>
    </div>
  );
}
