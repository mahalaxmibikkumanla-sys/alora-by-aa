/**
 * Delicate jasmine line-art sprig — a decorative botanical accent.
 * Purely ornamental; hidden from assistive tech.
 */
export default function JasmineSprig({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M2 20 C30 20 40 12 60 20 C80 28 92 20 118 20"
        stroke="var(--color-sage)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[20, 45, 60, 75, 100].map((x, i) => (
        <g key={x}>
          <path
            d={`M${x} 20 q -3 ${i % 2 ? -9 : 9} -9 ${i % 2 ? -11 : 11}`}
            stroke="var(--color-sage)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <circle
            cx={x - 9}
            cy={20 + (i % 2 ? -11 : 11)}
            r="2.4"
            fill="var(--color-jasmine)"
            stroke="var(--color-mango)"
            strokeWidth="0.8"
          />
        </g>
      ))}
    </svg>
  );
}
