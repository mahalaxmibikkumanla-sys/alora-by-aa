import Reveal from '@/components/ui/Reveal';

const craftPillars = [
  {
    title: 'Artisans',
    description:
      'Skilled hands that have spent years perfecting their craft. Each piece is made by artisans who understand the weight of intention.',
    image:
      'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=600&fit=crop&q=80',
  },
  {
    title: 'Fabrics',
    description:
      'Sourced from master weavers. Natural cottons, linens, silk-blends chosen for how they feel and move. The foundation of everything.',
    image:
      'https://images.unsplash.com/photo-1584622281867-f8165a8c6d53?w=500&h=600&fit=crop&q=80',
  },
  {
    title: 'Process',
    description:
      'Cut. Stitched. Finished. No shortcuts. Every seam reinforced, every detail considered. Made to last, not made to rush.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=600&fit=crop&q=80',
  },
];

export default function CraftVisibility() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="container-px max-w-5xl">
        {/* Section heading */}
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-gold">
            The Making
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] leading-tight text-charcoal">
            Craft made visible
          </h2>
        </Reveal>

        {/* Three-column grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {craftPillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 80}>
              {/* Image */}
              <div className="mb-6 h-64 overflow-hidden rounded-sm bg-light-gray">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="font-display text-xl text-charcoal">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
