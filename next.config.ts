import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  cacheComponents: true,
  cacheLife: {
    default: {
      stale: 300, // 5 minutes
      revalidate: 300, // 5 minutes
    },
  },
};

export default nextConfig;
