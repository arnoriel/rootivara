'use client';

import { useEffect, useRef } from 'react';

const plans = [
  {
    name: 'Website Professional',
    price: 'IDR 2.500.000',
    tagline: 'Ideal untuk bisnis yang ingin hadir secara online dengan tampilan profesional',
    features: [
      'Desain custom sesuai brand',
      'Hingga 10 halaman',
      'Responsif mobile & tablet',
      'SEO dasar teroptimasi',
      'Formulir kontak & WhatsApp',
      'Domain .com / .id (.co.id) 1 tahun',
      'Hosting premium 1 tahun',
      'SSL gratis (HTTPS)',
      'Revisi hingga 3x',
      'Support 30 hari purna jual',
    ],
    cta: 'Pesan Sekarang',
    dark: false,
    badge: null,
  },
  {
    name: 'Jasa Pembuatan Aplikasi',
    price: 'IDR 5.500.000',
    tagline: 'Untuk startup & bisnis yang membutuhkan platform SaaS, mobile, atau desktop app',
    features: [
      'Konsultasi & analisis kebutuhan',
      'Desain UI/UX custom',
      'Backend + Frontend development',
      'Database & API integration',
      'Deployment ke server / cloud',
      'Domain premium 1 tahun',
      'Hosting / VPS 1 tahun',
      'SSL & keamanan aplikasi',
      'Dokumentasi teknis',
      'Support 60 hari purna jual',
    ],
    cta: 'Mulai Proyek',
    dark: true,
    badge: 'Paling Populer',
  },
];

export default function Pricing() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const waBase = `https://wa.me/62895605476149?text=`;

  return (
    <section
      id="paket"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: 'var(--background)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
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
            Investasi Terbaik
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#0e0e0e',
              maxWidth: '600px',
            }}
          >
            Paket Layanan
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              marginTop: '16px',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: '#5a5a6a',
              lineHeight: 1.7,
              maxWidth: '500px',
            }}
          >
            Setiap paket sudah include domain & hosting. Tidak ada biaya tersembunyi — transparan sejak awal.
          </p>
        </div>

        {/* Plans grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            alignItems: 'start',
          }}
          className="pricing-grid"
        >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 2}`}
              style={{
                background: plan.dark
                  ? 'linear-gradient(145deg, #16142b 0%, #1e1a40 100%)'
                  : '#ffffff',
                borderRadius: '24px',
                padding: 'clamp(24px, 3vw, 40px)',
                border: plan.dark
                  ? '1px solid rgba(124,106,255,0.3)'
                  : '1px solid rgba(0,0,0,0.07)',
                boxShadow: plan.dark
                  ? '0 20px 60px rgba(124,106,255,0.2)'
                  : '0 4px 24px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Glow accent for dark card */}
              {plan.dark && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(124,106,255,0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Badge */}
              {plan.badge && (
                <div
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '100px',
                    marginBottom: '20px',
                    letterSpacing: '0.3px',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div
                style={{
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 700,
                  color: plan.dark ? '#ffffff' : '#0e0e0e',
                  letterSpacing: '-0.4px',
                  marginBottom: '8px',
                  marginTop: plan.badge ? '0' : '8px',
                }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div
                style={{
                  fontSize: 'clamp(26px, 3vw, 36px)',
                  fontWeight: 800,
                  color: plan.dark ? '#c4b9f5' : '#7c6aff',
                  letterSpacing: '-1px',
                  marginBottom: '8px',
                  lineHeight: 1.1,
                }}
              >
                {plan.price}
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontSize: '13px',
                  color: plan.dark ? '#8880a8' : '#6b7280',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                  fontWeight: 400,
                }}
              >
                {plan.tagline}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: plan.dark ? 'rgba(196,185,245,0.12)' : 'rgba(0,0,0,0.06)',
                  marginBottom: '24px',
                }}
              />

              {/* Features list */}
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '14px',
                      color: plan.dark ? '#c0bce0' : '#3a3a4a',
                      lineHeight: 1.5,
                      fontWeight: 400,
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '18px',
                        height: '18px',
                        background: plan.dark ? 'rgba(124,106,255,0.2)' : 'rgba(124,106,255,0.1)',
                        borderRadius: '50%',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4.2 7.2L8 3" stroke="#7c6aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${waBase}${encodeURIComponent(`Halo rootivara, saya tertarik dengan paket "${plan.name}" seharga ${plan.price}. Boleh saya tahu lebih lanjut?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '14px',
                  borderRadius: '100px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  background: plan.dark
                    ? 'linear-gradient(135deg, #7c6aff, #a855f7)'
                    : '#0e0e0e',
                  color: '#ffffff',
                  letterSpacing: '-0.1px',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                  if (!plan.dark) (e.target as HTMLElement).style.background = '#7c6aff';
                  (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(124,106,255,0.35)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                  if (!plan.dark) (e.target as HTMLElement).style.background = '#0e0e0e';
                  (e.target as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {plan.cta} via WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="reveal reveal-delay-4"
          style={{
            marginTop: '32px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#9ca3af',
            fontWeight: 400,
          }}
        >
          💡 Butuh solusi kustom? Harga bisa disesuaikan dengan kebutuhan proyek Anda.{' '}
          <a
            href={`https://wa.me/62895605476149?text=${encodeURIComponent('Halo rootivara, saya ingin diskusi kebutuhan proyek kustom.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#7c6aff', fontWeight: 600, textDecoration: 'none' }}
          >
            Hubungi kami.
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
