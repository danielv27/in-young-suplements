import { Router, Request, Response } from "express";
import { fullAssessmentSchema } from "@inyoung/shared";
import { generateRecommendations, isMenopauseRelevant } from "@inyoung/shared";

export const assessmentRouter = Router();

assessmentRouter.post("/submit", (req: Request, res: Response) => {
  const parsed = fullAssessmentSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  const answers = parsed.data as Parameters<typeof generateRecommendations>[0];
  const result = generateRecommendations(answers);

  res.json({
    success: true,
    data: {
      ...result,
      menopauseRelevant: isMenopauseRelevant(answers.sex, answers.age),
    },
  });
});

assessmentRouter.get("/questions", (_req, res) => {
  res.json({
    steps: [
      { step: 1, title: "Demographics", fields: ["firstName", "lastName", "email", "age", "sex"] },
      { step: 2, title: "Goals", fields: ["primaryGoals"] },
      { step: 3, title: "Skin Changes", fields: ["skinChanges"] },
      { step: 4, title: "Skin Type", fields: ["skinType"] },
      { step: 5, title: "Skin Risk", fields: ["skinRisks"] },
      { step: 6, title: "Sun Exposure", fields: ["sunExposure", "usesSunscreen"] },
      { step: 7, title: "Pigmentation", fields: ["hasPigmentation", "pigmentationType"] },
      { step: 8, title: "Skincare Routine", fields: ["skincareRoutine"] },
      { step: 9, title: "Nutrition & Supplements", fields: ["dietType", "currentSupplements"] },
      { step: 10, title: "Energy & Aging", fields: ["energyLevel", "agingSignals"] },
      { step: 11, title: "Stress & Lifestyle", fields: ["stressLevel", "sleepHours", "exerciseFrequency"] },
    ],
  });
});
