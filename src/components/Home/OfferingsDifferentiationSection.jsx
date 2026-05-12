import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Radio,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const programCards = [
  {
    label: "01",
    title: "Entrepreneur Membership",
    text: "A flexible base for solo operators, early founders and builders entering the ecosystem.",
    icon: ShieldCheck,
    accentColor: "#3B82F6",
    bgGradient: "linear-gradient(180deg, rgba(59, 130, 246, 0.18) 0%, rgba(30, 64, 175, 0.24) 100%)",
    glowColor: "rgba(59, 130, 246, 0.28)",
  },
  {
    label: "02",
    title: "Startup Membership",
    text: "An operating layer for teams that need space, energy, access and startup-grade infrastructure.",
    icon: Zap,
    accentColor: "#3B82F6",
    bgGradient: "linear-gradient(180deg, rgba(59, 130, 246, 0.18) 0%, rgba(30, 64, 175, 0.24) 100%)",
    glowColor: "rgba(59, 130, 246, 0.28)",
  },
  {
    label: "03",
    title: "Launch Pad",
    text: "A founder-facing stage to introduce startups, gain visibility and enter the ecosystem with clarity.",
    icon: Sparkles,
    accentColor: "#3B82F6",
    bgGradient: "linear-gradient(180deg, rgba(59, 130, 246, 0.18) 0%, rgba(30, 64, 175, 0.24) 100%)",
    glowColor: "rgba(59, 130, 246, 0.28)",
  },
  {
    label: "04",
    title: "Day One Services",
    text: "Registration, branding, positioning, website creation and go-to-market launch support.",
    icon: Radio,
    accentColor: "#3B82F6",
    bgGradient: "linear-gradient(180deg, rgba(59, 130, 246, 0.18) 0%, rgba(30, 64, 175, 0.24) 100%)",
    glowColor: "rgba(59, 130, 246, 0.28)",
  },
  {
    label: "05",
    title: "Infrastructure",
    text: "Workspaces, labs, meeting rooms, event halls and support systems built for startup execution.",
    icon: Cpu,
    accentColor: "#3B82F6",
    bgGradient: "linear-gradient(180deg, rgba(59, 130, 246, 0.18) 0%, rgba(30, 64, 175, 0.24) 100%)",
    glowColor: "rgba(59, 130, 246, 0.28)",
  },
];

const leftSignals = [
  { value: "05", label: "stack layers" },
  { value: "01", label: "ecosystem base" },
  { value: "24/7", label: "builder rhythm" },
];

const differentiators = [
  "Founder-first community, not just desks",
  "Active event culture and live ecosystem energy",
  "Bengaluru startup network advantage",
  "Execution support from idea to launch",
  "Programs, infrastructure and visibility in one place",
];

