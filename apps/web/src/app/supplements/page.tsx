import { Metadata } from "next";
import Link from "next/link";
import { products } from "@inyoung/shared";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Supplements",
  description: "Browse all InYoung Labs precision supplement formulas.",
};

export default function SupplementsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-50 border-b border-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-neutral-900">
            All Supplements
          </h1>
          <p className="mt-4 text-lg text-neutral-500 max-w-xl">
            Each formula is physician-designed, clinically dosed, and targeted to a specific biological system.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="h-52 rounded-t-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
                <span className="font-serif text-4xl font-semibold text-brand-200">
                  {product.name.charAt(0)}
                </span>
              </div>

              <CardHeader className="pb-2">
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.healthFocus.slice(0, 2).map((f) => (
                    <Badge key={f} variant="default" className="text-xs">
                      {f}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-sm text-neutral-500 mt-1">{product.tagline}</p>
              </CardHeader>

              <CardContent className="flex-1 pb-2">
                <ul className="space-y-1.5">
                  {product.keyBenefits.slice(0, 3).map((b) => (
                    <li key={b} className="text-sm text-neutral-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-lg font-semibold text-neutral-900">${product.price}/mo</p>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/supplements/${product.slug}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
