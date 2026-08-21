"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Dumbbell, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2, 
  AlertCircle 
} from "lucide-react";

import { useLogin } from "@/lib/hooks/useAuth";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const loginMutation = useLogin();

  const [form, setForm] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (error) setError("");

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username.trim() || !form.password) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      await loginMutation.mutateAsync({
        username: form.username.trim(),
        password: form.password,
        rememberMe: form.rememberMe,
      });

      router.replace("/dashboard");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Invalid username or password. Please try again."
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        
        {/* Main Card Container */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          
          {/* Header using Primary Gradient */}
          <div className="relative border-b border-border bg-linear-to-r from-primary to-primary/80 px-6 py-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary-foreground/20 p-3 ring-2 ring-primary-foreground/30">
                <Dumbbell className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Welcome Back
            </h1>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Access your Gym Management dashboard
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {error && (
              <div
                role="alert"
                className="mb-6 flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/10 p-3.5 text-sm text-destructive"
              >
                <AlertCircle className="h-5 w-5 shrink-0" />
                <div className="font-medium">{error}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Username Field */}
              <div>
                <label 
                  htmlFor="username" 
                  className="block text-sm font-medium text-foreground"
                >
                  Username
                </label>
                <div className="relative mt-1.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoFocus
                    autoComplete="username"
                    placeholder="Enter your username"
                    value={form.username}
                    onChange={handleChange}
                    disabled={loginMutation.isPending}
                    className="block w-full rounded-md border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between">
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative mt-1.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    disabled={loginMutation.isPending}
                    className="block w-full rounded-md border border-border bg-background py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={form.rememberMe}
                  onChange={handleChange}
                  disabled={loginMutation.isPending}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20 bg-background"
                />
                <label 
                  htmlFor="rememberMe" 
                  className="ml-2 block cursor-pointer select-none text-xs font-medium text-muted-foreground"
                >
                  Remember this device
                </label>
              </div>

              {/* Submit & Secondary Action */}
              <div className="space-y-2 pt-2">
                <Button
                  type="submit"
                  disabled={loginMutation.isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {loginMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  onClick={() => router.push("/register")}
                >
                  Create an Account
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          Protected by enterprise-grade security encryption.
        </p>
      </div>
    </div>
  );
}