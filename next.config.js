/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdx.solo.to", "en.wikipedia.org"]
  }
}

module.exports = nextConfig
