import { ButtonLink } from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import WaveDivider from "../ui/WaveDivider";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        {/* full-bleed editorial image (deep tone keeps white copy legible;
            real photography later keeps the same scrim treatment) */}
        <div className="absolute inset-0">
          <ImagePlaceholder
            tone="shade"
            rounded={false}
            sprig={false}
            label="Hero — golden-hour coastal editorial, model in flowing cotton"
          />
        </div>
        {/* Legibility scrim — adds depth and guarantees contrast for white copy:
            darker toward the bottom (mobile) and the left (desktop). */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/25 to-charcoal/10 lg:bg-gradient-to-r lg:from-charcoal/70 lg:via-charcoal/30 lg:to-charcoal/10" />

        <div className="container-px relative flex h-full flex-col justify-end pb-24 lg:justify-center lg:pb-0">
          <div className="animate-rise max-w-xl">
            <p className="eyebrow text-mango-soft">AlorA by AA · Summer Bloom</p>
            <h1 className="mt-5 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[1.02] text-jasmine">
              Crafted for the woman who carries elegance effortlessly.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-jasmine/85">
              Handmade pieces that feel like a warm summer morning — soft,
              timeless, and quietly luxurious.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="/shop" variant="primary" size="lg">
                Shop Collection
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="secondary"
                size="lg"
                className="border-jasmine/50 text-jasmine hover:border-mango hover:text-mango"
              >
                Our Story
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* curve into the ivory founder section */}
      <WaveDivider fill="var(--color-ivory)" className="relative z-10" />
    </section>
  );
}
