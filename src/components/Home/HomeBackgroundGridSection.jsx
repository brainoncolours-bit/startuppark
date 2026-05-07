import React from "react";
import { motion as Motion, useTransform } from "framer-motion";

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

const HomeBackgroundGridSection = ({ scrollYProgress }) => {
  const gridY = useTransform(scrollYProgress, [0, 1], ["0vh", "-120vh"]);
  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.015, 0.03, 0.055],
    [1, 1, 0.55, 0]
  );

  const items = [
    { src: img1, t: "10%", l: "5%", s: 300, r: -5 },
    { src: img2, t: "15%", l: "70%", s: 350, r: 8 },
    { src: img4, t: "55%", l: "8%", s: 280, r: -12 },
    { src: img7, t: "60%", l: "75%", s: 320, r: 5 },
    { src: img9, t: "40%", l: "40%", s: 200, r: 15 },
  ];

  return (
    <Motion.div
      style={{ opacity: gridOpacity, y: gridY }}
      className="absolute inset-0 z-10 pointer-events-none"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            top: item.t,
            left: item.l,
            width: item.s,
            rotate: `${item.r}deg`,
          }}
          className="absolute grayscale opacity-35 filter blur-0"
        >
          <img src={item.src} className="w-full h-auto rounded-3xl" alt="" />
        </div>
      ))}
    </Motion.div>
  );
};

export default HomeBackgroundGridSection;
