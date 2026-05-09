import React from "react";
import { motion as Motion, useTransform } from "framer-motion";
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
  const orbX = useTransform(scrollYProgress, [0.56, 0.84], [-26, 34]);
  const orbY = useTransform(scrollYProgress, [0.56, 0.84], [18, -12]);
  const glowScale = useTransform(scrollYProgress, [0.56, 0.72, 0.84], [0.92, 1.04, 1]);

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
        className="absolute left-[-10%] top-[-18%] h-[34vw] w-[34vw] max-h-[500px] max-w-[500px] rounded-full bg-blue-950/16 blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-[-10%] bottom-[-18%] h-[32vw] w-[32vw] max-h-[460px] max-w-[460px] rounded-full bg-blue-950/10 blur-[160px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[47%] h-[72vw] w-[72vw] max-h-[980px] max-w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[47%] h-[54vw] w-[54vw] max-h-[760px] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/10"
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
        className="absolute left-1/2 top-[47%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.55)]"
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-0 top-[22%] h-px w-72 bg-gradient-to-r from-transparent via-blue-300/18 to-transparent blur-2xl"
        style={{ x: useTransform(scrollYProgress, [0.56, 0.84], [-20, 140]) }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-0 top-[66%] h-px w-80 bg-gradient-to-r from-transparent via-blue-300/12 to-transparent blur-2xl"
        style={{ x: useTransform(scrollYProgress, [0.58, 0.84], [40, -150]) }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute left-[14%] top-[22%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(59,130,246,0.5)]"
        animate={{ y: [0, -8, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-[16%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-200 shadow-[0_0_10px_rgba(191,219,254,0.55)]"
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute right-[8%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-[10%] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        animate={{ opacity: [0.2, 0.75, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[12%] h-px bg-gradient-to-r from-transparent via-blue-300/10 to-transparent"
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
        className="absolute -left-3 top-1 h-8 w-px bg-gradient-to-b from-blue-300/55 to-transparent"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="text-xl font-black text-white sm:text-2xl">{value}</div>
      <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-blue-100 sm:text-[9px]">
        {label}
      </div>
    </Motion.div>
  );
}

function ProgramCard({ card, index, scrollYProgress }) {
  const featured = card.label === "03";
  const Icon = cardIcons[index % cardIcons.length];

  const revealStart = 0.76 + index * 0.02;
  const revealEnd = revealStart + 0.05;

  const opacity = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [revealStart, revealEnd], [18, 0]);
  const scale = useTransform(scrollYProgress, [revealStart, revealEnd], [0.95, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [revealStart, revealEnd],
    [index % 2 === 0 ? -2 : 2, 0]
  );

  return (
    <Motion.div
      style={{ opacity, y, scale, rotate }}
      className="group relative h-full min-w-[320px] sm:min-w-[350px] lg:min-w-[380px] xl:min-w-[420px] shrink-0 overflow-hidden rounded-[26px] p-[1px] shadow-[0_24px_60px_-38px_rgba(0,0,0,0.9)]"
    >
      <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/10 via-white/5 to-blue-500/10 opacity-50 blur-[1px] transition-opacity duration-500 group-hover:opacity-80" />
      <div className="relative h-full rounded-[25px] border border-white/10 bg-[rgba(4,4,7,0.95)] backdrop-blur-2xl p-6 sm:p-7 overflow-hidden">
        <Motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          animate={{ x: ["-40%", "140%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <Motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]"
        />
        <Motion.div
          aria-hidden="true"
          className="absolute -right-10 top-6 h-32 w-32 rounded-full bg-blue-500/6 blur-3xl opacity-0 group-hover:opacity-100"
        />
        <Motion.div
          aria-hidden="true"
          className="absolute -left-10 bottom-[-16px] h-32 w-32 rounded-full bg-white/4 blur-3xl opacity-0 group-hover:opacity-100"
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <Motion.div
                whileHover={{ scale: 1.06, rotate: -4 }}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                  featured ? "border-white/15 bg-white/10" : "border-white/8 bg-white/4"
                }`}
              >
                <Icon size={16} className="text-white" />
              </Motion.div>
              <div className="h-px w-12 bg-gradient-to-r from-white/70 to-transparent" />
            </div>
            <Motion.div
              className={`mt-1 h-2.5 w-2.5 rounded-full ${
                featured
                  ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.75)]"
                  : "bg-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.55)]"
              }`}
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-6 max-w-[92%]">
            <h3
              className={`leading-tight tracking-tight ${
                featured
                  ? "text-[1.4rem] font-extrabold text-white sm:text-[1.55rem]"
                  : "text-[1.18rem] font-bold text-white/85 sm:text-[1.28rem]"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`mt-3 text-[13px] sm:text-[14px] leading-relaxed ${
                featured ? "text-white/80" : "text-white/55"
              }`}
            >
              {card.text}
            </p>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.38em] text-white/40 group-hover:text-white/60 transition-colors">
              Learn More
            </span>
            <ArrowUpRight
              size={15}
              className="text-white/55 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </Motion.div>
  );
}

const OfferingsDifferentiationSection = ({ scrollYProgress, isActive = true }) => {
  const sectionOpacity = useTransform(scrollYProgress, [0.72, 0.75, 0.95, 0.98], [0, 1, 1, 0]);
  const railX = useTransform(scrollYProgress, [0.78, 0.98], [0, -1800]);
  const titleOpacity = useTransform(scrollYProgress, [0.72, 0.76, 0.82], [0.18, 0.72, 1]);
  const introOpacity = useTransform(scrollYProgress, [0.73, 0.78, 0.84], [0.1, 0.75, 1]);

  return (
    <Motion.section
      style={{ opacity: sectionOpacity }}
      aria-hidden={!isActive}
      className={`absolute inset-0 z-[49] overflow-hidden bg-[#020205] text-white min-h-[100svh] ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <Backdrop scrollYProgress={scrollYProgress} />

      <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-4 pb-4 pt-[72px] sm:px-6 sm:pt-[78px] md:px-10 lg:px-16 lg:pt-[84px]">
        <div className="mx-auto inline-flex w-fit items-center gap-3 rounded-full border border-blue-300/15 bg-blue-500/8 px-5 py-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.05)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-300" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.42em] text-white/90">
            System Architecture
          </span>
        </div>

        <Motion.div style={{ opacity: titleOpacity }} className="mx-auto w-full max-w-[1320px] text-center">
          <div className="overflow-hidden h-[clamp(54px,5.5vw,78px)]">
            <Motion.h2 className="text-[clamp(1.9rem,3vw,4rem)] font-black tracking-tighter leading-[0.9] whitespace-nowrap">
              <span className="text-white">Programs.</span>{" "}
              <span className="text-blue-300">Services.</span>{" "}
              <span className="text-white/70">Infrastructure.</span>
            </Motion.h2>
          </div>

          <Motion.p style={{ opacity: introOpacity }} className="mx-auto mt-2 max-w-[620px] text-[13px] sm:text-base lg:text-[16px] leading-relaxed text-white/70 font-light">
            Startup Park combines memberships, launch support, services and
            physical infrastructure so founders can operate from one powerful base.
          </Motion.p>
        </Motion.div>

        <Motion.div
          className="mx-auto mt-3 w-full max-w-[720px] grid grid-cols-3 gap-3 sm:gap-4 border-l border-blue-300/15 pl-4 sm:pl-6"
        >
          {leftSignals.map((signal) => (
            <SignalChip key={signal.label} value={signal.value} label={signal.label} />
          ))}
        </Motion.div>

        <Motion.div
          className="mt-3 overflow-hidden"
        >
          <Motion.div
            className="flex w-max items-center gap-3 sm:gap-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...differentiators, ...differentiators].map((item, idx) => (
              <Motion.div
                key={`${item}-${idx}`}
                whileHover={{ y: -2, scale: 1.02 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] sm:text-[12px] lg:text-[13px] text-white/80 backdrop-blur-md shadow-[0_0_18px_rgba(59,130,246,0.03)]"
              >
                <span className="mr-2 text-white/60">{(idx % differentiators.length) + 1}.</span>
                {item}
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>

        <div className="mt-3 flex-1 min-h-0 rounded-[30px] border border-white/8 bg-white/[0.02] backdrop-blur-xl p-3 sm:p-4 shadow-[0_20px_80px_-55px_rgba(0,0,0,0.95)]">
          <div className="relative h-full overflow-hidden rounded-[24px] border border-white/8 bg-[#05060a]/70">
            <Motion.div
              className="flex h-full items-stretch gap-4 sm:gap-5 p-3 sm:p-4"
              style={{ x: railX }}
            >
              {programCards.map((card, index) => (
                <ProgramCard
                  key={card.label}
                  card={card}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </Motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#020205] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#020205] to-transparent" />
          </div>
        </div>

        <div className="mt-2 flex items-end justify-between border-t border-white/5 pt-2">
          <Motion.div
            className="max-w-xs space-y-2"
            style={{ opacity: introOpacity }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-blue-300">
              Global Access Points
            </span>
            <p className="text-[11px] italic leading-snug text-white/35">
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
