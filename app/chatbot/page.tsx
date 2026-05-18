'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `Kamu adalah Rootiva AI, asisten virtual dari rootivara — sebuah software development studio yang membantu bisnis & startup mewujudkan ide digital.

Tugasmu adalah menjawab pertanyaan seputar rootivara dengan ramah, informatif, dan profesional dalam Bahasa Indonesia.

Informasi tentang rootivara:
- rootivara adalah studio software development yang membangun Website, SaaS, Desktop & Mobile App yang scalable, modern, dan siap bersaing.
- Layanan: Website Professional, Jasa Pembuatan Aplikasi (SaaS, Mobile App, Desktop App, Web App), Sistem Manajemen Bisnis.
- Paket Website Professional: IDR 2.500.000 — include desain custom, hingga 10 halaman, responsif, SEO dasar, domain .com/.id 1 tahun, hosting premium 1 tahun, SSL, revisi 3x, support 30 hari.
- Paket Jasa Pembuatan Aplikasi: IDR 5.500.000 — include konsultasi, desain UI/UX custom, backend + frontend, database & API, deployment, domain, hosting/VPS, SSL, dokumentasi, support 60 hari.
- Untuk kebutuhan custom, harga bisa disesuaikan.
- Waktu pengerjaan: website 7-14 hari kerja, aplikasi 3-8 minggu.
- Pembayaran: 50% di muka, 50% setelah selesai. Tidak ada biaya tersembunyi.
- Kontak WhatsApp: 62895605476149
- Tim terdiri dari Software Engineer specialist berpengalaman.
- Pengalaman 5+ tahun, 50+ proyek selesai, 98% rating kepuasan.

Jika ada pertanyaan di luar topik rootivara, tetap bantu dengan sopan tapi arahkan kembali ke layanan rootivara jika relevan.
Jawab dengan singkat, padat, dan bermanfaat. Gunakan emoji sesekali untuk membuat percakapan lebih hidup.`;

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Halo! Saya Rootiva AI 👋 Saya siap membantu kamu mengetahui lebih lanjut tentang rootivara — layanan, harga, proses, dan apapun yang kamu butuhkan. Mau tanya apa? 😊',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const content = (text || input).trim();
    if (!content || isLoading) return;

    const userMsg: Message = { role: 'user', content };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'poolside/laguna-m.1:free',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.choices[0].message.content },
        ]);
      } else if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              'Maaf, ada gangguan teknis saat ini 🙏 Coba lagi sebentar, atau hubungi kami langsung via WhatsApp ya!',
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Maaf, koneksi bermasalah 😅 Pastikan kamu terhubung ke internet dan coba lagi.',
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    'Berapa harga membuat website?',
    'Berapa lama pengerjaan?',
    'Apa saja yang termasuk dalam paket?',
    'Bagaimana cara mulai?',
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0e0e0e',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(124,106,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(124,106,255,0.12) 0%, transparent 60%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(14,14,14,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => router.push('/')}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#9ca3af',
                transition: 'all 0.2s ease',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '16px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.color = '#9ca3af';
              }}
            >
              ←
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  position: 'relative',
                }}
              >
                🤖
                {/* Online dot */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    right: '-1px',
                    width: '10px',
                    height: '10px',
                    background: '#22c55e',
                    borderRadius: '50%',
                    border: '2px solid #0e0e0e',
                  }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#ffffff', letterSpacing: '-0.2px' }}>
                  Rootiva AI
                </div>
                <div style={{ fontSize: '11px', color: '#22c55e', fontWeight: 500 }}>
                  Online · Siap membantu
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: '12px',
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                background: '#7c6aff',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            rootivara.com
          </div>
        </div>
      </header>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px 24px 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '16px' }}>
          {/* Welcome state: show suggestion chips before any user message */}
          {messages.length === 1 && (
            <div style={{ marginTop: '8px' }}>
              <div
                style={{
                  fontSize: '12px',
                  color: '#4b5563',
                  fontWeight: 500,
                  marginBottom: '10px',
                  textAlign: 'center',
                }}
              >
                Pertanyaan yang sering ditanyakan:
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    style={{
                      background: 'rgba(124,106,255,0.1)',
                      border: '1px solid rgba(124,106,255,0.2)',
                      borderRadius: '100px',
                      padding: '8px 16px',
                      fontSize: '13px',
                      color: '#a5a0ff',
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(124,106,255,0.18)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(124,106,255,0.1)';
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background:
                    msg.role === 'assistant'
                      ? 'linear-gradient(135deg, #7c6aff, #a855f7)'
                      : 'rgba(255,255,255,0.1)',
                  border: msg.role === 'user' ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: msg.role === 'assistant' ? '14px' : '13px',
                  color: msg.role === 'user' ? '#9ca3af' : '#fff',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {msg.role === 'assistant' ? '🤖' : '👤'}
              </div>

              {/* Bubble */}
              <div
                style={{
                  maxWidth: '75%',
                  background:
                    msg.role === 'user'
                      ? 'linear-gradient(135deg, #7c6aff, #a855f7)'
                      : 'rgba(255,255,255,0.06)',
                  border:
                    msg.role === 'user'
                      ? 'none'
                      : '1px solid rgba(255,255,255,0.08)',
                  borderRadius:
                    msg.role === 'user'
                      ? '18px 18px 4px 18px'
                      : '18px 18px 18px 4px',
                  padding: '12px 16px',
                  fontSize: '14px',
                  color: msg.role === 'user' ? '#ffffff' : '#d1d5db',
                  lineHeight: 1.65,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Loading bubble */}
          {isLoading && (
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c6aff, #a855f7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  flexShrink: 0,
                }}
              >
                🤖
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '18px 18px 18px 4px',
                  padding: '14px 18px',
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center',
                }}
              >
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    style={{
                      width: '7px',
                      height: '7px',
                      background: '#7c6aff',
                      borderRadius: '50%',
                      animation: `bounce-dot 1.2s ease-in-out ${dot * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input area */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          zIndex: 100,
          background: 'rgba(14,14,14,0.9)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 24px 24px',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-end',
              background: 'rgba(255,255,255,0.05)',
              border: '1.5px solid rgba(124,106,255,0.2)',
              borderRadius: '20px',
              padding: '12px 12px 12px 18px',
              transition: 'border-color 0.2s ease',
            }}
            onFocus={() => {}}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
              }}
              onKeyDown={handleKeyDown}
              placeholder="Tulis pesanmu di sini..."
              rows={1}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                resize: 'none',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '14px',
                color: '#e5e7eb',
                lineHeight: 1.6,
                minHeight: '24px',
                maxHeight: '120px',
                overflowY: 'auto',
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              style={{
                width: '40px',
                height: '40px',
                background:
                  input.trim() && !isLoading
                    ? 'linear-gradient(135deg, #7c6aff, #a855f7)'
                    : 'rgba(255,255,255,0.08)',
                border: 'none',
                borderRadius: '12px',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"
                  stroke={input.trim() && !isLoading ? '#fff' : '#4b5563'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            style={{
              marginTop: '10px',
              textAlign: 'center',
              fontSize: '11px',
              color: '#374151',
            }}
          >
            Rootiva AI dapat membuat kesalahan. Verifikasi info penting via{' '}
            <a
              href="https://wa.me/62895605476149"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#6d6aff', textDecoration: 'none' }}
            >
              WhatsApp
            </a>
            . Percakapan tidak disimpan setelah sesi berakhir.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-dot {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        textarea::placeholder { color: #4b5563; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(124,106,255,0.3); border-radius: 4px; }
      `}</style>
    </div>
  );
}
