import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "Your AlorA shopping bag.",
};

export default function Cart() {
  return (
    <div className="bg-jasmine min-h-screen flex flex-col">
      <div className="container-px flex-1 py-16 text-center lg:py-24">
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-charcoal">
          Your bag
        </h1>
        <p className="mx-auto mt-6 max-w-md text-taupe">
          Your bag is empty. Explore our collections and find pieces that speak to you.
        </p>
        <ButtonLink href="/shop" variant="primary" size="lg" className="mt-8">
          Continue shopping
        </ButtonLink>
      </div>
    </div>
  );
}
