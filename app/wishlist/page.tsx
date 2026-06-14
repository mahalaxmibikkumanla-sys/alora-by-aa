import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your AlorA wishlist.",
};

export default function Wishlist() {
  return (
    <div className="bg-jasmine min-h-screen flex flex-col">
      <div className="container-px flex-1 py-16 text-center lg:py-24">
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-charcoal">
          Your wishlist
        </h1>
        <p className="mx-auto mt-6 max-w-md text-taupe">
          Your wishlist is empty. Heart any pieces that catch your eye while you explore.
        </p>
        <ButtonLink href="/shop" variant="primary" size="lg" className="mt-8">
          Explore the collection
        </ButtonLink>
      </div>
    </div>
  );
}
