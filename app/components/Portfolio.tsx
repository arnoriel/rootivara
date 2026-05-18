'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    url: 'https://thesunnahmarketing.com',
    title: 'The Sunnah Marketing',
    category: 'Marketing / E-Commerce',
  },
  {
    url: 'https://ai.cuanclip.com',
    title: 'CuanClip AI',
    category: 'SaaS / AI Tools',
  },
  {
    url: 'https://flowfree.my.id',
    title: 'FlowFree',
    category: 'SaaS / Productivity',
  },
  {
    url: 'https://derevuelo.vercel.app',
    title: 'De Revuelo',
    category: 'Landing Page',
  },
  {
    url: 'https://benvenuto-beta.vercel.app',
    title: 'Benvenuto',
    category: 'Web App',
  },
  {
    url: 'https://iron-clad-two.vercel.app',
    title: 'Iron Clad',
    category: 'Web App',
  },
];

function PortfolioCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  // Use screenshot service for reliable previews
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <div
      className={`reveal reveal-delay-${(index % 3) + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#e8e4ff',
        position: 'relative',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
        boxShadow: hovered
          ? '0 20px 50px rgba(124,106,255,0.25)'
          : '0 2px 16px rgba(0,0,0,0.06)',
        border: '1px solid rgba(196,185,245,0.4)',
        aspectRatio: '16/11',
      }}
    >
      {/* Screenshot preview */}
      <img
        src={screenshotUrl}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          display: 'block',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
        onError={(e) => {
          // Fallback to a gradient placeholder if screenshot fails
          const parent = (e.target as HTMLImageElement).parentElement;
          if (parent) {
            (e.target as HTMLImageElement).style.display = 'none';
          }
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(22,20,43,0.85) 0%, rgba(22,20,43,0.2) 50%, transparent 100%)'
            : 'linear-gradient(to top, rgba(22,20,43,0.5) 0%, transparent 60%)',
          transition: 'all 0.3s ease',
        }}
      />

      {/* Fallback bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, 
            hsl(${240 + index * 15}, 50%, 82%) 0%, 
            hsl(${260 + index * 10}, 60%, 75%) 100%)`,
          zIndex: -1,
        }}
      />

      {/* Info overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            fontWeight: 600,
            color: 'rgba(196,185,245,0.9)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
          }}
        >
          {project.category}
        </span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.2px',
          }}
        >
          {project.title}
        </span>

        {hovered && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#c4b9f5',
              textDecoration: 'none',
            }}
          >
            Kunjungi Website
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
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
      id="portofolio"
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 120px) 24px',
        background: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section label + heading */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'flex-end',
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}
          className="portfolio-header-grid"
        >
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
              rootivara dalam Aksi
            </div>
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
              Portofolio
            </h2>
          </div>

          <div
            className="reveal reveal-delay-2"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: '#5a5a6a',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            rootivara menawarkan berbagai layanan untuk developers, bisnis, dan startup yang membutuhkan solusi digital yang aman, cepat, dan berperforma tinggi.{' '}
            <a
              href="https://wa.me/62895605476149?text=Halo%20rootivara%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20portofolio%20kalian."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#7c6aff',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="portfolio-grid"
        >
          {projects.map((project, i) => (
            <PortfolioCard key={project.url} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-header-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
