import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Enable Cloudflare bindings during local development (next dev)
initOpenNextCloudflareForDev();

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
