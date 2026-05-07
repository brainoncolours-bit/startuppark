import React, { useEffect, useState } from "react";
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
    <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-[64px] font-black tracking-tighter leading-[0.82] select-none max-w-6xl">
      <Motion.span
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        animate={
          isActive
            ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
            : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
        }
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className="block whitespace-nowrap text-[#0f49ff] drop-shadow-[0_0_18px_rgba(37,99,235,0.22)]"
      >
        {titleText1}
        <span className="ml-1 inline-block h-[0.95em] w-[0.18em] translate-y-[0.1em] bg-[#0f49ff] animate-pulse align-middle" />
      </Motion.span>
      <Motion.span
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        animate={
          isActive
            ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
            : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
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
        x: side === "left" ? -180 : 180,
        y: slideOnly ? 0 : 18,
        scale: slideOnly ? 1 : 0.96,
        rotate: slideOnly ? 0 : side === "left" ? -2 : 2,
        filter: "blur(10px)",
      }}
      animate={
        active
          ? slideOnly
            ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }
            : { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }
          : {
              opacity: 0,
              x: side === "left" ? -110 : 110,
              y: slideOnly ? 0 : 16,
              scale: slideOnly ? 1 : 0.98,
              rotate: slideOnly ? 0 : side === "left" ? -1.5 : 1.5,
              filter: "blur(8px)",
            }
      }
      transition={{
        duration: slideOnly ? 0.95 : 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden transition-all duration-500 ${className}`}
    >
      <Motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.18), transparent 70%)`,
        }}
      />
      {children}
    </Motion.div>
  );
};

const DynamicBackground = ({ scrollProgress }) => {
  const rotate = useTransform(scrollProgress, [0.95, 1], [0, 90]);
  const y1 = useTransform(scrollProgress, [0.95, 1], [0, -100]);
  const y2 = useTransform(scrollProgress, [0.95, 1], [0, -200]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.14),transparent_26%),radial-gradient(circle_at_80%_25%,rgba(14,165,233,0.12),transparent_24%),radial-gradient(circle_at_60%_80%,rgba(99,102,241,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.04]" />
      <Motion.div
        style={{ rotate }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] sm:w-[900px] sm:h-[900px] border-[1px] border-dashed border-blue-300/45 rounded-full"
      >
        <div className="absolute top-10 left-1/4 w-3 h-3 bg-[#0f49ff] rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#7c6cff] rounded-full" />
      </Motion.div>

      <Motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-[6%] sm:right-[10%] w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-200/70 via-sky-200/30 to-transparent rounded-full blur-2xl opacity-50"
      />
      <Motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-[5%] w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tr from-indigo-200/70 via-blue-100/50 to-transparent rounded-full blur-3xl"
      />
      <Motion.div
        style={{ y: y1 }}
        className="absolute top-[12%] left-[18%] w-20 h-20 rounded-full bg-cyan-300/30 blur-2xl"
      />
      <Motion.div
        style={{ y: y2 }}
        className="absolute bottom-[18%] right-[18%] w-28 h-28 rounded-full bg-violet-300/20 blur-3xl"
      />
    </div>
  );
};

