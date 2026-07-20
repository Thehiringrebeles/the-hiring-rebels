const process = [
  {
    title: 'Discovery',
    description: 'We align on role scope, company culture, and hiring goals.',
  },
  {
    title: 'Talent Mapping',
    description: 'We define the ideal candidate profile and market position.',
  },
  {
    title: 'Sourcing',
    description: 'We engage high-fit professionals through precision outreach.',
  },
  {
    title: 'Screening',
    description: 'We profile and shortlist candidates against your selection criteria.',
  },
  {
    title: 'Interview',
    description: 'We coordinate stakeholder interviews and candidate communication.',
  },
  {
    title: 'Placement',
    description: 'We support onboarding and ensure a high-confidence hire.',
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
      <div className="mb-10" data-animate>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Hiring Process</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          A disciplined process from first conversation to final placement.
        </h2>
      </div>

      <div className="relative mt-12">
        <div className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent lg:block" />
        <div className="grid gap-6 lg:grid-cols-6">
          {process.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              data-animate
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600/15 text-sm font-semibold text-blue-100">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
