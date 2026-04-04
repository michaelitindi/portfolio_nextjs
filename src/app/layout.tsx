import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Michael Itindi | Systems Architect & Full-Stack Developer",
  description: "Building the Operating System for Your Business. Specialized in ERP, SaaS, and Business Automation in Nairobi, Kenya.",
  keywords: ["Web Developer Nairobi", "ERP Developer Kenya", "SaaS Developer", "Business Automation Kenya", "Custom Software Nairobi"],
  authors: [{ name: "Michael Itindi" }],
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "WgqsLwL-xNJ66SgGgFnfUmnF1rJ4MaAZI2Tu1oP9D-Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
