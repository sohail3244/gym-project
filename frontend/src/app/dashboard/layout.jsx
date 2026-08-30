"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
import DashboardGuard from "@/components/DashboardGuard";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  /**
   * Responsive breakpoint handling
   */
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;

      setIsMobile(mobile);
      setIsTablet(tablet);

      if (mobile) {
        setSidebarOpen(false);
        setIsCollapsed(false);
      } else if (tablet) {
        setSidebarOpen(false);
        setIsCollapsed(true);
      } else {
        setSidebarOpen(true);
        setIsCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Close sidebar after navigation on mobile/tablet
   */
  useEffect(() => {
    if (isMobile || isTablet) {
      setSidebarOpen(false);
    }
  }, [pathname, isMobile, isTablet]);

  /**
   * Toggle sidebar
   */
  const toggleSidebar = () => {
    if (isMobile || isTablet) {
      setSidebarOpen((prev) => !prev);
      return;
    }

    setIsCollapsed((prev) => !prev);
  };

  /**
   * Close sidebar on overlay click
   */
  const closeSidebar = () => {
    if (isMobile || isTablet) {
      setSidebarOpen(false);
    }
  };

  /**
   * Calculate main content offset
   */
  const mainMargin = (() => {
    if (isMobile) {
      return "ml-0";
    }

    if (isTablet) {
      return sidebarOpen ? "ml-64" : "ml-0";
    }

    return isCollapsed ? "ml-20" : "ml-64";
  })();

  return (
    <DashboardGuard>
      <div className="min-h-screen bg-background text-foreground antialiased">
        {/* ================================
            Dashboard Navbar
        ================================= */}
        <DashboardNavbar
  onToggleSidebar={toggleSidebar}
  sidebarOpen={sidebarOpen}
  isMobile={isMobile}
  isCollapsed={isCollapsed}
/>

        {/* ================================
            Mobile / Tablet Overlay
        ================================= */}
        {(isMobile || isTablet) && sidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={closeSidebar}
            className="
              fixed inset-0 z-40
              bg-black/40
              backdrop-blur-[2px]
              transition-opacity
              duration-300
            "
          />
        )}

        {/* ================================
            Sidebar
        ================================= */}
        <Sidebar
  isOpen={sidebarOpen}
  isCollapsed={isCollapsed}
  onClose={closeSidebar}
  onToggleCollapse={() => setIsCollapsed(prev => !prev)}
  isMobile={isMobile}
  isTablet={isTablet}
/>

        {/* ================================
            Main Content
        ================================= */}
        <main
          className={`
            min-h-screen
            pt-16
            ${mainMargin}
            transition-[margin]
            duration-300
            ease-in-out
          `}
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1600px]
              px-4
              py-6
              sm:px-6
              lg:px-8
            "
          >
            {children}
          </div>
        </main>
      </div>
    </DashboardGuard>
  );
}