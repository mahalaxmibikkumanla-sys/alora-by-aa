import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Craftsmanship",
  description: "The quiet luxury of being well made.",
};

export default function Craftsmanship() {
  return (
    <div className="bg-jasmine">
      <PageHeader
        eyebrow="Our Craft"
        title="The quiet luxury of being well made"
        subtitle="Real craftsmanship is felt before it's seen — in the weight of the cloth, the fall of a hem, the comfort of a perfect fit."
      />

      <section className="container-px max-w-3xl py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Photo
              imageKey="T1"
              alt="Fabric texture close-up"
              tone="sand"
              sizes="(min-width:1024px) 40vw, 100vw"
              className="aspect-square rounded-[2px]"
            />
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center">
            <div className="space-y-6">
              {[
                {
                  title: "Considered Fabric",
                  desc: "Natural cottons, linens, and silk-blends sourced for how they feel against the skin in summer heat.",
                },
                {
                  title: "Made by Hand",
                  desc: "Cut and finished by skilled artisans in small batches — never rushed, never mass-produced.",
                },
                {
                  title: "Built for Comfort",
                  desc: "Fits tested on real bodies, with movement, breathability, and ease designed into every seam.",
                },
                {
                  title: "Made to Last",
                  desc: "Reinforced construction and timeless silhouettes — pieces meant to be worn for many summers.",
                },
              ].map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-xl text-charcoal">{p.title}</h3>
                  <p className="mt-2 text-taupe">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
