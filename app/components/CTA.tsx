export default function CTA() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin konsultasi dan mulai proyek digital bersama kalian.'
  )}`;

  return (
    <section className="relative py-14 md:py-36 overflow-hidden flex items-center justify-center min-h-[340px] md:min-h-[600px]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fbf9f4] to-[#eae8e3] z-0" />

      {/* Blob orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-[#0a2f1f] rounded-full blur-[100px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-[#fed488] rounded-full blur-[100px] opacity-15" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 text-center max-w-4xl mx-auto">
        <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.4em] block mb-3 md:mb-6 reveal">
          The Next Chapter
        </span>
        <h2 className="text-[32px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] text-[#00190d] mb-6 md:mb-10 reveal reveal-delay-1">
          Build a Digital Presence
          <br />
          That{' '}
          <em className="font-light" style={{ fontStyle: 'italic' }}>
            Feels
          </em>{' '}
          Premium.
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-center reveal reveal-delay-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00190d] text-white px-8 py-3.5 md:px-12 md:py-5 rounded-full text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em]
              hover:scale-105 transition-transform duration-300 shadow-2xl shadow-[#00190d]/20 w-full sm:w-auto"
          >
            Secure Your Slot
          </a>
          <a
            href="#services"
            className="border border-[#00190d] text-[#00190d] px-8 py-3.5 md:px-12 md:py-5 rounded-full text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em]
              hover:bg-[#00190d] hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
