import React, { useState, useEffect, useRef } from "react";

/**
 * UPDATED: CALIBRATED ORBITAL CONSTANTS
 * Matches the tight elliptical clustering and 3D tilting from the reference image.
 */

const audienceData = [
  {
    label: "01",
    title: "Startups",
    icon: "⚡",
    sub: "Set up, validate, hire, build traction, and grow inside a founder-first environment.",
    accent: "#6EE7F7",
    glow: "rgba(110,231,247,0.35)",
    cardBg: "linear-gradient(135deg, rgba(14,26,54,0.92) 0%, rgba(10,18,40,0.97) 100%)",
    borderColor: "rgba(110,231,247,0.45)",
    tagColor: "#6EE7F7",
  },
  {
    label: "02",
    title: "Entrepreneurs",
    icon: "🛡",
    sub: "Turn ideas into companies with support, community, execution and visibility.",
    accent: "#A78BFA",
    glow: "rgba(167,139,250,0.35)",
    cardBg: "linear-gradient(135deg, rgba(20,14,54,0.92) 0%, rgba(12,10,40,0.97) 100%)",
    borderColor: "rgba(167,139,250,0.45)",
    tagColor: "#A78BFA",
  },
  {
    label: "03",
    title: "Founders",
    icon: "🔮",
    sub: "Find a serious operating base with access to events, mentors, peers and momentum.",
    accent: "#34D399",
    glow: "rgba(52,211,153,0.35)",
    cardBg: "linear-gradient(135deg, rgba(10,32,28,0.92) 0%, rgba(8,22,20,0.97) 100%)",
    borderColor: "rgba(52,211,153,0.45)",
    tagColor: "#34D399",
  },
  {
    label: "04",
    title: "Creators",
    icon: "📡",
    sub: "Collaborate with brands, startups and ecosystem builders through energy-rich spaces.",
    accent: "#FB923C",
    glow: "rgba(251,146,60,0.35)",
    cardBg: "linear-gradient(135deg, rgba(40,18,8,0.92) 0%, rgba(28,12,4,0.97) 100%)",
    borderColor: "rgba(251,146,60,0.45)",
    tagColor: "#FB923C",
  },
  {
    label: "05",
    title: "Ecosystem Builders",
    icon: "🌐",
    sub: "Run programs, activate communities and plug into Bangalore's startup pulse.",
    accent: "#F472B6",
    glow: "rgba(244,114,182,0.35)",
    cardBg: "linear-gradient(135deg, rgba(40,8,28,0.92) 0%, rgba(28,6,20,0.97) 100%)",
    borderColor: "rgba(244,114,182,0.45)",
    tagColor: "#F472B6",
  },
];

