'use client';

import { useEffect, useRef } from 'react';

const benefits = [
  {
    title: 'Manfaat untuk Pebisnis',
    desc: 'Tingkatkan revenue dan jangkauan bisnis Anda dengan platform digital yang profesional — dari landing page, toko online, hingga sistem manajemen bisnis berbasis web.',
    dark: false,
    accent: false,
  },
  {
    title: 'Kenapa Harus rootivara?',
    desc: 'Kami tidak hanya coding — kami memahami kebutuhan bisnis Anda. Desain modern, performa tinggi, dan dukungan purna jual yang responsif menjadi prioritas kami.',
    dark: true,
    accent: false,
  },
  {
    title: 'Dikerjakan Profesional',
    desc: 'Tim kami terdiri dari Software Engineer specialist berpengalaman yang membangun produk digital dengan standar industri terkini dan best practices.',
    dark: true,
    accent: true,
  },
];

export default function About() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="layanan"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Header row — mimics "What is USD Bloom?" layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'flex-start',
          marginBottom: 'clamp(40px, 6vw, 72px)',
        }}
        className="about-header-grid"
      >
        <div>
          <div
            className="reveal"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#0e0e0e',
            }}
          >
            Apa Itu{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              rootivara?
            </span>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#portofolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="reveal reveal-delay-1"
            style={{
              marginTop: '24px',
              background: '#0e0e0e',
              color: '#fff',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              padding: '10px 20px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'block',
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
            Lihat Portofolio
          </button>
        </div>

        <div
          className="reveal reveal-delay-2"
          style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            fontWeight: 500,
            lineHeight: 1.6,
            color: '#3a3a4a',
            letterSpacing: '-0.3px',
          }}
        >
          rootivara adalah studio software development yang membantu bisnis & startup mewujudkan ide digital menjadi produk nyata yang siap bersaing di pasar.
        </div>
      </div>

      {/* Benefit Cards — 3 column grid mimicking the design */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
        className="benefits-grid"
      >
        {benefits.map((item, i) => (
          <div
            key={item.title}
            className={`reveal reveal-delay-${i + 2}`}
            style={{
              background: item.dark
                ? item.accent
                  ? 'linear-gradient(145deg, #16142b 0%, #252250 100%)'
                  : '#16142b'
                : '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(20px, 2.5vw, 32px)',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: item.dark ? '1px solid rgba(124,106,255,0.2)' : '1px solid rgba(0,0,0,0.06)',
              boxShadow: item.dark
                ? '0 8px 40px rgba(124,106,255,0.15)'
                : '0 2px 16px rgba(0,0,0,0.04)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLElement).style.boxShadow = item.dark
                ? '0 16px 50px rgba(124,106,255,0.3)'
                : '0 8px 30px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = item.dark
                ? '0 8px 40px rgba(124,106,255,0.15)'
                : '0 2px 16px rgba(0,0,0,0.04)';
            }}
          >
            {/* Subtle accent blob in dark cards */}
            {item.dark && (
              <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(124,106,255,0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                }}
              />
            )}

            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  color: item.dark ? '#ffffff' : '#0e0e0e',
                  letterSpacing: '-0.4px',
                  lineHeight: 1.3,
                  marginBottom: '12px',
                }}
              >
                {item.title}
              </div>
            </div>

            <div
              style={{
                fontSize: 'clamp(13px, 1.3vw, 15px)',
                color: item.dark ? '#a5a0c0' : '#5a5a6a',
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-header-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
