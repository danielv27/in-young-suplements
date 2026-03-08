import { Metadata } from "next";
import Link from "next/link";
import { Heart, Lightbulb, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "InYoung Labs was founded to bring physician-designed, evidence-based supplements to people navigating the health changes of their 30s, 40s, and beyond.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We never make claims we can't support. Every formula, every ingredient, every dose is backed by published science—or it doesn't make it into a product.",
  },
  {
    icon: Lightbulb,
    title: "Transparency",
    description:
      "No proprietary blends. No hidden fillers. Full ingredient lists, full doses, full disclosure. You deserve to know exactly what you're putting in your body.",
  },
  {
    icon: Heart,
    title: "Patient-First",
    description:
      "Our founders come from clinical medicine. We build every product as if we were recommending it to our own patients—which means safety, efficacy, and real-world practicality.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We source ingredients responsibly and package with minimal environmental impact. Health that is good for you should also be good for the planet.",
  },
];

const team = [
  {
    name: "Dr. Elena Park, MD",
    role: "Co-Founder & Chief Medical Officer",
    bio: "Board-certified internist and integrative medicine specialist with 15 years of clinical practice. Dr. Park leads all medical formulation decisions at InYoung.",
    initials: "EP",
  },
  {
    name: "Dr. James Osei, PhD",
    role: "Co-Founder & Head of Science",
    bio: "Nutritional biochemist whose research at Johns Hopkins focused on micronutrient bioavailability and longevity pathways. Dr. Osei oversees ingredient selection and dosing.",
    initials: "JO",
  },
  {
    name: "Mia Chen",
    role: "Chief Operating Officer",
    bio: "Former operations lead at a leading nutraceutical manufacturer. Mia ensures every batch of InYoung product meets the strictest quality and purity standards.",
    initials: "MC",
  },
  {
    name: "Dr. Sara Vidal, MD",
    role: "Medical Advisor – Dermatology",
    bio: "Board-certified dermatologist and researcher specializing in the skin-gut axis and nutritional dermatology. Dr. Vidal guides our skin-health formula development.",
    initials: "SV",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-neutral-50 border-b border-neutral-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
              Built by Physicians, for the Decades Ahead
            </h1>
            <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
              InYoung Labs was founded by a physician and a biochemist who kept asking the same
              question in clinic and in the lab: why do most supplements ignore the evidence?
            </p>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              The answer was always the same—convenience and profit over science. We decided to do
              something about it. InYoung exists to give people navigating the real health changes
              of their 30s, 40s, and beyond a genuinely better option.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100 h-80 flex items-center justify-center">
            <span className="font-serif text-8xl font-semibold text-brand-200">IY</span>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-6">Our Mission</h2>
          <p className="text-lg text-neutral-500 leading-relaxed mb-4">
            To make precision supplementation accessible to everyone—not just elite athletes or
            biohackers, but ordinary people who want to feel strong, clear-headed, and healthy
            through mid-life and beyond.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            We believe that aging well isn't about expensive interventions or exotic compounds. It's
            about giving your body the right building blocks, at the right doses, informed by the
            best available science. That's what InYoung Labs does.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{v.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-4">Leadership &amp; Advisors</h2>
          <p className="text-neutral-500 mb-12 max-w-2xl">
            InYoung is led by clinicians and scientists who have spent their careers studying human
            health and longevity.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center mb-4">
                  <span className="font-serif text-lg font-semibold text-brand-700">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-900">{member.name}</h3>
                <p className="text-xs text-brand-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-50 border-t border-brand-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 mb-4">
            Start Your Personalized Journey
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Take our science-backed assessment and discover which InYoung formulas are right for
            your unique profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/assessment">Take the Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/science">Explore Our Science</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
