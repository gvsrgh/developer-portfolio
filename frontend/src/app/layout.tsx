import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { generateSEO } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased">
        <Header />
        <main className="flex-1">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
