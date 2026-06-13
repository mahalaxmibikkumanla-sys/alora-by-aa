import Link from "next/link";
import { HomeIcon, SearchIcon, HeartIcon, BagIcon } from "./ui/icons";

/**
 * Thumb-friendly bottom navigation — the primary wayfinding on mobile,
 * giving the site a luxury-app feel. Hidden on lg+ where the header carries it.
 */
const items = [
  { label: "Home", href: "/", Icon: HomeIcon },
  { label: "Shop", href: "/shop", Icon: SearchIcon },
  { label: "Wishlist", href: "/wishlist", Icon: HeartIcon },
  { label: "Bag", href: "/cart", Icon: BagIcon },
];

export default function MobileNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-jasmine/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ label, href, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col items-center gap-1 py-2.5 text-charcoal transition-colors hover:text-mango"
            >
              <Icon className="h-5 w-5" />
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.14em]">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
