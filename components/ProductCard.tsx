"use client";

import Link from "next/link";
import { useState } from "react";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import { HeartIcon } from "./ui/icons";
import { formatCurrency, type Product } from "@/lib/products";

/**
 * Editorial product card — generous imagery, quiet typography,
 * quick-add and wishlist that appear gently on hover (and are always
 * reachable on touch). Never crowded.
 */
export default function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);

  return (
    <article className="group relative">
      <Link
        href={`/product/${product.slug}`}
        className="block overflow-hidden rounded-[2px]"
        aria-label={product.name}
      >
        <div className="relative aspect-[3/4]">
          <div className="img-breathe h-full w-full">
            <ImagePlaceholder tone={product.tone} label={product.fabric} />
          </div>

          {product.badge && (
            <span className="absolute left-3 top-3 bg-jasmine/90 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm">
              {product.badge}
            </span>
          )}

          {/* quick add — slides up on hover, stays visible on touch */}
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100">
            <span className="block bg-charcoal/90 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-jasmine backdrop-blur-sm">
              Quick Add
            </span>
          </div>
        </div>
      </Link>

      {/* wishlist toggle */}
      <button
        type="button"
        onClick={() => setWished((w) => !w)}
        aria-pressed={wished}
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-jasmine/85 text-charcoal backdrop-blur-sm transition-colors hover:text-mango"
      >
        <HeartIcon
          className="h-[18px] w-[18px]"
          fill={wished ? "var(--color-mango)" : "none"}
          stroke={wished ? "var(--color-mango)" : "currentColor"}
        />
      </button>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-mango">
            {product.collection}
          </p>
          <h3 className="mt-1 font-display text-xl leading-tight">
            <Link href={`/product/${product.slug}`} className="hover:text-mango transition-colors">
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="whitespace-nowrap pt-1 text-sm font-medium text-charcoal">
          {formatCurrency(product.price)}
        </p>
      </div>

      {/* colour swatches */}
      <div className="mt-2.5 flex items-center gap-1.5">
        {product.colors.map((c) => (
          <span
            key={c.name}
            title={c.name}
            className="h-3.5 w-3.5 rounded-full border border-line"
            style={{ background: c.hex }}
          />
        ))}
      </div>
    </article>
  );
}
