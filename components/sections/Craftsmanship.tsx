import Reveal from "../ui/Reveal";
import WaveDivider from "../ui/WaveDivider";
import Photo from "../ui/Photo";
import type { SVGProps } from "react";

const pillars = [
  {
    title: "Considered Fabric",
    body: "Natural cottons, linens and silk-blends, sourced for how they feel against the skin in summer heat.",
    Icon: FabricIcon,
  },
  {
    title: "Made by Hand",
    body: "Cut and finished by skilled artisans in small batches — never rushed, never mass-produced.",
    Icon: HandIcon,
  },
  {
    title: "Built for Comfort",
    body: "Fits tested on real bodies, with movement, breathability and ease designed into every seam.",
    Icon: ComfortIcon,
  },
  {
    title: "Made to Last",
    body: "Reinforced construction and timeless silhouettes — pieces meant to be worn for many summers.",
    Icon: LeafIcon,
  },
];

export default function Craftsmanship() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-jasmine">
      {/* faint draped-fabric texture for depth */}
      <div className="absolute inset-0 opacity-[0.12]">
        <Photo
          imageKey="T5"
          alt=""
          tone="shade"
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div className="container-px relative z-10 py-20 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-mango-soft">Craftsmanship</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-jasmine">
            The quiet luxury of being well made.
          </h2>
          <p className="mt-5 text-jasmine/75">
            Real craftsmanship is felt before it is seen — in the weight of the
            cloth, the fall of a hem, the comfort of a perfect fit.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="text-center">
              <p.Icon className="mx-auto h-12 w-12 text-mango-soft" />
              <h3 className="mt-5 font-display text-2xl text-jasmine">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-jasmine/70">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
      {/* curve into the best-sellers (jasmine) */}
      <WaveDivider fill="var(--color-jasmine)" />
    </section>
  );
}

/* ---- delicate line icons (1.2px) ---- */
const ic = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function FabricIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <path d="M8 14c4 3 8 3 12 0s8-3 12 0 8 3 8 0" />
      <path d="M8 24c4 3 8 3 12 0s8-3 12 0 8 3 8 0" />
      <path d="M8 34c4 3 8 3 12 0s8-3 12 0 8 3 8 0" />
    </svg>
  );
}
function HandIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <path d="M16 24V14a3 3 0 0 1 6 0v8m0-2v-8a3 3 0 0 1 6 0v10m0-6a3 3 0 0 1 6 0v12a10 10 0 0 1-10 10h-2a10 10 0 0 1-9-5l-4-7a3 3 0 0 1 5-3l2 3" />
    </svg>
  );
}
function ComfortIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 14v10l7 4" />
    </svg>
  );
}
function LeafIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <path d="M10 38C10 22 22 12 38 10c2 16-8 28-24 28Z" />
      <path d="M16 32C22 24 28 20 34 18" />
    </svg>
  );
}
