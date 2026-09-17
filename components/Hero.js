"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Magnetic Button Component for cool interactions (Retained)
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

// --- Mini Dashboard Content Components ---

const CardAContent = () => (
    <div className="flex flex-col h-full p-6 select-none pointer-events-none">
        <div className="text-gray-400 font-mono text-[10px] md:text-xs uppercase tracking-wider mb-2">Engineering & Infra</div>
        <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4ec8ef] to-[#308fef] mb-1 tracking-tighter">
            DEV OS
        </div>
        <div className="text-gray-500 font-mono text-[10px] mb-4">SCALABLE DIGITAL ARCHITECTURE</div>
        
        {/* Terminal/Code Graphic */}
        <div className="flex-1 mt-2 bg-[#111] rounded-lg border border-[#308fef]/30 p-3 flex flex-col font-mono text-[9px] md:text-[10px] text-gray-400 overflow-hidden">
            <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[#4ec8ef]">$ init renoweb-dev-os</div>
            <div className="text-gray-500 mt-1">&gt; Compiling core systems...</div>
            <div className="text-gray-500">&gt; Establishing secure endpoints...</div>
            <div className="text-emerald-400 mt-1">&gt; System active. Scale ready.</div>
            
            {/* Blinking cursor */}
            <div className="mt-2 w-2 h-3 bg-[#4ec8ef] animate-pulse" />
        </div>
        
        {/* Footer/Tag */}
        <div className="mt-4 flex items-center justify-between text-[#308fef] font-mono text-[10px]">
            <span>END-TO-END SOLUTIONS</span>
            <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ec8ef] animate-pulse" /> ONLINE
            </span>
        </div>
    </div>
);

