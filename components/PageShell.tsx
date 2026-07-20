'use client';

import { useEffect, useState } from 'react';
import { About } from './About';
import { CTA } from './CTA';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Industries } from './Industries';
import { Navbar } from './Navbar';
import { Process } from './Process';
import { Services } from './Services';
import { Stats } from './Stats';

export default function PageShell() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mouseGlow, setMouseGlow] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1000);
    const onMove = (event: MouseEvent) => {
      setMouseGlow({ x: event.clientX, y: event.clientY, visible: true });
    };
    const onLeave = () => setMouseGlow((previous) => ({ ...previous, visible: false }));

    document.documentElement.style.scrollBehavior = 'smooth';
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

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
        <div className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-500" style={{ opacity: mouseGlow.visible ? 1 : 0 }}>
          <div
            className="absolute h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]"
            style={{ left: mouseGlow.x - 128, top: mouseGlow.y - 128 }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.24),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.20),transparent_30%),linear-gradient(135deg,#03040b_0%,#0A0A0A_45%,#030405_100%)]" />
          <div className="absolute left-[-6%] top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute right-[-5%] top-16 h-80 w-80 rounded-full bg-blue-400/15 blur-[170px]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[160px]" />
          <div className="absolute bottom-[18%] right-[8%] h-60 w-60 rounded-full bg-indigo-500/10 blur-[160px]" />
          <svg
            viewBox="0 0 1600 900"
            className="absolute inset-0 h-full w-full opacity-[0.14]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M220 250C295 205 360 180 430 175C485 171 554 190 610 225C665 260 714 285 782 287C850 289 918 257 978 227C1035 199 1100 180 1170 192C1240 205 1310 243 1378 272C1428 294 1493 311 1540 314" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
            <path d="M180 370C235 330 292 310 354 311C412 312 466 337 525 359C584 382 654 398 724 395C788 392 850 371 910 352C970 333 1032 315 1098 320C1162 324 1221 348 1280 372C1337 396 1383 418 1440 421" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
            <path d="M330 485C370 440 422 420 476 418C535 416 593 438 645 467C695 495 736 513 792 515C847 517 904 500 960 476C1015 452 1072 437 1138 443C1204 449 1262 473 1324 498" stroke="rgba(255,255,255,0.4)" strokeWidth="1.1" />
            <circle cx="430" cy="175" r="4" fill="rgba(255,255,255,0.8)" />
            <circle cx="782" cy="287" r="4" fill="rgba(255,255,255,0.8)" />
            <circle cx="978" cy="227" r="4" fill="rgba(255,255,255,0.8)" />
            <circle cx="1170" cy="192" r="4" fill="rgba(255,255,255,0.8)" />
            <circle cx="724" cy="395" r="4" fill="rgba(255,255,255,0.8)" />
            <circle cx="1138" cy="443" r="4" fill="rgba(255,255,255,0.8)" />
          </svg>
        </div>

        {isLoading ? (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#030405]/95 backdrop-blur-2xl">
            <div className="w-full max-w-sm px-6 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600/15 text-lg font-semibold text-blue-100 shadow-[0_0_60px_rgba(37,99,235,0.2)]">
                HR
              </div>
              <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300" />
              </div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Preparing the experience</p>
            </div>
          </div>
        ) : null}

        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Industries />
        <Process />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
