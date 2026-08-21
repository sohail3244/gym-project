"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  UserCircle,
  LogOut,
  X,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { useLogout } from "@/lib/hooks/useAuth";

const primaryNav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Admins", href: "/dashboard/admins", icon: Users, badge: "New" },
  { label: "Businesses", href: "/dashboard/businesses", icon: Building2 },
];

const secondaryNav = [
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const router = useRouter();
  const logoutMutation = useLogout();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const renderNavLink = (item) => {
    const Icon = item.icon;
    const isActive =
      pathname === item.href ||
      (item.href !== "/dashboard" && pathname.startsWith(item.href));

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => onClose?.()}
        className={`group relative flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
          isActive
            ? "bg-primary text-white shadow-md shadow-primary/25"
            : "text-black/75 hover:bg-black/5 hover:text-black hover:translate-x-1"
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
              isActive ? "bg-white scale-100" : "bg-transparent scale-0"
            }`}
          />
          <Icon
            size={18}
            className={`transition-colors duration-200 ${
              isActive
                ? "text-white"
                : "text-black/50 group-hover:text-black"
            }`}
          />
          <span>{item.label}</span>
        </div>

        <div className="flex items-center gap-1.5">
          {item.badge && (
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-tight uppercase ${
                isActive
                  ? "bg-white/20 text-white ring-1 ring-white/30"
                  : "bg-black/10 text-black"
              }`}
            >
              {item.badge}
            </span>
          )}
          <ChevronRight
            size={14}
            className={`transition-transform duration-200 opacity-0 group-hover:opacity-100 ${
              isActive ? "text-white/80 opacity-100" : "text-black/40 group-hover:translate-x-0.5"
            }`}
          />
        </div>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-black/10 bg-secondary/70 backdrop-blur-xl shadow-lg shadow-black/5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0 md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-black/10 px-5 md:hidden">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-white text-xs">
              G
            </div>
            <span className="text-sm font-bold tracking-tight text-black">Gym Manager</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-black/70 hover:bg-black/5"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3.5 py-5 space-y-6">
          <div>
            <p className="px-3.5 text-[10px] font-bold uppercase tracking-widest text-black/40">
              Main Menu
            </p>
            <nav className="mt-2 space-y-1.5">
              {primaryNav.map(renderNavLink)}
            </nav>
          </div>

          <div>
            <p className="px-3.5 text-[10px] font-bold uppercase tracking-widest text-black/40">
              Preferences
            </p>
            <nav className="mt-2 space-y-1.5">
              {secondaryNav.map(renderNavLink)}
            </nav>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/40 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
                <Sparkles size={14} />
              </div>
              <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black">
                PRO PLAN
              </span>
            </div>

            <h3 className="mt-3 text-xs font-bold text-black">
              Multi-Branch Sync
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-black/70">
              Connect automated billing and multi-location analytics.
            </p>

            <button
              type="button"
              className="group mt-3.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-white py-1.5 text-xs font-bold text-black transition-all hover:bg-primary hover:text-white hover:border-primary"
            >
              <span>Explore Features</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="border-t border-black/10 p-3.5 bg-secondary/40">
          <button
            type="button"
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
            className="group flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold text-red-600 transition-all hover:bg-red-500/10 active:scale-[0.98] disabled:opacity-50"
          >
            <div className="flex items-center gap-3">
              <LogOut size={17} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span>{logoutMutation.isPending ? "Signing out..." : "Sign Out"}</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-red-500/60 opacity-0 transition-opacity group-hover:opacity-100">
              Exit
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}