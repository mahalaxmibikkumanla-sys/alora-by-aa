/**
 * Ocean-inspired curve used as a soft transition between sections.
 * `fill` sets the colour of the section *below* the curve.
 */
export default function WaveDivider({
  fill = "var(--color-ivory)",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none -mb-px w-full leading-[0] ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[6vw] max-h-24 min-h-10 w-full"
      >
        <path
          d="M0,48 C240,92 480,8 720,40 C960,72 1200,16 1440,44 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
