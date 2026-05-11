import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const testimonials = [
  {
    name: "Founder Story - Reserved",
    quote:
      "Startup Park gave us more than space. It gave us movement, access and the right people at the right time.",
  },
  {
    name: "Startup Story - Reserved",
    quote:
      "From setup to visibility, the ecosystem reduced friction and helped us focus on building.",
  },
  {
    name: "Builder Story - Reserved",
    quote:
      "The energy here feels operational, not performative. You can actually build, launch and grow.",
  },
];

const titleText1 = "A live ecosystem for";
const titleText2 = "founders in motion.";

function TypewriterTitle({ isActive }) {
  return (
    <h2 className="select-none text-center text-[2rem] font-black leading-[0.86] tracking-tight sm:text-5xl md:text-[3.4rem] lg:text-[clamp(3.35rem,4vw,4.25rem)]">
      <Motion.span
        initial={{ opacity: 0, y: 18, clipPath: "inset(0 100% 0 0)" }}
        animate={
          isActive
            ? { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }
            : { opacity: 0, y: 18, clipPath: "inset(0 100% 0 0)" }
        }
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="block whitespace-nowrap text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.14)]"
      >
        {titleText1}
      </Motion.span>

      <Motion.span
        initial={{ opacity: 0, y: 18, clipPath: "inset(0 100% 0 0)" }}
        animate={
          isActive
            ? { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }
            : { opacity: 0, y: 18, clipPath: "inset(0 100% 0 0)" }
        }
        transition={{ duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="block whitespace-nowrap bg-gradient-to-r from-white via-[#7dd3fc] to-[#0f49ff] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(15,73,255,0.18)]"
      >
        {titleText2}
      </Motion.span>
    </h2>
  );
}

const CardWrapper = ({
  children,
  className,
  accent = "blue",
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const accentGlow =
    accent === "white"
      ? "rgba(255,255,255,0.8)"
      : accent === "black"
      ? "rgba(0,0,0,0.9)"
      : accent === "cyan"
      ? "rgba(34,211,238,0.85)"
      : accent === "violet"
      ? "rgba(124,93,255,0.85)"
      : "rgba(15,73,255,0.85)";

  return (
    <Motion.div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[28px] transition-transform duration-500 sm:rounded-[34px] ${className}`}
      style={{
        boxShadow: `0 0 0 1px ${accentGlow}, 0 28px 80px rgba(0,0,0,0.24)`,
      }}
    >
      <Motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, rgba(15,73,255,0.18), transparent 72%)`,
        }}
      />
      <Motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_22%,transparent_78%,rgba(255,255,255,0.06))]"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] border"
        style={{
          borderColor:
            accent === "black"
              ? "rgba(255,255,255,0.1)"
              : accent === "white"
              ? "rgba(15,23,42,0.08)"
              : "rgba(255,255,255,0.12)",
        }}
      />
      {children}
      <Motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            accent === "black"
              ? "linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)"
              : "linear-gradient(90deg,transparent,rgba(15,73,255,0.8),transparent)",
        }}
      />
    </Motion.div>
  );
};

