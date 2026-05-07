import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  MousePointer2,
  Radio,
  ShieldCheck,
  Cpu,
  Zap,
} from "lucide-react";

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
    <h2 className="max-w-6xl select-none text-2xl font-black leading-[0.82] tracking-tighter sm:text-4xl md:text-6xl lg:text-[64px]">
      <Motion.span
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0, y: 12 }}
        animate={
          isActive
            ? { clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0 }
            : { clipPath: "inset(0 100% 0 0)", opacity: 0, y: 12 }
        }
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className="block whitespace-nowrap text-[#0f49ff] drop-shadow-[0_0_18px_rgba(37,99,235,0.22)]"
      >
        {titleText1}
        <span className="ml-1 inline-block h-[0.95em] w-[0.18em] translate-y-[0.1em] bg-[#0f49ff] align-middle animate-pulse" />
      </Motion.span>

      <Motion.span
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0, y: 12 }}
        animate={
          isActive
            ? { clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0 }
            : { clipPath: "inset(0 100% 0 0)", opacity: 0, y: 12 }
        }
        transition={{
          duration: 1.15,
          delay: 0.28,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="block whitespace-nowrap bg-gradient-to-r from-[#0f49ff] via-[#4f7cff] to-[#7c6cff] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(79,124,255,0.18)]"
      >
        {titleText2}
      </Motion.span>
    </h2>
  );
}

const CardWrapper = ({
  children,
  className,
  delay = 0,
  side = "left",
  active = true,
  slideOnly = false,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? -100 : 100,
        y: slideOnly ? 0 : 16,
        scale: 0.98,
        rotate: slideOnly ? 0 : side === "left" ? -1.5 : 1.5,
        filter: "blur(8px)",
      }}
      animate={
        active
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              x: side === "left" ? -70 : 70,
              y: slideOnly ? 0 : 12,
              scale: 0.99,
              rotate: 0,
              filter: "blur(6px)",
            }
      }
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden transition-all duration-500 ${className}`}
    >
      <Motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.18), transparent 72%)`,
        }}
      />
      {children}
    </Motion.div>
  );
};

