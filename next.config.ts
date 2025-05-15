import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-d890061fd4f94f63b27e54a967b3b306.r2.dev",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
