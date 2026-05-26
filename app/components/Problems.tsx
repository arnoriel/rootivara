export default function Problems() {
  const problems = [
    { icon: 'sentiment_dissatisfied', text: 'Website terlihat tidak profesional' },
    { icon: 'search_off', text: 'Tidak muncul di Google' },
    { icon: 'timer_off', text: 'Loading terlalu lambat' },
    { icon: 'help_outline', text: 'Visitor bingung harus klik apa' },
    { icon: 'ads_click', text: 'Tidak memiliki CTA yang jelas' },
    { icon: 'smartphone', text: 'Tampilan mobile berantakan' },
    { icon: 'trending_down', text: 'Sudah punya website tapi tidak menghasilkan leads' },
  ];

  return (
    <section
      id="problems"
      className="py-10 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
        {/* Left — problem list */}
        <div className="col-span-12 md:col-span-6">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-2 md:mb-4 reveal">
            Masalah Umum
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d] mb-4 md:mb-8 reveal reveal-delay-1">
            Kenapa Banyak Website Tidak Menghasilkan Customer?
          </h2>

          <div className="space-y-3 md:space-y-4">
            {problems.map((p, i) => (
              <div
                key={p.text}
                className={`flex items-start gap-3 md:gap-4 bg-[#fff8f0] border border-[#c1c8c2]/20 rounded-xl p-3 md:p-4 reveal reveal-delay-${Math.min(i + 2, 5)}`}
              >
                <span
                  className="material-symbols-outlined text-[#b85c1a] shrink-0 mt-0.5"
                  style={{ fontSize: '20px' }}
                >
                  {p.icon}
                </span>
                <span className="text-sm md:text-base text-[#414843] leading-snug">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual comparison */}
        <div className="col-span-12 md:col-span-6 reveal reveal-delay-2">
          <div className="space-y-4">
            {/* Old website card */}
            <div className="bg-[#f5f3ee] border border-[#c1c8c2]/30 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#b85c1a]">Website Lama</span>
              </div>
              <div className="space-y-2 opacity-60">
                <div className="h-3 w-1/2 bg-[#c1c8c2] rounded" />
                <div className="h-2 w-full bg-[#c1c8c2]/70 rounded" />
                <div className="h-2 w-4/5 bg-[#c1c8c2]/70 rounded" />
                <div className="h-16 w-full bg-[#c1c8c2]/40 rounded mt-3 flex items-center justify-center">
                  <span className="text-[10px] text-[#8b9381]">Loading... 8s</span>
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-[10px] font-semibold">
                <span className="text-red-500">✕ Tidak mobile-friendly</span>
                <span className="text-red-500">✕ SEO buruk</span>
              </div>
            </div>

            {/* Rootivara website card */}
            <div className="bg-[#00190d] rounded-2xl p-5 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e9c176]">Website Rootivara</span>
              </div>
              <div className="space-y-2 relative z-10">
                <div className="h-3 w-2/3 bg-white/20 rounded" />
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-4/5 bg-white/10 rounded" />
                <div className="h-16 w-full bg-[#0a2f1f] rounded mt-3 flex items-center justify-center border border-[#e9c176]/20">
                  <span className="text-[10px] text-[#e9c176]">⚡ Load 0.8s</span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-[10px] font-semibold relative z-10">
                <span className="text-[#4ade80]">✓ Mobile optimized</span>
                <span className="text-[#4ade80]">✓ SEO ready</span>
                <span className="text-[#4ade80]">✓ Convert visitor</span>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <p className="text-sm md:text-base text-[#414843] italic leading-relaxed mt-5 md:mt-6 border-l-2 border-[#775a19] pl-4">
            Website seharusnya bukan hanya online — tapi membantu bisnis dipercaya dan dihubungi lebih cepat.
          </p>
        </div>
      </div>
    </section>
  );
}