const DynamicBackground = ({ scrollProgress }) => {
  const rotate = useTransform(scrollProgress, [0.92, 1], [0, 90]);
  const y1 = useTransform(scrollProgress, [0.92, 1], [0, -60]);
  const y2 = useTransform(scrollProgress, [0.92, 1], [0, -120]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.14),transparent_26%),radial-gradient(circle_at_80%_25%,rgba(14,165,233,0.12),transparent_24%),radial-gradient(circle_at_60%_80%,rgba(99,102,241,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.04]" />

      <Motion.div
        style={{ rotate }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/35 sm:h-[900px] sm:w-[900px]"
      >
        <div className="absolute left-1/4 top-10 h-3 w-3 rounded-full bg-[#0f49ff] blur-sm animate-pulse" />
        <div className="absolute bottom-20 right-1/3 h-2 w-2 rounded-full bg-[#7c6cff]" />
      </Motion.div>

      <Motion.div
        style={{ y: y1 }}
        className="absolute right-[8%] top-1/4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-200/70 via-sky-200/30 to-transparent blur-2xl opacity-50 sm:right-[10%] sm:h-32 sm:w-32"
      />
      <Motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-[5%] h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200/70 via-blue-100/50 to-transparent blur-3xl sm:h-64 sm:w-64"
      />
      <Motion.div
        style={{ y: y1 }}
        className="absolute left-[18%] top-[12%] h-16 w-16 rounded-full bg-cyan-300/20 blur-2xl"
      />
      <Motion.div
        style={{ y: y2 }}
        className="absolute bottom-[18%] right-[18%] h-24 w-24 rounded-full bg-violet-300/20 blur-3xl"
      />

      <Motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-[22%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        animate={{ opacity: [0.18, 0.6, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-blue-400/18 to-transparent"
        animate={{ opacity: [0.12, 0.45, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const TestimonialCard = ({ item, active, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : 18,
        filter: active ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 flex flex-col justify-center ${
        active ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <p className="mb-4 text-base font-semibold leading-tight text-slate-800 sm:mb-5 sm:text-lg md:text-xl">
        "{item.quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="h-[1px] w-8 bg-slate-300" />
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 sm:text-xs sm:tracking-[0.3em]">
          {item.name}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-50" />
      <Motion.div
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: active ? 4 : 0.2, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-blue-600"
      />
      <div className="absolute right-0 top-0 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
        {String(index + 1).padStart(2, "0")}
      </div>
    </Motion.div>
  );
};

const EcosystemHighlightsSection = ({ scrollYProgress, isActive = true }) => {
  const [testIndex, setTestIndex] = useState(0);
  const [titleReady, setTitleReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    const revealTimer = setTimeout(() => {
      setTitleReady(true);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(revealTimer);
    };
  }, []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
  });

  const ecosystemOpacity = useTransform(
    scrollYProgress,
    [0.915, 0.925, 0.945, 0.955],
    [0, 1, 1, 0]
  );
  const ecosystemY = useTransform(scrollYProgress, [0.915, 0.925], [52, 0]);

  const rotate = useTransform(scrollYProgress, [0.95, 1], [0, 360]);

  const launchReveal = useTransform(scrollYProgress, [0.925, 0.945], [0, 1]);
  const dayOneReveal = useTransform(scrollYProgress, [0.935, 0.955], [0, 1]);
  const communityReveal = useTransform(scrollYProgress, [0.945, 0.965], [0, 1]);
  const testimonialReveal = useTransform(scrollYProgress, [0.945, 0.965], [0, 1]);
  const executeReveal = useTransform(scrollYProgress, [0.955, 0.975], [0, 1]);

  const launchY = useTransform(scrollYProgress, [0.925, 0.945], [18, 0]);
  const dayOneY = useTransform(scrollYProgress, [0.935, 0.955], [18, 0]);
  const communityY = useTransform(scrollYProgress, [0.945, 0.965], [18, 0]);
  const testimonialY = useTransform(scrollYProgress, [0.945, 0.965], [18, 0]);
  const executeY = useTransform(scrollYProgress, [0.955, 0.975], [18, 0]);

  const titleOpacity = useTransform(smoothProgress, [0.918, 0.928], [0, 1]);
  const titleScale = useTransform(smoothProgress, [0.918, 0.928], [0.985, 1]);

  return (
    <Motion.div
      style={{ opacity: ecosystemOpacity, y: ecosystemY }}
      aria-hidden={!isActive}
      className={`absolute inset-0 z-[50] flex min-h-[100svh] items-start overflow-hidden bg-white font-sans ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <DynamicBackground scrollProgress={scrollYProgress} />

      <Motion.div
        style={{ rotate }}
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-20 sm:px-6 sm:pt-24 md:px-10 lg:px-12">
        <div className="mb-5 sm:mb-7 lg:mb-8">
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-5 flex items-center gap-3"
          >
            <Motion.div
              animate={{ width: [40, 58, 40] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-[2px] w-10 bg-gradient-to-r from-[#0f49ff] via-[#4f7cff] to-[#7c6cff] shadow-[0_0_18px_rgba(79,124,255,0.45)] sm:w-12"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0f49ff] sm:text-[12px] sm:tracking-[0.5em]">
              Ecosystem Highlights - 05
            </span>
          </Motion.div>

          <Motion.div style={{ opacity: titleOpacity, scale: titleScale }}>
            <TypewriterTitle isActive={titleReady} />
          </Motion.div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          <CardWrapper
            side="left"
            delay={0.08}
            active={isActive}
            slideOnly
            className="lg:col-span-5 overflow-hidden rounded-[28px] border border-blue-500/10 bg-[linear-gradient(135deg,#050505_0%,#0b1124_100%)] p-5 text-white shadow-2xl shadow-blue-950/20 sm:rounded-[34px] sm:p-7 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(15,73,255,0.18),transparent_28%),radial-gradient(circle_at_78%_0%,rgba(76,224,255,0.12),transparent_24%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <p className="relative z-10 mb-5 text-[10px] font-black uppercase tracking-[0.35em] text-[#7aa0ff] sm:mb-8 sm:text-[11px] sm:tracking-[0.4em]">
              Launch Pad
            </p>
            <h3 className="relative z-10 mb-3 text-xl font-bold leading-tight tracking-tight sm:mb-4 sm:text-2xl md:text-3xl">
              A stage for founders to introduce their startup.
            </h3>
            <p className="relative z-10 max-w-prose text-xs font-medium leading-relaxed text-slate-300 sm:text-sm md:text-base">
              Present your startup, gain visibility, and begin your journey with momentum.
            </p>
          </CardWrapper>

          <CardWrapper
            side="right"
            delay={0.22}
            active={isActive}
            slideOnly
            className="lg:col-span-4 flex flex-col justify-between overflow-hidden rounded-[28px] border border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f2f6ff_100%)] p-5 shadow-xl sm:rounded-[34px] sm:p-7 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(15,73,255,0.08),transparent_26%)]" />
            <div>
              <p className="relative z-10 mb-5 text-[10px] font-black uppercase tracking-[0.35em] text-[#0f49ff] sm:mb-8 sm:text-[11px] sm:tracking-[0.4em]">
                Day One Services
              </p>
              <h3 className="relative z-10 text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl md:text-2xl">
                Registration. Branding. Website.
              </h3>
            </div>
            <p className="relative z-10 mt-4 text-sm font-semibold leading-relaxed text-slate-500 sm:text-base">
              A professional service layer for company basics.
            </p>
          </CardWrapper>

          <Motion.div
            style={{ opacity: communityReveal, y: communityY }}
            className="lg:col-span-3 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,#1d4ed8_0%,#2563eb_35%,#0ea5e9_100%)] p-5 text-white shadow-2xl shadow-blue-500/30 sm:rounded-[34px] sm:p-7 md:p-8"
          >
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_26%)]" />
            <p className="relative z-10 mb-6 text-[10px] font-black uppercase tracking-[0.35em] text-blue-50 sm:mb-10 sm:text-[11px] sm:tracking-[0.4em]">
              Community
            </p>
            <div className="relative z-10 space-y-4 font-bold sm:space-y-5">
              {["Founder Meetups", "Live Workshops", "Pitch Rooms"].map((item) => (
                <Motion.div
                  key={item}
                  whileHover={{ x: 10 }}
                  className="flex cursor-pointer items-center gap-4 text-sm transition-colors hover:text-white/95"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  {item}
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            style={{ opacity: testimonialReveal, y: testimonialY }}
            className="lg:col-span-7 relative min-h-[220px] overflow-hidden rounded-[28px] border border-slate-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,245,255,0.9))] p-4 shadow-lg backdrop-blur-xl sm:min-h-[250px] sm:rounded-[34px] sm:p-6 md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(15,73,255,0.08),transparent_30%),radial-gradient(circle_at_72%_80%,rgba(124,93,255,0.08),transparent_24%)]" />
            <div className="absolute left-8 top-6 flex items-center gap-3 sm:left-10 sm:top-8">
              <div className="h-2 w-2 rounded-full bg-[#0f49ff] animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0f49ff] sm:text-[11px] sm:tracking-[0.4em]">
                Testimonials
              </p>
            </div>

            <div className="relative h-40 sm:h-44">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  key={testIndex}
                  item={testimonials[testIndex]}
                  active
                  index={testIndex}
                />
              </AnimatePresence>
            </div>
          </Motion.div>

          <CardWrapper
            side="right"
            delay={0.4}
            active={isActive}
            className="group lg:col-span-5 relative overflow-hidden rounded-[28px] border border-blue-500/15 bg-[linear-gradient(135deg,#0b1025_0%,#111827_55%,#1d4ed8_140%)] p-5 text-white shadow-2xl shadow-blue-950/20 sm:rounded-[34px] sm:p-7 md:p-8"
          >
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#0f49ff]/25 blur-[100px] transition-colors group-hover:bg-[#0ea5e9]/30" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.12),transparent_26%)]" />
            <div className="relative z-10">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 sm:mb-8 sm:text-[11px] sm:tracking-[0.4em]">
                Execute Now
              </p>
              <h3 className="mb-5 text-xl font-bold leading-tight tracking-tight sm:mb-7 sm:text-2xl md:text-3xl">
                Join Startup Park. <br />
                <span className="text-cyan-300">Scale your vision.</span>
              </h3>
            </div>
            <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button className="flex-1 rounded-[18px] bg-white py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-xl shadow-white/5 transition-transform active:scale-95 hover:scale-105 sm:rounded-[22px] sm:py-5 sm:text-[12px]">
                Join Today
              </button>
              <button className="flex-1 rounded-[18px] border border-white/10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white/5 sm:rounded-[22px] sm:py-5 sm:text-[12px]">
                Learn More
              </button>
            </div>
          </CardWrapper>
        </div>
      </div>
    </Motion.div>
  );
};

export default EcosystemHighlightsSection;