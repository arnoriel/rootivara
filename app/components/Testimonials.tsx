'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Owner, Toko Baju Online',
    avatar: 'BS',
    rating: 5,
    text: 'Sebelumnya saya cuma jualan di marketplace, tapi setelah rootivara buatkan website sendiri, omzet naik 40% dalam 2 bulan pertama. Tampilannya profesional banget dan pelanggan sering bilang website saya bagus.',
    tag: 'Website Toko Online',
  },
  {
    name: 'Rini Kusuma',
    role: 'Founder, Klinik Kecantikan Rini',
    avatar: 'RK',
    rating: 5,
    text: 'Tim rootivara sangat profesional. Mereka tidak hanya coding, tapi juga bantu saya mikir alur bisnis yang tepat. Booking system online yang mereka buat benar-benar menghemat waktu admin saya setiap harinya.',
    tag: 'Aplikasi Booking',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'CEO, Startup Logistik',
    avatar: 'AF',
    rating: 5,
    text: 'Kami butuh platform manajemen fleet yang complex, dan rootivara berhasil deliver dalam waktu yang reasonable. Kode bersih, dokumentasi lengkap, dan support pasca-launch yang responsif. Recommended!',
    tag: 'Platform SaaS',
  },
  {
    name: 'Dewi Rahayu',
    role: 'Direktur, Lembaga Kursus',
    avatar: 'DR',
    rating: 5,
    text: 'Website lembaga kursus kami sekarang jauh lebih menarik dan mudah digunakan. Pendaftaran siswa baru meningkat signifikan karena proses registrasi jadi lebih mudah lewat website.',
    tag: 'Website Edukasi',
  },
  {
    name: 'Hendra Wijaya',
    role: 'Manager IT, Perusahaan Manufaktur',
    avatar: 'HW',
    rating: 5,
    text: 'Dashboard inventory yang rootivara buat sangat membantu tim warehouse kami. Real-time data, laporan otomatis, dan UI yang intuitif — semua staff cepat adaptasinya meski bukan tech-savvy.',
    tag: 'Sistem Inventory',
  },
  {
    name: 'Siti Aminah',
    role: 'Pemilik, Catering Siti',
    avatar: 'SA',
    rating: 5,
    text: 'Dulu order catering semua lewat WhatsApp, ribet banget! Sekarang sudah ada website dengan form pemesanan, kalender ketersediaan, dan notifikasi otomatis. Waktu saya lebih efisien dan kesan ke klien jadi lebih profesional.',
    tag: 'Website Catering',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
      id="testimoni"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: 'var(--background)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '20px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#f59e0b',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            ⭐ Kata Klien Kami
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#0e0e0e',
              marginBottom: '16px',
            }}
          >
            Mereka Sudah{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Merasakan Manfaatnya
            </span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: '#5a5a6a',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            Lebih dari 50 bisnis telah mempercayakan transformasi digital mereka kepada rootivara.
          </p>
        </div>

        {/* Testimonials grid */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: i % 3 === 1 ? 'linear-gradient(145deg, #16142b, #1e1a40)' : '#ffffff',
                borderRadius: '20px',
                padding: 'clamp(20px, 2.5vw, 28px)',
                border: i % 3 === 1
                  ? '1px solid rgba(124,106,255,0.2)'
                  : '1px solid rgba(0,0,0,0.06)',
                boxShadow: i % 3 === 1
                  ? '0 8px 40px rgba(124,106,255,0.15)'
                  : '0 2px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  fontSize: '60px',
                  lineHeight: 1,
                  color: i % 3 === 1 ? 'rgba(124,106,255,0.15)' : 'rgba(0,0,0,0.04)',
                  fontFamily: 'Georgia, serif',
                  pointerEvents: 'none',
                }}
              >
                "
              </div>

              <StarRating count={t.rating} />

              {/* Tag */}
              <div
                style={{
                  display: 'inline-block',
                  background: i % 3 === 1 ? 'rgba(124,106,255,0.2)' : 'rgba(124,106,255,0.08)',
                  color: i % 3 === 1 ? '#c4b9f5' : '#7c6aff',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '100px',
                  marginBottom: '14px',
                }}
              >
                {t.tag}
              </div>

              <p
                style={{
                  fontSize: 'clamp(13px, 1.2vw, 14px)',
                  color: i % 3 === 1 ? '#b0acd0' : '#4a4a5a',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Avatar */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '14px',
                      color: i % 3 === 1 ? '#ffffff' : '#0e0e0e',
                      letterSpacing: '-0.2px',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: i % 3 === 1 ? '#8880a8' : '#6b7280',
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div
          className="reveal reveal-delay-5"
          style={{
            marginTop: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(24px, 5vw, 60px)',
            padding: '24px',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.06)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Klien Puas', value: '50+' },
            { label: 'Rating Rata-rata', value: '4.9/5' },
            { label: 'Proyek Selesai Tepat Waktu', value: '98%' },
            { label: 'Tahun Pengalaman', value: '5+' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(22px, 3vw, 30px)',
                  fontWeight: 800,
                  color: '#7c6aff',
                  letterSpacing: '-1px',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
