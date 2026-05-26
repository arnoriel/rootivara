'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Cara Kerja', href: '#process' },
    { label: 'Harga', href: '#pricing' },
  ];

  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin konsultasi website bisnis saya.'
  )}`;

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-2">
      <nav
        className={`flex justify-between items-center px-4 md:px-10 py-3 md:py-4 max-w-6xl mx-auto
          bg-[#fbf9f4]/85 backdrop-blur-xl border border-[#c1c8c2]/25 w-[calc(100%-24px)] md:w-[calc(100%-80px)]
          rounded-full transition-all duration-300
          ${scrolled ? 'shadow-lg shadow-[#00190d]/8' : 'shadow-sm shadow-[#00190d]/4'}`}
      >
        {/* Logo */}
        <Link href="/" className="leading-none">
          <Image
            src="/logo.png"
            alt="Rootivara"
            width={100}
            height={30}
            className="h-7 md:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#414843] hover:text-[#00190d] transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#775a19] text-white
              px-3 py-1.5 text-[9px] tracking-[0.1em]
              md:px-6 md:py-2.5 md:text-[11px] md:tracking-[0.15em]
              rounded-full font-semibold uppercase
              hover:bg-[#785a1a] transition-all duration-300 active:scale-95 shadow-md shadow-[#775a19]/20
              whitespace-nowrap"
          >
            Konsultasi Gratis
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#00190d] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#00190d] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#00190d] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[60px] left-3 right-3 bg-[#fbf9f4]/95 backdrop-blur-xl border border-[#c1c8c2]/30 rounded-2xl shadow-xl p-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#414843] hover:text-[#00190d] transition-colors border-b border-[#c1c8c2]/20 pb-4 last:border-0 last:pb-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
