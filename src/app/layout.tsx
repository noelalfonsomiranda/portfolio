import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: profile.seoDescription,
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.seoDescription,
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#FBF8F3" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={body.variable}>
      <body>{children}</body>
    </html>
  );
}
