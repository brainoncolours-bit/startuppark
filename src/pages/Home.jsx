import React, { useRef, useState } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

// Assets
const img1 =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80";
const img2 =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
const img4 =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
const img7 =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
const img9 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";

const mapStops = [
  {
    id: "01",
    title: "Launch Pad",
    subtitle: "Founder entry point",
    desc: "Pitch, onboard, and enter the ecosystem through Startup Park’s structured launch flow.",
    top: "18%",
    left: "18%",
  },
  {
    id: "02",
    title: "Co-working Zones",
    subtitle: "Operate daily",
    desc: "Focused work bays, founder cabins, and collaborative zones designed for momentum.",
    top: "28%",
    left: "42%",
  },
  {
    id: "03",
    title: "Innovation Labs",
    subtitle: "Build & prototype",
    desc: "Hands-on labs for testing, prototyping, R&D and product iteration.",
    top: "22%",
    left: "72%",
  },
  {
    id: "04",
    title: "Founder Lounge",
    subtitle: "Network naturally",
    desc: "A high-trust social layer for serendipitous founder conversations and community energy.",
    top: "48%",
    left: "58%",
  },
  {
    id: "05",
    title: "Mentor Deck",
    subtitle: "Guidance on demand",
    desc: "Structured access to mentors, advisors, operators and ecosystem enablers.",
    top: "56%",
    left: "26%",
  },
  {
    id: "06",
    title: "Day One Services",
    subtitle: "Execution stack",
    desc: "Registration, branding, website, design and launch-ready support in one place.",
    top: "66%",
    left: "46%",
  },
  {
    id: "07",
    title: "Event Arena",
    subtitle: "Community in motion",
    desc: "Demo days, founder meets, workshops and investor rooms that keep the ecosystem alive.",
    top: "70%",
    left: "76%",
  },
  {
    id: "08",
    title: "Investor Circle",
    subtitle: "Capital access",
    desc: "A dedicated gateway to capital conversations, curation and visibility with investors.",
    top: "84%",
    left: "60%",
  },
];

const audienceCards = [
  {
    title: "Startups",
    text: "Set up, validate, hire, build traction, and grow inside a founder-first environment.",
  },
  {
    title: "Entrepreneurs",
    text: "Turn ideas into companies with support, community, execution and visibility.",
  },
  {
    title: "Founders",
    text: "Find a serious operating base with access to events, mentors, peers and momentum.",
  },
  {
    title: "Creators",
    text: "Collaborate with brands, startups and ecosystem builders through energy-rich spaces.",
  },
  {
    title: "Ecosystem Builders",
    text: "Run programs, activate communities and plug into Bangalore’s startup pulse.",
  },
];

const activityHighlights = [
  "Set up your startup",
  "Attend events",
  "Network with founders",
  "Build your MVP",
  "Meet investors",
  "Launch faster",
];

const programCards = [
  {
    label: "01",
    title: "Entrepreneur Membership",
    text: "A flexible base for solo operators, early founders and builders entering the ecosystem.",
  },
  {
    label: "02",
    title: "Startup Membership",
    text: "An operating layer for teams that need space, energy, access and startup-grade infrastructure.",
  },
  {
    label: "03",
    title: "Launch Pad",
    text: "A founder-facing stage to introduce startups, gain visibility and enter the ecosystem with clarity.",
  },
  {
    label: "04",
    title: "Day One Services",
    text: "Registration, branding, positioning, website creation and go-to-market launch support.",
  },
  {
    label: "05",
    title: "Infrastructure",
    text: "Workspaces, labs, meeting rooms, event halls and support systems built for startup execution.",
  },
];

const differentiators = [
  "Founder-first community, not just desks",
  "Active event culture and live ecosystem energy",
  "Bengaluru startup network advantage",
  "Execution support from idea to launch",
  "Programs, infrastructure and visibility in one place",
];

const testimonials = [
  {
    name: "Founder Story — Reserved",
    quote:
      "Startup Park gave us more than space. It gave us movement, access and the right people at the right time.",
  },
  {
    name: "Startup Story — Reserved",
    quote:
      "From setup to visibility, the ecosystem reduced friction and helped us focus on building.",
  },
  {
    name: "Builder Story — Reserved",
    quote:
      "The energy here feels operational, not performative. You can actually build, launch and grow.",
  },
];

