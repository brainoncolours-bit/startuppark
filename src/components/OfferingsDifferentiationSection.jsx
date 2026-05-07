import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";

const programCards = [
  {
    label: "01",
    title: "Entrepreneur Membership",
    text: "A flexible base for solo operators, early founders and builders entering the ecosystem.",
  },
  {
    label: "02",
    title: "Startup Membership",
    text: "An operating layer for teams that need space, energy, access and startup-grade infrastructure.",
  },
  {
    label: "03",
    title: "Launch Pad",
    text: "A founder-facing stage to introduce startups, gain visibility and enter the ecosystem with clarity.",
  },
  {
    label: "04",
    title: "Day One Services",
    text: "Registration, branding, positioning, website creation and go-to-market launch support.",
  },
  {
    label: "05",
    title: "Infrastructure",
    text: "Workspaces, labs, meeting rooms, event halls and support systems built for startup execution.",
  },
];

const differentiators = [
  "Founder-first community, not just desks",
  "Active event culture and live ecosystem energy",
  "Bengaluru startup network advantage",
  "Execution support from idea to launch",
  "Programs, infrastructure and visibility in one place",
];

const leftSignals = [
  { value: "05", label: "stack layers" },
  { value: "01", label: "ecosystem base" },
  { value: "24/7", label: "builder rhythm" },
];

const cardSlots = {
  "01": { top: "8%", left: "2%", width: "min(22vw, 290px)", zIndex: 1 },
  "02": { top: "8%", right: "2%", width: "min(22vw, 290px)", zIndex: 1 },
  "03": {
    top: "42%",
    left: "50%",
    width: "min(26vw, 360px)",
    transform: "translateX(-50%)",
    zIndex: 5,
  },
  "04": { bottom: "8%", left: "4%", width: "min(22vw, 290px)", zIndex: 1 },
  "05": { bottom: "8%", right: "4%", width: "min(22vw, 290px)", zIndex: 1 },
};

function Gyroscope({ scrollYProgress }) {
  const rotateX = useTransform(scrollYProgress, [0.56, 0.82], [0, 14]);
  const rotateY = useTransform(scrollYProgress, [0.56, 0.82], [0, -20]);
  const rotateZ = useTransform(scrollYProgress, [0.56, 0.82], [0, 16]);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
      <Motion.div
        style={{ rotateX, rotateY, rotateZ }}
        className="absolute w-[40vw] h-[40vw] rounded-full border-[1px] border-dashed border-cyan-400/16"
      />
      <Motion.div
        style={{ rotateX: rotateY, rotateY: rotateZ, rotateZ: rotateX }}
        className="absolute w-[30vw] h-[30vw] rounded-full border border-blue-500/16"
      />
    </div>
  );
}

