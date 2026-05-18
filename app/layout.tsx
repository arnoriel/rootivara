import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rootivara — Studio Pembuatan Website, SaaS & Aplikasi",
  description:
    "rootivara adalah studio software development profesional yang membantu bisnis & startup membangun Website, SaaS, Desktop & Mobile App yang modern, scalable, dan siap bersaing.",
  keywords: [
    "pembuatan website",
    "jasa website profesional",
    "pembuatan aplikasi",
    "SaaS development",
    "mobile app",
    "software development indonesia",
    "rootivara",
  ],
  openGraph: {
    title: "rootivara — Studio Pembuatan Website, SaaS & Aplikasi",
    description:
      "rootivara adalah studio software development profesional. Dari Website hingga Mobile App — kami wujudkan ide Anda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
