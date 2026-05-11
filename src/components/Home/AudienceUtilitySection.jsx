import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";
import { Radio, ShieldCheck, Cpu, Zap, Globe } from "lucide-react";

/**
 * LIGHT THEME & 3-BEAT HORIZONTAL REVEAL
 * - Cards sit in a responsive flex row (no overlapping/absolute stacking).
 * - Exact text and scroll trigger windows preserved from your base code.
 * - 3-Beat Reveal: Center (Founders) -> Inner (Entrep/Creators) -> Outer (Startups/Builders).
 */

const audienceData = [
  {
    label: "01",
    title: "Startups",
    icon: <Zap size={22} />,
    sub: "Set up, validate, hire, build traction, and grow inside a founder-first environment.",
    beat: 3, // Outer
  },
  {
    label: "02",
    title: "Entrepreneurs",
    icon: <ShieldCheck size={22} />,
    sub: "Turn ideas into companies with support, community, execution and visibility.",
    beat: 2, // Inner
  },
  {
    label: "03",
    title: "Founders",
    icon: <Cpu size={22} />,
    sub: "Find a serious operating base with access to events, mentors, peers and momentum.",
    beat: 1, // Center
  },
  {
    label: "04",
    title: "Creators",
    icon: <Radio size={22} />,
    sub: "Collaborate with brands, startups and ecosystem builders through energy-rich spaces.",
    beat: 2, // Inner
  },
  {
    label: "05",
    title: "Ecosystem Builders",
    icon: <Globe size={22} />,
    sub: "Run programs, activate communities and plug into Bangalore's startup pulse.",
    beat: 3, // Outer
  },
];

function GeometricCard({ item, index, scrollYProgress }) {
  // Syncing with your base code's animation window (0.415 to 0.49)
  // Beat 1: 0.415, Beat 2: 0.435, Beat 3: 0.455
  const beatStart = 0.395 + (item.beat * 0.02);
  const beatEnd = beatStart + 0.04;
  
  const yPos = useTransform(scrollYProgress, [beatStart, beatEnd], [40, 0]);
  const scalePos = useTransform(scrollYProgress, [beatStart, beatEnd], [0.8, 1]);
  const opacityPos = useTransform(scrollYProgress, [beatStart, beatEnd], [0, 1]);

  return (
    <Motion.div
      style={{ y: yPos, scale: scalePos, opacity: opacityPos }}
      className="flex-1 min-w-[200px] max-w-[260px] h-[380px] z-10 relative"
    >
      <div className="h-full w-full p-7 rounded-[28px] border border-gray-200 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between group hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500">
        <div className="flex flex-col items-start gap-4">
          <div className="w-full flex justify-between items-start">
            <span className="text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase block">
              Phase {item.label}
            </span>
            <div className="text-gray-300 group-hover:text-blue-500 transition-colors">
              {item.icon}
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <h3 className="text-2xl lg:text-[26px] font-black text-gray-900 uppercase tracking-tighter leading-none">
              {item.title}
            </h3>
            <p className="text-[12px] lg:text-[13px] text-gray-500 font-medium leading-relaxed max-w-[240px]">
              {item.sub}
            </p>
          </div>
        </div>
        
        <div className="w-8 h-[2px] bg-blue-500 rounded-full group-hover:w-16 transition-all duration-500" />
      </div>
    </Motion.div>
  );
}

const AudienceUtilitySection = ({ scrollYProgress, isActive = true }) => {
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 115, damping: 24 });
  
  // Kept your exact timing windows
  const sectionOp = useTransform(scrollYProgress, [0.38, 0.41, 0.565, 0.59], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.39, 0.43], ["40px", "0px"]);

  return (
    <Motion.div
      style={{ opacity: sectionOp }}
      className={`absolute inset-0 z-[48] bg-white overflow-hidden flex flex-col font-sans ${
        isActive ? "visible" : "invisible"
      }`}
    >
      {/* Background Polish (Light Grid) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
      
      {/* Top Header Section */}
      <div className="relative z-[60] w-full max-w-[1600px] mx-auto px-10 pt-24 md:pt-28 lg:pt-28 flex flex-col lg:flex-row justify-between items-end">
        <div className="space-y-6">
          <Motion.div className="flex items-center gap-4">
             <div className="h-[1px] w-12 bg-blue-600" />
             <span className="text-blue-600 text-[10px] font-black tracking-[0.6em] uppercase">Identity + Fit // Phase 03</span>
          </Motion.div>
          
          {/* Main Title - Forced to ONE LINE */}
          <Motion.div style={{ y: titleY }} className="flex flex-row flex-nowrap items-center gap-x-4 lg:gap-x-8 whitespace-nowrap overflow-visible">
            {["BUILD.", "LAUNCH.", "GROW."].map((word, i) => (
              <h2 key={word} className={`text-5xl md:text-6xl lg:text-8xl font-black italic tracking-tighter ${i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600' : 'text-gray-900'}`}>
                {word}
              </h2>
            ))}
          </Motion.div>
        </div>

        <Motion.div className="hidden lg:block max-w-sm text-right space-y-4 pb-4">
          <p className="text-gray-500 text-[13px] leading-relaxed italic">
            "A physical campus fused with an ecosystem designed for innovators who want more than just a desk."
          </p>
          <div className="flex justify-end gap-2">
            {["Spaces", "Programs", "Mentors", "Momentum"].map(tag => (
              <span key={tag} className="px-3 py-1 border border-gray-200 text-[9px] uppercase font-bold text-gray-400 tracking-widest bg-white">
                {tag}
              </span>
            ))}
          </div>
        </Motion.div>
      </div>

      {/* Animation Stage - 3-Beat Horizontal Flex Container */}
      <div className="relative flex-1 w-full flex items-center justify-center px-6">
        <div className="w-full max-w-[1400px] mx-auto flex gap-4 lg:gap-6 justify-center items-center">
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
          <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.5em]">Global Access Points</span>
          <p className="text-[11px] text-gray-400 italic leading-snug font-medium">
            "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
          </p>
        </div>

        <div className="flex flex-col items-end gap-1 text-[8px] font-black text-gray-400 tracking-[0.45em] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-green-500 animate-pulse">●</span>
            <span className="text-gray-600">Link_Status: Active</span>
          </div>
          <span>Bengaluru_Campus // 12.9716° N</span>
        </div>
      </div>
    </Motion.div>
  );
};

export default AudienceUtilitySection;