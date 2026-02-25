import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excellent Steels and Alloys - Premium Steel Solutions",
  description: "Premium steel trading company offering high-quality alloy steels and MS products. LRF+VD processed, low sulfur & phosphorus. Small quantities, big quality, competitive rates.",
  keywords: ["Steel Trading", "Alloy Steels", "MS Products", "LRF VD Processed", "Premium Steel", "Steel Supplier", "Industrial Steel"],
  authors: [{ name: "Excellent Steels and Alloys" }],
  icons: {
    icon: "/steel-logo.png",
  },
  openGraph: {
    title: "Excellent Steels and Alloys",
    description: "Premium steel solutions. Small quantities. Big quality. Competitive rates.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excellent Steels and Alloys",
    description: "Premium steel solutions. Small quantities. Big quality. Competitive rates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
