'use client';

import { useMemo, useState, useEffect } from 'react';

interface SeasonConfig {
  collection: string;
  label: string;
  imageUrl: string;
  imageAlt: string;
}

function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return 'summer';
  if (month >= 6 && month <= 9) return 'monsoon';
  if (month >= 10 && month <= 1) return 'winter';
  return 'spring';
}

export default function HeroSeasonal() {
  const [seasonConfig, setSeasonConfig] = useState<SeasonConfig | null>(null);

  useEffect(() => {
    // Load season config from JSON file
    const month = new Date().getMonth();
    const seasonKey = getSeason(month);

    fetch('/config/seasons.json')
      .then((res) => res.json())
      .then((data) => {
        setSeasonConfig(data[seasonKey]);
      })
      .catch((err) => console.error('Failed to load seasons config:', err));
  }, []);

  if (!seasonConfig) return null;

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${seasonConfig.imageUrl})`,
          backgroundPosition: 'center',
        }}
      />

      {/* Subtle dark overlay — let garment shine through */}
      <div className="absolute inset-0 bg-black/25" />

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
