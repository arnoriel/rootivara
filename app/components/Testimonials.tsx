// ── Testimonials Section ──────────────────────────────────────────
// Ganti data di array `testimonials` dengan testimoni asli client.
// Field `img` bisa diisi URL foto client atau path lokal di /public.

const testimonials = [
  {
    // Ganti dengan quote asli
    quote:
      'Setelah website baru dari Rootivara live, pasien lebih mudah menemukan klinik kami di Google. Tampilannya juga jauh lebih profesional dibanding sebelumnya.',
    author: 'dr. Andi Pratama',
    role: 'Pemilik, Klinik Fisioterapi Sehat',
    // Ganti dengan foto asli — bisa path lokal: '/images/testimoni-andi.jpg'
    img: 'https://placehold.co/100x100/f0eee9/775a19?text=AP',
    offset: false,
  },
  {
    quote:
      'Prosesnya rapi dan komunikasinya cepat. Website UMKM saya sekarang terlihat setara brand besar, reseller jadi lebih percaya untuk order.',
    author: 'Siti Rahma',
    role: 'Owner, Batik Nusantara',
    img: 'https://placehold.co/100x100/f0eee9/775a19?text=SR',
    offset: true,
  },
  {
    quote:
      'Landing page yang dibuat Rootivara langsung bisa saya pakai untuk kampanye iklan. Cost per lead turun cukup signifikan dibanding landing page lama.',
    author: 'Budi Santoso',
    role: 'Marketing Manager, Griya Asri Residence',
    img: 'https://placehold.co/100x100/f0eee9/775a19?text=BS',
    offset: false,
  },
  // ── Tambahkan testimoni baru di sini ──
  // {
  //   quote: 'Testimoni dari client...',
  //   author: 'Nama Client',
  //   role: 'Jabatan, Nama Bisnis',
  //   img: '/images/foto-client.jpg',
  //   offset: false,
  // },
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-24 bg-[#f5f3ee]">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto overflow-hidden">
        <div className="text-center mb-7 md:mb-12 reveal">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            Testimoni
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
            Apa Kata Client Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`bg-white p-5 md:p-10 rounded-2xl editorial-shadow border border-[#c1c8c2]/10 reveal reveal-delay-${i + 1}
                ${t.offset ? 'md:mt-8' : ''}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-[#775a19] mb-3 md:mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined text-base md:text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-lg text-[#1b1c19] leading-relaxed mb-5 md:mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#f0eee9] overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] md:text-[11px] font-bold text-[#00190d] uppercase tracking-[0.1em] block">
                    {t.author}
                  </span>
                  <span className="text-[10px] md:text-xs text-[#2d3530] uppercase tracking-wider">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
