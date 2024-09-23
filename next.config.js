/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/repcult",
  output: "export",
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
