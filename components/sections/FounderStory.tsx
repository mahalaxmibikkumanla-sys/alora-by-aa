import { ButtonLink } from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Reveal from "../ui/Reveal";
import JasmineSprig from "../ui/JasmineSprig";

export default function FounderStory() {
  return (
    <section className="bg-ivory">
      <div className="container-px grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        {/* portrait pair */}
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] translate-y-6">
              <ImagePlaceholder tone="sand" label="Alekhya, at the studio" />
            </div>
            <div className="aspect-[3/4]">
              <ImagePlaceholder tone="sage" label="Akhila, choosing fabric" />
            </div>
          </div>
        </Reveal>

        {/* story */}
        <Reveal as="div" delay={120} className="order-1 lg:order-2">
          <JasmineSprig className="w-28 opacity-80" />
          <p className="eyebrow mt-4">Our Story</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
            Two friends, one shared dream of timeless beauty.
          </h2>
          <div className="mt-6 space-y-4 text-[0.97rem] leading-relaxed text-taupe">
            <p>
              AlorA began the way the best things do — between two friends,
              <strong className="font-medium text-charcoal"> Alekhya</strong> and
              <strong className="font-medium text-charcoal"> Akhila</strong>, over
              slow summer afternoons and a shared love of beautifully made things.
            </p>
            <p>
              We remembered jasmine blooming in the evening, mango season at our
              grandmothers&rsquo; homes, and cotton dresses moving in a warm
              breeze. We wanted to fold that feeling into every piece we make.
            </p>
            <p>
              Each garment is crafted slowly, with real attention to fabric, fit,
              and the quiet confidence of the woman who&rsquo;ll wear it.
            </p>
          </div>
          <p className="mt-6 font-display text-2xl italic text-charcoal">
            — Alekhya &amp; Akhila
          </p>
          <ButtonLink href="/about" variant="ghost" className="mt-8">
            Read our full story →
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
