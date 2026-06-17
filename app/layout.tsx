import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

/* Editorial display serif — elongated elegance of Indian gold work */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Modern, clean body font — tech-savvy Indian audience */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alorabyaa.com"),
  title: {
    default: "AlorA by AA — Crafted Elegance for the Modern Woman",
    template: "%s · AlorA by AA",
  },
  description:
    "Handcrafted luxury fashion for women who carry elegance effortlessly. Timeless pieces inspired by warm summer memories — designed by Alekhya & Akhila.",
  keywords: [
    "luxury women's fashion",
    "handcrafted dresses",
    "premium clothing",
    "AlorA by AA",
    "summer fashion",
  ],
  openGraph: {
    title: "AlorA by AA — Crafted Elegance",
    description:
      "Handcrafted luxury fashion inspired by warm summer memories.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-jasmine text-charcoal">
        {/* If JS is disabled, never hide scroll-reveal content. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Thumb-friendly bottom navigation, mobile only */}
        <MobileNav />
      </body>
    </html>
  );
}
