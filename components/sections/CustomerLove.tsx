import Reveal from "../ui/Reveal";
import Photo from "../ui/Photo";
import type { ImageKey } from "@/lib/images";

type Review = {
  quote: string;
  name: string;
  location: string;
  avatar: ImageKey;
};

const reviews: Review[] = [
  {
    quote:
      "The fabric feels like a second skin. I&rsquo;ve never had so many compliments on a single dress.",
    name: "Priya R.",
    location: "Mumbai, India",
    avatar: "P5",
  },
  {
    quote:
      "It arrived wrapped like a gift. You can feel the care in every detail — this is real craftsmanship.",
    name: "Sofia M.",
    location: "London, UK",
    avatar: "P8",
  },
  {
    quote:
      "Elegant, comfortable, and timeless. AlorA has quietly become my favourite wardrobe.",
    name: "Aisha K.",
    location: "Dubai, UAE",
    avatar: "P1",
  },
];

export default function CustomerLove() {
  return (
    <section className="bg-jasmine">
      <div className="container-px py-20 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Stars className="mx-auto" />
          <p className="eyebrow mt-5">Customer Love</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
            Worn and adored, the world over.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-[2px] border border-line bg-ivory/60 p-8">
                <Stars />
                <blockquote
                  className="mt-5 flex-1 font-display text-xl leading-snug text-charcoal"
                  // copy contains a typographic apostrophe entity
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${r.quote}&rdquo;` }}
                />
                <figcaption className="mt-7 flex items-center gap-3">
                  <Photo
                    imageKey={r.avatar}
                    alt={`${r.name}, verified AlorA customer`}
                    tone="sand"
                    sizes="44px"
                    className="h-11 w-11 shrink-0 rounded-full"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-charcoal">{r.name}</span>
                    <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-taupe">
                      Verified · {r.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 text-mango ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.5l1-5.8L1.6 7.6l5.8-.8z" />
        </svg>
      ))}
    </div>
  );
}
