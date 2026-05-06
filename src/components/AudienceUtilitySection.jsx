import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";
import { Rocket, Target, Zap, Users, Globe, ArrowRight, MousePointer2, Sparkles, MoveRight } from "lucide-react";

const audienceCards = [
  {
    title: "Startups",
    icon: <Rocket className="w-6 h-6" />,
    text: "Set up, validate, hire, build traction, and grow inside a founder-first environment.",
    color: "#3b82f6"
  },
  {
    title: "Entrepreneurs",
    icon: <Target className="w-6 h-6" />,
    text: "Turn ideas into companies with support, community, execution and visibility.",
    color: "#60a5fa"
  },
  {
    title: "Founders",
    icon: <Zap className="w-6 h-6" />,
    text: "Find a serious operating base with access to events, mentors, peers and momentum.",
    color: "#93c5fd"
  },
  {
    title: "Creators",
    icon: <Users className="w-6 h-6" />,
    text: "Collaborate with brands, startups and ecosystem builders through energy-rich spaces.",
    color: "#2563eb"
  },
  {
    title: "Ecosystem Builders",
    icon: <Globe className="w-6 h-6" />,
    text: "Run programs, activate communities and plug into Bangalore's startup pulse.",
    color: "#1d4ed8"
  },
];

const AudienceUtilitySection = ({ scrollYProgress }) => {
  // High-precision smooth spring
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  // 1. SECTION LIFECYCLE
  const sectionOpacity = useTransform(smoothProgress, [0.43, 0.46, 0.64, 0.68], [0, 1, 1, 0]);
  const sectionScale = useTransform(smoothProgress, [0.43, 0.46, 0.64, 0.68], [0.9, 1, 1, 0.95]);

  // 2. LINE-BY-LINE TEXT REVEAL LOGIC
  const title1Y = useTransform(smoothProgress, [0.44, 0.46], [50, 0]);
  const title1Op = useTransform(smoothProgress, [0.44, 0.46], [0, 1]);
  
  const title2Y = useTransform(smoothProgress, [0.45, 0.47], [50, 0]);
  const title2Op = useTransform(smoothProgress, [0.45, 0.47], [0, 1]);

  const title3Y = useTransform(smoothProgress, [0.46, 0.48], [50, 0]);
  const title3Op = useTransform(smoothProgress, [0.46, 0.48], [0, 1]);

  // Paragraph Reveal
  const introLine1Op = useTransform(smoothProgress, [0.48, 0.50], [0, 1]);
  const introLine2Op = useTransform(smoothProgress, [0.49, 0.51], [0, 1]);

  // 3. BACKGROUND ANIMATIONS
  const bgRotation = useTransform(smoothProgress, [0.45, 0.65], [0, 30]);
  const blueGlowScale = useTransform(smoothProgress, [0.45, 0.55], [0.8, 1.2]);

  return (
    <Motion.div
      style={{ 
        opacity: sectionOpacity, 
        scale: sectionScale,
        perspective: "1500px" 
      }}
      className="absolute inset-0 z-[48] bg-[#050505] overflow-hidden flex flex-col items-center justify-center py-20"
    >
      {/* --- STYLISH BACKGROUND ELEMENTS --- */}
      <Motion.div 
        style={{ rotate: bgRotation }}
        className="absolute inset-0 opacity-30 pointer-events-none"
      >
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }} />
      </Motion.div>

      <Motion.div 
        style={{ scale: blueGlowScale }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full" 
      />

      <div className="relative z-50 w-full max-w-[1480px] px-6 md:px-12 text-center">
        {/* --- SECTION 1: STAGGERED HERO TEXT --- */}
        <div className="mx-auto max-w-6xl mb-10 md:mb-12">
        <Motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-black text-[10px] md:text-[12px] uppercase tracking-[0.85em] block mb-5"
        >
          IDENTITY + FIT — PHASE 03
        </Motion.span>

        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex flex-wrap items-center justify-center gap-3"
        >
          {['Founder-first campus', 'Launch support', 'Community + events'].map((pill, i) => (
            <span
              key={pill}
              className={`px-4 py-2 rounded-full border text-[10px] md:text-[11px] font-black uppercase tracking-[0.28em] backdrop-blur-md ${
                i === 0
                  ? 'bg-blue-500/10 border-blue-400/20 text-blue-300'
                  : i === 1
                    ? 'bg-indigo-500/10 border-indigo-400/20 text-indigo-200'
                    : 'bg-white/5 border-white/10 text-white/70'
              }`}
            >
              {pill}
            </span>
          ))}
        </Motion.div>

        <div className="flex flex-col items-center gap-1.5 mb-3 md:mb-4">
            <Motion.h2 style={{ y: title1Y, opacity: title1Op }} className="text-[clamp(3.5rem,8vw,6.8rem)] font-black text-white tracking-tighter leading-[0.82] italic uppercase">
                Build. Launch.
            </Motion.h2>
            <Motion.h2 style={{ y: title2Y, opacity: title2Op }} className="text-[clamp(3.5rem,8vw,6.8rem)] font-black tracking-tighter leading-[0.82] italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
                Grow.
            </Motion.h2>
            <Motion.p 
              style={{ opacity: title3Op, y: title3Y }} 
              className="text-base md:text-xl font-bold text-white mt-2 tracking-tight"
            >
              All from <span className="text-blue-300">Startup Park</span>.
            </Motion.p>
        </div>

        {/* STAGGERED PARAGRAPH REVEAL */}
        <div className="flex flex-col items-center space-y-3 md:space-y-4">
            <Motion.p style={{ opacity: introLine1Op }} className="text-lg md:text-xl text-white font-medium max-w-2xl">
                Startup Park is where startups take off.
            </Motion.p>
            <Motion.p style={{ opacity: introLine2Op }} className="text-lg md:text-xl text-white/50 leading-relaxed font-medium max-w-3xl">
                A physical campus fused with an ecosystem designed for entrepreneurs, innovators and builders who want <span className="text-blue-400 italic">more than just a desk.</span>
            </Motion.p>
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}e
              className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-1"
            >
              {['Spaces', 'Programs', 'Mentors', 'Momentum'].map((item, i) => (
                <span
                  key={item}
                  className={`px-3.5 py-2 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] border ${
                    i === 0
                      ? 'bg-white/6 text-white border-white/10'
                      : i === 1
                        ? 'bg-blue-500/10 text-blue-200 border-blue-400/20'
                        : i === 2
                          ? 'bg-cyan-500/10 text-cyan-100 border-cyan-400/20'
                          : 'bg-indigo-500/10 text-indigo-100 border-indigo-400/20'
                  }`}
                >
                  {item}
                </span>
              ))}
            </Motion.div>
        </div>
      </div>
      </div>

      {/* --- SECTION 2: SEQUENTIAL CARD REVEAL --- */}
      <div className="relative z-40 grid w-full grid-cols-1 gap-4 md:grid-cols-5 mb-14 md:mb-16">
          {audienceCards.map((card, idx) => {
            // Each card has its own reveal trigger based on scroll
            const startScroll = 0.51 + (idx * 0.02);
            const endScroll = 0.55 + (idx * 0.02);
            
            const cardY = useTransform(smoothProgress, [startScroll, endScroll], [60, 0]);
            const cardOp = useTransform(smoothProgress, [startScroll, endScroll], [0, 1]);
            const cardScale = useTransform(smoothProgress, [startScroll, endScroll], [0.9, 1]);

            return (
              <Motion.div
                key={card.title}
                style={{ y: cardY, opacity: cardOp, scale: cardScale }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  backgroundColor: "rgba(59,130,246,0.1)",
                  borderColor: "rgba(59,130,246,0.5)"
                }}
                className="group relative h-auto rounded-[3rem] bg-white/5 border border-white/10 p-6 md:p-7 flex flex-col justify-between overflow-hidden backdrop-blur-2xl transition-all duration-500 shadow-2xl"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[60px] group-hover:opacity-100 opacity-0 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white transition-transform group-hover:scale-110 group-hover:rotate-12"
                       style={{ background: `linear-gradient(135deg, ${card.color}44, transparent)`, border: `1px solid ${card.color}66` }}>
                    {card.icon}
                  </div>
                  <p className="text-[10px] font-bold text-blue-400/50 uppercase tracking-[0.4em] mb-3">Target</p>
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">{card.title}</h3>
                </div>

                <div className="relative z-10">
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/90 transition-colors">
                    {card.text}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    JOIN THE PULSE <ArrowRight size={16} className="text-blue-500" />
                  </div>
                </div>
              </Motion.div>
            );
          })}
      </div>

      {/* --- SECTION 3: THE FOOTER / WHAT IS SECTION --- */}
      <Motion.div 
        style={{ 
          opacity: useTransform(smoothProgress, [0.68, 0.72], [0, 1]),
          y: useTransform(smoothProgress, [0.68, 0.72], [32, 0])
        }}
        className="w-full max-w-7xl grid grid-cols-1 gap-10 items-center px-6 lg:grid-cols-12"
      >
        <div className="lg:col-span-6">
           <div className="relative p-8 md:p-10 rounded-[3.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
              <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.5em] mb-6">WHAT IS STARTUP PARK</h4>
              <p className="text-white/80 leading-relaxed text-lg font-medium italic">
                "More than a workspace, <span className="text-white font-black">Startup Park is a founder ecosystem</span> with community, events, launch support, execution services and infrastructure that helps people move from idea to momentum."
              </p>
           </div>
        </div>

        <div className="lg:col-span-6 flex flex-col md:flex-row gap-4 justify-center lg:justify-end">
            <button className="group relative px-10 py-5 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-3">Book a Visit <MousePointer2 size={16}/></span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            
            <div className="flex flex-col gap-3">
                <button className="px-10 py-5 rounded-2xl border-2 border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                    Apply Now
                </button>
                <button className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all">
                    Launch Startup <MoveRight size={16} />
                </button>
            </div>
        </div>
      </Motion.div>

      {/* Blueprint Visual Indicator */}
      <div className="absolute bottom-10 left-10 hidden md:block">
          <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-blue-500/50" />
              <span className="text-[9px] font-bold text-blue-500/50 uppercase tracking-[1em]">SYSTEM_READY</span>
          </div>
      </div>
    </Motion.div>
  );
};

export default AudienceUtilitySection;
