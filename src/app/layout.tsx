import type { Metadata, Viewport } from "next";
// Self-hosted from npm instead of next/font/google: Google serves this font from `/l/font?kit=…&…`
// URLs that the Turbopack dev server can't parse ("next/font/google queries have exactly one entry").
import "@fontsource-variable/plus-jakarta-sans";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: profile.seoDescription,
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.seoDescription,
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
