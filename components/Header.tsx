"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { SearchIcon, HeartIcon, BagIcon, UserIcon, MenuIcon, CloseIcon } from "./ui/icons";

const nav = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Custom Orders", href: "/custom-orders" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* slim announcement bar */}
      <div className="bg-espresso text-jasmine">
        <p className="container-px py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.24em]">
          Complimentary worldwide shipping over ₹15,000 · Wrapped by hand
        </p>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
          scrolled
            ? "bg-jasmine/90 backdrop-blur-md shadow-[var(--shadow-soft)]"
            : "bg-jasmine/0"
        }`}
      >
        <div className="container-px flex items-center justify-between gap-4 py-4">
          {/* left: mobile menu + desktop nav */}
          <div className="flex flex-1 items-center gap-6">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-charcoal lg:hidden"
            >
              <MenuIcon />
            </button>
            <nav className="hidden items-center gap-8 lg:flex">
              {nav.slice(0, 3).map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </nav>
          </div>

          {/* center: logo */}
          <Logo className="shrink-0" />

          {/* right: remaining nav + utilities */}
          <div className="flex flex-1 items-center justify-end gap-5">
            <nav className="hidden items-center gap-8 lg:flex">
              {nav.slice(3).map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </nav>
            <div className="flex items-center gap-4 text-charcoal">
              <button aria-label="Search" className="hover:text-mango transition-colors">
                <SearchIcon />
              </button>
              <Link href="/account" aria-label="Account" className="hidden hover:text-mango transition-colors sm:block">
                <UserIcon />
              </Link>
              <Link href="/wishlist" aria-label="Wishlist" className="hover:text-mango transition-colors">
                <HeartIcon />
              </Link>
              <Link href="/cart" aria-label="Cart" className="relative hover:text-mango transition-colors">
                <BagIcon />
                <span className="absolute -right-1.5 -top-1.5 grid h-4 w-4 place-items-center rounded-full bg-mango text-[0.55rem] font-bold text-charcoal">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[82%] max-w-sm bg-jasmine p-7 shadow-[var(--shadow-lift)] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-charcoal">
              <CloseIcon />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-2xl text-charcoal transition-colors hover:text-mango"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/account"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe"
          >
            <UserIcon className="h-5 w-5" /> Account
          </Link>
        </aside>
      </div>
    </>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-mango after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-mango after:transition-all after:duration-500 hover:after:w-full"
    >
      {label}
    </Link>
  );
}
