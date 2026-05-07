import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const ClassyNavbar = ({ show = true }) => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <AnimatePresence>
      {show && (
        <motion.nav 
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -100, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-8 left-1/2 z-[1000]"
        >
          {/* Deep glassmorphism container */}
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#09090b]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              const isHovered = hovered === idx;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-full"
                  style={{ 
                    color: isActive ? '#ffffff' : isHovered ? '#e2e8f0' : '#64748b' 
                  }}
                >
                  {/* HOVER STATE (Only show if not active) */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="hover-pill"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 z-0 bg-white/[0.04] rounded-full"
                      />
                    )}
                  </AnimatePresence>

                  {/* ACTIVE STATE (Glides smoothly between tabs) */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 z-0 bg-white/10 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                    >
                      {/* Premium glowing top edge */}
                      <div className="absolute top-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      {/* Subtle ambient glow behind the active pill */}
                      <div className="absolute inset-0 rounded-full bg-white/5 blur-md -z-10" />
                    </motion.div>
                  )}

                  <span className="relative z-10">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default ClassyNavbar;