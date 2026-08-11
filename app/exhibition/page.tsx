"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { EulyMascot } from "@/components/euly-mascot";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronDown, 
  QrCode, 
  Download, 
  CheckCircle,
  HelpCircle,
  Sparkles,
  Info,
  Beaker,
  LineChart,
  Globe2,
  Rocket
} from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function ExhibitionPage() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const categories = [
    {
      title: "Discovery Constructs",
      icon: <Beaker className="w-8 h-8 text-brand-cyan" />,
      tag: "Category I",
      desc: "Investigating fundamental sciences and empirical studies. This track focuses on experimental physics, chemical interactions, material sciences, and empirical biological inquiries.",
      topics: ["Molecular Modeling", "Experimental Chemistry", "Classical & Quantum Physics Setups", "Environmental Science Studies"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-brand-cyan/20 stroke-current fill-none stroke-[1.5]">
          <path d="M40,20 H60 M50,20 V50 M30,80 H70 L55,50 V20 H45 V50 L30,80 Z" />
          <circle cx="50" cy="65" r="4" className="fill-brand-cyan/40" />
          <circle cx="45" cy="74" r="3" className="fill-brand-cyan/40" />
          <circle cx="58" cy="72" r="3.5" className="fill-brand-cyan/40" />
          <path d="M35,70 Q50,73 65,70" />
        </svg>
      )
    },
    {
      title: "Insight Showcase",
      icon: <LineChart className="w-8 h-8 text-brand-cyan" />,
      tag: "Category II",
      desc: "Decrypting complexity through computation, statistics, and mathematics. This track highlights predictive analytics, math formulations, algorithms, and software architectures.",
      topics: ["Statistical Modeling", "Predictive Analytics", "Computational Mathematics", "Neural Network Implementations"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-brand-cyan/20 stroke-current fill-none stroke-[1.5]">
          <rect x="15" y="15" width="70" height="70" rx="4" />
          <path d="M20,65 L35,50 L55,60 L80,30" />
          <circle cx="35" cy="50" r="3" className="fill-brand-cyan" />
          <circle cx="55" cy="60" r="3" className="fill-brand-cyan" />
          <circle cx="80" cy="30" r="3" className="fill-brand-cyan" />
          <line x1="20" y1="80" x2="80" y2="80" />
          <line x1="20" y1="20" x2="20" y2="80" />
        </svg>
      )
    },
    {
      title: "Visionary Concepts",
      icon: <Globe2 className="w-8 h-8 text-brand-cyan" />,
      tag: "Category III",
      desc: "Delving into theoretical models, high-level physics conjectures, and academic hypotheses that shape our future understanding of the cosmos and quantum domains.",
      topics: ["Quantum Computing Frameworks", "Theoretical Cosmology", "Mathematical Logic & Paradoxes", "Astrophysics Models"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-brand-cyan/20 stroke-current fill-none stroke-[1.5]">
          <circle cx="50" cy="50" r="30" />
          <ellipse cx="50" cy="50" rx="30" ry="10" transform="rotate(45 50 50)" />
          <ellipse cx="50" cy="50" rx="30" ry="10" transform="rotate(-45 50 50)" />
          <circle cx="50" cy="50" r="8" className="fill-brand-ochre/25 text-brand-ochre" />
        </svg>
      )
    },
    {
      title: "Future Ventures",
      icon: <Rocket className="w-8 h-8 text-brand-cyan" />,
      tag: "Category IV",
      desc: "Applying science to trigger change. This category focuses on engineering prototypes, ecological tech solutions, agricultural advancements, and student tech start-up pitches.",
      topics: ["Renewable Energy Prototypes", "IoT and Smart Hardware", "Eco-friendly Materials", "Commercialization Pitches"],
      svg: (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-brand-cyan/20 stroke-current fill-none stroke-[1.5]">
          <path d="M50,15 L70,45 H30 Z" />
          <rect x="42" y="45" width="16" height="25" />
          <path d="M35,60 L35,80 L50,70 L65,80 L65,60" />
          <circle cx="50" cy="32" r="3" className="fill-brand-cyan" />
        </svg>
      )
    }
  ];

  const guidelines: AccordionItem[] = [
    {
      id: "eligibility",
      title: "Who is eligible to participate?",
      content: (
        <p className="text-sm text-brand-blue/80 leading-relaxed">
          The exhibition is open to all undergraduate and postgraduate students enrolled in the School of Sciences and allied engineering streams at Christ (Deemed to be University), Delhi NCR Campus. Cross-departmental collaboration within teams is highly encouraged.
        </p>
      )
    },
    {
      id: "team-size",
      title: "What are the rules regarding team composition?",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-sm text-brand-blue/80">
          <li>Each team can have a minimum of 2 and a maximum of 4 members.</li>
          <li>Every team must register under one of the four specified categories.</li>
          <li>A student can be a member of only one participating team.</li>
          <li>Each team must nominate a Team Leader for coordinate updates.</li>
        </ul>
      )
    },
    {
      id: "submission-spec",
      title: "Submission specifications and timelines",
      content: (
        <div className="space-y-3 text-sm text-brand-blue/80">
          <p>
            Teams must submit a 1-page abstract (PDF format) describing their project hypothesis, experimental setup, and hardware requirements.
          </p>
          <div className="border-l-2 border-brand-ochre bg-brand-card p-3 rounded-r-md">
            <span className="font-semibold text-brand-ochre text-xs block mb-1">Important Deadline:</span>
            Abstract Submission closes on <span className="font-bold">September 15, 2025</span>. Late entries will not be accepted by the review committee.
          </div>
        </div>
      )
    },
    {
      id: "evaluation",
      title: "How will projects be evaluated?",
      content: (
        <p className="text-sm text-brand-blue/80 leading-relaxed">
          A panel of external judges from industry and academia will assess projects on four criteria: Scientific rigor & technical depth (30%), Practical implementation/conceptual clarity (30%), Innovation & originality (20%), and Presentation skill (20%).
        </p>
      )
    }
  ];

  const exhibitionPhotos = [
    { label: "Opening Ceremony", span: "md:col-span-2 md:row-span-2", img: "https://live.staticflickr.com/65535/54845014351_248207131a_c.jpg" },
    { label: "Student Projects", img: "https://live.staticflickr.com/65535/54844160522_02207994d2_b.jpg" },
    { label: "Exhibition Display", img: "https://live.staticflickr.com/65535/54845338505_000ca74e69_c.jpg" },
    { label: "Judging Panel", img: "https://live.staticflickr.com/65535/54844160122_dfd8448245_h.jpg" },
    { label: "Innovation Booth", img: "https://live.staticflickr.com/65535/54845271003_d029739670_b.jpg" },
    { label: "Award Ceremony", span: "md:col-span-2", img: "https://live.staticflickr.com/65535/54845260504_8cd7de79b0_b.jpg" },
    { label: "Team Photo", img: "https://live.staticflickr.com/65535/54845015236_55fd11234f_b.jpg" },
    { label: "Audience", img: "https://live.staticflickr.com/65535/54845339155_36bbdf3cfd_b.jpg" },
  ];

  const sponsors = [
    { name: "AM Industries", role: "Corporate Partner" },
    { name: "Wellvora Consultancy", role: "Community Partner" },
    { name: "91.9 Friends FM", role: "Radio Partner" },
    { name: "EK Industries", role: "Industry Partner" },
    { name: "MDKF", role: "Cultural & Creative Partners" },
  ];

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Dynamic Sub-Navbar - Apple Design style */}
      <div className="sticky top-16 z-40 w-full bg-brand-card/90 backdrop-blur-md border-b border-brand-border h-14 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-bold text-brand-blue">Science Exhibition 2025</span>
        <div className="flex items-center gap-4">
          <Link href="#categories" className="text-xs font-medium text-brand-blue/70 hover:text-brand-cyan transition-colors hidden sm:block">Categories</Link>
          <Link href="#gallery" className="text-xs font-medium text-brand-blue/70 hover:text-brand-cyan transition-colors hidden sm:block">Gallery</Link>
          <Link href="#guidelines" className="text-xs font-medium text-brand-blue/70 hover:text-brand-cyan transition-colors hidden sm:block">Guidelines</Link>
          <Link href="#register" className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-brand-cyan hover:bg-brand-cyan/95 rounded-pill transition-all active:scale-95">
            Register
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-hero-light pt-16 pb-20 md:py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Info and Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-ochre/30 bg-brand-card/80 text-brand-ochre text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Annual Flagship Event
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-blue tracking-tight leading-tight font-display">
                Showcasing the Next Wave of Scientific Discovery
              </h1>
              <p className="text-base sm:text-lg text-brand-blue/70 leading-relaxed max-w-2xl">
                The EULIM annual Science Exhibition brings together student ingenuity and academic research. We invite teams to submit experimental setups, analytics dashboards, and scientific prototypes.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="#register"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-cyan rounded-pill hover:bg-brand-cyan/95 transition-all duration-200 transform active:scale-95 shadow-sm shadow-brand-cyan/10"
                >
                  Register Team
                </Link>
                <Link
                  href="#guidelines"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-brand-blue bg-brand-card border border-brand-border rounded-pill hover:bg-brand-border transition-all duration-200 transform active:scale-95"
                >
                  View Guidelines
                </Link>
              </div>
            </div>

            {/* Column 2: Event Meta Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-card border border-brand-border p-8 rounded-lg shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full pointer-events-none" />
                <h3 className="text-lg font-bold text-brand-blue border-b border-brand-border pb-4">
                  Exhibition Schedule
                </h3>
                
                {/* COLOR FLARES on numbers & dates */}
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-white border border-brand-border flex items-center justify-center text-brand-ochre shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-blue/40 uppercase tracking-wider">Date</p>
                      <p className="text-sm font-extrabold text-brand-ochre font-display">09 October, 2025</p>
                      <p className="text-xs text-brand-blue/60">Thursday</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-white border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-blue/40 uppercase tracking-wider">Timing</p>
                      <p className="text-sm font-extrabold text-brand-cyan font-display">11:15 AM Onwards</p>
                      <p className="text-xs text-brand-blue/60">Inaugural Session</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-white border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-blue/40 uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-brand-blue">Synergy Square</p>
                      <p className="text-xs text-brand-blue/60">Christ University Delhi NCR Campus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section id="categories" className="py-20 md:py-24 border-b border-brand-border bg-brand-bg-muted scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">
              Core Segments
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Exhibition Categories
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              Teams can participate under one of the four categories. Select a category that aligns with your project goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div 
                key={cat.title} 
                className="bg-white border border-brand-border p-8 rounded-lg shadow-sm hover:border-brand-cyan/40 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start animate-fade-in"
              >
                <div className="shrink-0 flex items-center justify-center p-3 bg-brand-card border border-brand-border rounded-lg">
                  {cat.svg}
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest block mb-1">
                      {cat.tag}
                    </span>
                    <h3 className="text-lg font-bold text-brand-blue">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-blue/70 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-brand-blue/40 uppercase tracking-wider block mb-2">Focus Areas:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.topics.map((t) => (
                        <span key={t} className="text-[10px] font-medium text-brand-blue/80 bg-brand-card px-2.5 py-1 rounded border border-brand-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalyst Chronicles Gallery Section */}
      <section id="gallery" className="py-20 md:py-24 border-b border-brand-border bg-brand-card scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Expedition Archives</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Catalyst Chronicles
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              Snapshots of student displays, jury visits, and ceremonies from past science events.
            </p>
          </div>

          {/* Bento Gallery representation of past exhibition photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exhibitionPhotos.map((photo) => (
              <div 
                key={photo.label}
                className={`relative rounded-lg overflow-hidden border border-brand-border h-48 group shadow-sm ${
                  photo.span || ""
                }`}
              >
                <img 
                  src={photo.img} 
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/85 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block mb-0.5">Archive</span>
                    <h4 className="text-xs font-bold text-white tracking-wide">{photo.label}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsors Section */}
          <div className="border-t border-brand-border mt-16 pt-12">
            <h4 className="text-[10px] font-bold text-brand-blue/40 uppercase tracking-widest text-center mb-8">Collaborative Partners & Sponsors</h4>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {sponsors.map((sp) => (
                <div 
                  key={sp.name}
                  className="flex flex-col items-center gap-1 group cursor-default"
                >
                  <div className="px-5 py-2.5 border border-brand-border bg-brand-card rounded text-xs font-bold text-brand-blue/60 group-hover:border-brand-cyan/40 transition-colors">
                    {sp.name}
                  </div>
                  <span className="text-[9px] font-medium text-brand-cyan">{sp.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-20 md:py-24 border-b border-brand-border bg-brand-bg-muted scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 flex flex-col items-center">
            <EulyMascot pose="idea" size={70} className="mb-2 shrink-0" />
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">
              Official Regulations
            </h2>
            <p className="text-3xl font-extrabold text-brand-blue tracking-tight font-display">
              Exhibition Guidelines
            </p>
          </div>

          {/* Accordion Component */}
          <div className="border border-brand-border rounded-lg overflow-hidden divide-y divide-brand-border bg-white shadow-sm">
            {guidelines.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div key={item.id} className="bg-white">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex justify-between items-center p-5 text-left text-sm font-semibold text-brand-blue hover:text-brand-cyan transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 text-brand-blue/50 ${
                        isOpen ? "transform rotate-180 text-brand-cyan" : ""
                      }`} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 border-t border-brand-border-muted bg-brand-card/50">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 md:py-24 bg-brand-card scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-10 flex flex-col items-center">
            <EulyMascot pose="support" size={90} className="mb-2 shrink-0 animate-bounce" />
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
              Secure Your Slot
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Register for Exhibition 2025
            </p>
            <p className="text-sm text-brand-blue/70 max-w-xl mx-auto leading-relaxed">
              Complete your team registration by scanning the QR code below or downloading the registration form. Ensure your abstract is ready for review.
            </p>
          </div>

          <div className="bg-brand-card border border-brand-border p-8 rounded-lg max-w-sm mx-auto shadow-md flex flex-col items-center gap-6">
            {/* Styled SVG QR Code Placeholder */}
            <div className="relative w-48 h-48 bg-white border border-brand-border rounded-lg flex items-center justify-center p-4">
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue">
                {/* QR Outer boxes */}
                <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="10" y="10" width="15" height="15" fill="currentColor" opacity="0.1" />
                <rect x="12" y="12" width="11" height="11" fill="currentColor" />

                <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="75" y="10" width="15" height="15" fill="currentColor" opacity="0.1" />
                <rect x="77" y="12" width="11" height="11" fill="currentColor" />

                <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="10" y="75" width="15" height="15" fill="currentColor" opacity="0.1" />
                <rect x="12" y="77" width="11" height="11" fill="currentColor" />

                {/* QR Tiny pattern blocks */}
                <rect x="35" y="5" width="6" height="6" fill="currentColor" />
                <rect x="45" y="12" width="12" height="6" fill="currentColor" />
                <rect x="60" y="8" width="6" height="6" fill="currentColor" />
                <rect x="38" y="20" width="6" height="12" fill="currentColor" />

                <rect x="5" y="38" width="12" height="6" fill="currentColor" />
                <rect x="22" y="45" width="6" height="6" fill="currentColor" />
                <rect x="15" y="55" width="6" height="10" fill="currentColor" />

                <rect x="40" y="40" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="48" y="48" width="4" height="4" fill="currentColor" />

                <rect x="70" y="38" width="18" height="6" fill="currentColor" />
                <rect x="78" y="50" width="10" height="10" fill="currentColor" />
                <rect x="88" y="45" width="6" height="15" fill="currentColor" />

                <rect x="38" y="70" width="6" height="18" fill="currentColor" />
                <rect x="48" y="80" width="18" height="6" fill="currentColor" />
                <rect x="60" y="72" width="6" height="6" fill="currentColor" />

                <rect x="75" y="75" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="83" y="83" width="4" height="4" fill="currentColor" />
              </svg>
              {/* Central Logo Overlay */}
              <div className="absolute bg-white p-1 rounded-full border border-brand-border shadow">
                <QrCode className="w-5 h-5 text-brand-cyan" />
              </div>
            </div>

            <div className="text-center space-y-1">
              <span className="text-xs font-semibold text-brand-blue/50 uppercase tracking-widest">Portal Access</span>
              <p className="text-sm font-bold text-brand-blue">Scan to Register Team</p>
              <p className="text-xs text-brand-blue/60">Processes registrations & abstracts</p>
            </div>

            <div className="w-full pt-2 border-t border-brand-border flex gap-3">
              <a
                href="#download-form"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Downloading registration form template (PDF)...");
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-brand-blue bg-white hover:bg-brand-card border border-brand-border rounded-md transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                Download Form
              </a>
              <button
                onClick={() => {
                  alert("Link copied! Share it with your teammates.");
                }}
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-brand-cyan hover:bg-brand-cyan/95 rounded-md transition-all active:scale-95"
              >
                Share Link
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-brand-blue/60 border-t border-brand-border max-w-xl mx-auto pt-8">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              Direct Approval from Faculty
            </span>
            <span className="hidden sm:inline text-brand-blue/20">•</span>
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-brand-cyan" />
              Evaluation by External Judges
            </span>
            <span className="hidden sm:inline text-brand-blue/20">•</span>
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-brand-cyan" />
              Certificate of Presentation
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
