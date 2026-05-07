import React from "react";
import { motion as Motion, useSpring, useTransform } from "framer-motion";

const HomeMissionSection = ({ scrollYProgress }) => {
  const blueprintOpacity = useTransform(
    scrollYProgress,
    [0.045, 0.065, 0.18, 0.24],
    [0, 1, 1, 0]
  );
  const blueprintY = useTransform(scrollYProgress, [0.045, 0.08], [60, 0]);
  const pathLength = useSpring(
    useTransform(scrollYProgress, [0.05, 0.16], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const missionHeadingColor = useTransform(
    scrollYProgress,
    [0.06, 0.14],
    ["#4b5563", "#ffffff"]
  );
  const missionSubtextColor = useTransform(
    scrollYProgress,
    [0.08, 0.16],
    ["#374151", "#9ca3af"]
  );
  const missionStatColor = useTransform(
    scrollYProgress,
    [0.1, 0.18],
    ["#1f2937", "#ffffff"]
  );

  return (
    <Motion.div
      style={{ opacity: blueprintOpacity, y: blueprintY }}
      className="absolute inset-0 flex flex-col items-center justify-start z-30 px-6 pt-20 md:pt-16 text-center bg-black"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <Motion.path
          d="M 50 0 C 70 20, 30 40, 50 50 S 80 80, 50 100"
          fill="transparent"
          stroke="#2563eb"
          strokeWidth="0.1"
          style={{ pathLength }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[30vw] font-bold text-white/[0.03] select-none uppercase tracking-tighter">
          Mission
        </span>
      </div>

      <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-8 relative z-20">
        Our Mission - 01
      </span>

      <Motion.h2
        style={{ color: missionHeadingColor }}
        className="text-6xl md:text-8xl font-light tracking-tighter max-w-5xl leading-[0.9] mb-10 relative z-20"
      >
        The world&apos;s first <br />
        <span className="text-gray-500 italic">comprehensive ecosystem</span> for
        builders.
      </Motion.h2>

      <Motion.p
        style={{ color: missionSubtextColor }}
        className="text-lg md:text-xl max-w-3xl font-light leading-relaxed mb-12 relative z-20"
      >
        Startup Park bridges the gap between ambitious ideas and market-ready
        solutions. From ideation to IPO, we are your trusted partner in building
        the future of India&apos;s economy.
      </Motion.p>

      <div className="flex flex-wrap justify-center gap-12 md:gap-20 relative z-20">
        <div className="text-left border-l border-gray-800 pl-6">
          <Motion.span
            style={{ color: missionStatColor }}
            className="text-3xl md:text-4xl font-bold block"
          >
            200+
          </Motion.span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500">
            Startups Supported
          </span>
        </div>
        <div className="text-left border-l border-gray-800 pl-6">
          <Motion.span
            style={{ color: missionStatColor }}
            className="text-3xl md:text-4xl font-bold block"
          >
            ₹600 Cr+
          </Motion.span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500">
            Funding Accessed
          </span>
        </div>
        <div className="text-left border-l border-gray-800 pl-6">
          <Motion.span
            style={{ color: missionStatColor }}
            className="text-3xl md:text-4xl font-bold block"
          >
            10,000+
          </Motion.span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500">
            Jobs Created
          </span>
        </div>
      </div>
    </Motion.div>
  );
};

export default HomeMissionSection;
