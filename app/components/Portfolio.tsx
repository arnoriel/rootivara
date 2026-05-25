export default function Portfolio() {
  const projects = [
    {
      id: 1,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVqSD3SPKTMlmxjMHuXBelJ0jLWYPO6JlGyScdOs7_qt4do1wBo0XaQMR1V5KHNTozq_h2Y63FVCz14B2cJeGJ5yUuDiFJnT5SJSIQkLzaPbZCrI7QwVnl4D6gh4XoqNRv09RWa-Xb4gUK0ttN5Z_Uv3W-00fQlS6M_2I2JTU7Jmh0pe9f-LBJprQwZHyRV_7MnYai_WUES_R6v_pgfX3CVOyG-JERK_f0Qyvzbzvtn2EoKy0iddH4THZRZiX2RtJpDW3Zo4EbmpOW',
      category: 'Interior Design',
      title: 'Luminary Studio',
      wide: true,
    },
    {
      id: 2,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKY6u02X0JWH_r9V7fd9MJWGOG-ZQlnIQyOEpE6UJoe0RIMBvQc_JVv66R8hhSHFh4_ZmblSmpHmRgprmpPyLuJ11MaftCUIQMLHA27Oy1RyiQYJm-GUvXKE6xbJrjHwhWSEhAC2Pn46x7tvBv2K3NzHzCmp_NiZnBbapuS3GS3cMUjj-oKpnxC2NAQ_dJQxhjz2QBguExaUSnPm2IbQbHlV8mQuslhMyZoroui7CWKOsklanRpCGqr_lrQRhXX_eHKAphQz9gOFnj',
      category: 'E-Commerce',
      title: 'Botanica Rare',
      wide: false,
    },
    {
      id: 3,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMTPVSC-hwyO01dy_SeRvYvzSbBHTlpLhrx1ZfZntYZqrV0inL2TeudpO9FOXg1xovZrKxOs0iTfJ0IL9f4aGFHSDiieJFxXjQtoG6aC-ax-Z2hu_77_DgJVxPAuJt6n6sE_PUbeYjAkS-GILsaKq6rHz7xshAJ-Lw8KDEXbMKelqx0eBFeCD8_SGbk4qIye1ihPgg866rrePZqh30k1unQpWjc3ODulmQAj60CjQy_n5PnyCD2NKgcXIHtKy-x1mFFaBHNEvW7fg5',
      category: 'Real Estate',
      title: 'Skyline Ventures',
      wide: false,
    },
  ];

  const waLink = `https://wa.me/62895605476149?text=${encodeURIComponent(
    'Halo rootivara! Saya ingin melihat portfolio lengkap dan memulai proyek bersama kalian.'
  )}`;

  return (
    <section id="portfolio" className="py-10 md:py-24 bg-[#00190d] text-white">
      {/* Header */}
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto mb-6 md:mb-12 flex justify-between items-end reveal">
        <div>
          <span className="text-[10px] md:text-[11px] font-semibold text-[#e9c176] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            The Archive
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em]">
            Selected Works
          </h2>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-[11px] font-semibold text-[#e9c176] border border-[#e9c176]/30 px-6 py-3 rounded-full
            hover:bg-[#e9c176] hover:text-[#00190d] transition-all uppercase tracking-[0.15em]"
        >
          View All Projects
        </a>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-3 md:gap-8 px-4 md:px-16 max-w-[1280px] mx-auto">
        {/* Wide project */}
        <div className="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] reveal reveal-delay-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={projects[0].img}
            alt={projects[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00190d]/80 to-transparent opacity-60" />
          <div className="absolute bottom-5 left-5 right-5 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
            <div>
              <span className="text-[#e9c176] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] mb-1 md:mb-2 block">
                {projects[0].category}
              </span>
              <h3 className="text-xl md:text-[36px] font-semibold tracking-tight">{projects[0].title}</h3>
            </div>
            <span className="material-symbols-outlined text-2xl md:text-4xl hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-pointer">
              arrow_outward
            </span>
          </div>
        </div>

        {/* 2-col projects */}
        <div className="grid grid-cols-2 gap-3 md:gap-8">
          {projects.slice(1).map((p, i) => (
            <div key={p.id} className={`group relative overflow-hidden rounded-2xl aspect-square reveal reveal-delay-${i + 2}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                <span className="text-white/60 text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.15em] mb-1 md:mb-2 block">
                  {p.category}
                </span>
                <h3 className="text-sm md:text-2xl font-medium">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
