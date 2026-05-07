import React, { useEffect, useMemo, useState } from "react";
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

const CardWrapper = ({ children, className, delay = 0, side = "left" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Motion.div
      initial={{ opacity: 0, x: side === "left" ? -80 : 80, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden transition-all duration-500 ${className}`}
    >
      <Motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.15), transparent 80%)`,
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
      <Motion.div
        style={{ rotate }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] sm:w-[900px] sm:h-[900px] border-[1px] border-dashed border-blue-200/50 rounded-full"
      >
        <div className="absolute top-10 left-1/4 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-300 rounded-full" />
      </Motion.div>

      <Motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-[6%] sm:right-[10%] w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-2xl opacity-40"
      />
      <Motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-[5%] w-40 h-40 sm:w-64 sm:h-64 bg-blue-50/50 rounded-full blur-3xl"
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
      <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-semibold leading-tight mb-5 sm:mb-7">
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
  const ecosystemOpacity = useTransform(scrollYProgress, [0.95, 0.97, 0.99, 0.995], [0, 1, 1, 0]);
  const ecosystemY = useTransform(scrollYProgress, [0.95, 0.97], [100, 0]);
  const rotate = useTransform(smoothProgress, [0.95, 1], [0, 360]);

  const titleLines = useMemo(
    () => [titleText1.split(" "), titleText2],
    []
  );

  return (
    <Motion.div
      style={{ opacity: ecosystemOpacity, y: ecosystemY }}
      className={`relative lg:absolute inset-0 z-[50] bg-white px-4 sm:px-6 md:px-20 py-10 sm:py-14 overflow-hidden flex flex-col justify-center font-sans min-h-[100svh] lg:min-h-0 ${
        isActive ? "visible lg:visible" : "visible lg:invisible"
      }`}
      aria-hidden={!isActive}
    >
      <DynamicBackground scrollProgress={scrollYProgress} />

      <Motion.div
        style={{ rotate }}
        className="absolute inset-0 pointer-events-none opacity-5"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto pt-24 sm:pt-28 lg:pt-32 pb-8 lg:scale-[0.92] origin-top">
        <div className="mb-7 sm:mb-10 lg:mb-12">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-10 sm:w-12 bg-blue-600" />
            <span className="text-blue-600 font-black text-[10px] sm:text-[12px] uppercase tracking-[0.35em] sm:tracking-[0.5em]">
              Ecosystem Highlights - 05
            </span>
          </Motion.div>

          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.84] select-none max-w-4xl">
            {titleLines[0].map((word, i) => (
              <Motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="inline-block mr-4"
              >
                {word}
              </Motion.span>
            ))}
            <br />
            <Motion.span
              className="text-blue-600 inline-block"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {titleLines[1]}
            </Motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          <CardWrapper
            side="left"
            delay={0.1}
            className="lg:col-span-5 rounded-[28px] sm:rounded-[38px] bg-black text-white p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-blue-400 font-black mb-5 sm:mb-8">
              Launch Pad
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              A stage for founders to introduce their startup.
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
              Present your startup, gain visibility, and begin your journey with momentum.
            </p>
          </CardWrapper>

          <CardWrapper
            side="right"
            delay={0.2}
            className="lg:col-span-4 rounded-[28px] sm:rounded-[38px] bg-white border border-slate-100 p-6 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-blue-600 font-black mb-5 sm:mb-8">
                Day One Services
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                Registration. Branding. Website.
              </h3>
            </div>
            <p className="text-slate-500 leading-relaxed font-semibold text-sm sm:text-base mt-4">
              A professional service layer for company basics.
            </p>
          </CardWrapper>

          <CardWrapper
            side="right"
            delay={0.3}
            className="lg:col-span-3 rounded-[28px] sm:rounded-[38px] bg-blue-600 text-white p-6 sm:p-8 md:p-10 shadow-2xl shadow-blue-500/40"
          >
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -top-10 w-40 h-40 border border-white/10 rounded-full"
            />
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-blue-100 font-black mb-6 sm:mb-10">
              Community
            </p>
            <div className="space-y-4 sm:space-y-5 font-bold">
              {["Founder Meetups", "Live Workshops", "Pitch Rooms"].map((item) => (
                <Motion.div key={item} whileHover={{ x: 10 }} className="flex items-center gap-4 cursor-pointer text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {item}
                </Motion.div>
              ))}
            </div>
          </CardWrapper>

          <Motion.div className="lg:col-span-7 rounded-[28px] sm:rounded-[38px] border border-slate-100 p-5 sm:p-7 md:p-10 bg-white/80 backdrop-blur-xl shadow-lg relative min-h-[280px] sm:min-h-[320px] flex flex-col justify-center overflow-hidden">
            <div className="absolute top-10 left-12 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-blue-600 font-black">
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
            className="lg:col-span-5 rounded-[28px] sm:rounded-[38px] bg-slate-900 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-colors" />
            <div className="relative z-10">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-blue-400 font-black mb-5 sm:mb-8">
                Execute Now
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-7 sm:mb-9 leading-tight">
                Join Startup Park. <br />
                <span className="text-blue-500">Scale your vision.</span>
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
