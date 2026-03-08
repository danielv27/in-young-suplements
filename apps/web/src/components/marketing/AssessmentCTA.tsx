"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AssessmentCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-4 block">
            Free · Takes 5 minutes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Discover Your Personalized Plan
          </h2>
          <p className="mt-5 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Answer a few questions about your health, goals, and lifestyle. We&apos;ll generate
            a targeted supplement plan built around your biology.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/assessment">
                Take the Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
