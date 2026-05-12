import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Radio,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const programCards = [
  {
    label: "01",
    title: "Entrepreneur Membership",
    text: "A flexible base for solo operators, early founders and builders entering the ecosystem.",
    icon: ShieldCheck,
    accentColor: "#60A5FA",
    bgGradient: "linear-gradient(180deg, rgba(30, 64, 175, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    label: "02",
    title: "Startup Membership",
    text: "An operating layer for teams that need space, energy, access and startup-grade infrastructure.",
    icon: Zap,
    accentColor: "#38BDF8",
    bgGradient: "linear-gradient(180deg, rgba(37, 99, 235, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%)",
    glowColor: "rgba(56, 189, 248, 0.3)",
  },
  {
    label: "03",
    title: "Launch Pad",
    text: "A founder-facing stage to introduce startups, gain visibility and enter the ecosystem with clarity.",
    icon: Sparkles,
    accentColor: "#A78BFA",
    bgGradient: "linear-gradient(180deg, rgba(79, 70, 229, 0.9) 0%, rgba(28, 25, 23, 0.95) 100%)",
    glowColor: "rgba(167, 139, 250, 0.3)",
  },
  {
    label: "04",
    title: "Day One Services",
    text: "Registration, branding, positioning, website creation and go-to-market launch support.",
    icon: Radio,
    accentColor: "#34D399",
    bgGradient: "linear-gradient(180deg, rgba(14, 116, 144, 0.9) 0%, rgba(3, 7, 18, 0.95) 100%)",
    glowColor: "rgba(52, 211, 153, 0.3)",
  },
  {
    label: "05",
    title: "Infrastructure",
    text: "Workspaces, labs, meeting rooms, event halls and support systems built for startup execution.",
    icon: Cpu,
    accentColor: "#FBBF24",
    bgGradient: "linear-gradient(180deg, rgba(180, 83, 9, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%)",
    glowColor: "rgba(251, 191, 36, 0.3)",
  },
];

const leftSignals = [
  { value: "05", label: "stack layers" },
  { value: "01", label: "ecosystem base" },
  { value: "24/7", label: "builder rhythm" },
];

const differentiators = [
  "Founder-first community, not just desks",
  "Active event culture and live ecosystem energy",
  "Bengaluru startup network advantage",
  "Execution support from idea to launch",
  "Programs, infrastructure and visibility in one place",
];

const OfferingsDifferentiationSection = ({ isActive = true }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className={`absolute inset-0 z-[49] overflow-hidden flex flex-col font-sans ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
      style={{ background: "#02040a" }} // Deepened background for better card pop
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-[94%] max-w-[1600px] flex-col px-4 pb-10 pt-12 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-6 text-center shrink-0">
          <div className="mx-auto mb-3 flex w-fit items-center gap-3">
            <span className="h-[1px] w-6 bg-sky-500/30" />
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-sky-500/80">
              System Architecture
            </span>
            <span className="h-[1px] w-6 bg-sky-500/30" />
          </div>

          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black leading-none tracking-tighter text-white">
            Programs. <span className="text-sky-400 italic">Services.</span> Infrastructure.
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-slate-400 text-sm leading-relaxed">
            Startup Park combines memberships, launch support, services and
            physical infrastructure so founders can operate from one powerful base.
          </p>

          <div className="mx-auto mt-6 flex justify-center gap-4">
            {leftSignals.map((signal) => (
              <div key={signal.label} className="px-5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-xl font-bold text-white leading-none">{signal.value}</div>
                <div className="text-[8px] uppercase tracking-widest text-sky-400 font-bold mt-1">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiator Ticker */}
        <div className="mb-8 flex justify-center gap-6 overflow-hidden whitespace-nowrap shrink-0">
            {differentiators.slice(0, 4).map((item, i) => (
              <span key={i} className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-sky-500/50" /> {item}
              </span>
            ))}
        </div>

        {/* --- OPTIMIZED CARDS GRID --- */}
        <div 
          className="flex flex-col lg:flex-row gap-4 flex-1 w-full min-h-0 items-stretch justify-center"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {programCards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const Icon = card.icon;

            return (
              <Motion.div
                key={card.label}
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{ 
                  flex: isHovered ? "0 0 450px" : "1 1 0px", // Fixed expansion to prevent empty space
                  backgroundColor: isHovered ? "transparent" : "rgba(255, 255, 255, 0.03)"
                }}
                transition={{ type: "spring", stiffness: 250, damping: 28 }}
                className="relative cursor-pointer overflow-hidden rounded-[24px] border group"
                style={{
                  background: isHovered ? card.bgGradient : undefined,
                  borderColor: isHovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                  boxShadow: isHovered ? `0 20px 40px -10px ${card.glowColor}` : "none"
                }}
              >
                <div className="relative h-full w-full flex flex-col p-7 lg:p-9">
                  
                  {/* Top Section */}
                  <div className="flex items-center justify-between shrink-0">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{ 
                        backgroundColor: isHovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.03)",
                        borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"
                      }}
                    >
                      <Icon size={20} style={{ color: isHovered ? "#fff" : card.accentColor }} />
                    </div>

                    {isHovered && (
                      <Motion.span 
                        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                        className="text-[9px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full text-white"
                      >
                        Active Layer
                      </Motion.span>
                    )}
                  </div>

                  {/* Middle Content - Vertical Text or Expanded Info */}
                  <div className="flex-1 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {isHovered ? (
                        <Motion.div
                          key="expanded"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="max-w-[340px]"
                        >
                          <h3 className="text-2xl font-black text-white mb-3 leading-tight">{card.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed font-medium">
                            {card.text}
                          </p>
                          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white mt-6 group/link">
                            Explore Program 
                            <div className="p-1 rounded-full bg-white/10 group-hover/link:bg-white/20 transition-colors">
                              <ArrowUpRight size={12} />
                            </div>
                          </div>
                        </Motion.div>
                      ) : (
                        <Motion.div 
                          key="collapsed"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex items-center justify-center h-full"
                        >
                          <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">
                            {card.title}
                          </span>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Ambient Internal Glow */}
                {isHovered && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl pointer-events-none" />
                )}
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferingsDifferentiationSection;