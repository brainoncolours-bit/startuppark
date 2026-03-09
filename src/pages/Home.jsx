import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Rocket, TrendingUp, Users } from "lucide-react";

const StartupParkLanding = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const galleryRef = useRef(null);
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"],
  });

  // Scale and Y adjustments
  const mainVideoScale = useTransform(galleryProgress, [0, 0.4], [1, 0.22]);
  const mainVideoRadius = useTransform(galleryProgress, [0, 0.3], ["0px", "40px"]);
  const mainVideoY = useTransform(galleryProgress, [0, 0.4], ["0%", "-10%"]); 

  const floatOpacity = useTransform(galleryProgress, [0.15, 0.4], [0, 1]);
  const floatScale = useTransform(galleryProgress, [0.15, 0.4], [0.5, 1]);
  const galleryTextOpacity = useTransform(galleryProgress, [0.6, 0.8], [0, 1]);
  const galleryTextY = useTransform(galleryProgress, [0.6, 0.8], [30, 0]);

  // Waabi-inspired scattered layout positions
  const floaters = [
    // Top Set
    { row: 1, col: 1, x: -300, y: -200, img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400" }, // Top left
    { row: 1, col: 3, x: 300, y: -200, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400" },  // Top right
    
    // Middle Outer Set
    { row: 2, col: 1, x: -500, y: 0, img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400" },    // Far left
    { row: 2, col: 3, x: 500, y: 0, img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400" },     // Far right
    
    // Bottom Inner Set
    { row: 3, col: 1, x: -250, y: 200, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400" },  // Bottom inner left
    { row: 3, col: 3, x: 250, y: 200, img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400" },   // Bottom inner right
    
    // Very Bottom Outer Set
    { row: 3, col: 1, x: -450, y: 400, img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400" },    // Far bottom left
    { row: 3, col: 3, x: 450, y: 400, img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400" },   // Far bottom right
  ];

  return (
    <div className="bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <section ref={galleryRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
          
          {/* Main Layout Container: Now truly full width */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* 1. THE MAIN VIDEO */}
            <motion.div
              style={{
                scale: mainVideoScale,
                borderRadius: mainVideoRadius,
                y: mainVideoY,
                zIndex: 20
              }}
              className="absolute w-full h-full overflow-hidden shadow-2xl flex items-center justify-center bg-zinc-100"
            >
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/Startup_Festival_2025_Teaser_Video_Day_1_Inauguration_Day_2160P.mp4" type="video/mp4" />
              </video>
              <motion.div
                style={{ opacity: useTransform(galleryProgress, [0, 0.05], [1, 0]) }}
                className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-6"
              >
                <h1 className="text-[12vw] font-black text-white tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">
                  Innovate.
                </h1>
              </motion.div>
            </motion.div>

            {/* 2. FLOATING IMAGES GRID */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 md:gap-12 p-4 md:p-24 pointer-events-none max-w-[1800px] mx-auto">
              {floaters.map((item, i) => (
                <motion.div
                  key={i}
                  style={{
                    gridRow: item.row,
                    gridColumn: item.col,
                    opacity: floatOpacity,
                    scale: floatScale,
                    y: useTransform(galleryProgress, [0.15, 0.4], [item.y, -60]), 
                    x: useTransform(galleryProgress, [0.15, 0.4], [item.x, 0]),
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <div className="w-full aspect-square md:w-64 md:h-64 rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 bg-zinc-200">
                    <img src={item.img} className="w-full h-full object-cover" alt="Ecosystem" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW TEXT SECTION --- */}
      <section className="py-40 bg-white relative z-30">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-zinc-400 text-lg md:text-xl font-bold mb-6 tracking-widest uppercase">
              We built our own road.
            </h2>
            <p className="text-zinc-900 text-3xl md:text-6xl font-black leading-[1.05] tracking-tighter">
              Our revolutionary Physical AI Platform enables—for the first time ever—true scale, 
              generalizing to different form factors and environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative z-40 bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Startups", val: "200+", icon: <Rocket className="text-blue-600"/> },
              { label: "Funding", val: "₹600Cr+", icon: <TrendingUp className="text-indigo-600"/> },
              { label: "Jobs", val: "10,000+", icon: <Users className="text-blue-500"/> }
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-12 bg-zinc-50 rounded-[40px] border border-zinc-100 transition-all">
                <div className="mb-6">{s.icon}</div>
                <div className="text-5xl font-black mb-1">{s.val}</div>
                <div className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StartupParkLanding;