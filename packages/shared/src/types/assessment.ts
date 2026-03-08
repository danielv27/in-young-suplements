export type SkinType = "dry" | "oily" | "combination" | "normal" | "sensitive";
export type PhotoType = "I" | "II" | "III" | "IV" | "V" | "VI";
export type SunExposure = "low" | "moderate" | "high";
export type EnergyLevel = "very_low" | "low" | "moderate" | "good" | "excellent";
export type StressLevel = "low" | "moderate" | "high" | "very_high";
export type MenopauseStatus = "pre" | "peri" | "post" | "not_applicable";

export interface AssessmentAnswers {
  // Step 1 – Demographics
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  sex: "male" | "female" | "prefer_not_to_say";

  // Step 2 – Goals
  primaryGoals: string[];

  // Step 3 – Skin Changes
  skinChanges: string[];

  // Step 4 – Skin Type
  skinType: SkinType;

  // Step 5 – Skin Risk
  skinRisks: string[];

  // Step 6 – Sun Exposure
  sunExposure: SunExposure;
  usesSunscreen: boolean;

  // Step 7 – Pigmentation
  hasPigmentation: boolean;
  pigmentationType: string[];

  // Step 8 – Skincare Routine
  skincareRoutine: string[];

  // Step 9 – Nutrition & Supplements
  dietType: string;
  currentSupplements: string[];

  // Step 10 – Energy & Aging Signals
  energyLevel: EnergyLevel;
  agingSignals: string[];

  // Step 11 – Stress & Lifestyle
  stressLevel: StressLevel;
  sleepHours: number;
  exerciseFrequency: string;

  // Conditional – Menopause
  menopauseStatus?: MenopauseStatus;
  menopauseSymptoms?: MenopauseSymptoms;
}

export interface MenopauseSymptoms {
  // 0=none, 1=mild, 2=moderate, 3=strong, 4=severe
  hotFlashes: number;
  nightSweats: number;
  brainFog: number;
  memoryIssues: number;
  sleepDisturbances: number;
  moodChanges: number;
  vaginalDryness: number;
  skinHairChanges: number;
  fatigue: number;
  jointPain: number;
  usesHRT: boolean;
  usesPhytoestrogens: boolean;
}

export interface RecommendationResult {
  recommendedProducts: string[]; // product IDs
  rationale: Record<string, string>; // productId -> reason
  priorityFocus: string[];
  assessmentSummary: string;
}
