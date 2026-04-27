import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // or use remotePatterns to exclude /radar/*
  },
  allowedDevOrigins: ["192.168.0.*"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lineups/dust2",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
