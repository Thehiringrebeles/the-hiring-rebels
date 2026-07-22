const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

type NavbarProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
};

export function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex flex-col">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.35em] text-blue-200/95">
            THE HIRING REBELS
          </span>
          <span className="text-sm text-white/55">Discovering Real Talent</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition duration-300 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-blue-400/30 bg-blue-600/15 px-4 py-2 text-sm font-medium text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-500/20 sm:inline-flex"
          >
            Book a Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-full border border-white/10 bg-white/[0.05] p-2.5 text-white/80 transition duration-300 hover:border-blue-400/40 hover:bg-white/[0.08] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-white/10 bg-[#090b10]/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
