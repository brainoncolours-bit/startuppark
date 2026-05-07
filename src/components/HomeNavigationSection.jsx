import React from "react";
import { motion as Motion, useTransform } from "framer-motion";

const HomeNavigationSection = ({ scrollYProgress }) => {
  const navOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0.9]);
  const navScale = useTransform(scrollYProgress, [0, 0.02], [1, 0.98]);

  return (
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
  );
};

export default HomeNavigationSection;
