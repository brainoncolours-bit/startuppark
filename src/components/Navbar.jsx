import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Contact', path: '#contact' },
];

const ClassyNavbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[1000]">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 px-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        {navItems.map((item, idx) => {
          const isHovered = hovered === idx;

          return (
            <a
              key={item.name}
              href={item.path}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
              style={{ color: isHovered ? '#fff' : 'rgba(255,255,255,0.4)' }}
            >
              {/* Classy Pill Hover Effect */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    layoutId="nav-pill"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 z-0 bg-white/10 rounded-full border border-white/5"
                  />
                )}
              </AnimatePresence>

              <span className="relative z-10">{item.name}</span>
            </a>
          );
        })}

        <div className="w-[1px] h-4 bg-white/10 mx-2" />

        
      </motion.div>
    </nav>
  );
};

export default ClassyNavbar;