import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import JasmineSprig from "@/components/ui/JasmineSprig";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description: "AlorA began between two friends. Meet Alekhya & Akhila.",
};

export default function About() {
  return (
    <div className="bg-jasmine">
      <PageHeader
        eyebrow="The Founders"
        title="Two friends, one shared dream"
        subtitle="AlorA is the story of Alekhya and Akhila — a friendship built on the love of beautifully made things."
      />

      <section className="container-px grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Photo
              imageKey="W2"
              alt="Alekhya and Akhila at the beginning"
              tone="gold"
              sizes="(min-width:1024px) 25vw, 50vw"
              className="aspect-[3/4] translate-y-6 rounded-[2px]"
            />
            <Photo
              imageKey="W6"
              alt="The two founders laughing together"
              tone="dawn"
              sizes="(min-width:1024px) 25vw, 50vw"
              className="aspect-[3/4] rounded-[2px]"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col justify-center" delay={120}>
          <JasmineSprig className="w-28 opacity-80" />
          <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
            A friendship rooted in beauty.
          </h2>
          <div className="mt-8 space-y-4 text-[0.97rem] leading-relaxed text-taupe">
            <p>
              Alekhya and Akhila met years ago over a shared love of warm summers, golden-hour light, and the feeling of wearing something beautifully made. On slow afternoons, they talked about the clothes they wished existed — pieces that felt handmade, that honoured the body, that didn't fade with the season.
            </p>
            <p>
              In 2024, that conversation became AlorA. Every piece is a reflection of their friendship, their values, and their belief that luxury shouldn't feel distant or cold. It should feel like discovering something precious that was always meant for you.
            </p>
            <p>
              Today, AlorA dresses women who understand that the best things take time. Women who choose quality over quantity, presence over noise, and authenticity over perfection.
            </p>
          </div>
          <ButtonLink href="/shop" variant="ghost" className="mt-8">
            Shop the collection →
          </ButtonLink>
        </Reveal>
      </section>

      <section className="bg-ivory">
        <div className="container-px max-w-2xl py-16 text-center lg:py-24">
          <p className="eyebrow">Our Values</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
            How we do what we do.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              ["Slow & Intentional", "Every piece takes time. Rushed beauty is never luxury."],
              ["Crafted by Hand", "We work with artisans who care. Construction matters."],
              ["Comfort First", "Luxury that makes you uncomfortable isn't luxury."],
              ["Timeless, Always", "Trends fade. Beauty lasts for many summers."],
            ].map(([t, d]) => (
              <div key={t}>
                <h3 className="font-display text-xl text-charcoal">{t}</h3>
                <p className="mt-2 text-sm text-taupe">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
