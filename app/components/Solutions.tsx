export default function Solutions() {
  return (
    <section className="py-10 md:py-24 bg-[#242b1e] text-white">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-5 md:gap-8 items-center">
          {/* Left — copy */}
          <div className="col-span-12 md:col-span-5 reveal">
            <span className="text-[10px] md:text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.3em] block mb-2 md:mb-4">
              The Difference
            </span>
            <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] mb-3 md:mb-5">
              Digital Transcendence
            </h2>
            <p className="text-sm md:text-lg text-[#8b9381] leading-relaxed">
              Most websites are static brochures. Rootivara builds dynamic environments that breathe
              with your brand&apos;s philosophy.
            </p>
          </div>

          {/* Right — comparison cards */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-3 md:gap-4 reveal reveal-delay-2">
            {/* Generic web */}
            <div className="bg-white/5 border border-white/10 p-4 md:p-8 rounded-xl flex items-center justify-between gap-4 md:gap-6">
              <div>
                <span className="text-[#e9c176] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] block mb-1 md:mb-2">
                  Generic Web
                </span>
                <p className="text-base md:text-xl font-medium text-white/40 line-through decoration-red-500/50">
                  Cluttered Templates &amp; Slow Loads
                </p>
              </div>
              <span className="material-symbols-outlined text-red-400 opacity-60 shrink-0 text-2xl md:text-3xl">
                block
              </span>
            </div>

            {/* Rootivara */}
            <div className="bg-[#0a2f1f]/60 border border-[#e9c176]/30 p-5 md:p-10 rounded-xl flex items-center justify-between gap-4 md:gap-6 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[#ffdea5] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] block mb-1 md:mb-2">
                  Rootivara Elite
                </span>
                <p className="text-lg md:text-2xl font-medium text-white">
                  Bespoke Architectural Logic
                </p>
              </div>
              <span className="material-symbols-outlined text-[#e9c176] text-3xl md:text-4xl group-hover:scale-125 transition-transform duration-500 shrink-0 relative z-10"
                    style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#775a19]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-20 pt-8 md:pt-16 border-t border-white/10">
          {[
            {
              icon: 'trending_up',
              title: 'Unrivaled Conversion',
              desc: 'We study human psychology to create intuitive paths that naturally lead users toward meaningful action.',
            },
            {
              icon: 'diamond',
              title: 'Prestige Branding',
              desc: 'Your website is your digital flagship. We ensure it reflects the premium quality of your physical offerings.',
            },
            {
              icon: 'speed',
              title: 'Peak Performance',
              desc: 'Technical excellence that results in sub-second load times and flawless mobile responsiveness.',
            },
          ].map((item, i) => (
            <div key={item.title} className={`flex flex-row md:flex-col items-start gap-4 md:gap-0 reveal reveal-delay-${i + 1}`}>
              <div className="h-10 w-10 md:h-14 md:w-14 bg-white/8 rounded-full flex items-center justify-center md:mb-6 border border-white/10 shrink-0">
                <span className="material-symbols-outlined text-[#e9c176] text-xl md:text-2xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-base md:text-xl font-medium mb-1 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-[#8b9381] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
