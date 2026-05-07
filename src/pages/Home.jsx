import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import AudienceUtilitySection from "../components/AudienceUtilitySection";
import EcosystemHighlightsSection from "../components/EcosystemHighlightsSection";
import HomeBackgroundGridSection from "../components/HomeBackgroundGridSection";
import HomeContactSection from "../components/HomeContactSection";
import HomeCreedSection from "../components/HomeCreedSection";
import HomeFinalRevealSection from "../components/HomeFinalRevealSection";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeInfrastructureMapSection from "../components/HomeInfrastructureMapSection";
import HomeMissionSection from "../components/HomeMissionSection";
import HomeNavigationSection from "../components/HomeNavigationSection";
import OfferingsDifferentiationSection from "../components/OfferingsDifferentiationSection";

const DesignerStartupLanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [activePhase, setActivePhase] = useState("hero");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextPhase =
      latest < 0.22
        ? "hero"
        : latest < 0.46
        ? "mission"
        : latest < 0.77
        ? "audience"
        : latest < 0.92
        ? "offerings"
        : latest < 0.95
        ? "ecosystem"
        : "contact";

    setActivePhase((prev) => (prev === nextPhase ? prev : nextPhase));
  });

  const audienceActive = activePhase === "audience";
  const offeringsActive = activePhase === "offerings";
  const ecosystemActive = activePhase === "ecosystem";
  const contactActive = activePhase === "contact";

  return (
    <div
      ref={containerRef}
      className="relative h-[1800vh] bg-[#050816] text-white overflow-x-clip"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          background-image: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.05;
          pointer-events: none;
          z-index: 0;
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
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(14, 22, 40, 0.86), rgba(10, 16, 30, 0.7));
          backdrop-filter: blur(24px) saturate(1.12);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 30px 90px -28px rgba(0,0,0,0.55);
        }

        .map-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 32%);
          pointer-events: none;
        }

        .map-surface {
          isolation: isolate;
          background:
            radial-gradient(circle at 20% 20%, rgba(59,130,246,0.14), transparent 18%),
            radial-gradient(circle at 80% 30%, rgba(99,102,241,0.14), transparent 20%),
            radial-gradient(circle at 40% 75%, rgba(6,182,212,0.12), transparent 18%),
            linear-gradient(180deg, #0b1220 0%, #0f172a 100%);
        }

        .map-surface::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 34%, rgba(96,165,250,0.16), transparent 28%),
            radial-gradient(circle at 72% 70%, rgba(34,211,238,0.12), transparent 26%),
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 42%);
          pointer-events: none;
        }

        .map-surface::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.14), transparent 20%, transparent 78%, rgba(0,0,0,0.28));
          pointer-events: none;
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

      <HomeNavigationSection scrollYProgress={scrollYProgress} />

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050816]">
        <HomeHeroSection scrollYProgress={scrollYProgress} />
        <HomeBackgroundGridSection scrollYProgress={scrollYProgress} />
        <HomeMissionSection scrollYProgress={scrollYProgress} />
        <HomeInfrastructureMapSection
          scrollYProgress={scrollYProgress}
          isActive={
            activePhase === "mission" ||
            activePhase === "audience" ||
            activePhase === "offerings" ||
            activePhase === "ecosystem"
          }
        />
        <HomeCreedSection scrollYProgress={scrollYProgress} />

        <AudienceUtilitySection
          scrollYProgress={scrollYProgress}
          isActive={audienceActive}
        />

        <OfferingsDifferentiationSection
          scrollYProgress={scrollYProgress}
          isActive={offeringsActive}
        />

        <EcosystemHighlightsSection
          scrollYProgress={scrollYProgress}
          isActive={ecosystemActive}
        />

        <HomeContactSection
          scrollYProgress={scrollYProgress}
          isActive={contactActive}
        />
      </div>

      <HomeFinalRevealSection scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default DesignerStartupLanding;
