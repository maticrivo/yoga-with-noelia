import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "/yoga-with-noelia",
  // assetPrefix: "/yoga-with-noelia",
  basePath: process.env.REPOSITORY_NAME,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
