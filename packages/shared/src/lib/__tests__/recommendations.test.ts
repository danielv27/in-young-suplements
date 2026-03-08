import { describe, it, expect } from "vitest";
import { generateRecommendations, isMenopauseRelevant } from "../recommendations";
import type { AssessmentAnswers } from "../../types/assessment";

const baseAnswers: AssessmentAnswers = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  age: 42,
  sex: "female",
  primaryGoals: ["skin_health"],
  skinChanges: [],
  skinType: "normal",
  skinRisks: [],
  sunExposure: "moderate",
  usesSunscreen: true,
  hasPigmentation: false,
  pigmentationType: [],
  skincareRoutine: [],
  dietType: "omnivore",
  currentSupplements: [],
  energyLevel: "good",
  agingSignals: [],
  stressLevel: "low",
  sleepHours: 7,
  exerciseFrequency: "3x_week",
};

describe("generateRecommendations", () => {
  it("always includes daily-foundation", () => {
    const result = generateRecommendations(baseAnswers);
    expect(result.recommendedProducts).toContain("daily-foundation");
  });

  it("recommends antioxidants for high sun exposure", () => {
    const result = generateRecommendations({ ...baseAnswers, sunExposure: "high" });
    expect(result.recommendedProducts).toContain("skin-antioxidant-complex");
  });

  it("recommends vitamin D for low sun exposure", () => {
    const result = generateRecommendations({ ...baseAnswers, sunExposure: "low" });
    expect(result.recommendedProducts).toContain("vitamin-d3-k2");
  });

  it("recommends brightening formula for pigmentation", () => {
    const result = generateRecommendations({
      ...baseAnswers,
      hasPigmentation: true,
      pigmentationType: ["melasma"],
    });
    expect(result.recommendedProducts).toContain("brightening-formula");
  });

  it("recommends longevity formula for low energy", () => {
    const result = generateRecommendations({ ...baseAnswers, energyLevel: "low" });
    expect(result.recommendedProducts).toContain("longevity-formula");
  });

  it("recommends stress resilience for high stress", () => {
    const result = generateRecommendations({ ...baseAnswers, stressLevel: "high" });
    expect(result.recommendedProducts).toContain("stress-resilience");
  });

  it("recommends menopause support for peri-menopausal users", () => {
    const result = generateRecommendations({
      ...baseAnswers,
      menopauseStatus: "peri",
      menopauseSymptoms: {
        hotFlashes: 2,
        nightSweats: 1,
        brainFog: 1,
        memoryIssues: 0,
        sleepDisturbances: 1,
        moodChanges: 1,
        vaginalDryness: 0,
        skinHairChanges: 0,
        fatigue: 1,
        jointPain: 0,
        usesHRT: false,
        usesPhytoestrogens: false,
      },
    });
    expect(result.recommendedProducts).toContain("menopause-support");
    expect(result.recommendedProducts).toContain("vasomotor-relief");
  });

  it("recommends collagen for dry skin", () => {
    const result = generateRecommendations({ ...baseAnswers, skinType: "dry" });
    expect(result.recommendedProducts).toContain("collagen-ha-complex");
  });

  it("recommends neuro-clarity for brain health goal", () => {
    const result = generateRecommendations({
      ...baseAnswers,
      primaryGoals: ["brain_health"],
    });
    expect(result.recommendedProducts).toContain("neuro-clarity");
  });

  it("returns rationale for each recommended product", () => {
    const result = generateRecommendations({ ...baseAnswers, sunExposure: "high" });
    result.recommendedProducts.forEach((id) => {
      expect(result.rationale[id]).toBeTruthy();
    });
  });

  it("returns a non-empty assessmentSummary", () => {
    const result = generateRecommendations(baseAnswers);
    expect(result.assessmentSummary.length).toBeGreaterThan(10);
  });
});

describe("isMenopauseRelevant", () => {
  it("returns true for female aged 40-65", () => {
    expect(isMenopauseRelevant("female", 45)).toBe(true);
  });
  it("returns false for male", () => {
    expect(isMenopauseRelevant("male", 45)).toBe(false);
  });
  it("returns false for female under 40", () => {
    expect(isMenopauseRelevant("female", 35)).toBe(false);
  });
  it("returns false for female over 65", () => {
    expect(isMenopauseRelevant("female", 70)).toBe(false);
  });
});
