'use client';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background subtle gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(196,185,245,0.3) 0%, rgba(124,106,255,0.08) 50%, transparent 80%)',
          zIndex: 0,
        }}
      />

      {/* Decorative orbs */}
      <div
        className="float-anim"
        style={{
          position: 'absolute',
          top: '18%',
          left: '8%',
          width: '160px',
          height: '160px',
          background: 'radial-gradient(circle, rgba(124,106,255,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />
      <div
        className="float-anim-delay"
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Hero text content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '800px',
          width: '100%',
          paddingTop: '120px',
        }}
      >
        {/* Badge */}
        <div
          className="hero-entrance"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(124,106,255,0.1)',
            border: '1px solid rgba(124,106,255,0.25)',
            borderRadius: '100px',
            padding: '6px 14px',
            marginBottom: '28px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#7c6aff',
            letterSpacing: '0.2px',
          }}
        >
          Software Development Studio
        </div>

        {/* Heading */}
        <h1
          className="hero-entrance hero-entrance-delay-1"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(36px, 7vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: '-2px',
            color: '#0e0e0e',
            marginBottom: '20px',
          }}
        >
          Di Sini, Ide{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7c6aff 0%, #a855f7 60%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Tumbuh
          </span>{' '}
          Jadi Produk
        </h1>

        {/* Subtitle */}
        <p
          className="hero-entrance hero-entrance-delay-2"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(15px, 2vw, 18px)',
            fontWeight: 400,
            color: '#5a5a6a',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '520px',
            margin: '0 auto 36px',
          }}
        >
          Kami membangun Website, SaaS, Desktop & Mobile App yang scalable, modern, dan siap bersaing di era digital. Dari konsep hingga live — rootivara hadir untuk Anda.
        </p>

        {/* CTAs */}
        <div
          className="hero-entrance hero-entrance-delay-3"
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '60px',
          }}
        >
          <a
            href="https://wa.me/62895605476149?text=Halo%20rootivara%2C%20saya%20ingin%20konsultasi%20dan%20mulai%20proyek%20bersama%20kalian."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#0e0e0e',
              color: '#ffffff',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              padding: '14px 28px',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              display: 'inline-block',
              letterSpacing: '-0.2px',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#7c6aff';
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(124,106,255,0.35)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#0e0e0e';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Mulai Sekarang
          </a>
          <button
            onClick={() => handleScroll('#portofolio')}
            style={{
              background: 'transparent',
              color: '#0e0e0e',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              padding: '14px 28px',
              borderRadius: '100px',
              border: '1.5px solid rgba(14,14,14,0.2)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              letterSpacing: '-0.2px',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = '#7c6aff';
              (e.target as HTMLElement).style.color = '#7c6aff';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(14,14,14,0.2)';
              (e.target as HTMLElement).style.color = '#0e0e0e';
            }}
          >
            Lihat Portofolio
          </button>
        </div>
      </div>

      {/* Hero Visual - the garden/scene card mimicking the BloomFi style */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(160deg, #e8e2ff 0%, #d4c8ff 30%, #c4b5f8 60%, #b8a8f5 100%)',
            borderRadius: '24px 24px 0 0',
            height: 'clamp(260px, 35vw, 420px)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 -8px 60px rgba(124,106,255,0.2), 0 0 0 1px rgba(196,185,245,0.4)',
          }}
        >
          {/* Floating tech cards inside hero visual */}
          <div
            className="float-anim"
            style={{
              position: 'absolute',
              top: '30px',
              left: '40px',
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              minWidth: '150px',
            }}
          >
            <div style={{ fontSize: '11px', color: '#7c6aff', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Website</div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#0e0e0e', letterSpacing: '-0.5px' }}>✓ Live</div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>dengan Maintenance safety</div>
          </div>

          <div
            className="float-anim-delay"
            style={{
              position: 'absolute',
              top: '30px',
              right: '40px',
              background: 'rgba(22,20,43,0.9)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              minWidth: '160px',
            }}
          >
            <div style={{ fontSize: '11px', color: '#c4b9f5', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Klien Puas</div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>98%</div>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>rating kepuasan</div>
          </div>

          {/* Center large abstract shape */}
          <div
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(196,185,245,0.3) 40%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(20px)',
            }}
          />

          {/* Decorative coin-like elements */}
          <div
            className="float-anim"
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '20%',
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(196,185,245,0.6))',
              borderRadius: '50%',
              boxShadow: '0 8px 32px rgba(124,106,255,0.3), inset 0 2px 8px rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.6)',
            }}
          />
          <div
            className="float-anim-delay"
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '22%',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(196,185,245,0.4))',
              borderRadius: '50%',
              boxShadow: '0 8px 32px rgba(124,106,255,0.25), inset 0 2px 8px rgba(255,255,255,0.4)',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          />

          {/* Bottom stat bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(10px)',
              padding: '14px 30px',
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              borderTop: '1px solid rgba(255,255,255,0.4)',
            }}
          >
            {[
              { label: 'Proyek Selesai', value: '50+' },
              { label: 'Teknologi', value: '15+' },
              { label: 'Tahun Pengalaman', value: '5+' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(16px, 3vw, 22px)', fontWeight: 800, color: '#0e0e0e', letterSpacing: '-0.5px' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: '#4a4a6a', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
