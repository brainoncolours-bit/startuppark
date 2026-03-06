import React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, 
  ArrowRight, Globe, Zap, Heart 
} from 'lucide-react';

const StartupParkContact = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-950 selection:text-white selection:bg-opacity-90">
      
   
    

      <main className="pt-32">
        {/* 2. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-24" id='contact'>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-[10px] font-black uppercase tracking-widest mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              We’re here to help <span className="text-zinc-300">founders, investors,</span> and <span className="text-zinc-300">partners</span> connect.
            </h1>
            <p className="text-xl text-zinc-500 font-medium max-w-2xl leading-relaxed">
              Let’s build the future, together. Reach out to the ecosystem hub.
            </p>
          </motion.div>
        </section>

        {/* 3. CONTENT GRID */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 pb-32">
          
          {/* FORM SIDE (LEFT) */}
          <div className="lg:col-span-7 bg-zinc-950 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-12">Send Us a Message</h2>
            
            <form className="space-y-10 relative z-10">
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-white transition-colors">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-all text-xl placeholder:text-zinc-700"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-white transition-colors">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-all text-xl placeholder:text-zinc-700"
                  placeholder="hello@example.com"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-white transition-colors">Message</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-all text-xl placeholder:text-zinc-700 resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-zinc-950 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-zinc-200 transition-all shadow-xl shadow-black/20"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </div>

          {/* CONTACT INFO SIDE (RIGHT) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Contact Information</h3>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-lg">Startup Park, Bangalore, India</p>
                  <p className="text-zinc-500 text-sm">Bengaluru, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-lg">contact@thestartuppark.com</p>
                  <p className="text-zinc-500 text-sm">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-lg">+91 9036354905</p>
                  <p className="text-zinc-500 text-sm">Mon - Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>

            {/* DECORATIVE MAP PLACEHOLDER */}
            <div className="h-64 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 overflow-hidden grayscale opacity-60 hover:opacity-100 transition-opacity">
               <iframe 
                src="http://googleusercontent.com/maps.google.com/4" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            © 2025 Startup Park. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <span>Crafted with</span>
            <Heart size={10} className="text-red-500 fill-red-500" />
            <span>by</span>
            <span className="text-zinc-950 font-black italic">ique-ventures</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartupParkContact;