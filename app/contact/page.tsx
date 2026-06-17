"use client";

import type { Metadata } from "next";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// Note: Metadata must be exported at the top level of a server component.
// This is a client component for the form, so metadata lives in a separate layout.

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-jasmine">
      <PageHeader
        eyebrow="Get in Touch"
        title="We'd love to hear from you"
        subtitle="Questions about an order, custom pieces, or just want to say hello? Reach out."
      />

      <section className="container-px max-w-xl py-16 lg:py-24">
        <Reveal>
          {submitted ? (
            <div className="text-center">
              <p className="font-display text-2xl text-charcoal">Thank you for reaching out.</p>
              <p className="mt-2 text-taupe">
                We&rsquo;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-charcoal placeholder:text-taupe/60 focus:border-mango focus:outline-none"
                  placeholder="Alekhya"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-charcoal placeholder:text-taupe/60 focus:border-mango focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-charcoal placeholder:text-taupe/60 focus:border-mango focus:outline-none resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
          )}
        </Reveal>

        <div className="mt-12 border-t border-line pt-12 lg:mt-16 lg:pt-16">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-charcoal">Email</h3>
              <a
                href="mailto:hello@alorabyaa.com"
                className="mt-1 text-taupe hover:text-mango transition-colors"
              >
                hello@alorabyaa.com
              </a>
            </div>
            <div>
              <h3 className="font-display text-lg text-charcoal">Instagram</h3>
              <a
                href="https://instagram.com/alorabyaa"
                className="mt-1 text-taupe hover:text-mango transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @alorabyaa
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
