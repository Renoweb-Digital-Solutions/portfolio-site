"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { why_renwoweb_details } from "./data/why_renwoweb_details";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
};

const WhyRenoweb = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden bg-black">
            {/* Ambient background glows */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

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
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        WHY{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            RENOWEB
                        </span>
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {why_renwoweb_details.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3"
                        >
                            {/* Gradient border */}
                            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/40 via-blue-600/20 to-purple-600/40 opacity-30 group-hover:opacity-100 transition-opacity duration-700 blur-[0.5px]" />

                            <div className="relative rounded-3xl bg-[#0a0a0a] overflow-hidden h-full flex flex-col">
                                {/* Image section */}
                                <div className="relative h-52 md:h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

                                    {/* Number badge */}
                                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-500">
                                        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-7 flex flex-col flex-grow">
                                    <h3 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-cyan-300 group-hover:to-white transition-all duration-500 mb-2 leading-tight">
                                        {item.title.replace(/\n/g, " ")}
                                    </h3>

                                    {/* Accent line */}
                                    <div className="w-10 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 mb-5 opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />

                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-500 flex-grow">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Hover glow */}
                                <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyRenoweb;