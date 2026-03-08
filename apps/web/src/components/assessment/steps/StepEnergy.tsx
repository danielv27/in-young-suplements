"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const energyLevels = [
  { value: "very_low", label: "Very Low", description: "Exhausted most of the time" },
  { value: "low", label: "Low", description: "Frequently tired, low motivation" },
  { value: "moderate", label: "Moderate", description: "Some energy dips but manageable" },
  { value: "good", label: "Good", description: "Generally energized" },
  { value: "excellent", label: "Excellent", description: "Consistently high energy" },
];

const agingSignals = [
  { value: "fine_lines", label: "Fine lines & wrinkles" },
  { value: "fatigue", label: "Persistent fatigue" },
  { value: "muscle_loss", label: "Loss of muscle tone" },
  { value: "slower_recovery", label: "Slower recovery from exercise" },
  { value: "brain_fog", label: "Brain fog" },
  { value: "joint_discomfort", label: "Joint discomfort" },
  { value: "weight_changes", label: "Unexplained weight changes" },
];

export function StepEnergy() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const energyLevel = watch("energyLevel");
  const selectedSignals = watch("agingSignals") ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">Energy & Aging Signals</h2>
        <p className="mt-2 text-neutral-500">Help us understand your current energy baseline.</p>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">How is your overall energy level?</p>
        <div className="space-y-2">
          {energyLevels.map((level) => (
            <label
              key={level.value}
              className={`flex items-start gap-4 p-3 rounded-xl border cursor-pointer transition-colors ${
                energyLevel === level.value
                  ? "border-brand-500 bg-brand-50"
                  : "border-neutral-200 hover:border-brand-200"
              }`}
            >
              <input type="radio" value={level.value} {...register("energyLevel")} className="mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-900 text-sm">{level.label}</p>
                <p className="text-neutral-500 text-xs">{level.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">Any of these aging signals?</p>
        <div className="grid grid-cols-2 gap-3">
          {agingSignals.map((s) => (
            <label
              key={s.value}
              className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors text-sm ${
                selectedSignals.includes(s.value)
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-neutral-200 hover:border-brand-200 text-neutral-700"
              }`}
            >
              <input type="checkbox" value={s.value} {...register("agingSignals")} className="sr-only" />
              <span className="font-medium">{s.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
