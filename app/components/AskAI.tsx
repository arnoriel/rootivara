'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function AskAI() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const suggestions = [
    'Berapa harga membuat website?',
    'Apa perbedaan website dan aplikasi?',
    'Berapa lama proses pengerjaan?',
    'Apakah ada garansi revisi?',
  ];

  return (
    <section
      id="ask-ai"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: 'var(--background)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background:
            'radial-gradient(ellipse, rgba(124,106,255,0.12) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Animated AI orb */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '72px',
              height: '72px',
              background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
              borderRadius: '50%',
              fontSize: '28px',
              boxShadow: '0 0 0 12px rgba(124,106,255,0.1), 0 0 0 24px rgba(124,106,255,0.05)',
              animation: 'pulse-ai 2.5s ease-in-out infinite',
            }}
          >
            🤖
          </div>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(26px, 4vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#0e0e0e',
              marginBottom: '14px',
            }}
          >
            Masih Penasaran?{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Yuk Tanyakan
            </span>{' '}
            kepada Rootiva AI!
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: '#5a5a6a',
              lineHeight: 1.7,
            }}
          >
            Rootiva AI siap menjawab semua pertanyaanmu tentang layanan, harga, proses, dan apa
            saja tentang rootivara — kapan pun, tanpa perlu menunggu.
          </p>
        </div>

        {/* Chat preview card */}
        <div
          className="reveal reveal-delay-3"
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: 'clamp(24px, 3.5vw, 36px)',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 8px 40px rgba(124,106,255,0.1)',
            marginBottom: '24px',
          }}
        >
          {/* Chat preview messages */}
          <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* AI message */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
              <div
                style={{
                  background: 'rgba(124,106,255,0.08)',
                  borderRadius: '16px 16px 16px 4px',
                  padding: '12px 16px',
                  fontSize: '14px',
                  color: '#3a3a4a',
                  lineHeight: 1.6,
                  maxWidth: '80%',
                  border: '1px solid rgba(124,106,255,0.12)',
                }}
              >
                Halo! Saya Rootiva AI 👋 Saya siap membantu menjawab pertanyaan kamu tentang
                rootivara — mulai dari layanan, harga, proses, hingga teknologi yang kami gunakan.
                Mau tanya apa?
              </div>
            </div>
          </div>

          {/* Suggestion chips */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '12px',
                color: '#9ca3af',
                fontWeight: 500,
                marginBottom: '10px',
              }}
            >
              Pertanyaan populer:
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => router.push('/chatbot')}
                  style={{
                    background: 'rgba(124,106,255,0.06)',
                    border: '1px solid rgba(124,106,255,0.15)',
                    borderRadius: '100px',
                    padding: '7px 14px',
                    fontSize: '12px',
                    color: '#7c6aff',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(124,106,255,0.12)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(124,106,255,0.06)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Fake input */}
          <div
            onClick={() => router.push('/chatbot')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(0,0,0,0.03)',
              border: '1.5px solid rgba(124,106,255,0.2)',
              borderRadius: '100px',
              padding: '12px 16px 12px 20px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = '#7c6aff';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(124,106,255,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,106,255,0.2)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <span
              style={{ flex: 1, fontSize: '14px', color: '#9ca3af', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Ketik pertanyaanmu di sini...
            </span>
            <div
              style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="reveal reveal-delay-4" style={{ textAlign: 'center' }}>
          <button
            onClick={() => router.push('/chatbot')}
            style={{
              background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
              color: '#ffffff',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              padding: '16px 36px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              letterSpacing: '-0.2px',
              boxShadow: '0 8px 30px rgba(124,106,255,0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(124,106,255,0.45)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(124,106,255,0.3)';
            }}
          >
            Mulai Chat dengan Rootiva AI 🤖
          </button>
          <p
            style={{
              marginTop: '12px',
              fontSize: '13px',
              color: '#9ca3af',
            }}
          >
            Gratis · Tidak perlu daftar · Jawaban instan
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ai {
          0%, 100% { box-shadow: 0 0 0 12px rgba(124,106,255,0.1), 0 0 0 24px rgba(124,106,255,0.05); }
          50% { box-shadow: 0 0 0 16px rgba(124,106,255,0.14), 0 0 0 32px rgba(124,106,255,0.07); }
        }
      `}</style>
    </section>
  );
}
