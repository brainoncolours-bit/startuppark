import React, { useState } from "react";
import { motion as Motion, useTransform } from "framer-motion";

const HomeHeroSection = ({ scrollYProgress }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.025, 0.065],
    [1, 0.7, 0.38]
  );
  const videoY = useTransform(scrollYProgress, [0.025, 0.075], ["0vh", "-120vh"]);
  const videoRadius = useTransform(scrollYProgress, [0.025, 0.065], [0, 60]);
  const videoOpacity = useTransform(scrollYProgress, [0.05, 0.08], [1, 0]);

  return (
    <Motion.div
      style={{
        scale: videoScale,
        borderRadius: videoRadius,
        y: videoY,
        opacity: videoOpacity,
      }}
      className="absolute inset-0 z-20 overflow-hidden bg-[#121212] flex items-center justify-center origin-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
    >
      <div className="hero-noise" />
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoReady(true)}
        className={`w-full h-full object-cover transition-opacity duration-1500 ${
          isVideoReady ? "opacity-40" : "opacity-0"
        }`}
      >
        <source
          src="/Startup_Festival_2025_Teaser_Video_Day_1_Inauguration_Day_2160P.mp4"
          type="video/mp4"
        />
      </video>

      <Motion.div className="absolute text-center px-6">
        <h1 className="text-white editorial-heading font-semibold mb-6 uppercase">
          INDIA'S LAUNCHPAD
          <br />
          FOR FOUNDERS.
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-blue-500" />
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em]">
            Innovate - Accelerate - Succeed
          </span>
          <div className="h-[1px] w-12 bg-blue-500" />
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default HomeHeroSection;
