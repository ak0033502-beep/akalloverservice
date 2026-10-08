import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AkalloverServices | SaaS & AI Video Company",
  description: "AkalloverServices specializes in innovative SaaS products, cutting-edge AI video generation, and bespoke web solutions.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-purple-500/30">
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
