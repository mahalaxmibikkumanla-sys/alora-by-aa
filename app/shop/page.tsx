"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/ui/Reveal";
import JasmineSprig from "@/components/ui/JasmineSprig";
import { products } from "@/lib/products";

const collections = ["All", "Summer Bloom", "Slow Mornings", "Golden Hour"] as const;

const sorts = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest",
  rating: "Top Rated",
} as const;
type SortKey = keyof typeof sorts;

export default function ShopPage() {
  const [collection, setCollection] = useState<(typeof collections)[number]>("All");
  const [sort, setSort] = useState<SortKey>("featured");

  const visible = useMemo(() => {
    let list = products.filter(
      (p) => collection === "All" || p.collection === collection,
    );
    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "newest":
          return Number(b.isNew ?? false) - Number(a.isNew ?? false);
        case "rating":
          return b.rating - a.rating;
        default:
          return Number(b.bestSeller ?? false) - Number(a.bestSeller ?? false);
      }
    });
    return list;
  }, [collection, sort]);

  return (
    <div className="bg-jasmine pb-24 lg:pb-0">
      {/* Intro */}
      <section className="bg-ivory">
        <div className="container-px py-14 text-center lg:py-20">
          <JasmineSprig className="mx-auto w-28 opacity-80" />
          <p className="eyebrow mt-4">The Collection</p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-tight">
            Shop All
          </h1>
          <p className="mx-auto mt-4 max-w-md text-taupe">
            Handcrafted pieces made slowly, to be worn for many summers. Take
            your time — everything here is made to last.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="sticky top-[105px] z-30 border-y border-line bg-jasmine/90 backdrop-blur-md">
        <div className="container-px flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {collections.map((c) => (
              <button
                key={c}
                onClick={() => setCollection(c)}
                className={`rounded-full border px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  collection === c
                    ? "border-charcoal bg-charcoal text-jasmine"
                    : "border-line text-taupe hover:border-mango hover:text-mango"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="text-[0.7rem] uppercase tracking-[0.14em] text-taupe">
              {visible.length} pieces
            </span>
            <label className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-taupe">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="border-b border-line bg-transparent py-1 pr-6 font-sans text-xs text-charcoal focus:border-mango focus:outline-none"
              >
                {Object.entries(sorts).map(([k, label]) => (
                  <option key={k} value={k}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container-px py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {visible.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
