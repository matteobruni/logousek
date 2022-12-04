/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  unoptimized: true,
    images: {
      loader: 'akamai',
      path: '',
    },
}

module.exports = nextConfig
