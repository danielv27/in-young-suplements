"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const skinChanges = [
  { value: "dryness", label: "Dryness or flakiness" },
  { value: "fine_lines", label: "Fine lines or wrinkles" },
  { value: "loss_of_firmness", label: "Loss of firmness" },
  { value: "dullness", label: "Dullness or uneven tone" },
  { value: "dark_spots", label: "Dark spots or hyperpigmentation" },
  { value: "sensitivity", label: "Increased sensitivity" },
  { value: "none", label: "No significant changes" },
];

export function StepSkinChanges() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const selected = watch("skinChanges") ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">
          What skin changes have you noticed?
        </h2>
        <p className="mt-2 text-neutral-500">Select all that apply.</p>
      </div>

      <div className="space-y-3">
        {skinChanges.map((item) => (
          <label
            key={item.value}
            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
              selected.includes(item.value)
                ? "border-brand-500 bg-brand-50"
                : "border-neutral-200 hover:border-brand-200"
            }`}
          >
            <input
              type="checkbox"
              value={item.value}
              {...register("skinChanges")}
              className="sr-only"
            />
            <span className="w-5 h-5 rounded-md border-2 border-current flex-shrink-0 flex items-center justify-center text-brand-600">
              {selected.includes(item.value) && (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span className="text-sm font-medium text-neutral-700">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
