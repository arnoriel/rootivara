'use client';

import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'Berapa lama waktu pengerjaan website atau aplikasi?',
    a: 'Untuk website profesional, biasanya selesai dalam 7–14 hari kerja tergantung kompleksitas dan kelengkapan konten dari klien. Untuk aplikasi (SaaS/mobile/desktop), estimasi pengerjaan berkisar 3–8 minggu. Kami selalu memberikan timeline yang jelas di awal sebelum proyek dimulai, dan Anda bisa memantau progress secara real-time.',
  },
  {
    q: 'Apakah saya bisa request revisi setelah website/app selesai?',
    a: 'Tentu! Setiap paket sudah include revisi — Website Professional mendapat 3x revisi, dan Jasa Pembuatan Aplikasi mendapat revisi unlimited selama masa development. Selain itu, kami memberikan support purna jual 30–60 hari setelah launch untuk memastikan semuanya berjalan lancar. Jika butuh perubahan lebih lanjut, kami juga menyediakan paket maintenance bulanan.',
  },
  {
    q: 'Bagaimana proses pembayaran dan apakah ada biaya tersembunyi?',
    a: 'Kami menerapkan sistem pembayaran bertahap: 50% di awal untuk memulai proyek, dan 50% sisanya setelah proyek selesai dan Anda puas. Tidak ada biaya tersembunyi — semua sudah termasuk dalam paket (domain, hosting, SSL). Jika ada kebutuhan tambahan di luar scope awal, kami akan diskusikan dan setujui bersama sebelum dikerjakan.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  return (
    <section
      id="faq"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: '#0e0e0e',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle grid bg */}
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

      <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <div
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(124,106,255,0.12)',
              border: '1px solid rgba(124,106,255,0.25)',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '20px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#a5a0ff',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            Pertanyaan Umum
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '14px',
            }}
          >
            FAQ
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: '#6b7280',
              lineHeight: 1.7,
            }}
          >
            Masih ada yang kurang jelas? Berikut pertanyaan yang paling sering ditanyakan.
          </p>
        </div>

        {/* FAQ items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 2}`}
                style={{
                  background: isOpen
                    ? 'rgba(124,106,255,0.08)'
                    : 'rgba(255,255,255,0.04)',
                  border: isOpen
                    ? '1px solid rgba(124,106,255,0.25)'
                    : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: 'clamp(16px, 2.5vw, 22px) clamp(20px, 3vw, 28px)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 1.5vw, 16px)',
                      color: isOpen ? '#c4b9f5' : '#ffffff',
                      lineHeight: 1.4,
                      letterSpacing: '-0.2px',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      background: isOpen ? 'rgba(124,106,255,0.2)' : 'rgba(255,255,255,0.06)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#a5a0ff' : '#9ca3af',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: 1,
                      transition: 'all 0.3s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 22px)',
                      fontSize: 'clamp(13px, 1.3vw, 15px)',
                      color: '#9ca3af',
                      lineHeight: 1.75,
                      fontWeight: 400,
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          className="reveal reveal-delay-5"
          style={{
            marginTop: '36px',
            textAlign: 'center',
            fontSize: '14px',
            color: '#6b7280',
          }}
        >
          Tidak menemukan jawaban yang dicari?{' '}
          <a
            href="https://wa.me/62895605476149?text=Halo%20rootivara%2C%20saya%20punya%20pertanyaan%20yang%20ingin%20saya%20tanyakan."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a5a0ff', fontWeight: 600, textDecoration: 'none' }}
          >
            Tanya langsung ke kami →
          </a>
        </div>
      </div>
    </section>
  );
}
