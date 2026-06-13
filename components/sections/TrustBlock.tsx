import Reveal from "../ui/Reveal";
import type { SVGProps } from "react";

const items = [
  { title: "Secure Payments", body: "Encrypted checkout with trusted global providers.", Icon: ShieldIcon },
  { title: "Worldwide Shipping", body: "Carefully delivered to India, US, UK, UAE & beyond.", Icon: GlobeIcon },
  { title: "Easy Exchanges", body: "Simple 14-day exchanges for the perfect fit.", Icon: SwapIcon },
  { title: "Wrapped by Hand", body: "Every order arrives in premium, gift-ready packaging.", Icon: GiftIcon },
];

export default function TrustBlock() {
  return (
    <section className="bg-ivory">
      <div className="container-px py-16 lg:py-20">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80} className="flex items-start gap-4">
              <it.Icon className="mt-0.5 h-9 w-9 shrink-0 text-mango" />
              <div>
                <h3 className="font-display text-xl leading-tight">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-taupe">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const ic = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ShieldIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <path d="M16 3l11 4v8c0 7-4.7 11.5-11 14C9.7 26.5 5 22 5 15V7z" />
      <path d="M11.5 16l3 3 6-6" />
    </svg>
  );
}
function GlobeIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16h24M16 4c4 4 4 20 0 24M16 4c-4 4-4 20 0 24" />
    </svg>
  );
}
function SwapIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <path d="M6 11h17l-4-4M26 21H9l4 4" />
    </svg>
  );
}
function GiftIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} {...p}>
      <path d="M5 13h22v13H5zM5 13l3-5a3 3 0 0 1 5 0l3 5M27 13l-3-5a3 3 0 0 0-5 0l-3 5M16 13v13" />
    </svg>
  );
}
