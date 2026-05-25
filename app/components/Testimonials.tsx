export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Rootivara took our outdated platform and transformed it into a masterpiece of digital architecture. Our conversion rates tripled within three months.',
      author: 'Elena Vance',
      role: 'Founder, Aesthetica',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDis24C-mzBZ790t-FGSmRa7ZGuh0dNJo6mqOTqp0CUTJ68zFTlL2OGzTMWSfD8wssE95Cp9ggNofsYxWWrWAwaJptSjaULLC266qfCHnZBg01l3BoUxA-SXU0CSj2xn_0z6KNONHSN--afpcAQJ1-MJDOexQtRwcxHoX1EoGTe5yl2eb5KyJymWEqlUqBPocRxHlXT8muBZ9CdipMTSWqcdO6-AWe7bPV-qB8peyVSAQXcnJLXSMA_5Tgz9U7tCiI-YJqFNZVToqKW',
      offset: false,
    },
    {
      quote:
        "The level of detail is obsessive. They don't just build websites; they build trust and authority through design.",
      author: 'Julian Thorne',
      role: 'Director, Structure Co.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5WA0qXxOJCh3-HiOHVsuWo9h_2yjK-tP_6HTBzY6AtnaFibN7pwjCwAXJO0eHoFmlaQ50iC3fS_iroHF4LVWvFcJGbD4LQYXCP3-B3joAjOg5KRkTqtjjOpQ9OTPynDLCT_YSmrD7VBcF2pLlffrmOV2iS7IxX5wu_qaWwml6JA2YFVhugtVumadkLiPiiWYsJuoPTc3teBOXS050WkEH_JLIqrGrQc8fC8cARocgxg_N-I3mXhcUTYsuJQH9xFWR-18SBy8RbNmD',
      offset: true,
    },
    {
      quote:
        'The process was as seamless as the final result. Truly a white-glove experience for brands that value their time.',
      author: 'Sarah Jenkins',
      role: 'CMO, Elixir Global',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHxwfS53qGqwq3KIf7lWcRWA23Hp7mUvjp_92lzHhpgJ4hc29-gXQo9BagFwpu3of-IqbhxfRRvEaSXFJ4IDkTOBMA3IDCux8bQOOZe_8s12ShpLjXiIQ42moaYqhEXmUlLQvQEL4OWFdbzvJd7UamYGMWnasb4OsdwBKI7OipWUTY50T4f5v43APRE83JfGXURgLcD5fQht4KpNuo8CN2n1J6MIXb8NASfPYqQ7qqnqwF6nit1cNDdkPYxw8y-hlqGxZlR9pKmUSS',
      offset: false,
    },
  ];

  return (
    <section className="py-10 md:py-24 bg-[#f5f3ee]">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto overflow-hidden">
        <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d] mb-7 md:mb-12 text-center reveal">
          Echoes of Excellence
        </h2>

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
                  <span key={s} className="material-symbols-outlined text-base md:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
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
                  <span className="text-[10px] md:text-xs text-[#414843] uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
