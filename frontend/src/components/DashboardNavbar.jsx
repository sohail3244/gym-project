"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Menu,
  ChevronDown,
  Bell,
  HelpCircle,
  Plus,
  Sun,
  Moon,
  User,
  Settings,
  LogOut,
  ShieldCheck,
  Command,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLogout } from "@/lib/hooks/useAuth";

const pageTitles = {
  "/dashboard": "Overview",
  "/dashboard/admins": "Administrator Management",
  "/dashboard/businesses": "Business Directory",
  "/dashboard/profile": "Account Settings",
  "/dashboard/settings": "Preferences",
};

export default function DashboardNavbar({
  onToggleSidebar,
  sidebarOpen,
  isMobile,
  isCollapsed,
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const logoutMutation = useLogout();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // Handle hydration mismatch and device detection
  useEffect(() => {
    setMounted(true);
    setIsMobileDevice(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isMobileDevice) {
          setMobileSearchOpen(true);
          setTimeout(() => mobileSearchRef.current?.focus(), 100);
        } else {
          searchInputRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileDevice]);

  // Click outside handler for dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile search on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Overview";
    const segments = pathname.split("/").filter(Boolean);
    return segments.length > 1
      ? segments[segments.length - 1].replace(/-/g, " ")
      : "Dashboard";
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header
        className={`
    fixed
    right-0
    top-0
    z-40
    h-16
    border-b
    border-border/60
    bg-background/80
    backdrop-blur-xl
    transition-all
    duration-300
    ${isMobile ? "left-0" : isCollapsed ? "left-20" : "left-64"}
  `}
      >
        <div className="flex h-full items-center justify-between px-3 sm:px-4 md:px-6">
          {/* Left Section */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={onToggleSidebar}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-foreground transition-all hover:bg-foreground/5 active:scale-95 lg:hidden shrink-0"
              aria-label="Toggle navigation menu"
            >
              <Menu size={isMobile ? 18 : 20} />
            </button>

            {/* Page Title - Hidden on mobile */}
            <h2 className="hidden md:block text-sm font-semibold tracking-tight text-foreground truncate">
              {getPageTitle()}
            </h2>

            {/* Mobile Search Toggle */}
            <button
              type="button"
              onClick={() => setMobileSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-foreground/5 hover:text-foreground active:scale-95 lg:hidden ml-auto shrink-0"
              aria-label="Open search"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Center: Search - Desktop */}
          <div className="hidden lg:block w-64 xl:w-72">
            <div className="relative group">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                size={16}
              />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Quick search..."
                className="h-9 w-full rounded-xl border border-input bg-background/60 pl-9 pr-12 text-xs text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-border"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 shrink-0">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-foreground/5 hover:text-foreground active:scale-95"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? (
                <Sun
                  size={isMobile ? 17 : 19}
                  className="transition-transform hover:rotate-90 duration-300"
                />
              ) : (
                <Moon
                  size={isMobile ? 17 : 19}
                  className="transition-transform hover:-rotate-12 duration-300"
                />
              )}
            </button>

            {/* Notifications */}
            <button
              type="button"
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-foreground/5 hover:text-foreground active:scale-95"
              aria-label="Notifications"
            >
              <Bell size={isMobile ? 17 : 19} />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border-2 border-background bg-primary animate-pulse" />
            </button>

            {/* Help - Hidden on mobile */}
            <button className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-foreground/5 hover:text-foreground active:scale-95">
              <HelpCircle size={isMobile ? 17 : 19} />
            </button>

            {/* Divider */}
            <div className="h-5 w-px bg-border mx-0.5 sm:mx-1" />

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1.5 sm:gap-2 rounded-xl p-1 transition-all hover:bg-foreground/5 active:scale-95"
                aria-expanded={menuOpen}
                aria-haspopup="true"
              >
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/80 text-primary-foreground font-semibold text-[10px] sm:text-xs ring-2 ring-primary/20">
                  AR
                </div>
                <div className="hidden sm:block text-left leading-tight">
                  <p className="text-xs font-semibold text-foreground">
                    Alex Rivers
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
                    <ShieldCheck size={10} className="text-primary" /> Super
                    Admin
                  </span>
                </div>
                <ChevronDown
                  size={isMobile ? 12 : 14}
                  className={`text-muted-foreground transition-transform duration-200 ${menuOpen ? "rotate-180" : ""} hidden sm:block`}
                />
              </button>

              {menuOpen && (
                <>
                  {/* Mobile overlay */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMenuOpen(false)}
                  />

                  {/* Dropdown */}
                  <div className="absolute right-0 top-11 sm:top-12 z-50 w-56 sm:w-64 animate-in fade-in zoom-in-95 rounded-2xl border border-border bg-popover p-1.5 shadow-xl shadow-foreground/5 duration-100">
                    <div className="px-3 py-2 border-b border-border">
                      <p className="text-xs font-medium text-foreground">
                        Signed in as
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        alex.rivers@gymadmin.io
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setMenuOpen(false)}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-foreground/80 transition-all hover:bg-accent hover:text-foreground"
                      >
                        <User size={15} className="text-muted-foreground" />
                        Profile & Account
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        onClick={() => setMenuOpen(false)}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-foreground/80 transition-all hover:bg-accent hover:text-foreground"
                      >
                        <Settings size={15} className="text-muted-foreground" />
                        Settings
                      </Link>
                    </div>

                    <div className="border-t border-border pt-1">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-destructive transition-all hover:bg-destructive/10"
                      >
                        <LogOut size={15} />
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileSearchOpen(false)}
          />
          <div className="relative top-0 mx-4 mt-4 rounded-2xl bg-card border border-border shadow-2xl">
            <div className="flex items-center gap-3 p-3">
              <Search size={20} className="text-muted-foreground shrink-0" />
              <input
                ref={mobileSearchRef}
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setMobileSearchOpen(false)}
                className="rounded-lg p-1.5 hover:bg-secondary transition-colors"
              >
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>
            <div className="border-t border-border p-3 text-xs text-muted-foreground">
              <kbd className="rounded border border-border px-1.5 py-0.5 bg-muted">
                ESC
              </kbd>
              <span className="ml-2">to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
