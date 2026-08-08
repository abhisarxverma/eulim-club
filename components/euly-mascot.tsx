import React from "react";

interface EulyMascotProps {
  pose?: "wave" | "idea" | "support" | "partner";
  className?: string;
  size?: number;
}

export function EulyMascot({ pose = "wave", className = "", size = 120 }: EulyMascotProps) {
  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`} 
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 120 120" 
        className="w-full h-full drop-shadow-sm animate-pulse"
        style={{ animationDuration: "8s" }}
      >
        {/* Orbital Path 1 - Electric Cyan */}
        <ellipse 
          cx="60" 
          cy="60" 
          rx="50" 
          ry="15" 
          fill="none" 
          stroke="#0284c7" 
          strokeWidth="1.5" 
          className="origin-center animate-spin" 
          style={{ animationDuration: "12s", transform: "rotate(30deg)" }}
        />
        {/* Orbiting Electron 1 */}
        <circle cx="10" cy="60" r="3" fill="#d97706" />

        {/* Orbital Path 2 - Electric Cyan */}
        <ellipse 
          cx="60" 
          cy="60" 
          rx="50" 
          ry="15" 
          fill="none" 
          stroke="#0284c7" 
          strokeWidth="1.5" 
          className="origin-center animate-spin" 
          style={{ animationDuration: "16s", transform: "rotate(-45deg)" }}
        />
        {/* Orbiting Electron 2 */}
        <circle cx="110" cy="60" r="3" fill="#0284c7" />

        {/* Nucleus / Euly's Body - Deep Royal Blue */}
        <circle cx="60" cy="60" r="28" fill="#0a2540" stroke="#0284c7" strokeWidth="2" />

        {/* Euly's Face & Features */}
        {/* Eyes (Safety Goggles Frame) */}
        <rect x="42" y="48" width="36" height="15" rx="7.5" fill="#f8fafc" stroke="#0284c7" strokeWidth="2" />
        <line x1="60" y1="48" x2="60" y2="63" stroke="#0284c7" strokeWidth="2" />
        
        {/* Pupils */}
        <circle cx="50" cy="55.5" r="3" fill="#0a2540" />
        <circle cx="70" cy="55.5" r="3" fill="#0a2540" />
        <circle cx="51.5" cy="54" r="1" fill="#ffffff" />
        <circle cx="71.5" cy="54" r="1" fill="#ffffff" />

        {/* Mouth */}
        {pose === "idea" ? (
          // Excited open mouth
          <path d="M54,68 Q60,76 66,68 Z" fill="#d97706" stroke="#0284c7" strokeWidth="1" />
        ) : pose === "partner" ? (
          // Wink smile
          <path d="M54,67 Q60,71 66,67" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
        ) : (
          // Happy smile
          <path d="M54,67 Q60,72 66,67" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
        )}

        {/* Cheeks */}
        <circle cx="43" cy="62" r="2" fill="#d97706" opacity="0.6" />
        <circle cx="77" cy="62" r="2" fill="#d97706" opacity="0.6" />

        {/* Pose-specific SVG overlays */}
        {pose === "idea" && (
          // Glowing lightbulb / spark above Euly's head
          <g className="animate-bounce" style={{ animationDuration: "2s" }}>
            <path 
              d="M60,12 L60,22 M53,16 L67,16" 
              stroke="#d97706" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
            <circle cx="60" cy="22" r="4" fill="#d97706" />
          </g>
        )}

        {pose === "wave" && (
          // Waving hand/arm
          <path 
            d="M33,63 Q20,68 16,56" 
            fill="none" 
            stroke="#0284c7" 
            strokeWidth="3" 
            strokeLinecap="round" 
            className="origin-right animate-bounce"
            style={{ animationDuration: "1.5s" }}
          />
        )}

        {pose === "support" && (
          // Graduation Cap or Book icon overlay
          <path 
            d="M50,30 L60,25 L70,30 L60,35 Z M60,35 V42" 
            fill="#d97706" 
            stroke="#0a2540" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        )}
      </svg>
      
      {/* Speech bubble */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#0a2540] text-white text-[10px] font-bold px-2 py-1 rounded border border-brand-cyan/30 whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
        {pose === "wave" && "Welcome, Explorer!"}
        {pose === "idea" && "Aha! Look at this!"}
        {pose === "support" && "Let's Register!"}
        {pose === "partner" && "Fusing Minds!"}
      </div>
    </div>
  );
}
