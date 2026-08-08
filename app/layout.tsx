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
  title: "EULIM Science Club | School of Sciences, Christ (Deemed to be University)",
  description: "Official portal of EULIM Science Club, School of Sciences at Christ University Delhi NCR Campus. Discover research, panel discussions, and our annual Science Exhibition.",
  keywords: "EULIM, Science Club, Christ University, Delhi NCR, School of Sciences, Science Exhibition 2025",
  authors: [{ name: "School of Sciences, Christ University" }],
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
      <body className="min-h-full flex flex-col bg-white text-brand-blue font-sans selection:bg-brand-cyan/20 selection:text-brand-blue">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
