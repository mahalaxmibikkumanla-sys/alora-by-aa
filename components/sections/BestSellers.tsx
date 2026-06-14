import { ButtonLink } from "../ui/Button";
import ProductCard from "../ProductCard";
import Reveal from "../ui/Reveal";
import { bestSellers } from "@/lib/products";

export default function BestSellers() {
  return (
    <section className="bg-jasmine">
      <div className="container-px py-20 lg:py-28">
        <Reveal className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <p className="eyebrow">Loved by Many</p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
              Our Best Sellers
            </h2>
          </div>
          <ButtonLink href="/shop" variant="ghost" className="shrink-0">
            View All →
          </ButtonLink>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {bestSellers.slice(0, 4).map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
