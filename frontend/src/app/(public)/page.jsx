"use client";

import Link from "next/link";
import { 
  Dumbbell, 
  Users, 
  CalendarCheck, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  CreditCard 
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomePage() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Member Management",
      description: "Easily onboard members, track active plans, attendance, and member profiles seamlessly."
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-primary" />,
      title: "Class & Slot Booking",
      description: "Organize trainer schedules, fitness sessions, and manage daily gym capacity effortlessly."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Automated Billing & Payouts",
      description: "Collect recurring membership fees, issue invoices, and manage trainer payouts in real time."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Financial Analytics",
      description: "Comprehensive reporting on monthly revenue, active subscriptions, and overdue balances."
    },
  ];

  const stats = [
    { value: "10k+", label: "Active Members" },
    { value: "99.9%", label: "System Uptime" },
    { value: "500+", label: "Gym Partners" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Dumbbell className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">GymFlow</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>

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

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                All-in-One Fitness & Gym Management Suite
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                Manage your gym with <span className="text-primary">speed & accuracy</span>
              </h1>

              <p className="text-lg text-muted-foreground md:text-xl">
                Streamline member billing, trainer payouts, class scheduling, and daily gym operations with one powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/login" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base flex items-center justify-center gap-2">
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-3 text-base">
                    View Features
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 pt-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> No setup fee
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> 14-day free trial
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Bank-grade security
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= METRICS / STATS ================= */}
        <section className="border-y border-border bg-card/50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURES GRID ================= */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Engineered for High-Growth Fitness Centers
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Everything you need to automate workflows and focus on member results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/50 transition-all duration-200"
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-linear-to-r from-primary to-primary/80 p-8 sm:p-12 text-center text-primary-foreground shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to transform your gym operations?
              </h2>
              <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                Join hundreds of gym owners automating their operations with GymFlow today.
              </p>
              <Link href="/login">
                <Button className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 py-3 text-base">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border bg-card py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4 text-primary" />
            <span>© {new Date().getFullYear()} GymFlow Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Support</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}