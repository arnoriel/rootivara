'use client';

import { useEffect, useRef } from 'react';

const problems = [
  {
    icon: '🚫',
    title: 'Tidak Ada di Google',
    desc: 'Calon pelanggan mencari bisnis Anda secara online tapi tidak menemukannya — mereka langsung pergi ke kompetitor.',
  },
  {
    icon: '💸',
    title: 'Kehilangan Revenue Setiap Hari',
    desc: 'Tanpa platform digital, Anda mengandalkan mulut ke mulut saja. Setiap hari tanpa website = peluang penjualan yang hilang.',
  },
  {
    icon: '😤',
    title: 'Bergantung pada Marketplace',
    desc: 'Fee platform terus naik, algoritma berubah sewaktu-waktu, dan Anda tidak punya kendali atas data pelanggan sendiri.',
  },
  {
    icon: '📉',
    title: 'Kesan Kurang Profesional',
    desc: 'Di era digital, bisnis tanpa website atau app terlihat kurang kredibel di mata calon mitra dan investor.',
  },
  {
    icon: '⏰',
    title: 'Proses Manual yang Menyita Waktu',
    desc: 'Order lewat chat satu per satu, rekap manual di spreadsheet — waktu Anda habis untuk operasional bukan untuk berkembang.',
  },
  {
    icon: '🔒',
    title: 'Data Bisnis Tidak Aman',
    desc: 'Mengandalkan platform pihak ketiga berarti data bisnis dan pelanggan Anda ada di tangan orang lain, kapan saja bisa ditutup.',
  },
];

export default function Problems() {
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
      id="masalah"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: '#0e0e0e',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(124,106,255,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background:
            'radial-gradient(ellipse, rgba(124,106,255,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <div
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '20px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#f87171',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            Kenali Masalahnya
          </div>

          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            Apa yang Terjadi Saat Bisnis{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f87171, #ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tidak Punya
            </span>{' '}
            Platform Digital?
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: '#9ca3af',
              lineHeight: 1.7,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Ribuan bisnis kehilangan pelanggan setiap harinya karena masalah-masalah ini.
            Apakah Anda salah satunya?
          </p>
        </div>

        {/* Problems grid */}
        <div
          className="problems-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: 'clamp(20px, 2.5vw, 28px)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.06)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239,68,68,0.2)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{problem.icon}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.5vw, 17px)',
                  color: '#ffffff',
                  letterSpacing: '-0.3px',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}
              >
                {problem.title}
              </div>
              <div
                style={{
                  fontSize: 'clamp(13px, 1.2vw, 14px)',
                  color: '#6b7280',
                  lineHeight: 1.65,
                }}
              >
                {problem.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problems-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .problems-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
