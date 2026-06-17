'use client';

import { useMemo } from 'react';

interface SeasonConfig {
  collection: string;
  label: string;
  backgroundImage: string;
  description: string;
}

const seasons: { [key: string]: SeasonConfig } = {
  summer: {
    collection: 'MOKSH',
    label: 'Made to move',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=800&fit=crop)',
    description: 'Freedom. Lightness. Golden hour.',
  },
  monsoon: {
    collection: 'ANUBHAV',
    label: 'A feeling worn',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=800&fit=crop)',
    description: 'Experience. Texture. Sensory.',
  },
  winter: {
    collection: 'TAARA',
    label: 'Worn under stars',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&h=800&fit=crop)',
    description: 'Luminous. Clear. Celebration.',
  },
  spring: {
    collection: 'NIYYAT',
    label: 'Intention in bloom',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&h=800&fit=crop)',
    description: 'Growth. Intention. New.',
  },
};

function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return 'summer';
  if (month >= 6 && month <= 9) return 'monsoon';
  if (month >= 10 && month <= 1) return 'winter';
  return 'spring';
}

export default function HeroSeasonal() {
  const seasonConfig = useMemo(() => {
    const month = new Date().getMonth();
    const seasonKey = getSeason(month);
    return seasons[seasonKey];
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: seasonConfig.backgroundImage }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container-px relative flex h-full flex-col items-center justify-center">
        <div className="text-center">
          {/* Collection name — large, Cormorant, restrained */}
          <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] font-medium tracking-tight text-ivory">
            {seasonConfig.collection}
          </h1>

          {/* Label — simple, DM Sans, small */}
          <p className="mt-4 text-sm uppercase tracking-widest text-gold">
            {seasonConfig.label}
          </p>
        </div>
      </div>
    </section>
  );
}
