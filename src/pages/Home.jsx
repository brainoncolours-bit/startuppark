import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

// Dummy Image URLs for high-quality startup aesthetic
const img1 = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80";
const img2 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
const img4 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
const img5 = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80";
const img6 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
const img7 = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
const img9 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
const img10 = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80";
const img11 = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80";
const img12 = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";
const img14 = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80";
const img15 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80";
const img16 = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80";
const img17 = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80";
const img19 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
const img20 = "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=800&q=80";

const features = [
  { title: "Co-working Zones", desc: "Premium co-working zones designed for ambitious startups." },
  { title: "Innovation Labs", desc: "Premium innovation labs designed for ambitious startups." },
  { title: "Event Halls & Demo Stages", desc: "Premium event halls & demo stages designed for ambitious startups." },
  { title: "Networking Lounges", desc: "Premium networking lounges designed for ambitious startups." },
  { title: "Food Courts & Coffee Bars", desc: "Premium food courts & coffee bars designed for ambitious startups." },
  { title: "Incubator & Accelerator", desc: "Premium incubator & accelerator designed for ambitious startups." },
  { title: "Mentoring Programs", desc: "Premium mentoring programs designed for ambitious startups." },
  { title: "Development Programs", desc: "Premium development programs designed for ambitious startups." },
  { title: "Business Schools & Masterclasses", desc: "Premium business schools & masterclasses designed for ambitious startups." },
  { title: "Startup Legal Help", desc: "Premium startup legal help designed for ambitious startups." },
];

