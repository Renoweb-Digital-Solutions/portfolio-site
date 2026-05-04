"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Magnetic Button Component for cool interactions
const MagneticButton = ({ children, className, onClick, href }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const content = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`relative flex items-center justify-center cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }
    return content;
};

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const textWordVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
    },
};

const Hero = ({ videoSrc = "/video/hero_video.mp4" }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <div ref={containerRef} className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* Background Video with Parallax & Scale */}
            <motion.div style={{ y, scale, opacity }} className="absolute inset-0 w-full h-full z-0">
                <video
                    className="w-full h-full object-cover scale-105"
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                
                {/* Watery/Glassy Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505] mix-blend-multiply" />
                <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[2px] mix-blend-overlay" />
                
                {/* Floating "Water reflection" highlights */}
                <motion.div 
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
                />
                <motion.div 
                    animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.5, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
                />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-center mt-20">
                
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="mb-8 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                >
                    <div className="px-6 py-2 rounded-full bg-black/40 backdrop-blur-md">
                        <span className="text-sm sm:text-base font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-white uppercase">
                            Digital Growth Partners
                        </span>
                    </div>
                </motion.div>

                {/* Main Hero Text with Watery/Glassy effect */}
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center gap-2 mb-8"
                >
                    <div className="overflow-hidden">
                        <motion.h1 variants={textWordVariants} className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.9] mix-blend-overlay drop-shadow-2xl">
                            BUILDING
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden flex flex-wrap justify-center gap-x-4">
                        <motion.h1 
                            variants={textWordVariants} 
                            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-wide sm:tracking-tighter leading-[0.9] hero-outline-text"
                        >
                            SUSTAINABLE
                        </motion.h1>
                        <motion.h1 variants={textWordVariants} className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.9] mix-blend-overlay drop-shadow-2xl">
                            SUCCESS
                        </motion.h1>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 mb-12 font-light leading-relaxed drop-shadow-md"
                >
                    We build data-driven strategies and products that scale — combining design, growth, and engineering to deliver ROI that lasts.
                </motion.p>

                {/* Interactive Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 items-center"
                >
                    <MagneticButton href="/contact-us">
                        <div className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            <span className="relative z-10">Start Your Project</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </MagneticButton>
                    
                    <MagneticButton href="#services">
                        <div className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all">
                            Services
                        </div>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60 mix-blend-overlay"
            >
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <motion.div 
                    animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-8 sm:h-16 bg-gradient-to-b from-white to-transparent"
                />
            </motion.div>

            {/* Bottom Gradient Fade to merge with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default Hero;
