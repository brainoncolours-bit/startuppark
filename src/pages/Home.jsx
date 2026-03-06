import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, Play, Star, LayoutGrid, 
  TrendingUp, Clock, Zap, Users, Rocket, 
  Shield, Coffee, BookOpen, MapPin, Mail, 
  ChevronRight, ArrowRight, Globe, Utensils, 
  Gavel, GraduationCap, Calendar
} from 'lucide-react';

const StartupParkLanding = () => {
  const { scrollYProgress } = useScroll();
  
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      
      
     

      {/* --- HERO SECTION --- */}
      <section id='home' className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Tech Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-blue-600 font-bold tracking-[0.3em] text-xs mb-8"
            >
              <span className="w-12 h-[2px] bg-blue-600" /> INDIA'S LAUNCHPAD FOR FOUNDERS
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[10vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter mb-10 text-zinc-900"
            >
              Innovate. Accelerate. <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">Succeed.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-12"
            >
              <a href="#register" className="group relative bg-zinc-900 p-[2px] rounded-full overflow-hidden">
                <div className="relative bg-zinc-900 group-hover:bg-blue-600 text-white transition-colors px-10 py-6 rounded-full flex items-center gap-4 font-bold">
                  REGISTER NOW <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
              <p className="max-w-xs text-zinc-700 text-lg leading-relaxed font-medium">
                The world's first comprehensive ecosystem designed exclusively for entrepreneurs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ANNOUNCEMENT MARQUEE --- */}
      <div className="bg-blue-600 py-4 overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap text-white font-bold tracking-widest text-sm uppercase">
          {[1,2,3,4].map(i => (
            <span key={i} className="flex items-center gap-4">
              Startup Park is Now Open ✨ Explore, connect, and grow with the next generation of innovators
              <Star size={16} fill="white" />
            </span>
          ))}
        </div>
      </div>

      {/* --- STATS --- */}
     {/* --- STATS: EXPERIENTIAL DATA --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { 
                label: "Startups Supported", 
                value: 200, 
                suffix: "+", 
                icon: <Rocket className="text-blue-600" />,
                description: "From seed to Series A and beyond."
              },
              { 
                label: "Funding Accessed", 
                value: 600, 
                prefix: "₹", 
                suffix: " Cr+", 
                icon: <TrendingUp className="text-indigo-600" />,
                description: "Direct capital & investor matching."
              },
              { 
                label: "Jobs Created", 
                value: 10000, 
                suffix: "+", 
                icon: <Users className="text-blue-500" />,
                description: "Fueling the local tech economy."
              }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative group p-8 rounded-[32px] hover:bg-zinc-50 transition-colors duration-500"
              >
                {/* Animated Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                  {React.cloneElement(stat.icon, { size: 28 })}
                </div>

                {/* Counter & Label */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    {stat.prefix && <span className="text-3xl font-black text-zinc-400">{stat.prefix}</span>}
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-6xl md:text-7xl font-black tracking-tighter text-zinc-900"
                    >
                      {/* Using simple formatting for the big number */}
                      {stat.value.toLocaleString()}
                    </motion.span>
                    <span className="text-3xl font-black text-blue-600">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-500 pt-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm font-medium text-zinc-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 max-w-[200px]">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 + (i * 0.2), duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section id="about" className="py-32 container mx-auto px-6 bg-[#fcfcfc]">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-xl">
               <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-zinc-900 text-white p-12 rounded-3xl hidden md:block shadow-2xl">
              <Users size={48} />
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="space-y-8">
            <div className="text-blue-600 font-black tracking-widest text-sm uppercase">WHO WE ARE</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-zinc-900">
              Not just an office. <br />
              <span className="text-zinc-400">A Launchpad.</span>
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Startup Park is the world's first comprehensive ecosystem designed exclusively for entrepreneurs. We bridge the gap between ambitious ideas and market-ready solutions through integrated resources, strategic mentorship, and a thriving community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {['Venture Capital Access', 'State-of-the-art Labs', 'Global Mentor Network', 'Legal & IP Support'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-zinc-800">
                  <Zap size={18} className="text-blue-600" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE CORE (Ecosystem Grid) --- */}
      <section id="ecosystem" className="py-32 bg-zinc-950 text-white rounded-[60px] mx-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="text-blue-500 font-black tracking-widest text-sm uppercase mb-4">WHY STARTUP PARK</div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                THE <br /> <span className="text-blue-500">CORE.</span>
              </h2>
            </div>
            <p className="max-w-md text-zinc-400 font-medium text-lg">
              A world-class ecosystem designed to help founders scale faster from ideation to IPO.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 overflow-hidden rounded-3xl">
            {[
              { title: "Co-working Zones", icon: <LayoutGrid />, desc: "Premium co-working zones designed for ambitious startups." },
              { title: "Innovation Labs", icon: <Zap />, desc: "High-speed prototyping & R&D facilities." },
              { title: "Demo Stages", icon: <Play />, desc: "Premium event halls & demo stages for pitching." },
              { title: "Networking Lounges", icon: <Users />, desc: "Spaces designed for serendipitous collaboration." },
              { title: "Food & Coffee", icon: <Coffee />, desc: "Premium food courts & specialty coffee bars." },
              { title: "Incubator", icon: <Rocket />, desc: "Intensive growth programs for early-stage teams." },
              { title: "Mentoring", icon: <Star />, desc: "1-on-1 sessions with industry titans." },
              { title: "Business School", icon: <BookOpen />, desc: "Masterclasses and development programs." },
              { title: "Legal Help", icon: <Shield />, desc: "IP filing and company registration support." },
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 p-10 group hover:bg-blue-600 transition-all duration-500">
                <div className="text-blue-500 group-hover:text-white transition-colors mb-6">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED EVENT --- */}
     <section id='events' className="py-32 container mx-auto px-6">
  <div className="bg-blue-600 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
    
    <div className="flex-1 space-y-6 relative z-10">
      
      <div className="inline-flex items-center gap-2 bg-blue-500/30 px-4 py-2 rounded-full text-xs font-black tracking-widest text-white">
        <Calendar size={14} /> FEATURED EVENT
      </div>

      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
        7-Day Startup <br /> Expo 2025 — <span className="text-blue-200">Bangalore</span>
      </h2>

      <p className="text-lg text-blue-100 max-w-lg">
        Explore recent funding startups, meet investors, and discover the future of tech. 
        Reserve your spot before slots fill up.
      </p>

      <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
        RESERVE YOUR SPOT
      </button>

    </div>

    <div className="flex-1 w-full h-[300px] md:h-[400px] bg-blue-400 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
      <img 
        src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop" 
        className="w-full h-full object-cover" 
        alt="Tech Conference"
      />
    </div>

  </div>
</section>

     
    
    

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StartupParkLanding;