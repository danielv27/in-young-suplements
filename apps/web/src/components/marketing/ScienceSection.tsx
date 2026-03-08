"use client";

import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Target, Ban } from "lucide-react";

const principles = [
  {
    icon: FlaskConical,
    title: "Physician-Designed Formulas",
    description:
      "Every product is developed in collaboration with board-certified physicians who specialize in integrative medicine and longevity.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Informed Ingredients",
    description:
      "We only include ingredients with peer-reviewed clinical evidence. No proprietary blends—full transparency on every label.",
  },
  {
    icon: Target,
    title: "Clinically Meaningful Doses",
    description:
      "Our doses match or exceed the amounts used in published clinical trials. Sub-therapeutic doses are not science—they're marketing.",
  },
  {
    icon: Ban,
    title: "No Trends or Hype",
    description:
      "We don't chase viral ingredients or make claims we can't support. If the science isn't there, neither are we.",
  },
];

export function ScienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-4 block">
              Our Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
              Science-Based Formulation
            </h2>
            <p className="mt-5 text-neutral-500 text-lg leading-relaxed">
              InYoung was founded on a simple premise: supplements should be held to the same
              standard as medicine. Evidence first. Always.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-4 shadow-sm">
                  <p.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-2">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
