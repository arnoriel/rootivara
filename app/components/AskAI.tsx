export default function AskAI() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Deep dive into your brand DNA, market positioning, and core business objectives.',
    },
    {
      num: '02',
      title: 'Architecture',
      desc: 'Laying the structural foundation with precise wireframes and user flow mapping.',
    },
    {
      num: '03',
      title: 'Curation',
      desc: 'Infusing the architecture with premium visual design and interactive storytelling.',
    },
    {
      num: '04',
      title: 'Deployment',
      desc: 'Technical optimization and global launch with continuous performance monitoring.',
    },
  ];

  return (
    <>
      {/* Philosophy / Why Rootivara */}
      <section className="py-20 md:py-24 bg-[#f5f3ee] text-center">
        <div className="px-6 md:px-16 max-w-4xl mx-auto">
          <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.4em] block mb-6 reveal">
            Philosophy
          </span>
          <h2 className="text-[52px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] text-[#00190d] mb-10 reveal reveal-delay-1">
            More Than{' '}
            <em className="text-[#727973] font-light" style={{ fontStyle: 'italic' }}>
              Beautiful
            </em>{' '}
            Websites.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10 reveal reveal-delay-2">
            <p className="text-lg text-[#414843] leading-relaxed">
              We believe in digital architecture—where form follows function in a dance of sophisticated
              minimalism. Every pixel serves a purpose, every animation tells a story.
            </p>
            <p className="text-lg text-[#414843] leading-relaxed">
              Strategic thinking is our backbone. We analyze your market, understand your audience, and
              build a digital asset that serves as a long-term growth vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-20 md:py-24 px-6 md:px-16 max-w-[1280px] mx-auto overflow-hidden">
        <div className="mb-12 reveal">
          <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-4">
            The Roadmap
          </span>
          <h2 className="text-[36px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
            From Vision to Reality
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-0 border-t border-[#c1c8c2]/30 pt-12 relative">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex-1 pb-12 md:pb-0 relative group reveal reveal-delay-${i + 1}
                ${i < steps.length - 1 ? 'md:pr-10' : ''}
                ${i > 0 ? 'md:px-10' : ''}
              `}
            >
              <span className="text-[48px] font-light text-[#775a19]/20 group-hover:text-[#775a19]/50 transition-colors duration-500 block mb-5 leading-none">
                {step.num}
              </span>
              <h3 className="text-xl md:text-2xl font-medium mb-3 text-[#00190d] tracking-tight">
                {step.title}
              </h3>
              <p className="text-base text-[#414843] leading-relaxed">{step.desc}</p>

              {/* Vertical divider */}
              {i < steps.length - 1 && (
                <div className="absolute top-0 right-0 h-full w-px bg-[#c1c8c2]/20 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
