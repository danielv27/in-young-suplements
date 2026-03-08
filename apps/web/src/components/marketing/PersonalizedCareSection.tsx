"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, FlaskConical, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Complete the Assessment",
    description: "Answer questions about your health goals, lifestyle, and biology.",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Get Your Plan",
    description: "Our engine maps your answers to targeted, evidence-based supplement stacks.",
  },
  {
    icon: Package,
    step: "03",
    title: "Receive Your Stack",
    description: "Your personalized supplements, tailored to your biology and goals.",
  },
];

export function PersonalizedCareSection() {
  return (
    <section className="py-20 bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-300 mb-4 block">
            InYoung Virtual Care
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight">
            Personalized Care, Powered by Science
          </h2>
          <p className="mt-4 text-brand-200 text-lg">
            Your supplement plan is generated from your personal assessment—not a one-size-fits-all recommendation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="text-5xl font-serif font-semibold text-white/10 absolute top-6 right-6">
                {step.step}
              </span>
              <div className="w-10 h-10 rounded-xl bg-brand-600/30 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-brand-300" />
              </div>
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-brand-200 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-brand-50">
            <Link href="/assessment">
              Start Your Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
