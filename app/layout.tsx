import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhashamedia.com"),
  title: "Dhasha Media | #1 Media Agency & Creator Ecosystem",
  description: "Dhasha Media is a 10-in-1 media powerhouse offering professional photography, videography, branding, and a dedicated creator platform. The new standard in digital media production.",
  keywords: ["media agency", "photography studio", "videography services", "branding agency", "creator platform", "digital media production", "Dhasha Media", "content creation", "social media marketing"],
  authors: [{ name: "Dhasha Media Team" }],
  creator: "Dhasha Media",
  publisher: "Dhasha Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dhasha Media | #1 Media Agency & Creator Ecosystem",
    description: "The New Standard in Digital Media. 10-in-1 Media Powerhouse for Creators and Businesses.",
    url: "https://dhashamedia.com",
    siteName: "Dhasha Media",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dhasha Media Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhasha Media | #1 Media Agency & Creator Ecosystem",
    description: "The New Standard in Digital Media. 10-in-1 Media Powerhouse for Creators and Businesses.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dhashamedia.com",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dhasha Media",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#DAC291",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
