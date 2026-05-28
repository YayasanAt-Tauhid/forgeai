import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    position: "bottom-right",
  },
  images: {
    remotePatterns: [
      { hostname: "3lbm6vryvm.ufs.sh" },
      // Supabase Storage
      { hostname: "asxcpepirqzwhdxzjyoi.supabase.co" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
};

export default nextConfig;
