import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpressboss.com",
      },
      {
        protocol: "https",
        hostname: "trisog-html.netlify.app",
      },
    ],
  },
};

export default nextConfig;
