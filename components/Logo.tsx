import Link from "next/link";

/**
 * AlorA wordmark + jasmine mark.
 * The mark: three jasmine buds joined by a delicate sage stem.
 * Scales cleanly for header, packaging, labels, and email.
 */
export default function Logo({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "mark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="AlorA by AA — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <JasmineMark className="h-8 w-8 shrink-0" />
      {variant === "full" && (
        <span className="leading-none">
          <span className="block font-display text-2xl tracking-wide text-charcoal">
            Alor<span className="italic">A</span>
          </span>
          <span className="block text-[0.6rem] font-medium uppercase tracking-[0.34em] text-taupe">
            by AA
          </span>
        </span>
      )}
    </Link>
  );
}

export function JasmineMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Three jasmine buds on a stem"
      fill="none"
    >
      {/* delicate sage stem */}
      <path
        d="M24 44 C24 36 22 30 24 24 M24 30 C20 28 17 26 15 22 M24 28 C28 26 31 24 33 20"
        stroke="var(--color-sage)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* three jasmine buds (five soft petals each) */}
      <JasmineBud cx={24} cy={14} r={7} />
      <JasmineBud cx={13} cy={20} r={5} />
      <JasmineBud cx={35} cy={18} r={5} />
    </svg>
  );
}

function JasmineBud({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g>
      {petals.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const px = cx + Math.cos(rad) * r * 0.62;
        const py = cy + Math.sin(rad) * r * 0.62;
        return (
          <ellipse
            key={deg}
            cx={px}
            cy={py}
            rx={r * 0.5}
            ry={r * 0.32}
            transform={`rotate(${deg} ${px} ${py})`}
            fill="var(--color-jasmine)"
            stroke="var(--color-sand-deep)"
            strokeWidth="0.8"
          />
        );
      })}
      {/* mango-gold center */}
      <circle cx={cx} cy={cy} r={r * 0.26} fill="var(--color-mango)" />
    </g>
  );
}
