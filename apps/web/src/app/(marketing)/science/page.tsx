import { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, ShieldCheck, Target, Ban, BookOpen, Microscope, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Science",
  description:
    "InYoung Labs formulas are grounded in peer-reviewed research and developed with board-certified physicians. Learn about our evidence-first approach.",
};

const principles = [
  {
    icon: FlaskConical,
    title: "Physician-Designed Formulas",
    description:
      "Every product is developed in collaboration with board-certified physicians who specialize in integrative medicine and longevity. Clinical expertise informs every decision.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Informed Ingredients",
    description:
      "We only include ingredients backed by peer-reviewed clinical evidence. No proprietary blends—full transparency on every label. If we can't point to the study, we don't use the ingredient.",
  },
  {
    icon: Target,
    title: "Clinically Meaningful Doses",
    description:
      "Our doses match or exceed the amounts used in published clinical trials. Sub-therapeutic doses are not science—they're marketing. Every milligram is intentional.",
  },
  {
    icon: Ban,
    title: "No Trends or Hype",
    description:
      "We don't chase viral ingredients or make claims we can't support. If the science isn't there, neither are we. Period.",
  },
];

const researchAreas = [
  {
    icon: Microscope,
    title: "Cellular Longevity",
    description:
      "We study the mechanisms of cellular aging—telomere maintenance, mitochondrial function, and senescence pathways—to identify ingredients that support healthy lifespan.",
  },
  {
    icon: BookOpen,
    title: "Dermatological Health",
    description:
      "Our skin health formulas are built on dermatology literature exploring collagen synthesis, oxidative stress, UV protection, and barrier function from the inside out.",
  },
  {
    icon: Award,
    title: "Hormonal Balance",
    description:
      "We review endocrinology research on the hormonal shifts of your 30s and 40s—and identify evidence-based nutritional strategies to support energy, mood, and metabolic health.",
  },
  {
    icon: Users,
    title: "Personalized Nutrition",
    description:
      "No two bodies are the same. We draw from nutrigenomics and personalized medicine research to ensure our recommendations adapt to your individual profile.",
  },
];

const faqs = [
  {
    question: "How do you select ingredients?",
    answer:
      "Every ingredient must clear a three-step review: (1) peer-reviewed evidence of efficacy, (2) a safety profile reviewed by our medical advisory board, and (3) a clinically meaningful dose that matches or exceeds trial dosages. Ingredients that fail any step are excluded.",
  },
  {
    question: "Are your products tested for purity and potency?",
    answer:
      "Yes. All InYoung products are manufactured in cGMP-certified facilities and undergo third-party testing for identity, potency, and absence of heavy metals, microbials, and pesticides. Certificates of Analysis are available on request.",
  },
  {
    question: "Do your formulas interact with medications?",
    answer:
      "Some supplements can interact with medications. We recommend consulting your physician or pharmacist before starting any new supplement, particularly if you are on prescription drugs. Our assessment asks about medications to help surface potential concerns.",
  },
  {
    question: "Why do you use a personalized assessment instead of one-size-fits-all bundles?",
    answer:
      "The scientific literature increasingly supports individualized approaches to supplementation based on age, sex, lifestyle, health goals, and existing deficiencies. Our assessment maps your profile to formulas where the evidence of benefit is strongest for someone like you.",
  },
];

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-neutral-50 border-b border-neutral-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-4 block">
            Our Approach
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-neutral-900 max-w-3xl leading-tight">
            Science-First Supplement Formulation
          </h1>
          <p className="mt-5 text-lg text-neutral-500 max-w-2xl leading-relaxed">
            InYoung was founded on a simple premise: supplements should be held to the same standard
            as medicine. That means evidence first, always—and no exceptions for trendy or profitable
            ingredients that lack rigorous support.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/assessment">Take the Assessment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Our Principles */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-12">
            Formulation Principles
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-5 shadow-sm">
                  <p.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-4">
            Research Focus Areas
          </h2>
          <p className="text-neutral-500 mb-12 max-w-2xl">
            Our medical and scientific teams continuously review the literature across these core
            domains to ensure our formulas stay current with the best available evidence.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area) => (
              <div key={area.title} className="p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm mb-2">{area.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-12">
            Science FAQs
          </h2>
          <div className="max-w-3xl space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-neutral-100 pb-8">
                <h3 className="font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                <p className="text-neutral-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-50 border-t border-brand-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-4">
            Ready to Find Your Formula?
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Take our 5-minute assessment and get a personalized supplement recommendation backed by
            the science you just read about.
          </p>
          <Button asChild size="lg">
            <Link href="/assessment">Take the Assessment →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
