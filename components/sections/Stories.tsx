import Reveal from '@/components/ui/Reveal';

export default function Stories() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-5xl">
        {/* Section heading */}
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-gold">Stories</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] leading-tight text-charcoal">
            How pieces find their people
          </h2>
        </Reveal>

        {/* Featured story */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-sm bg-light-gray">
              <img
                src="https://images.unsplash.com/photo-1539008588435-666d2da3aeba?w=600&h=700&fit=crop&q=80"
                alt="Customer wearing AlorA piece"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="font-display text-2xl text-charcoal">
                Made for the moments that matter
              </h3>
              <p className="mt-4 leading-relaxed text-taupe">
                Every piece leaves our studio with the hope that it becomes part of someone's story.
                We hear back — about weddings, celebrations, quiet mornings, the everyday moments that deserve
                to be worn well.
              </p>
              <p className="mt-4 leading-relaxed text-taupe">
                These pieces carry intention forward. They're stitched to outlast trends, worn to embody choice,
                and kept close by people who understand that what you wear is a form of self-knowing.
              </p>
              <p className="mt-6 font-display text-base italic text-charcoal">
                "This dress made me feel like myself." — Customer, Mumbai
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
