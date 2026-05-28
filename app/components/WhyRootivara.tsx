export default function WhyRootivara() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin diskusikan website bisnis saya.'
  )}`;

  const reasons = [
    {
      icon: 'target',
      title: 'Kami Fokus pada Hasil Bisnis, Bukan Sekadar Estetika',
      desc: 'Website yang cantik tapi tidak menghasilkan customer bukan website yang baik. Setiap keputusan desain kami dibuat dengan satu tujuan: membantu bisnis Anda lebih mudah mendapatkan leads dan closing.',
    },
    {
      icon: 'build',
      title: 'Tidak Asal Template — Setiap Project Custom',
      desc: 'Kami tidak copy-paste template dan mengganti logo. Setiap website dibangun dari pemahaman mendalam tentang bisnis Anda — siapa targetnya, bagaimana mereka membuat keputusan, dan apa yang membuat mereka percaya.',
    },
    {
      icon: 'search',
      title: 'SEO Bukan Afterthought — Tapi Fondasi',
      desc: 'Kami membangun struktur SEO sejak hari pertama. Bukan ditambahkan belakangan. Ini berarti website Anda punya fondasi yang kuat untuk ditemukan di Google secara organik dari awal.',
    },
    {
      icon: 'handshake',
      title: 'Komunikasi Transparan, Proses yang Terstruktur',
      desc: 'Kami percaya bahwa proses yang baik menghasilkan output yang baik. Setiap tahap project — dari brief hingga launching — dikomunikasikan dengan jelas. Tidak ada kejutan di akhir.',
    },
  ];

  return (
    <section className="py-10 md:py-24 bg-[#00190d] text-white overflow-hidden">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-10 md:mb-16 reveal">
          <div>
            <span className="text-[10px] md:text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.3em] block mb-3 md:mb-5">
              Kenapa Rootivara?
            </span>
            <h2 className="text-[26px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.03em]">
              Rootivara Bukan{' '}
              <em className="font-light" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                Sekadar
              </em>{' '}
              Jasa Bikin Website
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Kami paham bagaimana website membantu bisnis terlihat lebih terpercaya dan menghasilkan
              customer. Bukan hanya membangun tampilan — tapi membangun kepercayaan.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#e9c176]/30 transition-colors duration-300 reveal reveal-delay-${i + 1}`}
            >
              <span
                className="material-symbols-outlined text-[#e9c176] mb-4 block"
                style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1" }}
              >
                {r.icon}
              </span>
              <h3 className="text-base md:text-xl font-semibold mb-3 leading-snug tracking-tight">
                {r.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom differentiator bar */}
        <div className="border-t border-white/10 pt-8 md:pt-10 reveal">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm md:text-lg font-semibold text-white mb-1">
                Saat visitor membuka website Anda, mereka harus langsung merasa:{' '}
                <em className="text-[#e9c176]">"Bisnis ini terpercaya."</em>
              </p>
              <p className="text-[11px] md:text-sm text-white/50">
                Itulah standar yang kami pegang di setiap project Rootivara.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#e9c176] text-[#00190d] px-7 py-3 md:px-10 md:py-4 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em]
                hover:bg-[#ffdea5] transition-colors duration-300 active:scale-95 text-center"
            >
              Konsultasi Strategi Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}