"use client";

import React from "react";

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
  role,
}) {
  const pathname = usePathname();

  /* =====================================================
     NORMALIZE ROLE
  ===================================================== */

  const currentRole = role?.toUpperCase();

  /* =====================================================
     SUPER ADMIN MENU
  ===================================================== */

  const superAdminMenuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },

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

    {
      icon: IndianRupee,
      label: "Payment",
      href: "/dashboard/payment",
    },
  ];

  /* =====================================================
     ADMIN MENU
  ===================================================== */

  const adminMenuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },

    {
      icon: Contact,
      label: "Member",
      href: "/dashboard/member",
    },

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

    {
      icon: UserPlus,
      label: "Employee",
      href: "/dashboard/employee",
    },

    {
      icon: CalendarCheck2,
      label: "Employee Attendance",
      href: "/dashboard/employee-attendence",
    },
  ];

  /* =====================================================
     ROLE BASED MENU
  ===================================================== */

  const mainMenuItems =
    currentRole === "SUPER_ADMIN"
      ? superAdminMenuItems
      : currentRole === "ADMIN"
        ? adminMenuItems
        : [];

  /* =====================================================
     SIDEBAR STATE
  ===================================================== */

  const showText = !isCollapsed;

  if (isMobile && !isOpen) return null;

  if (isTablet && !isOpen) return null;

  const sidebarWidth = isCollapsed ? "w-20" : "w-64";

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      {/* =================================================
          MOBILE / TABLET CLOSE BUTTON
      ================================================= */}

      {(isMobile || isTablet) && isOpen && (
        <button
          type="button"
          onClick={onClose}
          className="
            fixed
            right-4
            top-4
            z-60
            rounded-lg
            bg-card
            p-2
            shadow-lg
            transition
            hover:bg-secondary
          "
        >
          <X
            size={20}
            className="text-foreground"
          />
        </button>
      )}

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside
        className={`
          fixed
          left-0
          top-0
          bottom-0
          z-50
          border-r
          border-border
          bg-card
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

          {/* =================================================
              BRAND
          ================================================= */}

          <div
            className="
              flex
              h-16
              shrink-0
              items-center
              gap-3
              border-b
              border-border
              px-4
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-linear-to-br
                from-primary
                to-primary/70
                shadow-lg
                shadow-primary/20
              "
            >
              <span className="text-sm font-bold text-primary-foreground">
                A
              </span>
            </div>

            {showText && (
              <div className="min-w-0 flex-1">
                <h1
                  className="
                    truncate
                    text-sm
                    font-bold
                    leading-tight
                    text-foreground
                  "
                >
                  Acme Inc.
                </h1>
              </div>
            )}

            {!isMobile && !isTablet && (
              <button
                type="button"
                onClick={onToggleCollapse}
                className="
                  shrink-0
                  rounded-lg
                  p-1.5
                  transition-colors
                  hover:bg-secondary
                "
                aria-label={
                  isCollapsed
                    ? "Expand sidebar"
                    : "Collapse sidebar"
                }
              >
                {isCollapsed ? (
                  <ChevronRight
                    size={16}
                    className="text-muted-foreground"
                  />
                ) : (
                  <ChevronLeft
                    size={16}
                    className="text-muted-foreground"
                  />
                )}
              </button>
            )}
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav
            className="
              flex-1
              overflow-y-auto
              px-3
              py-4
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-border
            "
          >
            {/* MENU TITLE */}

            <p
              className={`
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-muted-foreground
                ${!showText ? "sr-only" : ""}
              `}
            >
              {currentRole === "SUPER_ADMIN"
                ? "Super Admin Menu"
                : currentRole === "ADMIN"
                  ? "Admin Menu"
                  : "Menu"}
            </p>

            {/* MENU ITEMS */}

            <div className="space-y-1">
              {mainMenuItems.map((item, index) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  pathname?.startsWith(
                    item.href + "/"
                  );

                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => {
                      if (isMobile || isTablet) {
                        onClose();
                      }
                    }}
                    className={`
                      group
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-primary/10 text-primary shadow-sm"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }

                      ${!showText ? "justify-center" : ""}
                    `}
                    title={
                      !showText
                        ? item.label
                        : ""
                    }
                  >
                    <Icon
                      size={18}
                      className={`
                        shrink-0
                        transition-colors

                        ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        }
                      `}
                    />

                    {showText && (
                      <span className="flex-1 truncate">
                        {item.label}
                      </span>
                    )}

                    {isActive && showText && (
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-primary
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* NO ROLE */}

            {mainMenuItems.length === 0 && (
              <div className="px-3 py-4 text-xs text-muted-foreground">
                No menu available.
              </div>
            )}
          </nav>

          {/* =================================================
              USER PROFILE
          ================================================= */}

          <div
            className={`
              shrink-0
              border-t
              border-border
              p-4
              ${!showText ? "px-2" : ""}
            `}
          >
            <div
              className={`
                flex
                items-center
                gap-3
                ${!showText ? "justify-center" : ""}
              `}
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-linear-to-br
                  from-primary/20
                  to-primary/10
                "
              >
                <span className="text-xs font-bold text-primary">
                  A
                </span>
              </div>

              {showText && (
                <div className="min-w-0 flex-1">
                  <p
                    className="
                      truncate
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
                    Alex Johnson
                  </p>

                  <p
                    className="
                      truncate
                      text-xs
                      text-muted-foreground
                    "
                  >
                    admin@acme.com
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-medium
                      uppercase
                      text-primary
                    "
                  >
                    {currentRole || "User"}
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