import React, { useRef, useState } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// Assets
const img1 = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80";
const img2 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
const img4 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
const img7 = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
const img9 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";

const DesignerStartupLanding = () => {
  const containerRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // --- REFINED ANIMATION TIMELINE ---
  
  // Navigation
  const navOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0.9]);
  const navScale = useTransform(scrollYProgress, [0, 0.02], [1, 0.98]);

  // Hero Video (Phase 1)
  const videoScale = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 0.85, 0.4]);
  const videoY = useTransform(scrollYProgress, [0.3, 0.55], ["0vh", "-130vh"]);
  const videoRadius = useTransform(scrollYProgress, [0.05, 0.15], [0, 60]);

  // Scattered Grid (Phase 2)
  const gridY = useTransform(scrollYProgress, [0, 1], ["0vh", "-120vh"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.75], [1, 1, 0.5, 0]);

  // --- PHASE 3: MISSION/BLUEPRINT (UPDATED) ---
  const blueprintOpacity = useTransform(scrollYProgress, [0.35, 0.40, 0.52, 0.58], [0, 1, 1, 0]);
  const blueprintY = useTransform(scrollYProgress, [0.35, 0.42], [60, 0]);
  
  // New Curve Path & Color Scroll Logic
  const pathLength = useSpring(useTransform(scrollYProgress, [0.35, 0.55], [0, 1]), { stiffness: 60, damping: 15 });
  const missionHeadingColor = useTransform(scrollYProgress, [0.4, 0.5], ["#4b5563", "#ffffff"]);
  const missionSubtextColor = useTransform(scrollYProgress, [0.42, 0.52], ["#374151", "#9ca3af"]);
  const missionStatColor = useTransform(scrollYProgress, [0.45, 0.55], ["#1f2937", "#ffffff"]);

  // Premium Features (Phase 4: 0.58 - 0.75)
  const featureTitleOpacity = useTransform(scrollYProgress, [0.58, 0.62, 0.72, 0.76], [0, 1, 1, 0]);
  const featureItem1 = useTransform(scrollYProgress, [0.60, 0.65], [30, 0]);
  const featureItem2 = useTransform(scrollYProgress, [0.62, 0.67], [30, 0]);
  const featureItem3 = useTransform(scrollYProgress, [0.64, 0.69], [30, 0]);
  const featureItem4 = useTransform(scrollYProgress, [0.66, 0.71], [30, 0]);
  const featureOpacity = useTransform(scrollYProgress, [0.6, 0.65, 0.72, 0.76], [0, 1, 1, 0]);

  // Scroll-driven BG color + subtle parallax/tilt per card
  const featureBg1 = useTransform(scrollYProgress, [0.58, 0.66, 0.76, 0.86], ["#0f1725", "#0369a1", "#063b5a", "#0f1725"]);
  const featureBg2 = useTransform(scrollYProgress, [0.58, 0.66, 0.76, 0.86], ["#0f1725", "#6d28d9", "#3b0764", "#0f1725"]);
  const featureBg3 = useTransform(scrollYProgress, [0.58, 0.66, 0.76, 0.86], ["#0f1725", "#06b6d4", "#035e60", "#0f1725"]);
  const featureBg4 = useTransform(scrollYProgress, [0.58, 0.66, 0.76, 0.86], ["#0f1725", "#2563eb", "#123a8a", "#0f1725"]);

  const featureX1 = useTransform(scrollYProgress, [0.58, 0.76], [8, -8]);
  const featureX2 = useTransform(scrollYProgress, [0.58, 0.76], [6, -6]);
  const featureX3 = useTransform(scrollYProgress, [0.58, 0.76], [4, -4]);
  const featureX4 = useTransform(scrollYProgress, [0.58, 0.76], [10, -10]);

  const featureRX1 = useTransform(scrollYProgress, [0.58, 0.76], [6, -6]);
  const featureRX2 = useTransform(scrollYProgress, [0.58, 0.76], [5, -5]);
  const featureRX3 = useTransform(scrollYProgress, [0.58, 0.76], [4, -4]);
  const featureRX4 = useTransform(scrollYProgress, [0.58, 0.76], [7, -7]);

  const featureRY1 = useTransform(scrollYProgress, [0.58, 0.76], [-4, 4]);
  const featureRY2 = useTransform(scrollYProgress, [0.58, 0.76], [-3, 3]);
  const featureRY3 = useTransform(scrollYProgress, [0.58, 0.76], [-2, 2]);
  const featureRY4 = useTransform(scrollYProgress, [0.58, 0.76], [-5, 5]);

  // Smooth numeric motion values for a nicer feel
  const smoothX1 = useSpring(featureX1, { stiffness: 120, damping: 18 });
  const smoothX2 = useSpring(featureX2, { stiffness: 120, damping: 18 });
  const smoothX3 = useSpring(featureX3, { stiffness: 120, damping: 18 });
  const smoothX4 = useSpring(featureX4, { stiffness: 120, damping: 18 });

  const smoothRX1 = useSpring(featureRX1, { stiffness: 140, damping: 20 });
  const smoothRX2 = useSpring(featureRX2, { stiffness: 140, damping: 20 });
  const smoothRX3 = useSpring(featureRX3, { stiffness: 140, damping: 20 });
  const smoothRX4 = useSpring(featureRX4, { stiffness: 140, damping: 20 });

  const smoothRY1 = useSpring(featureRY1, { stiffness: 140, damping: 22 });
  const smoothRY2 = useSpring(featureRY2, { stiffness: 140, damping: 22 });
  const smoothRY3 = useSpring(featureRY3, { stiffness: 140, damping: 22 });
  const smoothRY4 = useSpring(featureRY4, { stiffness: 140, damping: 22 });

  // The Creed (Phase 4.5: 0.76 - 0.86)
  const creedOpacity = useTransform(scrollYProgress, [0.76, 0.8, 0.84, 0.86], [0, 1, 1, 0]);
  const creedScale = useTransform(scrollYProgress, [0.76, 0.8], [0.95, 1]);

  // Connection/Contact (Phase 5: 0.86 - 0.96)
  const contactOpacity = useTransform(scrollYProgress, [0.86, 0.9, 0.95, 0.97], [0, 1, 1, 0]);
  const contactY = useTransform(scrollYProgress, [0.86, 0.9], [40, 0]);

  // Final Reveal (Phase 6: 0.97 - 1.0)
  const footerOpacity = useTransform(scrollYProgress, [0.975, 0.99], [0, 1]);
  const footerScale = useTransform(scrollYProgress, [0.975, 1], [1.05, 1]);

  return (
    <div ref={containerRef} className="relative h-[1200vh] bg-[#F7F7F5] text-[#121212]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap');
        
        body { 
          font-family: 'Plus Jakarta Sans', sans-serif; 
          -webkit-font-smoothing: antialiased; 
          background: #F7F7F5;
        }

        .noise-texture {
          position: fixed;
          inset: 0;
          background-image: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.05;
          pointer-events: none;
          z-index: 1000;
        }

        .premium-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover {
          transform: translateY(-10px);
          background: #fff;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.05);
        }

        .editorial-heading {
          font-size: clamp(3rem, 8vw, 6.5rem);
          line-height: 0.9;
          letter-spacing: -0.05em;
        }

        .contact-link-large {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 200;
          letter-spacing: -0.03em;
          line-height: 1.1;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          color: #121212;
          display: inline-block;
        }
        .contact-link-large:hover {
          color: #3b82f6;
          transform: translateX(30px);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="noise-texture" />
      
      {/* GLOBAL NAVIGATION */}
      <Motion.nav 
        style={{ opacity: navOpacity, scale: navScale }}
        className="fixed top-10 left-10 right-10 z-[100] flex justify-between items-center"
      >
        <div className="text-xl font-bold tracking-tight uppercase">Startup Park.</div>
        <div className="flex gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <a href="#" className="hover:text-black transition-colors">Ecosystem</a>
          <a href="#" className="hover:text-black transition-colors">Programs</a>
          <a href="#" className="hover:text-black transition-colors">Community</a>
        </div>
        <button className="bg-black text-white text-[10px] uppercase tracking-widest px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
          Apply Now
        </button>
      </Motion.nav>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* PHASE 1: THE HERO CORE */}
        <Motion.div
          style={{ scale: videoScale, borderRadius: videoRadius, y: videoY }}
          className="absolute inset-0 z-20 overflow-hidden bg-[#121212] flex items-center justify-center origin-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
        >
          <video
            autoPlay loop muted playsInline
            onLoadedData={() => setIsVideoReady(true)}
            className={`w-full h-full object-cover transition-opacity duration-1500 ${isVideoReady ? "opacity-40" : "opacity-0"}`}
          >
            <source src="/Startup_Festival_2025_Teaser_Video_Day_1_Inauguration_Day_2160P.mp4" type="video/mp4" />
          </video>
          
          <Motion.div className="absolute text-center px-6">
            <h1 className="text-white editorial-heading font-semibold mb-6 uppercase">INDIA’S LAUNCHPAD<br/>FOR FOUNDERS.</h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-blue-500" />
              <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em]">Innovate → Accelerate → Succeed</span>
              <div className="h-[1px] w-12 bg-blue-500" />
            </div>
          </Motion.div>
        </Motion.div>

        {/* PHASE 2: PARALLAX BACKGROUND GRID */}
        <Motion.div style={{ opacity: gridOpacity, y: gridY }} className="absolute inset-0 z-10 pointer-events-none">
          {[
            { src: img1, t: "10%", l: "5%", s: 300, r: -5 },
            { src: img2, t: "15%", l: "70%", s: 350, r: 8 },
            { src: img4, t: "55%", l: "8%", s: 280, r: -12 },
            { src: img7, t: "60%", l: "75%", s: 320, r: 5 },
            { src: img9, t: "40%", l: "40%", s: 200, r: 15 },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{ top: item.t, left: item.l, width: item.s, rotate: `${item.r}deg` }}
              className="absolute grayscale opacity-20 filter blur-[1px]"
            >
              <img src={item.src} className="w-full h-auto rounded-3xl" alt="" />
            </div>
          ))}
        </Motion.div>

        {/* PHASE 3: THE MISSION STATEMENT (UPDATED WITH CURVE AND GRID) */}
        <Motion.div 
          style={{ opacity: blueprintOpacity, y: blueprintY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center bg-black"
        >
          {/* BACKGROUND GRID */}
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{ 
              backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />

          {/* ANIMATED CURVE SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <Motion.path
              d="M 50 0 C 70 20, 30 40, 50 50 S 80 80, 50 100"
              fill="transparent"
              stroke="#2563eb"
              strokeWidth="0.1"
              style={{ pathLength }}
            />
          </svg>

          {/* Decorative Ghost Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[30vw] font-bold text-white/[0.03] select-none uppercase tracking-tighter">Mission</span>
          </div>

          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-10 relative z-20">Our Mission — 01</span>
          
          <Motion.h2 
            style={{ color: missionHeadingColor }}
            className="text-6xl md:text-8xl font-light tracking-tighter max-w-5xl leading-[0.9] mb-12 relative z-20"
          >
            The world’s first <br/><span className="text-gray-500 italic">comprehensive ecosystem</span> for builders.
          </Motion.h2>

          <Motion.p 
            style={{ color: missionSubtextColor }}
            className="text-lg md:text-xl max-w-3xl font-light leading-relaxed mb-16 relative z-20"
          >
            Startup Park bridges the gap between ambitious ideas and market-ready solutions. 
            From ideation to IPO, we are your trusted partner in building the future of India's economy.
          </Motion.p>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 relative z-20">
            <div className="text-left border-l border-gray-800 pl-6">
              <Motion.span style={{ color: missionStatColor }} className="text-3xl md:text-4xl font-bold block">200+</Motion.span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Startups Supported</span>
            </div>
            <div className="text-left border-l border-gray-800 pl-6">
              <Motion.span style={{ color: missionStatColor }} className="text-3xl md:text-4xl font-bold block">₹600 Cr+</Motion.span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Funding Accessed</span>
            </div>
            <div className="text-left border-l border-gray-800 pl-6">
              <Motion.span style={{ color: missionStatColor }} className="text-3xl md:text-4xl font-bold block">10,000+</Motion.span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Jobs Created</span>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 4: THE ECOSYSTEM GRID */}
       {/* PHASE 4: THE KINETIC BENTO GRID (UX-OPTIMIZED) */}
        <Motion.div 
          style={{ opacity: featureOpacity }}
          className="absolute inset-0 z-[40] px-6 md:px-20 flex flex-col justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* --- ULTRA-MODERN BACKGROUND --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
          </div>

          {/* --- SECTION HEADER --- */}
          <div className="relative z-10 mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Motion.div style={{ opacity: featureTitleOpacity }}>
              <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
                Infrastructure — 02
              </span>
              <h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                Built for <br /><span className="text-blue-600">Velocity.</span>
              </h3>
            </Motion.div>
            <Motion.p 
              style={{ opacity: featureTitleOpacity }}
              className="text-gray-500 max-w-xs text-sm md:text-base mb-2 font-light leading-relaxed"
            >
              Every square inch is designed to reduce friction and accelerate the transition from concept to company.
            </Motion.p>
          </div>

          {/* --- INTERACTIVE BENTO GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative z-10 h-[60vh] md:h-[55vh] [perspective:1500px]">
            
            {/* Card 1: Main Feature */}
            <Motion.div 
              style={{ y: featureItem1, background: featureBg1, x: smoothX1, rotateX: smoothRX1, rotateY: smoothRY1 }}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-7 group relative bg-[#151515] border border-white/5 rounded-[32px] p-8 overflow-hidden cursor-pointer"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-white/20 font-mono text-xs">01</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">↗</div>
                </div>
                <div>
                  <h4 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Co-working Zones</h4>
                  <p className="text-gray-500 text-sm md:text-base max-w-md group-hover:text-gray-300 transition-colors">High-performance environments with 10Gbps fiber and ergonomic design.</p>
                </div>
              </div>
              <Motion.div initial={{ left: '-100%' }} whileHover={{ left: '100%' }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12" />
            </Motion.div>

            {/* Card 2: Innovation */}
            <Motion.div 
              style={{ y: featureItem2, background: featureBg2, x: smoothX2, rotateX: smoothRX2, rotateY: smoothRY2 }}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-5 group relative bg-[#151515] border border-white/5 rounded-[32px] p-8 overflow-hidden cursor-pointer"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-white/20 font-mono text-xs">02</span>
                  <span className="text-2xl text-indigo-400 group-hover:scale-110 transition-transform">⌬</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Innovation Labs</h4>
                  <p className="text-gray-500 text-sm leading-snug">Precision tools for hardware and software R&D.</p>
                </div>
              </div>
            </Motion.div>

            {/* Card 3: Incubators */}
            <Motion.div 
              style={{ y: featureItem3, background: featureBg3, x: smoothX3, rotateX: smoothRX3, rotateY: smoothRY3 }}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 group relative bg-[#151515] border border-white/5 rounded-[32px] p-8 overflow-hidden cursor-pointer"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-white/20 font-mono text-xs">03</span>
                  <span className="text-2xl text-cyan-400">⏣</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Incubators</h4>
                  <p className="text-gray-500 text-sm leading-snug">Deep-dive mentorship and intensive growth tracks.</p>
                </div>
              </div>
            </Motion.div>

            {/* Card 4: Event Halls */}
            <Motion.div 
              style={{ y: featureItem4, background: featureBg4, x: smoothX4, rotateX: smoothRX4, rotateY: smoothRY4 }}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-8 group relative bg-[#151515] border border-white/5 rounded-[32px] p-8 overflow-hidden cursor-pointer"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-white/20 font-mono text-xs">04</span>
                  <span className="bg-blue-600/10 text-blue-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Global Stage</span>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Event Halls & Global Summit Stages</h4>
                  <p className="text-gray-500 text-sm md:text-base group-hover:text-gray-300 transition-colors">Where India's next unicorns meet the world's leading investors.</p>
                </div>
              </div>
              <Motion.div initial={{ left: '-100%' }} whileHover={{ left: '100%' }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 h-full w-40 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-12" />
            </Motion.div>
          </div>
        </Motion.div>

        {/* PHASE 4.5: THE CREED */}
        <Motion.div 
          style={{ opacity: creedOpacity, scale: creedScale }}
          className="absolute inset-0 z-[45] flex flex-col items-center justify-center px-10 text-center"
        >
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-video border border-black/[0.03] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square border border-black/[0.02] rounded-full pointer-events-none" />

          <div className="max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-12">
              "We don't just host startups. <br/>
              <span className="text-blue-600">We engineer the future</span> <br/>
              of the Indian entrepreneur."
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img src={img9} className="w-full h-full object-cover" alt="Founder" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Vision Statement 2025</span>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 5: THE CONNECTION HUB */}
        <Motion.div 
          style={{ opacity: contactOpacity, y: contactY }}
          className="absolute inset-0 z-[50] flex flex-col justify-center px-10 md:px-32 bg-white"
        >
          {/* Floating Pill Accents */}
          <div className="absolute top-[15%] right-[20%] floating-pill opacity-40 rotate-12">HQ: Bengaluru</div>
          <div className="absolute bottom-[20%] left-[15%] floating-pill opacity-40 -rotate-6">Status: Operational</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end relative z-10">
            <div className="lg:col-span-7">
              <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block">Connect — 03</span>
              <div className="flex flex-col gap-6">
                <a href="mailto:contact@thestartuppark.com" className="contact-link-large group">
                  Say Hello <span className="text-gray-200 group-hover:text-blue-200 transition-colors">—</span>
                </a>
                <a href="#" className="contact-link-large group">
                  Partner with Us <span className="text-gray-200 group-hover:text-blue-200 transition-colors">—</span>
                </a>
                <a href="#" className="contact-link-large group">
                  Find our Office <span className="text-gray-200 group-hover:text-blue-200 transition-colors">—</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 pb-4">
              <div className="p-10 bg-[#F7F7F5] rounded-[40px] shadow-sm space-y-8 border border-black/5">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Location</span>
                  <p className="text-lg font-medium">Bengaluru, KA, India</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Availability</span>
                  <p className="text-lg font-medium">Cohort '26: Open for screening</p>
                </div>
                <div className="pt-6 border-t border-gray-200 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">TW</div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">LI</div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">IG</div>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>

      </div>

      {/* PHASE 6: THE FINAL REVEAL */}
      <Motion.div 
        style={{ opacity: footerOpacity, scale: footerScale }}
        className="fixed inset-0 z-[200] bg-black text-white flex flex-col items-center justify-center overflow-hidden"
      >
         {/* Background Marquee */}
         <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
           <div className="animate-marquee text-[30vh] font-bold flex">
             <span className="px-20">THE STARTUP PARK</span>
             <span className="px-20">INDIA'S LAUNCHPAD</span>
             <span className="px-20">THE STARTUP PARK</span>
             <span className="px-20">INDIA'S LAUNCHPAD</span>
           </div>
         </div>

         <div className="relative z-10 flex flex-col items-center text-center px-6">
           <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.6em] mb-10">End of Deployment</span>
           <Motion.h2 
             className="text-[12vw] font-bold tracking-tighter leading-none mb-16 uppercase"
           >
             SUCCEED.
           </Motion.h2>
           
           <div className="flex flex-col items-center gap-10">
             <button className="group relative bg-white text-black px-16 py-8 rounded-full font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)]">
               <span className="relative z-10">Enter the Ecosystem</span>
               <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
             </button>
             
             <div className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-gray-800" />
               <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">startup.park — © 2026</p>
               <div className="w-12 h-[1px] bg-gray-800" />
             </div>
           </div>
         </div>
      </Motion.div>
    </div>
  );
};

export default DesignerStartupLanding;