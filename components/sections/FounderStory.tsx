import { ButtonLink } from "../ui/Button";
import Photo from "../ui/Photo";
import Reveal from "../ui/Reveal";
import JasmineSprig from "../ui/JasmineSprig";

export default function FounderStory() {
  return (
    <section className="bg-ivory">
      <div className="container-px grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        {/* portrait pair */}
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <Photo
              imageKey="W2"
              alt="Two friends sitting together at golden hour, where AlorA began"
              tone="gold"
              sizes="(min-width:1024px) 25vw, 50vw"
              className="aspect-[3/4] translate-y-6"
            />
            <Photo
              imageKey="W6"
              alt="Alekhya and Akhila, the founders of AlorA, laughing together"
              tone="dawn"
              sizes="(min-width:1024px) 25vw, 50vw"
              className="aspect-[3/4]"
            />
          </div>
        </Reveal>

        {/* story */}
        <Reveal as="div" delay={120} className="order-1 lg:order-2">
          <JasmineSprig className="w-28 opacity-80" />
          <p className="eyebrow mt-4">Our Heritage</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
            Two friends, one family tradition of embroidered elegance.
          </h2>
          <div className="mt-6 space-y-4 text-[0.97rem] leading-relaxed text-taupe">
            <p>
              AlorA was born from a shared memory —
              <strong className="font-medium text-charcoal"> Alekhya</strong> and
              <strong className="font-medium text-charcoal"> Akhila</strong> watching
              mothers and grandmothers stitch intricate embroidery into heirloom pieces.
              We wanted to carry that craft forward.
            </p>
            <p>
              We source heritage fabrics from traditional weavers, collaborate with
              artisans who learned embroidery from their families, and stitch each
              piece with intention. Every thread tells a story of generational
              craftsmanship.
            </p>
            <p>
              AlorA pieces are meant to be worn, loved, and passed down — quiet luxury
              that whispers of heritage, not louder trends.
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
