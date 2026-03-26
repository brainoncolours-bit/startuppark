import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform, useSpring } from "framer-motion";

// --- 0. ASSET CONSTANTS ---
const IMG_1 = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000"; // Abstract blue tech
const IMG_2 = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000"; // Hardware
const IMG_3 = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"; // Data globe

// --- 1. THE OVERTURE (0% - 25%) ---
const Overture = ({ progress }) => {
  const y = useTransform(progress, [0, 0.25], ["0%", "-100%"]);
  const scale = useTransform(progress, [0, 0.2], [1, 1.5]);
  const opacity = useTransform(progress, [0.15, 0.25], [1, 0]);

  return (
    <Motion.div style={{ y, opacity }} className="absolute inset-0 z-[60] bg-white flex flex-col items-center justify-center overflow-hidden">
      <Motion.div style={{ scale }} className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
        <img src={IMG_1} className="w-full h-full object-cover grayscale" alt="hero-bg" />
      </Motion.div>
      
      <div className="relative z-10 text-center">
        <div className="flex gap-1 justify-center mb-8">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
        </div>
        <h1 className="text-[14vw] font-black text-black leading-[0.8] tracking-tighter uppercase">
          Van<br/><span className="text-blue-600">Guard</span>
        </h1>
        <div className="mt-12 flex items-center justify-center gap-4 font-mono text-[10px] text-zinc-400 tracking-[0.5em]">
          <span>VER: 2026.04</span>
          <div className="w-12 h-px bg-zinc-200" />
          <span>ISO_9001</span>
        </div>
      </div>
    </Motion.div>
  );
};

// --- 2. THE MECHANICAL FRACTURE (25% - 50%) ---
const Fracture = ({ progress }) => {
  const leftX = useTransform(progress, [0.25, 0.45], ["-100%", "0%"]);
  const rightX = useTransform(progress, [0.25, 0.45], ["100%", "0%"]);
  const opacity = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);

  return (
    <Motion.div style={{ opacity }} className="absolute inset-0 z-[50] flex overflow-hidden bg-black">
      {/* Left Panel: Content */}
      <Motion.div style={{ x: leftX }} className="w-1/2 h-full bg-zinc-100 p-20 flex flex-col justify-center border-r border-black/10">
        <div className="mb-10 text-blue-600">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        </div>
        <h2 className="text-7xl font-black text-black leading-none uppercase italic">The High<br/>Friction<br/>Barrier.</h2>
        <p className="mt-8 text-zinc-600 font-mono text-xs uppercase tracking-widest leading-relaxed">
          Legacy systems create drag. We provide the lubrication of modern architecture to achieve terminal velocity.
        </p>
      </Motion.div>

      {/* Right Panel: Image Grid */}
      <Motion.div style={{ x: rightX }} className="w-1/2 h-full bg-blue-600 grid grid-cols-2 grid-rows-2 gap-2 p-2">
        {[IMG_1, IMG_2, IMG_3, IMG_1].map((img, i) => (
            <div key={i} className="relative overflow-hidden group">
                <img src={img} className="w-full h-full object-cover grayscale contrast-150 hover:grayscale-0 transition-all duration-500" alt="grid" />
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
                <div className="absolute bottom-4 left-4 font-mono text-[8px] text-white">DATA_CHIP_0{i}</div>
            </div>
        ))}
      </Motion.div>
    </Motion.div>
  );
};

// --- 3. THE INFRASTRUCTURE (50% - 75%) ---
const Infrastructure = ({ progress }) => {
  const scale = useTransform(progress, [0.5, 0.75], [0.8, 1]);
  const opacity = useTransform(progress, [0.5, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const rotate = useTransform(progress, [0.5, 0.75], [5, 0]);

  return (
    <Motion.div style={{ opacity, scale, rotate }} className="absolute inset-0 z-[40] bg-[#f0f0f0] p-12 flex flex-col">
      <div className="flex justify-between items-end border-b-4 border-black pb-6">
        <h2 className="text-9xl font-black text-black tracking-tighter">INFRA.</h2>
        <div className="text-right font-mono text-[10px] text-zinc-500">
            [ COORDINATES ]<br/>34.0522 N, 118.2437 W
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-3 gap-12 pt-12">
        {[
            { title: "CORE_OPS", desc: "The central nervous system of your digital estate.", icon: "01" },
            { title: "EDGE_NODE", desc: "Localized processing for zero-latency execution.", icon: "02" },
            { title: "SYNAPSE", desc: "AI-driven routing for optimized data flow.", icon: "03" }
        ].map((item, i) => (
            <div key={i} className="flex flex-col justify-between border-l border-zinc-300 pl-8 group">
                <div>
                    <span className="text-blue-600 font-black text-4xl italic">{item.icon}</span>
                    <h3 className="text-3xl font-black text-black mt-4">{item.title}</h3>
                    <p className="mt-4 text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="h-48 w-full bg-zinc-200 mt-8 overflow-hidden">
                    <img src={i === 0 ? IMG_2 : i === 1 ? IMG_3 : IMG_1} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" alt="feature" />
                </div>
            </div>
        ))}
      </div>
    </Motion.div>
  );
};

// --- 4. THE TERMINAL (75% - 100%) ---
const Terminal = ({ progress }) => {
  const clipPath = useTransform(progress, [0.8, 0.95], ["circle(0% at 50% 50%)", "circle(100% at 50% 50%)"]);
  
  return (
    <Motion.div style={{ clipPath }} className="absolute inset-0 z-[70] bg-blue-600 flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img src={IMG_3} className="w-full h-full object-cover mix-blend-overlay" alt="final-bg" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 inline-block p-4 border-4 border-white">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </div>
        <h2 className="text-[10vw] font-black leading-none mb-4 italic uppercase">Deploy.</h2>
        <p className="text-xl font-mono opacity-80 mb-12 max-w-2xl mx-auto uppercase tracking-tighter">
          Your infrastructure is ready for the 2026 standard. Initialize the protocol today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-12 py-5 text-xl font-black uppercase hover:bg-black hover:text-white transition-colors">
                Initialize System
            </button>
            <button className="border-2 border-white px-12 py-5 text-xl font-black uppercase hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
            </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 font-mono text-[10px] opacity-40">
        VAN_GUARD // ALL RIGHTS RESERVED 2026
      </div>
    </Motion.div>
  );
};

export default function VanguardPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 25 });

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-zinc-100">
      {/* GLOBAL SCANLINE EFFECT */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Overture progress={smoothProgress} />
        <Fracture progress={smoothProgress} />
        <Infrastructure progress={smoothProgress} />
        <Terminal progress={smoothProgress} />
      </div>

      {/* PROGRESS HUD */}
      <div className="fixed left-10 bottom-10 z-[100] flex items-end gap-4">
        <div className="h-32 w-1 bg-zinc-200 relative">
            <Motion.div 
                style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }} 
                className="absolute top-0 w-full bg-blue-600" 
            />
        </div>
        <div className="font-mono text-[10px] text-zinc-500 flex flex-col">
            <span>ISO_CORE</span>
            <span className="text-black font-bold">STATUS: ACTIVE</span>
        </div>
      </div>
    </div>
  );
}