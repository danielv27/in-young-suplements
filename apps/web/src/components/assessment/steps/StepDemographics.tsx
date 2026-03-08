"use client";

import { useFormContext } from "react-hook-form";
import type { FullAssessmentInput } from "@inyoung/shared";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function StepDemographics() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FullAssessmentInput>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">Tell us about yourself</h2>
        <p className="mt-2 text-neutral-500">Your personal details help us personalize your plan.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} placeholder="Jane" />
          {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} placeholder="Doe" />
          {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} placeholder="jane@example.com" />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          {...register("age", { valueAsNumber: true })}
          placeholder="35"
          min={18}
          max={100}
        />
        {errors.age && <p className="text-xs text-red-500">{errors.age.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Biological Sex</Label>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {[
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
            { value: "prefer_not_to_say", label: "Prefer not to say" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 p-3 rounded-xl border border-neutral-200 cursor-pointer hover:border-brand-300 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 transition-colors"
            >
              <input type="radio" value={opt.value} {...register("sex")} className="sr-only" />
              <span className="text-sm font-medium text-neutral-700">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.sex && <p className="text-xs text-red-500">{errors.sex.message}</p>}
      </div>
    </div>
  );
}
