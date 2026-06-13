import type { Tone } from "@/components/ui/ImagePlaceholder";

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: number; // in INR (base currency)
  /** photography tone stand-in until real images are wired */
  tone: Tone;
  fabric: string;
  colors: { name: string; hex: string }[];
  badge?: string; // e.g. "Best Seller", "New", "Limited"
  bestSeller?: boolean;
};

/** Base prices are in INR; formatCurrency converts for display. */
export const products: Product[] = [
  {
    id: "p1",
    slug: "jasmine-wrap-dress",
    name: "Jasmine Wrap Dress",
    collection: "Summer Bloom",
    price: 8900,
    tone: "ivory",
    fabric: "Hand-loomed cotton poplin",
    colors: [
      { name: "Jasmine White", hex: "#fdfbf6" },
      { name: "Sand", hex: "#e7d8c2" },
    ],
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p2",
    slug: "mango-grove-midi",
    name: "Mango Grove Midi",
    collection: "Summer Bloom",
    price: 10400,
    tone: "gold",
    fabric: "Silk-blend twill",
    colors: [
      { name: "Mango Gold", hex: "#c0913f" },
      { name: "Ivory", hex: "#f6efe3" },
    ],
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p3",
    slug: "coastal-linen-set",
    name: "Coastal Linen Set",
    collection: "Slow Mornings",
    price: 11900,
    tone: "sand",
    fabric: "Pure French linen",
    colors: [
      { name: "Soft Sand", hex: "#e7d8c2" },
      { name: "Sage", hex: "#9aa88c" },
    ],
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p4",
    slug: "evening-sage-gown",
    name: "Evening Sage Gown",
    collection: "Golden Hour",
    price: 16500,
    tone: "sage",
    fabric: "Crinkled silk georgette",
    colors: [
      { name: "Soft Sage", hex: "#9aa88c" },
      { name: "Ivory", hex: "#f6efe3" },
    ],
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p5",
    slug: "grandmothers-garden-blouse",
    name: "Grandmother's Garden Blouse",
    collection: "Slow Mornings",
    price: 6400,
    tone: "dawn",
    fabric: "Embroidered organic cotton",
    colors: [{ name: "Dawn Blush", hex: "#ead7c4" }],
    badge: "New",
  },
  {
    id: "p6",
    slug: "monsoon-charcoal-trench",
    name: "Monsoon Charcoal Trench",
    collection: "Golden Hour",
    price: 18900,
    tone: "shade",
    fabric: "Water-resistant cotton gabardine",
    colors: [{ name: "Deep Charcoal", hex: "#2b2926" }],
    badge: "Limited",
  },
];

export const bestSellers = products.filter((p) => p.bestSeller);

/** Minimal multi-currency display (mock rates — real FX comes with checkout). */
const RATES: Record<string, { rate: number; symbol: string; code: string }> = {
  INR: { rate: 1, symbol: "₹", code: "INR" },
  USD: { rate: 0.012, symbol: "$", code: "USD" },
  GBP: { rate: 0.0095, symbol: "£", code: "GBP" },
  AED: { rate: 0.044, symbol: "AED ", code: "AED" },
};

export function formatCurrency(inr: number, currency: keyof typeof RATES = "INR") {
  const { rate, symbol } = RATES[currency];
  const value = Math.round(inr * rate);
  return `${symbol}${value.toLocaleString("en-IN")}`;
}
