import React, { useRef, useState } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

// Dummy Image URLs for high-quality startup aesthetic
const img1 =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80";
const img2 =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
const img4 =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
const img5 =
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80";
const img6 =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
const img7 =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
const img9 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
const img10 =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80";
const img11 =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80";
const img12 =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";
const img14 =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80";
const img15 =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80";
const img16 =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80";
const img17 =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80";
const img19 =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
const img20 =
  "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=800&q=80";

const features = [
  {
    title: "Co-working Zones",
    desc: "Collaborative hubs for high-growth teams and solo founders.",
  },
  {
    title: "Innovation Labs",
    desc: "Equipped with the latest tech for rapid prototyping and R&D.",
  },
  {
    title: "Event Halls",
    desc: "Stage for demo days, pitch nights, and global summits.",
  },
  {
    title: "Networking Lounges",
    desc: "Where the next big partnership starts over a coffee.",
  },
  {
    title: "Smart Offices",
    desc: "Private, tech-enabled suites designed for scale.",
  },
  {
    title: "Incubator Programs",
    desc: "Intensive 12-week cohorts with industry-leading mentors.",
  },
  {
    title: "Venture Access",
    desc: "Direct pipelines to top-tier angel and VC networks.",
  },
  {
    title: "Global Network",
    desc: "Connect with our sister hubs across 20+ countries.",
  },
  {
    title: "Startup Legal",
    desc: "Expert guidance on IP, equity, and international expansion.",
  },
  {
    title: "Founder Wellness",
    desc: "In-house gyms, meditation zones, and mental health support.",
  },
];

