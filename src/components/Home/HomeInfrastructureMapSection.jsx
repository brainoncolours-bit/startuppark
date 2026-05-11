import React from "react";
import { motion as Motion, useTransform } from "framer-motion";
import { MapPin, Route, Layers3 } from "lucide-react";

const mapStops = [
  {
    id: "01",
    title: "Launch Pad",
    subtitle: "Founder entry point",
    desc: "Pitch, onboard, and enter the ecosystem through Startup Park's structured launch flow.",
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

const HomeInfrastructureMapSection = ({ scrollYProgress, isActive = true }) => {
  const mapSectionOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.185, 0.315, 0.34],
    [0, 1, 1, 0]
  );
  const mapSectionY = useTransform(scrollYProgress, [0.16, 0.185], [50, 0]);
  const mapHeaderOpacity = useTransform(
    scrollYProgress,
    [0.17, 0.195, 0.305, 0.33],
    [0, 1, 1, 0]
  );
  const mapHeaderY = useTransform(scrollYProgress, [0.17, 0.195], [24, 0]);
  const mapHeaderScale = useTransform(scrollYProgress, [0.17, 0.195], [0.98, 1]);

  const mapPanX = useTransform(scrollYProgress, [0.195, 0.315], ["0%", "0%"]);
  const mapPanY = useTransform(scrollYProgress, [0.195, 0.315], ["0%", "0%"]);
  const mapSurfaceY = useTransform(scrollYProgress, [0.19, 0.22], [16, 0]);
  const mapSurfaceScale = useTransform(scrollYProgress, [0.19, 0.22], [0.99, 1]);
  const mapSurfaceGlow = useTransform(scrollYProgress, [0.19, 0.315], [0.84, 1]);

  const routeProgress = useTransform(scrollYProgress, [0.195, 0.31], [0, 1]);
  const routeOrbX = useTransform(
    scrollYProgress,
    [0.195, 0.211, 0.227, 0.243, 0.259, 0.275, 0.291, 0.307, 0.315],
    ["18%", "42%", "72%", "58%", "26%", "46%", "76%", "60%", "60%"]
  );
  const routeOrbY = useTransform(
    scrollYProgress,
    [0.195, 0.211, 0.227, 0.243, 0.259, 0.275, 0.291, 0.307, 0.315],
    ["18%", "28%", "22%", "48%", "56%", "66%", "70%", "84%", "84%"]
  );
  const routeOrbScale = useTransform(scrollYProgress, [0.195, 0.235, 0.31], [0.7, 1, 0.92]);
  const routeOrbGlow = useTransform(scrollYProgress, [0.195, 0.235, 0.31], [0.6, 1, 0.88]);
  const stopsTrackY = useTransform(scrollYProgress, [0.195, 0.31], [0, -756]);

  const pin1Scale = useTransform(scrollYProgress, [0.195, 0.199, 0.206], [1, 1.15, 1]);
  const pin2Scale = useTransform(scrollYProgress, [0.21, 0.214, 0.221], [1, 1.15, 1]);
  const pin3Scale = useTransform(scrollYProgress, [0.225, 0.229, 0.236], [1, 1.15, 1]);
  const pin4Scale = useTransform(scrollYProgress, [0.24, 0.244, 0.251], [1, 1.15, 1]);
  const pin5Scale = useTransform(scrollYProgress, [0.255, 0.259, 0.266], [1, 1.15, 1]);
  const pin6Scale = useTransform(scrollYProgress, [0.27, 0.274, 0.281], [1, 1.15, 1]);
  const pin7Scale = useTransform(scrollYProgress, [0.285, 0.289, 0.296], [1, 1.15, 1]);
  const pin8Scale = useTransform(scrollYProgress, [0.3, 0.304, 0.31], [1, 1.15, 1]);

  const pin1Opacity = useTransform(scrollYProgress, [0.195, 0.199, 0.206], [0.7, 1, 0.7]);
  const pin2Opacity = useTransform(scrollYProgress, [0.21, 0.214, 0.221], [0.7, 1, 0.7]);
  const pin3Opacity = useTransform(scrollYProgress, [0.225, 0.229, 0.236], [0.7, 1, 0.7]);
  const pin4Opacity = useTransform(scrollYProgress, [0.24, 0.244, 0.251], [0.7, 1, 0.7]);
  const pin5Opacity = useTransform(scrollYProgress, [0.255, 0.259, 0.266], [0.7, 1, 0.7]);
  const pin6Opacity = useTransform(scrollYProgress, [0.27, 0.274, 0.281], [0.7, 1, 0.7]);
  const pin7Opacity = useTransform(scrollYProgress, [0.285, 0.289, 0.296], [0.7, 1, 0.7]);
  const pin8Opacity = useTransform(scrollYProgress, [0.3, 0.304, 0.31], [0.7, 1, 0.7]);

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
    <Motion.div
      style={{ opacity: mapSectionOpacity, y: mapSectionY }}
      className="relative z-[40] min-h-screen bg-[#08111f] px-6 md:px-20 py-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-700/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <Motion.div
          style={{ opacity: mapHeaderOpacity, y: mapHeaderY, scale: mapHeaderScale }}
          className="lg:col-span-4 h-full flex flex-col justify-between gap-6"
        >
          <div>
            <span className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.5em] mb-5 block">
              Infrastructure - 02
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
                <Route size={16} />
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
                        <Layers3 size={14} />
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

        <Motion.div
          style={{ y: mapSurfaceY, scale: mapSurfaceScale, opacity: mapSurfaceGlow }}
          className="lg:col-span-8 h-[68vh] lg:h-[78vh]"
        >
          <Motion.div
            style={{ x: mapPanX, y: mapPanY }}
            className="map-surface relative h-full w-full rounded-[36px] overflow-hidden border border-white/6 shadow-[0_40px_120px_-35px_rgba(0,0,0,0.6)]"
          >
            <Motion.div
              style={{ opacity: mapSurfaceGlow }}
              className="absolute inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(96,165,250,0.18),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(59,130,246,0.1),transparent_22%)]"
            />
            <div className="map-roads absolute inset-0" />
            <div className="absolute inset-0 z-[6] pointer-events-none">
              <div className="absolute top-[18%] left-[16%] w-2 h-2 rounded-full bg-cyan-300/80 blur-[1px] pulse-soft" />
              <div className="absolute top-[52%] left-[58%] w-2 h-2 rounded-full bg-blue-300/70 blur-[1px] pulse-soft" />
              <div className="absolute top-[79%] left-[72%] w-2 h-2 rounded-full bg-sky-300/60 blur-[1px] pulse-soft" />
            </div>

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <div className="map-glass rounded-full px-4 py-3 flex items-center gap-3">
                <span className="text-white/70 text-sm">
                  <MapPin size={14} />
                </span>
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
                -
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
                stroke="rgba(96,165,250,0.24)"
                strokeWidth="4.8"
                strokeLinecap="round"
                style={{ pathLength: routeProgress }}
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

            <Motion.div
              style={{
                x: routeOrbX,
                y: routeOrbY,
                scale: routeOrbScale,
                opacity: routeOrbGlow,
              }}
              className="absolute z-20 pointer-events-none left-0 top-0"
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 w-10 h-10 rounded-full bg-cyan-400/25 blur-xl" />
                <div className="absolute inset-[-8px] rounded-full border border-cyan-300/20" />
                <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_0_8px_rgba(56,189,248,0.18),0_0_28px_rgba(34,211,238,0.55)]" />
              </div>
            </Motion.div>

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
          </Motion.div>
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default HomeInfrastructureMapSection;
