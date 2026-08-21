"use client";

import React, { useState } from "react";
import {
  Users,
  Building2,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Activity,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import AdminModal from "@/components/modals/AdminModal";

const stats = [
  {
    title: "Total Revenue",
    value: "₹2,48,500",
    change: "+12.5%",
    isPositive: true,
    icon: CreditCard,
    desc: "vs last month",
  },
  {
    title: "Active Members",
    value: "1,248",
    change: "+8.2%",
    isPositive: true,
    icon: Users,
    desc: "vs last month",
  },
  {
    title: "Partner Gyms",
    value: "34",
    change: "+2 new",
    isPositive: true,
    icon: Building2,
    desc: "active locations",
  },
  {
    title: "Pending Dues",
    value: "₹18,200",
    change: "-4.1%",
    isPositive: false,
    icon: Activity,
    desc: "14 members overdue",
  },
];

const recentMembers = [
  {
    name: "Rohan Sharma",
    email: "rohan.s@gmail.com",
    plan: "Annual Pro",
    amount: "₹12,000",
    status: "Active",
    date: "Today, 2:45 PM",
  },
  {
    name: "Priya Patel",
    email: "priya.p@outlook.com",
    plan: "Quarterly",
    amount: "₹4,500",
    status: "Active",
    date: "Today, 11:20 AM",
  },
  {
    name: "Amit Verma",
    email: "amit.v@yahoo.com",
    plan: "Monthly",
    amount: "₹1,800",
    status: "Pending",
    date: "Yesterday",
  },
  {
    name: "Sneha Reddy",
    email: "sneha.r@gmail.com",
    plan: "Half-Yearly",
    amount: "₹7,500",
    status: "Active",
    date: "17 Aug 2026",
  },
];

const quickActions = [
  {
    title: "Register Admin",
    href: "/dashboard/admins",
    desc: "Add manager credentials",
  },
  {
    title: "Add Business",
    href: "/dashboard/businesses",
    desc: "Register a new branch",
  },
  {
    title: "View Reports",
    href: "/dashboard/settings",
    desc: "Download monthly metrics",
  },
];

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="space-y-8">
      {/* Top Welcome Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
            Welcome back, Alex 👋
          </h1>
          <p className="mt-1 text-xs text-black/60 sm:text-sm">
            Here is your gym network summary and activity updates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
          onClick={() => setIsModalOpen(true)}
          icon={Plus}
            text="Add Business"
            
            
          />
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition hover:bg-white/80"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-black/50">
                  {stat.title}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-extrabold text-black">
                  {stat.value}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-medium">
                  <span
                    className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-bold ${
                      stat.isPositive
                        ? "bg-emerald-500/10 text-emerald-700"
                        : "bg-rose-500/10 text-rose-700"
                    }`}
                  >
                    {stat.isPositive ? (
                      <ArrowUpRight size={12} />
                    ) : (
                      <ArrowDownRight size={12} />
                    )}
                    {stat.change}
                  </span>
                  <span className="text-black/50">{stat.desc}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Layout (Table + Quick Actions) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Registrations Table */}
        <div className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <div>
              <h2 className="text-base font-bold text-black">
                Recent Enrollments
              </h2>
              <p className="text-xs text-black/50">
                Latest member subscriptions across gyms
              </p>
            </div>
            <button
              type="button"
              className="rounded-lg p-1.5 text-black/50 hover:bg-black/5"
            >
              <MoreVertical size={16} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-black/10 text-black/50 uppercase tracking-wider">
                  <th className="py-3.5 pr-4 font-semibold">Member</th>
                  <th className="px-4 py-3.5 font-semibold">Plan</th>
                  <th className="px-4 py-3.5 font-semibold">Paid</th>
                  <th className="px-4 py-3.5 font-semibold">Status</th>
                  <th className="py-3.5 pl-4 text-right font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {recentMembers.map((member, i) => (
                  <tr key={i} className="hover:bg-black/2 transition">
                    <td className="py-3 pr-4">
                      <p className="font-bold text-black">{member.name}</p>
                      <p className="text-[11px] text-black/50">{member.email}</p>
                    </td>
                    <td className="px-4 py-3 font-medium text-black">
                      {member.plan}
                    </td>
                    <td className="px-4 py-3 font-bold text-black">
                      {member.amount}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          member.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-700"
                            : "bg-amber-500/10 text-amber-700"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="py-3 pl-4 text-right text-black/50">
                      {member.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Operations Sidebar */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm">
            <h2 className="text-base font-bold text-black">Quick Actions</h2>
            <p className="mt-0.5 text-xs text-black/50">
              Frequently used management tasks
            </p>

            <div className="mt-4 space-y-2.5">
              {quickActions.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group flex items-center justify-between rounded-xl border border-black/5 bg-secondary/50 p-3 transition hover:border-primary/20 hover:bg-white"
                >
                  <div>
                    <p className="text-xs font-bold text-black group-hover:text-primary">
                      {action.title}
                    </p>
                    <p className="text-[11px] text-black/50">{action.desc}</p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-black/40 transition group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Network Health Box */}
          <div className="rounded-2xl border border-primary/20 bg-primary p-5 text-white shadow-md shadow-primary/20">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} />
              <span className="text-xs font-bold tracking-wide uppercase">
                Network Status
              </span>
            </div>
            <p className="mt-3 text-lg font-bold">All 34 Gyms Synced</p>
            <p className="mt-1 text-xs text-white/80 leading-relaxed">
              Biometric check-ins and payment gateways are operating normally.
            </p>
          </div>
        </div>
      </div>
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="create"
        onSuccess={() => {
          console.log("Admin created successfully!");
        }}
      />
    </div>
  );
}