"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const routineItems = [
  { value: "cleanser", label: "Cleanser" },
  { value: "moisturizer", label: "Moisturizer" },
  { value: "spf", label: "SPF / Sunscreen" },
  { value: "retinol", label: "Retinol or Retinoids" },
  { value: "vitamin_c_serum", label: "Vitamin C Serum" },
  { value: "niacinamide", label: "Niacinamide" },
  { value: "acids", label: "AHA/BHA Exfoliants" },
  { value: "none", label: "Minimal / No routine" },
];

export function StepSkincareRoutine() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const selected = watch("skincareRoutine") ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">Your skincare routine</h2>
        <p className="mt-2 text-neutral-500">What products do you currently use?</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {routineItems.map((item) => (
          <label
            key={item.value}
            className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors text-sm ${
              selected.includes(item.value)
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-neutral-200 hover:border-brand-200 text-neutral-700"
            }`}
          >
            <input type="checkbox" value={item.value} {...register("skincareRoutine")} className="sr-only" />
            <span className="font-medium">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
