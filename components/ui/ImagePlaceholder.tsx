import JasmineSprig from "./JasmineSprig";

/**
 * Editorial image stand-in.
 *
 * Real photography isn't wired yet, so each "image" is a warm, golden-hour
 * gradient with a faint jasmine watermark — intentional and on-brand rather
 * than a broken <img>. Swap for next/image when real photos arrive; the
 * `tone` keys map cleanly onto a future <Image> src lookup.
 */
export type Tone =
  | "dawn" // soft sunrise blush
  | "sand" // beach + linen
  | "sage" // botanical green
  | "gold" // mango golden hour
  | "shade" // cool charcoal editorial
  | "ivory"; // pale ivory studio

const tones: Record<Tone, string> = {
  dawn: "linear-gradient(150deg, #f7e9da 0%, #ead7c4 45%, #d9bfa0 100%)",
  sand: "linear-gradient(150deg, #f3e7d2 0%, #e3cfae 55%, #cdb389 100%)",
  sage: "linear-gradient(150deg, #e7ead9 0%, #c2cdb6 55%, #9aa88c 100%)",
  gold: "linear-gradient(150deg, #f0dcb4 0%, #d8b878 50%, #c0913f 100%)",
  shade: "linear-gradient(150deg, #8a6a4c 0%, #5d4632 55%, #3a2c20 100%)",
  ivory: "linear-gradient(150deg, #fdfbf6 0%, #f6efe3 60%, #ece0cc 100%)",
};

export default function ImagePlaceholder({
  tone = "sand",
  label,
  className = "",
  sprig = true,
  rounded = true,
}: {
  tone?: Tone;
  /** caption shown faintly — describes the intended photograph */
  label?: string;
  className?: string;
  sprig?: boolean;
  rounded?: boolean;
}) {
  const dark = tone === "shade" || tone === "gold";
  return (
    <div
      role="img"
      aria-label={label ?? "AlorA editorial photography"}
      className={`relative h-full w-full overflow-hidden ${
        rounded ? "rounded-[2px]" : ""
      } texture-linen ${className}`}
      style={{ background: tones[tone] }}
    >
      {sprig && (
        <JasmineSprig
          className={`absolute left-1/2 top-1/2 w-28 -translate-x-1/2 -translate-y-1/2 ${
            dark ? "opacity-30" : "opacity-50"
          }`}
        />
      )}
      {label && (
        <span
          className={`absolute bottom-3 left-4 right-4 font-sans text-[0.6rem] uppercase tracking-[0.22em] ${
            dark ? "text-jasmine/70" : "text-charcoal/40"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
