import type { AssessmentAnswers, RecommendationResult } from "../types/assessment";

export function generateRecommendations(answers: AssessmentAnswers): RecommendationResult {
  const recommended = new Set<string>();
  const rationale: Record<string, string> = {};
  const priorityFocus: string[] = [];

  // Rule: High sun exposure + light phototype (I/II) → antioxidants
  if (answers.sunExposure === "high") {
    recommended.add("skin-antioxidant-complex");
    rationale["skin-antioxidant-complex"] =
      "High sun exposure increases oxidative stress. Astaxanthin and carotenoids help neutralize UV-induced free radicals.";
    priorityFocus.push("Skin Protection");
  }

  // Rule: Pigmentation issues → glutathione support
  if (answers.hasPigmentation && answers.pigmentationType.length > 0) {
    recommended.add("brightening-formula");
    rationale["brightening-formula"] =
      "Pigmentation concerns benefit from glutathione and vitamin C to support melanin regulation.";
    priorityFocus.push("Skin Tone");
  }

  // Rule: Low/very low energy + aging signals → NAD+, Quercetin, Collagen
  if (
    answers.energyLevel === "very_low" ||
    answers.energyLevel === "low" ||
    answers.agingSignals.length >= 2
  ) {
    recommended.add("longevity-formula");
    rationale["longevity-formula"] =
      "Low energy and aging markers suggest mitochondrial decline. NAD+, Quercetin, and Collagen support cellular energy and tissue integrity.";
    priorityFocus.push("Energy & Longevity");
  }

  // Rule: Menopause symptoms → phytoestrogens and adaptogens
  if (
    answers.menopauseStatus === "peri" ||
    answers.menopauseStatus === "post"
  ) {
    recommended.add("menopause-support");
    rationale["menopause-support"] =
      "Peri/post-menopausal symptoms respond well to phytoestrogens and adaptogenic herbs that support hormonal balance.";
    priorityFocus.push("Hormonal Balance");

    const ms = answers.menopauseSymptoms;
    if (ms && (ms.hotFlashes >= 2 || ms.nightSweats >= 2)) {
      recommended.add("vasomotor-relief");
      rationale["vasomotor-relief"] =
        "Moderate to severe hot flashes and night sweats indicate vasomotor instability; targeted botanical support is recommended.";
    }
  }

  // Rule: Low sun exposure → Vitamin D
  if (answers.sunExposure === "low") {
    recommended.add("vitamin-d3-k2");
    rationale["vitamin-d3-k2"] =
      "Limited sun exposure commonly leads to Vitamin D insufficiency. D3+K2 supports bone, immune, and mood health.";
    priorityFocus.push("Foundational Nutrition");
  }

  // Rule: High stress → adaptogen blend
  if (answers.stressLevel === "high" || answers.stressLevel === "very_high") {
    recommended.add("stress-resilience");
    rationale["stress-resilience"] =
      "Chronic high stress elevates cortisol and depletes key micronutrients. Ashwagandha and B-complex support resilience.";
    priorityFocus.push("Stress Management");
  }

  // Rule: Dry skin or skin changes → collagen + hyaluronic acid
  if (answers.skinType === "dry" || answers.skinChanges.includes("dryness")) {
    recommended.add("collagen-ha-complex");
    rationale["collagen-ha-complex"] =
      "Dry skin and collagen loss benefit from marine collagen peptides and hyaluronic acid for improved hydration and elasticity.";
    priorityFocus.push("Skin Hydration");
  }

  // Rule: Brain health goal → omega-3 + cognition support
  if (answers.primaryGoals.includes("brain_health")) {
    recommended.add("neuro-clarity");
    rationale["neuro-clarity"] =
      "Brain health goals are supported by omega-3 fatty acids and phosphatidylserine for cognitive function and clarity.";
    priorityFocus.push("Cognitive Health");
  }

  // Rule: Brain fog from menopause
  if (answers.menopauseSymptoms && answers.menopauseSymptoms.brainFog >= 2) {
    recommended.add("neuro-clarity");
    rationale["neuro-clarity"] =
      (rationale["neuro-clarity"] ?? "") +
      " Menopause-related brain fog additionally benefits from omega-3 and nootropic support.";
  }

  // Baseline: everyone gets a foundational multi
  recommended.add("daily-foundation");
  rationale["daily-foundation"] =
    "A physician-designed multivitamin provides the micronutrient baseline essential for all health goals.";

  const summaryParts: string[] = [];
  if (priorityFocus.length > 0) {
    summaryParts.push(`Your primary focus areas are: ${priorityFocus.join(", ")}.`);
  }
  summaryParts.push(
    `Based on your profile, we recommend ${recommended.size} targeted supplements to support your health.`
  );

  return {
    recommendedProducts: Array.from(recommended),
    rationale,
    priorityFocus: [...new Set(priorityFocus)],
    assessmentSummary: summaryParts.join(" "),
  };
}

export function isMenopauseRelevant(sex: string, age: number): boolean {
  return sex === "female" && age >= 40 && age <= 65;
}
