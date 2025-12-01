import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["dev.tagmaster.ae"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
