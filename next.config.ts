import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    // Retired service-area pages → nearest active area (301)
    return [
      { source: "/areas/punta-gorda", destination: "/areas/cape-coral", permanent: true },
      { source: "/areas/punta-gorda/:service", destination: "/areas/cape-coral/:service", permanent: true },
      { source: "/areas/marco-island", destination: "/areas/naples", permanent: true },
      { source: "/areas/marco-island/:service", destination: "/areas/naples/:service", permanent: true },
      { source: "/areas/charlotte-county", destination: "/areas/lee-county", permanent: true },
    ];
  },
};

export default nextConfig;
