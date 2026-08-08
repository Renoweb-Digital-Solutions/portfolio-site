"use client"

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

/* ─── Animation Variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
}

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
}

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
    },
}

/* ─── Animated Section Wrapper ─── */
const AnimatedSection = ({ children, className, delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12, delayChildren: delay },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/* ─── Step Number Badge ─── */
const StepBadge = ({ number }) => (
    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#4460ef]/15 border border-[#4460ef]/30 flex items-center justify-center shadow-[0_0_20px_rgba(68,96,239,0.12)]">
        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4ec8ef] to-[#308fef]">
            {String(number).padStart(2, '0')}
        </span>
    </div>
)


/* ════════════════════════════════════════════════════════════════════
   FLOW CONNECTOR — Animated SVG arrow between sections
   ════════════════════════════════════════════════════════════════════ */
const FlowConnector = ({ direction = 'right-to-left', nextStep }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 30%"],
    })

    // Animate stroke drawing on scroll
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
    const arrowOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1])

    /*
     * Direction logic:
     * "right-to-left" → from right side (image was on right) curves down to left (image next on left)
     * "left-to-right" → from left side (image was on left) curves down to right (image next on right)
     * "center-down"   → from center down (after text-only card / special section)
     */

    const paths = {
        'right-to-left': 'M 780 10 C 780 70, 750 90, 600 100 C 400 115, 250 120, 220 180',
        'left-to-right': 'M 220 10 C 220 70, 250 90, 400 100 C 600 115, 750 120, 780 180',
        'center-down': 'M 500 10 C 500 50, 500 80, 500 110 C 500 140, 500 160, 500 180',
    }

    // Arrowhead positions for each direction
    const arrowheads = {
        'right-to-left': { x: 215, y: 180, rotation: 145 },
        'left-to-right': { x: 780, y: 180, rotation: 25 },
        'center-down': { x: 500, y: 180, rotation: 90 },
    }

    const path = paths[direction]
    const arrowhead = arrowheads[direction]

    return (
        <div ref={containerRef} className="hidden lg:flex items-center justify-center py-4 relative">
            <div ref={ref} className="w-full max-w-7xl mx-auto relative" style={{ height: '160px' }}>
                <svg
                    viewBox="0 0 1000 240"
                    fill="none"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        <linearGradient id={`flowGrad-${nextStep}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4ec8ef" />
                            <stop offset="50%" stopColor="#308fef" />
                            <stop offset="100%" stopColor="#4460ef" />
                        </linearGradient>
                        {/* Glow filter */}
                        <filter id={`flowGlow-${nextStep}`} x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Track (faint) */}
                    <path
                        d={path}
                        stroke="rgba(78,200,239,0.12)"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="12 10"
                    />

                    {/* Animated gradient stroke */}
                    <motion.path
                        d={path}
                        stroke={`url(#flowGrad-${nextStep})`}
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        filter={`url(#flowGlow-${nextStep})`}
                        style={{ pathLength }}
                        initial={{ pathLength: 0 }}
                    />

                    {/* Arrowhead */}
                    <motion.g
                        style={{ opacity: arrowOpacity }}
                        initial={{ opacity: 0 }}
                    >
                        <g transform={`translate(${arrowhead.x}, ${arrowhead.y}) rotate(${arrowhead.rotation})`}>
                            <path
                                d="M -16 -10 L 0 0 L -16 10"
                                stroke={`url(#flowGrad-${nextStep})`}
                                strokeWidth="5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter={`url(#flowGlow-${nextStep})`}
                            />
                        </g>
                    </motion.g>

                    {/* Animated dot traveling along path */}
                    {isInView && (
                        <motion.circle
                            r="6"
                            fill="#4ec8ef"
                            filter={`url(#flowGlow-${nextStep})`}
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 0.5,
                            }}
                            style={{
                                offsetPath: `path("${path}")`,
                            }}
                        />
                    )}

                    {/* Next step label at arrow tip */}
                    <motion.g style={{ opacity: arrowOpacity }}>
                        <circle
                            cx={arrowhead.x + (direction === 'right-to-left' ? -45 : direction === 'left-to-right' ? 45 : 0)}
                            cy={arrowhead.y + (direction === 'center-down' ? 45 : 15)}
                            r="24"
                            fill="rgba(0,0,0,0.8)"
                            stroke="rgba(78,200,239,0.4)"
                            strokeWidth="2"
                        />
                        <text
                            x={arrowhead.x + (direction === 'right-to-left' ? -45 : direction === 'left-to-right' ? 45 : 0)}
                            y={arrowhead.y + (direction === 'center-down' ? 45 : 15) + 6}
                            textAnchor="middle"
                            fill="#4ec8ef"
                            fontSize="16"
                            fontWeight="800"
                            fontFamily="monospace"
                        >
                            {String(nextStep).padStart(2, '0')}
                        </text>
                    </motion.g>
                </svg>
            </div>
        </div>
    )
}


