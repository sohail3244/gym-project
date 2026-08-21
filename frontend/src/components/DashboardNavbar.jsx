"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { 
  Bell, 
  Menu, 
  ChevronDown, 
  Search, 
  User, 
  Settings, 
  LogOut, 
  ShieldCheck 
} from "lucide-react";
import { useLogout } from "@/lib/hooks/useAuth";
import Link from "next/link";

const pageTitles = {
  "/dashboard": "Overview",
  "/dashboard/admins": "Administrator Management",
  "/dashboard/businesses": "Business Directory",
  "/dashboard/profile": "Account Settings",
  "/dashboard/settings": "Preferences",
};

export default function DashboardNavbar({ onToggleSidebar }) {
  const pathname = usePathname();
  const router = useRouter();
  const logoutMutation = useLogout();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const pageTitle =
    pageTitles[pathname] ||
    (pathname?.startsWith("/dashboard/admins/") ? "Admin Details" : "Dashboard");

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 h-16 border-b border-primary/10 bg-secondary/80 backdrop-blur-md transition-all">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-black hover:bg-black/5 active:scale-95 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-white shadow-sm ring-1 ring-primary/20">
              G
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-secondary bg-primary" />
              </span>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-black leading-none">
                Gym Manager
              </h1>
              <span className="text-[11px] font-medium text-black/60">
                Management Panel
              </span>
            </div>
          </div>

          <div className="hidden h-5 w-px bg-black/10 md:mx-1 md:block" />

          <h2 className="hidden text-sm font-semibold tracking-tight text-black md:block">
            {pageTitle}
          </h2>
        </div>

        {/* Center: Search */}
        <div className="hidden lg:block w-72">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/40" size={16} />
            <input
              type="text"
              placeholder="Quick search... (⌘K)"
              className="h-9 w-full rounded-xl border border-black/10 bg-white/60 pl-9 pr-4 text-xs text-black transition placeholder:text-black/40 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-black/70 transition hover:bg-black/5 hover:text-black"
            aria-label="Notifications"
          >
            <Bell size={19} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-secondary bg-primary" />
          </button>

          <div className="h-6 w-px bg-black/10" />

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-black/5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-semibold text-xs">
                SA
              </div>
              <div className="hidden text-left sm:block leading-tight">
                <p className="text-xs font-semibold text-black">Alex Rivers</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-black/60">
                  <ShieldCheck size={10} /> Super Admin
                </span>
              </div>
              <ChevronDown
                size={14}
                className={`text-black/50 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-12 z-50 w-56 animate-in fade-in zoom-in-95 rounded-2xl border border-black/10 bg-white p-1.5 shadow-xl shadow-black/5 duration-100">
                <div className="px-3 py-2 border-b border-black/5">
                  <p className="text-xs font-medium text-black">Signed in as</p>
                  <p className="truncate text-xs text-black/60">alex.rivers@gymadmin.io</p>
                </div>
                <div className="py-1">
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-black/80 transition hover:bg-black/5 hover:text-black"
                  >
                    <User size={15} />
                    Profile & Account
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-black/80 transition hover:bg-black/5 hover:text-black"
                  >
                    <Settings size={15} />
                    Settings
                  </Link>
                </div>
                <div className="border-t border-black/5 pt-1">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut size={15} />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}