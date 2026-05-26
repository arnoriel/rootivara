'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Berapa lama pengerjaan website?',
    a: 'Estimasi menyesuaikan kebutuhan project. Paket Starter biasanya 5–7 hari kerja, Paket Business Growth 10–14 hari kerja, dan Conversion Pro menyesuaikan kompleksitas. Kami akan memberikan estimasi yang lebih akurat setelah konsultasi awal.',
  },
  {
    q: 'Apakah sudah termasuk domain dan hosting?',
    a: 'Domain dan hosting bisa include sesuai paket yang dipilih. Kami akan diskusikan detail ini saat konsultasi agar bisa memilih solusi yang paling sesuai kebutuhan dan budget bisnis Anda.',
  },
  {
    q: 'Apakah website SEO friendly?',
    a: 'Ya, semua website yang kami bangun sudah menggunakan struktur SEO-ready sejak awal — mulai dari meta tags, heading hierarchy, loading speed, hingga mobile responsiveness yang merupakan faktor penting di Google.',
  },
  {
    q: 'Apakah bisa revisi setelah website jadi?',
    a: 'Tersedia revisi sesuai kesepakatan project. Kami memastikan hasil akhir sesuai ekspektasi sebelum website diluncurkan. Detail jumlah revisi akan dijelaskan di proposal project.',
  },
  {
    q: 'Setelah website jadi, apakah ada support?',
    a: 'Ya, tersedia support dan maintenance setelah launching. Kami tidak meninggalkan client begitu saja — ada layanan maintenance berkala untuk memastikan website tetap berjalan dengan baik, aman, dan terus diperbarui.',
  },
  {
    q: 'Bagaimana cara mulai bekerja sama dengan Rootivara?',
    a: 'Cukup klik tombol Konsultasi Gratis atau hubungi kami via WhatsApp. Kami akan diskusikan kebutuhan bisnis Anda, memberikan rekomendasi solusi, dan menyiapkan proposal tanpa biaya dan tanpa tekanan.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-7 md:mb-12 reveal">
          <span className="text-[10px] md:text-[11px] font-semibold text-[#775a19] uppercase tracking-[0.3em] block mb-2 md:mb-4">
            FAQ
          </span>
          <h2 className="text-[26px] md:text-[40px] font-semibold leading-tight tracking-[-0.02em] text-[#00190d]">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-[#c1c8c2]/30 pb-4 pt-4 md:pb-6 md:pt-5 cursor-pointer reveal reveal-delay-${Math.min(i + 1, 5)}`}
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
