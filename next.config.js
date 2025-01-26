/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/yoga-with-noelia",
  // assetPrefix: "/yoga-with-noelia",
  basePath: process.env.REPOSITORY_NAME,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
