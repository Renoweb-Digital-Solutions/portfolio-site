"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CaseStudyCard } from './shared/CaseStudyCard';
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/db";

const Case_Studies = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    useEffect(() => {
        const fetchCases = async () => {
            const allCases = await getAllCaseStudies();
            setCaseStudies(allCases.slice(0, 3));
        };
        fetchCases();
    }, []);

    return (
        <section className='relative py-24 md:py-22 px-6 overflow-hidden bg-[#0a0a0f] border-t border-white/5'>
            {/* Ambient glows */}
            <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-[#4460ef]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-40 w-[350px] h-[350px] bg-[#4ec8ef]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-center mb-16'
                >

                    <h2 className='text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6'>
                        See the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">
                            CASE STUDIES
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Discover how we've helped businesses achieve remarkable growth through data-driven strategies.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1280px] mx-auto items-stretch">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="flex h-full"
                        >
                            <CaseStudyCard data={study} />
                        </motion.div>
                    ))}
                </div>

                {/* Explore All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mt-12 md:mt-16"
                >
                    <Link href="/case-studies">
                        <div className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-[#4ec8ef] hover:border-[#4ec8ef] hover:text-black transition-all duration-500 cursor-pointer">
                            Explore All Case Studies
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Case_Studies;