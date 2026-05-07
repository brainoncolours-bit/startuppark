import React, { useMemo } from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Radio,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

/**
 * Visual redesign only.
 * Exact text content preserved.
 * One-line centered title.
 * Cards reveal sequentially as user scrolls.
 * No extra horizontal title strip.
 * Five cards visible in one row.
 * Blue / white / black only.
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

const cardIcons = [Zap, ShieldCheck, Sparkles, Radio, Cpu];

function Backdrop({ scrollYProgress }) {
  const orbX = useSpring(
    useTransform(scrollYProgress, [0.56, 0.84], [-26, 34]),
    { stiffness: 70, damping: 18, mass: 0.9 }
  );
  const orbY = useSpring(
    useTransform(scrollYProgress, [0.56, 0.84], [18, -12]),
    { stiffness: 70, damping: 18, mass: 0.9 }
  );
  const glowScale = useSpring(
    useTransform(scrollYProgress, [0.56, 0.72, 0.84], [0.92, 1.04, 1]),
    { stiffness: 70, damping: 18, mass: 0.9 }
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050816]" />

      <Motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.12,
        }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-[-10%] top-[-18%] h-[34vw] w-[34vw] max-h-[500px] max-w-[500px] rounded-full bg-blue-900/24 blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-[-10%] bottom-[-18%] h-[32vw] w-[32vw] max-h-[460px] max-w-[460px] rounded-full bg-blue-700/14 blur-[160px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[47%] h-[72vw] w-[72vw] max-h-[980px] max-w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/10"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[47%] h-[54vw] w-[54vw] max-h-[760px] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
        animate={{ rotate: [0, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        aria-hidden="true"
        style={{ x: orbX, y: orbY, scale: glowScale }}
        className="absolute left-1/2 top-[47%] h-[26vw] w-[26vw] max-h-[360px] max-w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_66%)] blur-3xl"
      />
      <Motion.div
        aria-hidden="true"
        style={{ x: orbX, y: orbY, scale: glowScale }}
        className="absolute left-1/2 top-[47%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_30px_rgba(147,197,253,0.95)]"
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-0 top-[22%] h-px w-72 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent blur-2xl"
        style={{
          x: useSpring(
            useTransform(scrollYProgress, [0.56, 0.84], [-20, 140]),
            { stiffness: 90, damping: 20, mass: 0.8 }
          ),
        }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-0 top-[66%] h-px w-80 bg-gradient-to-r from-transparent via-blue-300/22 to-transparent blur-2xl"
        style={{
          x: useSpring(
            useTransform(scrollYProgress, [0.58, 0.84], [40, -150]),
            { stiffness: 90, damping: 20, mass: 0.8 }
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
        className="absolute right-[16%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-200 shadow-[0_0_14px_rgba(191,219,254,0.8)]"
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-[8%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.85)]"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ opacity: [0.2, 0.75, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[12%] h-px bg-gradient-to-r from-transparent via-blue-300/12 to-transparent"
        animate={{ opacity: [0.15, 0.55, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function SignalChip({ value, label }) {
  return (
    <Motion.div whileHover={{ y: -2 }} className="relative text-center">
      <Motion.div
        aria-hidden="true"
        className="absolute -left-3 top-1 h-8 w-px bg-gradient-to-b from-blue-300/70 to-transparent"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="text-xl sm:text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-blue-200 font-bold">
        {label}
      </div>
    </Motion.div>
  );
}

function ProgramCard({ card, index, scrollYProgress }) {
  const featured = card.label === "03";
  const Icon = cardIcons[index % cardIcons.length];

  const revealStart = 0.78 + index * 0.02;
  const revealEnd = revealStart + 0.035;

  const opacity = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [revealStart, revealEnd], [18, 0]);
  const scale = useTransform(scrollYProgress, [revealStart, revealEnd], [0.96, 1]);
  const x = useTransform(scrollYProgress, [revealStart, revealEnd], [index % 2 === 0 ? -12 : 12, 0]);

  return (
    <Motion.div
      className={`group relative h-full overflow-hidden rounded-[24px] p-[1px] ${
        featured
          ? "shadow-[0_22px_60px_-24px_rgba(59,130,246,0.45)]"
          : "shadow-[0_16px_40px_-28px_rgba(0,0,0,0.68)]"
      }`}
      style={{ opacity, y, x, scale }}
    >
      <Motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(145deg, rgba(59,130,246,0.38), rgba(255,255,255,0.08), rgba(37,99,235,0.14))",
        }}
      />

      <div
        className={`relative h-full min-h-[154px] rounded-[23px] border border-white/10 bg-[#070c15]/96 backdrop-blur-2xl p-4 overflow-hidden ${
          featured ? "ring-1 ring-blue-300/10" : ""
        }`}
      >
        <Motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/90 to-transparent"
          animate={{ x: ["-45%", "145%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 opacity-18">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-300/50 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-300/20 to-transparent" />
        </div>

        <Motion.div
          aria-hidden="true"
          className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100"
        />
        <Motion.div
          aria-hidden="true"
          className="absolute -left-10 bottom-[-18px] h-24 w-24 rounded-full bg-blue-400/10 blur-3xl opacity-0 group-hover:opacity-100"
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-2xl border ${
                  featured
                    ? "border-blue-300/30 bg-blue-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <Icon size={15} className={featured ? "text-blue-200" : "text-white/70"} />
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.38em] text-blue-200/80">
                  {card.label}
                </span>
                <div className="mt-2 h-px w-10 bg-gradient-to-r from-blue-300/80 to-transparent" />
              </div>
            </div>

            <Motion.div
              className={`mt-1 h-2.5 w-2.5 rounded-full ${
                featured
                  ? "bg-blue-300 shadow-[0_0_16px_rgba(147,197,253,0.95)]"
                  : "bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)]"
              }`}
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-4">
            <h3
              className={`leading-tight tracking-tight ${
                featured
                  ? "text-[1.14rem] sm:text-[1.2rem] font-extrabold text-white"
                  : "text-[1rem] sm:text-[1.06rem] font-bold text-slate-100"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`mt-2.5 text-[12px] sm:text-[13px] leading-snug ${
                featured ? "text-slate-200" : "text-slate-400"
              }`}
            >
              {card.text}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="h-px flex-1 bg-gradient-to-r from-blue-300/45 to-transparent" />
            <ArrowUpRight
              size={14}
              className="ml-3 text-blue-200/70 transition-colors group-hover:text-blue-100"
            />
          </div>
        </div>

        {featured && (
          <Motion.div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </Motion.div>
  );
}

const OfferingsDifferentiationSection = ({ scrollYProgress, isActive = true }) => {
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0.74, 0.77, 0.945, 0.96],
    [0, 1, 1, 0]
  );
  const sectionY = useTransform(scrollYProgress, [0.74, 0.77], [22, 0]);

  const titleReveal = useTransform(scrollYProgress, [0.75, 0.8], ["100%", "0%"]);
  const introOpacity = useTransform(scrollYProgress, [0.48, 0.52], [0, 1]);
  const introY = useTransform(scrollYProgress, [0.48, 0.52], [10, 0]);

  return (
    <Motion.section
      style={{ opacity: sectionOpacity, y: sectionY }}
      aria-hidden={!isActive}
      className={`absolute inset-0 z-[49] overflow-hidden bg-[#050816] text-white min-h-[100svh] ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <Backdrop scrollYProgress={scrollYProgress} />

      <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-4 pb-4 pt-[78px] sm:px-6 sm:pt-[84px] md:px-10 lg:px-16 lg:pt-[88px]">
        <div className="mx-auto inline-flex w-fit items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.08)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-300" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.42em] text-blue-100">
            System Architecture
          </span>
        </div>

        <div className="mx-auto mt-3 w-full max-w-[1280px] text-center">
          <div className="overflow-hidden h-[clamp(54px,5.5vw,78px)]">
            <Motion.h2
              style={{ y: titleReveal }}
              className="text-[clamp(1.9rem,3vw,4rem)] font-black tracking-tighter leading-[0.9] whitespace-nowrap"
            >
              <span className="text-white">Programs.</span>{" "}
              <span className="text-blue-300">Services.</span>{" "}
              <span className="text-slate-400">Infrastructure.</span>
            </Motion.h2>
          </div>

          <Motion.p
            style={{ opacity: introOpacity, y: introY }}
            className="mx-auto mt-2 max-w-[620px] text-[13px] sm:text-base lg:text-[16px] leading-relaxed text-slate-300 font-light"
          >
            Startup Park combines memberships, launch support, services and
            physical infrastructure so founders can operate from one powerful base.
          </Motion.p>
        </div>

        <div className="mx-auto mt-3 w-full max-w-[720px] grid grid-cols-3 gap-3 sm:gap-4 border-l border-blue-400/20 pl-4 sm:pl-6">
          {leftSignals.map((signal) => (
            <SignalChip
              key={signal.label}
              value={signal.value}
              label={signal.label}
            />
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5 xl:gap-3">
          {differentiators.map((item, idx) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-slate-200 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.05)]"
            >
              <span className="mr-2 text-blue-300">{idx + 1}.</span>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-3 grid flex-1 min-h-0 grid-cols-5 gap-2 sm:gap-3 lg:gap-4 items-stretch">
          {programCards.map((card, index) => (
            <ProgramCard
              key={card.label}
              card={card}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mt-2 flex items-end justify-between border-t border-white/5 pt-2">
          <Motion.div
            className="max-w-xs space-y-2"
            style={{ opacity: introOpacity }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-blue-400">
              Global Access Points
            </span>
            <p className="text-[11px] italic leading-snug text-white/30">
              "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
            </p>
          </Motion.div>

          <div className="flex flex-col items-end gap-1 text-[8px] font-black uppercase tracking-[0.45em] text-white/20">
            <div className="flex items-center gap-3">
              <span className="text-blue-300 animate-pulse">●</span>
              <span>Link_Status: Active</span>
            </div>
            <span>Bengaluru_Campus // 12.9716° N</span>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default OfferingsDifferentiationSection;