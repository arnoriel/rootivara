'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Paket', href: '#paket' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(245, 244, 240, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,185,245,0.2)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              color: '#0e0e0e',
              letterSpacing: '-0.3px',
            }}
          >
            rootivara
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                color: '#3d3d3d',
                transition: 'color 0.2s',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#7c6aff'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#3d3d3d'; }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <a
          href={`https://wa.me/62895605476149?text=Halo%20rootivara%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20yang%20tersedia.`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden-mobile"
          style={{
            background: '#0e0e0e',
            color: '#ffffff',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            padding: '10px 20px',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            letterSpacing: '-0.1px',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#7c6aff';
            (e.target as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#0e0e0e';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          Mulai Proyek
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
        >
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ height: '2px', background: '#0e0e0e', borderRadius: '2px', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ height: '2px', background: '#0e0e0e', borderRadius: '2px', display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ height: '2px', background: '#0e0e0e', borderRadius: '2px', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(245,244,240,0.97)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(196,185,245,0.2)',
            padding: '20px 24px 24px',
          }}
          className="show-mobile-block"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: '#3d3d3d',
                padding: '12px 0',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`https://wa.me/62895605476149?text=Halo%20rootivara%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20yang%20tersedia.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginTop: '16px',
              background: '#0e0e0e',
              color: '#fff',
              textAlign: 'center',
              padding: '12px',
              borderRadius: '100px',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Mulai Proyek
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .show-mobile-block { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .show-mobile-block { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
