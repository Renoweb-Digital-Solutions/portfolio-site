"use client"

import React from 'react'
import Product_Card from './shared/Product_Card'
import { motion } from 'framer-motion'
import AnimatedHeadings from './shared/AnimatedHeadings';

const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
    }),
};

const Our_Products = () => {
    return (
        <div>
            <AnimatedHeadings>
                <h1 className='text-[#FFFBEF] font-bold text-center text-3xl'>OUR <span className='text-[#3877F0]'>PRODUCTS</span></h1>
            </AnimatedHeadings>



            <div className="flex flex-col md:flex-row space-y-10 md:space-x-7 justify-center  my-20">
                {[
                    {
                        name: "QUANTUM ACCELERATOR",
                        description:
                            "Using our proprietary Quantum Accelerator Framework, we identify and eliminate the barriers holding your growth back. From internal inefficiencies to missed opportunities in your customer journey, we ensure every aspect of your business is optimized for success.",
                    },
                    {
                        name: "GROWTH OS",
                        description:
                            "We design a customized Growth Operating System (Growth OS) tailored to your business’s digital maturity. This system creates a foundation for consistent, scalable growth by aligning your brand’s presence with your audience’s needs and expectations.",
                    },
                ].map((product, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                    >
                        <Product_Card productName={product.name} description={product.description} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Our_Products