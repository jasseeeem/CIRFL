/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  basePath: "/CIRFL",
  assetPrefix: "/CIRFL/",
};

module.exports = nextConfig;
