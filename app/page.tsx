"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ParticleCanvas } from "@/components/particle-canvas";
import { EulyMascot } from "@/components/euly-mascot";
import { 
  Atom, 
  Lightbulb, 
  Users, 
  MessageSquareCode, 
  ChevronRight, 
  Calendar, 
  ArrowRight,
  Sparkles,
  Clock,
  MapPin,
  CheckCircle,
  Award,
  BookOpen,
  Globe,
  Star,
  Crown,
  Shield,
  Send,
  AlertCircle,
  ChevronLeft,
  Info
} from "lucide-react";

export default function Home() {
  // Ticker Banner State
  const [currentHeadlineIdx, setCurrentHeadlineIdx] = useState(0);
  const headlines = [
    "📢 EULIM Science Exhibition 2025 returns on October 9 at Synergy Square! Abstracts close Sept 15.",
    "🏆 Quantum Quest 2026 registration is active. Prepare your team for the Enigma Expedition!",
    "💡 Did you know? EULIM stands for Euler, Limits, and Infinite Matrices!",
    "🔬 Light takes 8 minutes and 19 seconds to travel from the Sun to the Earth.",
    "🧬 Absolute zero is -273.15 degrees Celsius. All molecular motion stops!",
    "🌌 Quantum superposition means a particle can be in two states at once!",
    "📐 Mathematics is the language in which God has written the universe.",
    "💼 Collaborative panels confirmed: AM Industries & Wellvora confirm panel participation at Synergy Square."
  ];

  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselSlides = [
    {
      img: "https://live.staticflickr.com/65535/54845014351_248207131a_c.jpg",
      title: "Opening Ceremony",
      tag: "Exhibition 2025",
      desc: "Faculty and student delegates inaugurating the flagship science pavilion."
    },
    {
      img: "https://live.staticflickr.com/65535/54844160522_02207994d2_b.jpg",
      title: "Discovery Constructs",
      tag: "Physics & Chemistry Labs",
      desc: "Students demonstrating electromagnetic orbits and chemical formulas."
    },
    {
      img: "https://live.staticflickr.com/65535/54845338505_000ca74e69_c.jpg",
      title: "Jury Assessment",
      tag: "Insight Showcase",
      desc: "Jury panels reviewing quantitative data and mathematical modeling research."
    },
    {
      img: "https://live.staticflickr.com/65535/55145781247_06376c09bd_c.jpg",
      title: "The Quest Begins",
      tag: "Enigma Expedition",
      desc: "Treasure hunters decoding physics-inspired clues across campuses."
    },
    {
      img: "https://live.staticflickr.com/65535/55146839093_fb82993af7_c.jpg",
      title: "The Final Showdown",
      tag: "Quantum Quest",
      desc: "Participants completing the smart hardware puzzles to unlock the portal."
    }
  ];

  useEffect(() => {
    // 10s Ticker Interval
    const bannerTimer = setInterval(() => {
      setCurrentHeadlineIdx(prev => (prev + 1) % headlines.length);
    }, 10000);

    // 6s Carousel Auto-advance
    const carouselTimer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % carouselSlides.length);
    }, 6000);

    return () => {
      clearInterval(bannerTimer);
      clearInterval(carouselTimer);
    };
  }, [headlines.length, carouselSlides.length]);

  const triggerToast = (title: string, desc: string) => {
    // Left empty since toast is removed
  };

  const universityHighlights = [
    { stat: "2019", title: "Club Founded", desc: "Established at the School of Sciences, Delhi NCR to foster student-led scientific inquiry.", color: "text-brand-ochre" },
    { stat: "500+", title: "Active Members", desc: "A vibrant network of students from Mathematics, Physics, Statistics, and Computer Science.", color: "text-brand-cyan" },
    { stat: "15+", title: "Annual Events", desc: "From technical panel debates to high-stakes treasure hunts like the Enigma Expedition.", color: "text-brand-cyan" },
    { stat: "A+", title: "Academic Synergy", desc: "Mentored by expert faculty to bridge theoretical curricula with active research models.", color: "text-brand-ochre" },
  ];

  const campuses = [
    { name: "Delhi NCR Campus", desc: "The official headquarters of EULIM Science Club, hosting flagship events at Synergy Square.", code: "DELHI NCR (HQ)" },
    { name: "Bangalore Central Campus", desc: "Main university seat supporting cross-campus scientific research initiatives.", code: "CENTRAL" },
    { name: "Bangalore Kengeri Campus", desc: "Collaborating on engineering, hardware design, and robotics integrations.", code: "KENGERI" },
    { name: "Pune Lavasa Campus", desc: "Academic partner for statistics, big data analytics, and computational modeling.", code: "LAVASA" },
  ];

  const milestones = [
    { year: "2019", title: "Club Founded", desc: "EULIM Science Club was established under the School of Sciences at CHRIST, Delhi NCR Campus." },
    { year: "2020", title: "Virtual Horizon", desc: "Adapted to online seminars, expert panel talks, and debates on modern research during the pandemic." },
    { year: "2021", title: "Peer Programs", desc: "Expanded membership and introduced the Journal Club and Mentorship Program for collective learning." },
    { year: "2022", title: "Inaugural Exhibition", desc: "Launched the first physical Science Exhibition, establishing Discovery Constructs and Insight Showcase." },
    { year: "2023", title: "Industry Ties", desc: "Initiated corporate guest lectures and corporate tie-ups, bringing industry mentors into student labs." },
    { year: "2024", title: "National Acclaim", desc: "Club delegates presented research papers at national forums and won top ranks in science olympiads." },
    { year: "2025", title: "The Synergy Return", desc: "The flagship Science Exhibition returns with expanded tracks at Synergy Square, launching 2026 pre-events." },
  ];

  const studentTeam = [
    { name: "Shayan Azmi", role: "Architect of Inquiry", tag: "Leader", icon: Crown },
    { name: "Aryan S. Nair", role: "Catalyst Prime", tag: "Co-Leader", icon: Shield },
    { name: "Aryan Manna", role: "The Founding Nucleus", tag: "Ex-Leader | Mentor", icon: Star },
    { name: "Prashant Parwani", role: "The Guiding Proton", tag: "Ex Co-Leader | Mentor", icon: Star },
    { name: "Aryan Garg", role: "Signal Amplifier", tag: "PR & Sponsorship Head", icon: Sparkles },
    { name: "MD. Saif", role: "Field Orchestrator", tag: "Hospitality Head", icon: Sparkles },
  ];




  const handlePrevSlide = () => {
    setActiveSlide(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide(prev => (prev + 1) % carouselSlides.length);
  };

  return (
    <div className="relative min-h-screen bg-brand-bg">
      
      {/* HEADLINE NEWS TICKER BANNER (Scrolls every 10 seconds) */}
      <div className="w-full bg-gradient-to-r from-brand-cyan/15 via-brand-cyan/25 to-brand-cyan/15 border-b border-brand-border py-3 flex items-center overflow-hidden transition-all duration-300 relative shadow-sm select-none">
        <div className="max-w-5xl mx-auto px-4 w-full flex justify-center text-center">
          <div className="relative h-12 sm:h-6 w-full overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentHeadlineIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute text-[10px] sm:text-xs md:text-sm font-extrabold text-brand-blue tracking-wide w-full text-center flex items-center justify-center gap-2 px-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-ochre fill-brand-ochre/30 animate-pulse shrink-0 hidden sm:block" />
                <span>{headlines[currentHeadlineIdx]}</span>
                <Sparkles className="w-3.5 h-3.5 text-brand-ochre fill-brand-ochre/30 animate-pulse shrink-0 hidden sm:block" />
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SECTION 1: SPLIT HERO */}
      <section className="relative flex flex-col items-center justify-center pt-16 pb-20 md:pt-20 md:pb-24 border-b border-brand-border overflow-hidden min-h-[85vh] bg-hero-light">
        <ParticleCanvas />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Buttons */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              
              <div className="flex items-center gap-3">
                <EulyMascot pose="wave" size={60} className="shrink-0 animate-bounce" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-card/50 text-brand-cyan text-xs font-semibold uppercase tracking-wider"
                >
                  <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
                  School of Sciences • Christ University
                </motion.div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tight leading-[1.1] font-display"
              >
                Igniting Scientific Curiosity.
                <br />
                <span className="text-brand-cyan bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                  Bridging Theory & Innovation.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-brand-blue/70 max-w-xl leading-relaxed font-normal"
              >
                Welcome to EULIM Science Club. We cultivate scientific temper, empower students to translate foundational knowledge into research, and connect academia with industry horizons.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  href="#about-club"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-cyan hover:bg-brand-cyan/95 rounded-pill transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-md shadow-brand-cyan/10"
                >
                  Explore the Club
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <Link
                  href="/exhibition"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-brand-blue hover:text-brand-cyan border border-brand-border bg-brand-card/50 hover:bg-brand-card rounded-pill transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Exhibition 2025 Hub
                </Link>
              </motion.div>

            </div>

            {/* Right Column: Carousel Frame */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xl border border-brand-border bg-white p-2 rounded-2xl shadow-md overflow-hidden group hover:border-brand-cyan/20 transition-all duration-300"
              >
                {/* Carousel Inner frame */}
                <div className="relative h-64 sm:h-96 w-full bg-brand-card rounded-xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={carouselSlides[activeSlide].img}
                        alt={carouselSlides[activeSlide].title}
                        className="w-full h-full object-cover"
                      />
                      {/* Glassmorphism details block */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/35 to-transparent flex items-end p-5 sm:p-7 text-left">
                        <div className="space-y-1.5 max-w-md">
                          <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/20 border border-brand-cyan/35 px-2 py-0.5 rounded-full">
                            {carouselSlides[activeSlide].tag}
                          </span>
                          <h3 className="text-lg font-bold text-white font-display">
                            {carouselSlides[activeSlide].title}
                          </h3>
                          <p className="text-xs text-white/80 leading-relaxed">
                            {carouselSlides[activeSlide].desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 border border-brand-border flex items-center justify-center text-brand-blue hover:text-brand-cyan hover:bg-white transform active:scale-95 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 border border-brand-border flex items-center justify-center text-brand-blue hover:text-brand-cyan hover:bg-white transform active:scale-95 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-5 right-6 flex gap-1 z-20">
                  {carouselSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeSlide ? "w-4 bg-brand-cyan" : "w-1.5 bg-white/45"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: EULIM LABS & EXHIBITIONS GALLERY */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Science in Action</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              EULIM in Focus
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              Explore the hands-on research tracks, experimental labs, and collaborative hubs forming the core of EULIM activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Discovery Constructs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden border border-brand-border bg-brand-card p-3 shadow-sm hover:shadow-md hover:border-brand-cyan/20 transition-all duration-300 flex flex-col h-full hover:scale-[1.02] active:scale-[0.99]"
            >
              <div className="relative h-56 w-full rounded-xl overflow-hidden bg-brand-border">
                <img 
                  src="https://live.staticflickr.com/65535/54844160522_02207994d2_b.jpg" 
                  alt="Discovery Constructs Physics & Chemistry Labs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold text-white uppercase tracking-widest bg-brand-cyan/80 px-2.5 py-0.5 rounded-full">
                  Physics & Chemistry Labs
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                    Discovery Constructs
                  </h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed">
                    Visualizing molecular structures and physical laws. Students formulate equations and demonstrate orbital dynamics using physical setups.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border-muted flex items-center text-[10px] font-bold text-brand-cyan uppercase tracking-wider">
                  <span>Active Lab Track</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Insight Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden border border-brand-border bg-brand-card p-3 shadow-sm hover:shadow-md hover:border-brand-cyan/20 transition-all duration-300 flex flex-col h-full hover:scale-[1.02] active:scale-[0.99]"
            >
              <div className="relative h-56 w-full rounded-xl overflow-hidden bg-brand-border">
                <img 
                  src="https://live.staticflickr.com/65535/54845338505_000ca74e69_c.jpg" 
                  alt="Insight Showcase Quantitative Data"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold text-white uppercase tracking-widest bg-brand-ochre/80 px-2.5 py-0.5 rounded-full">
                  Computational Math
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                    Insight Showcase
                  </h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed">
                    Bridging mathematics and experimental data. Featuring research displays, computational modeling projects, and statistical graph analysis.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border-muted flex items-center text-[10px] font-bold text-brand-ochre uppercase tracking-wider">
                  <span>Exhibition Track</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: The Quantum Quest */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden border border-brand-border bg-brand-card p-3 shadow-sm hover:shadow-md hover:border-brand-cyan/20 transition-all duration-300 flex flex-col h-full md:col-span-2 lg:col-span-1 hover:scale-[1.02] active:scale-[0.99]"
            >
              <div className="relative h-56 w-full rounded-xl overflow-hidden bg-brand-border">
                <img 
                  src="https://live.staticflickr.com/65535/55146839093_fb82993af7_c.jpg" 
                  alt="The Quantum Quest Campus Hunt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold text-white uppercase tracking-widest bg-purple-600/80 px-2.5 py-0.5 rounded-full">
                  Interactive Expedition
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                    Quantum Quest Hub
                  </h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed">
                    Decoding clues and engineering smart hardware portals during the annual campus hunt. Fusing logical riddles with physics challenges.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border-muted flex items-center text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                  <span>Interactive Event</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 3: UNIVERSITY PORTFOLIO */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Our Foundation</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              EULIM at Christ University
            </p>
            <p className="mt-4 text-sm text-brand-blue/70 leading-relaxed max-w-2xl mx-auto">
              Fostering scientific discipline, collaborative research, and academic rigor under the School of Sciences.
            </p>
          </motion.div>

          {/* Vercel-style Grids for Vision and Journey */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white border border-brand-border p-8 rounded-lg shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan"></span>
                The Vision
              </h3>
              <p className="text-xs text-brand-blue/80 leading-relaxed">
                Guided by the university's focus on educational excellence, the EULIM Science Club empowers students to explore deep mathematics, physics structures, statistics, and computational analytics to solve complex real-world challenges.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white border border-brand-border p-8 rounded-lg shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-ochre"></span>
                The Journey
              </h3>
              <p className="text-xs text-brand-blue/80 leading-relaxed">
                Since its founding under the School of Sciences at the Delhi NCR campus, EULIM has evolved into a powerhouse of student research. We organize national olympiads, the Journal Club, expert panels, and our annual flagship Science Exhibition.
              </p>
            </motion.div>
          </div>

          {/* COLOR FLARES: Big numbers in Solar Ochre / Cyan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {universityHighlights.map((feat, idx) => (
              <motion.div 
                key={feat.title} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-white border border-brand-border p-6 rounded-lg shadow-sm hover:border-brand-cyan/20 hover:scale-[1.03] transition-all duration-300"
              >
                <span className={`text-3xl font-extrabold block mb-2 font-display ${feat.color}`}>
                  {feat.stat}
                </span>
                <h4 className="text-sm font-bold text-brand-blue mb-1">{feat.title}</h4>
                <p className="text-xs text-brand-blue/60 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Campuses Bento Grid */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-brand-blue tracking-tight text-center">Our Campuses</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {campuses.map((campus, i) => {
                const isNcr = campus.code.includes("DELHI NCR");
                return (
                  <motion.div 
                    key={campus.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: "easeOut" }}
                    className={`bg-white border border-brand-border rounded-lg p-5 flex flex-col justify-between hover:border-brand-cyan/30 hover:scale-[1.02] shadow-sm hover:shadow-md transition-all duration-300 ${
                      isNcr ? "lg:col-span-2 lg:row-span-2 border-brand-cyan bg-brand-card/40" : "lg:col-span-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">{campus.code}</span>
                      <h4 className="text-sm font-bold text-brand-blue leading-snug">{campus.name}</h4>
                      <p className="text-xs text-brand-blue/60 leading-relaxed">{campus.desc}</p>
                    </div>
                    {isNcr && (
                      <div className="mt-4 pt-3 border-t border-brand-border-muted flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-brand-ochre bg-brand-ochre/10 px-2 py-0.5 rounded">Host Campus</span>
                        <span className="text-[10px] text-brand-blue/50">Ghaziabad, UP</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE EULIM SCIENCE CLUB ABOUT */}
      <section id="about-club" className="py-20 md:py-24 border-b border-brand-border bg-brand-card scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Frame left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-72 h-72 border border-brand-border bg-brand-card rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:border-brand-cyan/40 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
                <EulyMascot pose="idea" size={120} className="mb-4" />
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">EULIM Hub</span>
                <span className="text-xs text-brand-blue/60 max-w-[200px]">Center of intellectual curiosity & discovery</span>
              </div>
            </motion.div>

            {/* Description content right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase block">Inside the Hub</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
                  The EULIM Science Club
                </h2>
              </div>
              
              <div className="space-y-4 text-sm text-brand-blue/70 leading-relaxed font-normal">
                <p>
                  The EULIM Science Club, representing the School of Sciences at CHRIST, Delhi NCR, is a vibrant hub for student research and interdisciplinary exploration.
                </p>
                <p>
                  From national hackathons to expert panel discussions, EULIM bridges the gap between classrooms and industry frameworks, inspiring students to turn abstract formulas into working solutions.
                </p>
                <p>
                  Our flagship Science Exhibition and Journal Clubs provide peer mentorship, helping members build research papers, projects, and collaborative ties.
                </p>
              </div>

              <div className="border-l-4 border-brand-cyan pl-4 py-1 italic text-brand-blue font-medium text-sm">
                &ldquo;EULIM Science Club is not just about learning, it&apos;s about creating a vibrant culture of scientific inquiry, collaboration, and innovation.&rdquo;
              </div>
            </motion.div>
          </div>

          {/* Vercel-style clean grids for general pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-brand-border rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-brand-border shadow-sm mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-white hover:bg-brand-card/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-cyan mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">Intellectual Curiosity</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Encouraging students to look beyond standard textbooks. We host debates on theoretical breakthroughs, experimental techniques, and mathematical formulation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-white hover:bg-brand-card/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-cyan mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">Academia-Industry Bridge</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Connecting abstract academic concepts to real-world industrial tasks. Showing how computation, physical sciences, and modeling resolve market needs.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 bg-white hover:bg-brand-card/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-cyan mb-6">
                <MessageSquareCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">Panel Discussions</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Conducting talks, guest seminars, and debates with faculty coordinators to evaluate emerging scientific principles and computational models.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CLUB MILESTONES TIMELINE */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Our Timeline</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Club Milestones & Journey
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              From a small student-led initiative to the epicenter of science innovation at CHRIST Delhi NCR.
            </p>
          </motion.div>

          {/* Interactive vertical timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Center line (on desktop) */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-brand-border sm:-translate-x-0.5" />

            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                  className={`relative mb-12 sm:flex sm:justify-between items-start pl-10 sm:pl-0 ${
                    isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-4 sm:left-1/2 w-4 h-4 rounded-full border-4 border-white -translate-x-2 sm:-translate-x-2 mt-1 z-10 shadow-sm ${
                      isEven ? "bg-brand-cyan" : "bg-brand-ochre"
                    }`} 
                  />

                  {/* Spacer or empty side */}
                  <div className="hidden sm:block w-[45%]" />

                  {/* Content block */}
                  <div className="w-full sm:w-[45%] bg-brand-card border border-brand-border p-6 rounded-lg shadow-sm hover:shadow-md hover:border-brand-cyan/20 hover:scale-[1.03] transition-all duration-300">
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider block mb-1">{milestone.year}</span>
                    <h3 className="text-base font-bold text-brand-blue mb-2">{milestone.title}</h3>
                    <p className="text-xs text-brand-blue/70 leading-relaxed">{milestone.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE EVENT: ENIGMA EXPEDITION TEASER */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-red-900/40 bg-[#0e0d0f] p-8 sm:p-12 text-center shadow-xl shadow-red-950/20"
          >
            {/* Background Spooky Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-900/10 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-red-900/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-900 bg-red-950/40 text-red-400 text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-red-400 animate-pulse" />
                Featured Sub-Event Archive
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
                The <span className="text-red-500">Enigma</span> Expedition
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Step back into our Stranger Things-themed interactive treasure hunt archives. Review the mathematical locks, physics coordinates, and hardware ciphers that tested our student codebreakers.
              </p>

              <div className="pt-2">
                <Link
                  href="/quest"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-md transition-all hover:scale-105 active:scale-95 shadow-md shadow-red-900/20 border border-red-500/20"
                >
                  Explore the Archives
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 6: LEADERSHIP & FACULTY */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Faculty Mentorship</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Leadership Guiding Our Mission
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              Meet the faculty directors and coordinators driving science engagement at Christ University NCR.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faculty.slice(0, 3).map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="bg-brand-card border border-brand-border p-6 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm tracking-wide shrink-0">
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-brand-blue leading-tight">{member.name}</h3>
                        <p className="text-xs text-brand-cyan font-semibold">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-blue/80 italic leading-relaxed pt-2">
                      &ldquo;{member.msg}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-border-muted">
                    <p className="text-xs text-brand-blue/50 font-medium">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faculty.slice(3, 5).map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="bg-brand-card border border-brand-border p-6 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm tracking-wide shrink-0">
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-brand-blue leading-tight">{member.name}</h3>
                        <p className="text-xs text-brand-cyan font-semibold">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-blue/80 italic leading-relaxed pt-2">
                      &ldquo;{member.msg}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-border-muted">
                    <p className="text-xs text-brand-blue/50 font-medium">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MEET THE CATALYSTS (STUDENT TEAM) */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">The Neural Network</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Meet the Catalysts
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              The student organizers and leaders coordinating club activities and academic partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {studentTeam.map((member, i) => {
              const IconComp = member.icon;
              return (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
                  className="bg-brand-card border border-brand-border p-6 rounded-lg shadow-sm hover:border-brand-cyan/40 hover:scale-[1.03] transition-all duration-300 text-center flex flex-col items-center group animate-fade-in"
                >
                  {/* Styled avatar box */}
                  <div className="mb-4 w-20 h-20 rounded-full border-2 border-brand-border bg-white flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan/40 transition-colors relative overflow-hidden">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-brand-blue mb-1 flex items-center gap-1.5 justify-center">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wide">{member.role}</p>
                  <span className="mt-3 text-[10px] font-bold text-brand-ochre bg-brand-ochre/10 px-2 py-0.5 rounded">
                    {member.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Floating Action Button (FAB) for Exhibition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 pointer-events-auto"
      >
        <Link 
          href="/exhibition"
          className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-xl hover:shadow-2xl border border-brand-cyan/20 group hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {/* Subtle Outer Pulsing Ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue opacity-50 group-hover:opacity-75 blur-sm animate-pulse z-0 pointer-events-none" />
          
          <Sparkles className="w-4 h-4 text-white relative z-10 animate-spin" style={{ animationDuration: "10s" }} />
          <span className="text-xs font-bold uppercase tracking-wider relative z-10">Exhibition 2025</span>
          <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
        </Link>
      </motion.div>

    </div>
  );

}

// Faculty message constant used in page
const faculty = [
  {
    name: "Dr. Fr. Peter M.V.",
    title: "Director, Christ University Delhi NCR",
    msg: "Scientific temper is the foundation of character. EULIM serves as a beacon, guiding students toward holistic innovation and a search for truth through experimental investigation.",
    initials: "FP",
    role: "Director"
  },
  {
    name: "Dr. Jeanne Poulose",
    title: "Dean, School of Sciences",
    msg: "Our mission is to foster scientific dialogue that transcends classrooms. EULIM encourages a rigorous, inquiry-based approach to address real-world global challenges.",
    initials: "JP",
    role: "Dean"
  },
  {
    name: "Dr. Bosco Paul Alapatt",
    title: "Head, Department of Sciences",
    msg: "By encouraging collaborations between departments, the EULIM Science Club builds critical thinkers who apply mathematical, statistical, and computer sciences to expand human knowledge.",
    initials: "BA",
    role: "HoD"
  },
  {
    name: "Prof. Vandana Mehndiratta",
    title: "Faculty Coordinator, EULIM",
    msg: "We support students in translating classroom concepts into working models, helping them bridge academic theory with industry execution.",
    initials: "VM",
    role: "Coordinator"
  },
  {
    name: "Prof. Amrit Kaur Saggu",
    title: "Faculty Coordinator, EULIM",
    msg: "EULIM provides a launchpad for student-led research and peer learning. Seeing our students collaborate on the annual exhibition is incredibly rewarding.",
    initials: "AS",
    role: "Coordinator"
  }
];
