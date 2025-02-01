/* eslint-disable @typescript-eslint/no-require-imports */
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/",
  assetPrefix: "/",
  // basePath: `/${process.env.REPOSITORY_NAME}`,
  // assetPrefix: `/${process.env.REPOSITORY_NAME}`,
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
