/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  basePath: "/cirfl",
  assetPrefix: "/cirfl",
};

module.exports = nextConfig;
