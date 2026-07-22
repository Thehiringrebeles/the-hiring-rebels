'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Footer } from './Footer';

const reasons = [
  {
    title: 'AI Powered Candidate Sourcing',
    description: 'We combine intelligent sourcing with founder-level market insight to reach highly qualified candidates before your competitors do.',
  },
  {
    title: 'Fast Hiring Process',
    description: 'Streamlined workflows and proactive coordination keep your hiring timeline short without sacrificing quality.',
  },
  {
    title: 'Global Talent Network',
    description: 'Access exceptional engineers and technology leaders across regions with strong cultural and technical alignment.',
  },
  {
    title: 'Dedicated Recruiters',
    description: 'You get a focused team that understands your role requirements, growth stage, and team dynamics deeply.',
  },
  {
    title: 'Technical Screening',
    description: 'Candidates are screened for both technical capability and commercial fit, giving your team stronger first-round quality.',
  },
  {
    title: 'Transparent Communication',
    description: 'Expect concise updates, clear decision support, and a collaborative process from first brief to offer.',
  },
];

const roles = [
  'Software Engineers',
  'Frontend Developers',
  'Backend Developers',
  'Full Stack Developers',
  'React Developers',
  'Node.js Developers',
  'Python Developers',
  'Java Developers',
  '.NET Developers',
  'DevOps Engineers',
  'Cloud Engineers',
  'QA Engineers',
  'Automation Test Engineers',
  'UI UX Designers',
  'Data Engineers',
  'AI ML Engineers',
  'Cyber Security Engineers',
  'Technical Architects',
  'Engineering Managers',
  'CTO Hiring',
];

const industries = [
  'SaaS',
  'FinTech',
  'HealthTech',
  'EdTech',
  'E-Commerce',
  'Manufacturing',
  'Logistics',
  'AI Startups',
  'IT Services',
  'Product Companies',
];

const processSteps = [
  'Requirement Discovery',
  'Talent Strategy',
  'AI Candidate Sourcing',
  'Technical Screening',
  'Client Interviews',
  'Offer Management',
  'Successful Joining',
];

const faqItems = [
  {
    question: 'How quickly can you hire?',
    answer:
      'Most roles are mapped and shortlisted within days, with a typical timeline that depends on complexity, seniority, and the level of screening required.',
  },
  {
    question: 'What industries do you recruit for?',
    answer:
      'We support technology hiring across SaaS, FinTech, HealthTech, AI startups, enterprise IT services, product companies, and more.',
  },
  {
    question: 'Do you recruit globally?',
    answer:
      'Yes. We recruit across regions and time zones, helping you access global talent with local market understanding and candidate readiness.',
  },
  {
    question: 'How do you screen candidates?',
    answer:
      'Our process blends AI-assisted sourcing, deep technical evaluation, communication review, and cultural fit assessment before presentation.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer flexible engagement models for retained, contingent, and project-based hiring, tailored to the scope and urgency of your hiring plan.',
  },
];

