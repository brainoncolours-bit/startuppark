import { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  viewport: { once: true, margin: "-50px" }
};

export const slideUpReveal = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
};

export const useScrollAnimation = (options = {}) => {
  const controls = useAnimation();
  const ref = options.ref || null;
  const isInView = useInView(ref || controls, {
    once: options.once !== false,
    margin: options.margin || "-100px",
    amount: options.amount || 0.2
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!options.once) {
      controls.start('hidden');
    }
  }, [controls, isInView, options.once]);

  return { controls, ref, isInView };
};

export const AnimatedDiv = ({ children, variant = 'fadeInUp', className, delay = 0, ...props }) => {
  const variants = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    slideUpReveal
  };

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      variants={{
        initial: variants[variant].initial,
        whileInView: { ...variants[variant].whileInView, transition: { ...variants[variant].transition, delay } }
      }}
      viewport={variants[variant].viewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
