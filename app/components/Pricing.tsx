export default function Pricing() {
  const waBase = `https://wa.me/62895605476149?text=`;

  const packages = [
    {
      label: 'Starter Presence',
      price: 'Mulai dari Rp2,5jt',
      priceNote: 'estimasi, menyesuaikan kebutuhan',
      forWho: 'Cocok untuk UMKM, personal brand, dan bisnis yang baru ingin tampil profesional secara online.',
      benefits: [
        'Tampilan profesional & modern',
        'Mobile friendly di semua perangkat',
        'Siap online dalam waktu cepat',
        'Mudah dihubungi customer',
      ],
      features: [
        'Landing page / company profile',
        'Responsive design',
        'WhatsApp integration',
        'Basic SEO setup',
        'Fast loading optimization',
        'Contact form',
        'SSL security',
        'Basic support',
      ],
      timeline: 'Estimasi 5–7 hari kerja',
      cta: 'Konsultasi Paket',
      waText: 'Halo rootivara! Saya tertarik dengan Paket Starter Presence. Boleh minta info lebih lanjut?',
      highlight: false,
    },
    {
      label: 'Business Growth',
      badge: 'Paling Populer',
      price: 'Mulai dari Rp5jt',
      priceNote: 'estimasi, menyesuaikan kebutuhan',
      forWho: 'Cocok untuk bisnis yang ingin meningkatkan kredibilitas dan visibilitas di Google.',
      benefits: [
        'SEO-ready structure',
        'Desain premium modern',
        'Optimized for conversion',
        'Lebih mudah ditemukan customer',
      ],
      features: [
        'Multi-page website',
        'Premium UI/UX design',
        'SEO structure setup',
        'Blog / article integration',
        'Speed optimization',
        'WhatsApp CTA strategy',
        'Advanced responsive layout',
        'Technical optimization',
        'CMS management',
        'Analytics integration',
      ],
      timeline: 'Estimasi 10–14 hari kerja',
      cta: 'Diskusikan Project',
      waText: 'Halo rootivara! Saya tertarik dengan Paket Business Growth. Boleh minta info lebih lanjut?',
      highlight: true,
    },
    {
      label: 'Conversion Pro',
      price: 'Custom Pricing',
      priceNote: 'disesuaikan kebutuhan project',
      forWho: 'Cocok untuk bisnis yang membutuhkan sistem website lebih kompleks dan fokus conversion.',
      benefits: [
        'Advanced conversion strategy',
        'Scalable architecture',
        'High performance structure',
        'Business-focused optimization',
      ],
      features: [
        'Advanced SEO setup',
        'Funnel structure',
        'Booking system',
        'Custom form integration',
        'Automation support',
        'Advanced performance optimization',
        'Dynamic content management',
        'Scalability ready',
        'Consultation support',
      ],
      timeline: 'Menyesuaikan kebutuhan project',
      cta: 'Konsultasi Custom Project',
      waText: 'Halo rootivara! Saya tertarik dengan Paket Conversion Pro untuk kebutuhan khusus. Bisa konsultasi?',
      highlight: false,
    },
  ];

  const whyDifferent = [
    'Jumlah halaman yang dibutuhkan',
    'Tingkat kompleksitas desain',
    'Kebutuhan SEO & konten',
    'Integrasi sistem & fitur khusus',
    'Struktur conversion',
    'Kebutuhan maintenance berkala',
  ];

  const whyInvest = [
    {
      icon: 'schedule',
      title: 'Bekerja 24 Jam untuk Bisnis Anda',
      desc: 'Website tidak pernah tidur. Calon customer bisa melihat bisnis Anda kapan saja — bahkan tengah malam sekalipun.',
    },
    {
      icon: 'verified',
      title: 'Meningkatkan Trust & Kredibilitas',
      desc: 'Bisnis dengan website profesional terlihat lebih terpercaya. Customer lebih yakin untuk menghubungi dan membeli.',
    },
    {
      icon: 'search',
      title: 'Lebih Mudah Ditemukan di Google',
      desc: 'Website SEO-ready membantu bisnis Anda muncul di pencarian Google secara organik — tanpa harus bayar iklan terus-menerus.',
    },
    {
      icon: 'trending_up',
      title: 'Membantu Closing Lebih Cepat',
      desc: 'Website yang dirancang dengan baik membangun kepercayaan lebih cepat, sehingga calon customer lebih mudah mengambil keputusan.',
    },
  ];

  return (
    <section id="pricing" className="py-10 md:py-24 bg-[#fbf9f4]">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto">

        {/* ── WHY INVEST SECTION ── */}
        <div className="mb-12 md:mb-20 reveal">
          <div className="text-center mb-6 md:mb-10">
            {/* h2 appropriate here — major section heading */}
            <span className="text-xs md:text-[13px] font-semibold text-[#5c4310] uppercase tracking-[0.3em] block mb-2 md:mb-3">
              Kenapa Investasi Website?
            </span>
            <h2 className="text-[22px] md:text-[36px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
              Website Bukan Biaya — Website Adalah Investasi
            </h2>
            <p className="text-sm md:text-base text-[#2d3530] mt-3 max-w-2xl mx-auto leading-relaxed">
              Bisnis yang tampil profesional online lebih dipercaya, lebih mudah ditemukan, dan lebih
              mudah mendapatkan customer — bahkan saat Anda tidak aktif berjualan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {whyInvest.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white border border-[#c1c8c2]/20 rounded-2xl p-5 md:p-6 editorial-shadow reveal reveal-delay-${i + 1}`}
              >
                <span
                  className="material-symbols-outlined text-[#775a19] mb-3 block"
                  style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                {/* h3 under the h2 — correct heading order */}
                <h3 className="text-sm md:text-base font-semibold text-[#00190d] mb-2 leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-[13px] text-[#2d3530] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8 md:mb-14 reveal">
          <span className="text-xs md:text-[13px] font-semibold text-[#5c4310] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            Pricing Plans
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d] mb-3">
            Pilih Solusi Website Sesuai Kebutuhan Bisnis Anda
          </h2>
          <p className="text-sm md:text-base text-[#2d3530] max-w-2xl mx-auto leading-relaxed">
            Setiap bisnis memiliki kebutuhan yang berbeda. Rootivara menyediakan solusi website modern,
            SEO-ready, dan fokus conversion untuk membantu bisnis tampil lebih profesional secara online.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {packages.map((pkg, i) => (
            <div
              key={pkg.label}
              className={`rounded-2xl p-5 md:p-8 flex flex-col relative reveal reveal-delay-${i + 1}
                ${pkg.highlight
                  ? 'bg-[#00190d] text-white border-2 border-[#e9c176]/40 shadow-2xl shadow-[#00190d]/20'
                  : 'bg-white border border-[#c1c8c2]/20 editorial-shadow'
                }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#e9c176] text-[#00190d] text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Package label */}
              <span
                className={`text-xs md:text-[13px] font-bold uppercase tracking-[0.2em] block mb-2
                  ${pkg.highlight ? 'text-[#e9c176]' : 'text-[#5c4310]'}`}
              >
                {pkg.label}
              </span>

              {/* Price */}
              <div className="mb-1">
                <span
                  className={`text-2xl md:text-3xl font-bold tracking-tight
                    ${pkg.highlight ? 'text-white' : 'text-[#00190d]'}`}
                >
                  {pkg.price}
                </span>
              </div>
              <span
                className={`text-xs mb-4 md:mb-6 block
                  ${pkg.highlight ? 'text-white/60' : 'text-[#4d5c50]'}`}
              >
                *{pkg.priceNote}
              </span>

              {/* For who */}
              <p
                className={`text-sm md:text-base leading-relaxed mb-5 md:mb-6 pb-5 md:pb-6 border-b
                  ${pkg.highlight ? 'text-white/80 border-white/10' : 'text-[#2d3530] border-[#c1c8c2]/20'}`}
              >
                {pkg.forWho}
              </p>

              {/* Benefits */}
              <div className="mb-4 md:mb-5">
                <span
                  className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] block mb-3
                    ${pkg.highlight ? 'text-[#e9c176]' : 'text-[#5c4310]'}`}
                >
                  Yang Didapat
                </span>
                <ul className="space-y-2">
                  {pkg.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className={`material-symbols-outlined text-sm shrink-0 mt-0.5
                          ${pkg.highlight ? 'text-[#e9c176]' : 'text-[#1a7a4a]'}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span
                        className={`text-sm md:text-[15px] leading-snug
                          ${pkg.highlight ? 'text-white/90' : 'text-[#2d3530]'}`}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-5 md:mb-6 flex-1">
                <span
                  className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] block mb-3
                    ${pkg.highlight ? 'text-[#e9c176]' : 'text-[#5c4310]'}`}
                >
                  Fitur
                </span>
                <ul className="space-y-1.5">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`text-xs md:text-[13px] flex items-center gap-2
                        ${pkg.highlight ? 'text-white/75' : 'text-[#3a4a3d]'}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div
                className={`text-xs font-semibold uppercase tracking-wider mb-5 flex items-center gap-1.5
                  ${pkg.highlight ? 'text-white/60' : 'text-[#4d5c50]'}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
                {pkg.timeline}
              </div>

              {/* CTA */}
              <a
                href={`${waBase}${encodeURIComponent(pkg.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 md:py-4 rounded-xl text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 active:scale-95
                  ${pkg.highlight
                    ? 'bg-[#e9c176] text-[#00190d] hover:bg-[#ffdea5]'
                    : 'bg-[#00190d] text-white hover:bg-[#0a2f1f]'
                  }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Why price differ */}
        <div className="bg-[#f5f3ee] border border-[#c1c8c2]/20 rounded-2xl p-6 md:p-10 reveal">
          <h3 className="text-base md:text-2xl font-semibold text-[#00190d] mb-2 tracking-tight">
            Kenapa Harga Website Bisa Berbeda?
          </h3>
          <p className="text-sm md:text-base text-[#2d3530] leading-relaxed mb-5 md:mb-6">
            Karena setiap bisnis memiliki kebutuhan yang berbeda. Rootivara menyesuaikan solusi
            berdasarkan kebutuhan nyata bisnis, bukan menggunakan template asal jadi.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {whyDifferent.map((item) => (
              <span
                key={item}
                className="bg-white border border-[#c1c8c2]/30 text-[#2d3530] text-xs md:text-[13px] font-medium px-3 py-1.5 rounded-full uppercase tracking-wider"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
