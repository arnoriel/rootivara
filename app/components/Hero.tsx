'use client';

export default function Hero() {
  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin konsultasi dan mulai proyek digital bersama kalian.'
  )}`;

  return (
    <section className="min-h-screen pt-20 pb-8 md:pt-32 md:pb-16 flex items-center px-4 md:px-16 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-12 w-full items-center gap-4 md:gap-8">
        {/* Left — copy */}
        <div className="col-span-12 md:col-span-7">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-3 md:mb-6 hero-entrance">
            Digital Craftsmanship
          </span>
          <h1 className="text-[34px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] text-[#00190d] mb-3 md:mb-6 hero-entrance hero-entrance-delay-1">
            Websites Designed to{' '}
            <br />
            <em className="font-light not-italic" style={{ fontStyle: 'italic', fontWeight: 300 }}>
              Elevate
            </em>{' '}
            Modern Brands.
          </h1>
          <p className="text-sm md:text-lg text-[#414843] leading-relaxed max-w-xl mb-6 md:mb-10 hero-entrance hero-entrance-delay-2">
            We blend architectural precision with organic aesthetics to build digital environments
            that command attention and drive growth.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 items-center hero-entrance hero-entrance-delay-3">
            <a
              href="#portfolio"
              className="bg-[#00190d] text-white px-7 py-3 md:px-10 md:py-4 rounded-lg text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em]
                hover:bg-[#0a2f1f] transition-all duration-300 active:scale-95"
            >
              View Portfolio
            </a>
            <a
              href="#process"
              className="text-[10px] md:text-[11px] font-semibold text-[#00190d] uppercase tracking-[0.15em] border-b border-[#775a19] pb-1
                hover:text-[#775a19] transition-colors duration-200"
            >
              Explore Our Process
            </a>
          </div>
        </div>

        {/* Right — editorial image (hidden on smallest screens, shown from sm up) */}
        <div className="col-span-12 md:col-span-5 relative mt-6 md:mt-0 hero-entrance hero-entrance-delay-4 hidden sm:block">
          <div className="aspect-[4/3] md:aspect-[4/5] bg-[#f0eee9] rounded-2xl overflow-hidden editorial-shadow relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-UO5kNwys1Q9IvsOm38QWUioqYPYHQplmk6JRliH_DUwV2CLdFchOQerCtnBCUK7AVMhw9bY1a9DUKCmEoLSMovv_Mx2ppTa2OuZQTPnaXLGoWhT83q7TxqEBl-WNounILB7dJuy9yl65MppIDp3VOGibLD15JEBiI3a6dwaLig3D4oLCf08q2t3UYq3xUs-ujdKV8hO3jMKexxFgdZuI9qugvtDllc55jiTUQKMnPEWjMRzkw9HTQrmSzh72SPM2lOLKXi5tXCfo"
              alt="Premium architectural office interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating mock card */}
          <div className="absolute -bottom-10 -left-20 w-64 h-72 bg-white p-5 rounded-xl editorial-shadow z-20 hidden lg:block border border-[#c1c8c2]/30">
            <div className="w-full h-36 bg-[#f0eee9] mb-4 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUn1X6cSQ0T0gyK4MWPt_fknidxcKZN7JFJmLcPH5-83nAvL2q7QxqC99uCoSPzrRTNcUHA6tLXqruVIv23pSEndExB2dFyWyLak4oQ_h02yEF3ZYQ0w21BuSaOQJvvuX32yUv7_1Ux-G5RSJcAtR6KfRsXd1KWt4PapEPrd4qXOwjtJNGnsDmQK4SOhvQwKIbmuubE_QcMY-tqchhBxqVOt0rjANuEH064nCR4ZISqvkbE9-Zo8BEvKIfFQynhhSijKlaz1z1dWcU"
                alt="Analytics dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="h-2 w-3/4 bg-[#c1c8c2] rounded mb-2" />
            <div className="h-2 w-1/2 bg-[#c1c8c2] rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
