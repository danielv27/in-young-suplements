"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const exposureLevels = [
  { value: "low", label: "Low", description: "Mostly indoors, limited sun" },
  { value: "moderate", label: "Moderate", description: "Some outdoor time, mixed" },
  { value: "high", label: "High", description: "Outdoors daily, frequent sun exposure" },
];

export function StepSunExposure() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const selected = watch("sunExposure");
  const usesSunscreen = watch("usesSunscreen");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">How much sun exposure do you get?</h2>
        <p className="mt-2 text-neutral-500">Think about your average weekly routine.</p>
      </div>

      <div className="space-y-3">
        {exposureLevels.map((level) => (
          <label
            key={level.value}
            className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
              selected === level.value
                ? "border-brand-500 bg-brand-50"
                : "border-neutral-200 hover:border-brand-200"
            }`}
          >
            <input type="radio" value={level.value} {...register("sunExposure")} className="mt-0.5" />
            <div>
              <p className="font-semibold text-neutral-900 text-sm">{level.label}</p>
              <p className="text-neutral-500 text-xs mt-0.5">{level.description}</p>
            </div>
          </label>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" {...register("usesSunscreen")} checked={usesSunscreen} />
          <div>
            <p className="font-medium text-neutral-900 text-sm">I use SPF sunscreen regularly</p>
            <p className="text-neutral-500 text-xs">SPF 30+ on most days</p>
          </div>
        </label>
      </div>
    </div>
  );
}
