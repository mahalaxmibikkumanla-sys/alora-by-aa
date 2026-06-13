import Link from "next/link";
import Logo from "./Logo";
import JasmineSprig from "./ui/JasmineSprig";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/shop" },
      { label: "Best Sellers", href: "/shop?sort=best-sellers" },
      { label: "Collections", href: "/collections" },
      { label: "Custom Orders", href: "/custom-orders" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Craftsmanship", href: "/craftsmanship" },
      { label: "Contact Us", href: "/contact" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Returns & Exchanges", href: "/return-policy" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ivory text-charcoal">
      <div className="container-px py-16 pb-28 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* brand */}
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-taupe">
              Handcrafted luxury fashion, born from a friendship and a love of
              warm summer mornings. Made slowly, worn always.
            </p>
            <JasmineSprig className="mt-6 w-32 opacity-70" />
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-charcoal">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-taupe transition-colors hover:text-mango"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 text-center text-[0.7rem] uppercase tracking-[0.18em] text-taupe sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} AlorA by AA · Crafted with care in India</p>
          <div className="flex items-center gap-5">
            <span>Secure Payments</span>
            <span aria-hidden>·</span>
            <span>Worldwide Shipping</span>
            <span aria-hidden>·</span>
            <span>Easy Exchanges</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