const OfferingsDifferentiationSection = ({ isActive = true }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className={`absolute inset-0 z-[49] overflow-hidden bg-white text-slate-950 flex flex-col font-sans ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(59,130,246,0.12), transparent 32%), radial-gradient(circle at 82% 22%, rgba(59,130,246,0.08), transparent 34%), radial-gradient(circle at 50% -20%, rgba(56, 189, 248, 0.05), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 pb-8 pt-28 lg:px-12">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-3">
              <span className="h-[1px] w-8 bg-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
                System Architecture
              </span>
              <span className="h-[1px] w-8 bg-blue-500" />
          </div>
          <h2 className="text-5xl font-black leading-none tracking-tighter lg:text-6xl">
              Programs. <span className="text-blue-600 italic">Services.</span>{" "}
              Infrastructure.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-sm leading-relaxed text-slate-600 lg:text-base">
              Startup Park combines memberships, launch support, services and
              physical infrastructure so founders can operate from one powerful base.
            </p>

          <div className="mx-auto mt-5 grid w-full max-w-[620px] grid-cols-3 gap-3 rounded-[24px] border border-blue-100/40 bg-blue-50/50 p-3 shadow-[0_24px_80px_rgba(59,130,246,0.08)] backdrop-blur-xl">
            {leftSignals.map((signal) => (
              <div key={signal.label} className="rounded-[18px] border border-blue-100/30 bg-white/80 px-4 py-3 text-center shadow-sm">
                <div className="text-2xl font-black text-slate-950 lg:text-3xl">{signal.value}</div>
                <div className="mt-1 text-[8px] font-bold uppercase tracking-widest text-blue-600/80">
                  {signal.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5 overflow-hidden">
          <div className="flex w-max items-center gap-3 whitespace-nowrap">
            {[...differentiators, ...differentiators].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-full border border-blue-300/12 bg-blue-500/8 px-3 py-2 text-[11px] text-white/72 backdrop-blur-md"
              >
                <span className="mr-2 text-blue-300/80">
                  {(index % differentiators.length) + 1}.
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          className="group/container flex h-[390px] min-h-0 w-full gap-4"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {programCards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const Icon = card.icon;

            return (
              <Motion.div
                key={card.label}
                layout
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative cursor-pointer overflow-hidden rounded-[28px] border transition-all duration-500 ${
                  isHovered
                    ? "flex-[2.2] border-blue-600"
                    : "flex-1 border-blue-200 hover:border-blue-400"
                }`}
                style={{
                  borderColor: card.accentColor,
                  background: isHovered
                    ? "linear-gradient(180deg, rgba(59,130,246,0.95), rgba(37,99,235,0.95))"
                    : card.bgGradient,
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 70px ${card.glowColor}, 0 0 32px rgba(59,130,246,0.16)`,
                }}
              >
                {!isHovered && (
                  <div 
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${card.glowColor}, transparent 52%)`
                    }}
                  />
                )}
                <div className="relative flex h-full w-full flex-col justify-between p-7">
                  <div
                    className={`flex items-start justify-between ${
                      isHovered ? "flex-row" : "flex-col gap-6"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center rounded-xl border transition-all duration-500 ${
                        isHovered
                          ? "h-12 w-12 border-blue-400 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                          : "h-10 w-10 shadow-[0_8px_30px_rgba(59,130,246,0.16)]"
                      }`}
                      style={{
                        borderColor: isHovered ? "#3b82f6" : card.accentColor,
                        backgroundColor: isHovered ? "#2563eb" : `${card.accentColor}22`,
                        boxShadow: isHovered ? "0 0 15px rgba(37,99,235,0.3)" : `0 8px 30px ${card.glowColor}`,
                      }}
                    >
                      <Icon
                        size={isHovered ? 20 : 18}
                        style={{
                          color: isHovered ? "#ffffff" : card.accentColor,
                        }}
                      />
                    </div>

                    {!isHovered && (
                      <span 
                        className="rotate-180 text-lg font-black uppercase tracking-widest [writing-mode:vertical-lr]"
                        style={{ color: `${card.accentColor}72` }}
                      >
                        {card.title}
                      </span>
                    )}

                    {isHovered && (
                      <Motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-widest"
                        style={{
                          borderColor: card.accentColor,
                          backgroundColor: `${card.accentColor}22`,
                          color: card.accentColor,
                        }}
                      >
                        Active Layer
                      </Motion.div>
                    )}
                  </div>

                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {isHovered ? (
                        <Motion.div
                          key="content"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <h3 className="text-2xl font-bold tracking-tight text-white">
                            {card.title}
                          </h3>
                          <p className="max-w-[280px] text-base leading-relaxed text-slate-100">
                            {card.text}
                          </p>
                          <div 
                            className="group flex items-center gap-2 pt-3 text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: card.accentColor }}
                          >
                            <span>Explore Program</span>
                            <ArrowUpRight
                              size={12}
                              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </div>
                        </Motion.div>
                      ) : (
                        <Motion.div
                          key="label"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          style={{ color: `${card.accentColor}44` }}
                          className="text-3xl font-black"
                        >
                          {card.label}
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-200/30 pt-5">
          <div className="flex gap-3">
            {["Bengaluru", "Founders", "Infrastructure"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-300/30 bg-slate-100/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <div className="mb-1 text-[9px] font-black uppercase tracking-[0.4em] text-blue-600">
              Link_Status: Active
            </div>
            <p className="text-[10px] italic text-slate-500">
              "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
            </p>
            <span className="mt-1 block text-[8px] font-black uppercase tracking-[0.45em] text-slate-400">
              Bengaluru_Campus // 12.9716° N
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsDifferentiationSection;
