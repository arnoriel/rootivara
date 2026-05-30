// ── Portfolio Section ──────────────────────────────────────────────
// Ganti placeholder images di array `projects` dengan URL screenshot asli
// setelah aset tersedia. Setiap objek memiliki semua field yang dibutuhkan.

const projects = [
  {
    id: 1,
    // Ganti dengan screenshot asli website klinik
    img: 'https://placehold.co/1200x630/00190d/e9c176?text=Klinik+Fisioterapi+Sehat',
    category: 'Klinik',
    title: 'Klinik Fisioterapi Sehat',
    problem: 'Booking hanya via WhatsApp manual, tidak ada kehadiran online yang profesional.',
    solution: 'Website klinik dengan sistem booking, info layanan, dan integrasi WhatsApp CTA.',
    result: 'Pasien baru lebih mudah menemukan klinik di Google dan proses booking lebih profesional.',
    wide: true,
  },
  {
    id: 2,
    // Ganti dengan screenshot asli website UMKM
    img: 'https://placehold.co/600x600/242b1e/e9c176?text=UMKM+Batik+Nusantara',
    category: 'UMKM',
    title: 'Batik Nusantara',
    problem: 'Hanya mengandalkan media sosial, tidak ada website sebagai pusat informasi bisnis.',
    solution: 'Company profile modern dengan katalog produk, cerita brand, dan WhatsApp order.',
    result: 'Tampilan lebih profesional dan kepercayaan reseller meningkat signifikan.',
    wide: false,
  },
  {
    id: 3,
    // Ganti dengan screenshot asli landing page
    img: 'https://placehold.co/600x600/f5f3ee/775a19?text=Landing+Page+Properti',
    category: 'Property',
    title: 'Griya Asri Residence',
    problem: 'Iklan Facebook berjalan tapi landing page lama tidak mengkonversi leads dengan baik.',
    solution: 'Landing page ads dengan funnel jelas, form inquiry, dan CTA WhatsApp strategis.',
    result: 'Cost per lead turun dan jumlah inquiry meningkat setelah landing page baru live.',
    wide: false,
  },
  // ── Tambahkan project baru di sini ──
  // {
  //   id: 4,
  //   img: 'URL_SCREENSHOT',
  //   category: 'Kategori',
  //   title: 'Nama Bisnis',
  //   problem: 'Masalah sebelumnya...',
  //   solution: 'Solusi yang dibuat...',
  //   result: 'Hasil akhir...',
  //   wide: false,
  // },
];

export default function Portfolio() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin melihat portfolio lengkap dan memulai proyek bersama kalian.'
  )}`;

  return (
    <section id="portfolio" className="py-10 md:py-24 bg-[#00190d] text-white">
      {/* Header */}
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto mb-6 md:mb-12 flex justify-between items-end reveal">
        <div>
          <span className="text-[10px] md:text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            Portfolio
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em]">
            Portfolio & Hasil Project
          </h2>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-[11px] font-semibold text-[#e9c176] border border-[#e9c176]/30 px-6 py-3 rounded-full
            hover:bg-[#e9c176] hover:text-[#00190d] transition-all uppercase tracking-[0.15em]"
        >
          Diskusikan Project Anda
        </a>
      </div>

      {/* Wide project */}
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto mb-3 md:mb-6 reveal reveal-delay-1">
        <div className="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={projects[0].img}
            alt={projects[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00190d]/90 via-[#00190d]/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 md:bottom-10 md:left-10 md:right-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
              <div className="md:col-span-2">
                <span className="text-[#e9c176] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] mb-1 md:mb-2 block">
                  {projects[0].category}
                </span>
                <h3 className="text-xl md:text-[32px] font-semibold tracking-tight mb-2">
                  {projects[0].title}
                </h3>
              </div>
              {/* Case study details on hover / always visible md+ */}
              <div className="hidden md:flex flex-col gap-2 justify-end">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#e9c176] block mb-1">Hasil</span>
                  <p className="text-xs text-white/80 leading-snug">{projects[0].result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2-col projects */}
      <div className="grid grid-cols-2 gap-3 md:gap-6 px-4 md:px-16 max-w-[1280px] mx-auto">
        {projects.slice(1).map((p, i) => (
          <div
            key={p.id}
            className={`group relative overflow-hidden rounded-2xl aspect-square reveal reveal-delay-${i + 2}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00190d]/80 to-[#00190d]/10 group-hover:from-[#00190d]/90 transition-all duration-300" />
            {/* Default info */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
              <span className="text-white/80 text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.15em] mb-1 md:mb-2 block">
                {p.category}
              </span>
              <h3 className="text-sm md:text-2xl font-semibold">{p.title}</h3>
            </div>
            {/* Hover overlay — case study */}
            <div className="absolute inset-0 bg-[#00190d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-4 md:p-8 flex flex-col justify-end">
              <span className="text-[#e9c176] text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-2 block">
                {p.category} — {p.title}
              </span>
              <p className="text-[10px] md:text-xs text-white/85 leading-relaxed mb-1">
                <span className="text-white/85">Masalah: </span>{p.problem}
              </p>
              <p className="text-[10px] md:text-xs text-white/85 leading-relaxed mb-1">
                <span className="text-white/85">Solusi: </span>{p.solution}
              </p>
              <p className="text-[10px] md:text-xs text-[#4ade80] leading-relaxed">
                <span className="text-white/85">Hasil: </span>{p.result}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden px-4 mt-6 reveal">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 text-[11px] font-semibold text-[#e9c176] border border-[#e9c176]/30 px-6 py-3 rounded-full w-full
            hover:bg-[#e9c176] hover:text-[#00190d] transition-all uppercase tracking-[0.15em]"
        >
          Diskusikan Project Anda
        </a>
      </div>
    </section>
  );
}
