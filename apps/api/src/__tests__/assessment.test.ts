import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app";

const validPayload = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@example.com",
  age: 42,
  sex: "female",
  primaryGoals: ["skin_health"],
  skinChanges: [],
  skinType: "normal",
  skinRisks: [],
  sunExposure: "high",
  usesSunscreen: false,
  hasPigmentation: true,
  pigmentationType: ["melasma"],
  skincareRoutine: ["moisturizer"],
  dietType: "omnivore",
  currentSupplements: [],
  energyLevel: "low",
  agingSignals: ["fine_lines", "fatigue"],
  stressLevel: "high",
  sleepHours: 6,
  exerciseFrequency: "rarely",
};

describe("POST /api/assessment/submit", () => {
  it("returns recommendations for valid input", async () => {
    const res = await request(app)
      .post("/api/assessment/submit")
      .send(validPayload);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data.recommendedProducts)).toBe(true);
    expect(res.body.data.recommendedProducts.length).toBeGreaterThan(0);
    expect(res.body.data.assessmentSummary).toBeTruthy();
  });

  it("includes daily-foundation in recommendations", async () => {
    const res = await request(app)
      .post("/api/assessment/submit")
      .send(validPayload);
    expect(res.body.data.recommendedProducts).toContain("daily-foundation");
  });

  it("recommends antioxidants for high sun exposure", async () => {
    const res = await request(app)
      .post("/api/assessment/submit")
      .send(validPayload);
    expect(res.body.data.recommendedProducts).toContain("skin-antioxidant-complex");
  });

  it("returns 400 for missing required fields", async () => {
    const res = await request(app)
      .post("/api/assessment/submit")
      .send({ firstName: "Jane" });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Validation failed");
  });

  it("returns menopauseRelevant flag", async () => {
    const res = await request(app)
      .post("/api/assessment/submit")
      .send(validPayload);
    expect(res.body.data.menopauseRelevant).toBe(true);
  });
});

describe("GET /api/assessment/questions", () => {
  it("returns 11 assessment steps", async () => {
    const res = await request(app).get("/api/assessment/questions");
    expect(res.status).toBe(200);
    expect(res.body.steps.length).toBe(11);
  });
});
