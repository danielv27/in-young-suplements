import Link from "next/link";
import { products } from "@inyoung/shared";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Show first 4 products on homepage
const highlighted = products.slice(0, 4);

export function ProductHighlights() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900">
              Featured Supplements
            </h2>
            <p className="mt-2 text-neutral-500">
              Precision formulas for every health goal.
            </p>
          </div>
          <Link
            href="/supplements"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
          >
            View all supplements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlighted.map((product) => (
            <Card key={product.id} className="flex flex-col hover:shadow-md transition-shadow">
              {/* Product image placeholder */}
              <div className="h-48 rounded-t-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
                <span className="font-serif text-2xl font-semibold text-brand-300">
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
                <CardTitle className="text-base">{product.name}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1 pb-2">
                <ul className="space-y-1">
                  {product.keyBenefits.slice(0, 2).map((b) => (
                    <li key={b} className="text-xs text-neutral-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-brand-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-semibold text-neutral-800">${product.price}/mo</p>
              </CardContent>

              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/supplements/${product.slug}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
