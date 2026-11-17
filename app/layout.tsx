import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import { jsonLdScript, legalServiceJsonLd, ogImage } from "@/lib/seo";
import "./globals.css";

// Local, e não next/font/google: o Google já quebrou build de cliente na Vercel.
const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-text",
  weight: "200 800",
  display: "swap",
});

const title = `${site.name} | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}, advogado` },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: "/brand/favicon.svg", apple: "/brand/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.legalName,
    url: "/",
    title,
    description: site.description,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: [ogImage.url] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#101728" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(legalServiceJsonLd())} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
