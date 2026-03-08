"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Eye, Zap, Heart, Leaf, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const healthAreas = [
  {
    icon: Leaf,
    title: "Stress Management",
    description: "Adaptogenic support to regulate cortisol and build resilience.",
    href: "/supplements?focus=stress",
  },
  {
    icon: Sparkles,
    title: "Skin Health",
    description: "Collagen, antioxidants, and hydration from within.",
    href: "/supplements?focus=skin",
  },
  {
    icon: Eye,
    title: "Eye Health",
    description: "Lutein and zeaxanthin to protect macular integrity.",
    href: "/supplements?focus=eye",
  },
  {
    icon: Brain,
    title: "Brain Health",
    description: "Omega-3s, nootropics, and neuroplasticity support.",
    href: "/supplements?focus=brain",
  },
  {
    icon: Heart,
    title: "Metabolic Health",
    description: "Blood sugar stability, lipid balance, and cellular energy.",
    href: "/supplements?focus=metabolic",
  },
  {
    icon: Zap,
    title: "Energy & Body",
    description: "NAD+, mitochondrial support, and body composition.",
    href: "/supplements?focus=energy",
  },
];

export function HealthAreasSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900">
            Six Core Health Areas
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Every formula is mapped to a specific biological system, not a vague wellness claim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={area.href}>
                <Card className="h-full hover:shadow-md hover:border-brand-200 transition-all group">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-3 group-hover:bg-brand-100 transition-colors">
                      <area.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed">{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