function PremiumCard({ card, index, scrollYProgress, mobile = false }) {
  const featured = card.label === "03";
  
  // Staggered Arrival Logic: Each card has its own arrival window
  const start = 0.79 + index * 0.025; 
  const end = start + 0.06;

  // Transform values
  const rawOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const rawX = useTransform(scrollYProgress, [start, end], [featured ? 0 : -14, 0]);
  const rawY = useTransform(scrollYProgress, [start, end], [36, 0]);
  const rawScale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
  const rawRotate = useTransform(scrollYProgress, [start, end], [featured ? 0 : -2, 0]);

  // Apply Spring to smooth out the "Shake" and add the "Magnetic Pull" feel
  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };
  const opacity = useSpring(rawOpacity, springConfig);
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const rotate = useSpring(rawRotate, springConfig);

  const shell = (
    <div className={`relative overflow-hidden rounded-[24px] p-[1px] shadow-2xl transition-shadow duration-500 ${
      featured ? "shadow-cyan-500/30" : "shadow-black/60"
    }`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.35),rgba(59,130,246,0.15),rgba(255,255,255,0.04))] opacity-25" />
      <div className="relative h-full w-full rounded-[23px] bg-[#08111f]/95 backdrop-blur-xl p-6 flex flex-col justify-between border border-white/10 min-h-[208px]">
        <div className="mb-4 flex justify-between items-center">
          <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${
            featured ? "text-cyan-300" : "text-blue-300"
          }`}>
            {card.label}
          </span>
          <div className={`h-2 w-2 rounded-full ${
              featured ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" : "bg-blue-400"
            }`}
          />
        </div>
        <h3 className={`font-bold mb-3 ${featured ? 'text-2xl md:text-3xl text-white' : 'text-xl text-slate-100'}`}>
          {card.title}
        </h3>
        <p className={`text-sm leading-relaxed ${featured ? 'text-slate-200' : 'text-slate-400'}`}>
          {card.text}
        </p>
      </div>
    </div>
  );

  if (mobile) {
    return (
      <Motion.div style={{ opacity, x, y, scale }} className="will-change-transform">
        {shell}
      </Motion.div>
    );
  }

  return (
    <div className="absolute hidden lg:block" style={cardSlots[card.label]}>
      <Motion.div
        style={{ x, y, rotate, scale, opacity }}
        className="will-change-transform"
      >
        {shell}
      </Motion.div>
    </div>
  );
}

const OfferingsDifferentiationSection = ({ scrollYProgress, isActive = true }) => {
  // Master Section Transforms
  const sectionOpacity = useTransform(scrollYProgress, [0.77, 0.8, 0.94, 0.96], [0, 1, 1, 0]);
  const sectionY = useTransform(scrollYProgress, [0.77, 0.8], [40, 0]);

  // Left Column Entrance
  const leftBlockY = useSpring(useTransform(scrollYProgress, [0.79, 0.85], [30, 0]), { stiffness: 50, damping: 20 });
  const leftBlockOpacity = useTransform(scrollYProgress, [0.79, 0.85], [0, 1]);

  return (
    <Motion.section
      style={{ opacity: sectionOpacity, y: sectionY }}
      className={`relative lg:absolute inset-0 z-[49] overflow-hidden bg-[#050816] text-white flex items-center min-h-[100svh] lg:min-h-0 ${isActive ? "visible lg:visible" : "visible lg:invisible"}`}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-800/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-800/10 blur-[140px]" />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 items-center">
        
        {/* LEFT PANE */}
        <Motion.div 
          style={{ y: leftBlockY, opacity: leftBlockOpacity }}
          className="col-span-12 lg:col-span-4 flex flex-col justify-center h-full relative z-40"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2.5 backdrop-blur-md w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-100">
              System Architecture
            </span>
          </div>

          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95]">
            <span className="block text-white">Programs.</span>
            <span className="block text-cyan-300">Services.</span>
            <span className="block text-slate-400">Infrastructure.</span>
          </h2>

          <p className="mb-8 max-w-md text-sm sm:text-lg leading-relaxed text-slate-300 font-light">
            Startup Park combines memberships, launch support, services and
            physical infrastructure so founders can operate from one powerful base.
          </p>

          <div className="mb-10 grid grid-cols-3 gap-4 border-l border-cyan-500/20 pl-6">
            {leftSignals.map((signal) => (
              <div key={signal.label}>
                <div className="text-xl sm:text-2xl font-black text-white">{signal.value}</div>
                <div className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-cyan-300 font-bold">
                  {signal.label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-auto">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 border-b border-white/10 pb-3">
              Core Differentiators
            </p>
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-4 group">
                  <div className="mt-1.5 h-[1px] w-6 bg-cyan-400/50 group-hover:bg-cyan-300 group-hover:w-10 transition-all duration-300" />
                  <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>

        {/* RIGHT PANE: ORBITAL CORE */}
        <div className="col-span-12 lg:col-span-8 relative h-full min-h-[72vh] lg:min-h-full w-full overflow-visible">
          <div className="hidden lg:block">
            <Gyroscope scrollYProgress={scrollYProgress} />
          </div>
          
          <div className="relative z-10 hidden h-full lg:block">
            {programCards.map((card, index) => (
              <PremiumCard
                key={card.label}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 px-2 sm:px-4 md:px-8 py-8 lg:hidden">
            {programCards.map((card, index) => (
              <PremiumCard
                key={card.label}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
                mobile={true}
              />
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default OfferingsDifferentiationSection;





