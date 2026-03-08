"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const skinTypes = [
  { value: "dry", label: "Dry", description: "Tight, flaky, or rough texture" },
  { value: "oily", label: "Oily", description: "Shiny, enlarged pores, prone to breakouts" },
  { value: "combination", label: "Combination", description: "Oily T-zone, dry cheeks" },
  { value: "normal", label: "Normal", description: "Balanced, minimal concerns" },
  { value: "sensitive", label: "Sensitive", description: "Easily irritated, prone to redness" },
];

export function StepSkinType() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const selected = watch("skinType");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">What is your skin type?</h2>
        <p className="mt-2 text-neutral-500">Select the option that best describes your skin.</p>
      </div>

      <div className="space-y-3">
        {skinTypes.map((t) => (
          <label
            key={t.value}
            className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
              selected === t.value
                ? "border-brand-500 bg-brand-50"
                : "border-neutral-200 hover:border-brand-200"
            }`}
          >
            <input type="radio" value={t.value} {...register("skinType")} className="mt-0.5" />
            <div>
              <p className="font-semibold text-neutral-900 text-sm">{t.label}</p>
              <p className="text-neutral-500 text-xs mt-0.5">{t.description}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
