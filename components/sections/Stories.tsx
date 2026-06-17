import Reveal from '@/components/ui/Reveal';

export default function Stories() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-5xl">
        {/* Section heading */}
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-gold">Stories</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] leading-tight text-charcoal">
            Worn close, worn forward
          </h2>
        </Reveal>

        {/* Featured story */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-sm bg-light-gray">
              <img
                src="https://images.unsplash.com/photo-1607960402358-a5ceb04ebeb3?w=600&h=700&fit=crop&q=80"
                alt="Customer wearing AlorA piece"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="font-display text-2xl text-charcoal">
                These pieces find their people
              </h3>
              <p className="mt-4 leading-relaxed text-taupe">
                They&rsquo;re worn to weddings and quiet mornings. To celebrations and the everyday moments that ask to be held close.
                Each piece carries the hope that it becomes woven into someone&rsquo;s story — lived in, cared for, passed forward.
              </p>
              <p className="mt-4 leading-relaxed text-taupe">
                Made to last longer than trends. Stitched to embody choice. Kept by people who understand that what you wear
                is a conversation with yourself — a small daily choice to honor intention.
              </p>
              <p className="mt-6 font-display text-base italic text-charcoal">
                &ldquo;This dress makes me feel like myself.&rdquo; — Customer, Bangalore
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
