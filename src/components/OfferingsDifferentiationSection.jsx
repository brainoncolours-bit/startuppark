import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";
import { MousePointer2, Radio, ShieldCheck, Cpu, Zap, Sparkles } from "lucide-react";

/**
 * Visual redesign only:
 * - same text content
 * - tighter containment inside the viewport
 * - no layout spill into adjacent sections
 * - richer ambient layers and softer reveal motion
 * - more organic, premium composition
 */

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
  "01": { top: "8%", left: "4%", width: "min(19vw, 250px)", zIndex: 1 },
  "02": { top: "8%", right: "4%", width: "min(19vw, 250px)", zIndex: 1 },
  "03": {
    top: "38%",
    left: "50%",
    width: "min(25vw, 340px)",
    transform: "translateX(-50%)",
    zIndex: 5,
  },
  "04": { bottom: "10%", left: "8%", width: "min(19vw, 250px)", zIndex: 1 },
  "05": { bottom: "10%", right: "8%", width: "min(19vw, 250px)", zIndex: 1 },
};

const cardIcons = [Zap, ShieldCheck, Sparkles, Radio, Cpu];

function AmbientField({ scrollYProgress }) {
  const orbitRotate = useTransform(scrollYProgress, [0.56, 0.82], [0, 18]);
  const orbitRotate2 = useTransform(scrollYProgress, [0.56, 0.82], [0, -14]);

  const driftX = useSpring(
    useTransform(scrollYProgress, [0.56, 0.82], [-40, 46]),
    { stiffness: 80, damping: 18, mass: 0.9 }
  );
  const driftY = useSpring(
    useTransform(scrollYProgress, [0.56, 0.82], [22, -18]),
    { stiffness: 80, damping: 18, mass: 0.9 }
  );
  const driftScale = useSpring(
    useTransform(scrollYProgress, [0.56, 0.72, 0.82], [0.94, 1.03, 1]),
    { stiffness: 80, damping: 18, mass: 0.9 }
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Motion.div
        aria-hidden="true"
        className="absolute -top-24 left-[-8%] h-[32vw] w-[32vw] max-h-[480px] max-w-[480px] rounded-full bg-blue-800/20 blur-[140px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute bottom-[-16%] right-[-6%] h-[32vw] w-[32vw] max-h-[480px] max-w-[480px] rounded-full bg-cyan-700/12 blur-[150px]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        style={{ rotate: orbitRotate }}
        className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[980px] max-w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/14 opacity-30"
      />
      <Motion.div
        style={{ rotate: orbitRotate2 }}
        className="absolute left-1/2 top-1/2 h-[54vw] w-[54vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/12 opacity-30"
      />

      <Motion.div
        style={{ x: driftX, y: driftY, scale: driftScale }}
        className="absolute left-1/2 top-1/2 h-[28vw] w-[28vw] max-h-[430px] max-w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_64%)] blur-2xl"
      />
      <Motion.div
        style={{ x: driftX, y: driftY, scale: driftScale }}
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_28px_rgba(34,211,238,0.95)]"
      />

      <Motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.2,
        }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-0 top-[18%] h-px w-48 bg-gradient-to-r from-transparent via-blue-500/35 to-transparent blur-2xl"
        style={{
          x: useSpring(
            useTransform(scrollYProgress, [0.56, 0.82], [-28, 130]),
            { stiffness: 85, damping: 18, mass: 0.8 }
          ),
        }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute left-0 top-[70%] h-px w-56 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent blur-2xl"
        style={{
          x: useSpring(
            useTransform(scrollYProgress, [0.58, 0.82], [40, 220]),
            { stiffness: 85, damping: 18, mass: 0.8 }
          ),
        }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-[14%] top-[22%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.85)]"
        animate={{ y: [0, -8, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-[16%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.75)]"
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-[8%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.85)]"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function PremiumCard({ card, index, scrollYProgress, mobile = false }) {
  const featured = card.label === "03";
  const Icon = cardIcons[index % cardIcons.length];

  const start = 0.79 + index * 0.025;
  const end = start + 0.06;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const xBase = useTransform(
    scrollYProgress,
    [start, end],
    [featured ? 0 : -14, 0]
  );
  const yBase = useTransform(scrollYProgress, [start, end], [28, 0]);
  const scaleBase = useTransform(scrollYProgress, [start, end], [0.965, 1]);
  const rotateBase = useTransform(
    scrollYProgress,
    [start, end],
    [featured ? 0 : -2, 0]
  );

  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };
  const x = useSpring(xBase, springConfig);
  const y = useSpring(yBase, springConfig);
  const scale = useSpring(scaleBase, springConfig);
  const rotate = useSpring(rotateBase, springConfig);

  const shell = (
    <div
      className={`group relative overflow-hidden rounded-[26px] p-[1px] transition-shadow duration-500 ${
        featured ? "shadow-[0_22px_60px_-24px_rgba(34,211,238,0.3)]" : "shadow-[0_16px_40px_-28px_rgba(0,0,0,0.6)]"
      }`}
    >
      <Motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(135deg,rgba(34,211,238,0.28),rgba(59,130,246,0.16),rgba(255,255,255,0.05))",
        }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14), transparent 24%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.18), transparent 20%), radial-gradient(circle at 50% 100%, rgba(59,130,246,0.12), transparent 20%)",
        }}
        transition={{ duration: 0.35 }}
      />

      <div
        className={`relative h-full w-full rounded-[25px] bg-[#08111f]/92 backdrop-blur-xl p-5 flex flex-col justify-between border border-white/10 min-h-[180px] overflow-hidden ${
          featured ? "ring-1 ring-cyan-400/10" : ""
        }`}
      >
        <Motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
          initial={false}
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <Motion.div
          aria-hidden="true"
          className="absolute -left-12 top-10 h-24 w-24 rounded-full bg-cyan-400/8 blur-3xl opacity-0 group-hover:opacity-100"
        />
        <Motion.div
          aria-hidden="true"
          className="absolute -right-8 bottom-[-12px] h-28 w-28 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100"
        />

        <div className="mb-4 flex justify-between items-center relative z-10">
          <span
            className={`text-[11px] font-black uppercase tracking-[0.4em] ${
              featured ? "text-cyan-300" : "text-blue-300"
            }`}
          >
            {card.label}
          </span>
          <Motion.div
            className={`h-2 w-2 rounded-full ${
              featured
                ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                : "bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.7)]"
            }`}
            animate={{ scale: [1, 1.35, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Motion.div className="relative z-10 mb-3 flex items-start justify-between gap-3">
          <h3
            className={`font-bold leading-tight ${
              featured ? "text-2xl md:text-3xl text-white" : "text-xl text-slate-100"
            }`}
          >
            {card.title}
          </h3>
          <div className="mt-1 text-cyan-300/40 group-hover:text-cyan-300/80 transition-colors">
            <Icon size={15} />
          </div>
        </Motion.div>

        <p
          className={`relative z-10 text-sm leading-relaxed ${
            featured ? "text-slate-200" : "text-slate-400"
          }`}
        >
          {card.text}
        </p>

        <Motion.div
          aria-hidden="true"
          className="absolute inset-x-6 bottom-5 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {featured && (
          <Motion.div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
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
      <Motion.div style={{ x, y, rotate, scale, opacity }} className="will-change-transform">
        {shell}
      </Motion.div>
    </div>
  );
}

function SignalChip({ value, label }) {
  return (
    <Motion.div
      whileHover={{ y: -2 }}
      className="relative"
    >
      <Motion.div
        aria-hidden="true"
        className="absolute -left-3 top-1 h-8 w-px bg-gradient-to-b from-cyan-400/70 to-transparent"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="text-xl sm:text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-cyan-300 font-bold">
        {label}
      </div>
    </Motion.div>
  );
}

const OfferingsDifferentiationSection = ({
  scrollYProgress,
  isActive = true,
}) => {
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0.77, 0.8, 0.94, 0.96],
    [0, 1, 1, 0]
  );
  const sectionY = useTransform(scrollYProgress, [0.77, 0.8], [34, 0]);

  const leftBlockY = useSpring(
    useTransform(scrollYProgress, [0.79, 0.85], [18, 0]),
    { stiffness: 50, damping: 20 }
  );
  const leftBlockOpacity = useTransform(
    scrollYProgress,
    [0.79, 0.85],
    [0, 1]
  );

  const titleReveal1 = useTransform(scrollYProgress, [0.78, 0.82], ["100%", "0%"]);
  const titleReveal2 = useTransform(scrollYProgress, [0.79, 0.83], ["100%", "0%"]);
  const titleReveal3 = useTransform(scrollYProgress, [0.8, 0.84], ["100%", "0%"]);

  const pathProgress = useTransform(
    scrollYProgress,
    [0.8, 0.87, 0.95, 1],
    [0, 0.8, 1, 1]
  );

  return (
    <Motion.section
      style={{ opacity: sectionOpacity, y: sectionY }}
      aria-hidden={!isActive}
      className={`absolute inset-0 z-[49] overflow-hidden bg-[#050816] text-white flex items-start min-h-[100svh] ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <AmbientField scrollYProgress={scrollYProgress} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-800/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-800/10 blur-[140px]" />
      </div>

      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 px-4 sm:px-6 md:px-12 lg:px-20 pt-[92px] sm:pt-[96px] lg:pt-[104px] pb-4 sm:pb-5 items-start">
        <Motion.div
          style={{ y: leftBlockY, opacity: leftBlockOpacity }}
          className="col-span-12 lg:col-span-4 flex flex-col justify-start h-full relative z-40 pt-2 lg:pt-0"
        >
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2.5 backdrop-blur-md w-fit shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-100">
              System Architecture
            </span>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <div className="overflow-hidden h-[72px] sm:h-[84px] lg:h-[96px]">
              <Motion.h2
                style={{ y: titleReveal1 }}
                className="text-[3.3rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95]"
              >
                <span className="block text-white">Programs.</span>
              </Motion.h2>
            </div>
            <div className="overflow-hidden h-[72px] sm:h-[84px] lg:h-[96px]">
              <Motion.h2
                style={{ y: titleReveal2 }}
                className="text-[3.3rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95]"
              >
                <span className="block text-cyan-300">Services.</span>
              </Motion.h2>
            </div>
            <div className="overflow-hidden h-[84px] sm:h-[92px] lg:h-[100px]">
              <Motion.h2
                style={{ y: titleReveal3 }}
                className="text-[3.3rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-slate-400"
              >
                <span className="block">Infrastructure.</span>
              </Motion.h2>
            </div>
          </div>

          <Motion.p
            style={{
              opacity: useTransform(scrollYProgress, [0.51, 0.55], [0, 1]),
              y: useTransform(scrollYProgress, [0.51, 0.55], [14, 0]),
            }}
            className="mb-7 sm:mb-8 mt-4 sm:mt-5 max-w-md text-sm sm:text-lg leading-relaxed text-slate-300 font-light"
          >
            Startup Park combines memberships, launch support, services and
            physical infrastructure so founders can operate from one powerful base.
          </Motion.p>

          <div className="mb-8 sm:mb-10 grid grid-cols-3 gap-4 border-l border-cyan-500/20 pl-4 sm:pl-6">
            {leftSignals.map((signal) => (
              <SignalChip
                key={signal.label}
                value={signal.value}
                label={signal.label}
              />
            ))}
          </div>

          <div className="relative mt-auto pb-2">
            <p className="mb-4 sm:mb-5 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 border-b border-white/10 pb-3">
              Core Differentiators
            </p>
            <div className="space-y-4">
              {differentiators.map((item, idx) => (
                <Motion.div
                  key={item}
                  className="flex items-start gap-4 group"
                  initial={false}
                  whileHover={{ x: 3 }}
                >
                  <Motion.div
                    className="mt-1.5 h-[1px] w-6 bg-cyan-400/50"
                    animate={{ width: [24, 34, 24] }}
                    transition={{
                      duration: 4 + idx * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.div>

        <div className="col-span-12 lg:col-span-8 relative h-full min-h-[62vh] lg:min-h-full w-full overflow-hidden">
          <Motion.svg
            aria-hidden="true"
            viewBox="0 0 1200 820"
            className="absolute inset-0 h-full w-full pointer-events-none hidden lg:block opacity-55"
          >
            <Motion.path
              d="M155 170 C 320 140, 410 180, 560 320 S 870 460, 1020 280"
              fill="none"
              stroke="rgba(34,211,238,0.24)"
              strokeWidth="1.3"
              strokeDasharray="7 12"
            />
            <Motion.path
              d="M145 620 C 330 540, 450 520, 600 450 S 850 280, 1040 500"
              fill="none"
              stroke="rgba(59,130,246,0.18)"
              strokeWidth="1.2"
              strokeDasharray="4 10"
            />
            <Motion.path
              d="M155 170 C 320 140, 410 180, 560 320 S 870 460, 1020 280"
              fill="none"
              stroke="rgba(34,211,238,0.7)"
              strokeWidth="2.1"
              strokeLinecap="round"
              style={{ pathLength: pathProgress }}
              pathLength={0}
              filter="drop-shadow(0 0 18px rgba(34,211,238,0.35))"
            />
            <Motion.path
              d="M380 320 C 470 230, 610 230, 700 320"
              fill="none"
              stroke="rgba(59,130,246,0.18)"
              strokeWidth="1.1"
              strokeDasharray="3 10"
              style={{ pathLength: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]) }}
              pathLength={0}
            />
          </Motion.svg>

          <div className="hidden lg:block relative z-10 h-full">
            {programCards.map((card, index) => (
              <PremiumCard
                key={card.label}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 px-2 sm:px-4 md:px-8 py-6 lg:hidden">
            {programCards.map((card, index) => (
              <PremiumCard
                key={card.label}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
                mobile
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 flex justify-between items-end border-t border-white/5 pt-3">
        <Motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.45, 0.48], [0, 1]),
          }}
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
    </Motion.section>
  );
};

export default OfferingsDifferentiationSection;