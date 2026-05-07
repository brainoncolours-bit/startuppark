import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";
import { MousePointer2, Radio, ShieldCheck, Cpu, Zap } from "lucide-react";

/**
 * REVEAL STRATEGY:
 * We use 'overflow-hidden' containers for text to create the "Slide-up Mask" effect.
 * Cards use a staggered reveal so the section feels cinematic without wobble.
 */

const audienceData = [
  {
    label: "01",
    title: "Startups",
    icon: <Zap size={14} />,
    sub: "Set up, validate, hire, build traction, and grow inside a founder-first environment.",
  },
  {
    label: "02",
    title: "Entrepreneurs",
    icon: <ShieldCheck size={14} />,
    sub: "Turn ideas into companies with support, community, execution and visibility.",
  },
  {
    label: "03",
    title: "Founders",
    icon: <Cpu size={14} />,
    sub: "Find a serious operating base with access to events, mentors, peers and momentum.",
  },
  {
    label: "04",
    title: "Creators",
    icon: <Radio size={14} />,
    sub: "Collaborate with brands, startups and ecosystem builders through energy-rich spaces.",
  },
  {
    label: "05",
    title: "Ecosystem Builders",
    icon: <ShieldCheck size={14} />,
    sub: "Run programs, activate communities and plug into Bangalore's startup pulse.",
  },
];

const featurePills = ["Spaces", "Programs", "Mentors", "Momentum"];

function AudienceCard({ item, index, smooth }) {
  const start = 0.54 + index * 0.03;
  const end = start + 0.05;

  const itemOp = useTransform(smooth, [start, end], [0, 1]);
  const itemX = useTransform(smooth, [start, end], [40, 0]);
  const itemScale = useTransform(smooth, [start, end], [0.95, 1]);
  const activeGlow = useTransform(smooth, [start, end], [
    "rgba(59,130,246,0)",
    "rgba(59,130,246,0.1)",
  ]);
  const pulseOpacity = useTransform(smooth, [start, end], [0, 1]);

  return (
    <Motion.div
      style={{ opacity: itemOp, x: itemX, scale: itemScale, backgroundColor: activeGlow }}
      className="group relative flex items-start gap-8 p-8 rounded-2xl border border-white/5 backdrop-blur-xl transition-all"
    >
      <div className="flex-shrink-0 relative">
        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-blue-500 group-hover:border-blue-500 transition-all duration-500">
          <span className="text-lg font-black italic">{item.label}</span>
        </div>
        <Motion.div
          style={{ opacity: pulseOpacity }}
          className="absolute -inset-1 border border-blue-500/30 rounded-full animate-ping"
        />
      </div>

      <div className="flex-1 pt-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <div className="text-blue-500/30 group-hover:text-blue-500 transition-colors">
            {item.icon}
          </div>
        </div>
        <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/80 transition-colors max-w-prose">
          {item.sub}
        </p>
      </div>
    </Motion.div>
  );
}

