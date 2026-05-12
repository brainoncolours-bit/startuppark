import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const testimonials = [
  {
    name: "Founder Story - Reserved",
    quote: "Startup Park gave us more than space. It gave us movement, access and the right people at the right time.",
  },
  {
    name: "Startup Story - Reserved",
    quote: "From setup to visibility, the ecosystem reduced friction and helped us focus on building.",
  },
];

const CardWrapper = ({ children, className, accent = "blue" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const accentGlow = {
    blue: "rgba(15, 73, 255, 0.3)",
    white: "rgba(255, 255, 255, 0.15)",
    cyan: "rgba(34, 211, 238, 0.3)",
  }[accent];

  return (
    <Motion.div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md transition-all duration-500 ${className}`}
      style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
    >
      <Motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, ${accentGlow}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 h-full w-full p-6">{children}</div>
    </Motion.div>
  );
};

const EcosystemHighlightsSection = ({ scrollYProgress, isActive = true }) => {
  const [testIndex, setTestIndex] = useState(0);
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  const opacity = useTransform(scrollYProgress, [0.66, 0.68, 0.82, 0.85], [0, 1, 1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setTestIndex((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Motion.section
      style={{ opacity }}
      className={`absolute inset-0 z-[50] flex flex-col items-center justify-center overflow-hidden bg-[#020308] font-sans ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Background Grid - Matching System Architecture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 flex h-full w-full max-w-[1600px] items-center justify-between px-12">
        
        {/* LEFT COLUMN - Cards pushed away from title */}
        <div className="flex flex-col gap-12 w-[350px]">
          <Motion.div
            style={{ x: useTransform(smoothProgress, [0.67, 0.72], [-200, 0]) }}
          >
            <CardWrapper accent="white" className="bg-white text-black">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50">Launch Pad</span>
              <h3 className="mt-2 text-xl font-black leading-tight">A stage for founders to introduce their startup.</h3>
              <p className="mt-2 text-[11px] font-medium opacity-70">Present your startup, gain visibility, and begin your journey with momentum.</p>
            </CardWrapper>
          </Motion.div>

          <Motion.div
            style={{ x: useTransform(smoothProgress, [0.68, 0.73], [-300, 0]) }}
          >
            <CardWrapper className="bg-gradient-to-br from-blue-600/20 to-transparent">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400">Community</span>
              <div className="mt-4 space-y-2">
                {["Founder Meetups", "Live Workshops", "Pitch Rooms"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-white">
                    <div className="h-1 w-1 rounded-full bg-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </CardWrapper>
          </Motion.div>
        </div>

        {/* CENTER CONTENT - Strictly preserved spacing */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} className="mb-6 flex items-center gap-4">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Ecosystem Highlights — 05</span>
            <div className="h-px w-8 bg-blue-500" />
          </Motion.div>

          <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tighter text-white">
            A live ecosystem for <br />
            <span className="text-blue-500 italic">founders in motion.</span>
          </h2>

          <div className="mt-12 h-12 border-l border-white/10 pl-6 text-left">
            <AnimatePresence mode="wait">
              <Motion.p
                key={testIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-medium italic text-slate-400"
              >
                "{testimonials[testIndex].quote}"
              </Motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
             <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Ready to Execute?</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Join the 05 layers of Startup Park</p>
             </div>
             <div className="flex gap-4">
                <button className="rounded-full bg-white px-10 py-4 text-[10px] font-black uppercase tracking-widest text-black">Join Today</button>
                <button className="rounded-full border border-white/10 bg-white/5 px-10 py-4 text-[10px] font-black uppercase tracking-widest text-white">Learn More</button>
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Cards pushed away from title */}
        <div className="flex flex-col gap-12 w-[350px]">
          <Motion.div
            style={{ x: useTransform(smoothProgress, [0.67, 0.72], [200, 0]) }}
          >
            <CardWrapper>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500">Day One Services</span>
              <h3 className="mt-2 text-xl font-black leading-tight text-white">Registration. Branding. Website.</h3>
              <p className="mt-2 text-[11px] font-medium text-slate-400">A professional service layer for company basics.</p>
            </CardWrapper>
          </Motion.div>

          <Motion.div
            style={{ x: useTransform(smoothProgress, [0.68, 0.73], [300, 0]) }}
          >
            <CardWrapper className="bg-black/80">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400">Ecosystem Pulse</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Access", "Momentum", "Growth"].map(tag => (
                  <span key={tag} className="border border-cyan-500/30 px-3 py-1 text-[9px] font-black uppercase tracking-tighter text-cyan-400">{tag}</span>
                ))}
              </div>
            </CardWrapper>
          </Motion.div>
        </div>

      </div>
    </Motion.section>
  );
};

export default EcosystemHighlightsSection;