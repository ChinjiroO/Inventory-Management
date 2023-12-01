/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
