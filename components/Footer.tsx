import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-white/60 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-10 w-auto" />
          </div>
          <div className="mt-4 space-y-2">
            <p>The Hiring Rebels</p>
            <p>Global Talent Partner</p>
            <p>Premium Recruitment</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85">Services</p>
          <div className="mt-4 space-y-2">
            <p>Executive Search</p>
            <p>IT Recruitment</p>
            <p>Global Hiring</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85">Contact</p>
          <div className="mt-4 space-y-2">
            <a href="https://www.linkedin.com" className="block transition hover:text-white">LinkedIn</a>
            <a href="mailto:hello@thehiringrebels.com" className="block transition hover:text-white">Email</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85">© 2026</p>
          <p className="mt-4">© The Hiring Rebels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
