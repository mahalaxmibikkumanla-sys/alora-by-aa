import Image from "next/image";
import { photo, type ImageKey } from "@/lib/images";

/** Warm gradient shown behind the photo while it loads (never a blank box). */
const toneBg: Record<string, string> = {
  dawn: "linear-gradient(150deg,#f7e9da,#d9bfa0)",
  sand: "linear-gradient(150deg,#f3e7d2,#cdb389)",
  sage: "linear-gradient(150deg,#e7ead9,#9aa88c)",
  gold: "linear-gradient(150deg,#f0dcb4,#c0913f)",
  shade: "linear-gradient(150deg,#8a6a4c,#3a2c20)",
  ivory: "linear-gradient(150deg,#fdfbf6,#ece0cc)",
};

/**
 * Editorial photograph. The parent (or a passed size class) defines the box;
 * the image fills it via object-cover. A warm tone sits behind during load.
 */
export default function Photo({
  imageKey,
  alt,
  sizes = "100vw",
  tone = "sand",
  priority = false,
  className = "",
  imgClassName = "",
}: {
  imageKey: ImageKey;
  alt: string;
  sizes?: string;
  tone?: keyof typeof toneBg;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  // The wrapper must be a positioned containing block for the fill image.
  // Default to `relative`, but step aside if the caller positions it itself
  // (e.g. `absolute inset-0`) so the two position utilities don't conflict.
  const selfPositioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className);
  return (
    <div
      className={`${selfPositioned ? "" : "relative"} overflow-hidden ${className}`}
      style={{ background: toneBg[tone] }}
    >
      <Image
        src={photo(imageKey)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