/* ─── Mobile Flow Connector (vertical) ─── */
const MobileFlowConnector = ({ nextStep }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    return (
        <div ref={ref} className="lg:hidden flex flex-col items-center py-6">
            <motion.div
                className="flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Vertical dotted line */}
                <div className="w-[4px] h-14 bg-gradient-to-b from-[#4ec8ef]/40 to-[#308fef]/40" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #4ec8ef44 0px, #4ec8ef44 6px, transparent 6px, transparent 12px)' }} />

                {/* Arrow chevron */}
                <svg className="w-8 h-8 text-[#4ec8ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>

                {/* Step badge */}
                <div className="mt-2 w-12 h-12 rounded-xl bg-black/80 border-2 border-[#4ec8ef]/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#4ec8ef]">{String(nextStep).padStart(2, '0')}</span>
                </div>
            </motion.div>
        </div>
    )
}


/* ════════════════════════════════════════════════════════════════════
   RENOWEB WATERFALL OS PAGE
   ════════════════════════════════════════════════════════════════════ */
export default function RenowebWaterfallPage() {
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    /* ── Content Sections Data ── */
    const sections = [
        {
            step: 1,
            title: 'The Source Layer',
            description: 'Every waterfall begins with one Raw Moment or Core Asset (a story, a stat, a client result, a framework, a hot take). This is captured using the same discipline as the Renoweb Prism system.',
            image: '/frameworks/waterfall-os/1.png',
            imageAlt: 'Renoweb Waterfall OS The Source Layer',
        },
        {
            step: 2,
            title: 'The Angle Layer',
            titleSuffix: '(15 Lenses)',
            description: 'The same source is passed through Renoweb’s 15-angle library to generate up to 15 distinct points of view on the same underlying truth.',
            angles: ['Paradox', 'Failure→Lesson', 'Transformation', 'Hot Take', 'Framework', 'Warning', 'Identity', 'Behind-the-Scenes', 'Story→Principle', 'Silent Struggle', 'Open Loop', 'Data Shock', 'Trend Commentary', 'Permission Slip', 'Stakes'],
            image: '/frameworks/waterfall-os/2.png',
            imageAlt: 'Renoweb Waterfall OS The Angle Layer',
        },
        {
            step: 3,
            title: 'The Format Layer',
            titleSuffix: '(multiplies each angle)',
            description: 'Every angle is then re-expressed across a minimum of 2 formats per platform: text-only, carousel/visual, short-form video script, and long-form (newsletter/article), which is what pushes total outputs toward the 30-piece target from a single source.',
            image: '/frameworks/waterfall-os/3.png',
            imageAlt: 'Renoweb Waterfall OS The Format Layer',
        },
        {
            step: 4,
            title: 'The Funnel Layer',
            description: 'Outputs are tagged by funnel stage (Brand / Demand / Expand) so that repurposed content never accidentally repeats the same pitch to a cold and a warm audience.',
            platforms: [
                { angle: 'Top of Funnel', platform: 'Brand', icon: '🌍' },
                { angle: 'Middle of Funnel', platform: 'Demand', icon: '🔥' },
                { angle: 'Bottom of Funnel', platform: 'Expand', icon: '📈' }
            ],
            image: '/frameworks/waterfall-os/4.png',
            imageAlt: 'Renoweb Waterfall OS The Funnel Layer',
        },
        {
            step: 5,
            title: 'The Platform-Native Layer',
            description: 'Nothing is copy-pasted across platforms. Each waterfall tier is rewritten to match native platform grammar (LinkedIn’s authority tone vs. Instagram’s visual-identity tone vs. X’s contrarian brevity vs. YouTube’s teaching depth).',
            image: '/frameworks/waterfall-os/5.png',
            imageAlt: 'Renoweb Waterfall OS The Platform-Native Layer',
        },
    ]

    /*
     * Arrow direction logic:
     * Even index (0,2,4) → image on RIGHT → next section has image on LEFT
     *   So arrow goes "right-to-left"
     * Odd index (1,3,5) → image on LEFT → next section has image on RIGHT
     *   So arrow goes "left-to-right"
     * Exception: if next section has no image (text-only card), use "center-down"
     *            if current section has no image, use "center-down"
     */
    const getArrowDirection = (currentIndex) => {
        const current = sections[currentIndex]
        const next = sections[currentIndex + 1]
        if (!current.image || !next?.image) return 'center-down'
        return currentIndex % 2 === 0 ? 'right-to-left' : 'left-to-right'
    }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden poppins-regular">

            {/* ── Background Particles ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { left: '8%', top: '15%', delay: '0s', duration: '2.5s' },
                    { left: '22%', top: '55%', delay: '0.4s', duration: '3s' },
                    { left: '38%', top: '10%', delay: '0.8s', duration: '2.2s' },
                    { left: '52%', top: '70%', delay: '1.2s', duration: '2.8s' },
                    { left: '68%', top: '25%', delay: '1.6s', duration: '3.2s' },
                    { left: '82%', top: '45%', delay: '2s', duration: '2.6s' },
                    { left: '92%', top: '80%', delay: '0.6s', duration: '3.5s' },
                    { left: '15%', top: '85%', delay: '1s', duration: '2.4s' },
                    { left: '45%', top: '35%', delay: '1.4s', duration: '2.9s' },
                    { left: '75%', top: '60%', delay: '1.8s', duration: '3.1s' },
                ].map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#4ec8ef] rounded-full animate-pulse"
                        style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
                    />
                ))}
            </div>

            {/* ── Gradient Blobs ── */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-[#023dbb]/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#4ec8ef]/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#4460ef]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />


            {/* ════════════════════════════════════════════════
                HERO SECTION
            ════════════════════════════════════════════════ */}
            <section className="pt-32 pb-16 md:pb-24 px-6 relative z-10">
                <AnimatedSection className="max-w-5xl mx-auto text-center">
                    {/* Breadcrumb */}
                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-8 text-sm text-gray-500">
                        <Link href="/services" className="hover:text-[#4ec8ef] transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-[#308fef]">Frameworks</span>
                        <span>/</span>
                        <span className="text-white/70">Waterfall OS</span>
                    </motion.div>

                    {/* Badge */}
                    <motion.div variants={fadeUp} custom={0.5} className="inline-block mb-8 relative">
                        <div className="absolute inset-0 bg-[#4460ef]/20 blur-xl animate-pulse" />
                        <span className="relative px-6 py-2 bg-[#4460ef]/15 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4460ef]/30 tracking-widest uppercase">
                            Framework
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.div variants={fadeUp} custom={1} className="mb-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
                            <span className="text-white">CONTENT</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] via-[#308fef] to-[#4460ef]">
                                WATERFALL OS
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-[#4ec8ef]/80 font-medium mb-6 tracking-wide">
                        Our Proprietary Repurposing Engine
                    </motion.p>

                    {/* Accent line */}
                    <motion.div variants={fadeUp} custom={2.5} className="w-24 h-[2px] bg-gradient-to-r from-[#4ec8ef] to-[#308fef] rounded-full mx-auto mb-8" />

                    {/* Description */}
                    <motion.p variants={fadeUp} custom={3} className="text-lg md:text-xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
                        A structured system that takes one core piece of "source content" (a founder story, a client win, a framework, a raw voice note) and cascades it — like water falling through terraces — into 30 distinct content expressions across formats, platforms, and audience temperatures, without ever feeling repetitive to the audience.
                    </motion.p>

                    {/* Why it matters */}
                    <motion.div variants={scaleIn} className="max-w-2xl mx-auto mt-10">
                        <div className="relative bg-gradient-to-r from-[#023dbb]/15 to-[#4ec8ef]/10 border border-[#4460ef]/20 rounded-2xl p-6 md:p-8">
                            <div className="absolute top-0 left-0 w-24 h-24 bg-[#308fef]/10 rounded-full blur-2xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#ffc857]/15 border border-[#ffc857]/30 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-[#ffc857]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-[#ffc857] uppercase tracking-widest">Why It Matters</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    Most brands run out of content ideas because they only ever use a story once. We're built to extract <span className="text-white font-semibold">30x the value from every real moment</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatedSection>
            </section>


            {/* ════════════════════════════════════════════════
                STRUCTURAL POINTS — IMAGE-FIRST SHOWCASE WITH FLOW ARROWS
            ════════════════════════════════════════════════ */}
            <section className="py-12 md:py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {sections.map((section, index) => {
                        const isEven = index % 2 === 0
                        const hasImage = section.image !== null
                        const isLast = index === sections.length - 1

                        return (
                            <React.Fragment key={section.step}>

                                {!hasImage ? (
                                    /* ── Text-Only Card ── */
                                    <AnimatedSection className="max-w-4xl mx-auto">
                                        <motion.div
                                            variants={scaleIn}
                                            className="relative overflow-hidden rounded-3xl"
                                        >
                                            {/* Glassmorphism background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#023dbb]/12 via-[#4460ef]/10 to-[#4ec8ef]/8" />
                                            <div className="absolute inset-0 backdrop-blur-sm" />
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#308fef]/8 rounded-full blur-3xl" />
                                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4ec8ef]/8 rounded-full blur-3xl" />

                                            <div className="relative z-10 border border-[#4460ef]/20 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                                                <div className="flex items-center justify-center gap-3 mb-6">
                                                    <StepBadge number={section.step} />
                                                    <div className="w-8 h-[1px] bg-gradient-to-r from-[#4ec8ef] to-[#308fef]" />
                                                </div>
                                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] via-[#308fef] to-[#4460ef]">
                                                        {section.title}
                                                    </span>
                                                </h3>
                                                <div className="w-16 h-[2px] bg-gradient-to-r from-[#4ec8ef] to-[#308fef] rounded-full mx-auto mb-8" />
                                                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                                                    {section.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </AnimatedSection>
                                ) : (
                                    /* ── Image-Dominant Alternating Row ── */
                                    <AnimatedSection className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                        {/* ─ Text Side (compact ~35%) ─ */}
                                        <motion.div
                                            variants={isEven ? slideInLeft : slideInRight}
                                            className={`w-full lg:w-[32%] flex-shrink-0 ${isEven ? 'lg:order-1' : 'lg:order-2'} order-2`}
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <StepBadge number={section.step} />
                                                <div className="w-6 h-[1px] bg-gradient-to-r from-[#4ec8ef] to-[#308fef]" />
                                                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#4ec8ef]">
                                                    Step {String(section.step).padStart(2, '0')}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-[1.05] mb-1 tracking-tight">
                                                <span className="text-white">{section.title}</span>
                                                {section.titleSuffix && (
                                                    <>
                                                        <br />
                                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef] text-xl sm:text-2xl lg:text-3xl">
                                                            {section.titleSuffix}
                                                        </span>
                                                    </>
                                                )}
                                            </h3>

                                            <div className="w-12 h-[2px] bg-gradient-to-r from-[#4ec8ef] to-[#308fef] rounded-full my-4" />

                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                {section.description}
                                            </p>

                                            {/* Content Angle pills */}
                                            {section.angles && (
                                                <div className="flex flex-wrap gap-1.5 mt-3">
                                                    {section.angles.map((a, ai) => (
                                                        <span
                                                            key={ai}
                                                            className="px-2 py-0.5 bg-[#4460ef]/10 border border-[#4460ef]/20 rounded text-[10px] text-[#4ec8ef]/80 font-medium"
                                                        >
                                                            {a}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Platform routing tags */}
                                            {section.platforms && (
                                                <div className="mt-4 space-y-2">
                                                    {section.platforms.map((p, pi) => (
                                                        <motion.div
                                                            key={pi}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: pi * 0.08, duration: 0.4 }}
                                                            className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 hover:border-[#308fef]/30 transition-colors duration-300"
                                                        >
                                                            <span className="text-base">{p.icon}</span>
                                                            <div>
                                                                <div className="text-[10px] text-[#4ec8ef]/70 font-medium leading-tight">{p.angle}</div>
                                                                <div className="text-xs text-white font-semibold">{p.platform}</div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>

                                        {/* ─ Image Side (dominant ~65%) ─ */}
                                        <motion.div
                                            variants={isEven ? slideInRight : slideInLeft}
                                            className={`w-full lg:w-[68%] ${isEven ? 'lg:order-2' : 'lg:order-1'} order-1`}
                                        >
                                            <div className="group relative">
                                                {/* ── Ambient glow ── */}
                                                <div className="absolute -inset-3 md:-inset-5 bg-gradient-to-br from-[#023dbb]/15 via-[#308fef]/10 to-[#4ec8ef]/15 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                                                {/* ── Decorative corner accents ── */}
                                                <div className="absolute -top-1.5 -left-1.5 w-8 h-8 border-t-2 border-l-2 border-[#4ec8ef]/40 rounded-tl-xl z-20 group-hover:border-[#4ec8ef]/70 transition-colors duration-500" />
                                                <div className="absolute -bottom-1.5 -right-1.5 w-8 h-8 border-b-2 border-r-2 border-[#308fef]/40 rounded-br-xl z-20 group-hover:border-[#308fef]/70 transition-colors duration-500" />

                                                {/* ── Image container ── */}
                                                <div 
                                                    className="relative rounded-2xl overflow-hidden border border-white/[0.08] group-hover:border-[#4460ef]/30 transition-all duration-500 shadow-[0_8px_60px_rgba(0,0,0,0.5)] cursor-pointer"
                                                    onClick={() => setSelectedImage(section.image)}
                                                >
                                                    <Image
                                                        src={section.image}
                                                        alt={section.imageAlt}
                                                        width={1200}
                                                        height={700}
                                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                                                        quality={95}
                                                        priority={section.step <= 2}
                                                    />
                                                    {/* Bottom-edge glow line */}
                                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4ec8ef]/30 to-transparent group-hover:via-[#4ec8ef]/60 transition-all duration-500" />
                                                </div>

                                                {/* ── Floating step label on image ── */}
                                                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg">
                                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ec8ef]">
                                                        Step {String(section.step).padStart(2, '0')}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatedSection>
                                )}

                                {/* ── Flow Connector Arrow (between sections) ── */}
                                {!isLast && (
                                    <>
                                        <FlowConnector
                                            direction={getArrowDirection(index)}
                                            nextStep={sections[index + 1].step}
                                        />
                                        <MobileFlowConnector nextStep={sections[index + 1].step} />
                                    </>
                                )}

                            </React.Fragment>
                        )
                    })}
                </div>
            </section>


            {/* ════════════════════════════════════════════════
                CTA SECTION
            ════════════════════════════════════════════════ */}
            <section className="py-20 px-6 relative z-10">
                <AnimatedSection className="max-w-4xl mx-auto text-center">
                    <motion.div
                        variants={scaleIn}
                        className="relative bg-gradient-to-r from-[#023dbb]/20 via-[#4460ef]/15 to-[#4ec8ef]/15 border border-[#4460ef]/30 rounded-3xl p-12 overflow-hidden"
                    >
                        {/* Animated shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4ec8ef]/10 to-transparent animate-shimmer" />

                        <div className="relative z-10">
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to Maximize Your{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">
                                    Content ROI
                                </span>
                                ?
                            </motion.h2>
                            <motion.p variants={fadeUp} custom={1} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Stop letting great stories go to waste. Let our Waterfall OS cascade your best ideas into 30+ pieces of high-performing content.
                            </motion.p>
                            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact-us"
                                    className="bg-[#4460ef] hover:bg-[#308fef] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(68,96,239,0.2)] hover:shadow-[0_0_40px_rgba(48,143,239,0.3)]"
                                >
                                    Get Started with Waterfall OS
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/services"
                                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4460ef]/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                                >
                                    View All Services
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatedSection>
            </section>

            {/* ════════════════════════════════════════════════
                IMAGE LIGHTBOX MODAL
            ════════════════════════════════════════════════ */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Backdrop with blur */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        
                        {/* Animated background gradient blob */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute w-full max-w-4xl h-full max-h-[80vh] bg-gradient-to-br from-[#4ec8ef]/30 via-[#308fef]/30 to-[#4460ef]/30 rounded-full blur-[120px]"
                        />

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative z-10 w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(48,143,239,0.2)] bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-4 right-4 z-20">
                                <button 
                                    onClick={() => setSelectedImage(null)}
                                    className="p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
                                <TransformWrapper
                                    initialScale={1}
                                    minScale={0.8}
                                    maxScale={4}
                                    centerOnInit={true}
                                    wheel={{ step: 0.1 }}
                                    doubleClick={{ step: 0.5 }}
                                >
                                    <TransformComponent wrapperClass="!w-full !h-full flex items-center justify-center" contentClass="!w-full !h-full flex items-center justify-center">
                                        <Image
                                            src={selectedImage}
                                            alt="Enlarged view"
                                            width={1920}
                                            height={1080}
                                            className="w-full h-full object-contain p-2 md:p-6"
                                            quality={100}
                                            unoptimized
                                            draggable={false}
                                        />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Shimmer animation */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>
        </div>
    )
}
