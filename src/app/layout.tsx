import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frame & Code | Creative Digital Studio",
  description: "Premium visual production and bespoke digital architecture.",

  authors: [{ name: "Frame & Code", url: "https://frameandcode.com" }],
  creator: "Frame & Code",
  icons: {
    icon: "/logo.ico",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Frame & Code – Handcrafted Visuals & Bespoke Digital Architecture",
    description:
      "Experience the epitome of bespoke craftsmanship with Frame & Code. Handcrafted in Lagos, our limited pre-order collection offers unparalleled quality and timeless elegance. Discover your perfect fit today.",
    url: "https://frameandcode.com",
    siteName: "Frame & Code",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Frame & Code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frame & Code – Handcrafted Visuals & Bespoke Digital Architecture",
    description:
      "Experience the epitome of bespoke craftsmanship with Frame & Code. Handcrafted in Lagos, our limited pre-order collection offers unparalleled quality and timeless elegance. Discover your perfect fit today.",
    images: ["/logo.svg"],
    creator: "@FrameAndCode",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
