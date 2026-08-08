"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  AlertCircle
} from "lucide-react";

export default function Home() {
  const [toast, setToast] = useState<{ title: string; desc: string } | null>(null);
  const [sponsorForm, setSponsorForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    sponsorshipTier: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerToast = (title: string, desc: string) => {
    setToast({ title, desc });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sponsorForm.companyName.trim() || !sponsorForm.contactPerson.trim() || !sponsorForm.email.trim()) {
      triggerToast("Missing Fields", "Please fill in all required fields marked with *");
      return;
    }
    if (!sponsorForm.email.includes("@")) {
      triggerToast("Invalid Email", "Please enter a valid email address.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      triggerToast("Proposal Received! 🤝", "Our team will reach out to you within 48 hours.");
      setSponsorForm({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        website: "",
        sponsorshipTier: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const selectTier = (tierName: string) => {
    setSponsorForm(prev => ({ ...prev, sponsorshipTier: tierName }));
  };

  const universityHighlights = [
    { stat: "1969", title: "Founded in 1969", desc: "Established as Christ College, pioneering academic discipline and student-centric education.", color: "text-brand-ochre" },
    { stat: "A+", title: "NAAC A+ Grade", desc: "Re-accredited with the highest grade, reflecting academic rigor and modern research facilities.", color: "text-brand-cyan" },
    { stat: "40k+", title: "40,000+ Students", desc: "A diverse multicultural community representing 60+ countries across multiple campuses.", color: "text-brand-cyan" },
    { stat: "2008", title: "Deemed University", desc: "Conferred University status by MHRD, Government of India for holistic educational excellence.", color: "text-brand-ochre" },
  ];

  const campuses = [
    { name: "Bangalore Central Campus", desc: "The main academic block", code: "CENTRAL" },
    { name: "Bangalore Bannerghatta Campus", desc: "Focusing on humanities & business Studies", code: "BGR" },
    { name: "Bangalore Kengeri Campus", desc: "Engineering & architecture wing", code: "KENGERI" },
    { name: "Bangalore Yeshwanthpur Campus", desc: "Modern multi-disciplinary block", code: "YPR" },
    { name: "Pune Lavasa Campus", desc: "Hub for analytics & IT programs", code: "LAVASA" },
    { name: "Delhi NCR Campus", desc: "The epicenter of science research", code: "DELHI NCR", img: "https://ncr.christuniversity.in/images/history1.png" },
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

  const quantumPhotos = [
    { label: "The Quest Begins", span: "md:col-span-2 md:row-span-2", img: "https://live.staticflickr.com/65535/55145781247_06376c09bd_c.jpg" },
    { label: "Clue Decoding", img: "https://live.staticflickr.com/65535/55147056710_a993cfcbb4_c.jpg" },
    { label: "Team Strategy", img: "https://live.staticflickr.com/65535/55147056725_2190a938bf_c.jpg" },
    { label: "Campus Hunt", img: "https://live.staticflickr.com/65535/55146679186_13aa653df9_b.jpg" },
    { label: "Challenge Station", img: "https://live.staticflickr.com/65535/55145781307_da2e331f9a_c.jpg" },
    { label: "Final Showdown", span: "md:col-span-2", img: "https://live.staticflickr.com/65535/55146839093_fb82993af7_c.jpg" },
    { label: "Victory Moment", img: "https://live.staticflickr.com/65535/55146839068_de2414eeed_b.jpg" },
    { label: "Group Photo", img: "https://live.staticflickr.com/65535/55147056770_f5e35dd8d8_b.jpg" },
  ];

  const sponsorTiers = [
    { name: "Platinum Catalyst", perk: "Prominent logo placement on website & display boards, stage mentions, exclusive exhibition booth, social media spotlights.", icon: "⚗️" },
    { name: "Gold Reactor", perk: "Logo on all official banners, social media feature, booth space in Synergy Square, certificate acknowledgement.", icon: "🔬" },
    { name: "Silver Element", perk: "Logo on website footer, digital certificates, and collective social media sponsor acknowledgement.", icon: "🧪" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative flex flex-col items-center justify-center pt-28 pb-20 md:pt-36 md:pb-28 border-b border-brand-border overflow-hidden min-h-[85vh]">
        <ParticleCanvas />

        <div className="max-w-4xl mx-auto px-4 text-center z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <EulyMascot pose="wave" size={70} className="hidden sm:flex shrink-0 animate-bounce" />
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
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tight leading-[1.1] mb-6 font-display"
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
            className="text-base sm:text-lg md:text-xl text-brand-blue/70 max-w-2xl mb-10 leading-relaxed font-normal"
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
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-cyan hover:bg-brand-cyan/95 rounded-pill transition-all duration-200 transform active:scale-95 shadow-md shadow-brand-cyan/10"
            >
              Explore the Club
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/exhibition"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-brand-blue hover:text-brand-cyan border border-brand-border bg-brand-card/50 hover:bg-brand-card rounded-pill transition-all duration-200 transform active:scale-95"
            >
              Exhibition 2025 Hub
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: UNIVERSITY PORTFOLIO */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Our Foundation</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              CHRIST (Deemed to be University)
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              Rooted in educational excellence and service, guiding research across campuses.
            </p>
          </div>

          {/* Vercel-style Grids for Vision and Journey */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-brand-border p-8 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan"></span>
                The Vision
              </h3>
              <p className="text-sm text-brand-blue/80 leading-relaxed">
                Born out of the educational vision of <strong className="text-brand-blue">St Kuriakose Elias Chavara</strong>, an educationalist and social reformer of the nineteenth century in South India. He founded the first Catholic indigenous congregation, <strong className="text-brand-blue">Carmelites of Mary Immaculate (CMI)</strong>, in 1831 which administers CHRIST.
              </p>
            </div>
            
            <div className="bg-white border border-brand-border p-8 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-brand-blue mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-ochre"></span>
                The Journey
              </h3>
              <p className="text-sm text-brand-blue/80 leading-relaxed">
                Established as &apos;Christ College&apos; in 1969, it undertook path-breaking initiatives in Indian higher education. Conferred Autonomy in 2004 and Deemed to be University status in 2008. Currently accredited with NAAC <span className="font-bold text-brand-cyan">A+ Grade</span> and ranked among India&apos;s leading institutions.
              </p>
            </div>
          </div>

          {/* COLOR FLARES: Big numbers in Solar Ochre / Cyan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {universityHighlights.map((feat) => (
              <div key={feat.title} className="bg-white border border-brand-border p-6 rounded-lg shadow-sm hover:border-brand-cyan/20 transition-all duration-300">
                <span className={`text-3xl font-extrabold block mb-2 font-display ${feat.color}`}>
                  {feat.stat}
                </span>
                <h4 className="text-sm font-bold text-brand-blue mb-1">{feat.title}</h4>
                <p className="text-xs text-brand-blue/60 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Campuses Bento Grid */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-brand-blue tracking-tight text-center">Our Campuses</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {campuses.map((campus, i) => {
                const isNcr = campus.code === "DELHI NCR";
                return (
                  <div 
                    key={campus.name}
                    className={`bg-white border border-brand-border rounded-lg p-5 flex flex-col justify-between hover:border-brand-cyan/30 transition-all duration-300 ${
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
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE EULIM SCIENCE CLUB ABOUT */}
      <section id="about-club" className="py-20 md:py-24 border-b border-brand-border bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Frame left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 border border-brand-border bg-brand-card rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:border-brand-cyan/40 transition-colors shadow-sm">
                <EulyMascot pose="idea" size={120} className="mb-4" />
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">EULIM Hub</span>
                <span className="text-xs text-brand-blue/60 max-w-[200px]">Center of intellectual curiosity & discovery</span>
              </div>
            </div>

            {/* Description content right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase block">Inside the Hub</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
                  The EULIM Science Club
                </h2>
              </div>
              
              <div className="space-y-4 text-sm text-brand-blue/70 leading-relaxed font-normal">
                <p>
                  The EULIM Science Club, a vibrant and dynamic hub under the School of Sciences at CHRIST (Deemed to be University), Delhi NCR Campus, is the epicenter of intellectual curiosity and scientific exploration.
                </p>
                <p>
                  Throughout the academic year, EULIM orchestrates a diverse array of events that cater to the inquisitive minds of the student body. From captivating corporate talks that bridge the gap between academia and industry, to immersive science exhibitions that showcase cutting-edge research and discoveries.
                </p>
                <p>
                  The club also hosts thought-provoking panel discussions, bringing together experts from various scientific domains to debate and dissect contemporary issues.
                </p>
              </div>

              <div className="border-l-4 border-brand-cyan pl-4 py-1 italic text-brand-blue font-medium text-sm">
                &ldquo;EULIM Science Club is not just about learning, it&apos;s about creating a vibrant culture of scientific inquiry, collaboration, and innovation.&rdquo;
              </div>
            </div>
          </div>

          {/* Vercel-style clean grids for general pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-brand-border rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-brand-border shadow-sm mt-16">
            <div className="p-8 bg-white hover:bg-brand-card/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-cyan mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">Intellectual Curiosity</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Encouraging students to look beyond standard textbooks. We host debates on theoretical breakthroughs, experimental techniques, and mathematical formulation.
              </p>
            </div>

            <div className="p-8 bg-white hover:bg-brand-card/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-cyan mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">Academia-Industry Bridge</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Connecting abstract academic concepts to real-world industrial tasks. Showing how computation, physical sciences, and modeling resolve market needs.
              </p>
            </div>

            <div className="p-8 bg-white hover:bg-brand-card/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-cyan mb-6">
                <MessageSquareCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">Panel Discussions</h3>
              <p className="text-sm text-brand-blue/70 leading-relaxed">
                Conducting talks, guest seminars, and debates with faculty coordinators to evaluate emerging scientific principles and computational models.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CLUB MILESTONES TIMELINE */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Our Timeline</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Club Milestones & Journey
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              From a small student-led initiative to the epicenter of science innovation at CHRIST Delhi NCR.
            </p>
          </div>

          {/* Interactive vertical timeline */}
          <div className="relative max-w-3xl mx-auto pl-8 sm:pl-0">
            {/* Center line (on desktop) */}
            <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-0.5 bg-brand-border sm:-translate-x-0.5" />

            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={milestone.year}
                  className={`relative mb-12 sm:flex sm:justify-between items-start ${
                    isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 sm:left-1/2 w-4 h-4 rounded-full border-4 border-white -translate-x-2 sm:-translate-x-2 mt-1 z-10 shadow-sm ${
                      isEven ? "bg-brand-cyan" : "bg-brand-ochre"
                    }`} 
                  />

                  {/* Spacer or empty side */}
                  <div className="hidden sm:block w-[45%]" />

                  {/* Content block */}
                  <div className="w-full sm:w-[45%] bg-white border border-brand-border p-6 rounded-lg shadow-sm hover:border-brand-cyan/20 transition-all duration-300">
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider block mb-1">{milestone.year}</span>
                    <h3 className="text-base font-bold text-brand-blue mb-2">{milestone.title}</h3>
                    <p className="text-xs text-brand-blue/70 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE EVENT: ENIGMA EXPEDITION */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-ochre/30 bg-brand-card text-brand-ochre text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Quantum Quest 2026
            </div>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              The Enigma Expedition
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              Explore our thrilling &quot;Stranger Things&quot;-themed science treasure hunt spanning the entire campus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Event Description Card */}
            <div className="lg:col-span-5 bg-brand-card border border-brand-border p-8 rounded-lg space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-brand-border">
                <h3 className="text-base font-bold text-brand-blue">Expedition Logistics</h3>
                <span className="text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full uppercase tracking-wider">Stranger Things theme</span>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-brand-blue/70 leading-relaxed">
                  Quantum Quest 2026 is organised by EULIM Science Club in collaboration with the <strong className="text-brand-blue">Christ Innovation and Incubation Centre (CIIC)</strong>. Solve science fiction clues, decrypt mathematical cyphers, and trace coordinates to claim prizes.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-3 text-xs text-brand-blue/80">
                    <Calendar className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>09 March, 2026 (Annual Interactive Event)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-brand-blue/80">
                    <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>01:45 PM Onwards</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-brand-blue/80">
                    <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>Synergy Square & Campus Tracks</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="bg-white border border-brand-border rounded p-3 text-center">
                    <span className="text-base block mb-0.5">🏆</span>
                    <span className="text-[10px] font-bold text-brand-blue block">1st Prize</span>
                    <span className="text-[9px] text-brand-blue/60 block">Gift Hamper & Appreciation</span>
                  </div>
                  <div className="bg-white border border-brand-border rounded p-3 text-center">
                    <span className="text-base block mb-0.5">🎓</span>
                    <span className="text-[10px] font-bold text-brand-blue block">Participation</span>
                    <span className="text-[9px] text-brand-blue/60 block">E-Certificates for All</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Gallery */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-xs font-bold text-brand-blue/50 uppercase tracking-widest">Expedition Archives</h4>
              
              {/* Campuses/Quest bento photo gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {quantumPhotos.slice(0, 5).map((photo, i) => (
                  <div 
                    key={photo.label}
                    className={`relative rounded-lg overflow-hidden border border-brand-border h-36 group ${
                      photo.span || ""
                    }`}
                  >
                    <img 
                      src={photo.img} 
                      alt={photo.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/85 via-transparent to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] font-bold text-white tracking-wide">{photo.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Collaborator logo list */}
          <div className="border-t border-brand-border pt-10 mt-10">
            <h4 className="text-[10px] font-bold text-brand-blue/40 uppercase tracking-widest text-center mb-6">Organisers & Collaborators</h4>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {["CIIC", "Institution&apos;s Innovation Council", "Christ Incubation Centre", "EULIM Science Club"].map((name) => (
                <div key={name} className="px-4 py-2 border border-brand-border bg-brand-card/50 rounded text-xs font-bold text-brand-blue/60 tracking-wider">
                  {name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: LEADERSHIP & FACULTY */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Faculty Mentorship</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Leadership Guiding Our Mission
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              Meet the faculty directors and coordinators driving science engagement at Christ University NCR.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faculty.slice(0, 3).map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-brand-border p-6 rounded-lg shadow-sm hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
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
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faculty.slice(3, 5).map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-brand-border p-6 rounded-lg shadow-sm hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MEET THE CATALYSTS (STUDENT TEAM) */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">The Neural Network</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              Meet the Catalysts
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed">
              The student organizers and leaders coordinating club activities and academic partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {studentTeam.map((member) => {
              const IconComp = member.icon;
              return (
                <div 
                  key={member.name}
                  className="bg-brand-card border border-brand-border p-6 rounded-lg shadow-sm hover:border-brand-cyan/40 transition-all duration-300 text-center flex flex-col items-center group"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: THE FUSION CHAMBER (SPONSORSHIP US) */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-brand-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <EulyMascot pose="partner" size={90} className="mb-4 shrink-0" />
            <h2 className="text-xs font-bold tracking-widest text-brand-cyan uppercase mb-3">Partner With Us</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight font-display">
              The Fusion Chamber
            </p>
            <p className="mt-4 text-base text-brand-blue/70 leading-relaxed max-w-2xl mx-auto">
              Fuel the next generation of scientific minds. Sponsor EULIM Science Club events and gain visibility among 500+ students, faculty, and industry professionals.
            </p>
          </div>

          {/* Sponsorship Tiers selection grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {sponsorTiers.map((tier) => {
              const isSelected = sponsorForm.sponsorshipTier === tier.name;
              return (
                <div
                  key={tier.name}
                  onClick={() => selectTier(tier.name)}
                  className={`bg-white border rounded-lg p-6 text-center cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? "border-brand-cyan bg-brand-cyan/5 shadow-md shadow-brand-cyan/5" 
                      : "border-brand-border hover:border-brand-cyan/40 hover:shadow-sm"
                  }`}
                >
                  <span className="text-2xl mb-2.5 block">{tier.icon}</span>
                  <h3 className="text-sm font-bold text-brand-blue mb-2">{tier.name}</h3>
                  <p className="text-[11px] text-brand-blue/70 leading-relaxed">{tier.perk}</p>
                  <div className="mt-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isSelected ? "bg-brand-cyan text-white" : "bg-brand-card text-brand-cyan"
                    }`}>
                      {isSelected ? "Selected" : "Select Tier"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stateful Proposal Form */}
          <div className="bg-white border border-brand-border p-8 rounded-lg max-w-2xl mx-auto shadow-sm">
            <h3 className="text-base font-bold text-brand-blue mb-6 text-center">Submit a Sponsorship Proposal</h3>
            
            <form onSubmit={handleSponsorSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-brand-blue/80 block mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Industries"
                    className="w-full text-xs border border-brand-border bg-brand-card rounded px-3.5 py-2.5 outline-none focus:border-brand-cyan focus:bg-white text-brand-blue font-medium"
                    value={sponsorForm.companyName}
                    onChange={(e) => setSponsorForm(prev => ({ ...prev, companyName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brand-blue/80 block mb-1.5">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Smith"
                    className="w-full text-xs border border-brand-border bg-brand-card rounded px-3.5 py-2.5 outline-none focus:border-brand-cyan focus:bg-white text-brand-blue font-medium"
                    value={sponsorForm.contactPerson}
                    onChange={(e) => setSponsorForm(prev => ({ ...prev, contactPerson: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-brand-blue/80 block mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sponsor@company.com"
                    className="w-full text-xs border border-brand-border bg-brand-card rounded px-3.5 py-2.5 outline-none focus:border-brand-cyan focus:bg-white text-brand-blue font-medium"
                    value={sponsorForm.email}
                    onChange={(e) => setSponsorForm(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brand-blue/80 block mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full text-xs border border-brand-border bg-brand-card rounded px-3.5 py-2.5 outline-none focus:border-brand-cyan focus:bg-white text-brand-blue font-medium"
                    value={sponsorForm.phone}
                    onChange={(e) => setSponsorForm(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brand-blue/80 block mb-1.5">Company Website</label>
                <input
                  type="url"
                  placeholder="https://company.com"
                  className="w-full text-xs border border-brand-border bg-brand-card rounded px-3.5 py-2.5 outline-none focus:border-brand-cyan focus:bg-white text-brand-blue font-medium"
                  value={sponsorForm.website}
                  onChange={(e) => setSponsorForm(prev => ({ ...prev, website: e.target.value }))}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-brand-blue/80 block mb-1.5">Additional Proposal Message</label>
                <textarea
                  rows={4}
                  placeholder="Introduce your brand or lay down details of your package support..."
                  className="w-full text-xs border border-brand-border bg-brand-card rounded px-3.5 py-2.5 outline-none focus:border-brand-cyan focus:bg-white text-brand-blue font-medium resize-none"
                  value={sponsorForm.message}
                  onChange={(e) => setSponsorForm(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-white bg-brand-cyan hover:bg-brand-cyan/95 rounded-md transition-all active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? "Submitting Proposal..." : "Submit Sponsorship Proposal"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* FLOAT NOTIFICATION TOAST */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 bg-brand-blue border border-brand-cyan/30 text-white p-4 rounded-lg shadow-lg flex items-start gap-3 max-w-sm animate-fade-in animate-bounce">
          <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-xs">{toast.title}</p>
            <p className="text-[10px] text-white/80 mt-1">{toast.desc}</p>
          </div>
        </div>
      )}
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
