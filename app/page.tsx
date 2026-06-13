import Hero from "@/components/sections/Hero";
import FounderStory from "@/components/sections/FounderStory";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import Craftsmanship from "@/components/sections/Craftsmanship";
import BestSellers from "@/components/sections/BestSellers";
import Lifestyle from "@/components/sections/Lifestyle";
import CustomerLove from "@/components/sections/CustomerLove";
import TrustBlock from "@/components/sections/TrustBlock";
import Newsletter from "@/components/sections/Newsletter";

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
      <Hero />
      <FounderStory />
      <FeaturedCollection />
      <Craftsmanship />
      <BestSellers />
      <Lifestyle />
      <CustomerLove />
      <TrustBlock />
      <Newsletter />
    </>
  );
}
