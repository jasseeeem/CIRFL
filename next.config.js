/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true, loader: "imgix", path: "/CIRFL" },
  basePath: "/CIRFL",
  assetPrefix: "/CIRFL/",
  publicRuntimeConfig: { basePath: process.env.BASE_PATH || "" },
};

module.exports = nextConfig;
