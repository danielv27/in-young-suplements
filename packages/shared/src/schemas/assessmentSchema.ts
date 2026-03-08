import { z } from "zod";

export const demographicsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  age: z.number().min(18, "Must be at least 18").max(100, "Must be under 100"),
  sex: z.enum(["male", "female", "prefer_not_to_say"]),
});

export const goalsSchema = z.object({
  primaryGoals: z.array(z.string()).min(1, "Select at least one goal"),
});

export const skinChangesSchema = z.object({
  skinChanges: z.array(z.string()),
});

export const skinTypeSchema = z.object({
  skinType: z.enum(["dry", "oily", "combination", "normal", "sensitive"]),
});

export const skinRiskSchema = z.object({
  skinRisks: z.array(z.string()),
});

export const sunExposureSchema = z.object({
  sunExposure: z.enum(["low", "moderate", "high"]),
  usesSunscreen: z.boolean(),
});

export const pigmentationSchema = z.object({
  hasPigmentation: z.boolean(),
  pigmentationType: z.array(z.string()),
});

export const skincareRoutineSchema = z.object({
  skincareRoutine: z.array(z.string()),
});

export const nutritionSchema = z.object({
  dietType: z.string().min(1, "Select a diet type"),
  currentSupplements: z.array(z.string()),
});

export const energySchema = z.object({
  energyLevel: z.enum(["very_low", "low", "moderate", "good", "excellent"]),
  agingSignals: z.array(z.string()),
});

export const stressSchema = z.object({
  stressLevel: z.enum(["low", "moderate", "high", "very_high"]),
  sleepHours: z.number().min(0).max(24),
  exerciseFrequency: z.string().min(1, "Select exercise frequency"),
});

export const menopauseSchema = z.object({
  menopauseStatus: z.enum(["pre", "peri", "post", "not_applicable"]),
  menopauseSymptoms: z.object({
    hotFlashes: z.number().min(0).max(4),
    nightSweats: z.number().min(0).max(4),
    brainFog: z.number().min(0).max(4),
    memoryIssues: z.number().min(0).max(4),
    sleepDisturbances: z.number().min(0).max(4),
    moodChanges: z.number().min(0).max(4),
    vaginalDryness: z.number().min(0).max(4),
    skinHairChanges: z.number().min(0).max(4),
    fatigue: z.number().min(0).max(4),
    jointPain: z.number().min(0).max(4),
    usesHRT: z.boolean(),
    usesPhytoestrogens: z.boolean(),
  }).optional(),
});

export const fullAssessmentSchema = demographicsSchema
  .merge(goalsSchema)
  .merge(skinChangesSchema)
  .merge(skinTypeSchema)
  .merge(skinRiskSchema)
  .merge(sunExposureSchema)
  .merge(pigmentationSchema)
  .merge(skincareRoutineSchema)
  .merge(nutritionSchema)
  .merge(energySchema)
  .merge(stressSchema)
  .merge(menopauseSchema.partial());

export type FullAssessmentInput = z.infer<typeof fullAssessmentSchema>;
