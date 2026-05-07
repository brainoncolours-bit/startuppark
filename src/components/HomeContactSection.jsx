import React from "react";
import { motion as Motion, useTransform } from "framer-motion";

const HomeContactSection = ({ scrollYProgress, isActive = false }) => {
  const contactOpacity = useTransform(
    scrollYProgress,
    [0.88, 0.92, 0.98, 1],
    [0, 1, 1, 1]
  );
  const contactY = useTransform(scrollYProgress, [0.88, 0.92], [60, 0]);

  return (
    <Motion.div
      style={{ opacity: contactOpacity, y: contactY }}
      className={`absolute inset-0 z-[55] flex flex-col justify-center px-10 md:px-32 bg-white ${
        isActive ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
      aria-hidden={!isActive}
    >
      <div className="absolute top-[15%] right-[20%] floating-pill opacity-40 rotate-12">
        HQ: Bengaluru
      </div>
      <div className="absolute bottom-[20%] left-[15%] floating-pill opacity-40 -rotate-6">
        Status: Operational
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end relative z-10">
        <div className="lg:col-span-7">
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block">
            Connect - 06
          </span>
          <div className="flex flex-col gap-6">
            <a href="mailto:contact@thestartuppark.com" className="contact-link-large group">
              Say Hello{" "}
              <span className="text-gray-200 group-hover:text-blue-200 transition-colors">
                -
              </span>
            </a>
            <a href="#" className="contact-link-large group">
              Partner with Us{" "}
              <span className="text-gray-200 group-hover:text-blue-200 transition-colors">
                -
              </span>
            </a>
            <a href="#" className="contact-link-large group">
              Find our Office{" "}
              <span className="text-gray-200 group-hover:text-blue-200 transition-colors">
                -
              </span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 pb-4">
          <div className="p-10 bg-[#F7F7F5] rounded-[40px] shadow-sm space-y-8 border border-black/5">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                Location
              </span>
              <p className="text-lg font-medium">Bengaluru, KA, India</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                Availability
              </span>
              <p className="text-lg font-medium">Cohort &apos;26: Open for screening</p>
            </div>
            <div className="pt-6 border-t border-gray-200 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                TW
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                LI
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold border border-black/5 cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                IG
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default HomeContactSection;
