export default function Services() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin konsultasi website bisnis saya.'
  )}`;

  const services = [
    {
      icon: 'corporate_fare',
      title: 'Website Company Profile',
      desc: 'Untuk membangun kredibilitas bisnis secara profesional dan meningkatkan kepercayaan calon customer.',
      tags: ['Profil Bisnis', 'Branding', 'SEO Dasar'],
      accent: false,
    },
    {
      icon: 'query_stats',
      title: 'Website SEO Bisnis',
      desc: 'Untuk meningkatkan visibilitas bisnis di Google dan mendatangkan customer organik secara konsisten.',
      tags: ['SEO Advanced', 'Content Structure', 'Google Index'],
      accent: true,
    },
    {
      icon: 'ads_click',
      title: 'Landing Page Ads',
      desc: 'Fokus meningkatkan conversion dari iklan digital. Dirancang agar setiap visitor berujung pada action.',
      tags: ['High Conversion', 'Fast Load', 'A/B Ready'],
      accent: false,
    },
    {
      icon: 'local_hospital',
      title: 'Website Klinik',
      desc: 'Mendukung sistem booking online dan memperkuat branding layanan kesehatan agar terlihat profesional.',
      tags: ['Booking System', 'Trust Design', 'WhatsApp CTA'],
      accent: false,
    },
    {
      icon: 'storefront',
      title: 'Website UMKM',
      desc: 'Simple, modern, dan mudah digunakan. Solusi terjangkau untuk bisnis kecil yang ingin tampil online.',
      tags: ['Simple', 'Modern', 'Affordable'],
      accent: false,
    },
    {
      icon: 'build_circle',
      title: 'Maintenance Website',
      desc: 'Support dan pengelolaan website secara berkala agar tetap cepat, aman, dan terus diperbarui.',
      tags: ['Security Update', 'Performance', 'Content Update'],
      accent: false,
    },
  ];

  return (
    <section id="services" className="py-10 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 md:mb-14 reveal">
        <div className="max-w-2xl">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            Layanan
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
            Solusi Website Sesuai Kebutuhan Bisnis Anda
          </h2>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-[#00190d] uppercase tracking-[0.15em] border-b border-[#00190d] pb-1 hover:text-[#775a19] hover:border-[#775a19] transition-colors whitespace-nowrap"
        >
          Konsultasi Kebutuhan
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`p-5 md:p-8 rounded-2xl border transition-all duration-300 group hover:shadow-lg reveal reveal-delay-${(i % 3) + 1}
              ${s.accent
                ? 'bg-[#00190d] text-white border-[#00190d] hover:border-[#775a19]'
                : 'bg-[#f5f3ee] border-[#c1c8c2]/20 hover:border-[#775a19]/40'
              }`}
          >
            <span
              className={`material-symbols-outlined text-3xl md:text-4xl mb-3 md:mb-5 block
                ${s.accent ? 'text-[#e9c176]' : 'text-[#775a19]'}`}
            >
              {s.icon}
            </span>
            <h3
              className={`text-base md:text-xl font-semibold tracking-tight mb-2 md:mb-3
                ${s.accent ? 'text-white' : 'text-[#00190d]'}`}
            >
              {s.title}
            </h3>
            <p
              className={`text-sm md:text-base leading-relaxed mb-4 md:mb-6
                ${s.accent ? 'text-white/70' : 'text-[#2d3530]'}`}
            >
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded text-[9px] md:text-[10px] font-semibold uppercase tracking-wider
                    ${s.accent
                      ? 'bg-white/10 text-white/60'
                      : 'bg-white border border-[#c1c8c2]/30 text-[#4d5c50]'
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
