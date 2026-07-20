const trustedBrands = ['Northstar Labs', 'Helio Systems', 'Atlas Capital', 'Aurelia Health', 'Lumen Grid'];

export function CTA() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:p-10" data-animate>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-blue-300/95">Trusted by Growing Companies Worldwide</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                Trusted by founders, hiring leaders, and global operators scaling across regions.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {trustedBrands.map((brand) => (
                <div key={brand} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 backdrop-blur-xl">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">
        <div className="rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent p-8 shadow-[0_0_90px_rgba(37,99,235,0.14)] backdrop-blur-xl lg:p-12" data-animate>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Ready to hire</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
                Let’s Build Your Next High-Performance Team
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#home" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition duration-300 hover:-translate-y-0.5 hover:opacity-90">
                Book a Call
              </a>
              <a href="mailto:hello@thehiringrebels.com" className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/[0.08]">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
