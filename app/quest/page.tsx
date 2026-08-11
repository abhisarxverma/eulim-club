"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  Trophy, 
  Play, 
  ArrowRight, 
  ShieldAlert, 
  Tv, 
  Radio, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";

export default function QuestPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Photos from previous events
  const questPhotos = [
    { label: "The Portal Opens", img: "https://live.staticflickr.com/65535/55145781247_06376c09bd_c.jpg", desc: "Teams gather at Synergy Square to begin the Enigma coordinates." },
    { label: "Deciphering Crypts", img: "https://live.staticflickr.com/65535/55147056710_a993cfcbb4_c.jpg", desc: "Decoding electromagnetic and algebraic matrices in the science lobby." },
    { label: "Tactical Planning", img: "https://live.staticflickr.com/65535/55147056725_2190a938bf_c.jpg", desc: "Organizing coordinate maps and physics riddles before the next sector." },
    { label: "Campus Grid Trace", img: "https://live.staticflickr.com/65535/55146679186_13aa653df9_b.jpg", desc: "Clue hunting across the central courtyards and academic wings." },
    { label: "The Lockbox Puzzle", img: "https://live.staticflickr.com/65535/55145781307_da2e331f9a_c.jpg", desc: "Solving the CIIC micro-controller puzzle to unlock the final key." }
  ];

  // Video representations
  const questVideos = [
    { id: "vid-1", title: "Quantum Quest 2026 Trailer", duration: "1:45", category: "Official Teaser", placeholder: "https://live.staticflickr.com/65535/54845014351_248207131a_c.jpg" },
    { id: "vid-2", title: "Enigma Expedition Highlights", duration: "4:20", category: "Aftermovie", placeholder: "https://live.staticflickr.com/65535/54845338505_000ca74e69_c.jpg" },
    { id: "vid-3", title: "Clue Decryption Guide (CIIC)", duration: "2:50", category: "Tutorial", placeholder: "https://live.staticflickr.com/65535/55146839093_fb82993af7_c.jpg" }
  ];

  const handleNextSlide = () => {
    setActiveSlide(prev => (prev + 1) % questPhotos.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(prev => (prev - 1 + questPhotos.length) % questPhotos.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-brand-blue font-sans selection:bg-red-600/10 selection:text-red-600 relative overflow-hidden pb-20">
      
      {/* GLOWING AMBIENT SOFT RED NEBULA */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vh] bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[35vw] h-[35vh] bg-red-600/5 rounded-full filter blur-[120px] pointer-events-none z-0" />

      {/* HERO SECTION: White background, red & black elements */}
      <section className="relative pt-20 pb-24 md:py-32 border-b border-brand-border z-10 flex flex-col justify-center min-h-[75vh] bg-gradient-to-br from-white via-[#fefafb] to-[#f4f5f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Typography */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest animate-pulse">
                <Radio className="w-3.5 h-3.5 text-red-600" />
                Stranger Things Theme • Concluded Event
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-blue tracking-tight leading-[1.1] font-display">
                THE ENIGMA
                <br />
                <span className="text-red-600 drop-shadow-[0_2px_10px_rgba(229,9,20,0.15)] uppercase tracking-wider font-extrabold">
                  EXPEDITION
                </span>
              </h1>

              <p className="text-base sm:text-lg text-brand-blue/70 max-w-xl leading-relaxed font-normal">
                Step back into the Upside Down. Re-evaluate the high-level scientific and mathematical cyphers, coordinate maps, and interactive hardware portals that tested our student codebreakers across the Delhi NCR campus.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                <a 
                  href="#gallery" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-red-600 hover:bg-red-750 rounded-md shadow-md shadow-red-900/10 transition-all hover:scale-105 active:scale-95 border border-red-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  View Event Gallery
                </a>
                <a 
                  href="#rules" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-brand-blue/80 hover:text-brand-blue border border-brand-border bg-white hover:bg-brand-bg-muted rounded-md transition-all hover:scale-105 active:scale-95"
                >
                  View Event Protocol
                </a>
              </div>
            </div>

            {/* Right: Enigma Hero Image with Red Shadow Glow */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden border-2 border-red-900/60 shadow-[0_0_30px_rgba(220,38,38,0.25)] hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all duration-500 bg-[#0e0d0f]"
              >
                <img 
                  src="/enigma_hero_image.jpg" 
                  alt="Enigma Expedition Hero" 
                  className="w-full h-auto object-cover rounded-lg aspect-[16/10] sm:aspect-[16/9]"
                />
                {/* Subtle Upside Down Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* LOGISTICS & SCHEDULE BANNER (Black Background Accent) */}
      <section className="py-12 bg-[#0e0d0f] border-b border-red-950/30 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-red-950/40">
            
            <div className="flex gap-3 items-center py-2 lg:py-0">
              <Calendar className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Expedition Date</p>
                <p className="text-xs font-extrabold text-white">09 March, 2026</p>
              </div>
            </div>

            <div className="flex gap-3 items-center pt-4 lg:pt-0 lg:pl-6 py-2 lg:py-0">
              <Clock className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Sector Launch</p>
                <p className="text-xs font-extrabold text-white">01:45 PM Concluded</p>
              </div>
            </div>

            <div className="flex gap-3 items-center pt-4 lg:pt-0 lg:pl-6 py-2 lg:py-0">
              <MapPin className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Start Sector</p>
                <p className="text-xs font-extrabold text-white">Synergy Square Lobby</p>
              </div>
            </div>

            <div className="flex gap-3 items-center pt-4 lg:pt-0 lg:pl-6 py-2 lg:py-0">
              <Trophy className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Rewards Status</p>
                <p className="text-xs font-extrabold text-white">Merit Shield Conferred</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ELABORATIVE EXPEDITION ARCHIVES (CAROUSEL - White Section, Black slider frame) */}
      <section id="gallery" className="py-20 md:py-24 border-b border-brand-border bg-white z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3 block">Expedition Media</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-brand-blue">
              Visual Archives
            </h2>
            <p className="mt-4 text-sm text-brand-blue/70">
              Snapshots of student researchers tracing anomalies and decoding mathematical matrix boards.
            </p>
          </div>

          {/* Slider (Black Frame) */}
          <div className="relative max-w-4xl mx-auto border-2 border-red-950/80 rounded-xl overflow-hidden bg-[#0e0d0f] shadow-2xl">
            <div className="relative h-64 sm:h-96 w-full bg-black overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={questPhotos[activeSlide].img}
                  alt={questPhotos[activeSlide].label}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Bottom Banner */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent flex items-end p-5 sm:p-8 text-left">
                <div className="space-y-1 sm:space-y-2">
                  <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest bg-red-950/60 border border-red-600/40 px-2 py-0.5 rounded-full inline-block">
                    Sector Archive
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {questPhotos[activeSlide].label}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-300 max-w-xl">
                    {questPhotos[activeSlide].desc}
                  </p>
                </div>
              </div>

              {/* Slider Arrows */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-red-900/40 hover:border-red-500/80 flex items-center justify-center text-red-500 hover:text-white transform active:scale-90 transition-all shadow-md"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-red-900/40 hover:border-red-500/80 flex items-center justify-center text-red-500 hover:text-white transform active:scale-90 transition-all shadow-md"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-1.5 p-4 border-t border-red-950/20 bg-[#0e0d0f]">
              {questPhotos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeSlide ? "w-5 bg-red-600" : "w-1.5 bg-gray-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* VIDEO LOGS SECTION (Light Slate background, black monitor cards) */}
      <section className="py-20 md:py-24 border-b border-brand-border bg-[#f0f2f5] z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3 block">Quest Broadcasts</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-brand-blue">
              Expedition Video Logs
            </h2>
            <p className="mt-4 text-sm text-brand-blue/70">
              Watch student journals, decoder instructions, and active highlight tapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {questVideos.map((video) => (
              <div 
                key={video.id}
                className="bg-white border border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-red-500/20 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Black Video Monitor Frame */}
                <div className="relative h-48 w-full bg-[#0e0d0f] overflow-hidden border-b border-brand-border flex items-center justify-center">
                  <img 
                    src={video.placeholder} 
                    alt={video.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-red-950/15" />
                  
                  {/* Play icon overlay */}
                  <button 
                    onClick={() => setSelectedVideo(video.title)}
                    className="relative z-10 w-12 h-12 rounded-full bg-red-600/90 group-hover:bg-red-600 border border-red-500/40 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 active:scale-95 transition-all duration-300"
                    aria-label="Play video"
                  >
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </button>
                  
                  <span className="absolute bottom-3 right-3 text-[9px] font-bold text-gray-400 bg-black/60 border border-red-950/30 px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest block mb-1">{video.category}</span>
                    <h3 className="text-xs font-bold text-brand-blue group-hover:text-red-600 transition-colors leading-tight">{video.title}</h3>
                  </div>
                  <p className="text-[11px] text-brand-blue/60 mt-2">Official recording of the Delhi NCR campus scientific trace.</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPEDITION PROTOCOLS & RULES (Deep Black Section, Red Details for high contrast) */}
      <section id="rules" className="py-20 md:py-24 border-b border-red-950/20 bg-[#0e0d0f] z-10 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase mb-3">Expedition Protocols</span>
            <h2 className="text-3xl font-extrabold tracking-tight font-display text-white">
              Stranger Rules & Regulations
            </h2>
          </div>

          <div className="bg-[#1a181b] border border-red-900/40 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start pb-4 border-b border-red-950/20">
                <span className="text-xs font-mono text-red-500 pt-0.5">01</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Decentralized Coding</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Teams receive clues via their device coordinates. Solutions must be evaluated dynamically under coordinate markers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-red-950/20">
                <span className="text-xs font-mono text-red-500 pt-0.5">02</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Stick to the Pack</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Teammates must remain together in their designated sectors. Dispersing will cause tracking sensor disqualification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-red-950/20">
                <span className="text-xs font-mono text-red-500 pt-0.5">03</span>
                <div>
                  <h4 className="text-sm font-bold text-white">The Portal Gatekeepers</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Volunteers wearing active red badges represent the gatekeepers. Respect sector guidelines and follow safety prompts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-xs font-mono text-red-500 pt-0.5">04</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Hardware Key Decryption</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    The final key requires solving an analog micro-processor lock inside the CIIC laboratory zone to register portal completion.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 bg-red-950/15 border border-red-900/30 p-4 rounded text-xs text-red-400 font-medium">
              <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
              <span>WARNING: Disregarding coordinator instructions or trespassing locked sector labs will lead to instant team disqualification.</span>
            </div>

          </div>
        </div>
      </section>

      {/* CONCLUDED SUCCESS SHOWCASE (Light page section, premium white/red card) */}
      <section className="py-20 text-center relative z-10 bg-gradient-to-b from-[#f7f8fa] to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-red-950/10 rounded-2xl p-8 sm:p-12 shadow-xl shadow-red-950/5 space-y-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-600 text-xs font-bold uppercase tracking-wider">
              🏆 Concluded Successfully
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-display">
              120+ Codebreakers & 40+ Teams Joined!
            </h2>
            <p className="text-xs sm:text-sm text-brand-blue/70 leading-relaxed max-w-lg mx-auto">
              Quantum Quest 2026 has concluded. Teams successfully navigated complex grid coordinates and cracked multi-layered ciphers in record time. We are incredibly proud of all participants!
            </p>
            <div className="pt-2">
              <a
                href="mailto:scienceclub.ncr@christuniversity.in?subject=Pre-Registration for Future Quantum Quest Editions"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-md transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-900/10"
              >
                Pre-Register for Next Edition
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO PLAYBACK MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white border border-red-950/20 rounded-xl max-w-2xl w-full p-6 space-y-4 relative shadow-2xl">
            <h3 className="text-sm font-bold text-brand-blue">{selectedVideo}</h3>
            
            {/* Mock Video Box */}
            <div className="aspect-video w-full bg-[#0e0d0f] border border-red-950/50 rounded-lg flex flex-col items-center justify-center p-6 text-center text-gray-500 relative">
              <Tv className="w-12 h-12 text-red-900/40 mb-3 animate-pulse" />
              <p className="text-xs text-gray-400 font-mono">BROADCAST SIGNAL OFFLINE</p>
              <p className="text-[10px] text-gray-600 mt-1 font-mono">Stream coordinates will launch on active event date.</p>
            </div>
            
            <div className="flex justify-end pt-2">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="px-4 py-2 bg-red-950 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/20 hover:border-red-500 rounded text-xs font-bold transition-all active:scale-95"
              >
                Close Signal
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
