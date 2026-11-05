import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  /* config options here */
  ...(isGithubPages
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/m-kitchen",
      }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      "**/*.mp4": {
        type: "asset",
      },
    },
  },
};

export default nextConfig;
