// Trusted By / Stats section
export default function About() {
  const stats = [
    { value: '50+', label: 'Project Selesai' },
    { value: '40+', label: 'Happy Clients' },
    { value: '<1 Jam', label: 'Response Time' },
    { value: '8+', label: 'Industri Dilayani' },
  ];

  const industries = [
    { icon: 'local_hospital', label: 'Klinik' },
    { icon: 'storefront', label: 'UMKM' },
    { icon: 'person', label: 'Personal Brand' },
    { icon: 'apartment', label: 'Property' },
    { icon: 'checkroom', label: 'Fashion' },
    { icon: 'restaurant', label: 'Kuliner' },
    { icon: 'hub', label: 'Agency' },
    { icon: 'hotel', label: 'Hospitality' },
  ];

  return (
    <section id="about" className="py-10 md:py-20 bg-[#fbf9f4] border-y border-[#c1c8c2]/20">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
        {/* Section label */}
        <div className="text-center mb-8 md:mb-14 reveal">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-2 md:mb-3">
            Dipercaya
          </span>
          <h2 className="text-[22px] md:text-[36px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
            Dipercaya Berbagai Jenis Bisnis
          </h2>
          <p className="text-sm md:text-base text-[#2d3530] mt-3 max-w-xl mx-auto">
            Setiap website dibangun berdasarkan kebutuhan bisnis, bukan template asal jadi.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-white border border-[#c1c8c2]/20 rounded-2xl p-5 md:p-8 text-center editorial-shadow reveal reveal-delay-${i + 1}`}
            >
              <span className="block text-[28px] md:text-[48px] font-bold text-[#00190d] mb-1 leading-none tracking-[-0.03em]">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold text-[#2d3530] uppercase tracking-[0.12em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Industry chips */}
        <div className="flex flex-wrap justify-center gap-3 reveal">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="flex items-center gap-2 bg-[#f5f3ee] border border-[#c1c8c2]/30 rounded-full px-4 py-2 hover:border-[#775a19]/50 transition-colors"
            >
              <span
                className="material-symbols-outlined text-[#775a19]"
                style={{ fontSize: '16px' }}
              >
                {ind.icon}
              </span>
              <span className="text-[11px] font-semibold text-[#2d3530] uppercase tracking-[0.1em]">
                {ind.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
