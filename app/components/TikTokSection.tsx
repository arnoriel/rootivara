export default function TikTokSection() {
  const contentTypes = [
    { icon: 'compare', label: 'Before & After Website' },
    { icon: 'manage_search', label: 'Audit Website Bisnis' },
    { icon: 'tips_and_updates', label: 'Tips SEO Praktis' },
    { icon: 'store', label: 'Branding Bisnis Lokal' },
    { icon: 'autorenew', label: 'Proses Redesign' },
    { icon: 'cases', label: 'Studi Kasus Client' },
  ];

  return (
    <section className="py-10 md:py-20 bg-[#f5f3ee] border-y border-[#c1c8c2]/20">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left — copy */}
          <div className="reveal">
            <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-3 md:mb-5">
              Ikuti Perjalanan Kami
            </span>
            <h2 className="text-[24px] md:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#00190d] mb-4 md:mb-6">
              Follow Rootivara di TikTok —{' '}
              <em className="font-light" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Belajar Sebelum Memulai
              </em>
            </h2>
            <p className="text-sm md:text-base text-[#414843] leading-relaxed mb-6 md:mb-8">
              Sebelum memutuskan investasi website, lihat dulu konten edukasi kami di TikTok.
              Kami berbagi tips SEO, proses pengerjaan, before-after website, dan studi kasus
              client nyata — secara gratis.
            </p>

            {/* Content type chips */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {contentTypes.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 bg-white border border-[#c1c8c2]/30 rounded-full px-3 py-1.5 hover:border-[#775a19]/50 transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-[#775a19]"
                    style={{ fontSize: '14px' }}
                  >
                    {c.icon}
                  </span>
                  <span className="text-[10px] md:text-[11px] font-semibold text-[#414843] uppercase tracking-[0.1em]">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://www.tiktok.com/@rootivara.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00190d] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em]
                hover:bg-[#0a2f1f] transition-colors duration-300 active:scale-95"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.75a4.85 4.85 0 01-1.02-.06z"/>
              </svg>
              Follow @rootivara.com
            </a>
          </div>

          {/* Right — TikTok mock feed */}
          <div className="reveal reveal-delay-2">
            <div className="bg-[#1b1c19] rounded-2xl overflow-hidden p-4 md:p-6">
              {/* Fake TikTok profile header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#00190d] border-2 border-[#e9c176] flex items-center justify-center shrink-0">
                  <span className="text-[#e9c176] text-xs font-bold">R</span>
                </div>
                <div>
                  <span className="text-white text-sm font-bold block leading-none">@rootivara.com</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-wider">TikTok</span>
                </div>
                <div className="ml-auto bg-[#e9c176] text-[#00190d] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Follow
                </div>
              </div>

              {/* Fake video cards */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Before & After Klinik', views: '12.4K' },
                  { label: 'Audit Website UMKM', views: '8.9K' },
                  { label: 'Tips SEO 2025', views: '21K' },
                  { label: 'Proses Redesign', views: '6.2K' },
                  { label: 'Website vs IG', views: '15.7K' },
                  { label: 'Case Study Client', views: '9.3K' },
                ].map((v, i) => (
                  <div key={i} className="aspect-[9/16] bg-[#2a2b28] rounded-xl relative overflow-hidden group cursor-pointer">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00190d]/90 via-transparent to-transparent" />
                    {/* Center play icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_circle
                      </span>
                    </div>
                    {/* Pattern bg */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #e9c176 0, #e9c176 1px, transparent 0, transparent 50%)`,
                        backgroundSize: '8px 8px',
                      }}
                    />
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 p-1.5">
                      <p className="text-white text-[8px] font-semibold leading-tight mb-0.5 line-clamp-2">{v.label}</p>
                      <span className="text-white/50 text-[7px]">{v.views} views</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-white/30 text-[10px] mt-4 uppercase tracking-wider">
                Konten edukasi website & bisnis · Setiap minggu
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}