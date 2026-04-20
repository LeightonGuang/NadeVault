import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
