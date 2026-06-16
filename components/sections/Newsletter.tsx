"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import Reveal from "../ui/Reveal";
import JasmineSprig from "../ui/JasmineSprig";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-gradient-to-br from-royal-red via-royal-red/95 to-royal-red-soft">
      <div className="container-px py-20 lg:py-28">
        <Reveal className="mx-auto max-w-xl text-center">
          <JasmineSprig className="mx-auto w-32 opacity-70" />
          <p className="eyebrow mt-5 text-mango-soft">The AlorA Letter</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-jasmine">
            Heritage stories, early access, and artisan inspiration.
          </h2>
          <p className="mt-4 text-jasmine/85">
            Join our world for first looks at new collections, embroidery tales, and quiet notes from
            behind the scenes. Handcrafted stories only.
          </p>

          {done ? (
            <p className="mt-9 font-display text-2xl italic text-mango-soft">
              Welcome to AlorA — check your inbox for embroidery tales.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setDone(true);
              }}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 border-b border-jasmine/30 bg-transparent px-1 py-3 text-jasmine placeholder:text-jasmine/60 focus:border-mango-soft focus:outline-none"
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          )}
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-jasmine/70">
            By subscribing you agree to our Privacy Policy
          </p>
        </Reveal>
      </div>
    </section>
  );
}
