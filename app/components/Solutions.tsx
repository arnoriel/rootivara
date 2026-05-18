'use client';

import { useEffect, useRef } from 'react';

const solutions = [
  {
    number: '01',
    title: 'Website Profesional yang Mengkonversi',
    desc: 'Desain custom sesuai identitas brand Anda — bukan template biasa. Website yang cepat, mobile-friendly, dan dioptimasi untuk mengubah pengunjung menjadi pelanggan.',
    tags: ['Company Profile', 'Landing Page', 'Toko Online', 'Portfolio'],
  },
  {
    number: '02',
    title: 'Aplikasi Bisnis yang Scalable',
    desc: 'Dari SaaS hingga mobile app, kami bangun platform yang tumbuh bersama bisnis Anda. Backend yang kuat, UI yang intuitif, dan performa yang konsisten.',
    tags: ['SaaS Platform', 'Mobile App', 'Desktop App', 'Web App'],
  },
  {
    number: '03',
    title: 'Sistem Manajemen Bisnis',
    desc: 'Otomasi proses manual dengan sistem yang terintegrasi — inventory, CRM, hingga laporan real-time. Hemat waktu, kurangi human error, fokus pada pertumbuhan.',
    tags: ['CRM', 'Inventory', 'Dashboard', 'API Integration'],
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solusi"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: 'var(--background)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow top-right */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124,106,255,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <div
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(124,106,255,0.1)',
              border: '1px solid rgba(124,106,255,0.2)',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '20px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#7c6aff',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            Solusi Kami
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'flex-end',
            }}
            className="solutions-header-grid"
          >
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontSize: 'clamp(28px, 4.5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                color: '#0e0e0e',
              }}
            >
              Kami Hadir dengan{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Solusi Tepat
              </span>
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                fontSize: 'clamp(14px, 1.5vw, 17px)',
                color: '#5a5a6a',
                lineHeight: 1.7,
              }}
            >
              rootivara menghadirkan solusi digital end-to-end yang disesuaikan dengan kebutuhan
              spesifik bisnis Anda — dari concept hingga go-live.
            </p>
          </div>
        </div>

        {/* Solutions list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {solutions.map((solution, i) => (
            <div
              key={solution.number}
              className={`reveal reveal-delay-${i + 2}`}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: 'clamp(24px, 3vw, 36px)',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '24px',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(124,106,255,0.12)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,106,255,0.2)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.06)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: 800,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(124,106,255,0.25)',
                  letterSpacing: '-1px',
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                {solution.number}
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 1.8vw, 20px)',
                    color: '#0e0e0e',
                    letterSpacing: '-0.4px',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {solution.title}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(13px, 1.2vw, 15px)',
                    color: '#5a5a6a',
                    lineHeight: 1.65,
                    marginBottom: '14px',
                  }}
                >
                  {solution.desc}
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(124,106,255,0.08)',
                        color: '#7c6aff',
                        fontSize: '12px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '100px',
                        border: '1px solid rgba(124,106,255,0.15)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(124,106,255,0.08)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#7c6aff',
                  fontSize: '18px',
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal reveal-delay-5"
          style={{
            marginTop: '48px',
            background: 'linear-gradient(145deg, #16142b 0%, #1e1a40 100%)',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            border: '1px solid rgba(124,106,255,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(124,106,255,0.3) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.6px',
                marginBottom: '8px',
              }}
            >
              Tidak yakin butuh yang mana?
            </div>
            <div style={{ fontSize: '14px', color: '#9a95bf' }}>
              Konsultasi gratis dengan tim kami — kami bantu identifikasi solusi terbaik untuk bisnis Anda.
            </div>
          </div>
          <a
            href="https://wa.me/62895605476149?text=Halo%20rootivara%2C%20saya%20ingin%20konsultasi%20solusi%20digital%20yang%20tepat%20untuk%20bisnis%20saya."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flexShrink: 0,
              background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
              color: '#fff',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              padding: '14px 24px',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap',
              position: 'relative',
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(124,106,255,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Konsultasi Gratis →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .solutions-header-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .solution-card {
            grid-template-columns: 50px 1fr !important;
          }
          .solution-card > div:last-child {
            display: none !important;
          }
          .solutions-bottom-cta {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
