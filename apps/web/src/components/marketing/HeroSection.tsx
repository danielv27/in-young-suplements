"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 via-white to-neutral-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-200 mb-6">
              Physician-Designed Formulas
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Precision Supplements for Skin, Energy, and Longevity
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            InYoung formulas are designed by physicians and informed by science to support
            health through your 30s, 40s, and beyond.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="/assessment">
                Take the Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/supplements">Shop Supplements</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-14 flex flex-wrap gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { value: "10+", label: "Evidence-Based Formulas" },
              { value: "100%", label: "Clinically Dosed" },
              { value: "MD", label: "Physician Designed" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-3xl font-semibold text-brand-700">{stat.value}</span>
                <span className="mt-1 text-sm text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
