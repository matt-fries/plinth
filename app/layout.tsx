import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { Archivo } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Photography`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, locale: "en_CA", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#aaaaaa",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${GeistMono.variable} ${archivo.variable}`}>
      <body className="flex min-h-dvh flex-col bg-paper font-mono text-ink antialiased">
        <a
          href="#main"
          className="sr-only z-10 bg-ink px-3 py-2 font-mono text-xs text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
