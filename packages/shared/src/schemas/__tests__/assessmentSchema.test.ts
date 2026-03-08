import { describe, it, expect } from "vitest";
import { demographicsSchema, fullAssessmentSchema } from "../assessmentSchema";

describe("demographicsSchema", () => {
  it("validates a valid demographics object", () => {
    const result = demographicsSchema.safeParse({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      age: 35,
      sex: "female",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = demographicsSchema.safeParse({
      firstName: "Jane",
      lastName: "Doe",
      email: "not-an-email",
      age: 35,
      sex: "female",
    });
    expect(result.success).toBe(false);
  });

  it("rejects age below 18", () => {
    const result = demographicsSchema.safeParse({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      age: 16,
      sex: "female",
    });
    expect(result.success).toBe(false);
  });

  it("rejects unknown sex value", () => {
    const result = demographicsSchema.safeParse({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      age: 30,
      sex: "other",
    });
    expect(result.success).toBe(false);
  });
});

describe("fullAssessmentSchema", () => {
  it("validates a minimal full assessment", () => {
    const result = fullAssessmentSchema.safeParse({
      firstName: "John",
      lastName: "Smith",
      email: "john@example.com",
      age: 40,
      sex: "male",
      primaryGoals: ["energy"],
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
    });
    expect(result.success).toBe(true);
  });
});
