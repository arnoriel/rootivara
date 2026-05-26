export default function Solutions() {
  const benefits = [
    {
      icon: 'web',
      title: 'Website Premium Modern',
      desc: 'Tampilan profesional meningkatkan trust calon customer sejak pertama kali melihat.',
    },
    {
      icon: 'query_stats',
      title: 'SEO Ready Structure',
      desc: 'Website lebih mudah dikenali dan diindeks Google sejak awal diluncurkan.',
    },
    {
      icon: 'speed',
      title: 'Fast Performance',
      desc: 'Loading cepat meningkatkan pengalaman pengguna dan mengurangi bounce rate.',
    },
    {
      icon: 'chat',
      title: 'WhatsApp Conversion',
      desc: 'Visitor dapat langsung konsultasi tanpa ribet melalui satu klik tombol.',
    },
    {
      icon: 'smartphone',
      title: 'Mobile Responsive',
      desc: 'Nyaman diakses dari semua perangkat — desktop, tablet, maupun ponsel.',
    },
    {
      icon: 'edit_note',
      title: 'Easy Management',
      desc: 'Mudah update konten sendiri tanpa perlu skill coding atau bantuan developer.',
    },
  ];

  return (
    <section className="py-10 md:py-24 bg-[#242b1e] text-white">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-8 md:mb-14 reveal">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            Solusi Rootivara
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em]">
            Apa yang Didapat Saat Menggunakan Website Rootivara?
          </h2>
          <p className="text-sm md:text-base text-[#8b9381] mt-3 max-w-xl mx-auto leading-relaxed">
            Setiap website kami dibangun dengan tujuan jelas: membantu bisnis tampil profesional dan
            lebih mudah dihubungi customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`bg-white/5 border border-white/10 p-5 md:p-8 rounded-2xl hover:border-[#e9c176]/30 hover:bg-white/8 transition-all duration-300 group reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/8 rounded-full flex items-center justify-center mb-4 md:mb-6 border border-white/10 group-hover:border-[#e9c176]/30 transition-colors">
                <span className="material-symbols-outlined text-[#e9c176] text-xl md:text-2xl">
                  {b.icon}
                </span>
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 tracking-tight">
                {b.title}
              </h3>
              <p className="text-sm md:text-base text-[#8b9381] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
