"use client"

import React, { useRef } from 'react'
import Product_Card from './shared/Product_Card'
import { motion, useInView } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
};

const Our_Products = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

    return (
        <section ref={sectionRef} className='relative py-24 md:py-32 px-6 overflow-hidden bg-black'>
            {/* Ambient glows */}
            <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-block mb-5">
                        <span className="px-5 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20 tracking-widest uppercase">
                            What We Build
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        OUR{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            PRODUCTS
                        </span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-stretch"
                >
                    {[
                        {
                            name: "QUANTUM ACCELERATOR",
                            image: "/quantam_accelerator.jpg",
                            description:
                                "Using our proprietary Quantum Accelerator Framework, we identify and eliminate the barriers holding your growth back. From internal inefficiencies to missed opportunities in your customer journey, we ensure every aspect of your business is optimized for success.",
                            link: "/products/quantum-accelerator",
                            logo: "/qa_logo.png"
                        },
                        {
                            name: "GROWTH OS",
                            image: "/growth_os.jpg",
                            description:
                                "We design a customized Growth Operating System (Growth OS) tailored to your business’s digital maturity. This system creates a foundation for consistent, scalable growth by aligning your brand’s presence with your audience’s needs and expectations.",
                            link: "/products/growth-os",
                            logo: "/growth_os_logo.png"
                        },
                    ].map((product, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="flex-1 max-w-[480px] mx-auto"
                        >
                            <Product_Card productName={product.name} description={product.description} image={product.image} link={product.link} logo={product.logo} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Our_Products