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
  },
  {
    label: "02",
    title: "Startup Membership",
    text: "An operating layer for teams that need space, energy, access and startup-grade infrastructure.",
    icon: Zap,
  },
  {
    label: "03",
    title: "Launch Pad",
    text: "A founder-facing stage to introduce startups, gain visibility and enter the ecosystem with clarity.",
    icon: Sparkles,
  },
  {
    label: "04",
    title: "Day One Services",
    text: "Registration, branding, positioning, website creation and go-to-market launch support.",
    icon: Radio,
  },
  {
    label: "05",
    title: "Infrastructure",
    text: "Workspaces, labs, meeting rooms, event halls and support systems built for startup execution.",
    icon: Cpu,
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
      className={`absolute inset-0 z-[49] overflow-hidden bg-[#020205] text-white flex flex-col font-sans ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(37,99,235,0.42), transparent 32%), radial-gradient(circle at 82% 22%, rgba(14,165,233,0.16), transparent 34%), radial-gradient(circle at 50% -20%, #1e3a8a, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

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
              Programs. <span className="text-blue-500 italic">Services.</span>{" "}
              Infrastructure.
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-sm leading-relaxed text-white/58 lg:text-base">
            Startup Park combines memberships, launch support, services and
            physical infrastructure so founders can operate from one powerful base.
          </p>

          <div className="mx-auto mt-5 grid w-full max-w-[620px] grid-cols-3 gap-3 rounded-[24px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_24px_80px_rgba(37,99,235,0.08)] backdrop-blur-xl">
            {leftSignals.map((signal) => (
              <div key={signal.label} className="rounded-[18px] border border-white/8 bg-[#101827] px-4 py-3 text-center">
                <div className="text-2xl font-black text-white lg:text-3xl">{signal.value}</div>
                <div className="mt-1 text-[8px] font-bold uppercase tracking-widest text-blue-100/55">
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
                    ? "flex-[2.2] border-white bg-white shadow-[0_32px_90px_rgba(255,255,255,0.12)]"
                    : "flex-1 border-blue-300/18 bg-[linear-gradient(180deg,#111a2c_0%,#07101f_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_70px_rgba(37,99,235,0.12)] hover:border-blue-300/34 hover:bg-[linear-gradient(180deg,#15233a_0%,#091426_100%)]"
                }`}
              >
                {!isHovered && (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_52%)]" />
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
                          : "h-10 w-10 border-blue-200/18 bg-white/8 shadow-[0_8px_30px_rgba(59,130,246,0.16)]"
                      }`}
                    >
                      <Icon
                        size={isHovered ? 20 : 18}
                        className={isHovered ? "text-white" : "text-blue-100/70"}
                      />
                    </div>

                    {!isHovered && (
                      <span className="rotate-180 text-lg font-black uppercase tracking-widest text-blue-50/45 [writing-mode:vertical-lr]">
                        {card.title}
                      </span>
                    )}

                    {isHovered && (
                      <Motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-blue-600"
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
                          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                            {card.title}
                          </h3>
                          <p className="max-w-[280px] text-base leading-relaxed text-slate-600">
                            {card.text}
                          </p>
                          <div className="group flex items-center gap-2 pt-3 text-[10px] font-bold uppercase tracking-widest text-blue-600">
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
                          className="text-3xl font-black text-blue-100/28"
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

        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
          <div className="flex gap-3">
            {["Bengaluru", "Founders", "Infrastructure"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <div className="mb-1 text-[9px] font-black uppercase tracking-[0.4em] text-blue-500">
              Link_Status: Active
            </div>
            <p className="text-[10px] italic text-white/20">
              "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
            </p>
            <span className="mt-1 block text-[8px] font-black uppercase tracking-[0.45em] text-white/18">
              Bengaluru_Campus // 12.9716° N
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsDifferentiationSection;
