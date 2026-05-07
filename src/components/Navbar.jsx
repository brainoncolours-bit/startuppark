import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const ClassyNavbar = ({ show = true }) => {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <Motion.nav 
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -100, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-3 sm:top-8 left-1/2 z-[1000] w-[calc(100vw-1.5rem)] sm:w-auto"
        >
          <div className="sm:hidden">
            <div className="rounded-[24px] bg-[#09090b]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.6)] px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <NavLink
                  to="/"
                  onClick={handleNavClick}
                  className="text-[11px] font-black uppercase tracking-[0.28em] text-white"
                >
                  Startup Park.
                </NavLink>

                <button
                  type="button"
                  aria-label="Toggle menu"
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((prev) => !prev)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>

              <AnimatePresence>
                {mobileOpen && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
                      {navItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={handleNavClick}
                            className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-slate-300 transition-colors"
                            style={{ color: isActive ? '#ffffff' : '#94a3b8' }}
                          >
                            <span>{item.name}</span>
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                          </NavLink>
                        );
                      })}
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1 p-1.5 rounded-full bg-[#09090b]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              const isHovered = hovered === idx;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={handleNavClick}
                  className="relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-full"
                  style={{ 
                    color: isActive ? '#ffffff' : isHovered ? '#e2e8f0' : '#64748b' 
                  }}
                >
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <Motion.div
                        layoutId="hover-pill"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 z-0 bg-white/[0.04] rounded-full"
                      />
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <Motion.div
                      layoutId="active-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 z-0 bg-white/10 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                    >
                      <div className="absolute top-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      <div className="absolute inset-0 rounded-full bg-white/5 blur-md -z-10" />
                    </Motion.div>
                  )}

                  <span className="relative z-10">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </Motion.nav>
      )}
    </AnimatePresence>
  );
};

export default ClassyNavbar;
