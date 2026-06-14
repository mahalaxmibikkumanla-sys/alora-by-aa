import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Custom Orders",
  description: "Commission a piece made just for you.",
};

export default function CustomOrders() {
  return (
    <div className="bg-jasmine">
      <PageHeader
        eyebrow="Made for You"
        title="Commission a piece"
        subtitle="Dreaming of a dress in a specific colour, fabric, or silhouette? We create custom pieces for those who know exactly what they want."
      />

      <section className="container-px max-w-3xl py-16 lg:py-24">
        <Reveal className="space-y-8">
          <div>
            <h2 className="font-display text-2xl text-charcoal">The Process</h2>
            <div className="mt-6 space-y-4 text-taupe">
              <p>
                Custom orders begin with a conversation. Tell us your vision — the silhouette, the fabric, the colours that speak to you. We'll guide you through the design process, source the finest materials, and create something entirely unique.
              </p>
              <p>
                Each custom piece takes 8–10 weeks from design to delivery. We fit closely with you to ensure the final garment is perfect.
              </p>
            </div>
          </div>

          <div className="border-t border-line pt-8">
            <h3 className="font-display text-xl text-charcoal">Ready to create?</h3>
            <p className="mt-2 text-taupe">
              Start a conversation with our team about your custom piece.
            </p>
            <ButtonLink href="/contact" variant="primary" size="lg" className="mt-6">
              Get in touch
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
