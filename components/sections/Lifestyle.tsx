import Photo from "../ui/Photo";
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
            <Photo
              imageKey="F14"
              alt="Golden evenings by the sea"
              tone="gold"
              sizes="(min-width:1024px) 50vw, 100vw"
              className="h-full w-full"
            />
          </Reveal>
          <Reveal delay={80}>
            <Photo
              imageKey="J7"
              alt="Jasmine in bloom"
              tone="sage"
              sizes="(min-width:1024px) 25vw, 50vw"
              className="h-full w-full"
            />
          </Reveal>
          <Reveal delay={160}>
            <Photo
              imageKey="C7"
              alt="A calm sunset over the water"
              tone="dawn"
              sizes="(min-width:1024px) 25vw, 50vw"
              className="h-full w-full"
            />
          </Reveal>
          <Reveal delay={120} className="col-span-2">
            <Photo
              imageKey="F15"
              alt="Sunlight through linen curtains on a slow morning"
              tone="sand"
              sizes="(min-width:1024px) 50vw, 100vw"
              className="h-full w-full"
            />
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
