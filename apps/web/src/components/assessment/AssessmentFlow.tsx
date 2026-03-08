"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { fullAssessmentSchema, type FullAssessmentInput, isMenopauseRelevant, generateRecommendations } from "@inyoung/shared";
import { StepDemographics } from "./steps/StepDemographics";
import { StepGoals } from "./steps/StepGoals";
import { StepSkinChanges } from "./steps/StepSkinChanges";
import { StepSkinType } from "./steps/StepSkinType";
import { StepSkinRisk } from "./steps/StepSkinRisk";
import { StepSunExposure } from "./steps/StepSunExposure";
import { StepPigmentation } from "./steps/StepPigmentation";
import { StepSkincareRoutine } from "./steps/StepSkincareRoutine";
import { StepNutrition } from "./steps/StepNutrition";
import { StepEnergy } from "./steps/StepEnergy";
import { StepStress } from "./steps/StepStress";
import { StepMenopause } from "./steps/StepMenopause";
import { AssessmentResults } from "./AssessmentResults";
import type { RecommendationResult } from "@inyoung/shared";

const stepTitles = [
  "About You",
  "Your Goals",
  "Skin Changes",
  "Skin Type",
  "Skin Risk",
  "Sun Exposure",
  "Pigmentation",
  "Skincare Routine",
  "Nutrition & Supplements",
  "Energy & Aging",
  "Stress & Lifestyle",
  "Menopause Health",
];

export function AssessmentFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showMenopause, setShowMenopause] = useState(false);
  const [results, setResults] = useState<RecommendationResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<FullAssessmentInput>({
    resolver: zodResolver(fullAssessmentSchema),
    mode: "onChange",
    defaultValues: {
      primaryGoals: [],
      skinChanges: [],
      skinRisks: [],
      pigmentationType: [],
      skincareRoutine: [],
      currentSupplements: [],
      agingSignals: [],
      usesSunscreen: false,
      hasPigmentation: false,
      sleepHours: 7,
    },
  });

  const baseSteps = [
    <StepDemographics key="demographics" />,
    <StepGoals key="goals" />,
    <StepSkinChanges key="skin-changes" />,
    <StepSkinType key="skin-type" />,
    <StepSkinRisk key="skin-risk" />,
    <StepSunExposure key="sun-exposure" />,
    <StepPigmentation key="pigmentation" />,
    <StepSkincareRoutine key="skincare" />,
    <StepNutrition key="nutrition" />,
    <StepEnergy key="energy" />,
    <StepStress key="stress" />,
  ];

  const allSteps = showMenopause
    ? [...baseSteps, <StepMenopause key="menopause" />]
    : baseSteps;

  const totalSteps = allSteps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = async () => {
    // After demographics step, check if menopause questionnaire is needed
    if (currentStep === 0) {
      const values = methods.getValues();
      if (isMenopauseRelevant(values.sex, values.age)) {
        setShowMenopause(true);
      }
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      await handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const values = methods.getValues();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/api/assessment/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (res.ok) {
        const data = await res.json();
        setResults(data.data as RecommendationResult);
      } else {
        const localResult = generateRecommendations(values as Parameters<typeof generateRecommendations>[0]);
        setResults(localResult);
      }
    } catch {
      const values = methods.getValues();
      const localResult = generateRecommendations(values as Parameters<typeof generateRecommendations>[0]);
      setResults(localResult);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (results) {
    return <AssessmentResults results={results} />;
  }

  return (
    <FormProvider {...methods}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-neutral-500">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span className="text-sm font-semibold text-brand-600">
              {stepTitles[currentStep]}
            </span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {allSteps[currentStep]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-10 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {currentStep === totalSteps - 1
              ? isSubmitting
                ? "Generating Plan..."
                : "Get My Plan"
              : "Continue"}
          </Button>
        </div>
      </div>
    </FormProvider>
  );
}
