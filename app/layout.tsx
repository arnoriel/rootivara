import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rootivara | Organic Excellence in Digital Design",
  description:
    "Rootivara adalah studio digital craftsmanship yang membangun website, landing page, dan ekosistem digital berkualitas premium untuk brand modern.",
  keywords: [
    "pembuatan website premium",
    "jasa website profesional",
    "web development indonesia",
    "landing page berkualitas",
    "digital studio",
    "rootivara",
    "organic digital design",
  ],
  icons: {
    icon: "/favlogo.png",
    shortcut: "/favlogo.png",
    apple: "/favlogo.png",
  },
  openGraph: {
    title: "Rootivara | Organic Excellence in Digital Design",
    description:
      "Studio digital craftsmanship — kami membangun website dan platform digital premium yang mengangkat brand Anda.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
