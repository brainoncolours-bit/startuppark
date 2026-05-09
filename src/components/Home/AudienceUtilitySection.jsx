import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";
import { Radio, ShieldCheck, Cpu, Zap, Globe } from "lucide-react";

/**
 * REFINED REVEAL STRATEGY:
 * - Cards expand horizontally (280px - 340px) to ensure exact text visibility.
 * - Exact text content preserved from your previous implementation.
 * - Geometric shapes matched to design references.
 */

const audienceData = [
  {
    label: "01",
    title: "Startups",
    icon: <Zap size={22} />,
    sub: "Set up, validate, hire, build traction, and grow inside a founder-first environment.",
    color: "#6BA8B9", 
    borderRadius: "24px 0 0 24px", 
    width: 280,
    height: 380,
    targetX: -540, 
  },
  {
    label: "02",
    title: "Entrepreneurs",
    icon: <ShieldCheck size={22} />,
    sub: "Turn ideas into companies with support, community, execution and visibility.",
    color: "#E5BB5A", 
    borderRadius: "50%", 
    width: 380, // Circle
    height: 380,
    targetX: -270, 
  },
  {
    label: "03",
    title: "Founders",
    icon: <Cpu size={22} />,
    sub: "Find a serious operating base with access to events, mentors, peers and momentum.",
    color: "#AD645F", 
    borderRadius: "0 0 160px 160px", // U-Shape
    width: 280,
    height: 380,
    targetX: 0, 
  },
  {
    label: "04",
    title: "Creators",
    icon: <Radio size={22} />,
    sub: "Collaborate with brands, startups and ecosystem builders through energy-rich spaces.",
    color: "#4BB59A", 
    borderRadius: "0 160px 0 0", // Curved top-right
    width: 280,
    height: 380,
    targetX: 270, 
  },
  {
    label: "05",
    title: "Ecosystem Builders",
    icon: <Globe size={22} />,
    sub: "Run programs, activate communities and plug into Bangalore's startup pulse.",
    color: "#D99BC4", 
    borderRadius: "160px 0 160px 0", // Leaf shape
    width: 300, // Slightly wider for longer title
    height: 380,
    targetX: 540, 
  },
];

function GeometricCard({ item, index, scrollYProgress }) {
  const spreadStart = 0.50;
  const spreadEnd = 0.62;
  
  const xPos = useTransform(scrollYProgress, [spreadStart, spreadEnd], [0, item.targetX]);
  const scalePos = useTransform(scrollYProgress, [spreadStart, spreadEnd], [0.8, 1]);
  const rotatePos = useTransform(scrollYProgress, [spreadStart, spreadEnd], [index * 2, 0]);

  const textStart = 0.62 + index * 0.02;
  const textEnd = textStart + 0.04;
  const textOpacity = useTransform(scrollYProgress, [textStart, textEnd], [0, 1]);
  const textScale = useTransform(scrollYProgress, [textStart, textEnd], [0.9, 1]);

  return (
    <Motion.div
      style={{ x: xPos, scale: scalePos, rotateZ: rotatePos, zIndex: 50 - index }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div 
        style={{
          backgroundColor: item.color,
          borderRadius: item.borderRadius,
          width: `${item.width}px`,
          height: `${item.height}px`,
        }}
        className="relative flex items-center justify-center p-8 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10"
      >
        <Motion.div 
          style={{ opacity: textOpacity, scale: textScale }}
          className="flex flex-col items-center text-center gap-6"
        >
          <div className="space-y-1">
            <span className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase block">{item.label}</span>
            <div className="w-14 h-14 rounded-full bg-black/10 border border-white/20 flex items-center justify-center text-white shadow-xl backdrop-blur-md mx-auto">
              {item.icon}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl lg:text-[26px] font-black text-white uppercase tracking-tighter leading-none">
              {item.title}
            </h3>
            <p className="text-sm lg:text-[15px] text-white/90 font-medium leading-relaxed max-w-[240px]">
              {item.sub}
            </p>
          </div>
        </Motion.div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none rounded-[inherit]" />
      </div>
    </Motion.div>
  );
}

const AudienceUtilitySection = ({ scrollYProgress, isActive = true }) => {
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });
  
  const sectionOp = useTransform(scrollYProgress, [0.46, 0.5, 0.82, 0.85], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.47, 0.52], ["40px", "0px"]);

  return (
    <Motion.div
      style={{ opacity: sectionOp }}
      className={`absolute inset-0 z-[48] bg-[#020202] overflow-hidden flex flex-col font-sans ${
        isActive ? "visible" : "invisible"
      }`}
    >
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
      
      {/* Top Header Section */}
      <div className="relative z-[60] w-full max-w-[1600px] mx-auto px-10 pt-16 flex flex-col lg:flex-row justify-between items-end">
        <div className="space-y-6">
          <Motion.div className="flex items-center gap-4">
             <div className="h-[1px] w-12 bg-blue-600" />
             <span className="text-blue-500 text-[10px] font-black tracking-[0.6em] uppercase">Identity + Fit // Phase 03</span>
          </Motion.div>
          
          <Motion.div style={{ y: titleY }} className="flex flex-wrap gap-x-8 gap-y-2">
            {["BUILD.", "LAUNCH.", "GROW."].map((word, i) => (
              <h2 key={word} className={`text-6xl lg:text-8xl font-black italic tracking-tighter ${i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600' : 'text-white'}`}>
                {word}
              </h2>
            ))}
          </Motion.div>
        </div>

        <Motion.div className="hidden lg:block max-w-sm text-right space-y-4 pb-4">
          <p className="text-white/40 text-[13px] leading-relaxed italic">
            "A physical campus fused with an ecosystem designed for innovators who want more than just a desk."
          </p>
          <div className="flex justify-end gap-2">
            {["Spaces", "Programs", "Mentors", "Momentum"].map(tag => (
              <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] uppercase font-bold text-white/50 tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </Motion.div>
      </div>

      {/* Animation Stage */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        <div className="relative w-0 h-0">
          {audienceData.map((item, i) => (
            <GeometricCard
              key={item.label}
              item={item}
              index={i}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>
      </div>

      {/* Bottom Status Section */}
      <div className="relative z-[60] px-10 pb-10 flex justify-between items-end">
        <div className="max-w-xs space-y-2">
          <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em]">Global Access Points</span>
          <p className="text-[11px] text-white/30 italic leading-snug">
            "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
          </p>
        </div>

        <div className="flex flex-col items-end gap-1 text-[8px] font-black text-white/20 tracking-[0.45em] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-green-500 animate-pulse">●</span>
            <span>Link_Status: Active</span>
          </div>
          <span>Bengaluru_Campus // 12.9716° N</span>
        </div>
      </div>
    </Motion.div>
  );
};

export default AudienceUtilitySection;