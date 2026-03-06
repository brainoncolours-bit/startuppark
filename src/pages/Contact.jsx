import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Mail, Phone, MapPin, 
  ShieldCheck, Zap, ArrowUpRight, MessageSquare 
} from 'lucide-react';

const CredFinalContact = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-950 selection:text-white overflow-x-hidden">
      
      {/* 1. THE "DIGITAL FABRIC" BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="h-[80vh] flex flex-col justify-center items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">Nodes Active Globally</span>
            </div>
            
            <h1 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.85] mb-8">
              Let's <br/>
              <span className="text-zinc-200">Sync.</span>
            </h1>
            
            <p className="max-w-md mx-auto text-zinc-500 font-medium leading-relaxed">
              Bridge the gap between vision and execution. Our team is ready to scale your infrastructure.
            </p>
          </motion.div>
        </section>

        {/* INTERACTIVE CONTENT GRID */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-8">
          
          {/* INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              whileHover={{ x: 10 }}
              className="group p-8 bg-zinc-50 border border-zinc-100 rounded-[2rem] flex items-center gap-6 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-1">Quick Chat</p>
                <p className="text-xl font-bold tracking-tight">info@mystartupschool.com</p>
              </div>
              <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="group p-8 bg-zinc-50 border border-zinc-100 rounded-[2rem] flex items-center gap-6 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-1">Direct Line</p>
                <p className="text-xl font-bold tracking-tight">+91 90363 54727</p>
              </div>
              
              <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
            </motion.div>
             <motion.div 
              whileHover={{ x: 10 }}
              className="group p-8 bg-zinc-50 border border-zinc-100 rounded-[2rem] flex items-center gap-6 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-1">Quick Chat</p>
                <p className="text-xl font-bold tracking-tight">info@mystartupschool.com</p>
              </div>
              <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
            </motion.div>

            {/* <div className="grid grid-cols-2 gap-6 pt-4">
               {[
                 { icon: <ShieldCheck />, label: "Encrypted" },
                 { icon: <Zap />, label: "Instant" }
               ].map((item, i) => (
                 <div key={i} className="p-8 border-2 border-dashed border-zinc-100 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-zinc-300 transition-colors">
                   <div className="text-zinc-300">{item.icon}</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item.label}</span>
                 </div>
               ))}
            </div> */}
          </div>

          {/* THE "FLOATING" FORM */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 text-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-zinc-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -mr-20 -mt-20" />
              
              <form className="space-y-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-white transition-colors">Name</label>
                    <input className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-all text-xl placeholder:text-zinc-800" placeholder="Type here..." />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-focus-within:text-white transition-colors">Identity</label>
                    <input className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-all text-xl placeholder:text-zinc-800" placeholder="Email Address" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Your Vision</label>
                  <textarea rows={1} className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-all text-xl placeholder:text-zinc-800 resize-none" placeholder="Tell us everything..." />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-zinc-950 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl shadow-black/20"
                >
                  Initiate Handshake <ChevronRight size={18} />
                </motion.button>
              </form>
            </div>
          </div>
        </section>

        {/* PHYSICAL NODE SECTION */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 border border-zinc-950 text-[10px] font-black uppercase tracking-widest">Base HQ</div>
              <h3 className="text-4xl font-black tracking-tighter uppercase">Bengaluru <span className="text-zinc-300">Hub.</span></h3>
              <p className="text-zinc-500 text-sm font-medium">Tr4 3rd Floor, 180, NGEF Layout, Bengaluru 560038</p>
            </div>
            <div className="p-4 bg-zinc-100 rounded-full">
              <MapPin className="text-zinc-950 animate-bounce" />
            </div>
          </div>
          
          <div className="rounded-[3rem] overflow-hidden border border-zinc-200 h-[600px] relative w-full group shadow-2xl shadow-zinc-100">
            <div className="absolute inset-0 bg-zinc-950/5 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.644140306461!2d77.6631115758839!3d12.99464671446654!2m3!1f0!2f0!3f0!3m2!1i1024!2i728!4f13.1!3m3!1m2!1s0x3bae11132049d5b7%3A0xc023c95932822a96!2sNGEF%20Layout%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1709730000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                filter: 'grayscale(1) contrast(1.2) brightness(1)' 
              }} 
              allowFullScreen="" 
              loading="lazy" 
            />
          </div>
        </section>
      </main>

    
    </div>
  );
};

export default CredFinalContact;