'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

export default function NewsletterMinimal() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="container-px max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-tight text-charcoal">
            Stay close
          </h2>
          <p className="mt-4 text-taupe">
            New collections, craft stories, and the quiet moments from our studio.
          </p>
        </Reveal>

        {subscribed ? (
          <Reveal>
            <p className="mt-8 font-display text-base italic text-charcoal">
              Thank you. We'll keep you close.
            </p>
          </Reveal>
        ) : (
          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 border-b border-charcoal/25 bg-transparent px-1 py-3 text-charcoal placeholder:text-taupe/70 focus:border-gold focus:outline-none sm:max-w-xs"
                required
              />
              <button
                type="submit"
                className="border-b-2 border-gold px-6 py-3 font-display text-sm uppercase tracking-widest text-gold transition-colors hover:text-charcoal hover:border-charcoal"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        )}

        <p className="mt-6 text-[0.7rem] uppercase tracking-[0.16em] text-taupe/70">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
