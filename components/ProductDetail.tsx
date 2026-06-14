"use client";

import { useState } from "react";
import Link from "next/link";
import Photo from "./ui/Photo";
import ProductCard from "./ProductCard";
import { Button } from "./ui/Button";
import Reveal from "./ui/Reveal";
import JasmineSprig from "./ui/JasmineSprig";
import { HeartIcon } from "./ui/icons";
import { formatCurrency, type Product } from "@/lib/products";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const delivery = estimateDelivery();

  function addToCart() {
    if (!size) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className="bg-jasmine pb-24 lg:pb-0">
      {/* breadcrumb */}
      <nav className="container-px pt-6 text-[0.7rem] uppercase tracking-[0.16em] text-taupe">
        <Link href="/" className="hover:text-mango">Home</Link>
        <span className="px-2">/</span>
        <Link href="/shop" className="hover:text-mango">Shop</Link>
        <span className="px-2">/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      {/* gallery + purchase panel */}
      <div className="container-px grid gap-10 py-8 lg:grid-cols-2 lg:gap-16">
        {/* gallery */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          {/* thumbnails */}
          <div className="flex gap-3 sm:flex-col">
            {product.images.map((img, i) => (
              <button
                key={img + i}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-[2px] border transition-colors ${
                  activeImg === i ? "border-mango" : "border-line hover:border-sand-deep"
                }`}
              >
                <Photo
                  imageKey={img}
                  alt=""
                  tone={product.tone}
                  sizes="64px"
                  className="h-full w-full"
                />
              </button>
            ))}
          </div>
          {/* main image */}
          <div className="relative flex-1">
            <Photo
              imageKey={product.images[activeImg]}
              alt={product.name}
              tone={product.tone}
              priority
              sizes="(min-width:1024px) 45vw, 100vw"
              className="aspect-[3/4] w-full rounded-[2px]"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-jasmine/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* sticky purchase panel */}
        <div className="lg:relative">
          <div className="lg:sticky lg:top-32">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-mango">
              {product.collection}
            </p>
            <h1 className="mt-2 font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
              {product.name}
            </h1>

            {/* rating */}
            <div className="mt-3 flex items-center gap-2 text-sm text-taupe">
              <Stars value={product.rating} />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-line">·</span>
              <a href="#reviews" className="underline-offset-2 hover:text-mango hover:underline">
                {product.reviewCount} reviews
              </a>
            </div>

            {/* price */}
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-3xl text-charcoal">
                {formatCurrency(product.price)}
              </span>
              {onSale && (
                <>
                  <span className="text-base text-taupe line-through">
                    {formatCurrency(product.compareAtPrice!)}
                  </span>
                  <span className="bg-mango/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-mango">
                    Save {formatCurrency(product.compareAtPrice! - product.price)}
                  </span>
                </>
              )}
            </div>

            <p className="mt-5 text-[0.97rem] leading-relaxed text-taupe">
              {product.shortDesc}
            </p>

            {/* colour */}
            <div className="mt-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal">
                Colour — <span className="text-taupe">{color}</span>
              </p>
              <div className="mt-3 flex gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    aria-label={c.name}
                    aria-pressed={color === c.name}
                    title={c.name}
                    className={`h-9 w-9 rounded-full border-2 transition-all ${
                      color === c.name ? "border-mango p-0.5" : "border-line p-0.5 hover:border-sand-deep"
                    }`}
                  >
                    <span
                      className="block h-full w-full rounded-full border border-line"
                      style={{ background: c.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* size */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal">
                  Size
                </p>
                <a href="#size-guide" className="text-[0.7rem] uppercase tracking-[0.14em] text-taupe underline-offset-2 hover:text-mango hover:underline">
                  Size guide
                </a>
              </div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s.label}
                    disabled={!s.inStock}
                    onClick={() => setSize(s.label)}
                    aria-pressed={size === s.label}
                    className={`relative h-11 min-w-[3rem] px-2 text-sm font-medium transition-colors ${
                      !s.inStock
                        ? "cursor-not-allowed border border-line text-line line-through"
                        : size === s.label
                          ? "border border-charcoal bg-charcoal text-jasmine"
                          : "border border-line text-charcoal hover:border-charcoal"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              {size && product.sizes.find((s) => s.label === size)?.low && (
                <p className="mt-2 text-[0.72rem] text-mango">
                  Only a few left in {size} — almost gone.
                </p>
              )}
            </div>

            {/* quantity + add */}
            <div className="mt-7 flex items-stretch gap-3">
              <div className="flex items-center border border-line">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="h-12 w-11 text-lg text-charcoal hover:text-mango"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="h-12 w-11 text-lg text-charcoal hover:text-mango"
                >
                  +
                </button>
              </div>
              <Button
                onClick={addToCart}
                disabled={!size}
                size="lg"
                className="flex-1"
              >
                {added ? "Added to bag ✓" : size ? "Add to Bag" : "Select a size"}
              </Button>
              <button
                onClick={() => setWished((w) => !w)}
                aria-pressed={wished}
                aria-label="Add to wishlist"
                className="grid w-12 shrink-0 place-items-center border border-line text-charcoal transition-colors hover:border-mango hover:text-mango"
              >
                <HeartIcon
                  className="h-5 w-5"
                  fill={wished ? "var(--color-mango)" : "none"}
                  stroke={wished ? "var(--color-mango)" : "currentColor"}
                />
              </button>
            </div>

            {/* trust mini-row */}
            <ul className="mt-7 space-y-2.5 border-t border-line pt-6 text-sm text-taupe">
              <li className="flex items-center gap-2.5">
                <Dot /> Free worldwide shipping over ₹15,000 ·{" "}
                <span className="text-charcoal">Arrives by {delivery}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Dot /> Easy 14-day exchanges
              </li>
              <li className="flex items-center gap-2.5">
                <Dot /> Secure checkout · Wrapped by hand
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* story sections */}
      <div className="container-px max-w-3xl py-10">
        <Accordion title="The Details" defaultOpen>
          <p className="mb-4">{product.description}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {product.details.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <Dot className="mt-2" /> {d}
              </li>
            ))}
          </ul>
        </Accordion>

        <Accordion title="Fabric Story">
          <p className="mb-2 font-medium text-charcoal">{product.fabric}</p>
          <p>{product.fabricStory}</p>
        </Accordion>

        <Accordion title="Care">
          <ul className="space-y-2">
            {product.care.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <Dot className="mt-2" /> {c}
              </li>
            ))}
          </ul>
        </Accordion>

        <div id="size-guide">
          <Accordion title="Size Guide">
            <SizeGuide />
          </Accordion>
        </div>
      </div>

      {/* trust block */}
      <section className="bg-ivory">
        <div className="container-px grid gap-6 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Secure Payments", "Encrypted checkout, trusted providers"],
            ["Worldwide Shipping", "Delivered with care, globally"],
            ["Easy Exchanges", "Simple 14-day exchanges"],
            ["Wrapped by Hand", "Premium, gift-ready packaging"],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-1 text-sm text-taupe">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* reviews summary */}
      <section id="reviews" className="container-px py-16 text-center">
        <JasmineSprig className="mx-auto w-24 opacity-80" />
        <p className="eyebrow mt-4">Customer Love</p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Stars value={product.rating} />
          <span className="font-display text-3xl">{product.rating.toFixed(1)}</span>
        </div>
        <p className="mt-2 text-sm text-taupe">Based on {product.reviewCount} verified reviews</p>
        <blockquote className="mx-auto mt-6 max-w-xl font-display text-2xl leading-snug text-charcoal">
          &ldquo;Beautifully made and so comfortable — it feels like it was made just for me.&rdquo;
        </blockquote>
        <p className="mt-3 text-[0.7rem] uppercase tracking-[0.16em] text-taupe">
          Verified Customer
        </p>
      </section>

      {/* styling suggestions */}
      <section className="bg-jasmine">
        <div className="container-px pb-20">
          <Reveal className="text-center">
            <p className="eyebrow">Complete the Look</p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.5rem)]">
              You may also love
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group border-b border-line py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl text-charcoal marker:hidden">
        {title}
        <span className="text-mango transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-4 text-[0.97rem] leading-relaxed text-taupe">{children}</div>
    </details>
  );
}

function SizeGuide() {
  const rows = [
    ["XS", "32", "24", "34"],
    ["S", "34", "26", "36"],
    ["M", "36", "28", "38"],
    ["L", "38", "30", "40"],
    ["XL", "40", "32", "42"],
  ];
  return (
    <div className="overflow-hidden rounded-[2px] border border-line">
      <table className="w-full text-left text-sm">
        <thead className="bg-ivory text-[0.7rem] uppercase tracking-[0.12em] text-charcoal">
          <tr>
            {["Size", "Bust (in)", "Waist (in)", "Hip (in)"].map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-taupe">
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-line">
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-2.5 ${i === 0 ? "font-medium text-charcoal" : ""}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bg-jasmine px-4 py-3 text-[0.8rem] text-taupe">
        Between sizes? We recommend sizing up for a relaxed, breezy fit.
      </p>
    </div>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5 text-mango" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < Math.round(value) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1">
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.5l1-5.8L1.6 7.6l5.8-.8z" />
        </svg>
      ))}
    </span>
  );
}

function Dot({ className = "" }: { className?: string }) {
  return <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-mango ${className}`} />;
}

function estimateDelivery() {
  const d = new Date();
  d.setDate(d.getDate() + 6);
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}
