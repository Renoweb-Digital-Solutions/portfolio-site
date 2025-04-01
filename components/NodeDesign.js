"use client"
import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { services } from './data/Services';
import Button from './shared/Button';
import isMobileView from './shared/isMobileView';

const NodeDesign = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  const lineInView = useInView(lineRef, { once: true, amount: 0.1 });


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['10%', '100%']);

  useEffect(() => {
    console.log("Line in view:", lineInView);
  }, [lineInView]);

  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-6" ref={containerRef}>
      <div className="max-w-6xl w-full relative">
        <div className="relative flex justify-center">
          <div
            className="hidden lg:block w-6 h-6 bg-transparent border-2 border-red-500 rounded-full absolute top-00"

          />
          {/* Center line */}
          <div className="absolute top-6 bottom-0 left-1/2 transform -translate-x-1/2 w-1 hidden lg:flex justify-center">
            <motion.div
              className="bg-[#3877F0] w-1"
              style={{
                height: lineHeight,
                transformOrigin: 'top center'
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-24 py-8 w-full">
            {services.map((service, index) => {
              const ServiceCard = () => {
                const cardRef = useRef(null);
                const branchRef = useRef(null);
                const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });
                const isBranchInView = useInView(branchRef, { once: true, amount: 0.2 });

                const isMobile = isMobileView();

                return (
                  <div className="relative ">
                    {/* Branch line */}
                    <div
                      ref={branchRef}
                      className="hidden absolute top-1/2 left-0 right-0 lg:flex items-center"
                    >
                      <motion.div
                        className={`absolute h-1 bg-blue-500 ${service.position === 'left' ? 'right-1/2' : 'left-1/2'}`}
                        initial={{ width: 0 }}
                        animate={isBranchInView ? { width: '5.5%' } : { width: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut"
                        }}
                        style={{
                          transformOrigin: service.position === 'left' ? 'right' : 'left'
                        }}
                      />
                    </div>

                    {/* Service card */}
                    <div
                      ref={cardRef}
                      className={`flex justify-center ${service.position === 'left' ? 'lg:justify-start lg:pl-10 lg:pl-16' : 'lg:justify-end lg:pr-16'}`}
                    >
                      <motion.div
                        className={`max-w-md p-6  text-white bg-[#0A0A0A] border-2 rounded-2xl border-[#1E1E1E]`}
                        initial={{ opacity: 0, x: isMobile ? 0 : service.position === 'left' ? -50 : 50, y: isMobile ? 50 : 0 }}
                        animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isMobile ? 0 : service.position === 'left' ? -50 : 50, y: isMobile ? 50 : 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut"
                        }}
                      >
                        <h2 className="text-2xl text-blue-500 font-bold my-4">{service.title}</h2>
                        <p className="text-sm text-gray-300 mt-4 mb-3">{service.description}</p>

                        <div className="py-4">
                          <Button classname="md:my-3">Learn More</Button>
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