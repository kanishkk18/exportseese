import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disables strict mode to avoid unnecessary warnings
  swcMinify: true, // Enables SWC minification for better performance
  poweredByHeader: false, // Hides "X-Powered-By: Next.js" for security
  compress: true, // Enables gzip compression for faster load times
  productionBrowserSourceMaps: false, // Avoids exposing source maps in production
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Allows production builds even with TypeScript errors
  },
  experimental: {
    optimizeCss: true, // Optimizes CSS bundling
     // Enables experimental server actions for performance
      // Enables the after() API for post-response tasks
    authInterrupts: true, // Enables experimental forbidden() and unauthorized() APIs
  },
};

export default nextConfig;
