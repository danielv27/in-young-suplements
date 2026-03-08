"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const pigmentationTypes = [
  { value: "melasma", label: "Melasma (pregnancy mask / hormonal patches)" },
  { value: "sun_spots", label: "Sun spots / age spots" },
  { value: "post_inflammatory", label: "Post-inflammatory hyperpigmentation (from acne/injury)" },
  { value: "freckles", label: "Freckles or widespread spots" },
];

export function StepPigmentation() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const hasPigmentation = watch("hasPigmentation");
  const selectedTypes = watch("pigmentationType") ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">
          Do you have pigmentation concerns?
        </h2>
        <p className="mt-2 text-neutral-500">Uneven tone, dark spots, or discoloration.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ].map((opt) => (
          <label
            key={String(opt.value)}
            className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-colors text-sm font-medium ${
              hasPigmentation === opt.value
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-neutral-200 hover:border-brand-200 text-neutral-700"
            }`}
          >
            <input
              type="radio"
              value={String(opt.value)}
              {...register("hasPigmentation", {
                setValueAs: (v) => v === "true",
              })}
              className="sr-only"
            />
            {opt.label}
          </label>
        ))}
      </div>

      {hasPigmentation && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-neutral-700">What type?</p>
          {pigmentationTypes.map((t) => (
            <label
              key={t.value}
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                selectedTypes.includes(t.value)
                  ? "border-brand-500 bg-brand-50"
                  : "border-neutral-200 hover:border-brand-200"
              }`}
            >
              <input type="checkbox" value={t.value} {...register("pigmentationType")} className="sr-only" />
              <span className="text-sm font-medium text-neutral-700">{t.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
