import type { Metadata } from "next";
import "./globals.css";
import { CookieNotice } from "@/components/CookieNotice";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotjackpot.in"),
  title: {
    default: "HotJackpot Reviews | Online Pokies Australia & Canadian Online Casinos",
    template: "%s | HotJackpot",
  },
  description:
    "Independent casino and pokies review platform for Australian and Canadian players. Overview of PayID and Interac e-Transfer banking, stated welcome bonuses, and game catalogues.",
  openGraph: {
    type: "website",
    siteName: "HotJackpot Reviews",
    locale: "en_AU",
    url: "https://hotjackpot.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "HotJackpot Reviews - Independent Pokies & Casino Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HotJackpot Reviews",
    description: "Independent iGaming editorial reviews and payment benchmarks.",
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
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
