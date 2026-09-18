"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { why_renwoweb_details } from "./data/why_renwoweb_details";

const getIconForIndex = (index) => {
    switch (index) {
        case 0: // Network graph
            return (
                <svg className="w-7 h-7 text-[#4ec8ef] animate-[pulse_3s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            );
        case 1: // Ascending chart
            return (
                <svg className="w-7 h-7 text-[#308fef] animate-[pulse_4s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            );
        case 2: // Pulse/Data
            return (
                <svg className="w-7 h-7 text-[#023dbb] animate-[pulse_2s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            );
        default:
            return null;
    }
};

const WhyRenoweb = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0a0a0f]">
            {/* Ambient background glows */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#4ec8ef]/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#4460ef]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-block mb-5">
                        <span className="px-5 py-2 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4ec8ef]/20 tracking-widest uppercase">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        WHY{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">
                            RENOWEB
                        </span>
                    </h2>
                </motion.div>

                {/* Funnel/Pipeline layout */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Horizontal connecting line (desktop) */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block absolute top-[20px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#4ec8ef]/10 via-[#308fef]/60 to-[#023dbb]/10 origin-left"
                    />

                    {/* Vertical connecting line (mobile) */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="md:hidden absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4ec8ef]/10 via-[#308fef]/60 to-[#023dbb]/10 origin-top"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                        {why_renwoweb_details.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                className="relative flex flex-col md:items-center"
                            >
                                {/* Glowing Stage Marker Badge */}
                                <div className="absolute -top-[14px] md:relative md:-top-[2px] md:mb-4 left-[20px] md:left-auto w-10 h-10 rounded-full bg-[#0a0a0f] border-2 border-[#308fef] flex items-center justify-center shadow-[0_0_15px_rgba(48,143,239,0.5)] z-20 md:mb-10">
                                    <span className="text-sm font-bold text-white">0{index + 1}</span>
                                </div>

                                {/* Content Card */}
                                <div className="mt-12 md:mt-0 w-auto relative group rounded-[24px] overflow-hidden border border-white/5 bg-[#0a0a0f] hover:border-[#308fef]/40 transition-colors duration-500 shadow-xl ml-12 md:ml-0 flex-1">
                                    {/* Ambient Tech Background */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700">
                                        <Image
                                            src={`/why_renoweb_bg_${index + 1}.png`}
                                            alt="Abstract tech background"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>

                                    {/* Card Content Overlay */}
                                    <div className="relative p-8 h-full flex flex-col z-10 bg-gradient-to-b from-transparent to-[#0a0a0f]/90 group-hover:to-[#0a0a0f]/80 transition-all duration-500">
                                        <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.02)] backdrop-blur-sm group-hover:border-[#308fef]/30 transition-colors">
                                            {getIconForIndex(index)}
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#4ec8ef] transition-colors duration-300">
                                            {item.title}
                                        </h3>

                                        <div className="w-8 h-1 bg-gradient-to-r from-[#4ec8ef] to-[#308fef] rounded-full mb-4 opacity-50 group-hover:w-12 group-hover:opacity-100 transition-all duration-300" />

                                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyRenoweb;