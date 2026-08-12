import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-card border-t border-brand-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Vision */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border border-brand-border bg-white flex items-center justify-center p-1">
                <Image
                  src="/eulim_logo.png"
                  alt="EULIM Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-brand-blue font-display">
                EULIM Science Club
              </span>
            </Link>
            <p className="text-sm text-brand-blue/70 max-w-sm leading-relaxed">
              Bridging the gap between academic depth and student innovation at the School of Sciences, CHRIST (Deemed to be University), Delhi NCR Campus.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/schoolofsciences_christ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-blue/70 hover:text-brand-cyan hover:border-brand-cyan bg-white transition-colors duration-200"
                aria-label="School of Sciences Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/eulimscienceclub_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-blue/70 hover:text-brand-cyan hover:border-brand-cyan bg-white transition-colors duration-200"
                aria-label="EULIM Science Club Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://ncr.christuniversity.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-blue/70 hover:text-brand-cyan hover:border-brand-cyan bg-white transition-colors duration-200"
                aria-label="CHRIST (Deemed to be University), Delhi NCR Campus Website"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-brand-blue/50">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-brand-blue/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-snug">
                  School of Sciences,
                  <br />
                  CHRIST (Deemed to be University), Delhi NCR Campus,
                  <br />
                  Mariam Nagar, Ghaziabad,
                  <br />
                  Delhi NCR - 201003
                </span>
              </li>
              {/* <li className="flex items-center gap-2.5 text-sm text-brand-blue/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand-cyan shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:scienceclub.ncr@christuniversity.in"
                  className="hover:text-brand-cyan transition-colors"
                >
                  scienceclub.ncr@christuniversity.in
                </a>
              </li> */}
            </ul>
          </div>

          {/* Institution Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-brand-blue/50">
              Department
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://ncr.christuniversity.in/school-of-sciences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue/80 hover:text-brand-cyan transition-colors"
                >
                  School of Sciences
                </a>
              </li>
              <li>
                <Link
                  href="/exhibition"
                  className="text-brand-blue/80 hover:text-brand-cyan transition-colors"
                >
                  Science Exhibition 2025
                </Link>
              </li>
              <li>
                <Link
                  href="/quest"
                  className="text-brand-blue/80 hover:text-brand-cyan transition-colors"
                >
                  Quantum Quest 2026
                </Link>
              </li>
              <li>
                <a
                  href="https://ncr.christuniversity.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue/80 hover:text-brand-cyan transition-colors"
                >
                  CHRIST (Deemed to be University), Delhi NCR Campus
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners & Legals Row */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-brand-blue/40 uppercase tracking-widest">
              Partners & Associations
            </span>
            <div className="flex items-center gap-4 filter grayscale opacity-40 hover:opacity-75 transition-opacity duration-300">
              {/* Partner Logo 1 Placeholder */}
              <div className="h-6 w-16 bg-brand-blue/10 rounded flex items-center justify-center text-[9px] font-bold text-brand-blue/60 tracking-wider">
                CHRIST
              </div>
              {/* Partner Logo 2 Placeholder */}
              <div className="h-6 w-16 bg-brand-blue/10 rounded flex items-center justify-center text-[9px] font-bold text-brand-blue/60 tracking-wider">
                EULIM
              </div>
            </div>
          </div>
          <p className="text-xs text-brand-blue/50">
            &copy; {currentYear} EULIM Science Club. All rights reserved. Managed by School of Sciences.
          </p>
        </div>
      </div>
    </footer>
  );
}
