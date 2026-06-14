import type { ImageKey } from "@/lib/images";
import type { Tone } from "@/components/ui/ImagePlaceholder";

export type SizeOption = { label: string; inStock: boolean; low?: boolean };
export type ColorOption = { name: string; hex: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: number; // base currency: INR
  compareAtPrice?: number; // shown struck-through when on offer
  images: ImageKey[]; // first is the primary; rest feed the PDP gallery
  tone: Tone; // warm fallback while photos load
  shortDesc: string;
  description: string;
  fabric: string;
  fabricStory: string;
  care: string[];
  details: string[];
  sizes: SizeOption[];
  colors: ColorOption[];
  rating: number;
  reviewCount: number;
  badge?: string;
  bestSeller?: boolean;
  isNew?: boolean;
};

const standardSizes = (outOfStock: string[] = [], low: string[] = []): SizeOption[] =>
  ["XS", "S", "M", "L", "XL"].map((label) => ({
    label,
    inStock: !outOfStock.includes(label),
    low: low.includes(label),
  }));

const care = [
  "Gentle cold hand-wash, or dry clean",
  "Do not bleach",
  "Cool iron on reverse",
  "Dry flat, away from direct sun",
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "jasmine-wrap-dress",
    name: "Jasmine Wrap Dress",
    collection: "Summer Bloom",
    price: 8900,
    images: ["F2", "F9", "F12", "F13"],
    tone: "ivory",
    shortDesc: "A softly draped wrap dress that moves like a summer breeze.",
    description:
      "Our most-loved silhouette, the Jasmine Wrap falls in a clean, flattering line and ties at the waist for an effortless fit. Cut from breathable cotton poplin, it carries you from slow mornings to golden evenings.",
    fabric: "Hand-loomed cotton poplin",
    fabricStory:
      "Woven on traditional looms, this lightweight poplin breathes in the heat and softens beautifully with every wash.",
    care,
    details: [
      "Adjustable self-tie waist",
      "Midi length with side slit",
      "Mother-of-pearl buttons",
      "Fully breathable, unlined",
    ],
    sizes: standardSizes([], ["XS"]),
    colors: [
      { name: "Jasmine White", hex: "#fdfbf6" },
      { name: "Soft Sand", hex: "#e7d8c2" },
    ],
    rating: 4.9,
    reviewCount: 128,
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p2",
    slug: "mango-grove-midi",
    name: "Mango Grove Midi",
    collection: "Summer Bloom",
    price: 10400,
    compareAtPrice: 12900,
    images: ["F11", "F8", "F6"],
    tone: "gold",
    shortDesc: "Sunlit mango gold, gathered for gentle movement.",
    description:
      "Named for mango season at our grandmothers' homes, this midi gathers softly at the bodice and flows to a twirl-worthy hem in a warm, golden tone.",
    fabric: "Silk-blend twill",
    fabricStory:
      "A fluid silk-blend twill with a quiet sheen that catches the late-afternoon light.",
    care,
    details: [
      "Smocked back for stretch",
      "Hidden side pockets",
      "Three-quarter sleeves",
      "Lined bodice",
    ],
    sizes: standardSizes(["XL"], ["L"]),
    colors: [
      { name: "Mango Gold", hex: "#c0913f" },
      { name: "Warm Ivory", hex: "#f6efe3" },
    ],
    rating: 4.8,
    reviewCount: 96,
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p3",
    slug: "coastal-linen-set",
    name: "Coastal Linen Set",
    collection: "Slow Mornings",
    price: 11900,
    images: ["F1", "F4", "F14"],
    tone: "sand",
    shortDesc: "A relaxed two-piece for barefoot, salt-air days.",
    description:
      "A breezy top and wide-leg trouser in pure French linen — packs light, wears easy, and only gets better by the sea.",
    fabric: "Pure French linen",
    fabricStory:
      "Garment-washed French linen with a lived-in softness from the very first wear.",
    care,
    details: [
      "Coordinated two-piece set",
      "Elasticated wide-leg trouser",
      "Relaxed boxy top",
      "Naturally temperature-regulating",
    ],
    sizes: standardSizes(),
    colors: [
      { name: "Soft Sand", hex: "#e7d8c2" },
      { name: "Soft Sage", hex: "#9aa88c" },
    ],
    rating: 4.9,
    reviewCount: 74,
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p4",
    slug: "evening-sage-gown",
    name: "Evening Sage Gown",
    collection: "Golden Hour",
    price: 16500,
    images: ["F3", "F8", "F10"],
    tone: "sage",
    shortDesc: "A quietly dramatic gown in soft sage georgette.",
    description:
      "Made for golden-hour celebrations, this column gown skims the body in crinkled silk georgette with a gentle cowl back.",
    fabric: "Crinkled silk georgette",
    fabricStory:
      "Featherlight georgette with a subtle crinkle that moves like water as you walk.",
    care: ["Dry clean only", "Cool iron on reverse", "Store on a padded hanger"],
    details: [
      "Cowl back detail",
      "Concealed zip",
      "Floor-sweeping length",
      "Fully lined",
    ],
    sizes: standardSizes(["XS"], ["S"]),
    colors: [
      { name: "Soft Sage", hex: "#9aa88c" },
      { name: "Warm Ivory", hex: "#f6efe3" },
    ],
    rating: 4.7,
    reviewCount: 52,
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p5",
    slug: "grandmothers-garden-blouse",
    name: "Grandmother's Garden Blouse",
    collection: "Slow Mornings",
    price: 6400,
    images: ["F12", "F9"],
    tone: "dawn",
    shortDesc: "A hand-embroidered blouse, like blooms at dawn.",
    description:
      "Delicate floral embroidery, worked by hand, blooms across a soft organic-cotton blouse with a gently gathered neckline.",
    fabric: "Embroidered organic cotton",
    fabricStory:
      "Certified organic cotton, hand-embroidered by our artisan partners over several days.",
    care,
    details: [
      "Hand-embroidered detailing",
      "Gathered scoop neckline",
      "Balloon sleeves",
      "Button-keyhole back",
    ],
    sizes: standardSizes(),
    colors: [{ name: "Dawn Blush", hex: "#ead7c4" }],
    rating: 4.8,
    reviewCount: 41,
    badge: "New",
    isNew: true,
  },
  {
    id: "p6",
    slug: "monsoon-charcoal-trench",
    name: "Monsoon Charcoal Trench",
    collection: "Golden Hour",
    price: 18900,
    images: ["F5", "F4"],
    tone: "shade",
    shortDesc: "A sculptural trench for soft grey skies.",
    description:
      "A modern take on the trench in water-resistant cotton gabardine — belted, collared, and cut for an elegant drape.",
    fabric: "Water-resistant cotton gabardine",
    fabricStory:
      "Densely woven gabardine with a natural water-resistant finish — no synthetic coating.",
    care: ["Dry clean only", "Reproof as needed", "Do not tumble dry"],
    details: [
      "Self-tie belt",
      "Storm flap & vented back",
      "Deep welt pockets",
      "Horn-effect buttons",
    ],
    sizes: standardSizes(["S"]),
    colors: [{ name: "Deep Charcoal", hex: "#2b2926" }],
    rating: 4.9,
    reviewCount: 33,
    badge: "Limited",
  },
  {
    id: "p7",
    slug: "jaipur-sand-kaftan",
    name: "Jaipur Sand Kaftan",
    collection: "Slow Mornings",
    price: 7600,
    images: ["F1", "F2"],
    tone: "sand",
    shortDesc: "An airy kaftan for the warmest afternoons.",
    description:
      "Loose, light, and endlessly easy — the Jaipur kaftan drapes from the shoulder with a subtle tonal trim.",
    fabric: "Hand-loomed cotton poplin",
    fabricStory:
      "The same breathable poplin as our wrap dress, cut generously for shade and air.",
    care,
    details: [
      "One-size relaxed fit",
      "Tonal neck trim",
      "Side splits",
      "Throw-on ease",
    ],
    sizes: standardSizes(["XL"]),
    colors: [
      { name: "Soft Sand", hex: "#e7d8c2" },
      { name: "Jasmine White", hex: "#fdfbf6" },
    ],
    rating: 4.7,
    reviewCount: 61,
  },
  {
    id: "p8",
    slug: "seabreeze-slip-dress",
    name: "Seabreeze Slip Dress",
    collection: "Summer Bloom",
    price: 9200,
    images: ["F10", "F9"],
    tone: "ivory",
    shortDesc: "A bias-cut slip that floats with every step.",
    description:
      "Cut on the bias for a liquid drape, the Seabreeze slip is the quiet luxury of a single, perfect layer.",
    fabric: "Silk-blend twill",
    fabricStory:
      "A cool, fluid silk-blend that glides over the body without clinging.",
    care: ["Gentle cold hand-wash", "Cool iron on reverse", "Dry flat"],
    details: [
      "Bias-cut drape",
      "Adjustable straps",
      "V-neck front & back",
      "Midi length",
    ],
    sizes: standardSizes([], ["M"]),
    colors: [
      { name: "Warm Ivory", hex: "#f6efe3" },
      { name: "Soft Sand", hex: "#e7d8c2" },
    ],
    rating: 4.6,
    reviewCount: 48,
  },
  {
    id: "p9",
    slug: "olive-grove-wrap-skirt",
    name: "Olive Grove Wrap Skirt",
    collection: "Golden Hour",
    price: 6900,
    images: ["F12", "F3"],
    tone: "sage",
    shortDesc: "A wrap skirt that ties to your perfect fit.",
    description:
      "An adjustable wrap skirt in soft sage, with a fluid midi hem made for warm walks through the grove.",
    fabric: "Crinkled silk georgette",
    fabricStory:
      "Lightweight georgette that catches the breeze and the last of the evening light.",
    care: ["Dry clean only", "Cool iron on reverse"],
    details: [
      "Adjustable wrap & tie",
      "Midi length",
      "Fits a range of sizes",
      "Unlined, breathable",
    ],
    sizes: standardSizes(),
    colors: [
      { name: "Soft Sage", hex: "#9aa88c" },
      { name: "Soft Sand", hex: "#e7d8c2" },
    ],
    rating: 4.8,
    reviewCount: 29,
    badge: "New",
    isNew: true,
  },
  {
    id: "p10",
    slug: "sunlit-cotton-maxi",
    name: "Sunlit Cotton Maxi",
    collection: "Summer Bloom",
    price: 10900,
    images: ["F6", "F11", "F14"],
    tone: "gold",
    shortDesc: "A golden maxi made for long summer evenings.",
    description:
      "Tiered and twirl-ready, the Sunlit maxi captures the warmth of a summer sunset in soft, breathable cotton.",
    fabric: "Hand-loomed cotton poplin",
    fabricStory:
      "Airy, hand-loomed poplin in a warm mango-gold tone that glows at golden hour.",
    care,
    details: [
      "Tiered skirt",
      "Smocked bodice",
      "Adjustable straps",
      "Side pockets",
    ],
    sizes: standardSizes([], ["XS", "S"]),
    colors: [
      { name: "Mango Gold", hex: "#c0913f" },
      { name: "Dawn Blush", hex: "#ead7c4" },
    ],
    rating: 4.9,
    reviewCount: 87,
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    id: "p11",
    slug: "heritage-linen-shirt-dress",
    name: "Heritage Linen Shirt Dress",
    collection: "Slow Mornings",
    price: 9800,
    images: ["F4", "F1"],
    tone: "sand",
    shortDesc: "A tailored shirt dress in pure linen.",
    description:
      "A timeless shirt dress with a softly tailored line, button-through front, and a belt to nip the waist.",
    fabric: "Pure French linen",
    fabricStory:
      "Substantial yet breathable French linen, garment-washed for instant softness.",
    care,
    details: [
      "Button-through front",
      "Self-tie belt",
      "Chest patch pocket",
      "Rolled-sleeve tabs",
    ],
    sizes: standardSizes(["XS"]),
    colors: [
      { name: "Soft Sand", hex: "#e7d8c2" },
      { name: "Jasmine White", hex: "#fdfbf6" },
    ],
    rating: 4.7,
    reviewCount: 55,
  },
  {
    id: "p12",
    slug: "twilight-silk-gown",
    name: "Twilight Silk Gown",
    collection: "Golden Hour",
    price: 19800,
    images: ["F5", "F10"],
    tone: "shade",
    shortDesc: "An understated gown for the evening's last light.",
    description:
      "Pared-back and quietly elegant, the Twilight gown drapes in fluid silk with a deep open back.",
    fabric: "Crinkled silk georgette",
    fabricStory:
      "Pure silk georgette, light as air, with a soft crinkle that moves beautifully.",
    care: ["Dry clean only", "Store on a padded hanger"],
    details: [
      "Open back",
      "Concealed side zip",
      "Floor-length",
      "Fully lined skirt",
    ],
    sizes: standardSizes(["XS", "XL"], ["S"]),
    colors: [{ name: "Deep Charcoal", hex: "#2b2926" }],
    rating: 5.0,
    reviewCount: 24,
    badge: "Limited",
  },
];

export const bestSellers = products.filter((p) => p.bestSeller);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Minimal multi-currency display (mock rates — real FX comes with checkout). */
const RATES: Record<string, { rate: number; symbol: string }> = {
  INR: { rate: 1, symbol: "₹" },
  USD: { rate: 0.012, symbol: "$" },
  GBP: { rate: 0.0095, symbol: "£" },
  AED: { rate: 0.044, symbol: "AED " },
};

export function formatCurrency(inr: number, currency: keyof typeof RATES = "INR") {
  const { rate, symbol } = RATES[currency];
  const value = Math.round(inr * rate);
  return `${symbol}${value.toLocaleString("en-IN")}`;
}
