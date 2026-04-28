import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const ClassyNavbar = ({ show = true }) => {
  const [hovered, setHovered] = useState(null);

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
          <div className="flex items-center gap-2 p-2 px-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            {navItems.map((item, idx) => {
              const isHovered = hovered === idx;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{ color: isHovered ? '#fff' : 'rgba(255,255,255,0.4)' }}
                >
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