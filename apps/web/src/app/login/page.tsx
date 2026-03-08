"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    // Placeholder: replace with real auth call
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setError("Login is not yet connected to a backend. Please check back soon.");
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-1">
            <span className="font-serif text-2xl font-semibold text-neutral-900">
              InYoung <span className="text-brand-600">Labs</span>
            </span>
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-neutral-800">Welcome back</h1>
          <p className="mt-1 text-sm text-neutral-500">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-brand-600 hover:text-brand-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-neutral-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-brand-600 font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
