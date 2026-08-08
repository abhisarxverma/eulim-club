"use client";

import { useState, useEffect } from "react";
import { EulyMascot } from "./euly-mascot";
import { MessageSquare, Sparkles, X } from "lucide-react";

export function EulyAssistant() {
  const [speech, setSpeech] = useState("Hi! I'm Euly. Click me!");
  const [showBubble, setShowBubble] = useState(true);
  const [spinCount, setSpinCount] = useState(0);
  const [isMadMode, setIsMadMode] = useState(false);

  const facts = [
    "Did you know? EULIM stands for Euler, Limits, and Infinite Matrices!",
    "Light takes 8 minutes and 19 seconds to travel from the Sun to the Earth.",
    "The annual Science Exhibition is on October 9, 2025 at Synergy Square!",
    "Absolute zero is -273.15 degrees Celsius. All molecular motion stops!",
    "Double-click me to toggle 'Mad Science Mode' on this website!",
    "The Enigma Expedition is a Stranger Things-themed treasure hunt!",
    "Quantum superposition means a particle can be in two states at once!",
    "Mathematics is the language in which God has written the universe."
  ];

  const handleClick = () => {
    // Spin Euly
    setSpinCount(prev => prev + 1);
    
    // Choose a random fact
    const idx = Math.floor(Math.random() * facts.length);
    setSpeech(facts[idx]);
    setShowBubble(true);

    // Bounce speech bubble visibility
    setTimeout(() => {
      // Keep visible
    }, 4000);
  };

  const handleDoubleClick = () => {
    const nextMode = !isMadMode;
    setIsMadMode(nextMode);
    
    if (nextMode) {
      setSpeech("🚨 MAD SCIENCE MODE INITIALIZED! NEON CHARGE INJECTED! ⚡");
      document.documentElement.classList.add("mad-science");
      triggerPulseEffect();
    } else {
      setSpeech("Normal operations restored. Orbits stabilized.");
      document.documentElement.classList.remove("mad-science");
    }
    setShowBubble(true);
  };

  const triggerPulseEffect = () => {
    // Temporary flash screen or effect
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.backgroundColor = "rgba(168, 85, 247, 0.15)"; // violet flash
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = "9999";
    overlay.style.transition = "opacity 0.6s ease";
    document.body.appendChild(overlay);
    
    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), 600);
    }, 100);
  };

  useEffect(() => {
    // Initial greeting delay
    const timer = setTimeout(() => {
      setSpeech("Welcome to the EULIM Lab! Click me for science facts.");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans select-none pointer-events-auto">
      {/* Speech bubble */}
      {showBubble && (
        <div className="relative max-w-xs bg-[#0a2540] text-white text-xs font-medium px-4 py-3 rounded-xl border border-brand-cyan/30 shadow-lg animate-fade-in flex gap-2 items-start">
          <p className="leading-relaxed">{speech}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowBubble(false);
            }}
            className="text-white/40 hover:text-white shrink-0 mt-0.5"
            aria-label="Dismiss speech bubble"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-[#0a2540] border-r border-b border-brand-cyan/30 transform rotate-45" />
        </div>
      )}

      {/* Floating Euly Trigger */}
      <div 
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-brand-border rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-brand-cyan/20 hover:border-brand-cyan/50 transform transition-all duration-300 hover:scale-105 active:scale-95 relative group"
        style={{
          transform: `rotate(${spinCount * 360}deg)`,
          transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
      >
        <EulyMascot pose={isMadMode ? "idea" : "wave"} size={64} className="pointer-events-none" />
        
        {/* Glow halo when in Mad mode */}
        {isMadMode && (
          <span className="absolute inset-0 rounded-full border border-purple-500 animate-ping opacity-75 pointer-events-none" />
        )}
        
        {/* Helper tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-blue text-[9px] font-bold py-1 px-2 rounded border border-brand-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Click: Speak | Double-Click: Energy ⚡
        </span>
      </div>
    </div>
  );
}
