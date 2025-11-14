"use client";

import Ellipse from "./Ellipse";
import { motion } from "framer-motion";

const Hero = ({ videoSrc = "/video/hero_video.mp4" }) => {
    return (
        <div className="relative bg-black text-white overflow-hidden mt-10">

            {/* Donut / Ellipse (keeps existing component). Animated float. */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute top-0 left-15 -translate-x-1/2 z-10"
            >
                <Ellipse />
            </motion.div>


            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(11,32,64,0.15)] to-black pointer-events-none z-0" />

            {/* Content container */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28 lg:py-36">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 overflow-x-hidden">

                    {/* left CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-end text-center md:text-right"
                    >
                        <h1 className="max-w-xl text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#EDEFF3] leading-tight">
                            At Renoweb, we are more than just a growth agency—we are your partners in building sustainable success.
                        </h1>

                        <p className="mt-4 text-sm sm:text-base text-[#BFC9D6] max-w-lg md:max-w-xs">
                            We build data-driven strategies and products that scale — combining design, growth and engineering to deliver ROI that lasts.
                        </p>

                        <motion.a
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="mt-6 inline-block w-full sm:w-auto"
                        >
                            <button
                                className="w-full sm:w-auto bg-[#003FB9] hover:bg-[#3877F0] border-2 border-[#2B5ED6] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-200"
                                aria-label="Contact Us"
                            >
                                Contact Us
                            </button>
                        </motion.a>
                    </motion.div>

                    {/* Right Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -40, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="w-full h-56 sm:h-72 md:h-[420px] bg-black">
                            <video
                                className="w-full h-full object-cover object-center"
                                src={videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                    </motion.div>


                </div>
            </div>
        </div>
    );
};

export default Hero;
