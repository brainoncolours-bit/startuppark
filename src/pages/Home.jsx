import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Asset Imports
import img1 from "../assets/4L1A0587.JPG.jpeg";
import img2 from "../assets/4L1A0589.JPG.jpeg";
import img4 from "../assets/4L1A0651.JPG.jpeg";
import img5 from "../assets/4L1A0676.JPG.jpeg";
import img6 from "../assets/MHD03595.JPG";
import img7 from "../assets/MHD03596.JPG";
import img9 from "../assets/MHD03615.JPG";
import img10 from "../assets/MHD03633.JPG";
import img11 from "../assets/MHD03637.JPG";
import img12 from "../assets/MHD03642.JPG";
import img14 from "../assets/MHD03649.JPG";
import img15 from "../assets/MHD03656.JPG";
import img16 from "../assets/MHD03659.JPG";
import img17 from "../assets/MHD03664.JPG";
import img19 from "../assets/MHD03670.JPG";
import img20 from "../assets/MHD03677.JPG";

const StartupParkLanding = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // MASS adjusted to 0.2 for faster response; DAMPING increased to 40 to eliminate "stutter"
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 40,
    stiffness: 90,
    mass: 0.2,
    restDelta: 0.001
  });

  // --- ANIMATION CALCULATIONS (Same ranges as requested) ---
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);
  const heroTextY = useTransform(smoothProgress, [0, 0.12], [0, -100]);

  const videoScale = useTransform(smoothProgress, [0.1, 0.35], [1, 0.35]);
  const videoRadius = useTransform(smoothProgress, [0.12, 0.3], [0, 32]);
  const videoY = useTransform(smoothProgress, [0.35, 0.75], ["0%", "-120%"]);
  const videoOpacity = useTransform(smoothProgress, [0.45, 0.55], [1, 0]);

  const gridOpacity = useTransform(smoothProgress, [0.15, 0.25, 0.75, 0.85], [0, 1, 1, 0]);
  const col1Y = useTransform(smoothProgress, [0.15, 0.85], ["80vh", "-160vh"]);
  const col2Y = useTransform(smoothProgress, [0.15, 0.85], ["40vh", "-200vh"]);
  const col4Y = useTransform(smoothProgress, [0.15, 0.85], ["60vh", "-170vh"]);
  const col5Y = useTransform(smoothProgress, [0.15, 0.85], ["30vh", "-140vh"]);

  const contentOpacity = useTransform(smoothProgress, [0.38, 0.48, 0.65, 0.75], [0, 1, 1, 0]);
  const contentScale = useTransform(smoothProgress, [0.4, 0.48], [0.85, 1]);

  const endTitleOpacity = useTransform(smoothProgress, [0.82, 0.92], [0, 1]);
  const endTitleY = useTransform(smoothProgress, [0.82, 0.92], [80, 0]);

  const columns = [
    { y: col1Y, images: [img1, img6, img11, img16], left: "2%" },
    { y: col2Y, images: [img2, img7, img12, img17], left: "22%" },
    { isVideo: true, left: "50%" }, 
    { y: col4Y, images: [img4, img9, img14, img19], left: "78%" },
    { y: col5Y, images: [img5, img10, img15, img20], left: "95%" },
  ];

  return (
    <div ref={containerRef} className="relative h-[1000vh] bg-[#f0f0ec]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;500;600&display=swap');
        
        /* GPU Acceleration for all motion elements */
        .accelerate {
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 10vw, 8.5rem);
          line-height: 0.9;
        }
        .center-text-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
        }
        .end-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 8vw, 6rem);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="sticky top-0 h-screen w-full overflow-hidden no-scrollbar">
        
        {/* HERO VIDEO - Optimized with Accelerate class */}
        <motion.div
          style={{ 
            scale: videoScale, 
            borderRadius: videoRadius, 
            y: videoY,
            opacity: videoOpacity 
          }}
          className="accelerate absolute inset-0 z-20 flex items-center justify-center overflow-hidden bg-black shadow-2xl"
        >
          <video
            autoPlay loop muted playsInline preload="auto"
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/Startup_Festival_2025_Teaser_Video_Day_1_Inauguration_Day_2160P.mp4" type="video/mp4" />
          </video>
          
          <motion.div 
            style={{ opacity: heroTextOpacity, y: heroTextY }}
            className="accelerate absolute inset-0 flex items-center justify-center text-center text-white p-6"
          >
            <h1 className="hero-heading tracking-tighter drop-shadow-2xl">
              Innovate.<br/>Elevate.<br/>Create.
            </h1>
          </motion.div>
        </motion.div>

        {/* PARALLAX GRID - Optimized with Accelerate class */}
        <motion.div style={{ opacity: gridOpacity }} className="accelerate absolute inset-0 z-10">
          {columns.map((col, i) => !col.isVideo && (
            <motion.div
              key={i}
              style={{ y: col.y, left: col.left, x: "-50%" }}
              className="accelerate absolute top-0 flex flex-col gap-16 w-[16vw]"
            >
              {col.images.map((src, idx) => (
                <div key={idx} className="w-full aspect-[4/5] bg-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* CONTENT OVERLAYS */}
        <motion.div 
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="accelerate absolute inset-0 z-[25] flex items-center justify-center px-6 pointer-events-none"
        >
          <div className="max-w-3xl text-center">
            <h2 className="center-text-heading text-gray-900 mb-8 leading-tight">We built our own road.</h2>
            <p className="text-xl md:text-3xl text-gray-600 font-light leading-relaxed">
              True collaboration across disciplines.
            </p>
          </div>
        </motion.div>

        <motion.div 
          style={{ opacity: endTitleOpacity, y: endTitleY }}
          className="accelerate absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-6"
        >
          <h2 className="end-heading text-gray-900 mb-6">The Startup School<br/>Behind It All.</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default StartupParkLanding;