const OrbitalCard = ({ item, index, rotation, total, hoveredIndex, onHover, onLeave }) => {
  const angle = (index * (360 / total) + rotation) % 360;
  const radians = (angle * Math.PI) / 180;

  // RECALIBRATED: Matches the visual depth of the reference image
  const xRadius = 420; 
  const zRadius = 220;

  const x = Math.sin(radians) * xRadius;
  const z = Math.cos(radians) * zRadius;
  
  // RECALIBRATED: Tilt cards toward the center as they orbit
  const rotateY = Math.sin(radians) * -45;

  const focusFactor = (Math.cos(radians) + 1) / 2;
  const isFront = z > zRadius * 0.8;

  const isHovered = hoveredIndex === index;
  const anyHovered = hoveredIndex !== null;

  const scale = isHovered
    ? 1.05
    : anyHovered
    ? (0.65 + focusFactor * 0.35) * 0.85
    : 0.65 + focusFactor * 0.35;

  const opacity = isHovered || isFront
    ? 1
    : anyHovered
    ? 0.25 + focusFactor * 0.75
    : 0.22 + focusFactor * 0.7;

  const blurValue = isHovered || isFront
    ? 0
    : (1 - focusFactor) * 8;

  const zIndex = isHovered ? 9999 : Math.round(z + 500);
  const finalRotateY = isHovered ? 0 : rotateY;

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      style={{
        position: "absolute",
        zIndex,
        transform: `translate3d(${x}px, 0, ${z}px) scale(${scale}) rotateY(${finalRotateY}deg)`,
        opacity,
        filter: `blur(${blurValue}px)`,
        transition: isHovered
          ? "transform 0.4s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.3s ease, filter 0.3s ease"
          : "transform 0.1s linear, opacity 0.3s ease, filter 0.3s ease",
        transformStyle: "preserve-3d",
        width: 320,
        height: 440,
        cursor: "pointer",
      }}
    >
      {/* Outer glow ring */}
      {(isFront || isHovered) && (
        <div
          style={{
            position: "absolute",
            inset: -20,
            borderRadius: 50,
            background: `radial-gradient(circle, ${item.glow}, transparent 75%)`,
            zIndex: -1,
            animation: isHovered ? "glowPulseHover 2s infinite" : "glowPulse 3s infinite",
          }}
        />
      )}

      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            background: `rgba(0,0,0,0.8)`,
            border: `1px solid ${item.borderColor}`,
            borderRadius: 50,
            padding: "4px 14px",
            fontSize: 9,
            fontWeight: 900,
            color: item.tagColor,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            zIndex: 10,
            backdropFilter: "blur(10px)",
            animation: "fadeInDown 0.3s ease-out",
          }}
        >
          Paused
        </div>
      )}

      <div
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 40,
          background: item.cardBg,
          border: `1px solid ${(isFront || isHovered) ? item.borderColor : "rgba(255,255,255,0.08)"}`,
          boxShadow: isHovered
            ? `0 40px 100px ${item.glow}, inset 0 0 20px rgba(255,255,255,0.05)`
            : isFront
            ? `0 20px 60px ${item.glow}`
            : "none",
          backdropFilter: isFront || isHovered ? "blur(10px)" : "blur(6px)",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px 32px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 2 }}>
          <span style={{
            fontSize: 10,
            fontWeight: 900,
            letterSpacing: "0.5em",
            color: (isFront || isHovered) ? item.tagColor : "rgba(255,255,255,0.2)",
            textTransform: "uppercase"
          }}>
            Phase {item.label}
          </span>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: (isFront || isHovered) ? `rgba(255,255,255,0.1)` : "rgba(255,255,255,0.02)",
            border: `1px solid ${(isFront || isHovered) ? item.borderColor : "rgba(255,255,255,0.05)"}`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20
          }}>
            {item.icon}
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: 28, fontWeight: 900, textTransform: "uppercase",
            color: (isFront || isHovered) ? "#FFF" : "rgba(255,255,255,0.2)",
            marginBottom: 12, lineHeight: 1.1, fontStyle: "italic"
          }}>
            {item.title}
          </h3>
          <p style={{
            fontSize: 14, lineHeight: 1.6,
            color: (isFront || isHovered) ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.1)"
          }}>
            {item.sub}
          </p>
        </div>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: 20, borderTop: `1px solid ${(isFront || isHovered) ? "rgba(255,255,255,0.1)" : "transparent"}`
        }}>
          <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: (isFront || isHovered) ? item.tagColor : "transparent" }}>
            Identify Fit
          </span>
          <div style={{ color: (isFront || isHovered) ? item.tagColor : "transparent" }}>↗</div>
        </div>
      </div>
    </div>
  );
};

