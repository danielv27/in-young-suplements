export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  healthFocus: string[];
  keyBenefits: string[];
  ingredients: Ingredient[];
  price: number;
  imageUrl: string;
  description: string;
  science: string;
  recommendedFor: string[];
}

export interface Ingredient {
  name: string;
  dose: string;
  benefit: string;
}
