"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const goals = [
  { value: "skin_health", label: "Skin Health", emoji: "✨" },
  { value: "energy", label: "Energy & Vitality", emoji: "⚡" },
  { value: "longevity", label: "Longevity", emoji: "🌿" },
  { value: "stress", label: "Stress Management", emoji: "🧘" },
  { value: "brain_health", label: "Brain Health", emoji: "🧠" },
  { value: "sleep", label: "Better Sleep", emoji: "🌙" },
  { value: "hormonal_health", label: "Hormonal Balance", emoji: "⚖️" },
  { value: "metabolic_health", label: "Metabolic Health", emoji: "💫" },
];

export function StepGoals() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const selected = watch("primaryGoals") ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">What are your primary goals?</h2>
        <p className="mt-2 text-neutral-500">Select all that apply.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {goals.map((goal) => (
          <label
            key={goal.value}
            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
              selected.includes(goal.value)
                ? "border-brand-500 bg-brand-50"
                : "border-neutral-200 hover:border-brand-200"
            }`}
          >
            <input
              type="checkbox"
              value={goal.value}
              {...register("primaryGoals")}
              className="sr-only"
            />
            <span className="text-xl">{goal.emoji}</span>
            <span className="text-sm font-medium text-neutral-700">{goal.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