export function ItRecruitmentPageContent() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.24),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.20),transparent_30%),linear-gradient(135deg,#03040b_0%,#0A0A0A_45%,#030405_100%)]" />
          <div className="absolute left-[-6%] top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute right-[-5%] top-16 h-80 w-80 rounded-full bg-blue-400/15 blur-[170px]" />
          <div className="absolute bottom-[18%] right-[8%] h-60 w-60 rounded-full bg-indigo-500/10 blur-[160px]" />
          <svg viewBox="0 0 1600 900" className="absolute inset-0 h-full w-full opacity-[0.14]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M220 250C295 205 360 180 430 175C485 171 554 190 610 225C665 260 714 285 782 287C850 289 918 257 978 227C1035 199 1100 180 1170 192C1240 205 1310 243 1378 272C1428 294 1493 311 1540 314" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
            <path d="M180 370C235 330 292 310 354 311C412 312 466 337 525 359C584 382 654 398 724 395C788 392 850 371 910 352C970 333 1032 315 1098 320C1162 324 1221 348 1280 372C1337 396 1383 418 1440 421" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
            <path d="M330 485C370 440 422 420 476 418C535 416 593 438 645 467C695 495 736 513 792 515C847 517 904 500 960 476C1015 452 1072 437 1138 443C1204 449 1262 473 1324 498" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" />
          </svg>
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <Link href="/" className="flex flex-col">
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.35em] text-blue-200/95">THE HIRING REBELS</span>
              <span className="text-sm text-white/55">Discovering Real Talent</span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#services" className="transition duration-300 hover:text-white">Services</a>
              <a href="#roles" className="transition duration-300 hover:text-white">Roles</a>
              <a href="#process" className="transition duration-300 hover:text-white">Process</a>
              <a href="#faq" className="transition duration-300 hover:text-white">FAQ</a>
            </nav>

            <a href="mailto:hello@thehiringrebels.com?subject=IT%20Recruitment%20Inquiry" className="rounded-full border border-blue-400/30 bg-blue-600/15 px-4 py-2 text-sm font-medium text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-500/20">
              Book a Call
            </a>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl" data-animate>
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-600/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-200/95 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
                <span className="mr-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
                PREMIUM IT RECRUITMENT
              </div>

              <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl [text-wrap:balance]">
                IT Recruitment That Helps You Hire Top Tech Talent Faster
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                We help startups, product companies, SaaS businesses and enterprises hire exceptional software engineers, technology leaders and digital professionals through AI-powered sourcing and expert recruitment.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_44px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_54px_rgba(37,99,235,0.45)]">
                  Hire Talent
                </Link>
                <a href="mailto:hello@thehiringrebels.com?subject=Free%20Consultation" className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/85 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]">
                  Book Free Consultation
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/60">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl">✓ 95% offer acceptance</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl">✓ Premium talent experience</span>
              </div>
            </div>

            <div className="relative" data-animate>
              <div className="rounded-[36px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
                <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_24%)]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/50">Global Coverage</p>
                      <p className="mt-2 text-2xl font-semibold text-white">Fast, modern hiring</p>
                    </div>
                    <div className="rounded-full border border-blue-400/30 bg-blue-600/20 px-3 py-2 text-sm font-medium text-blue-100">Live</div>
                  </div>

                  <div className="relative mt-8 h-60 overflow-hidden rounded-[24px] border border-white/10 bg-[#05070b]/70 p-4">
                    <svg viewBox="0 0 600 320" className="absolute inset-0 h-full w-full opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M88 92C116 76 142 68 171 71C188 73 205 80 221 90C234 98 247 106 262 109C286 113 307 108 331 96C356 83 380 74 410 78C435 82 456 94 478 114C498 132 515 152 525 174C533 192 534 210 530 228C526 248 515 268 495 281C477 292 451 297 426 296C401 295 376 285 356 270C336 255 315 236 291 231C274 227 253 234 240 245C223 258 211 276 190 286C170 297 144 300 121 295C94 288 72 273 54 252C32 227 25 195 29 165C34 129 47 109 88 92Z" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                      <path d="M129 118C145 122 159 153 176 168C193 183 209 189 224 184C243 178 250 156 264 140C276 126 292 118 310 112C330 104 351 101 368 106C383 110 396 120 408 132C424 148 438 168 456 179C472 189 492 191 510 186" stroke="rgba(255,255,255,0.25)" strokeWidth="1.1" />
                    </svg>
                    <div className="absolute left-[24%] top-[58%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.95)]" />
                    <div className="absolute left-[16%] top-[36%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.95)]" />
                    <div className="absolute left-[55%] top-[29%] h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.95)]" />
                    <div className="absolute left-[64%] top-[58%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.95)]" />
                    <div className="absolute left-[82%] top-[72%] h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,0.95)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10" id="services">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-10">
            <div className="mb-10 max-w-3xl" data-animate>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Why Companies Choose The Hiring Rebels</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Premium recruitment support for ambitious hiring teams.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="rounded-[24px] border border-white/10 bg-[#05070b]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/35" data-animate style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/25 to-blue-400/20 text-sm font-semibold text-blue-100">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/65">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16" id="roles">
          <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div data-animate>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Roles We Hire</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Specialists across engineering, product, and leadership.</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div key={role} className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 text-base font-medium text-white/80 transition duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.08]" data-animate>
                {role}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-10">
            <div className="mb-10 max-w-3xl" data-animate>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Industries</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Trusted by companies building the next generation of products.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {industries.map((industry, index) => (
                <div key={industry} className="group rounded-[24px] border border-white/10 bg-[#05070b]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/35" data-animate style={{ transitionDelay: `${index * 60}ms` }}>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/25 to-blue-400/20 text-base font-semibold text-blue-100 transition duration-300 group-hover:scale-105">
                    {industry.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="text-lg font-semibold text-white">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16" id="process">
          <div className="mb-10 max-w-3xl" data-animate>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Recruitment Process</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">A premium, structured process from brief to joining.</h2>
          </div>

          <div className="relative rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/70 via-blue-400/30 to-transparent sm:left-8" />
            <ol className="space-y-5">
              {processSteps.map((step, index) => (
                <li key={step} className="relative flex items-start gap-4 pl-3 sm:pl-5" data-animate>
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600/20 text-sm font-semibold text-blue-100">
                    {index + 1}
                  </div>
                  <div className="rounded-[20px] border border-white/10 bg-[#05070b]/70 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
                    <p className="text-lg font-semibold text-white">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="overflow-hidden rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-600/12 via-white/[0.04] to-transparent p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div data-animate>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Why The Hiring Rebels</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Premium hiring outcomes built on quality, clarity and speed.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  We combine AI-powered sourcing with human-led recruitment strategy to help you hire the right people faster without sacrificing quality or cultural fit.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2" data-animate>
                <div className="rounded-[24px] border border-white/10 bg-[#05070b]/70 p-6">
                  <p className="text-4xl font-semibold text-white">95%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/55">Offer Acceptance Rate</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#05070b]/70 p-6">
                  <p className="text-4xl font-semibold text-white">10-Day</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/55">Average Shortlisting</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#05070b]/70 p-6">
                  <p className="text-4xl font-semibold text-white">Global</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/55">Talent Network</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#05070b]/70 p-6">
                  <p className="text-4xl font-semibold text-white">Quality</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/55">First Hiring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10" id="faq">
          <div className="mb-8 max-w-3xl" data-animate>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Answers to the questions hiring teams ask most often.</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={item.question} className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl" data-animate style={{ transitionDelay: `${index * 70}ms` }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                  <span>{item.question}</span>
                  <span className="text-2xl text-blue-300 transition duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/65">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16" id="contact">
          <div className="rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-600/12 via-white/[0.04] to-transparent p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-10 lg:p-12">
            <div className="mx-auto max-w-3xl" data-animate>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Final CTA</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Build Your Dream Tech Team</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Whether you&apos;re hiring one engineer or building an entire technology team, The Hiring Rebels is your trusted recruitment partner.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_44px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_54px_rgba(37,99,235,0.45)]">
                  Hire Talent
                </Link>
                <Link href="/#contact" className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/85 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default ItRecruitmentPageContent;
