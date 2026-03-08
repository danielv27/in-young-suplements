import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "daily-foundation",
    name: "Daily Foundation",
    slug: "daily-foundation",
    tagline: "Your physician-designed nutritional baseline",
    healthFocus: ["Foundational Nutrition", "Immune Support", "Energy"],
    keyBenefits: [
      "Comprehensive micronutrient support",
      "Enhanced immune resilience",
      "Sustained daily energy",
    ],
    ingredients: [
      { name: "Vitamin D3", dose: "2000 IU", benefit: "Immune & bone health" },
      { name: "Magnesium Glycinate", dose: "300mg", benefit: "Relaxation & sleep" },
      { name: "B-Complex", dose: "Full spectrum", benefit: "Energy metabolism" },
      { name: "Zinc Bisglycinate", dose: "15mg", benefit: "Immune & skin integrity" },
    ],
    price: 49,
    imageUrl: "/images/products/daily-foundation.jpg",
    description:
      "A complete, physician-designed multivitamin that fills the most common nutritional gaps in modern diets.",
    science:
      "Formulated using evidence thresholds from the NHANES and published dietary gap analyses, each nutrient is dosed at clinically meaningful levels.",
    recommendedFor: ["Everyone", "Adults 30+", "Those starting supplementation"],
  },
  {
    id: "skin-antioxidant-complex",
    name: "Skin Antioxidant Complex",
    slug: "skin-antioxidant-complex",
    tagline: "UV-defense and radiance from within",
    healthFocus: ["Skin Health", "Antioxidant Protection"],
    keyBenefits: [
      "Neutralizes UV-induced free radicals",
      "Supports skin luminosity",
      "Protects against oxidative aging",
    ],
    ingredients: [
      { name: "Astaxanthin", dose: "6mg", benefit: "Powerful carotenoid antioxidant" },
      { name: "Lycopene", dose: "10mg", benefit: "UV photoprotection" },
      { name: "Lutein & Zeaxanthin", dose: "10mg/2mg", benefit: "Skin & eye protection" },
      { name: "Vitamin C", dose: "500mg", benefit: "Collagen synthesis" },
    ],
    price: 64,
    imageUrl: "/images/products/skin-antioxidant.jpg",
    description:
      "A targeted antioxidant blend for those with high UV exposure or active skin aging concerns.",
    science:
      "Clinical trials on astaxanthin demonstrate significant improvement in skin elasticity and photoprotection at 6mg. Lycopene at 10mg has been shown to reduce UV-induced erythema.",
    recommendedFor: ["High sun exposure", "Outdoor enthusiasts", "Skin-health focused"],
  },
  {
    id: "collagen-ha-complex",
    name: "Collagen & HA Complex",
    slug: "collagen-ha-complex",
    tagline: "Deep hydration and structural skin support",
    healthFocus: ["Skin Health", "Joint Health"],
    keyBenefits: [
      "Improves skin elasticity",
      "Reduces fine lines",
      "Supports joint comfort",
    ],
    ingredients: [
      { name: "Marine Collagen Peptides", dose: "5g", benefit: "Skin elasticity & structure" },
      { name: "Hyaluronic Acid", dose: "200mg", benefit: "Skin hydration" },
      { name: "Vitamin C", dose: "250mg", benefit: "Collagen cross-linking" },
      { name: "Silica", dose: "50mg", benefit: "Connective tissue support" },
    ],
    price: 72,
    imageUrl: "/images/products/collagen-ha.jpg",
    description:
      "Marine collagen peptides with hyaluronic acid for deep skin hydration and structural repair.",
    science:
      "Hydrolyzed marine collagen at 5g/day has demonstrated improvements in skin moisture, elasticity, and wrinkle depth in randomized controlled trials.",
    recommendedFor: ["Dry skin", "Adults 35+", "Collagen concerns"],
  },
  {
    id: "brightening-formula",
    name: "Brightening Formula",
    slug: "brightening-formula",
    tagline: "Even tone, luminous skin",
    healthFocus: ["Skin Tone", "Pigmentation"],
    keyBenefits: [
      "Reduces hyperpigmentation",
      "Supports even skin tone",
      "Potent antioxidant protection",
    ],
    ingredients: [
      { name: "Glutathione", dose: "500mg", benefit: "Melanin regulation & antioxidant" },
      { name: "Vitamin C", dose: "1000mg", benefit: "Tyrosinase inhibition" },
      { name: "Alpha-Lipoic Acid", dose: "300mg", benefit: "Antioxidant recycling" },
    ],
    price: 68,
    imageUrl: "/images/products/brightening.jpg",
    description:
      "A science-backed formula targeting hyperpigmentation and uneven skin tone through antioxidant pathways.",
    science:
      "Oral glutathione at 500mg/day has been shown in clinical studies to reduce melanin index and improve skin luminosity within 4 weeks.",
    recommendedFor: ["Hyperpigmentation", "Melasma", "Uneven skin tone"],
  },
  {
    id: "longevity-formula",
    name: "Longevity Formula",
    slug: "longevity-formula",
    tagline: "Cellular energy and healthy aging",
    healthFocus: ["Energy & Longevity", "Metabolic Health"],
    keyBenefits: [
      "Supports NAD+ pathways",
      "Reduces cellular senescence",
      "Improves mitochondrial function",
    ],
    ingredients: [
      { name: "NMN (Nicotinamide Mononucleotide)", dose: "300mg", benefit: "NAD+ precursor" },
      { name: "Quercetin", dose: "500mg", benefit: "Senolytic & anti-inflammatory" },
      { name: "Resveratrol", dose: "200mg", benefit: "Sirtuin activation" },
      { name: "CoQ10", dose: "100mg", benefit: "Mitochondrial support" },
    ],
    price: 89,
    imageUrl: "/images/products/longevity.jpg",
    description:
      "A physician-curated longevity stack targeting the cellular mechanisms of aging.",
    science:
      "NMN supplementation restores NAD+ levels which decline with age. Quercetin exhibits senolytic activity in pre-clinical and early clinical studies.",
    recommendedFor: ["Adults 40+", "Low energy", "Longevity-focused"],
  },
  {
    id: "stress-resilience",
    name: "Stress Resilience",
    slug: "stress-resilience",
    tagline: "Calm, focused, balanced",
    healthFocus: ["Stress Management", "Brain Health"],
    keyBenefits: [
      "Lowers cortisol response",
      "Supports mental clarity",
      "Promotes restful sleep",
    ],
    ingredients: [
      { name: "Ashwagandha (KSM-66)", dose: "600mg", benefit: "Cortisol regulation" },
      { name: "L-Theanine", dose: "200mg", benefit: "Calm focus" },
      { name: "Magnesium Glycinate", dose: "200mg", benefit: "Nervous system support" },
      { name: "B5 (Pantothenic Acid)", dose: "500mg", benefit: "Adrenal support" },
    ],
    price: 59,
    imageUrl: "/images/products/stress-resilience.jpg",
    description:
      "An adaptogen-based formula designed to support the stress response system and promote calm, focused energy.",
    science:
      "KSM-66 Ashwagandha is the most clinically studied ashwagandha extract, demonstrating a 27.9% reduction in serum cortisol in double-blind RCTs.",
    recommendedFor: ["High-stress lifestyles", "Poor sleep", "Burnout recovery"],
  },
  {
    id: "vitamin-d3-k2",
    name: "Vitamin D3 + K2",
    slug: "vitamin-d3-k2",
    tagline: "Foundational immune and bone support",
    healthFocus: ["Foundational Nutrition", "Immune Support", "Bone Health"],
    keyBenefits: [
      "Optimizes Vitamin D status",
      "Directs calcium to bones",
      "Supports immune function",
    ],
    ingredients: [
      { name: "Vitamin D3 (Cholecalciferol)", dose: "5000 IU", benefit: "Immune & mood regulation" },
      { name: "Vitamin K2 (MK-7)", dose: "180mcg", benefit: "Calcium metabolism & arterial health" },
    ],
    price: 34,
    imageUrl: "/images/products/vitamin-d3-k2.jpg",
    description:
      "A precise D3+K2 pairing to optimize Vitamin D status while directing calcium safely into bones.",
    science:
      "Vitamin D3 and K2 synergistically support calcium homeostasis. MK-7 form of K2 has superior half-life and bioavailability compared to MK-4.",
    recommendedFor: ["Low sun exposure", "Northern latitudes", "Bone health"],
  },
  {
    id: "menopause-support",
    name: "Menopause Support",
    slug: "menopause-support",
    tagline: "Hormonal balance through transition",
    healthFocus: ["Hormonal Balance", "Energy", "Mood"],
    keyBenefits: [
      "Supports hormonal equilibrium",
      "Reduces menopausal discomfort",
      "Promotes mood stability",
    ],
    ingredients: [
      { name: "Maca Root", dose: "2000mg", benefit: "Hormonal adaptogen" },
      { name: "Red Clover Isoflavones", dose: "80mg", benefit: "Phytoestrogen support" },
      { name: "Shatavari", dose: "500mg", benefit: "Female hormonal tonic" },
      { name: "Rhodiola Rosea", dose: "200mg", benefit: "Stress & energy adaptogen" },
    ],
    price: 74,
    imageUrl: "/images/products/menopause-support.jpg",
    description:
      "A botanical formula designed for peri- and post-menopausal women seeking natural hormonal support.",
    science:
      "Red clover isoflavones at 80mg/day have shown significant reduction in hot flash frequency in systematic reviews. Maca demonstrates HRT-like benefits without hormonal activity.",
    recommendedFor: ["Peri-menopause", "Post-menopause", "Hormonal transitions"],
  },
  {
    id: "vasomotor-relief",
    name: "Vasomotor Relief",
    slug: "vasomotor-relief",
    tagline: "Targeted hot flash and night sweat support",
    healthFocus: ["Hormonal Balance", "Sleep"],
    keyBenefits: [
      "Reduces hot flash frequency",
      "Minimizes night sweats",
      "Supports thermoregulation",
    ],
    ingredients: [
      { name: "Black Cohosh", dose: "40mg", benefit: "Vasomotor symptom relief" },
      { name: "Sage Extract", dose: "300mg", benefit: "Night sweat reduction" },
      { name: "Pycnogenol", dose: "100mg", benefit: "Vasodilation & circulation" },
    ],
    price: 62,
    imageUrl: "/images/products/vasomotor-relief.jpg",
    description:
      "A targeted botanical formula for managing moderate to severe vasomotor symptoms during menopause.",
    science:
      "Black cohosh at 40mg is the most studied botanical for vasomotor symptoms, with meta-analyses showing a 26% reduction in hot flash frequency.",
    recommendedFor: ["Hot flashes", "Night sweats", "Peri/post-menopause"],
  },
  {
    id: "neuro-clarity",
    name: "Neuro Clarity",
    slug: "neuro-clarity",
    tagline: "Cognitive sharpness and mental resilience",
    healthFocus: ["Brain Health", "Cognitive Function"],
    keyBenefits: [
      "Supports memory and focus",
      "Reduces brain fog",
      "Neuroprotective support",
    ],
    ingredients: [
      { name: "Omega-3 (EPA/DHA)", dose: "1000mg/500mg", benefit: "Neuronal membrane integrity" },
      { name: "Phosphatidylserine", dose: "200mg", benefit: "Cognitive function" },
      { name: "Lion's Mane Extract", dose: "500mg", benefit: "NGF support" },
      { name: "Bacopa Monnieri", dose: "300mg", benefit: "Memory consolidation" },
    ],
    price: 79,
    imageUrl: "/images/products/neuro-clarity.jpg",
    description:
      "A comprehensive nootropic formula combining omega-3 fatty acids with evidence-based botanical cognitive enhancers.",
    science:
      "Omega-3 DHA is structurally essential for neuronal membranes. Lion's Mane stimulates Nerve Growth Factor (NGF) synthesis, supporting neuroplasticity.",
    recommendedFor: ["Brain fog", "Cognitive decline concerns", "Mental performance"],
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
