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
};

module.exports = nextConfig;