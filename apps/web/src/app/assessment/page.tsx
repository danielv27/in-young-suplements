import { Metadata } from "next";
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow";

export const metadata: Metadata = {
  title: "Health Assessment",
  description: "Take the InYoung Labs personalized health assessment and get your supplement plan.",
};

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-neutral-50 border-b border-neutral-100 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900">
            Personalized Health Assessment
          </h1>
          <p className="mt-3 text-neutral-500">
            Answer a few questions and we&apos;ll build a supplement plan tailored to your biology and goals.
          </p>
        </div>
      </div>
      <AssessmentFlow />
    </div>
  );
}
