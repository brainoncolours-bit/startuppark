import React from "react";
import { motion as Motion, useTransform } from "framer-motion";

const HomeFinalRevealSection = ({ scrollYProgress }) => {
  const footerOpacity = useTransform(scrollYProgress, [0.992, 1], [0, 1]);
  const footerScale = useTransform(scrollYProgress, [0.992, 1], [1.05, 1]);

  return (
    <Motion.div
      style={{ opacity: footerOpacity, scale: footerScale }}
      className="pointer-events-none fixed inset-0 z-[200] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
        <div className="animate-marquee text-[30vh] font-bold flex">
          <span className="px-20">THE STARTUP PARK</span>
          <span className="px-20">INDIA'S LAUNCHPAD</span>
          <span className="px-20">THE STARTUP PARK</span>
          <span className="px-20">INDIA'S LAUNCHPAD</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.6em] mb-10">
          End of Deployment
        </span>
        <Motion.h2 className="text-[12vw] font-bold tracking-tighter leading-none mb-16 uppercase">
          SUCCEED.
        </Motion.h2>

        <div className="flex flex-col items-center gap-10">
          <button className="pointer-events-auto group relative bg-white text-black px-16 py-8 rounded-full font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)]">
            <span className="relative z-10">Enter the Ecosystem</span>
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </button>

          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-gray-800" />
            <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">
              startup.park - (c) 2026
            </p>
            <div className="w-12 h-[1px] bg-gray-800" />
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default HomeFinalRevealSection;