const CardBContent = () => (
    <div className="flex flex-col h-full p-6 select-none pointer-events-none">
        <div className="text-gray-400 font-mono text-[10px] md:text-xs uppercase tracking-wider mb-2">Precision Marketing</div>
        <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffc857] to-[#f97316] mb-1 tracking-tighter">
            PERF OS
        </div>
        <div className="text-gray-500 font-mono text-[10px] mb-auto">EXPONENTIAL BUSINESS GROWTH</div>
        
        {/* Animated Equalizer / Live Analytics */}
        <div className="relative flex-1 mt-6 border-b border-[#308fef]/30 flex items-end justify-between px-2 gap-1.5 pb-1">
            {[45, 80, 50, 90, 65, 100, 70, 85].map((h, i) => (
                <div key={i} className="relative w-full h-full flex flex-col justify-end items-center">
                    {/* Floating Data Dot */}
                    <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-[#ffc857] shadow-[0_0_8px_rgba(255,200,87,1)] mb-1"
                        animate={{ y: [0, -10, 5, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                    />
                    {/* Animated Bar */}
                    <motion.div 
                        className="w-full rounded-t-sm bg-gradient-to-t from-[#4460ef]/40 to-[#ffc857]/80"
                        style={{ height: `${h}%` }}
                        animate={{ height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`] }}
                        transition={{ duration: 2.5 + (i % 2), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    />
                </div>
            ))}
        </div>
        
        {/* Legend/Tags */}
        <div className="flex items-center justify-between mt-4 font-mono text-[9px] md:text-[10px] text-gray-400">
            <span>LIVE CONVERSION DATA</span>
            <span className="flex items-center gap-1 text-[#ffc857]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffc857] animate-pulse" /> OPTIMIZING
            </span>
        </div>
    </div>
);

const CardCContent = () => (
    <div className="flex flex-col h-full p-6 select-none pointer-events-none relative">
        <div className="text-gray-400 font-mono text-[10px] md:text-xs uppercase tracking-wider mb-2">Sustainable Traffic</div>
        <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4ec8ef] to-[#308fef] mb-1 tracking-tighter">
            ORGANIC OS
        </div>
        <div className="text-gray-500 font-mono text-[10px] mb-4">LONG-TERM BRAND AUTHORITY</div>
        
        {/* Animated Organic Growth Chart */}
        <div className="flex-1 relative mt-2 pt-4 px-2">
            <svg viewBox="0 0 120 70" className="w-full h-full overflow-visible">
                {/* Defs */}
                <defs>
                    <linearGradient id="organicGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4ec8ef" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Horizontal Grid */}
                <line x1="0" y1="15" x2="115" y2="15" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="0" y1="40" x2="115" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="0" y1="65" x2="115" y2="65" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" strokeDasharray="2,2" />
                
                {/* Vertical Grid (Implied time axis) */}
                <line x1="0" y1="5" x2="0" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="23" y1="5" x2="23" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="46" y1="5" x2="46" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="69" y1="5" x2="69" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="92" y1="5" x2="92" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="115" y1="5" x2="115" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

                {/* Secondary/Baseline Line */}
                <motion.path 
                    d="M 0 60 C 23 58, 46 55, 69 48 C 92 42, 105 40, 115 38" 
                    fill="none" 
                    stroke="#8ba3c7" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                />

                {/* Primary Organic Line (Uneven natural curve) */}
                <motion.path 
                    d="M 0 62 C 15 60, 23 52, 46 42 C 69 32, 92 25, 105 15 C 110 10, 112 8, 115 5" 
                    fill="none" 
                    stroke="#4ec8ef" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_6px_rgba(78,200,239,0.5)]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                />
                
                {/* Area Fill under Primary Line */}
                <motion.path 
                    d="M 0 62 C 15 60, 23 52, 46 42 C 69 32, 92 25, 105 15 C 110 10, 112 8, 115 5 L 115 65 L 0 65 Z" 
                    fill="url(#organicGrad)" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                />
                
                {/* Endpoint Pulse Ring */}
                <motion.circle 
                    cx="115" cy="5" r="4" 
                    fill="none" 
                    stroke="#4ec8ef" 
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 0.8, 0], scale: [0.5, 2.5, 3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
                />
                
                {/* Endpoint Glowing Dot */}
                <motion.circle 
                    cx="115" cy="5" r="2.5" fill="#4ec8ef" 
                    className="drop-shadow-[0_0_5px_rgba(78,200,239,1)]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.5, type: "spring" }}
                />

                {/* Stat Label */}
                <motion.text 
                    x="108" y="8" 
                    fill="#4ec8ef" 
                    fontSize="7" 
                    fontFamily="monospace" 
                    fontWeight="bold" 
                    textAnchor="end"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 108 }}
                    transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
                >
                    +247%
                </motion.text>
            </svg>
        </div>
        
        <div className="mt-4 flex items-center justify-between font-mono text-[9px] md:text-[10px] text-gray-400">
            <span>COMPOUNDING RESULTS</span>
            <span className="flex items-center gap-1.5 text-[#4ec8ef]">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                GROWING
            </span>
        </div>
    </div>
);


const CardStack = () => {
    const [roles, setRoles] = useState([0, 1, 2]);
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleInteract = (clickedId) => {
        const currentRole = roles[clickedId];
        if (currentRole === 1) return; // already front
        
        const currentFrontId = roles.indexOf(1);
        const newRoles = [...roles];
        
        // Swap hovered card with front card
        newRoles[clickedId] = 1;
        newRoles[currentFrontId] = currentRole;
        setRoles(newRoles);
    };

    // Responsive configuration
    const getRoleStyles = (roleIndex, isHovered) => {
        const baseOffsetLeft = isMobile ? -30 : -70;
        const baseOffsetRight = isMobile ? 30 : 70;
        const offsetLeft = isHovered && !isMobile ? baseOffsetLeft - 15 : baseOffsetLeft;
        const offsetRight = isHovered && !isMobile ? baseOffsetRight + 15 : baseOffsetRight;
        const offsetUp = isHovered && !isMobile ? -35 : (isMobile ? -15 : -25);
        
        switch(roleIndex) {
            case 0: // back-left
                return {
                    x: offsetLeft,
                    y: offsetUp,
                    rotate: -7,
                    zIndex: 20,
                    opacity: 0.85,
                    filter: "brightness(0.7) desaturate(0.2)",
                    scale: 0.95
                };
            case 1: // front
                return {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    zIndex: 30,
                    opacity: 1,
                    filter: "brightness(1) desaturate(0)",
                    scale: 1
                };
            case 2: // back-right
                return {
                    x: offsetRight,
                    y: offsetUp,
                    rotate: 7,
                    zIndex: 10,
                    opacity: 0.85,
                    filter: "brightness(0.7) desaturate(0.2)",
                    scale: 0.95
                };
            default:
                return {};
        }
    };

    const cards = [
        { id: 0, content: <CardAContent />, bobDuration: 4 },
        { id: 1, content: <CardBContent />, bobDuration: 4.4 },
        { id: 2, content: <CardCContent />, bobDuration: 3.7 }
    ];

    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            {cards.map((card, i) => {
                const currentRole = roles[i];
                const isHovered = hoveredCard === i;
                const styles = getRoleStyles(currentRole, isHovered);
                const isFront = currentRole === 1;

                return (
                    <motion.div
                        key={card.id}
                        layout
                        initial={false}
                        animate={{
                            x: styles.x,
                            y: styles.y,
                            rotate: styles.rotate,
                            zIndex: styles.zIndex,
                            opacity: styles.opacity,
                            filter: styles.filter,
                            scale: styles.scale,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1], // Smooth ease-out
                        }}
                        onMouseEnter={() => !isMobile && setHoveredCard(i)}
                        onMouseLeave={() => !isMobile && setHoveredCard(null)}
                        onClick={() => handleInteract(i)}
                        className={`absolute w-[260px] h-[340px] md:w-[380px] md:h-[460px] bg-[#191919] rounded-2xl border border-[#308fef]/20
                            ${!isFront ? 'cursor-pointer hover:brightness-110 transition-transform duration-300 ease-out' : ''}
                        `}
                        style={{
                            boxShadow: isFront 
                                ? "0 25px 60px -12px rgba(0,0,0,0.8), 0 0 20px rgba(48,143,239,0.1)" 
                                : "0 10px 30px -10px rgba(0,0,0,0.6)",
                            // Faint dot grid
                            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    >
                        {/* Inner bobbing wrapper */}
                        <motion.div
                            animate={{ y: ["-5px", "5px", "-5px"] }}
                            transition={{
                                duration: card.bobDuration,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full h-full relative"
                        >
                            {/* Top gradient bar */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#308fef] via-[#4ec8ef] to-[#4460ef] rounded-t-2xl" />
                            
                            {card.content}
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

const DataFunnel = () => {
    const nodes = ["INTAKE", "ANALYZE", "STRATEGY", "BUILD", "SCALE"];
    
    // Create staggered particles
    const particles = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        delay: i * 0.8,
        duration: 3 + (i % 2) * 0.5 // varied speed
    }));

    return (
        <div className="w-full h-24 relative flex items-center justify-between border-t border-white/5 bg-gradient-to-r from-transparent via-[#191919]/50 to-transparent overflow-hidden px-4 md:px-12">
            
            {/* The Track Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-b border-dashed border-[#308fef]/25" />
            
            {/* Fixed Nodes */}
            <div className="w-full relative z-10 flex justify-between items-center">
                {nodes.map((node, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#191919] border-2 border-[#308fef]/50 rounded-full relative z-20" />
                        <span className="font-mono text-[8px] md:text-[10px] text-gray-500 tracking-widest hidden sm:block">{node}</span>
                    </div>
                ))}
            </div>

            {/* Traveling Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "100vw", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 -translate-y-1/2 z-30 flex items-center"
                    style={{ left: 0 }}
                >
                    {/* Comet Tail */}
                    <div className="w-16 md:w-32 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-[#4ec8ef]/50 to-[#4ec8ef]" />
                    {/* Glowing Head */}
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-[0_0_12px_4px_rgba(78,200,239,0.8)]" />
                </motion.div>
            ))}
            
        </div>
    );
};

const Hero = () => {
    return (
        <div className="relative w-full min-h-[100vh] flex flex-col bg-[#191919] overflow-hidden pt-24 md:pt-32">
            
            {/* Global Background Texture (Faint dots) */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px"
                }}
            />
            
            {/* Soft background ambient glow */}
            <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-[#4460ef]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vw] bg-[#4ec8ef]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            {/* Main 2-Column Container */}
            <div className="relative z-20 flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24 pb-16">
                
                {/* LEFT COLUMN: Text Content */}
                <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-0">
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                        className="mb-8 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-[#4ec8ef] via-[#308fef] to-[#4460ef] inline-block"
                    >
                        <div className="px-6 py-2 rounded-full bg-[#191919]/80 backdrop-blur-md">
                            <span className="text-sm sm:text-base font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-white uppercase">
                                Digital Growth Partners
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Hero Text */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center lg:items-start gap-2 mb-8"
                    >
                        <div className="overflow-hidden">
                            <motion.h1 variants={textWordVariants} className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[5.5rem] 2xl:text-[6rem] font-black text-white tracking-tighter leading-[0.9] drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                                BUILDING
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden flex flex-wrap justify-center lg:justify-start gap-x-4">
                            <motion.h1 
                                variants={textWordVariants} 
                                className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[5.5rem] 2xl:text-[6rem] font-black tracking-wide sm:tracking-tighter leading-[0.9] text-[#4ec8ef] drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                            >
                                SUSTAINABLE
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1 variants={textWordVariants} className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[5.5rem] 2xl:text-[6rem] font-black text-white tracking-tighter leading-[0.9] drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                                SUCCESS
                            </motion.h1>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="max-w-xl text-base sm:text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed drop-shadow-md"
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
                            <div className="group relative px-8 py-4 bg-[#4460ef] text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(68,96,239,0.3)] hover:shadow-[0_0_40px_rgba(68,96,239,0.7)]">
                                <span className="relative z-10">Start Your Project</span>
                            </div>
                        </MagneticButton>
                        
                        <MagneticButton href="/services">
                            <div className="group relative px-8 py-4 bg-[#023dbb] text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(2,61,187,0.3)] hover:shadow-[0_0_40px_rgba(2,61,187,0.7)]">
                                <span className="relative z-10">Services</span>
                            </div>
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Stacked Cards */}
                <div className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
                    <CardStack />
                </div>
            </div>

            {/* FULL WIDTH BOTTOM: Data Funnel Strip */}
            <div className="w-full mt-auto relative z-20">
                <DataFunnel />
            </div>

        </div>
    );
};

export default Hero;
