import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rootivara.com"),

  title: "Rootivara | Jasa Website Premium, SEO-Ready & Berbasis Konversi",
  description:
    "Rootivara membantu UMKM, bisnis jasa, klinik, dan brand lokal memiliki website cepat, premium, SEO-ready, dan siap menghasilkan leads. Konsultasi gratis.",
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "web development indonesia",
    "website UMKM",
    "website klinik",
    "landing page iklan",
    "SEO website",
    "rootivara",
    "website bisnis premium",
    "jasa website murah berkualitas",
  ],

  icons: {
    icon: [
      { url: "/favlogo.png", sizes: "48x48", type: "image/png" },
      { url: "/favlogo.png", sizes: "32x32", type: "image/png" },
      { url: "/favlogo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favlogo.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favlogo.png", type: "image/png" }],
  },

  alternates: {
    canonical: "https://rootivara.com",
  },
  verification: {
    google: "U75WPOwiYvog4tyq21a-gTQroS9WSH0vjWl2ap3d8Po",
  },

  openGraph: {
    title: "Rootivara | Jasa Website Premium, SEO-Ready & Berbasis Konversi",
    description:
      "Kami membantu bisnis tampil profesional secara online dengan website cepat, SEO-ready, dan fokus menghasilkan leads.",
    url: "https://rootivara.com",
    siteName: "Rootivara",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rootivara - Jasa Website Premium untuk Bisnis Indonesia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rootivara | Jasa Website Premium, SEO-Ready & Berbasis Konversi",
    description:
      "Kami membantu bisnis tampil profesional secara online dengan website cepat, SEO-ready, dan fokus menghasilkan leads.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* ── Critical font preconnects ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          Geist font — loaded with display=swap so text renders immediately in fallback,
          then swaps once Geist is ready. This eliminates render-blocking.
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/*
          Material Symbols — injected via an inline <script> so the media-swap trick
          runs as plain DOM, bypassing React's onLoad type constraint.
          The script creates a <link media="print"> and swaps to media="all" on load,
          which makes the font non-render-blocking while still loading eagerly.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var l=document.createElement('link');
  l.rel='stylesheet';
  l.media='print';
  l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block';
  l.onload=function(){l.media='all';};
  document.head.appendChild(l);
})();
            `.trim(),
          }}
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="48x48" href="/favlogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favlogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favlogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favlogo.png" />
        <link rel="shortcut icon" href="/favlogo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}