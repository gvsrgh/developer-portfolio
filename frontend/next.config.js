/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'export',
  trailingSlash: true,
  basePath: '',
  outputFileTracingRoot: require('path').join(__dirname),
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  }
};

module.exports = nextConfig;
