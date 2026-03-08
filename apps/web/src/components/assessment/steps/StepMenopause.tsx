"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";

const menopauseStatuses = [
  { value: "pre", label: "Pre-menopausal", description: "Regular menstrual cycles" },
  { value: "peri", label: "Peri-menopausal", description: "Irregular cycles, transitional symptoms" },
  { value: "post", label: "Post-menopausal", description: "12+ months without a period" },
];

const symptoms = [
  { key: "hotFlashes" as const, label: "Hot flashes" },
  { key: "nightSweats" as const, label: "Night sweats" },
  { key: "brainFog" as const, label: "Brain fog" },
  { key: "memoryIssues" as const, label: "Memory issues" },
  { key: "sleepDisturbances" as const, label: "Sleep disturbances" },
  { key: "moodChanges" as const, label: "Mood changes" },
  { key: "vaginalDryness" as const, label: "Vaginal dryness" },
  { key: "skinHairChanges" as const, label: "Skin & hair changes" },
  { key: "fatigue" as const, label: "Fatigue" },
  { key: "jointPain" as const, label: "Joint pain" },
];

const severityLabels = ["None", "Mild", "Moderate", "Strong", "Severe"];

export function StepMenopause() {
  const { register, watch } = useFormContext<FullAssessmentInput>();
  const menopauseStatus = watch("menopauseStatus");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">Menopause Health</h2>
        <p className="mt-2 text-neutral-500">
          This section helps us fine-tune hormonal and symptom-specific support.
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">Menstrual status</p>
        <div className="space-y-2">
          {menopauseStatuses.map((s) => (
            <label
              key={s.value}
              className={`flex items-start gap-4 p-3 rounded-xl border cursor-pointer transition-colors ${
                menopauseStatus === s.value
                  ? "border-brand-500 bg-brand-50"
                  : "border-neutral-200 hover:border-brand-200"
              }`}
            >
              <input type="radio" value={s.value} {...register("menopauseStatus")} className="mt-0.5" />
              <div>
                <p className="font-semibold text-neutral-900 text-sm">{s.label}</p>
                <p className="text-neutral-500 text-xs">{s.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-neutral-700 mb-4">
          Rate the severity of any symptoms (0 = none, 4 = severe)
        </p>
        <div className="space-y-4">
          {symptoms.map((symptom) => (
            <div key={symptom.key}>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm text-neutral-700">{symptom.label}</label>
              </div>
              <div className="flex gap-2">
                {severityLabels.map((label, val) => (
                  <label
                    key={val}
                    className="flex-1 text-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={val}
                      {...register(`menopauseSymptoms.${symptom.key}`, { valueAsNumber: true })}
                      className="sr-only"
                    />
                    <span className="block py-1.5 px-1 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-500 hover:border-brand-300 transition-colors">
                      {val}
                    </span>
                    <span className="text-[10px] text-neutral-400 mt-0.5 block">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" {...register("menopauseSymptoms.usesHRT")} />
          <span className="text-sm font-medium text-neutral-700">Currently using Hormone Replacement Therapy (HRT)</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" {...register("menopauseSymptoms.usesPhytoestrogens")} />
          <span className="text-sm font-medium text-neutral-700">Currently taking phytoestrogens or botanicals</span>
        </label>
      </div>
    </div>
  );
}
