"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CaseStudyCard from './shared/CaseStudyCard';
import Link from "next/link";

const Case_Studies = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section ref={sectionRef} className='relative py-24 md:py-32 px-6 overflow-hidden bg-black'>
            {/* Ambient glows */}
            <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-40 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>

                    {/* Left CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='w-full lg:w-2/5 text-center lg:text-left lg:sticky lg:top-32'
                    >
                        <div className="inline-block mb-5">
                            <span className="px-5 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20 tracking-widest uppercase">
                                Real Results
                            </span>
                        </div>
                        <h2 className='text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6'>
                            See the<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                CASE STUDIES
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                            Discover how we've helped businesses achieve remarkable growth through data-driven strategies.
                        </p>
                        <Link href="/case-studies">
                            <div className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all duration-500 cursor-pointer">
                                View All Case Studies
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className='w-full lg:w-3/5'
                    >
                        <CaseStudyCard />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Case_Studies