const AudienceUtilitySection = ({ isActive = true }) => {
  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const frameRef = useRef();
  const rotationRef = useRef(0);

  useEffect(() => {
    // RECALIBRATED: Smooth cinematic speed consistent with high-end orbits
    const speed = 0.85; 
    const animate = () => {
      if (hoveredIndex === null) {
        rotationRef.current = (rotationRef.current - speed) % 360;
        setRotation(rotationRef.current);
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [hoveredIndex]);

  return (
    <section style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      background: "#020617", display: "flex", flexDirection: "column", overflow: "hidden",
      opacity: isActive ? 1 : 0, transition: "opacity 1s", zIndex: 48,
    }}>
      <style>{`
        @keyframes glowPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }
        @keyframes glowPulseHover { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translate(-50%, -10px); } to { opacity: 1; transform: translate(-50%, 0); } }
      `}</style>

      {/* Grid Background */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div style={{ position: "relative", zIndex: 60, width: "100%", maxWidth: 1400, margin: "0 auto", padding: "60px 40px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ height: 2, width: 48, background: "linear-gradient(90deg, #6EE7F7, #A78BFA)", borderRadius: 2 }} />
            <span style={{
              color: "#6EE7F7", fontSize: 10, fontWeight: 900,
              letterSpacing: "0.75em", textTransform: "uppercase",
            }}>
              Identity + Fit // Phase 03
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: 28 }}>
            {[
              { word: "BUILD.", color: "#FFFFFF" },
              { word: "LAUNCH.", color: "#FFFFFF" },
              { word: "GROW.", color: "#6EE7F7" },
            ].map(({ word, color }) => (
              <h2 key={word} style={{
                fontSize: "clamp(3rem, 6.5vw, 7.5rem)",
                fontWeight: 900, fontStyle: "italic",
                letterSpacing: "-0.04em", lineHeight: 1,
                color,
                fontFamily: "'Georgia', serif",
                margin: 0,
                textShadow: color === "#6EE7F7" ? "0 0 40px rgba(110,231,247,0.5)" : "none",
              }}>
                {word}
              </h2>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 300, textAlign: "right", paddingBottom: 6 }}>
          <p style={{
            color: "rgba(160,190,240,0.55)", fontSize: 13,
            lineHeight: 1.7, fontStyle: "italic", fontWeight: 400,
            fontFamily: "'Georgia', serif", marginBottom: 16,
          }}>
            "A physical campus fused with an ecosystem designed for innovators who want more than just a desk."
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            {["Spaces", "Programs", "Mentors"].map((tag) => (
              <span key={tag} style={{
                padding: "6px 16px", borderRadius: 50,
                border: "1px solid rgba(110,200,255,0.22)",
                fontSize: 9, textTransform: "uppercase",
                fontWeight: 900, letterSpacing: "0.2em",
                color: "rgba(160,200,255,0.5)",
                background: "rgba(110,200,255,0.04)",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", perspective: 2000 }}>
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", transformStyle: "preserve-3d" }}>
          {audienceData.map((item, i) => (
            <OrbitalCard
              key={item.label}
              item={item}
              index={i}
              rotation={rotation}
              total={audienceData.length}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 60, padding: "0 40px 40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 9, fontWeight: 900, color: "#6EE7F7", textTransform: "uppercase", letterSpacing: "0.5em", marginBottom: 10 }}>
            <span style={{ width: 28, height: 1, background: "rgba(110,231,247,0.4)", display: "inline-block" }} />
            Global Access Points
          </span>
          <p style={{ fontSize: 11.5, color: "rgba(140,170,220,0.45)", fontStyle: "italic", lineHeight: 1.6, fontFamily: "'Georgia', serif", maxWidth: 280 }}>
            "Startup Park is a founder ecosystem helping builders move from idea to market momentum via execution support."
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(110,200,255,0.12)",
            borderRadius: 50, padding: "8px 18px",
          }}>
            <span style={{ color: "#34D399", fontSize: 10, animation: "glowPulse 1.6s ease-in-out infinite" }}>●</span>
            <span style={{ fontSize: 9, fontWeight: 900, color: "rgba(160,200,255,0.6)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Link_Status: Active
            </span>
          </div>
          <span style={{
            fontSize: 8.5, fontWeight: 900,
            color: "rgba(110,160,220,0.35)",
            letterSpacing: "0.4em", textTransform: "uppercase",
          }}>
            Bengaluru_Campus // 12.9716° N
          </span>
        </div>
      </div>
    </section>
  );
};

export default AudienceUtilitySection;