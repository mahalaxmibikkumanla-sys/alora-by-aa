/**
 * Placeholder photography registry.
 *
 * Every brand image flows through here so swapping in real photography later
 * is a one-file change. Keys are grouped by role; each value is an Unsplash
 * photo id. `photo(id)` builds a sized CDN URL; Next/Image optimises further.
 *
 * All ids below were visually vetted for the AlorA aesthetic: warm linen
 * fashion, jasmine, soft sunsets, golden-hour friendship, fabric detail,
 * and natural portraits.
 */

const IDS = {
  // Fashion — garments on models (product + editorial)
  F1: "1764298493197-a1c1cce57800", // cream flowing dress, concrete
  F2: "1747396206869-75ea57b325ce", // beige linen shift, studio
  F3: "1564474881250-b40b4464cd0f", // sage linen dress, forest
  F4: "1752074212249-d1c5e28d1efb", // seated in linen, neutral
  F5: "1585131609775-8eecc878fdfc", // white dress, dark moody
  F6: "1656276926800-b47a0bc5aac0", // beige dress, lavender field, golden
  F8: "1728205104611-061fa1465f85", // beige dress, forest, golden
  F9: "1504051771394-dd2e66b2e08f", // grey-beige dress, holding wheat
  F10: "1623421536321-f4036ba3fe6b", // dress at the ocean, soft
  F11: "1732263993951-36403aca3a1f", // peach dress, dreamy golden light
  F12: "1726672527696-af55e0d85163", // cream dress, white flowers, olive grove
  F13: "1657040006951-c0938ea647bd", // warm hands + dress detail
  F14: "1694971112579-464e82f35a13", // flowing dress on beach, golden hour
  F15: "1564701999220-80741d357cb6", // villa, linen curtains, bicycle

  // Jasmine / botanical
  J1: "1612380635121-411eda9ecbb9",
  J4: "1684472993236-b605bb80ca0b",
  J7: "1676125760182-ba8b7c0e4d9c",

  // Coast / sunsets
  C1: "1507525428034-b723cf961d3e", // soft sunrise beach, pastel
  C7: "1620140786352-43d7e7a1cfcb", // pink-gold sunset beach

  // Founders / friendship (golden hour, two women)
  W2: "1532969200589-57f1fe57aaab", // two friends, backs, golden backlit
  W5: "1575561723050-3a69691d9700", // two women, white, sun flare
  W6: "1607960402358-a5ceb04ebeb3", // two women laughing, warm

  // Fabric detail
  T1: "1528458909336-e7a0adfed0a5", // light linen weave
  T5: "1588610992315-5654831ceebd", // draped cream fabric folds

  // Portraits (reviews)
  P1: "1544005313-94ddf0286df2",
  P5: "1524550158212-33f2ff985344",
  P8: "1604072366595-e75dc92d6bdc",
} as const;

export type ImageKey = keyof typeof IDS;

/** Build a sized Unsplash CDN URL for a registry key. */
export function photo(key: ImageKey, w = 1400): string {
  return `https://images.unsplash.com/photo-${IDS[key]}?auto=format&fit=crop&w=${w}&q=80`;
}
