import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site: `next build` writes plain HTML/CSS/JS to /out, which Vercel (or any host) serves as-is.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
