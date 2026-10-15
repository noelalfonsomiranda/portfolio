import type { Metadata, Viewport } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: `${profile.name.split(" ")[0]} ${profile.name.split(" ").at(-1)} · ${profile.title}`,
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
    <html lang="en" className={`${body.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the page as JS-enabled before first paint, so scroll-reveal never hides content without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
