'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is the typical investment for a custom project?',
    a: 'Our projects are bespoke and range from IDR 2.500.000 for professional websites up to IDR 5.500.000+ for full-scale applications, depending on complexity, features, and strategic requirements.',
  },
  {
    q: 'How long does a standard build take?',
    a: 'A professional website typically takes 7–14 working days. A full application (SaaS, Mobile, or Web App) spans 3–8 weeks including discovery, design, development, and testing phases.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Absolutely. We offer concierge maintenance plans that include performance monitoring, security updates, and iterative design improvements as your brand evolves.',
  },
  {
    q: 'What does the payment structure look like?',
    a: '50% upfront to kickstart the project, 50% upon completion. No hidden fees — ever. We believe in radical transparency from day one.',
  },
  {
    q: 'Can I integrate an AI chatbot or custom features?',
    a: 'Yes! We build custom integrations, AI-powered features, API connections, and business management systems tailored to your exact needs.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-10 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d] mb-7 md:mb-12 text-center reveal">
          Curated Inquiries
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-[#c1c8c2]/30 pb-4 pt-4 md:pb-6 md:pt-5 cursor-pointer reveal reveal-delay-${i + 1}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-sm md:text-xl font-medium text-[#00190d] tracking-tight leading-snug">
                  {faq.q}
                </h3>
                <span
                  className="material-symbols-outlined text-[#775a19] shrink-0 transition-transform duration-300 text-xl md:text-2xl"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  add
                </span>
              </div>

              {open === i && (
                <p className="mt-3 text-sm md:text-base text-[#414843] leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
