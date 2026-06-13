import ImagePlaceholder from "../ui/ImagePlaceholder";
import Reveal from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";

/**
 * Immersive summer-memory storytelling — an editorial mosaic that creates
 * aspiration rather than selling product directly.
 */
export default function Lifestyle() {
  return (
    <section className="bg-ivory">
      <div className="container-px py-20 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">A Summer State of Mind</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
            Made for slow mornings and golden evenings.
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4 lg:gap-6">
          <Reveal className="col-span-2 row-span-2">
            <ImagePlaceholder tone="dawn" label="Sunlight through linen curtains" className="h-full" />
          </Reveal>
          <Reveal delay={80}>
            <ImagePlaceholder tone="sage" label="Jasmine in bloom" className="h-full" />
          </Reveal>
          <Reveal delay={160}>
            <ImagePlaceholder tone="gold" label="Mango season" className="h-full" />
          </Reveal>
          <Reveal delay={120} className="col-span-2">
            <ImagePlaceholder tone="sand" label="Calm ocean waves at dusk" className="h-full" />
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <ButtonLink href="/collections" variant="secondary" size="lg">
            Discover the Lookbook
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
