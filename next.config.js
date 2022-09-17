/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  basePath: "/CIRFL",
  assetPrefix: "/CIRFL",
};

module.exports = nextConfig;
