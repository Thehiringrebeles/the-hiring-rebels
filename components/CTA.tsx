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
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Ready to hire</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
                Let’s Build Your Next High-Performance Team
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Share your hiring requirement and we’ll respond with a focused shortlist and a tailored search plan.
              </p>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full max-w-xl rounded-[28px] border border-white/10 bg-[#03050a]/70 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6"
            >
              <input type="hidden" name="access_key" value="64587fd3-d9b5-4687-aabf-2319c6e2b409" />
              <input type="hidden" name="subject" value="New Hiring Requirement from The Hiring Rebels" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/80">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company_name"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/40 focus:bg-white/[0.08]"
                    placeholder="Acme Labs"
                  />
                </div>
                <div>
                  <label htmlFor="contact-person" className="mb-2 block text-sm font-medium text-white/80">
                    Contact Person Name
                  </label>
                  <input
                    id="contact-person"
                    name="contact_person"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/40 focus:bg-white/[0.08]"
                    placeholder="Alicia Chen"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/40 focus:bg-white/[0.08]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/40 focus:bg-white/[0.08]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="role" className="mb-2 block text-sm font-medium text-white/80">
                    Hiring Requirement / Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/40 focus:bg-white/[0.08]"
                    placeholder="Senior Product Designer"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/40 focus:bg-white/[0.08]"
                    placeholder="Tell us about the role, urgency, and ideal background."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_44px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_54px_rgba(37,99,235,0.45)]"
              >
                Submit Hiring Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
