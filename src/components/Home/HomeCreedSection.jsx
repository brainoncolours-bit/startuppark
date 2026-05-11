import React from "react";
import { motion as Motion, useTransform } from "framer-motion";

const HomeCreedSection = ({ scrollYProgress }) => {
  const creedOpacity = useTransform(
    scrollYProgress,
    [0.34, 0.365, 0.39, 0.41],
    [0, 1, 1, 0]
  );
  const creedScale = useTransform(scrollYProgress, [0.34, 0.365], [0.95, 1]);

  return (
    <Motion.div
      style={{ opacity: creedOpacity, scale: creedScale }}
      className="absolute inset-0 z-[45] flex flex-col items-center justify-center px-10 text-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-video border border-black/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square border border-black/[0.02] rounded-full pointer-events-none" />

      <div className="max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-12">
          &quot;We don&apos;t just host startups. <br />
          <span className="text-blue-600">We engineer the future</span> <br />
          of the Indian entrepreneur.&quot;
        </h2>
      </div>
    </Motion.div>
  );
};

export default HomeCreedSection;
