/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/rovic_portfolio",
  assetPrefix: "/rovic_portfolio",
  images: { unoptimized: true },
  // experimental: { images: { unoptimized: true } },
  swcMinify: true,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
