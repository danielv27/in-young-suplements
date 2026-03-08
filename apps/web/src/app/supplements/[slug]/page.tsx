import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@inyoung/shared";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back */}
        <Link
          href="/supplements"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Supplements
        </Link>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Product visual */}
          <div className="h-80 md:h-full min-h-64 rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
            <span className="font-serif text-8xl font-semibold text-brand-200">
              {product.name.charAt(0)}
            </span>
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.healthFocus.map((f) => (
                <Badge key={f}>{f}</Badge>
              ))}
            </div>
            <h1 className="font-serif text-4xl font-semibold text-neutral-900">{product.name}</h1>
            <p className="mt-2 text-xl text-neutral-500">{product.tagline}</p>
            <p className="mt-6 text-neutral-600 leading-relaxed">{product.description}</p>
            <p className="mt-6 text-3xl font-semibold text-neutral-900">${product.price}<span className="text-lg font-normal text-neutral-400">/mo</span></p>
            <div className="mt-8 flex gap-4">
              <Button size="lg">Add to Cart</Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/assessment">Get Personalized Plan</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Benefits */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {product.keyBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Ingredients */}
          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-6">Ingredients</h2>
            <div className="space-y-4">
              {product.ingredients.map((ing) => (
                <div key={ing.name} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-neutral-900 text-sm">{ing.name}</span>
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                      {ing.dose}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500">{ing.benefit}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Science */}
        <section className="mb-20 p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
          <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">The Science</h2>
          <p className="text-neutral-600 leading-relaxed">{product.science}</p>
        </section>

        {/* Recommended For */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-6">Recommended For</h2>
          <div className="flex flex-wrap gap-3">
            {product.recommendedFor.map((r) => (
              <Badge key={r} variant="secondary" className="px-4 py-2 text-sm">
                {r}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
