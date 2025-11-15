import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 75],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  // Optimize production builds
  compress: true,
  poweredByHeader: false,
=======
  /* config options here */
>>>>>>> cb7b4aeb522e68a9625fd05cc911677f71d6559d
};

export default nextConfig;
