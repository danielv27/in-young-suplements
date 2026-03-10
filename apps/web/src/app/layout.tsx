import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: "InYoung Labs – Precision Supplements",
    template: "%s | InYoung Labs",
  },
  description:
    "InYoung formulas are designed by physicians and informed by science to support health through your 30s, 40s, and beyond.",
  keywords: ["supplements", "health", "longevity", "skin health", "precision nutrition"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inyounglabs.com",
    siteName: "InYoung Labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
