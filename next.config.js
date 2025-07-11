/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',       // Required for static export
  basePath: '',           // Keep empty if not using subpath
  assetPrefix: '',        // Typo fixed: `assetsPrefix` → `assetPrefix`
};

module.exports = nextConfig;
