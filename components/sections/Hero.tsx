import { ButtonLink } from "../ui/Button";
import Photo from "../ui/Photo";
import WaveDivider from "../ui/WaveDivider";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        {/* full-bleed editorial image */}
        <div className="absolute inset-0">
          <Photo
            imageKey="F11"
            alt="A woman in a soft peach dress bathed in dreamy golden-hour light"
            tone="dawn"
            priority
            sizes="100vw"
            className="h-full w-full"
          />
        </div>
        {/* Legibility scrim — darker where the copy sits (bottom on mobile, left
            on desktop) while the warm photo glows through on the open side. */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-espresso/25 to-transparent lg:bg-gradient-to-r lg:from-espresso/70 lg:via-espresso/30 lg:to-transparent" />

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
