"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  TrendingUp,
  Activity,
  Settings,
  UserCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart3,
  FolderKanban,
  FileText,
  Sparkles,
  Plus,
  IndianRupee,
  UserPlus,
  Contact,
  CalendarCheck2,
  ReceiptIndianRupee,
  Gem,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
  isOpen,
  isCollapsed,
  onClose,
  onToggleCollapse,
  isMobile,
  isTablet,
}) {
  const pathname = usePathname();

  const mainMenuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    // { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/overview" },
    {
      icon: Building2,
      label: "Admin & Business",
      href: "/dashboard/admin-business",
    },
    {
      icon: TrendingUp,
      label: "Business Plan",
      href: "/dashboard/business-plan",
    },
    { icon: IndianRupee, label: "Payment", href: "/dashboard/payment" },
    { icon: Contact, label: "Member", href: "/dashboard/member" },
    {
      icon: ShieldCheck,
      label: "Membership Plan",
      href: "/dashboard/membership-plan",
    },
    {
      icon: ReceiptIndianRupee,
      label: "Member Payment",
      href: "/dashboard/member-payment",
    },
    { icon: UserPlus, label: "Employee", href: "/dashboard/employee" },
    {
      icon: CalendarCheck2,
      label: "Employee Attendence",
      href: "/dashboard/employee-attendence",
    },
  ];

  // Determine if sidebar should be expanded
  const showText = !isCollapsed;

  // Don't render on mobile if not open
  if (isMobile && !isOpen) return null;
  if (isTablet && !isOpen) return null;

  const sidebarWidth = isCollapsed ? "w-20" : "w-64";

  return (
    <>
      {/* Mobile Close Button */}
      {(isMobile || isTablet) && isOpen && (
        <button
          onClick={onClose}
          className="fixed right-4 top-4 z-60 rounded-lg bg-card p-2 shadow-lg hover:bg-secondary transition"
        >
          <X size={20} className="text-foreground" />
        </button>
      )}

      <aside
        className={`
    fixed
    left-0
    top-0
    bottom-0
    z-50
    bg-card
    border-r
    border-border
    transition-all
    duration-300
    ease-in-out
    ${
      isMobile || isTablet
        ? isOpen
          ? "translate-x-0"
          : "-translate-x-full"
        : "translate-x-0"
    }
    ${sidebarWidth}
    ${isMobile || isTablet ? "shadow-2xl" : ""}
  `}
      >
        <div className="flex h-full flex-col">
          {/* Brand */}
          <div className="flex h-16 items-center gap-3 px-4 shrink-0 border-b border-border">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/70 shadow-lg shadow-primary/20">
              <span className="text-sm font-bold text-primary-foreground">
                A
              </span>
            </div>
            {showText && (
              <div className="flex-1 min-w-0">
                <h1 className="text-sm font-bold text-foreground leading-tight truncate">
                  Acme Inc.
                </h1>
              </div>
            )}
            {!isMobile && !isTablet && (
              <button
                type="button"
                onClick={onToggleCollapse}
                className="rounded-lg p-1.5 hover:bg-secondary transition-colors shrink-0"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isCollapsed ? (
                  <ChevronRight size={16} className="text-muted-foreground" />
                ) : (
                  <ChevronLeft size={16} className="text-muted-foreground" />
                )}
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            {/* Main Menu */}
            <p
              className={`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3 ${!showText && "sr-only"}`}
            >
              Main Menu
            </p>
            <div className="space-y-1">
              {mainMenuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  pathname?.startsWith(item.href + "/");
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => (isMobile || isTablet) && onClose()}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    } ${!showText && "justify-center"}`}
                    title={!showText ? item.label : ""}
                  >
                    <Icon
                      size={18}
                      className={`shrink-0 transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                    {showText && (
                      <span className="flex-1 truncate">{item.label}</span>
                    )}
                    {isActive && showText && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* User Profile */}
          <div
            className={`border-t border-border p-4 ${!showText && "px-2"} shrink-0`}
          >
            <div
              className={`flex items-center gap-3 ${!showText && "justify-center"}`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-primary/10">
                <span className="text-xs font-bold text-primary">A</span>
              </div>
              {showText && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    Alex Johnson
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    admin@acme.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
