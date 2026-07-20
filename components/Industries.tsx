const industries = [
  'IT & Software',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Logistics',
  'Telecom',
];

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
      <div className="mb-10" data-animate>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Industries</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          Expertise across the sectors that define growth.
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => (
          <div
            key={industry}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.08]"
            data-animate
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{industry}</h3>
              <span className="text-sm text-white/40">0{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