const DesignerStartupLanding = () => {
  const containerRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Navigation
  const navOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0.9]);
  const navScale = useTransform(scrollYProgress, [0, 0.02], [1, 0.98]);

  // Hero Video (Phase 1)
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [1, 0.85, 0.4]
  );
  const videoY = useTransform(scrollYProgress, [0.3, 0.55], ["0vh", "-130vh"]);
  const videoRadius = useTransform(scrollYProgress, [0.05, 0.15], [0, 60]);

  // Scattered Grid (Phase 2)
  const gridY = useTransform(scrollYProgress, [0, 1], ["0vh", "-120vh"]);
  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.75],
    [1, 1, 0.5, 0]
  );

  // PHASE 3: Mission
  const blueprintOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.52, 0.58],
    [0, 1, 1, 0]
  );
  const blueprintY = useTransform(scrollYProgress, [0.35, 0.42], [60, 0]);
  const pathLength = useSpring(
    useTransform(scrollYProgress, [0.35, 0.55], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const missionHeadingColor = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    ["#4b5563", "#ffffff"]
  );
  const missionSubtextColor = useTransform(
    scrollYProgress,
    [0.42, 0.52],
    ["#374151", "#9ca3af"]
  );
  const missionStatColor = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    ["#1f2937", "#ffffff"]
  );

  // PHASE 4: Google-map style section
  const mapSectionOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.61, 0.72, 0.75],
    [0, 1, 1, 0]
  );
  const mapSectionY = useTransform(scrollYProgress, [0.58, 0.62], [50, 0]);
  const mapHeaderOpacity = useTransform(
    scrollYProgress,
    [0.59, 0.62, 0.71, 0.74],
    [0, 1, 1, 0]
  );

  const mapPanX = useSpring(
    useTransform(
      scrollYProgress,
      [0.6, 0.615, 0.63, 0.645, 0.66, 0.675, 0.69, 0.705, 0.72],
      ["0%", "-4%", "3%", "-5%", "4%", "-3%", "5%", "-2%", "0%"]
    ),
    { stiffness: 80, damping: 18 }
  );

  const mapPanY = useSpring(
    useTransform(
      scrollYProgress,
      [0.6, 0.615, 0.63, 0.645, 0.66, 0.675, 0.69, 0.705, 0.72],
      ["0%", "-6%", "2%", "-5%", "3%", "-4%", "2%", "-3%", "0%"]
    ),
    { stiffness: 80, damping: 18 }
  );

  const routeProgress = useSpring(
    useTransform(scrollYProgress, [0.6, 0.71], [0, 1]),
    { stiffness: 100, damping: 18 }
  );

  const stopsTrackY = useSpring(
    useTransform(scrollYProgress, [0.6, 0.71], [0, -756]),
    { stiffness: 90, damping: 18 }
  );

  const pin1Scale = useTransform(scrollYProgress, [0.595, 0.605, 0.615], [1, 1.28, 1]);
  const pin2Scale = useTransform(scrollYProgress, [0.61, 0.62, 0.63], [1, 1.28, 1]);
  const pin3Scale = useTransform(scrollYProgress, [0.625, 0.635, 0.645], [1, 1.28, 1]);
  const pin4Scale = useTransform(scrollYProgress, [0.64, 0.65, 0.66], [1, 1.28, 1]);
  const pin5Scale = useTransform(scrollYProgress, [0.655, 0.665, 0.675], [1, 1.28, 1]);
  const pin6Scale = useTransform(scrollYProgress, [0.67, 0.68, 0.69], [1, 1.28, 1]);
  const pin7Scale = useTransform(scrollYProgress, [0.685, 0.695, 0.705], [1, 1.28, 1]);
  const pin8Scale = useTransform(scrollYProgress, [0.7, 0.71, 0.72], [1, 1.28, 1]);

  const pin1Opacity = useTransform(scrollYProgress, [0.595, 0.605, 0.615], [0.7, 1, 0.7]);
  const pin2Opacity = useTransform(scrollYProgress, [0.61, 0.62, 0.63], [0.7, 1, 0.7]);
  const pin3Opacity = useTransform(scrollYProgress, [0.625, 0.635, 0.645], [0.7, 1, 0.7]);
  const pin4Opacity = useTransform(scrollYProgress, [0.64, 0.65, 0.66], [0.7, 1, 0.7]);
  const pin5Opacity = useTransform(scrollYProgress, [0.655, 0.665, 0.675], [0.7, 1, 0.7]);
  const pin6Opacity = useTransform(scrollYProgress, [0.67, 0.68, 0.69], [0.7, 1, 0.7]);
  const pin7Opacity = useTransform(scrollYProgress, [0.685, 0.695, 0.705], [0.7, 1, 0.7]);
  const pin8Opacity = useTransform(scrollYProgress, [0.7, 0.71, 0.72], [0.7, 1, 0.7]);

  // Creed
  const creedOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.75, 0.79, 0.81],
    [0, 1, 1, 0]
  );
  const creedScale = useTransform(scrollYProgress, [0.72, 0.76], [0.95, 1]);

  // New content sections
  const audienceOpacity = useTransform(
    scrollYProgress,
    [0.79, 0.82, 0.87, 0.89],
    [0, 1, 1, 0]
  );
  const audienceY = useTransform(scrollYProgress, [0.79, 0.83], [50, 0]);
  const audienceParallax = useSpring(
    useTransform(scrollYProgress, [0.79, 0.89], [30, -30]),
    { stiffness: 90, damping: 18 }
  );

  const offeringsOpacity = useTransform(
    scrollYProgress,
    [0.87, 0.9, 0.94, 0.955],
    [0, 1, 1, 0]
  );
  const offeringsY = useTransform(scrollYProgress, [0.87, 0.91], [50, 0]);

  const ecosystemOpacity = useTransform(
    scrollYProgress,
    [0.94, 0.955, 0.985, 0.992],
    [0, 1, 1, 0]
  );
  const ecosystemY = useTransform(scrollYProgress, [0.94, 0.96], [40, 0]);

  // Contact
  const contactOpacity = useTransform(
    scrollYProgress,
    [0.982, 0.988, 0.995, 0.998],
    [0, 1, 1, 0]
  );
  const contactY = useTransform(scrollYProgress, [0.982, 0.989], [40, 0]);

  // Final reveal
  const footerOpacity = useTransform(scrollYProgress, [0.997, 0.9995], [0, 1]);
  const footerScale = useTransform(scrollYProgress, [0.997, 1], [1.05, 1]);

  const pinScales = [
    pin1Scale,
    pin2Scale,
    pin3Scale,
    pin4Scale,
    pin5Scale,
    pin6Scale,
    pin7Scale,
    pin8Scale,
  ];

  const pinOpacities = [
    pin1Opacity,
    pin2Opacity,
    pin3Opacity,
    pin4Opacity,
    pin5Opacity,
    pin6Opacity,
    pin7Opacity,
    pin8Opacity,
  ];

  return (
    <div ref={containerRef} className="relative h-[1800vh] bg-[#F7F7F5] text-[#121212]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');

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

        .map-glass {
          background: rgba(11, 17, 32, 0.72);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 30px 80px -25px rgba(0,0,0,0.45);
        }

        .map-surface {
          background:
            radial-gradient(circle at 20% 20%, rgba(59,130,246,0.14), transparent 18%),
            radial-gradient(circle at 80% 30%, rgba(99,102,241,0.14), transparent 20%),
            radial-gradient(circle at 40% 75%, rgba(6,182,212,0.12), transparent 18%),
            linear-gradient(180deg, #0b1220 0%, #0f172a 100%);
        }

        .map-roads {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(135deg, rgba(255,255,255,0.03) 2px, transparent 2px),
            linear-gradient(45deg, rgba(255,255,255,0.02) 2px, transparent 2px);
          background-size: 110px 110px, 110px 110px, 260px 260px, 220px 220px;
          opacity: 0.9;
        }

        .map-pin {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #3b82f6;
          box-shadow: 0 0 0 8px rgba(59,130,246,0.12), 0 10px 25px rgba(59,130,246,0.35);
        }
        .map-pin::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #fff;
          top: 5px;
          left: 5px;
        }

        .floating-pill {
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,0,0,0.06);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes pulse-soft {
          0%,100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        .pulse-soft {
          animation: pulse-soft 2.6s ease-in-out infinite;
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
          <a href="#" className="hover:text-black transition-colors">
            Ecosystem
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Programs
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Community
          </a>
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
              INDIA’S LAUNCHPAD
              <br />
              FOR FOUNDERS.
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-blue-500" />
              <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em]">
                Innovate → Accelerate → Succeed
              </span>
              <div className="h-[1px] w-12 bg-blue-500" />
            </div>
          </Motion.div>
        </Motion.div>

        {/* PHASE 2: PARALLAX BACKGROUND GRID */}
        <Motion.div
          style={{ opacity: gridOpacity, y: gridY }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {[
            { src: img1, t: "10%", l: "5%", s: 300, r: -5 },
            { src: img2, t: "15%", l: "70%", s: 350, r: 8 },
            { src: img4, t: "55%", l: "8%", s: 280, r: -12 },
            { src: img7, t: "60%", l: "75%", s: 320, r: 5 },
            { src: img9, t: "40%", l: "40%", s: 200, r: 15 },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                top: item.t,
                left: item.l,
                width: item.s,
                rotate: `${item.r}deg`,
              }}
              className="absolute grayscale opacity-20 filter blur-[1px]"
            >
              <img src={item.src} className="w-full h-auto rounded-3xl" alt="" />
            </div>
          ))}
        </Motion.div>

        {/* PHASE 3: THE MISSION STATEMENT */}
        <Motion.div
          style={{ opacity: blueprintOpacity, y: blueprintY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center bg-black"
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

          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-10 relative z-20">
            Our Mission — 01
          </span>

          <Motion.h2
            style={{ color: missionHeadingColor }}
            className="text-6xl md:text-8xl font-light tracking-tighter max-w-5xl leading-[0.9] mb-12 relative z-20"
          >
            The world’s first <br />
            <span className="text-gray-500 italic">comprehensive ecosystem</span> for
            builders.
          </Motion.h2>

          <Motion.p
            style={{ color: missionSubtextColor }}
            className="text-lg md:text-xl max-w-3xl font-light leading-relaxed mb-16 relative z-20"
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

        {/* PHASE 4: GOOGLE MAP STYLE INFRASTRUCTURE SECTION */}
        <Motion.div
          style={{ opacity: mapSectionOpacity, y: mapSectionY }}
          className="absolute inset-0 z-[40] bg-[#08111f] px-6 md:px-20 py-16 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-700/20 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <Motion.div
              style={{ opacity: mapHeaderOpacity }}
              className="lg:col-span-4 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.5em] mb-5 block">
                  Infrastructure — 02
                </span>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.92] mb-5">
                  Navigate <br />
                  the <span className="text-blue-500">Ecosystem.</span>
                </h3>
                <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
                  A map-style journey through 8 key destinations inside Startup Park.
                  As you scroll, the interface travels deeper into the ecosystem.
                </p>
              </div>

              <div className="map-glass rounded-[28px] p-4 md:p-5 mt-8 overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-sm">
                    ⌕
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Startup Park Maps</p>
                    <p className="text-slate-500 text-[11px] uppercase tracking-[0.25em]">
                      8 destinations
                    </p>
                  </div>
                </div>

                <div className="relative h-[380px] overflow-hidden rounded-[20px] bg-white/[0.02] border border-white/5">
                  <Motion.div style={{ y: stopsTrackY }} className="p-3 space-y-3">
                    {mapStops.map((stop) => (
                      <div
                        key={stop.id}
                        className="rounded-[18px] border border-white/6 bg-white/[0.03] p-4 min-h-[92px]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.28em] text-blue-400 mb-1">
                              Stop {stop.id}
                            </p>
                            <h4 className="text-white text-lg font-semibold tracking-tight">
                              {stop.title}
                            </h4>
                            <p className="text-slate-500 text-xs uppercase tracking-[0.18em] mt-1">
                              {stop.subtitle}
                            </p>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-300">
                            ↗
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mt-3">
                          {stop.desc}
                        </p>
                      </div>
                    ))}
                  </Motion.div>
                </div>
              </div>
            </Motion.div>

            <div className="lg:col-span-8 h-[68vh] lg:h-[78vh]">
              <Motion.div
                style={{ x: mapPanX, y: mapPanY }}
                className="map-surface relative h-full w-full rounded-[36px] overflow-hidden border border-white/6 shadow-[0_40px_120px_-35px_rgba(0,0,0,0.6)]"
              >
                <div className="map-roads absolute inset-0" />

                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
                  <div className="map-glass rounded-full px-4 py-3 flex items-center gap-3">
                    <span className="text-white/70 text-sm">⌕</span>
                    <span className="text-white/90 text-sm">Startup Park, Bengaluru</span>
                  </div>
                  <div className="map-glass rounded-full px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-slate-300">
                    Live Route
                  </div>
                </div>

                <div className="absolute right-6 bottom-6 z-20 flex flex-col gap-3">
                  <div className="map-glass rounded-2xl w-12 h-12 flex items-center justify-center text-white text-lg">
                    +
                  </div>
                  <div className="map-glass rounded-2xl w-12 h-12 flex items-center justify-center text-white text-lg">
                    −
                  </div>
                </div>

                <svg
                  className="absolute inset-0 w-full h-full z-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 18 18 C 28 20, 35 25, 42 28 S 60 20, 72 22 S 70 42, 58 48 S 38 54, 26 56 S 34 68, 46 66 S 62 68, 76 70 S 72 84, 60 84"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeDasharray="3 3"
                  />

                  <Motion.path
                    d="M 18 18 C 28 20, 35 25, 42 28 S 60 20, 72 22 S 70 42, 58 48 S 38 54, 26 56 S 34 68, 46 66 S 62 68, 76 70 S 72 84, 60 84"
                    fill="transparent"
                    stroke="url(#routeGradient)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    style={{ pathLength: routeProgress }}
                  />
                </svg>

                {mapStops.map((stop, idx) => (
                  <Motion.div
                    key={stop.id}
                    style={{
                      top: stop.top,
                      left: stop.left,
                      scale: pinScales[idx],
                      opacity: pinOpacities[idx],
                    }}
                    className="map-pin z-20"
                  />
                ))}

                <div className="absolute inset-0 z-20 pointer-events-none">
                  {mapStops.map((stop) => (
                    <div
                      key={`${stop.id}-label`}
                      className="absolute"
                      style={{ top: stop.top, left: stop.left }}
                    >
                      <div className="translate-x-6 -translate-y-3 rounded-full bg-black/45 backdrop-blur-md border border-white/10 px-3 py-2">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-blue-300 mb-1">
                          {stop.id}
                        </p>
                        <p className="text-white text-xs font-semibold whitespace-nowrap">
                          {stop.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute left-6 bottom-6 z-20 map-glass rounded-[24px] px-5 py-4 max-w-sm">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-blue-400 mb-2">
                    Scroll Navigation
                  </p>
                  <p className="text-white text-lg font-semibold tracking-tight mb-1">
                    A physical + ecosystem-driven hub
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Not just space. Community, programs, launch support, services,
                    events and founder movement stitched into one navigable experience.
                  </p>
                </div>
              </Motion.div>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 4.5: THE CREED */}
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
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img src={img9} className="w-full h-full object-cover" alt="Founder" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Vision Statement 2025
              </span>
            </div>
          </div>
        </Motion.div>

        {/* NEW SECTION: HERO & IDENTITY + AUDIENCE & UTILITY */}
        <Motion.div
          style={{ opacity: audienceOpacity, y: audienceY }}
          className="absolute inset-0 z-[48] bg-[#f5f5f2] px-6 md:px-20 py-16 overflow-hidden"
        >
          <Motion.div
            style={{ y: audienceParallax }}
            className="absolute -top-10 right-0 w-[40vw] h-[40vw] rounded-full bg-blue-100 blur-[120px] opacity-60"
          />
          <Motion.div
            style={{ y: useSpring(useTransform(scrollYProgress, [0.79, 0.89], [-20, 30]), { stiffness: 90, damping: 18 }) }}
            className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-cyan-100 blur-[120px] opacity-60"
          />

          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
                Identity + Fit — 03
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-5">
                Build. Launch. Grow. <br />
                <span className="text-blue-600">All from Startup Park.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
                Startup Park is where startups take off. A physical campus fused with
                an ecosystem designed for entrepreneurs, innovators and builders who
                want more than just a desk.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.25em] hover:scale-105 transition-transform">
                  Book a Visit
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.25em] hover:scale-105 transition-transform">
                  Apply Now
                </button>
                <button className="bg-white text-black border border-black/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.25em] hover:scale-105 transition-transform">
                  Launch Your Startup
                </button>
              </div>

              <div className="rounded-[32px] bg-white/80 backdrop-blur-xl border border-black/5 p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-blue-600 font-bold mb-3">
                  What is Startup Park
                </p>
                <p className="text-gray-700 leading-relaxed">
                  More than a workspace, Startup Park is a founder ecosystem with
                  community, events, launch support, execution services and
                  infrastructure that helps people move from idea to momentum.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {audienceCards.map((card, idx) => (
                  <Motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.6 }}
                    className={`rounded-[30px] p-6 border border-black/5 shadow-sm ${
                      idx === 0
                        ? "md:col-span-2 bg-black text-white"
                        : "bg-white/85 backdrop-blur-xl"
                    }`}
                  >
                    <p
                      className={`text-[10px] uppercase tracking-[0.28em] mb-3 font-bold ${
                        idx === 0 ? "text-blue-400" : "text-gray-400"
                      }`}
                    >
                      Audience
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight mb-3">{card.title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        idx === 0 ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {card.text}
                    </p>
                  </Motion.div>
                ))}
              </div>

              <div className="rounded-[32px] bg-white/85 backdrop-blur-xl border border-black/5 p-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-blue-600 font-bold mb-4">
                  Activity Highlights
                </p>
                <div className="flex flex-wrap gap-3">
                  {activityHighlights.map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 rounded-full bg-[#f7f7f5] border border-black/5 text-sm font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* NEW SECTION: OFFERINGS & DIFFERENTIATION */}
        <Motion.div
          style={{ opacity: offeringsOpacity, y: offeringsY }}
          className="absolute inset-0 z-[49] bg-[#0b0b0c] text-white px-6 md:px-20 py-16 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[10%] w-[30vw] h-[30vw] bg-blue-700/15 rounded-full blur-[110px]" />
            <div className="absolute bottom-[-10%] right-[5%] w-[28vw] h-[28vw] bg-indigo-700/15 rounded-full blur-[110px]" />
          </div>

          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
                Offerings — 04
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-5">
                Programs. Services. <br />
                <span className="text-blue-500">Infrastructure.</span>
              </h2>
              <p className="text-slate-400 max-w-lg text-base leading-relaxed mb-8">
                Startup Park combines memberships, launch support, services and
                physical infrastructure so founders can operate from one powerful base.
              </p>

              <div className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6">
                <p className="text-[10px] uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">
                  Why Startup Park is Different
                </p>
                <div className="space-y-3">
                  {differentiators.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {programCards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-[28px] border border-white/6 p-6 ${
                    card.label === "03"
                      ? "bg-blue-600 text-white xl:col-span-2"
                      : "bg-white/[0.04]"
                  }`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-4 ${
                      card.label === "03" ? "text-blue-100" : "text-white/35"
                    }`}
                  >
                    {card.label}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{card.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      card.label === "03" ? "text-blue-50/90" : "text-slate-400"
                    }`}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>

        {/* NEW SECTION: STRATEGIC ECOSYSTEM HIGHLIGHTS + SOCIAL PROOF + FINAL ACTION */}
        <Motion.div
          style={{ opacity: ecosystemOpacity, y: ecosystemY }}
          className="absolute inset-0 z-[50] bg-white px-6 md:px-20 py-14 overflow-hidden"
        >
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
                Ecosystem Highlights — 05
              </span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
                A live ecosystem for
                <br />
                <span className="text-blue-600">founders in motion.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-5 rounded-[34px] bg-black text-white p-8">
                <p className="text-[10px] uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">
                  Launch Pad
                </p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  A stage for founders to introduce their startup to the ecosystem.
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Present your startup, gain visibility, meet the right people, and
                  begin your Startup Park journey with clarity and momentum.
                </p>
              </div>

              <div className="lg:col-span-4 rounded-[34px] bg-[#f7f7f5] border border-black/5 p-8">
                <p className="text-[10px] uppercase tracking-[0.32em] text-blue-600 font-bold mb-4">
                  Day One Services
                </p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Registration. Branding. Website. Launch.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A revenue-generating service layer for founders who need help
                  getting company basics and launch assets done right.
                </p>
              </div>

              <div className="lg:col-span-3 rounded-[34px] bg-blue-600 text-white p-8">
                <p className="text-[10px] uppercase tracking-[0.32em] text-blue-100 font-bold mb-4">
                  Events & Community
                </p>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div>Founder Meetups</div>
                  <div>Live Workshops</div>
                  <div>Pitch Rooms</div>
                  <div>Community Nights</div>
                  <div>Demo Days</div>
                </div>
              </div>

              <div className="lg:col-span-7 rounded-[34px] border border-black/5 p-7 bg-white">
                <p className="text-[10px] uppercase tracking-[0.32em] text-blue-600 font-bold mb-5">
                  Testimonials
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {testimonials.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-[24px] bg-[#f7f7f5] border border-black/5 p-5"
                    >
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {item.quote}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 rounded-[34px] bg-black text-white p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-blue-400 font-bold mb-4">
                    Final Action
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Join Startup Park. <br />
                    Or build with Day One.
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Enter the ecosystem as a founder, builder, team or partner and
                    move from intention to execution faster.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.25em]">
                    Join Startup Park
                  </button>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.25em]">
                    Build with Day One
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 5: THE CONNECTION HUB */}
        <Motion.div
          style={{ opacity: contactOpacity, y: contactY }}
          className="absolute inset-0 z-[55] flex flex-col justify-center px-10 md:px-32 bg-white"
        >
          <div className="absolute top-[15%] right-[20%] floating-pill opacity-40 rotate-12">
            HQ: Bengaluru
          </div>
          <div className="absolute bottom-[20%] left-[15%] floating-pill opacity-40 -rotate-6">
            Status: Operational
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end relative z-10">
            <div className="lg:col-span-7">
              <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block">
                Connect — 06
              </span>
              <div className="flex flex-col gap-6">
                <a href="mailto:contact@thestartuppark.com" className="contact-link-large group">
                  Say Hello{" "}
                  <span className="text-gray-200 group-hover:text-blue-200 transition-colors">
                    —
                  </span>
                </a>
                <a href="#" className="contact-link-large group">
                  Partner with Us{" "}
                  <span className="text-gray-200 group-hover:text-blue-200 transition-colors">
                    —
                  </span>
                </a>
                <a href="#" className="contact-link-large group">
                  Find our Office{" "}
                  <span className="text-gray-200 group-hover:text-blue-200 transition-colors">
                    —
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 pb-4">
              <div className="p-10 bg-[#F7F7F5] rounded-[40px] shadow-sm space-y-8 border border-black/5">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Location
                  </span>
                  <p className="text-lg font-medium">Bengaluru, KA, India</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Availability
                  </span>
                  <p className="text-lg font-medium">Cohort &apos;26: Open for screening</p>
                </div>
                <div className="pt-6 border-t border-gray-200 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                    TW
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                    LI
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                    IG
                  </div>
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
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
          <div className="animate-marquee text-[30vh] font-bold flex">
            <span className="px-20">THE STARTUP PARK</span>
            <span className="px-20">INDIA&apos;S LAUNCHPAD</span>
            <span className="px-20">THE STARTUP PARK</span>
            <span className="px-20">INDIA&apos;S LAUNCHPAD</span>
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
            <button className="group relative bg-white text-black px-16 py-8 rounded-full font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)]">
              <span className="relative z-10">Enter the Ecosystem</span>
              <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </button>

            <div className="flex items-center gap-6">
              <div className="w-12 h-[1px] bg-gray-800" />
              <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">
                startup.park — © 2026
              </p>
              <div className="w-12 h-[1px] bg-gray-800" />
            </div>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default DesignerStartupLanding;