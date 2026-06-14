import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore our curated collections.",
};

const collections = [
  {
    slug: "summer-bloom",
    name: "Summer Bloom",
    desc: "Golden-hour pieces in soft golds and jasmine whites.",
    img: "F6" as const,
  },
  {
    slug: "slow-mornings",
    name: "Slow Mornings",
    desc: "Breathable linens and soft cottons for peaceful days.",
    img: "F2" as const,
  },
  {
    slug: "golden-hour",
    name: "Golden Hour",
    desc: "Elegance for evenings — silk and structured beauty.",
    img: "F10" as const,
  },
];

export default function Collections() {
  return (
    <div className="bg-jasmine">
      <PageHeader
        eyebrow="Collections"
        title="Curated for every moment"
        subtitle="Each collection tells a story of summer, beauty, and intention."
      />

      <section className="container-px py-16 lg:py-24">
        <div className="grid gap-12 lg:gap-16">
          {collections.map((c) => (
            <Reveal key={c.slug} className="group">
              <Link href={`/shop?collection=${c.name}`} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <Photo
                  imageKey={c.img}
                  alt={c.name}
                  tone="sand"
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="aspect-[4/5] w-full rounded-[2px] group-hover:opacity-90 transition-opacity"
                />
                <div>
                  <p className="eyebrow">New Collection</p>
                  <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight group-hover:text-mango transition-colors">
                    {c.name}
                  </h2>
                  <p className="mt-4 text-[0.97rem] leading-relaxed text-taupe">
                    {c.desc}
                  </p>
                  <span className="mt-6 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-charcoal group-hover:text-mango transition-colors">
                    Explore Collection →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
