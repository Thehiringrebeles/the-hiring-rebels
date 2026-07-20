const services = [
  {
    title: 'IT Recruitment',
    description: 'Executive-level hiring for product, engineering, data, and cloud teams.',
  },
  {
    title: 'Executive Search',
    description: 'Confidential leadership placements for founders, directors, and C-suite roles.',
  },
  {
    title: 'Permanent Staffing',
    description: 'Long-term talent acquisition designed for scale, culture, and retention.',
  },
  {
    title: 'Contract Staffing',
    description: 'Rapid deployment of specialist contractors for critical delivery windows.',
  },
  {
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'Flexible talent operations that extend your internal team with full accountability.',
  },
  {
    title: 'Global Hiring',
    description: 'Cross-border hiring support across recruitment, onboarding, and compliance.',
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
      <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div data-animate>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Services</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Tailored recruitment solutions at every growth stage.
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 hover:border-blue-400/35 hover:bg-white/[0.08]"
            data-animate
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/25 to-blue-400/20 text-lg font-semibold text-blue-100 transition duration-300 group-hover:scale-105">
              ↗
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-base leading-7 text-white/65">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
