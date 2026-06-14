import JasmineSprig from "./JasmineSprig";

/** Warm, editorial page header used across content pages. */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ivory">
      <div className="container-px py-14 text-center lg:py-20">
        <JasmineSprig className="mx-auto w-28 opacity-80" />
        <p className="eyebrow mt-4">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-taupe">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
