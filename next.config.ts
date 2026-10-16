import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site: `next build` writes plain HTML/CSS/JS to /out, which Vercel (or any host) serves as-is.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        // Only run Tailwind on our own CSS, not node_modules or Next.js internals (faster; recommended in the docs).
        condition: { not: "foreign" },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
