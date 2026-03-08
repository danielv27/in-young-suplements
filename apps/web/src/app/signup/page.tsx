"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    // Placeholder: replace with real auth call
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setError("Sign-up is not yet connected to a backend. Please check back soon.");
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
          <h1 className="mt-4 text-xl font-semibold text-neutral-800">Create your account</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Get personalized supplement recommendations
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jane Smith"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="At least 8 characters"
                autoComplete="new-password"
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
              {loading ? "Creating account…" : "Create account"}
            </Button>

            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="text-brand-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-brand-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>

          <p className="mt-6 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <Link href="/login" className="text-brand-600 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
