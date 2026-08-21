"use client";

import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
import DashboardGuard from "@/components/DashboardGuard";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardGuard>
      <div className="min-h-screen bg-secondary text-black antialiased selection:bg-primary selection:text-white">
        <DashboardNavbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="min-h-screen pt-16 transition-all duration-300 md:pl-64">
          <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </DashboardGuard>
  );
}