const AudienceUtilitySection = ({ scrollYProgress, isActive = true }) => {
  const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  // Section transition window is held longer so the full content can settle
  // before the next phase becomes active.
  const sectionOp = useTransform(smooth, [0.46, 0.5, 0.78, 0.81], [0, 1, 1, 0]);
  const sectionScale = useTransform(smooth, [0.46, 0.49], [1.05, 1]);

  // Background kinetic elements
  const ringRotate = useTransform(smooth, [0.47, 0.79], [0, 120]);
  const scanLineY = useTransform(smooth, [0.52, 0.77], ["-10%", "110%"]);

  // Header animation ranges
  const buildY = useTransform(smooth, [0.47, 0.5], ["100%", "0%"]);
  const launchY = useTransform(smooth, [0.48, 0.51], ["100%", "0%"]);
  const growY = useTransform(smooth, [0.49, 0.52], ["100%", "0%"]);

  return (
    <Motion.div
      style={{ opacity: sectionOp, scale: sectionScale }}
      className={`absolute inset-0 z-[48] bg-[#050505] overflow-hidden flex items-center justify-center font-sans pt-16 sm:pt-20 lg:pt-0 ${
        isActive ? "visible lg:visible" : "visible lg:invisible"
      }`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <Motion.div
        style={{ rotate: ringRotate }}
        className="absolute w-[1000px] h-[1000px] opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full" />
        <div className="absolute inset-10 border-[1px] border-blue-500/10 border-dashed rounded-full" />
        <div className="absolute inset-[20%] border-[2px] border-blue-600/5 rounded-full" />
      </Motion.div>

      <div className="relative z-30 w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 grid grid-cols-12 gap-10 lg:gap-20 items-center">
        <div className="col-span-12 lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-blue-500" />
              <span className="text-[#3b82f6] text-[10px] font-black tracking-[0.5em] uppercase">
                Identity + Fit // Phase 03
              </span>
            </Motion.div>

            <div className="space-y-1">
              <div className="overflow-hidden h-[90px]">
                <Motion.h2
                  style={{ y: buildY }}
                  className="text-8xl font-black text-white italic uppercase leading-none tracking-tighter"
                >
                  Build.
                </Motion.h2>
              </div>
              <div className="overflow-hidden h-[90px]">
                <Motion.h2
                  style={{ y: launchY }}
                  className="text-8xl font-black text-white italic uppercase leading-none tracking-tighter"
                >
                  Launch.
                </Motion.h2>
              </div>
              <div className="overflow-hidden h-[100px]">
                <Motion.h2
                  style={{ y: growY }}
                  className="text-8xl font-black italic uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600"
                >
                  Grow.
                </Motion.h2>
              </div>
            </div>
          </div>

          <Motion.div
            style={{
              opacity: useTransform(smooth, [0.51, 0.54], [0, 1]),
              y: useTransform(smooth, [0.51, 0.54], [20, 0]),
            }}
            className="space-y-8"
          >
            <p className="text-xl text-white/70 font-medium leading-relaxed max-w-md">
              Startup Park is where startups take off.{" "}
              <span className="text-white/30 italic">
                A physical campus fused with an ecosystem designed for innovators who want more than just a desk.
              </span>
            </p>

            <div className="flex flex-wrap gap-3">
              {featurePills.map((pill) => (
                <div key={pill} className="group relative">
                  <span className="relative z-10 px-4 py-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest border border-blue-500/20 bg-blue-500/5 rounded-sm overflow-hidden block transition-colors group-hover:text-white">
                    {pill}
                  </span>
                  <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4">
              <button className="group relative px-10 py-5 bg-white rounded-full transition-transform active:scale-95">
                <span className="relative z-10 text-black text-[11px] font-black uppercase tracking-widest flex items-center gap-3 group-hover:text-white transition-colors">
                  Book a Visit <MousePointer2 size={16} />
                </span>
                <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </button>
              <button className="text-white text-[11px] font-black uppercase tracking-[0.3em] hover:text-blue-400 transition-colors border-b border-white/10 pb-1">
                Apply Now
              </button>
            </div>
          </Motion.div>
        </div>

        <div className="col-span-12 lg:col-span-7 relative">
          <div className="absolute left-[-40px] top-0 bottom-0 w-[1px] bg-white/10">
            <Motion.div
              style={{ height: useTransform(smooth, [0.52, 0.68], ["0%", "100%"]) }}
              className="w-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
            />
          </div>

          <div className="flex flex-col gap-4">
            {audienceData.map((item, i) => (
              <AudienceCard key={item.label} item={item} index={i} smooth={smooth} />
            ))}
          </div>

          <Motion.div
            style={{ top: scanLineY }}
            className="absolute left-[-60px] right-[-20px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-50 pointer-events-none"
          >
            <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full blur-[2px]" />
          </Motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-16 right-16 flex justify-between items-end border-t border-white/5 pt-8">
        <Motion.div
          style={{ opacity: useTransform(smooth, [0.45, 0.48], [0, 1]) }}
          className="max-w-xs space-y-2"
        >
          <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em]">
            Global Access Points
          </span>
          <p className="text-[11px] text-white/30 italic leading-snug">
            "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
          </p>
        </Motion.div>

        <div className="flex flex-col items-end gap-1 text-[9px] font-black text-white/20 tracking-[0.5em] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-green-500 animate-pulse">●</span>
            <span>Link_Status: Active</span>
          </div>
          <span>Bengaluru_Campus // 12.9716° N</span>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,800;1,800&display=swap');
        :global(body) {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </Motion.div>
  );
};

export default AudienceUtilitySection;
