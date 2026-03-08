"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const stressLevels = [
  { value: "low", label: "Low", description: "Generally relaxed, manageable demands" },
  { value: "moderate", label: "Moderate", description: "Some stress but mostly coping" },
  { value: "high", label: "High", description: "Frequently stressed, impacting daily life" },
  { value: "very_high", label: "Very High", description: "Overwhelmed, chronic stress" },
];

const exerciseOptions = [
  { value: "never", label: "Never" },
  { value: "rarely", label: "Rarely (1x/week)" },
  { value: "3x_week", label: "3× per week" },
  { value: "5x_week", label: "5× per week" },
  { value: "daily", label: "Daily" },
];

export function StepStress() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const stressLevel = watch("stressLevel");
  const exerciseFrequency = watch("exerciseFrequency");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">Stress & Lifestyle</h2>
        <p className="mt-2 text-neutral-500">Your lifestyle has a direct impact on your biology.</p>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">Current stress level</p>
        <div className="space-y-2">
          {stressLevels.map((level) => (
            <label
              key={level.value}
              className={`flex items-start gap-4 p-3 rounded-xl border cursor-pointer transition-colors ${
                stressLevel === level.value
                  ? "border-brand-500 bg-brand-50"
                  : "border-neutral-200 hover:border-brand-200"
              }`}
            >
              <input type="radio" value={level.value} {...register("stressLevel")} className="mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-900 text-sm">{level.label}</p>
                <p className="text-neutral-500 text-xs">{level.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-neutral-700 block mb-2" htmlFor="sleepHours">
          Average sleep per night (hours)
        </label>
        <input
          id="sleepHours"
          type="number"
          min={0}
          max={24}
          step={0.5}
          {...register("sleepHours", { valueAsNumber: true })}
          className="w-full h-10 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="7"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">Exercise frequency</p>
        <div className="grid grid-cols-2 gap-3">
          {exerciseOptions.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-colors text-sm font-medium ${
                exerciseFrequency === opt.value
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-neutral-200 hover:border-brand-200 text-neutral-700"
              }`}
            >
              <input type="radio" value={opt.value} {...register("exerciseFrequency")} className="sr-only" />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
