/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdx.solo.to", "cdx.solo.to"]
  }
}

module.exports = nextConfig
