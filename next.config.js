/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['apirobots.github.io', 'tesla-cdn.thron.com']
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;