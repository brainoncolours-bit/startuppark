import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Rocket, Target, Globe, ArrowRight, 
  Quote, MoveUpRight, Zap, Shield 
} from 'lucide-react';

const RefinedAboutPage = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const scaleImg = useTransform(smoothProgress, [0, 0.4], [1, 1.15]);

  return (
    <div className="bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;600&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-zinc-500 font-medium tracking-[0.2em] text-[10px] mb-12 uppercase"
              >
                <span className="w-8 h-[1px] bg-zinc-400" /> Defining the Future
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-8xl font-outfit font-semibold tracking-tight mb-8 leading-[0.95]"
              >
                Building the <span className="text-zinc-400 italic font-light">foundations</span> of tomorrow.
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 pb-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-lg text-zinc-500 font-light leading-relaxed border-l border-zinc-200 pl-8"
              >
                Startup Park is a comprehensive ecosystem built for the next generation of builders. We bridge the gap between ideation and IPO.
              </motion.p>
            </div>
          </div>

          {/* Large Hero Image with Parallax */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.5 }}
            className="mt-20 relative h-[60vh] rounded-3xl overflow-hidden group"
          >
            <motion.img
              style={{ scale: scaleImg }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR (Sleeker Alignment) --- */}
      <section className="py-20 border-b border-zinc-100 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Startups", value: "200+", icon: <Rocket size={16}/> },
              { label: "Capital Raised", value: "₹600Cr", icon: <Zap size={16}/> },
              { label: "Jobs Created", value: "10k+", icon: <Globe size={16}/> },
              { label: "Success Rate", value: "94%", icon: <Shield size={16}/> }
            ].map((stat, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="group">
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  {stat.icon}
                  <span className="text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                </div>
                <div className="text-4xl font-outfit font-semibold group-hover:text-blue-600 transition-colors cursor-default">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE BELIEFS (Mission/Vision Redesign) --- */}
      <section className="py-32 bg-zinc-900 text-white rounded-[40px] md:rounded-[100px] mx-4 my-8">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <h2 className="text-5xl font-outfit font-light">Our <br/><span className="font-semibold italic">Philosophy</span></h2>
              <div className="h-px w-full bg-zinc-800" />
              <div className="space-y-4">
                <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold">The Goal</p>
                <p className="text-2xl font-light leading-relaxed text-zinc-300">
                  To turn India into the epicenter of global innovation by transforming raw ideas into legacy businesses.
                </p>
              </div>
            </div>

            <div className="grid gap-8">
              <motion.div {...fadeInUp} className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <Target className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Power bold ideas into reality through a builder-centric ecosystem. We empower founders with high-octane resources and tactical mentorship.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <Globe className="text-emerald-400 mb-6" size={40} />
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Inspiring founders to dream bigger and execute faster. We are building the infrastructure for the next billion-dollar successes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOUNDER'S VOICE (Clean & Minimal) --- */}
      <section className="py-40 bg-[#fafafa]">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700" 
                alt="Shafi Shoukath"
              />
            </div>
            
            <div className="w-full md:w-2/3 space-y-8">
              <Quote size={40} className="text-zinc-200" />
              <h2 className="text-3xl md:text-4xl font-outfit font-medium leading-tight">
                "Startup Park was created for one reason: to provide the velocity that founders deserve but rarely find. We don't just advise; we build."
              </h2>
              <div className="pt-4">
                <p className="text-xl font-bold">Shafi Shoukath</p>
                <p className="text-zinc-400 text-xs uppercase tracking-[0.2em] mt-1">Founder & Managing Director</p>
              </div>
              
              <button className="flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-all group">
                READ THE FULL STORY 
                <MoveUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RefinedAboutPage;