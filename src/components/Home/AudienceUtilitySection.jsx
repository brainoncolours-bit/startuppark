import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";
import { MousePointer2, Radio, ShieldCheck, Cpu, Zap } from "lucide-react";

/**
 * REVEAL STRATEGY:
 * - Use raw scroll progress for section gating to avoid spring overshoot flashes
 * - No whileInView re-trigger on the intro label
 * - Cards reveal sequentially and stay stable
 * - Exact text content preserved
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

function AudienceCard({ item, index, scrollYProgress }) {
  const start = 0.54 + index * 0.03;
  const end = start + 0.05;

  const itemOp = useTransform(scrollYProgress, [start, end], [0, 1]);
  const itemX = useTransform(scrollYProgress, [start, end], [40, 0]);
  const itemScale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
  const activeGlow = useTransform(scrollYProgress, [start, end], [
    "rgba(59,130,246,0)",
    "rgba(59,130,246,0.1)",
  ]);
  const pulseOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <Motion.div
      style={{
        opacity: itemOp,
        x: itemX,
        scale: itemScale,
        backgroundColor: activeGlow,
      }}
      className="group relative flex items-start gap-6 xl:gap-8 p-6 xl:p-7 rounded-2xl border border-white/5 backdrop-blur-xl transition-all"
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

      <div className="flex-1 pt-1 min-w-0">
        <div className="flex items-center justify-between mb-2 gap-4">
          <h3 className="text-xl xl:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <div className="text-blue-500/30 group-hover:text-blue-500 transition-colors shrink-0">
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

  const sectionOp = useTransform(scrollYProgress, [0.46, 0.5, 0.78, 0.81], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0.46, 0.49], [1, 1]);

  const ringRotate = useTransform(smooth, [0.47, 0.79], [0, 90]);
  const scanLineY = useTransform(smooth, [0.52, 0.77], ["-8%", "108%"]);

  const buildY = useTransform(scrollYProgress, [0.47, 0.5], ["100%", "0%"]);
  const launchY = useTransform(scrollYProgress, [0.48, 0.51], ["100%", "0%"]);
  const growY = useTransform(scrollYProgress, [0.49, 0.52], ["100%", "0%"]);

  return (
    <Motion.div
      style={{ opacity: sectionOp, scale: sectionScale }}
      aria-hidden={!isActive}
      className={`absolute inset-0 z-[48] bg-[#050505] overflow-hidden flex items-start justify-center font-sans pt-24 sm:pt-24 lg:pt-24 xl:pt-24 ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
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
        className="absolute w-[860px] h-[860px] lg:w-[1000px] lg:h-[1000px] opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full" />
        <div className="absolute inset-10 border-[1px] border-blue-500/10 border-dashed rounded-full" />
        <div className="absolute inset-[20%] border-[2px] border-blue-600/5 rounded-full" />
      </Motion.div>

      <div className="relative z-30 w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-12 gap-5 lg:gap-8 xl:gap-10 items-start pt-2 lg:pt-0">
        <div className="col-span-12 lg:col-span-5 space-y-5 lg:space-y-6 xl:space-y-8 pt-1 lg:pt-2">
          <div className="space-y-3 lg:space-y-4">
            <Motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0.455, 0.485], [0, 1]),
                x: useTransform(scrollYProgress, [0.455, 0.485], [-20, 0]),
              }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-blue-500" />
              <span className="text-[#3b82f6] text-[10px] font-black tracking-[0.5em] uppercase">
                Identity + Fit // Phase 03
              </span>
            </Motion.div>

            <div className="space-y-1">
              <div className="overflow-hidden h-[78px] sm:h-[86px] lg:h-[92px]">
                <Motion.h2
                  style={{ y: buildY }}
                  className="text-[3.8rem] sm:text-6xl lg:text-7xl font-black text-white italic uppercase leading-none tracking-tighter"
                >
                  Build.
                </Motion.h2>
              </div>
              <div className="overflow-hidden h-[78px] sm:h-[86px] lg:h-[92px]">
                <Motion.h2
                  style={{ y: launchY }}
                  className="text-[3.8rem] sm:text-6xl lg:text-7xl font-black text-white italic uppercase leading-none tracking-tighter"
                >
                  Launch.
                </Motion.h2>
              </div>
              <div className="overflow-hidden h-[88px] sm:h-[96px] lg:h-[100px]">
                <Motion.h2
                  style={{ y: growY }}
                  className="text-[3.8rem] sm:text-6xl lg:text-7xl font-black italic uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600"
                >
                  Grow.
                </Motion.h2>
              </div>
            </div>
          </div>

          <Motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.51, 0.54], [0, 1]),
              y: useTransform(scrollYProgress, [0.51, 0.54], [14, 0]),
            }}
            className="space-y-5 lg:space-y-6 xl:space-y-7"
          >
            <p className="text-sm sm:text-base lg:text-lg text-white/70 font-medium leading-relaxed max-w-lg">
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

            <div className="flex items-center gap-4 pt-2">
              <button className="group relative px-8 py-4 bg-white rounded-full transition-transform active:scale-95">
                <span className="relative z-10 text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-3 group-hover:text-white transition-colors">
                  Book a Visit <MousePointer2 size={16} />
                </span>
                <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </button>
              <button className="text-white text-[10px] font-black uppercase tracking-[0.3em] hover:text-blue-400 transition-colors border-b border-white/10 pb-1">
                Apply Now
              </button>
            </div>
          </Motion.div>
        </div>

        <div className="col-span-12 lg:col-span-7 relative pt-1 lg:pt-0">
          <div className="absolute left-[-18px] top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block">
            <Motion.div
              style={{
                height: useTransform(scrollYProgress, [0.52, 0.68], ["0%", "100%"]),
              }}
              className="w-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
            />
          </div>

          <div className="flex flex-col gap-3 lg:gap-3.5 xl:gap-4">
            {audienceData.map((item, i) => (
              <AudienceCard
                key={item.label}
                item={item}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <Motion.div
            style={{ top: scanLineY }}
            className="absolute left-[-40px] right-[-20px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-50 pointer-events-none hidden lg:block"
          >
            <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full blur-[2px]" />
          </Motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 flex justify-between items-end border-t border-white/5 pt-4">
        <Motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.45, 0.48], [0, 1]) }}
          className="max-w-xs space-y-2"
        >
          <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em]">
            Global Access Points
          </span>
          <p className="text-[11px] text-white/30 italic leading-snug">
            "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
          </p>
        </Motion.div>

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