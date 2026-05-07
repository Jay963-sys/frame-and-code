import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";

const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display-load",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-load",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-load",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frame & Code — Visuals & Digital Architecture",
  description:
    "A two-discipline studio. Premium photography and cinematography paired with bespoke web engineering. Working between Lagos and Chicago.",
  authors: [{ name: "Frame & Code" }],
  creator: "Frame & Code",
  icons: {
    icon: "/logo.ico",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Frame & Code — Visuals & Digital Architecture",
    description:
      "A two-discipline studio. Premium videography paired with bespoke web engineering. Working between Lagos and Chicago.",
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
    title: "Frame & Code — Visuals & Digital Architecture",
    description:
      "A two-discipline studio. Videography, and bespoke web engineering.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${interTight.variable}`}
    >
      <body className="grain antialiased">
        <Loader />
        <Cursor />
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
