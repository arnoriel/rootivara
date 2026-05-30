// Replaces AskAI — Proses Pengerjaan section
export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Konsultasi',
      desc: 'Diskusi kebutuhan bisnis dan tujuan website Anda. Gratis, tanpa tekanan.',
    },
    {
      num: '02',
      title: 'Analisa Kebutuhan',
      desc: 'Kami pelajari bisnis, target customer, dan kompetitor untuk menemukan solusi terbaik.',
    },
    {
      num: '03',
      title: 'UI/UX Design',
      desc: 'Desain tampilan website yang profesional, modern, dan sesuai karakter brand Anda.',
    },
    {
      num: '04',
      title: 'Development',
      desc: 'Pembangunan website dengan performa cepat, struktur SEO, dan integrasi WhatsApp.',
    },
    {
      num: '05',
      title: 'Revisi',
      desc: 'Penyempurnaan bersama hingga hasilnya sesuai ekspektasi dan kebutuhan bisnis.',
    },
    {
      num: '06',
      title: 'Launching',
      desc: 'Website live dan siap menerima visitor. Support tersedia setelah launching.',
    },
  ];

  const reassurances = [
    { icon: 'handshake', text: 'Dibantu dari awal hingga selesai' },
    { icon: 'chat', text: 'Bisa konsultasi kapan saja' },
    { icon: 'edit', text: 'Ada revisi sesuai kesepakatan' },
    { icon: 'support_agent', text: 'Support setelah launching' },
    { icon: 'code_off', text: 'Tidak perlu paham teknis' },
  ];

  return (
    <section id="process" className="py-10 md:py-24 bg-[#f5f3ee]">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-8 md:mb-14 reveal">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            Cara Kerja
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
            Proses Pengerjaan yang Simple & Terarah
          </h2>
          <p className="text-sm md:text-base text-[#2d3530] mt-3 max-w-xl mx-auto">
            Dari konsultasi hingga launching, kami pastikan prosesnya mudah dipahami dan tidak membingungkan.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-10 md:mb-16">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`bg-white border border-[#c1c8c2]/20 rounded-2xl p-5 md:p-8 editorial-shadow reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="text-[28px] md:text-[36px] font-bold text-[#c1c8c2]/50 leading-none tracking-tighter">
                  {step.num}
                </span>
                <div className="w-px h-8 bg-[#c1c8c2]/30" />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-[#00190d] mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-[#2d3530] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Reassurances */}
        <div className="bg-[#00190d] rounded-2xl p-6 md:p-10">
          <p className="text-center text-[10px] md:text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.3em] mb-5 md:mb-8">
            Yang Membuat Kami Berbeda
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {reassurances.map((r) => (
              <div key={r.text} className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[#e9c176]"
                  style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}
                >
                  {r.icon}
                </span>
                <span className="text-[11px] md:text-sm font-medium text-white/80">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