const TestimonialCard = ({ item, active, index }) => {
  return (
    <Motion.div
      key={item.name}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{
        opacity: active ? 1 : 0,
        y: active ? 0 : 20,
        filter: active ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 flex flex-col justify-center ${active ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <p className="text-base sm:text-lg md:text-xl text-slate-800 font-semibold leading-tight mb-4 sm:mb-5">
        "{item.quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-8 h-[1px] bg-slate-300" />
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-slate-400 font-black">
          {item.name}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-50" />
      <Motion.div
        animate={{ width: active ? "100%" : "0%" }}
        transition={{ duration: active ? 4 : 0.2, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-blue-600"
      />
      <div className="absolute top-0 right-0 text-[10px] uppercase tracking-[0.3em] text-slate-300 font-black">
        {String(index + 1).padStart(2, "0")}
      </div>
    </Motion.div>
  );
};

const EcosystemHighlightsSection = ({ scrollYProgress, isActive = true }) => {
  const [testIndex, setTestIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const ecosystemOpacity = useTransform(scrollYProgress, [0.93, 0.945, 0.965, 0.97], [0, 1, 1, 0]);
  const ecosystemY = useTransform(scrollYProgress, [0.93, 0.945], [100, 0]);
  const rotate = useTransform(smoothProgress, [0.93, 0.97], [0, 360]);

  return (
    <Motion.div
      style={{ opacity: ecosystemOpacity, y: ecosystemY }}
      aria-hidden={!isActive}
      className={`relative lg:absolute inset-0 z-[50] bg-white px-4 sm:px-6 md:px-20 py-10 sm:py-14 overflow-hidden flex flex-col justify-center font-sans min-h-[100svh] lg:min-h-0 ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <DynamicBackground scrollProgress={scrollYProgress} />

      <Motion.div
        style={{ rotate }}
        className="absolute inset-0 pointer-events-none opacity-7"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto pt-20 sm:pt-24 lg:pt-26 pb-4">
        <div className="mb-5 sm:mb-7 lg:mb-8">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <Motion.div
              animate={{ width: [40, 58, 40] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-[2px] w-10 sm:w-12 bg-gradient-to-r from-[#0f49ff] via-[#4f7cff] to-[#7c6cff] shadow-[0_0_18px_rgba(79,124,255,0.45)]"
            />
            <span className="text-[#0f49ff] font-black text-[10px] sm:text-[12px] uppercase tracking-[0.35em] sm:tracking-[0.5em]">
              Ecosystem Highlights - 05
            </span>
          </Motion.div>

          <TypewriterTitle isActive={isActive} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
          <CardWrapper
            side="left"
            delay={0.08}
            active={isActive}
            slideOnly
            className="lg:col-span-5 rounded-[26px] sm:rounded-[34px] bg-[linear-gradient(135deg,#050505_0%,#0b1124_100%)] text-white p-5 sm:p-7 md:p-8 shadow-2xl border border-blue-500/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,73,255,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(76,224,255,0.12),transparent_24%)] pointer-events-none" />
            <p className="relative z-10 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#7aa0ff] font-black mb-5 sm:mb-8">
              Launch Pad
            </p>
            <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight">
              A stage for founders to introduce their startup.
            </h3>
            <p className="relative z-10 text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base font-medium">
              Present your startup, gain visibility, and begin your journey with momentum.
            </p>
          </CardWrapper>

          <CardWrapper
            side="right"
            delay={0.22}
            active={isActive}
            slideOnly
            className="lg:col-span-4 rounded-[26px] sm:rounded-[34px] bg-[linear-gradient(180deg,#ffffff_0%,#f2f6ff_100%)] border border-blue-100 p-5 sm:p-7 md:p-8 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(15,73,255,0.08),transparent_26%)] pointer-events-none" />
            <div>
              <p className="relative z-10 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#0f49ff] font-black mb-5 sm:mb-8">
                Day One Services
              </p>
              <h3 className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                Registration. Branding. Website.
              </h3>
            </div>
            <p className="relative z-10 text-slate-500 leading-relaxed font-semibold text-sm sm:text-base mt-4">
              A professional service layer for company basics.
            </p>
          </CardWrapper>

          <CardWrapper
            side="right"
            delay={0.36}
            active={isActive}
            slideOnly
            className="lg:col-span-3 rounded-[26px] sm:rounded-[34px] bg-[linear-gradient(160deg,#1d4ed8_0%,#2563eb_35%,#0ea5e9_100%)] text-white p-5 sm:p-7 md:p-8 shadow-2xl shadow-blue-500/40 border border-white/10"
          >
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -top-10 w-40 h-40 border border-white/10 rounded-full"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_26%)] pointer-events-none" />
            <p className="relative z-10 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-blue-50 font-black mb-6 sm:mb-10">
              Community
            </p>
            <div className="relative z-10 space-y-4 sm:space-y-5 font-bold">
              {["Founder Meetups", "Live Workshops", "Pitch Rooms"].map((item) => (
                <Motion.div key={item} whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-pointer text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {item}
                </Motion.div>
              ))}
            </div>
          </CardWrapper>

          <Motion.div className="lg:col-span-7 rounded-[26px] sm:rounded-[34px] border border-slate-100 p-4 sm:p-6 md:p-8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,245,255,0.84))] backdrop-blur-xl shadow-lg relative min-h-[220px] sm:min-h-[250px] flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(15,73,255,0.08),transparent_30%),radial-gradient(circle_at_72%_80%,rgba(124,93,255,0.08),transparent_24%)] pointer-events-none" />
            <div className="absolute top-6 sm:top-8 left-8 sm:left-10 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#0f49ff] rounded-full animate-pulse" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-[#0f49ff] font-black">
                Testimonials
              </p>
            </div>

            <div className="relative h-40">
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
            className="lg:col-span-5 rounded-[26px] sm:rounded-[34px] bg-[linear-gradient(135deg,#0b1025_0%,#111827_55%,#1d4ed8_140%)] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl border border-blue-500/15"
          >
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0f49ff]/25 blur-[100px] rounded-full group-hover:bg-[#0ea5e9]/30 transition-colors" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.12),transparent_26%)] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-cyan-300 font-black mb-5 sm:mb-8">
                Execute Now
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-5 sm:mb-7 leading-tight">
                Join Startup Park. <br />
                <span className="text-cyan-300">Scale your vision.</span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10">
              <button className="flex-1 bg-white text-black py-4 sm:py-5 rounded-[18px] sm:rounded-[22px] text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 shadow-xl shadow-white/5">
                Join Today
              </button>
              <button className="flex-1 border border-white/10 text-white py-4 sm:py-5 rounded-[18px] sm:rounded-[22px] text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
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
