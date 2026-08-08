"use client";

import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Zap, Sparkles } from "lucide-react";

interface ElementParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  history: { x: number; y: number }[];
}

export function QuantumSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [gravity, setGravity] = useState(0.15); // Gravitational constant
  const [particleCount, setParticleCount] = useState(0);
  const [trailLength, setTrailLength] = useState(15);
  const [chargeType, setChargeType] = useState<"attract" | "repel">("attract");

  const particlesRef = useRef<ElementParticle[]>([]);
  const nucleusRef = useRef({ x: 0, y: 0, rx: 0, ry: 0, isDragging: false, radius: 18 });

  // Initialize central nucleus in core
  useEffect(() => {
    const updateSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
      nucleusRef.current.x = rect.width / 2;
      nucleusRef.current.y = rect.height / 2;
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Main Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles = particlesRef.current;

    const draw = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Dark sci-fi translucent clear to let trails build up
      ctx.fillStyle = "rgba(10, 37, 64, 0.15)"; 
      ctx.fillRect(0, 0, width, height);

      const nucleus = nucleusRef.current;

      // Draw force field waves expanding from the nucleus
      const pulseTime = Date.now() * 0.003;
      const pulseRadius = 30 + Math.sin(pulseTime) * 8;
      ctx.beginPath();
      ctx.arc(nucleus.x, nucleus.y, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = chargeType === "attract" 
        ? "rgba(2, 132, 199, 0.15)" // Electric Cyan
        : "rgba(217, 119, 6, 0.15)"; // Solar Ochre
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw central nucleus
      const gradient = ctx.createRadialGradient(
        nucleus.x - 4, nucleus.y - 4, 2,
        nucleus.x, nucleus.y, nucleus.radius
      );
      gradient.addColorStop(0, "#fbbf24"); // Bright gold core
      gradient.addColorStop(0.4, "#d97706"); // Solar Ochre middle
      gradient.addColorStop(1, "#0a2540"); // Deep blue boundaries
      
      ctx.beginPath();
      ctx.arc(nucleus.x, nucleus.y, nucleus.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.shadowColor = "#d97706";
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Nucleus Symbol inside
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("+", nucleus.x, nucleus.y);

      // Update & Draw electrons
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Physics: calculate force vector toward nucleus
        const dx = nucleus.x - p.x;
        const dy = nucleus.y - p.y;
        const distanceSq = dx * dx + dy * dy;
        const distance = Math.sqrt(distanceSq);

        if (distance < nucleus.radius + 3) {
          // Collision: explode / absorb!
          particles.splice(i, 1);
          setParticleCount(particles.length);
          continue;
        }

        // F = G * M1 * M2 / r^2
        const forceStrength = (gravity * 400) / Math.max(distanceSq, 100);
        const fx = (dx / distance) * forceStrength;
        const fy = (dy / distance) * forceStrength;

        // Apply forces based on attraction or repulsion
        if (chargeType === "attract") {
          p.vx += fx;
          p.vy += fy;
        } else {
          p.vx -= fx;
          p.vy -= fy;
          
          // Outer boundary cushion
          if (p.x < 10 || p.x > width - 10) p.vx *= -0.8;
          if (p.y < 10 || p.y > height - 10) p.vy *= -0.8;
        }

        // Apply friction/drag to stabilize orbit
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Update coordinates
        p.x += p.vx;
        p.y += p.vy;

        // Update trail history
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > trailLength) {
          p.history.shift();
        }

        // Draw Electron Tail
        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let h = 1; h < p.history.length; h++) {
            ctx.lineTo(p.history[h].x, p.history[h].y);
          }
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Draw Electron Core Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [gravity, trailLength, chargeType]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Don't spawn if clicking/dragging the central proton
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const nucleus = nucleusRef.current;
    const dx = clickX - nucleus.x;
    const dy = clickY - nucleus.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < nucleus.radius + 10) return; // ignore clicking too close to center

    // Spawn an electron with tangential velocity for a clean orbit!
    // Tangential vector is perpendicular to position vector
    const speed = 2.5 + Math.random() * 1.5;
    const angle = Math.atan2(dy, dx);
    const orbitAngle = angle + (chargeType === "attract" ? Math.PI / 2 : Math.PI); // clockwise orbital vector
    
    const newElectron: ElementParticle = {
      x: clickX,
      y: clickY,
      vx: Math.cos(orbitAngle) * speed,
      vy: Math.sin(orbitAngle) * speed,
      color: "#0284c7", // Electric Cyan default
      history: []
    };

    particlesRef.current.push(newElectron);
    setParticleCount(particlesRef.current.length);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const nucleus = nucleusRef.current;
    const dx = clickX - nucleus.x;
    const dy = clickY - nucleus.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < nucleus.radius) {
      nucleus.isDragging = true;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const nucleus = nucleusRef.current;
    if (!nucleus.isDragging) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    nucleus.x = e.clientX - rect.left;
    nucleus.y = e.clientY - rect.top;
  };

  const handleMouseUpOrLeave = () => {
    nucleusRef.current.isDragging = false;
  };

  const clearSandbox = () => {
    particlesRef.current = [];
    setParticleCount(0);
  };

  const injectFlares = () => {
    // Inject 12 particles with colorful properties all at once!
    const nucleus = nucleusRef.current;
    const newParticles: ElementParticle[] = [];
    
    for (let i = 0; i < 12; i++) {
      const radius = 80 + Math.random() * 100;
      const angle = (i / 12) * Math.PI * 2;
      const px = nucleus.x + Math.cos(angle) * radius;
      const py = nucleus.y + Math.sin(angle) * radius;
      
      const speed = 2.2 + Math.random() * 1.2;
      const orbitAngle = angle + Math.PI / 2; // perpendicular
      
      newParticles.push({
        x: px,
        y: py,
        vx: Math.cos(orbitAngle) * speed,
        vy: Math.sin(orbitAngle) * speed,
        color: i % 2 === 0 ? "#0284c7" : "#d97706", // Cyan & Ochre mix
        history: []
      });
    }
    
    particlesRef.current = [...particlesRef.current, ...newParticles];
    setParticleCount(particlesRef.current.length);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full bg-[#0a2540] text-white p-6 rounded-2xl border-2 border-brand-cyan/40 shadow-xl relative overflow-hidden"
    >
      {/* Decorative Sci-Fi layout chrome */}
      <div className="absolute top-2 left-3 flex gap-1.5 items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
        <span className="text-[9px] font-mono tracking-widest text-brand-cyan uppercase">SIMULATION: ONLINE</span>
      </div>
      <div className="absolute top-2 right-3 font-mono text-[9px] text-white/40">
        PARTICLES: {particleCount} | FIELD: {chargeType.toUpperCase()}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch pt-4">
        {/* Left Side: Controls Panel */}
        <div className="lg:col-span-1 bg-[#0c2d4e] border border-brand-cyan/20 p-4 rounded-xl flex flex-col justify-between gap-4 font-sans">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-extrabold text-brand-cyan tracking-wider uppercase flex items-center gap-1.5">
                <Zap className="w-4 h-4 fill-brand-cyan" />
                Quantum Field
              </h3>
              <p className="text-[10px] text-white/60 leading-relaxed mt-1">
                Drag the center proton, click the arena to spawn electron orbits, or inject a particle storm.
              </p>
            </div>

            {/* Slider 1: Gravity */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-white/70">Attraction Strength</span>
                <span className="text-brand-cyan">{gravity.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="0.05" 
                max="0.45" 
                step="0.01" 
                value={gravity} 
                onChange={(e) => setGravity(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#0a2540] rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
            </div>

            {/* Slider 2: Trail Length */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-white/70">Wave Trail Size</span>
                <span className="text-brand-ochre">{trailLength}</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="40" 
                step="1" 
                value={trailLength} 
                onChange={(e) => setTrailLength(parseInt(e.target.value))}
                className="w-full h-1 bg-[#0a2540] rounded-lg appearance-none cursor-pointer accent-brand-ochre"
              />
            </div>

            {/* Switch: Charge behaviour */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-mono text-white/50 block">Electromagnetic Charge</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setChargeType("attract")}
                  className={`text-[10px] font-bold py-1.5 rounded transition-all ${
                    chargeType === "attract"
                      ? "bg-brand-cyan text-white shadow-sm"
                      : "bg-[#0a2540] text-white/70 border border-brand-cyan/10 hover:border-brand-cyan/35"
                  }`}
                >
                  Attract (-)
                </button>
                <button
                  type="button"
                  onClick={() => setChargeType("repel")}
                  className={`text-[10px] font-bold py-1.5 rounded transition-all ${
                    chargeType === "repel"
                      ? "bg-brand-ochre text-white shadow-sm"
                      : "bg-[#0a2540] text-white/70 border border-brand-cyan/10 hover:border-brand-ochre/35"
                  }`}
                >
                  Repel (+)
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#0a2540]">
            <button
              onClick={injectFlares}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] font-bold text-white bg-brand-cyan rounded hover:bg-brand-cyan/90 transition-all active:scale-95 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Inject Storm (x12)
            </button>
            <button
              onClick={clearSandbox}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[10px] font-bold text-white bg-transparent border border-white/20 rounded hover:bg-white/5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Chamber
            </button>
          </div>
        </div>

        {/* Right Side: The Interactive Canvas Area */}
        <div className="lg:col-span-3 relative bg-[#0a2540] rounded-xl overflow-hidden border border-brand-cyan/20 h-80 sm:h-96">
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onClick={handleCanvasClick}
            className="w-full h-full cursor-crosshair block"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[9px] font-mono text-white/40 pointer-events-none uppercase tracking-widest text-center">
            Click to add Orbiting Nodes | Drag central proton (+)
          </div>
        </div>
      </div>
    </div>
  );
}
