import HeroSeasonal from "@/components/sections/HeroSeasonal";
import Newsletter from "@/components/sections/Newsletter";
import LotusDivider from "@/components/ui/LotusDivider";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Brand",
  name: "AlorA by AA",
  description:
    "Handcrafted luxury fashion for women, inspired by warm summer memories. Founded by Alekhya & Akhila.",
  founder: [
    { "@type": "Person", name: "Alekhya" },
    { "@type": "Person", name: "Akhila" },
  ],
  slogan: "Crafted for the woman who carries elegance effortlessly.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSeasonal />
      <LotusDivider />
      <div className="bg-ivory py-20 text-center">
        <p className="text-charcoal">More sections coming...</p>
      </div>
    </>
  );
}
