const processSteps = [
  {
    title: 'Discovery Call',
    description:
      'We understand your hiring goals, technical requirements, company culture, and timelines.',
    icon: '01',
  },
  {
    title: 'Talent Sourcing',
    description:
      'Using AI-powered sourcing, LinkedIn Talent Intelligence, Boolean search, and our recruitment expertise, we identify the best candidates.',
    icon: '02',
  },
  {
    title: 'Screening & Shortlisting',
    description:
      'Every profile is carefully evaluated before reaching your inbox, helping your team save valuable hiring time.',
    icon: '03',
  },
  {
    title: 'Interview to Offer',
    description:
      'We coordinate interviews, manage candidate communication, support offer negotiations, and stay involved until the position is successfully filled.',
    icon: '04',
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
      <div className="rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:p-10" data-animate>
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-blue-300/95">OUR PROCESS</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            A Simple, Transparent Hiring Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Our recruitment process is designed to help companies hire exceptional talent faster while ensuring quality, transparency, and an outstanding candidate experience.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-[28px] border border-white/10 bg-[#03050a]/70 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/35"
                data-animate
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-600/15 text-sm font-semibold text-blue-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
