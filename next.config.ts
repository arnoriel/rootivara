import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  images: {
    // Automatically use WebP/AVIF — reduces image payload significantly
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // Long-lived cache headers for static assets (JS, CSS, fonts)
  // This eliminates the "Use efficient cache lifetimes" PageSpeed warning
  async headers() {
    return [
      {
        // Next.js static chunks (_next/static) are content-hashed → safe to cache 1 year
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Public assets: logo, favicons, OG images — versioned by deploy, cache 7 days
        source: "/:path((?!_next).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
