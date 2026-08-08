"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Exhibition 2025", href: "/exhibition" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Branding */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-brand-border bg-white flex items-center justify-center p-1 transition-all duration-300 group-hover:border-brand-cyan">
                <Image
                  src="/eulim_logo.png"
                  alt="EULIM Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-brand-blue font-display">
                  EULIM
                </span>
                <span className="text-[10px] font-medium tracking-widest text-brand-cyan uppercase leading-none">
                  Science Club
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 py-2 relative ${
                    isActive
                      ? "text-brand-cyan"
                      : "text-brand-blue/70 hover:text-brand-cyan"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/exhibition#register"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-brand-cyan rounded-pill hover:bg-brand-cyan/90 transition-all duration-200 transform active:scale-95 shadow-sm hover:shadow-brand-cyan/20 group"
            >
              Register Now
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-blue hover:text-brand-cyan hover:bg-brand-card focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-border bg-white transition-all duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-brand-cyan bg-brand-card font-semibold"
                      : "text-brand-blue/80 hover:text-brand-cyan hover:bg-brand-card"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 pb-2 px-3 border-t border-brand-border mt-3">
              <Link
                href="/exhibition#register"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-brand-cyan rounded-pill hover:bg-brand-cyan/90 transition-colors"
              >
                Register Now
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
