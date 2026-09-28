"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Dumbbell className="h-5 w-5" />
          </div>

          <span className="text-lg font-bold tracking-tight">
            GymFlow
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </Link>

          <Link
            href="#solutions"
            className="hover:text-foreground transition-colors"
          >
            Solutions
          </Link>

          <Link
            href="#pricing"
            className="hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-sm">
              Login
            </Button>
          </Link>

          <Link href="/login">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
              Get Started
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}