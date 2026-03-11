import React, { useRef, useState } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
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

  // Blueprint (Phase 3: 0.35 - 0.55)
  const blueprintOpacity = useTransform(scrollYProgress, [0.35, 0.42, 0.5, 0.58], [0, 1, 1, 0]);
  const blueprintY = useTransform(scrollYProgress, [0.35, 0.42], [60, 0]);

  // Premium Features (Phase 4: 0.58 - 0.75)
  const featureTitleOpacity = useTransform(scrollYProgress, [0.58, 0.62, 0.72, 0.76], [0, 1, 1, 0]);
  const featureItem1 = useTransform(scrollYProgress, [0.60, 0.65], [30, 0]);
  const featureItem2 = useTransform(scrollYProgress, [0.62, 0.67], [30, 0]);
  const featureItem3 = useTransform(scrollYProgress, [0.64, 0.69], [30, 0]);
  const featureItem4 = useTransform(scrollYProgress, [0.66, 0.71], [30, 0]);
  const featureOpacity = useTransform(scrollYProgress, [0.6, 0.65, 0.72, 0.76], [0, 1, 1, 0]);

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

        {/* PHASE 3: THE MISSION STATEMENT */}
        <Motion.div 
          style={{ opacity: blueprintOpacity, y: blueprintY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center"
        >
          {/* Decorative Ghost Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[30vw] font-bold text-black/[0.02] select-none uppercase tracking-tighter">Mission</span>
          </div>

          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-10 relative z-10">Our Mission — 01</span>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter max-w-5xl leading-[0.9] mb-12 relative z-10">
            The world’s first <br/><span className="text-gray-300 italic">comprehensive ecosystem</span> for builders.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light leading-relaxed mb-16 relative z-10">
            Startup Park bridges the gap between ambitious ideas and market-ready solutions. 
            From ideation to IPO, we are your trusted partner in building the future of India's economy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 relative z-10">
            <div className="text-left border-l border-gray-100 pl-6">
              <span className="text-3xl md:text-4xl font-bold block">200+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Startups Supported</span>
            </div>
            <div className="text-left border-l border-gray-100 pl-6">
              <span className="text-3xl md:text-4xl font-bold block">₹600 Cr+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Funding Accessed</span>
            </div>
            <div className="text-left border-l border-gray-100 pl-6">
              <span className="text-3xl md:text-4xl font-bold block">10,000+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Jobs Created</span>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 4: THE ECOSYSTEM GRID */}
        <Motion.div 
          style={{ opacity: featureOpacity }}
          className="absolute inset-0 z-[40] px-10 md:px-20 flex flex-col justify-center"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

          <Motion.div style={{ opacity: featureTitleOpacity }} className="mb-12 md:mb-20">
            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block text-center md:text-left">Infrastructure — 02</span>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-center md:text-left">World-Class Facilities.</h3>
          </Motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {[
              { title: "Co-working Zones", desc: "Premium collaborative spaces for high-growth founders.", y: featureItem1 },
              { title: "Innovation Labs", desc: "Equipped with the latest tech for rapid R&D suites.", y: featureItem2 },
              { title: "Incubators", desc: "Strategic mentorship and intensive development programs.", y: featureItem3 },
              { title: "Event Halls", desc: "Stage for demo days and global startup summits.", y: featureItem4 },
            ].map((f, i) => (
              <Motion.div 
                key={i} 
                style={{ y: f.y }}
                className="premium-card p-8 md:p-10 rounded-[30px] md:rounded-[40px] flex flex-col justify-between h-[300px] md:h-[350px]"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-500 mb-6 block">0{i+1}</span>
                  <h4 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight">{f.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-[9px] uppercase tracking-widest font-bold text-gray-300">Ready for Launch</span>
                </div>
              </Motion.div>
            ))}
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
