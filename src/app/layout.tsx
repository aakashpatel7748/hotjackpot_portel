import type { Metadata } from "next";
import "./globals.css";
import { CookieNotice } from "@/components/CookieNotice";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GeoProvider } from "@/components/GeoProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotjackpot.in"),
  title: {
    default: "HotJackpot Reviews | Canadian Online Casinos Guide 2026",
    template: "%s | HotJackpot",
  },
  description:
    "Independent online casino review platform for Canadian players. Overview of Interac e-Transfer banking, stated welcome bonuses, and slot catalogues.",
  openGraph: {
    type: "website",
    siteName: "HotJackpot Reviews",
    locale: "en_CA",
    url: "https://hotjackpot.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "HotJackpot Reviews - Independent Canadian Casino Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HotJackpot Reviews | Canadian Online Casinos",
    description: "Independent iGaming editorial reviews, Interac banking, and stated welcome bonuses.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0714] text-zinc-100 font-sans">
        <GoogleAnalytics />
        <GeoProvider>
          {children}
        </GeoProvider>
        <CookieNotice />
      </body>
    </html>
  );
}
