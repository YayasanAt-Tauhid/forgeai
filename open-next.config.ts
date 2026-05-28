import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  edgeExternals: ["node:crypto"],
  // middleware/proxy compilation disabled: Next.js 16's proxy.ts architecture
  // is not yet supported by OpenNext Cloudflare adapter (issue #13755).
  // Auth is enforced per-route via Clerk's auth() and clerkMiddleware fallback.
};

export default config;
