export default function Footer() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin konsultasi website bisnis saya.'
  )}`;

  return (
    <footer className="bg-[#fbf9f4] border-t border-[#c1c8c2]/30 py-10 md:py-20">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-[18px] md:text-[22px] font-bold tracking-tight text-[#00190d] mb-3 md:mb-4">
            Rootivara
          </div>
          <p className="text-xs md:text-sm text-[#2d3530] leading-relaxed max-w-xs mb-4 md:mb-6">
            Membantu bisnis tampil profesional online dengan website cepat, SEO-ready, dan siap menghasilkan leads.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#00190d] text-white text-[10px] font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full hover:bg-[#0a2f1f] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            Konsultasi Gratis
          </a>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="text-[10px] md:text-[11px] font-bold text-[#00190d] uppercase tracking-[0.15em] mb-4 md:mb-6">
            Layanan
          </h3>
          <ul className="space-y-3 md:space-y-4">
            {[
              'Website Company Profile',
              'Website SEO Bisnis',
              'Landing Page Ads',
              'Website Klinik',
              'Website UMKM',
              'Maintenance Website',
            ].map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-[10px] md:text-[11px] font-semibold text-[#2d3530] hover:text-[#775a19] transition-colors uppercase tracking-[0.1em]"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-[10px] md:text-[11px] font-bold text-[#00190d] uppercase tracking-[0.15em] mb-4 md:mb-6">
            Navigasi
          </h3>
          <ul className="space-y-3 md:space-y-4">
            {[
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Cara Kerja', href: '#process' },
              { label: 'Harga', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[10px] md:text-[11px] font-semibold text-[#2d3530] hover:text-[#775a19] transition-colors uppercase tracking-[0.1em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-[10px] md:text-[11px] font-bold text-[#00190d] uppercase tracking-[0.15em] mb-4 md:mb-6">
            Kontak
          </h3>
          <p className="text-[10px] md:text-[11px] font-semibold text-[#2d3530] uppercase tracking-[0.1em] mb-3 md:mb-4">
            hello@rootivara.com
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.1em] hover:text-[#00190d] transition-colors block mb-4"
          >
            +62 895-6054-76149
          </a>
          <div className="flex gap-4 mt-2">
            {['Instagram', 'LinkedIn', 'Behance'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[10px] font-semibold text-[#2d3530] hover:text-[#775a19] transition-colors uppercase tracking-[0.1em]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#c1c8c2]/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <span className="text-[10px] md:text-[11px] text-[#2d3530] opacity-80 uppercase tracking-[0.1em]">
          © 2025 Rootivara. Website Agency Indonesia.
        </span>
        <div className="flex gap-6 md:gap-8">
          {['Privacy', 'Terms'].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[10px] md:text-[11px] text-[#2d3530] opacity-80 hover:opacity-100 transition-opacity uppercase tracking-[0.1em]"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
