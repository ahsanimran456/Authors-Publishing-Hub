import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Authors Publishing Hub — Professional Book Publishing Services",
    template: "%s | Authors Publishing Hub",
  },
  description:
    "Authors Publishing Hub offers professional book writing, editing, publishing, and marketing services. Transform your manuscript into a bestseller with our expert team. Trusted by 1000+ authors across the USA.",
  keywords: [
    "book publishing",
    "book writing services",
    "book editing",
    "book marketing",
    "self publishing",
    "professional publishing",
    "manuscript editing",
    "book cover design",
    "book distribution",
    "USA publishing services",
    "authors publishing hub",
    "publish my book",
    "ghostwriting services",
    "ebook publishing",
    "print on demand",
  ],
  authors: [{ name: "Authors Publishing Hub" }],
  creator: "Authors Publishing Hub",
  publisher: "Authors Publishing Hub",
  metadataBase: new URL("https://authorspublishinghub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://authorspublishinghub.com",
    siteName: "Authors Publishing Hub",
    title: "Authors Publishing Hub — Professional Book Publishing Services",
    description:
      "Transform your manuscript into a bestseller. Professional book writing, editing, publishing & marketing services trusted by 1000+ authors.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Authors Publishing Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authors Publishing Hub — Professional Book Publishing Services",
    description:
      "Transform your manuscript into a bestseller. Professional book writing, editing, publishing & marketing services.",
    images: ["/icon-512.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
