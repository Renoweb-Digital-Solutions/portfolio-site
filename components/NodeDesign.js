"use client"
import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { services } from './data/Services';
import useMobileView from './shared/useMobileView';

const NodeDesign = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to line height with a bit of lead
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="bg-transparent min-h-screen flex justify-center items-center p-6" ref={containerRef}>
      <div className="max-w-6xl w-full relative">
        <div className="relative flex justify-center">
          
          {/* Glowing Center Line Background (Track) */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 hidden lg:block bg-white/5 rounded-full" />

          {/* Animated Center Line (Fill) */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 hidden lg:flex justify-center z-0">
            <motion.div
              className="w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(56,119,240,0.8)]"
              style={{
                height: lineHeight,
                transformOrigin: 'top center'
              }}
            />
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-24 py-12 w-full">
            {services.map((service, index) => {
              const ServiceCard = () => {
                const cardRef = useRef(null);
                const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });
                const isMobile = useMobileView();

                return (
                  <div className="relative flex items-center justify-center w-full">
                    {/* Glowing Node on Center Line */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div 
                          className="w-4 h-4 rounded-full bg-black border-2 border-cyan-400"
                          initial={{ scale: 0, boxShadow: "0 0 0 rgba(34, 211, 238, 0)" }}
                          animate={isCardInView ? { scale: 1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)" } : { scale: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </div>

                    {/* Branch Line */}
                    <div className={`hidden absolute top-1/2 lg:flex items-center w-[10%] z-0 ${service.position === 'left' ? 'right-1/2 justify-end pr-2' : 'left-1/2 justify-start pl-2'}`}>
                      <motion.div
                        className={`h-[2px] w-full ${service.position === 'left' ? 'bg-gradient-to-l from-cyan-400 to-transparent' : 'bg-gradient-to-r from-cyan-400 to-transparent'}`}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={isCardInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        style={{ transformOrigin: service.position === 'left' ? 'right' : 'left' }}
                      />
                    </div>

                    {/* Service Card */}
                    <div
                      ref={cardRef}
                      className={`flex w-full justify-center ${service.position === 'left' ? 'lg:justify-start lg:pr-[12%]' : 'lg:justify-end lg:pl-[12%]'}`}
                    >
                      <motion.div
                        className={`group relative max-w-lg w-full p-8 text-white bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:-translate-y-2`}
                        initial={{ opacity: 0, x: isMobile ? 0 : service.position === 'left' ? -50 : 50, y: isMobile ? 50 : 0 }}
                        animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isMobile ? 0 : service.position === 'left' ? -50 : 50, y: isMobile ? 50 : 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: isMobile ? 0 : 0.1 }}
                      >
                        {/* Cool background glow inside card */}
                        <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />

                        <div className="relative z-10 flex flex-row justify-between items-start mb-6">
                          <div>
                            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-cyan-300 group-hover:to-blue-500 transition-all duration-500">
                                {service.title}
                            </h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4 opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
                          </div>
                          {service.logo && (
                            <div className="w-16 h-16 p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-500">
                              <img
                                src={service.logo}
                                alt={`${service.title} logo`}
                                className="w-full h-full object-contain filter drop-shadow-lg"
                              />
                            </div>
                          )}
                        </div>

                        <p className="relative z-10 text-base text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-500">
                            {service.description}
                        </p>

                        <div className="relative z-10 flex items-center">
                          <button className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all duration-500 flex items-center gap-2">
                            Learn More
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              };

              return <ServiceCard key={service.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeDesign;