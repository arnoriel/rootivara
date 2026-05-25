export default function Problems() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin konsultasi dan mulai proyek digital bersama kalian.'
  )}`;

  return (
    <section
      id="services"
      className="py-10 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto"
    >
      {/* Header row */}
      <div className="flex justify-between items-end mb-6 md:mb-12 reveal">
        <div className="max-w-2xl">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            Expertise
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
            Strategic Design Ecosystems
          </h2>
        </div>
        <a
          href="#portfolio"
          className="hidden md:block text-[11px] font-semibold text-[#00190d] uppercase tracking-[0.15em] border-b border-[#00190d] pb-1 hover:text-[#775a19] hover:border-[#775a19] transition-colors"
        >
          All Capabilities
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-12 gap-3 md:gap-6">
        {/* Card 1 — large */}
        <div className="col-span-12 md:col-span-8 bg-[#f5f3ee] p-5 md:p-10 rounded-2xl border border-[#c1c8c2]/20 hover:border-[#775a19]/40 transition-colors group reveal reveal-delay-1">
          <span className="material-symbols-outlined text-2xl md:text-4xl text-[#775a19] mb-3 md:mb-6 block">web</span>
          <h3 className="text-lg md:text-2xl font-medium tracking-tight text-[#00190d] mb-2 md:mb-4">
            High-Performance Web Development
          </h3>
          <p className="text-sm md:text-base text-[#414843] leading-relaxed max-w-md mb-4 md:mb-8">
            We don&apos;t just build sites; we architect lightning-fast, secure, and infinitely scalable
            digital platforms that function as your 24/7 sales powerhouse.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="bg-white px-3 py-1 md:px-4 md:py-1.5 rounded text-[10px] md:text-[11px] font-medium text-[#8b9381] border border-[#c1c8c2]/30 uppercase tracking-wider">
              React / Next.js
            </span>
            <span className="bg-white px-3 py-1 md:px-4 md:py-1.5 rounded text-[10px] md:text-[11px] font-medium text-[#8b9381] border border-[#c1c8c2]/30 uppercase tracking-wider">
              Headless CMS
            </span>
          </div>
        </div>

        {/* Card 2 — dark accent */}
        <div className="col-span-12 md:col-span-4 bg-[#00190d] text-white p-5 md:p-10 rounded-2xl flex flex-col justify-between reveal reveal-delay-2">
          <div>
            <span className="material-symbols-outlined text-2xl md:text-4xl text-[#e9c176] mb-3 md:mb-6 block">auto_awesome</span>
            <h3 className="text-lg md:text-2xl font-medium tracking-tight mb-2 md:mb-4">Elite Landing Pages</h3>
            <p className="text-sm md:text-base opacity-80 leading-relaxed">
              Conversion-optimized experiences designed to turn clicks into loyal advocates.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b border-[#e9c176] py-1.5 md:py-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-[#e9c176] hover:text-white hover:border-white transition-colors mt-4 md:mt-0"
          >
            Inquire Now
          </a>
        </div>

        {/* Card 3 — small */}
        <div className="col-span-6 md:col-span-4 bg-white p-5 md:p-10 rounded-2xl border border-[#c1c8c2]/20 editorial-shadow reveal reveal-delay-3">
          <span className="material-symbols-outlined text-2xl md:text-4xl text-[#775a19] mb-3 md:mb-6 block">query_stats</span>
          <h3 className="text-base md:text-2xl font-medium tracking-tight text-[#00190d] mb-2 md:mb-4">SEO Architecture</h3>
          <p className="text-sm md:text-base text-[#414843] leading-relaxed">
            Organic visibility built into the foundation, not bolted on as an afterthought.
          </p>
        </div>

        {/* Card 4 — wide with image */}
        <div className="col-span-6 md:col-span-8 bg-[#f0eee9] p-5 md:p-10 rounded-2xl flex items-center gap-5 md:gap-8 border border-[#c1c8c2]/20 reveal reveal-delay-4">
          <div className="hidden sm:block w-32 h-32 md:w-44 md:h-44 bg-white rounded-xl rotate-3 shrink-0 editorial-shadow overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUn1X6cSQ0T0gyK4MWPt_fknidxcKZN7JFJmLcPH5-83nAvL2q7QxqC99uCoSPzrRTNcUHA6tLXqruVIv23pSEndExB2dFyWyLak4oQ_h02yEF3ZYQ0w21BuSaOQJvvuX32yUv7_1Ux-G5RSJcAtR6KfRsXd1KWt4PapEPrd4qXOwjtJNGnsDmQK4SOhvQwKIbmuubE_QcMY-tqchhBxqVOt0rjANuEH064nCR4ZISqvkbE9-Zo8BEvKIfFQynhhSijKlaz1z1dWcU"
              alt="Analytics dashboard"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-base md:text-2xl font-medium tracking-tight text-[#00190d] mb-2 md:mb-4">Brand Integration</h3>
            <p className="text-sm md:text-base text-[#414843] leading-relaxed mb-3 md:mb-6">
              Visual identity systems that bridge the gap between physical luxury and digital interaction.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.15em] hover:translate-x-1 transition-transform inline-flex items-center gap-2"
            >
              Discover{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
