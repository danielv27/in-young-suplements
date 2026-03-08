"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const dietTypes = [
  { value: "omnivore", label: "Omnivore" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "keto", label: "Ketogenic" },
  { value: "paleo", label: "Paleo" },
  { value: "mediterranean", label: "Mediterranean" },
  { value: "other", label: "Other" },
];

const supplementOptions = [
  { value: "multivitamin", label: "Multivitamin" },
  { value: "omega3", label: "Omega-3 / Fish Oil" },
  { value: "vitamin_d", label: "Vitamin D" },
  { value: "magnesium", label: "Magnesium" },
  { value: "collagen", label: "Collagen" },
  { value: "protein", label: "Protein Powder" },
  { value: "none", label: "None" },
];

export function StepNutrition() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const dietType = watch("dietType");
  const currentSupplements = watch("currentSupplements") ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">Nutrition & Supplements</h2>
        <p className="mt-2 text-neutral-500">Tell us about your diet and what you already take.</p>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">Diet type</p>
        <div className="grid grid-cols-2 gap-3">
          {dietTypes.map((d) => (
            <label
              key={d.value}
              className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-colors text-sm font-medium ${
                dietType === d.value
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-neutral-200 hover:border-brand-200 text-neutral-700"
              }`}
            >
              <input type="radio" value={d.value} {...register("dietType")} className="sr-only" />
              {d.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">Current supplements</p>
        <div className="grid grid-cols-2 gap-3">
          {supplementOptions.map((s) => (
            <label
              key={s.value}
              className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors text-sm ${
                currentSupplements.includes(s.value)
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-neutral-200 hover:border-brand-200 text-neutral-700"
              }`}
            >
              <input type="checkbox" value={s.value} {...register("currentSupplements")} className="sr-only" />
              <span className="font-medium">{s.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
