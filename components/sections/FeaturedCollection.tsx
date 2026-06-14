import { ButtonLink } from "../ui/Button";
import Photo from "../ui/Photo";
import Reveal from "../ui/Reveal";

export default function FeaturedCollection() {
  return (
    <section className="bg-jasmine">
      <div className="container-px py-20 lg:py-28">
        <Reveal className="relative overflow-hidden rounded-[2px]">
          <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
            <div className="absolute inset-0">
              <Photo
                imageKey="F14"
                alt="Summer Bloom campaign — a flowing silhouette on the beach at golden hour"
                tone="gold"
                sizes="100vw"
                className="h-full w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-charcoal/15 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12 lg:p-20">
              <p className="eyebrow text-mango-soft">The Collection</p>
              <h2 className="mt-4 max-w-md font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-jasmine">
                Summer Bloom
              </h2>
              <p className="mt-4 max-w-sm text-jasmine/85">
                Soft cottons, mango golds and jasmine whites — a collection made
                for slow mornings and golden evenings.
              </p>
              <ButtonLink
                href="/collections/summer-bloom"
                variant="secondary"
                size="lg"
                className="mt-8 w-fit border-jasmine/50 text-jasmine hover:border-mango hover:text-mango"
              >
                Explore the Collection
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
