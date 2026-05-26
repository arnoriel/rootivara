'use client';

export default function Hero() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin konsultasi website bisnis saya.'
  )}`;

  return (
    <section className="min-h-screen pt-20 pb-8 md:pt-32 md:pb-16 flex items-center px-4 md:px-16 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-12 w-full items-center gap-4 md:gap-8">
        {/* Left — copy */}
        <div className="col-span-12 md:col-span-7">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-3 md:mb-6 hero-entrance">
            Website Agency Indonesia
          </span>
          <h1 className="text-[32px] md:text-[68px] font-bold leading-[1.06] tracking-[-0.03em] text-[#00190d] mb-3 md:mb-6 hero-entrance hero-entrance-delay-1">
            Website Modern yang{' '}
            <em className="font-light" style={{ fontStyle: 'italic', fontWeight: 300 }}>
              Membantu Bisnis
            </em>{' '}
            Lebih Profesional & Mudah Ditemukan di Google
          </h1>
          <p className="text-sm md:text-lg text-[#414843] leading-relaxed max-w-xl mb-6 md:mb-10 hero-entrance hero-entrance-delay-2">
            Rootivara membantu UMKM, bisnis jasa, klinik, dan brand lokal memiliki website cepat,
            premium, SEO-ready, dan siap menghasilkan leads.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 items-center hero-entrance hero-entrance-delay-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00190d] text-white px-7 py-3 md:px-10 md:py-4 rounded-lg text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em]
                hover:bg-[#0a2f1f] transition-all duration-300 active:scale-95"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#portfolio"
              className="text-[10px] md:text-[11px] font-semibold text-[#00190d] uppercase tracking-[0.15em] border-b border-[#775a19] pb-1
                hover:text-[#775a19] transition-colors duration-200"
            >
              Lihat Portfolio
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-6 md:mt-10 hero-entrance hero-entrance-delay-4">
            {['Fast Response', 'SEO Ready', 'Mobile Optimized'].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-[10px] font-semibold text-[#414843] uppercase tracking-[0.12em]"
              >
                <span
                  className="material-symbols-outlined text-[#775a19]"
                  style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right — mockup cards */}
        <div className="col-span-12 md:col-span-5 relative mt-6 md:mt-0 hero-entrance hero-entrance-delay-4 hidden sm:block">
          {/* Main mockup */}
          <div className="aspect-[4/3] md:aspect-[4/5] bg-[#f0eee9] rounded-2xl overflow-hidden editorial-shadow relative z-10">
            {/* Desktop browser mockup */}
            <div className="w-full h-full bg-[#1b1c19] p-3 flex flex-col">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 bg-[#2d2d2d] rounded h-4 mx-4 flex items-center px-2">
                  <span className="text-[#666] text-[8px]">rootivara.com</span>
                </div>
              </div>
              <div className="flex-1 bg-[#fbf9f4] rounded overflow-hidden p-3">
                <div className="h-2 w-1/3 bg-[#c1c8c2]/40 rounded mb-2" />
                <div className="h-6 w-2/3 bg-[#00190d]/15 rounded mb-3" />
                <div className="h-1.5 w-full bg-[#c1c8c2]/30 rounded mb-1.5" />
                <div className="h-1.5 w-4/5 bg-[#c1c8c2]/30 rounded mb-4" />
                <div className="flex gap-2 mb-4">
                  <div className="h-7 w-24 bg-[#00190d] rounded" />
                  <div className="h-7 w-20 border border-[#00190d]/30 rounded" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="aspect-video bg-[#e8e5df] rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Analytics floating card */}
          <div className="absolute -bottom-6 -left-12 w-52 bg-white p-4 rounded-xl editorial-shadow z-20 hidden lg:block border border-[#c1c8c2]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold text-[#414843] uppercase tracking-wider">Organic Traffic</span>
              <span className="text-[9px] font-bold text-[#1a7a4a] bg-[#e8f7ef] px-1.5 py-0.5 rounded">+82%</span>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[30, 50, 35, 65, 55, 80, 70, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 7 ? '#00190d' : '#c1c8c2',
                    opacity: i === 7 ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          {/* SEO score card */}
          <div className="absolute -top-4 -right-6 w-40 bg-[#00190d] text-white p-3.5 rounded-xl z-20 hidden lg:block">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-[#e9c176]"
                style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}
              >
                search
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#e9c176]">SEO Score</span>
            </div>
            <span className="text-3xl font-bold text-white">98</span>
            <span className="text-[#8b9381] text-[9px] block mt-0.5">/ 100 Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