const StartupParkLanding = ({ onNavbarShow }) => {
  const containerRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = scrollYProgress;

  // --- ANIMATION CALCULATIONS ---
  const heroTextOpacity = useTransform(progress, [0, 0.08], [1, 0]);
  const heroTextY = useTransform(progress, [0, 0.12], [0, -40]);

  // Video transition
  const videoScale = useTransform(progress, [0.08, 0.35], [1, 0.45]);
  const videoRadius = useTransform(progress, [0.1, 0.12], [0, 64]);
  const videoY = useTransform(progress, [0.35, 0.75], ["0%", "-110%"]);
  const videoOpacity = useTransform(progress, [0.45, 0.55], [1, 0]);

  // Grid animations
  const gridOpacity = useTransform(
    progress,
    [0.2, 0.35, 0.55, 0.6],
    [0, 1, 1, 0],
  );
  const col1Y = useTransform(progress, [0.15, 0.85], ["85vh", "-170vh"]);
  const col2Y = useTransform(progress, [0.15, 0.85], ["45vh", "-210vh"]);
  const col4Y = useTransform(progress, [0.15, 0.85], ["65vh", "-180vh"]);
  const col5Y = useTransform(progress, [0.15, 0.85], ["35vh", "-150vh"]);

  const contentOpacity = useTransform(
    progress,
    [0.4, 0.48, 0.52, 0.56],
    [0, 1, 1, 0],
  );
  const contentScale = useTransform(progress, [0.4, 0.48], [0.9, 1]);

  // --- ORBITAL PILLARS TRANSITIONS (0.56 - 0.74) ---
  const orbitalOpacity = useTransform(
    progress,
    [0.56, 0.6, 0.7, 0.74],
    [0, 1, 1, 0],
  );
  const pillarScale = useTransform(progress, [0.56, 0.68], [0.4, 1]);
  const lineDraw = useTransform(progress, [0.58, 0.7], [0, 1]);
  const p1X = useTransform(progress, [0.56, 0.7], [0, -350]);
  const p1Y = useTransform(progress, [0.56, 0.7], [0, -180]);
  const p2X = useTransform(progress, [0.56, 0.7], [0, 350]);
  const p2Y = useTransform(progress, [0.56, 0.7], [0, -180]);
  const p3Y = useTransform(progress, [0.56, 0.7], [0, 240]);

  // --- FEATURED SECTION TRANSITION (0.74 - 0.84) ---
  const featureImageOpacity = useTransform(
    progress,
    [0.74, 0.78, 0.82, 0.84],
    [0, 1, 1, 0],
  );
  const featureImageScale = useTransform(progress, [0.74, 0.8], [0.5, 1.3]);
  const featureImageX = useTransform(progress, [0.74, 0.8], ["75%", "22%"]);
  const featureImageY = useTransform(progress, [0.74, 0.8], ["35vh", "0vh"]);

  const featureImage2Opacity = useTransform(
    progress,
    [0.76, 0.8, 0.82, 0.84],
    [0, 1, 1, 0],
  );
  const featureImage2Y = useTransform(progress, [0.76, 0.82], ["75vh", "12vh"]);
  const featureImage2Scale = useTransform(progress, [0.76, 0.82], [0.9, 1.15]);

  const featureTextOpacity = useTransform(
    progress,
    [0.76, 0.8, 0.82, 0.84],
    [0, 1, 1, 0],
  );
  const featureTextY = useTransform(progress, [0.76, 0.8], [60, 0]);
  const featureTextXOffset = useTransform(progress, [0.76, 0.8], [50, 0]);

  // --- WHY STARTUP PARK SECTION - RIBBON DESIGN (0.84 - 0.97) ---
  const whyOpacity = useTransform(
    progress,
    [0.84, 0.88, 0.96, 0.98],
    [0, 1, 1, 0],
  );
  const ribbon1X = useTransform(progress, [0.84, 0.97], ["15%", "-130%"]);
  const ribbon2X = useTransform(progress, [0.84, 0.97], ["-130%", "15%"]);

  const endTitleOpacity = useTransform(progress, [0.97, 0.99], [0, 1]);
  const endTitleY = useTransform(progress, [0.97, 0.99], [30, 0]);

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
    <div ref={containerRef} className="relative h-[1000vh] bg-[#f2f2ee]">
      <style>{`
        .accelerate {
          will-change: transform, opacity;
          transform: translate3d(0,0,0);
        }

        .noise {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.04;
          pointer-events: none;
          z-index: 100;
        }

        .hero-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(3.5rem, 10vw, 9rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
        }
        .center-text-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-style: italic;
          letter-spacing: -0.02em;
        }
        .feature-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }
        .why-headline {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(5rem, 14vw, 18rem);
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(0,0,0,0.06);
          line-height: 0.7;
          white-space: nowrap;
          font-style: italic;
        }
        .end-heading {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: clamp(3rem, 9vw, 7.5rem);
          letter-spacing: -0.04em;
        }
        .glass-pillar {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.07),
            inset 0 0 20px rgba(255, 255, 255, 0.3);
        }
        .pillar-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          font-weight: 500;
          color: #3b82f6;
        }
        .pillar-title {
          font-family: 'PP Editorial New', 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 400;
        }
        .ribbon-card {
          background: white;
          padding: 3.5rem;
          min-width: 500px;
          border-radius: 2.5rem;
          box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.05), 0 18px 36px -18px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes pulse-blue {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(2); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        .focal-pulse {
          animation: pulse-blue 4s infinite ease-in-out;
        }

        .tech-blob {
          filter: blur(80px);
          opacity: 0.25;
        }
      `}</style>

      {/* Noise Overlay */}
      <div className="noise" />

      <div className="sticky top-0 h-screen w-full overflow-hidden no-scrollbar">
        {/* HERO VIDEO */}
        <Motion.div
          style={{
            scale: videoScale,
            borderRadius: videoRadius,
            y: videoY,
            opacity: videoOpacity,
          }}
          className="accelerate absolute inset-0 z-20 flex items-center justify-center overflow-hidden bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoReady(true)}
            className={`w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${isVideoReady ? "opacity-70" : "opacity-0"}`}
          >
            <source
              src="/Startup_Festival_2025_Teaser_Video_Day_1_Inauguration_Day_2160P.mp4"
              type="video/mp4"
            />
          </video>

          <Motion.div
            style={{ opacity: heroTextOpacity, y: heroTextY }}
            className="accelerate absolute inset-0 flex items-end justify-start text-left p-12 md:p-24 text-white"
          >
            <h1 className="hero-heading drop-shadow-2xl">
              Innovate.
              <br />
              Elevate.
              <br />
              Create.
            </h1>
          </Motion.div>
        </Motion.div>

        {/* PARALLAX GRID */}
        <Motion.div
          style={{ opacity: gridOpacity }}
          className="accelerate absolute inset-0 z-10"
        >
          {columns.map(
            (col, i) =>
              !col.isVideo && (
                <Motion.div
                  key={i}
                  style={{ y: col.y, left: col.left, x: "-50%" }}
                  className="accelerate absolute top-0 flex flex-col gap-20 w-[17vw]"
                >
                  {col.images.map((src, idx) => (
                    <div
                      key={idx}
                      className="w-full aspect-[4/5] bg-[#e6e6e2] rounded-[2.5rem] overflow-hidden shadow-sm"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Motion.div>
              ),
          )}
        </Motion.div>

        {/* ROAD CONTENT OVERLAY */}
        <Motion.div 
          style={{ opacity: contentOpacity }}
          className="accelerate absolute inset-0 z-[25] pointer-events-none"
        >
          {/* Subtle Background Wash & Blur */}
          <div className="absolute inset-0 bg-[#f2f2ee]/40 backdrop-blur-xl" />

          <Motion.div 
            style={{ scale: contentScale }}
            className="relative h-full w-full flex items-center justify-center px-6"
          >
            <div className="max-w-4xl text-center">
              <h2 className="center-text-heading text-gray-900 mb-10 leading-[1.1]">The new blueprint for<br/>high-impact growth.</h2>
              <div className="w-24 h-[1px] bg-gray-300 mx-auto mb-10" />
              <p className="text-xl md:text-3xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                We provide the network, capital, and infrastructure. You bring the grit.
              </p>
            </div>
          </Motion.div>
        </Motion.div>

        {/* ORBITAL PILLARS DESIGN */}
        <Motion.div
          style={{ opacity: orbitalOpacity }}
          className="accelerate absolute inset-0 z-[40] flex items-center justify-center pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full tech-blob animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-100/20 rounded-full tech-blob"
            style={{ animation: "float 12s infinite ease-in-out reverse" }}
          />

          <div className="relative w-[1000px] h-[700px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <Motion.path
                d="M 500 350 L 150 170 M 500 350 L 850 170 M 500 350 L 500 590"
                stroke="#3b82f6"
                strokeWidth="1"
                fill="none"
                strokeDasharray="8,8"
                style={{ pathLength: lineDraw, opacity: 0.4 }}
              />
            </svg>

            <Motion.div
              style={{ x: p1X, y: p1Y, scale: pillarScale }}
              className="absolute glass-pillar w-72 h-72 rounded-full flex flex-col items-center justify-center p-10 text-center"
            >
              <span className="pillar-label mb-3">01 / CONCEPT</span>
              <h3 className="pillar-title text-gray-900 italic">Innovate.</h3>
              <p className="text-gray-400 text-xs mt-4 uppercase tracking-widest leading-relaxed">
                Radical thinking
                <br />
                Applied logic
              </p>
            </Motion.div>

            <Motion.div
              style={{ x: p2X, y: p2Y, scale: pillarScale }}
              className="absolute glass-pillar w-72 h-72 rounded-full flex flex-col items-center justify-center p-10 text-center"
            >
              <span className="pillar-label mb-3">02 / VELOCITY</span>
              <h3 className="pillar-title text-gray-900">Elevate.</h3>
              <p className="text-gray-400 text-xs mt-4 uppercase tracking-widest leading-relaxed">
                Strategic growth
                <br />
                Global reach
              </p>
            </Motion.div>

            <Motion.div
              style={{ x: 0, y: p3Y, scale: pillarScale }}
              className="absolute glass-pillar w-72 h-72 rounded-full flex flex-col items-center justify-center p-10 text-center"
            >
              <span className="pillar-label mb-3">03 / REALITY</span>
              <h3 className="pillar-title text-gray-900 italic">Create.</h3>
              <p className="text-gray-400 text-xs mt-4 uppercase tracking-widest leading-relaxed">
                Precision build
                <br />
                Market impact
              </p>
            </Motion.div>

            <div className="relative">
              <div className="w-6 h-6 bg-blue-600 rounded-full z-20 relative shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
              <div className="absolute -inset-4 bg-blue-400 rounded-full focal-pulse z-10" />
            </div>
          </div>
        </Motion.div>

        {/* FEATURED STORY SECTION */}
        <Motion.div className="accelerate absolute inset-0 z-[30] pointer-events-none flex items-center justify-center">
          <Motion.div
            style={{
              x: "-50%",
              y: "-50%",
              left: featureImageX,
              top: "50%",
              scale: featureImageScale,
              translateY: featureImageY,
              opacity: featureImageOpacity,
            }}
            className="absolute w-[18vw] aspect-[4/5] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl z-0"
          >
            <img src={img9} alt="" className="w-full h-full object-cover" />
          </Motion.div>

          <Motion.div
            style={{
              x: "-50%",
              y: "-50%",
              left: "40%",
              top: "50%",
              translateY: featureImage2Y,
              scale: featureImage2Scale,
              opacity: featureImage2Opacity,
            }}
            className="absolute w-[16vw] aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10 border-[12px] border-white"
          >
            <img
              src={img14}
              alt=""
              className="w-full h-full object-cover grayscale-[30%]"
            />
          </Motion.div>

          <Motion.div
            style={{
              opacity: featureTextOpacity,
              y: featureTextY,
              x: featureTextXOffset,
            }}
            className="absolute left-[62%] translate-x-0 max-w-xl text-left"
          >
            <h2 className="feature-heading text-gray-900 mb-8">
              Architects of
              <br />
              the future.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              We are not just a space; we are an engine for world-changing
              ideas. From seed to scale, we provide the octane for your
              ambition.
            </p>
            <div className="mt-12 w-16 h-[2px] bg-blue-500" />
          </Motion.div>
        </Motion.div>

        {/* WHY STARTUP PARK SECTION */}
        <Motion.div
          style={{ opacity: whyOpacity }}
          className="accelerate absolute inset-0 z-[60] flex flex-col justify-center overflow-hidden bg-[#f2f2ee]"
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-[0.07]">
            <Motion.h2 style={{ x: ribbon1X }} className="why-headline">
              STARTUP PARK • STARTUP PARK • STARTUP PARK
            </Motion.h2>
            <Motion.h2 style={{ x: ribbon2X }} className="why-headline">
              THE ECOSYSTEM • THE ECOSYSTEM • THE ECOSYSTEM
            </Motion.h2>
          </div>

          <div className="relative z-10 space-y-16">
            <Motion.div style={{ x: ribbon1X }} className="flex gap-10 px-16">
              {features.slice(0, 5).map((f, i) => (
                <div key={i} className="ribbon-card group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">
                      Phase {i + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors duration-300">
                      →
                    </div>
                  </div>
                  <h4
                    className="text-4xl font-normal text-gray-900 mb-6 tracking-tight italic"
                    style={{ fontFamily: "'PP Editorial New', serif" }}
                  >
                    {f.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    {f.desc}
                  </p>
                </div>
              ))}
            </Motion.div>

            <Motion.div style={{ x: ribbon2X }} className="flex gap-10 px-16">
              {features.slice(5, 10).map((f, i) => (
                <div key={i} className="ribbon-card group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">
                      Phase {i + 6}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors duration-300">
                      →
                    </div>
                  </div>
                  <h4
                    className="text-4xl font-normal text-gray-900 mb-6 tracking-tight italic"
                    style={{ fontFamily: "'PP Editorial New', serif" }}
                  >
                    {f.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    {f.desc}
                  </p>
                </div>
              ))}
            </Motion.div>
          </div>
        </Motion.div>

        {/* FINAL END TITLE */}
        <Motion.div
          style={{ opacity: endTitleOpacity, y: endTitleY }}
          className="accelerate absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-6 bg-[#f2f2ee]"
        >
          <h2 className="end-heading text-gray-900 mb-10 leading-none">
            The Academy of
            <br />
            Ambition.
          </h2>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-black text-white rounded-full text-lg font-medium tracking-tight shadow-xl hover:bg-gray-800 transition-all duration-300"
          >
            Apply for Cohort '26
          </Motion.button>
        </Motion.div>
      </div>
    </div>
  );
};

export default StartupParkLanding;
