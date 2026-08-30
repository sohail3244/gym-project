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
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import AdminModal from "@/components/modals/AdminModal";

// Dummy Data
const stats = [
  {
    title: "OVERVIEW",
    value: "$1,250.00",
    change: "+12.5%",
    isPositive: true,
    icon: CreditCard,
    desc: "Trending up this month",
  },
  {
    title: "MEMBERS",
    value: "1,234",
    change: "-20%",
    isPositive: false,
    icon: Users,
    desc: "Down 20% this period",
    subtext: "Acquisition needs attention",
  },
  {
    title: "Businesses",
    value: "40,678",
    change: "+12.5%",
    isPositive: true,
    icon: Activity,
    desc: "Strong user retention",
    subtext: "Engagement exceeds targets",
  },
  {
    title: "Total Revenue",
    value: "4.0%",
    change: "Steady",
    isPositive: true,
    icon: TrendingUp,
    desc: "Steady performance increase",
    subtext: "Meets growth projections",
  },
];

// Dummy data for chart with different values for different periods
const chartDataByPeriod = {
  "3months": [
    { day: "Jun 24", value: 65 },
    { day: "Jun 25", value: 45 },
    { day: "Jun 26", value: 85 },
    { day: "Jun 27", value: 70 },
    { day: "Jun 28", value: 55 },
    { day: "Jun 29", value: 90 },
    { day: "Jun 30", value: 75 },
  ],
  "30days": [
    { day: "May 25", value: 50 },
    { day: "May 28", value: 60 },
    { day: "Jun 1", value: 75 },
    { day: "Jun 5", value: 80 },
    { day: "Jun 10", value: 65 },
    { day: "Jun 15", value: 55 },
    { day: "Jun 20", value: 70 },
    { day: "Jun 25", value: 85 },
    { day: "Jun 30", value: 90 },
  ],
  "7days": [
    { day: "Jun 24", value: 65 },
    { day: "Jun 25", value: 45 },
    { day: "Jun 26", value: 85 },
    { day: "Jun 27", value: 70 },
    { day: "Jun 28", value: 55 },
    { day: "Jun 29", value: 90 },
    { day: "Jun 30", value: 75 },
  ],
};

