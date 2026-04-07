import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
