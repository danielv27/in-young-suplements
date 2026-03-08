"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const risks = [
  { value: "family_history_skin_cancer", label: "Family history of skin cancer" },
  { value: "history_sunburns", label: "History of severe sunburns" },
  { value: "tanning_beds", label: "Past or current tanning bed use" },
  { value: "outdoor_work", label: "Outdoor occupation or sport" },
  { value: "immune_suppression", label: "Immune suppression" },
  { value: "none", label: "None of the above" },
];

export function StepSkinRisk() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const selected = watch("skinRisks") ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">Any skin risk factors?</h2>
        <p className="mt-2 text-neutral-500">Select all that apply.</p>
      </div>

      <div className="space-y-3">
        {risks.map((r) => (
          <label
            key={r.value}
            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
              selected.includes(r.value)
                ? "border-brand-500 bg-brand-50"
                : "border-neutral-200 hover:border-brand-200"
            }`}
          >
            <input type="checkbox" value={r.value} {...register("skinRisks")} className="sr-only" />
            <span className="w-5 h-5 rounded-md border-2 border-neutral-300 flex-shrink-0" />
            <span className="text-sm font-medium text-neutral-700">{r.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
