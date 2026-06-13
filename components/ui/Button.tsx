import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "text-[0.7rem] px-7 py-3.5",
  lg: "text-xs px-9 py-4",
};

const variants: Record<Variant, string> = {
  // solid charcoal — primary action
  primary:
    "bg-charcoal text-jasmine hover:bg-mango hover:text-charcoal shadow-[var(--shadow-soft)]",
  // outlined — secondary action
  secondary:
    "border border-charcoal/30 text-charcoal hover:border-mango hover:text-mango bg-transparent",
  // text link with gold underline reveal
  ghost:
    "text-charcoal px-0 py-1 border-b border-transparent hover:border-mango hover:text-mango tracking-[0.2em]",
};

function classes(variant: Variant, size: Size, className: string) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}

/** Internal/anchor link button */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

/** Real <button> for actions (add to cart, submit, etc.) */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
} & ComponentProps<"button">) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