const StartupParkLanding = ({ onNavbarShow }) => {
  const containerRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progress = scrollYProgress;

  // --- ANIMATION CALCULATIONS ---
  const heroTextOpacity = useTransform(progress, [0, 0.08], [1, 0]);
  const heroTextY = useTransform(progress, [0, 0.12], [0, -40]);

  // Video transition
  const videoScale = useTransform(progress, [0.08, 0.35], [1, 0.35]);
  const videoRadius = useTransform(progress, [0.1, 0.12], [0, 48]);
  const videoY = useTransform(progress, [0.35, 0.75], ["0%", "-120%"]);
  const videoOpacity = useTransform(progress, [0.45, 0.55], [1, 0]);

  // Grid animations
  const gridOpacity = useTransform(progress, [0.2, 0.35, 0.55, 0.60], [0, 1, 1, 0]);
  const col1Y = useTransform(progress, [0.15, 0.85], ["80vh", "-160vh"]);
  const col2Y = useTransform(progress, [0.15, 0.85], ["40vh", "-200vh"]);
  const col4Y = useTransform(progress, [0.15, 0.85], ["60vh", "-170vh"]);
  const col5Y = useTransform(progress, [0.15, 0.85], ["30vh", "-140vh"]);

  const contentOpacity = useTransform(progress, [0.4, 0.48, 0.52, 0.56], [0, 1, 1, 0]);
  const contentScale = useTransform(progress, [0.4, 0.48], [0.95, 1]);

  // --- ORBITAL PILLARS TRANSITIONS (0.56 - 0.74) ---
  const orbitalOpacity = useTransform(progress, [0.56, 0.60, 0.70, 0.74], [0, 1, 1, 0]);
  const pillarScale = useTransform(progress, [0.56, 0.68], [0.3, 1]);
  const lineDraw = useTransform(progress, [0.58, 0.70], [0, 1]);
  const p1X = useTransform(progress, [0.56, 0.70], [0, -320]);
  const p1Y = useTransform(progress, [0.56, 0.70], [0, -180]);
  const p2X = useTransform(progress, [0.56, 0.70], [0, 320]);
  const p2Y = useTransform(progress, [0.56, 0.70], [0, -180]);
  const p3Y = useTransform(progress, [0.56, 0.70], [0, 220]);

  // --- FEATURED SECTION TRANSITION (0.74 - 0.84) ---
  const featureImageOpacity = useTransform(progress, [0.74, 0.78, 0.82, 0.84], [0, 1, 1, 0]);
  const featureImageScale = useTransform(progress, [0.74, 0.80], [0.4, 1.4]);
  const featureImageX = useTransform(progress, [0.74, 0.80], ["78%", "25%"]); 
  const featureImageY = useTransform(progress, [0.74, 0.80], ["40vh", "0vh"]); 

  const featureImage2Opacity = useTransform(progress, [0.76, 0.80, 0.82, 0.84], [0, 1, 1, 0]);
  const featureImage2Y = useTransform(progress, [0.76, 0.82], ["80vh", "15vh"]); 
  const featureImage2Scale = useTransform(progress, [0.76, 0.82], [0.8, 1.2]);
  
  const featureTextOpacity = useTransform(progress, [0.76, 0.80, 0.82, 0.84], [0, 1, 1, 0]);
  const featureTextY = useTransform(progress, [0.76, 0.80], [50, 0]);
  const featureTextXOffset = useTransform(progress, [0.76, 0.80], [40, 0]);

  // --- WHY STARTUP PARK SECTION - RIBBON DESIGN (0.84 - 0.97) ---
  const whyOpacity = useTransform(progress, [0.84, 0.88, 0.96, 0.98], [0, 1, 1, 0]);
  const ribbon1X = useTransform(progress, [0.84, 0.97], ["20%", "-120%"]);
  const ribbon2X = useTransform(progress, [0.84, 0.97], ["-120%", "20%"]);
  
  const endTitleOpacity = useTransform(progress, [0.97, 0.99], [0, 1]);
  const endTitleY = useTransform(progress, [0.97, 0.99], [20, 0]);

  useMotionValueEvent(progress, "change", (v) => {
    if (onNavbarShow) onNavbarShow(v < 0.02);
  });

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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@300;400;500;600&display=swap');
        
        .accelerate {
          will-change: transform, opacity;
          transform: translate3d(0,0,0);
          backface-visibility: hidden;
        }

        .hero-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(3.5rem, 10vw, 8.5rem);
          line-height: 0.9;
        }
        .center-text-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
        }
        .feature-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
        }
        .why-headline {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(4rem, 12vw, 15rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.1);
          line-height: 0.8;
          white-space: nowrap;
        }
        .end-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(2.5rem, 8vw, 6rem);
        }
        .glass-pillar {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: inset 0 0 20px rgba(255,255,255,0.2), 0 20px 40px rgba(0,0,0,0.05);
        }
        .pillar-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          font-weight: 600;
        }
        .pillar-title {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 700;
        }
        .ribbon-card {
          background: white;
          padding: 3rem;
          min-width: 450px;
          border-radius: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes pulse-blue {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .focal-pulse {
          animation: pulse-blue 3s infinite ease-in-out;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
        .tech-blob {
          animation: float-slow 10s infinite ease-in-out;
        }
      `}</style>

      <div className="sticky top-0 h-screen w-full overflow-hidden no-scrollbar">
        
        {/* HERO VIDEO */}
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
            onLoadedData={() => setIsVideoReady(true)}
            className={`w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${isVideoReady ? 'opacity-80' : 'opacity-0'}`}
          >
            <source src="/Startup_Festival_2025_Teaser_Video_Day_1_Inauguration_Day_2160P.mp4" type="video/mp4" />
          </video>
          
          <motion.div 
            style={{ opacity: heroTextOpacity, y: heroTextY }}
            className="accelerate absolute inset-0 flex items-end justify-start text-left p-12 md:p-20 text-white"
          >
            <h1 className="hero-heading tracking-tighter drop-shadow-2xl">
              Innovate.<br/>Elevate.<br/>Create.
            </h1>
          </motion.div>
        </motion.div>

        {/* PARALLAX GRID */}
        <motion.div style={{ opacity: gridOpacity }} className="accelerate absolute inset-0 z-10">
          {columns.map((col, i) => !col.isVideo && (
            <motion.div
              key={i}
              style={{ y: col.y, left: col.left, x: "-50%" }}
              className="accelerate absolute top-0 flex flex-col gap-16 w-[16vw]"
            >
              {col.images.map((src, idx) => (
                <div key={idx} className="w-full aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
                  <img 
                    src={src} 
                    alt="" 
                    className="w-full h-full object-cover"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* ROAD CONTENT OVERLAY */}
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

        {/* ORBITAL PILLARS DESIGN - ENHANCED */}
        <motion.div 
          style={{ opacity: orbitalOpacity }} 
          className="accelerate absolute inset-0 z-[40] flex items-center justify-center pointer-events-none"
        >
          {/* Background Decorative Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* Floating Tech Blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-[100px] tech-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px] tech-blob" style={{ animationDelay: '-5s' }} />

          <div className="relative w-[800px] h-[600px] flex items-center justify-center">
            {/* Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <motion.path
                d="M 400 300 L 80 120 M 400 300 L 720 120 M 400 300 L 400 520"
                stroke="#3b82f6"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6,6"
                style={{ pathLength: lineDraw }}
              />
              {/* Twinkling Data Points along lines */}
              {[0.3, 0.6, 0.8].map((pos, i) => (
                <motion.circle 
                  key={i} 
                  r="2" 
                  fill="#3b82f6" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                  style={{ 
                    motionPath: "M 400 300 L 80 120",
                    offsetDistance: `${pos * 100}%` 
                  }} 
                />
              ))}
            </svg>

            {/* Pillar 1 */}
            <motion.div style={{ x: p1X, y: p1Y, scale: pillarScale }} className="absolute glass-pillar w-64 h-64 rounded-full flex flex-col items-center justify-center p-8 text-center shadow-2xl">
              <span className="pillar-label text-blue-600 uppercase mb-2">Phase 01</span>
              <h3 className="pillar-title text-gray-900 italic">Innovate.</h3>
              <p className="text-gray-500 text-[10px] mt-2 italic leading-tight">Deconstructing norms to rebuild logic.</p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div style={{ x: p2X, y: p2Y, scale: pillarScale }} className="absolute glass-pillar w-64 h-64 rounded-full flex flex-col items-center justify-center p-8 text-center shadow-2xl">
              <span className="pillar-label text-blue-600 uppercase mb-2">Phase 02</span>
              <h3 className="pillar-title text-gray-900">Elevate.</h3>
              <p className="text-gray-500 text-[10px] mt-2 italic leading-tight">Scaling vision for global impact.</p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div style={{ x: 0, y: p3Y, scale: pillarScale }} className="absolute glass-pillar w-64 h-64 rounded-full flex flex-col items-center justify-center p-8 text-center shadow-2xl">
              <span className="pillar-label text-blue-600 uppercase mb-2">Phase 03</span>
              <h3 className="pillar-title text-gray-900 italic">Create.</h3>
              <p className="text-gray-500 text-[10px] mt-2 italic leading-tight">Executing with precision and grit.</p>
            </motion.div>

            {/* Core Focal Point with Pulse */}
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full z-20 relative" />
              <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full focal-pulse z-10" />
            </div>
          </div>
        </motion.div>

        {/* FEATURED STORY SECTION */}
        <motion.div className="accelerate absolute inset-0 z-[30] pointer-events-none flex items-center justify-center">
          <motion.div
            style={{ x: "-50%", y: "-50%", left: featureImageX, top: "50%", scale: featureImageScale, translateY: featureImageY, opacity: featureImageOpacity }}
            className="absolute w-[16vw] aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl z-0"
          >
            <img src={img9} alt="" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            style={{ x: "-50%", y: "-50%", left: "42%", top: "50%", translateY: featureImage2Y, scale: featureImage2Scale, opacity: featureImage2Opacity }}
            className="absolute w-[14vw] aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-[#f0f0ec]"
          >
            <img src={img14} alt="" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div style={{ opacity: featureTextOpacity, y: featureTextY, x: featureTextXOffset }} className="absolute left-[65%] translate-x-0 max-w-lg text-left">
            <h2 className="feature-heading text-gray-900 mb-6 tracking-tight">Focused on the future.</h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Turning ambitious ideas into scalable realities through intensive mentorship and global networking.
            </p>
          </motion.div>
        </motion.div>

        {/* WHY STARTUP PARK SECTION - VISION RIBBON REDESIGN */}
        <motion.div 
          style={{ opacity: whyOpacity }}
          className="accelerate absolute inset-0 z-[60] flex flex-col justify-center overflow-hidden"
        >
          {/* Background Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-20">
            <motion.h2 style={{ x: ribbon1X }} className="why-headline">WHY STARTUP PARK • WHY STARTUP PARK</motion.h2>
            <motion.h2 style={{ x: ribbon2X }} className="why-headline">AN ECOSYSTEM FOR FOUNDERS • AN ECOSYSTEM FOR FOUNDERS</motion.h2>
          </div>

          <div className="relative z-10 space-y-12">
            {/* Row 1: Left to Right */}
            <motion.div style={{ x: ribbon1X }} className="flex gap-8 px-12">
              {features.slice(0, 5).map((f, i) => (
                <div key={i} className="ribbon-card">
                  <h3 className="text-blue-600 font-mono text-xs uppercase tracking-widest mb-4">Feature {i+1}</h3>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">{f.title}</h4>
                  <p className="text-gray-500 font-light italic leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Row 2: Right to Left */}
            <motion.div style={{ x: ribbon2X }} className="flex gap-8 px-12">
              {features.slice(5, 10).map((f, i) => (
                <div key={i} className="ribbon-card">
                  <h3 className="text-blue-600 font-mono text-xs uppercase tracking-widest mb-4">Feature {i+6}</h3>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">{f.title}</h4>
                  <p className="text-gray-500 font-light italic leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* FINAL END TITLE */}
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