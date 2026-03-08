"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getProductById } from "@inyoung/shared";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { RecommendationResult } from "@inyoung/shared";

interface AssessmentResultsProps {
  results: RecommendationResult;
}

export function AssessmentResults({ results }: AssessmentResultsProps) {
  const { recommendedProducts = [], priorityFocus = [], assessmentSummary, rationale = {} } = results;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-200 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="font-serif text-3xl font-semibold text-neutral-900">Your Personalized Plan</h2>
          {assessmentSummary && (
            <p className="mt-3 text-neutral-500 max-w-xl mx-auto">{assessmentSummary}</p>
          )}
        </div>

        {priorityFocus.length > 0 && (
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Priority Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {priorityFocus.map((area) => (
                <Badge key={area} variant="default" className="px-3 py-1 text-sm">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            Recommended Supplements ({recommendedProducts.length})
          </p>
          {recommendedProducts.map((id, i) => {
            const product = getProductById(id);
            if (!product) return null;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="border-neutral-100">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <span className="text-sm font-semibold text-neutral-900">${product.price}/mo</span>
                    </div>
                    <p className="text-sm text-neutral-500">{product.tagline}</p>
                  </CardHeader>
                  <CardContent>
                    {rationale[id] && (
                      <p className="text-sm text-neutral-600 bg-brand-50 p-3 rounded-xl mb-4 leading-relaxed">
                        {rationale[id]}
                      </p>
                    )}
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/supplements/${product.slug}`}>
                        View Product <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-brand-950 text-white text-center">
          <p className="font-serif text-xl font-semibold mb-2">Ready to start your journey?</p>
          <p className="text-brand-200 text-sm mb-4">Add your recommended supplements to your plan.</p>
          <Button className="bg-white text-brand-900 hover:bg-brand-50" asChild>
            <Link href="/supplements">Shop Supplements</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
