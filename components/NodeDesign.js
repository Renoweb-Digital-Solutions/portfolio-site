import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from './data/Services';
import Button from './shared/Button';

const NodeDesign = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const nodeRef = useRef(null);

  const lineInView = useInView(lineRef, { once: true, amount: 0.4 });
  const nodeInView = useInView(nodeRef, { once: true, amount: 0.4 });




  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: (item) => item.position === 'left' ? -50 : 50 },
    visible: (item) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + (services.findIndex(s => s.id === item.id) * 0.2),
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-6">
      <div className="max-w-6xl w-full relative">
        <div className="relative flex justify-center">
          <div
            // ref={ref}
            className="w-6 h-6 bg-transparent border-2 border-red-500 rounded-full absolute top-00"
          // initial={{ scale: 0 }}
          // animate={inView ? { scale: 1 } : {}}
          // transition={{ duration: 0.5 }}
          />
          {/* Center line */}
          <div
            ref={lineRef}
            className="absolute top-6 bottom-0 left-1/2 transform -translate-x-1/2 w-1 flex justify-center">
            <motion.div
              className="bg-[#3877F0] w-1"
              initial="hidden"
              animate={lineInView ? "visible" : "hidden"}
              variants={lineVariants}
            />
          </div>

          {/* Center node */}
          <div
            ref={nodeRef}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
          >

            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
              initial="hidden"
              animate={visible ? "visible" : "hidden"}
              variants={nodeVariants}
            >
              <div className="w-4 h-4 rounded-full bg-red-600 border-2 border-red-600" />
            </motion.div>
          </div>


          <div className="grid grid-cols-1 gap-24 py-8 w-full">
            {services.map((service, index) => {
              const ServiceCard = () => {
                const cardRef = useRef(null);
                const branchRef = useRef(null);
                const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });
                const isBranchInView = useInView(branchRef, { once: true, amount: 0.2 });

                return (
                  <div className="relative ">
                    {/* Branch line */}
                    <div
                      ref={branchRef}
                      className="absolute top-1/2 left-0 right-0 flex items-center"
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
                      className={`flex ${service.position === 'left' ? 'justify-start pl-16' : 'justify-end pr-16'}`}
                    >
                      <motion.div
                        className={`max-w-md p-6  text-white bg-[#0A0A0A] border-2 rounded-2xl border-[#1E1E1E]`}
                        initial={{ opacity: 0, x: service.position === 'left' ? -50 : 50 }}
                        animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: service.position === 'left' ? -50 : 50 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut"
                        }}
                      >
                        <h2 className="text-2xl text-blue-500 font-bold my-4">{service.title}</h2>
                        <p className="text-sm text-gray-300 mt-4 mb-3">{service.description}</p>

                        <div className="py-4">
                          <Button classname="my-3">Learn More</Button>
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

    // <div className='relative flex justify-center items-center min-h-screen bg-[#000000] text-white'>
    //   <div

    //     className="w-6 h-6 bg-transparent border-2 border-[#3877F0] rounded-full absolute top-20"
    //   />

    //   <div className="flex flex-col">

    //     <div className="flex flex-row">

    //       <div className='bg-[#000000] w-[200px] h-[200px] opacity-0'></div>
    //       <div className='bg-[#000000] w-[200px] h-[200px] border-l-2 border-b-2 border-[#3877F0] rounded-bl-2xl '></div>
    //     </div>
    //     {/* <hr className='text-[#3877F0] rotate-90 items-center text-bold' /> */}
    //     <div className="flex flex-row">

    //       <div className='bg-[#000000] w-[200px] h-[200px] border-r-2 border-b-2 border-[#3877F0] rounded-br-2xl '></div>
    //       <div className='bg-[#000000] w-[200px] h-[200px] opacity-0'></div>
    //     </div>
    //   </div>

    // </div>
  );
};

export default NodeDesign;