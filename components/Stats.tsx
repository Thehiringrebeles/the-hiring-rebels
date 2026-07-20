'use client';

import { useEffect, useState } from 'react';

const stats = [
  { value: 10, suffix: 'K+', label: 'Placements' },
  { value: 97, suffix: '%', label: 'Hiring Success' },
  { value: 48, suffix: ' hrs', label: 'Average Submission' },
  { value: 7, suffix: '+', label: 'Global Regions' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 38;
    const step = value / totalFrames;
    const timer = window.setInterval(() => {
      frame += 1;
      setDisplayValue(Math.min(value, step * frame));
      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [value]);

  return <span>{Math.round(displayValue)}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.08]"
          >
            <p className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