// Dummy data for recent enrollments
const recentMembers = [
  {
    name: "Rohan Sharma",
    email: "rohan.s@gmail.com",
    plan: "Annual Pro",
    amount: "£12,000",
    status: "Active",
    date: "Today, 2:45 PM",
  },
  {
    name: "Priya Patel",
    email: "priya.p@outlook.com",
    plan: "Quarterly",
    amount: "£4,500",
    status: "Active",
    date: "Today, 11:20 AM",
  },
  {
    name: "Amit Verma",
    email: "amit.v@yahoo.com",
    plan: "Monthly",
    amount: "£1,800",
    status: "Pending",
    date: "Yesterday",
  },
  {
    name: "Sneha Reddy",
    email: "sneha.r@gmail.com",
    plan: "Half-Yearly",
    amount: "£7,500",
    status: "Active",
    date: "17 Aug 2026",
  },
];

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePeriod, setActivePeriod] = useState("3months");
  
  // Get chart data based on active period
  const chartData = chartDataByPeriod[activePeriod] || chartDataByPeriod["3months"];
  
  // Calculate max value for chart
  const maxValue = Math.max(...chartData.map(item => item.value));
  
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Good morning, Alex!
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Here's what's happening with your gym network today.
        </p>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {stat.title && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {stat.title}
                    </span>
                  )}
                  <h3 className="mt-1 text-2xl font-bold text-foreground">
                    {stat.value}
                  </h3>
                </div>
                {stat.title && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                    <Icon size={20} />
                  </div>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    stat.isPositive
                      ? "bg-emerald-500/10 text-emerald-600"
                      : "bg-rose-500/10 text-rose-600"
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight size={12} />
                  ) : (
                    <ArrowDownRight size={12} />
                  )}
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">{stat.desc}</span>
              </div>
              
              {stat.subtext && (
                <p className="mt-1 text-xs text-muted-foreground">{stat.subtext}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Total Visitors Chart */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        {/* Chart Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-foreground">Total Visitors</h2>
            <p className="text-xs text-muted-foreground">
              Total for the last {activePeriod === "3months" ? "3 months" : activePeriod === "30days" ? "30 days" : "7 days"}
            </p>
          </div>
          
          {/* Time Period Filter */}
          <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary/30 p-1">
            <button
              onClick={() => setActivePeriod("3months")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                activePeriod === "3months"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              Last 3 months
            </button>
            <button
              onClick={() => setActivePeriod("30days")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                activePeriod === "30days"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              Last 30 days
            </button>
            <button
              onClick={() => setActivePeriod("7days")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                activePeriod === "7days"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              Last 7 days
            </button>
          </div>
        </div>

        {/* Chart Bars */}
        <div className="mt-6">
          <div className="flex h-48 items-end gap-2">
            {chartData.map((item, index) => {
              const heightPercentage = (item.value / maxValue) * 100;
              return (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative w-full max-w-10">
                    <div
                      className="w-full rounded-t-md bg-linear-to-t from-primary/60 to-primary transition-all duration-300 hover:from-primary hover:to-primary/80 cursor-pointer"
                      style={{ height: `${Math.max(heightPercentage, 10)}%`, minHeight: "4px" }}
                    >
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-[10px] rounded px-1.5 py-0.5 whitespace-nowrap">
                        {item.value}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Enrollments Table */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Recent Enrollments
              </h2>
              <p className="text-xs text-muted-foreground">
                Latest member subscriptions across gyms
              </p>
            </div>
            <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary">
              <MoreVertical size={16} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 pr-4 font-semibold">Member</th>
                  <th className="px-4 py-3 font-semibold">Plan</th>
                  <th className="px-4 py-3 font-semibold">Paid</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="py-3 pl-4 text-right font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-secondary/50 transition">
                    <td className="py-3 pr-4">
                      <p className="font-semibold text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </td>
                    <td className="px-4 py-3 text-foreground">{member.plan}</td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {member.amount}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          member.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-600"
                            : member.status === "Pending"
                            ? "bg-amber-500/10 text-amber-600"
                            : "bg-rose-500/10 text-rose-600"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="py-3 pl-4 text-right text-xs text-muted-foreground">
                      {member.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">Quick Actions</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Frequently used management tasks
            </p>

            <div className="mt-4 space-y-2">
              <Link
                href="/dashboard/admins"
                className="group flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-3 transition hover:border-primary/30 hover:bg-secondary"
              >
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary">
                    Register Admin
                  </p>
                  <p className="text-xs text-muted-foreground">Add manager credentials</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground transition group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/dashboard/businesses"
                className="group flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-3 transition hover:border-primary/30 hover:bg-secondary"
              >
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary">
                    Add Business
                  </p>
                  <p className="text-xs text-muted-foreground">Register a new branch</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground transition group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Pro Plan Card */}
          <div className="rounded-xl border border-primary/20 bg-linear-to-br from-primary to-primary/90 p-5 text-primary-foreground shadow-lg shadow-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-lg bg-primary-foreground/20 p-1.5">
                <Sparkles size={16} className="text-primary-foreground" />
              </div>
              <span className="text-xs font-bold tracking-wide uppercase">
                Pro Plan
              </span>
            </div>
            <p className="text-lg font-bold">Multi-Branch Sync</p>
            <p className="mt-1 text-sm text-primary-foreground/90 leading-relaxed">
              Connect automated billing and multi-location analytics.
            </p>
            <button className="mt-3 rounded-lg bg-primary-foreground/20 px-4 py-2 text-xs font-medium hover:bg-primary-foreground/30 transition shadow-lg shadow-black/10">
              Explore Features →
            </button>
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