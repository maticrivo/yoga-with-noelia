import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "/yoga-with-noelia",
  // assetPrefix: "/yoga-with-noelia",
  basePath: process.env.REPOSITORY_NAME,
  assetPrefix: process.env.REPOSITORY_NAME,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default withNextIntl(nextConfig);