const AmbientBackground = ({ scrollProgress }) => {
  const driftA = useTransform(scrollProgress, [0.9, 1], [0, -60]);
  const driftB = useTransform(scrollProgress, [0.9, 1], [0, 70]);
  const spin = useTransform(scrollProgress, [0.9, 1], [0, 120]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_center,#10131d_0%,#05060b_48%,#020308_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,73,255,0.18),transparent_30%),radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.07),transparent_18%),radial-gradient(circle_at_85%_78%,rgba(124,93,255,0.08),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <Motion.div
        style={{ rotate: spin }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-[1180px] sm:w-[1180px]"
      />
      <Motion.div
        style={{ y: driftA }}
        className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-[#0f49ff]/18 blur-3xl"
      />
      <Motion.div
        style={{ y: driftB }}
        className="absolute right-[8%] top-[14%] h-40 w-40 rounded-full bg-cyan-300/12 blur-3xl"
      />
      <Motion.div
        style={{ y: driftA }}
        className="absolute bottom-[16%] left-[18%] h-44 w-44 rounded-full bg-violet-300/12 blur-3xl"
      />
      <Motion.div
        style={{ y: driftB }}
        className="absolute bottom-[10%] right-[18%] h-28 w-28 rounded-full bg-white/10 blur-2xl"
      />
    </div>
  );
};

const TestimonialCard = ({ item, active, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 18, rotate: -2, scale: 0.98, filter: "blur(10px)" }}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : 18,
        rotate: active ? 0 : -2,
        scale: active ? 1 : 0.98,
        filter: active ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 flex flex-col justify-center ${active ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-[#0f49ff]/10 blur-2xl" />
      <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-violet-300/10 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />

      <div className="mb-3 flex min-w-0 items-center gap-2.5">
        <div className="h-px w-8 shrink-0 bg-slate-300" />
        <p className="min-w-0 truncate text-[8px] font-black uppercase tracking-[0.24em] text-slate-400 sm:text-[9px]">
          {item.name}
        </p>
      </div>

      <p className="max-w-xs text-balance text-[13px] font-semibold leading-snug text-slate-900 sm:text-[15px] md:text-[16px]">
        "{item.quote}"
      </p>

      <div className="mt-4 flex items-center gap-2.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#0f49ff]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#7c6cff]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#0ea5e9]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/70" />
      <Motion.div
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: active ? 4 : 0.2, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-[#0f49ff]"
      />
      <div className="absolute right-0 top-0 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
        {String(index + 1).padStart(2, "0")}
      </div>
    </Motion.div>
  );
};

const EcosystemPanel = ({ panel, index, scrollYProgress, className }) => {
  const revealStart = 0.68 + index * 0.012;
  const revealEnd = revealStart + 0.047;
  const opacity = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);
  const scale = useTransform(scrollYProgress, [revealStart, revealEnd], [0.68, 1]);
  const x = useTransform(scrollYProgress, [revealStart, revealEnd], ["0%", panel.x]);
  const y = useTransform(scrollYProgress, [revealStart, revealEnd], ["0%", panel.y]);

  return (
    <Motion.div
      style={{ opacity, x, y }}
      className="pointer-events-auto absolute left-1/2 top-1/2"
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <Motion.div style={{ scale }} className={className}>
          <CardWrapper
            accent={
              panel.tone === "white"
                ? "white"
                : panel.tone === "black"
                ? "black"
                : panel.tone === "blue"
                ? "blue"
                : panel.tone === "violet"
                ? "violet"
                : "cyan"
            }
            className={`h-full w-full ${panel.className} p-4 sm:p-5 lg:p-5`}
          >
            <div className="relative z-10 h-full">{panel.content}</div>
          </CardWrapper>
        </Motion.div>
      </div>
    </Motion.div>
  );
};

const EcosystemHighlightsSection = ({ scrollYProgress, isActive = true }) => {
  const [titleReady, setTitleReady] = useState(false);
  const [testIndex, setTestIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleReady(true), 800);
    const testTimer = setInterval(() => {
      setTestIndex((prev) => (prev + 1) % testimonials.length);
    }, 3800);

    return () => {
      clearTimeout(titleTimer);
      clearInterval(testTimer);
    };
  }, []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 26,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.66, 0.685, 0.815, 0.84],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0.66, 0.685], [42, 0]);

  const titleOpacity = useTransform(smoothProgress, [0.665, 0.69], [0, 1]);
  const titleScale = useTransform(smoothProgress, [0.665, 0.69], [0.985, 1]);

  const panelStates = useMemo(
    () => [
      {
        id: 1,
        tone: "white",
        x: "clamp(-600px, -31vw, -520px)",
        y: "clamp(-270px, -24vh, -220px)",
        className:
          "bg-white text-slate-950 border-white/80 shadow-[0_20px_70px_rgba(255,255,255,0.08)]",
        content: (
          <div className="flex h-full flex-col">
            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#0f49ff]">
              Launch Pad
            </p>
            <h3 className="mt-2.5 max-w-xs text-[1.25rem] font-black leading-[0.95] tracking-tight sm:text-[1.45rem]">
              A stage for founders to introduce their startup.
            </h3>
            <p className="mt-2.5 max-w-xs text-[11px] font-medium leading-relaxed text-slate-500 sm:text-[12px]">
              Present your startup, gain visibility, and begin your journey with momentum.
            </p>
          </div>
        ),
      },
      {
        id: 2,
        tone: "black",
        x: "clamp(520px, 31vw, 600px)",
        y: "clamp(-270px, -24vh, -220px)",
        className:
          "bg-[linear-gradient(145deg,#020202_0%,#0d1320_55%,#111827_100%)] text-white border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.55)]",
        content: (
          <div className="flex h-full flex-col">
            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#7dd3fc]">
              Day One Services
            </p>
            <h3 className="mt-2.5 max-w-xs text-[1.22rem] font-black leading-[0.92] tracking-tight sm:text-[1.48rem]">
              Registration. Branding. Website.
            </h3>
            <p className="mt-2.5 max-w-xs text-[11px] font-medium leading-relaxed text-slate-300 sm:text-[12px]">
              A professional service layer for company basics.
            </p>
          </div>
        ),
      },
      {
        id: 3,
        tone: "blue",
        x: "clamp(-610px, -32vw, -530px)",
        y: "clamp(-28px, -3vh, -10px)",
        className:
          "bg-[linear-gradient(160deg,#0f49ff_0%,#2563eb_42%,#0ea5e9_100%)] text-white border-white/15 shadow-[0_24px_70px_rgba(15,73,255,0.38)]",
        content: (
          <div className="flex h-full flex-col">
            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-blue-50">
              Community
            </p>
            <div className="mt-3 space-y-2 text-[14px] font-black leading-tight sm:text-[16px]">
              <div>Founder Meetups</div>
              <div>Live Workshops</div>
              <div>Pitch Rooms</div>
            </div>
          </div>
        ),
      },
      {
        id: 4,
        tone: "white",
        x: "clamp(530px, 32vw, 610px)",
        y: "clamp(-28px, -3vh, -10px)",
        className:
          "bg-[linear-gradient(180deg,#ffffff_0%,#f2f6ff_100%)] text-slate-950 border-white/80 shadow-[0_20px_70px_rgba(255,255,255,0.08)]",
        content: (
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#0f49ff] animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#0f49ff]">
                Testimonials
              </p>
            </div>
            <div className="relative mt-3 min-h-[142px]">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  key={testIndex}
                  item={testimonials[testIndex]}
                  active
                  index={testIndex}
                />
              </AnimatePresence>
            </div>
          </div>
        ),
      },
      {
        id: 5,
        tone: "black",
        x: "clamp(-500px, -26vw, -430px)",
        y: "clamp(210px, 24vh, 265px)",
        className:
          "bg-[linear-gradient(135deg,#0b1025_0%,#111827_52%,#1d4ed8_135%)] text-white border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.45)]",
        content: (
          <div className="flex h-full flex-col">
            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-cyan-300">
              Execute Now
            </p>
            <h3 className="mt-2.5 text-[1.3rem] font-black leading-tight tracking-tight sm:text-[1.65rem]">
              Join Startup Park.
              <br />
              <span className="text-cyan-300">Scale your vision.</span>
            </h3>
            <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
              <button className="rounded-[16px] bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-black transition-transform active:scale-95 hover:scale-[1.03]">
                Join Today
              </button>
              <button className="rounded-[16px] border border-white/15 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/6">
                Learn More
              </button>
            </div>
          </div>
        ),
      },
      {
        id: 6,
        tone: "violet",
        x: "clamp(430px, 26vw, 500px)",
        y: "clamp(210px, 24vh, 265px)",
        className:
          "bg-[linear-gradient(160deg,#7c6cff_0%,#0f49ff_55%,#111827_100%)] text-white border-white/15 shadow-[0_24px_70px_rgba(124,93,255,0.28)]",
        content: (
          <div className="flex h-full flex-col">
            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-blue-50">
              Ecosystem Pulse
            </p>
            <div className="mt-3 space-y-2 text-[12px] font-semibold text-blue-50/90 sm:text-[13px]">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>Momentum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>Growth</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    [testIndex]
  );

  const desktopPlacement = [
    "h-[205px] w-[335px] xl:h-[220px] xl:w-[360px]",
    "h-[205px] w-[335px] xl:h-[220px] xl:w-[360px]",
    "h-[172px] w-[280px] xl:h-[188px] xl:w-[310px]",
    "h-[196px] w-[350px] xl:h-[210px] xl:w-[380px]",
    "h-[205px] w-[350px] xl:h-[220px] xl:w-[385px]",
    "h-[170px] w-[280px] xl:h-[188px] xl:w-[310px]",
  ];

  return (
    <Motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      aria-hidden={!isActive}
      className={`absolute inset-0 z-[50] flex min-h-[100svh] items-center overflow-hidden font-sans ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <AmbientBackground scrollProgress={scrollYProgress} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-visible">
          <Motion.div
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="pointer-events-none relative z-30 flex items-center justify-center px-4 text-center"
          >
            <div className="max-w-[56rem]">
              <div className="mx-auto mb-5 flex items-center justify-center gap-3">
                <Motion.div
                  animate={{ width: [42, 64, 42] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[2px] w-10 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                />
                <span className="text-[9px] font-black uppercase tracking-[0.38em] text-white/45 sm:text-[10px]">
                  Ecosystem Highlights - 05
                </span>
                <Motion.div
                  animate={{ width: [42, 64, 42] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[2px] w-10 bg-gradient-to-r from-transparent via-[#0f49ff] to-transparent"
                />
              </div>
              <TypewriterTitle isActive={titleReady} />
            </div>
          </Motion.div>

          <div className="pointer-events-none absolute inset-0 z-20 hidden overflow-hidden lg:block">
            {panelStates.map((panel, index) => (
              <EcosystemPanel
                key={panel.id}
                panel={panel}
                index={index}
                scrollYProgress={smoothProgress}
                className={desktopPlacement[index]}
              />
            ))}
          </div>

          <div className="relative z-20 grid w-full grid-cols-1 gap-4 lg:hidden">
            <div className="rounded-[30px] border border-white/10 bg-black/20 p-5 text-center backdrop-blur-md sm:p-6">
              <TypewriterTitle isActive={titleReady} />
            </div>
            {panelStates.map((panel, index) => (
              <Motion.div
                key={panel.id}
                initial={{ opacity: 0, y: 18 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <CardWrapper
                  accent={
                    panel.tone === "white"
                      ? "white"
                      : panel.tone === "black"
                      ? "black"
                      : panel.tone === "blue"
                      ? "blue"
                      : panel.tone === "violet"
                      ? "violet"
                      : "cyan"
                  }
                  className={`rounded-[28px] ${panel.className} p-4 sm:p-5`}
                >
                  <div className="relative z-10">{panel.content}</div>
                </CardWrapper>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default EcosystemHighlightsSection;
