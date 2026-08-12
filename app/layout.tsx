import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "EULIM Science Club | School of Sciences, CHRIST (Deemed to be University), Delhi NCR Campus",
  description: "Official portal of EULIM Science Club, School of Sciences at CHRIST (Deemed to be University), Delhi NCR Campus. Discover research, panel discussions, and our annual Science Exhibition.",
  keywords: "EULIM, Science Club, CHRIST University, Delhi NCR, School of Sciences, Science Exhibition 2025",
  authors: [{ name: "School of Sciences, CHRIST (Deemed to be University), Delhi NCR Campus" }],
};

interface LayoutProps<T> {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-blue font-sans selection:bg-brand-cyan/20 selection:text-brand-blue">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
