'use client';

import { useEffect, useRef } from 'react';

export default function CTA() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent('Halo rootivara! Saya ingin konsultasi dan mulai proyek digital bersama kalian. Bisa bantu saya?')}`;

  return (
    <section
      id="kontak"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Two-column layout like the "Use Cases > Business" in inspo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="cta-grid"
        >
          {/* Left column */}
          <div>
            <div
              className="reveal"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#7c6aff',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Mulai Perjalanan Digital Anda
            </div>

            <h2
              className="reveal reveal-delay-1"
              style={{
                fontSize: 'clamp(28px, 4.5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                lineHeight: 1.1,
                color: '#0e0e0e',
                marginBottom: '20px',
              }}
            >
              Siap Wujudkan{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Ide Anda?
              </span>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: '#5a5a6a',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '440px',
              }}
            >
              Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan Anda dan tim rootivara siap membantu dari awal hingga produk Anda live di internet.
            </p>

            <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  letterSpacing: '-0.2px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(37,211,102,0.35)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat via WhatsApp
              </a>
            </div>

            {/* Reassurance */}
            <div
              className="reveal reveal-delay-4"
              style={{
                marginTop: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {[
                '✦ Konsultasi 100% Gratis',
                '✦ Respon cepat dalam 1×24 jam',
                '✦ Garansi revisi & dukungan purna jual',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontSize: '13px',
                    color: '#5a5a6a',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — decorative card */}
          <div
            className="reveal reveal-delay-2"
            style={{
              background: 'linear-gradient(145deg, #16142b 0%, #1e1a40 50%, #252250 100%)',
              borderRadius: '28px',
              padding: 'clamp(28px, 3.5vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(124,106,255,0.2)',
              boxShadow: '0 20px 60px rgba(124,106,255,0.2)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-40px',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(124,106,255,0.4) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />

            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#c4b9f5',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  opacity: 0.7,
                }}
              >
                Bisnis
              </div>
              <h3
                style={{
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.8px',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                Tingkatkan Engagement Bisnis Anda
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#9a95bf',
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                Dorong konversi lebih tinggi dengan platform digital yang kami bangun — dari website company profile hingga aplikasi bisnis lengkap yang memudahkan pelanggan berinteraksi dengan brand Anda.
              </p>
            </div>

            <div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#c4b9f5',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = '10px';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = '6px';
                }}
              >
                Pelajari Lebih Lanjut →
              </a>

              {/* Decorative abstract visual (building/product icon) */}
              <div
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
