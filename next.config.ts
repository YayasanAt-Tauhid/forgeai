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
  // nft (file tracer) uses default export condition and traces pg-cloudflare → dist/empty.js.
  // OpenNext bundles with the workerd condition and needs dist/index.js.
  // Force nft to include the workerd build so OpenNext can copy it.
  experimental: {
    outputFileTracingIncludes: {
      "/**": ["./node_modules/pg-cloudflare/dist/index.js"],
    },
  },
};

export default nextConfig;
