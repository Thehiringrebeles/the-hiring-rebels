const industries = [
  {
    title: 'Software & SaaS',
    description:
      'Backend, Frontend, Full Stack, Mobile, QA, DevOps, Cloud, AI/ML, Data Engineering and Product teams.',
    icon: '01',
  },
  {
    title: 'Product Companies',
    description:
      'Product Managers, Designers, Engineering Leaders, Architects and Technical Specialists.',
    icon: '02',
  },
  {
    title: 'IT Services & Consulting',
    description:
      'Delivery teams, consultants, implementation specialists and enterprise technology professionals.',
    icon: '03',
  },
  {
    title: 'Startups & Scaleups',
    description:
      'Founding engineers, early leadership hires and rapid team expansion support.',
    icon: '04',
  },
  {
    title: 'Engineering & Manufacturing',
    description:
      'Mechanical, Electrical, Automation, Production, Quality and Plant Operations hiring.',
    icon: '05',
  },
  {
    title: 'Finance & Corporate Functions',
    description:
      'Finance, HR, Talent Acquisition, Sales, Marketing, Operations and Business Support roles.',
    icon: '06',
  },
  {
    title: 'Global Capability Centers (GCC)',
    description:
      'Supporting multinational organizations building high-performing teams in India.',
    icon: '07',
  },
  {
    title: 'Executive & Leadership Hiring',
    description:
      'Senior managers, directors, VPs, department heads and C-level recruitment.',
    icon: '08',
  },
];

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
      <div className="rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:p-10" data-animate>
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-blue-300/95">INDUSTRIES WE SERVE</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Recruitment Expertise Across High-Growth Industries
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            We help organizations build exceptional teams across technology, digital, engineering, and business functions. Our recruitment approach adapts to each industry&apos;s hiring challenges and growth stage.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group rounded-[28px] border border-white/10 bg-[#03050a]/70 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/35"
              data-animate
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-600/15 text-sm font-semibold text-blue-100">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/65">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
