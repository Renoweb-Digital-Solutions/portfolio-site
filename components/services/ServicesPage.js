"use client"

import React, { useRef, useState, useEffect, lazy, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { services } from '@/components/data/Services'
import useMobileView from '@/components/shared/useMobileView'

import FunnelJourneyDiagram from './FunnelJourneyDiagram'
import MessageFlowDiagram from './MessageFlowDiagram'

/* ─── Animation Variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
    },
}

/* ─── Animated Section Wrapper ─── */
const AnimatedSection = ({ children, className, delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.15 })

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

/* ─── Count-Up Number Component ─── */
const CountUpNumber = ({ target, suffix = '', prefix = '' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const motionValue = useMotionValue(0)
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, target, {
                duration: 2,
                ease: 'easeOut',
                onUpdate: (v) => setDisplayValue(Math.round(v)),
            })
            return controls.stop
        }
    }, [isInView, target, motionValue])

    return (
        <span ref={ref}>
            {prefix}{displayValue}{suffix}
        </span>
    )
}

/* ─── Process Step SVG Line (Animated on Scroll) ─── */
const ProcessLine = ({ progress }) => {
    const dashOffset = useTransform(progress, [0, 1], [300, 0])

    return (
        <svg className="absolute top-6 left-0 w-full h-1 hidden md:block" viewBox="0 0 1000 4" preserveAspectRatio="none">
            {/* Track */}
            <line x1="40" y1="2" x2="960" y2="2" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
            {/* Animated fill */}
            <motion.line
                x1="40" y1="2" x2="960" y2="2"
                stroke="url(#processGradient)"
                strokeWidth="2"
                strokeDasharray="920"
                style={{ strokeDashoffset: dashOffset }}
            />
            <defs>
                <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ec8ef" />
                    <stop offset="50%" stopColor="#308fef" />
                    <stop offset="100%" stopColor="#4460ef" />
                </linearGradient>
            </defs>
        </svg>
    )
}

/* ─── Service Icon Map (inline SVGs for each service) ─── */
const serviceIcons = {
    linkedin: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    ),
    dev: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
    ),
    organic: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
    ),
    smm: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
    ),
    branding: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
    ),
    leadgen: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
    ),
    community: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    ),
    performance: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
    ),
}

/* ════════════════════════════════════════════════════════════════════
   MAIN SERVICES PAGE
   ════════════════════════════════════════════════════════════════════ */
export default function ServicesPage() {
    const isMobile = useMobileView()

    // For the process strip scroll animation
    const processRef = useRef(null)
    const { scrollYProgress: processScroll } = useScroll({
        target: processRef,
        offset: ["start 80%", "end 40%"],
    })

    // Map services to include icon key
    const featuredIds = ['linkedin', 'performance']
    const featured = services.filter(s => featuredIds.includes(s.id))
    const grid = services.filter(s => !featuredIds.includes(s.id))

    const processSteps = [
        { num: '01', title: 'Discover', desc: 'Deep-dive into your business, market, and goals' },
        { num: '02', title: 'Strategize', desc: 'Craft a data-driven roadmap for growth' },
        { num: '03', title: 'Build', desc: 'Execute with precision across all channels' },
        { num: '04', title: 'Launch', desc: 'Deploy campaigns and systems at scale' },
        { num: '05', title: 'Optimize', desc: 'Continuously measure and refine for ROI' },
    ]

    const linkedinFeatures = [
        'Profile Optimization & Authority Building',
        'Content Strategy & Thought Leadership',
        'Inbound Lead Generation Funnels',
        'Engagement Pods & Outreach Automation',
        'Analytics & Performance Tracking',
        'Sales Navigator Integration',
    ]

    const performanceFeatures = [
        'Precision-Engineered Sales Funnels',
        'Targeted Paid Ad Campaigns',
        'Automated Nurturing Sequences',
        'Retargeting & Conversion Optimization',
        'Cross-Industry Deployment',
        'Real-Time Performance Dashboards',
    ]

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden poppins-regular">
            {/* ── Background Particles ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { left: '10%', top: '20%', delay: '0s', duration: '2s' },
                    { left: '25%', top: '60%', delay: '0.3s', duration: '2.5s' },
                    { left: '40%', top: '15%', delay: '0.6s', duration: '3s' },
                    { left: '55%', top: '75%', delay: '0.9s', duration: '2.2s' },
                    { left: '70%', top: '30%', delay: '1.2s', duration: '2.8s' },
                    { left: '85%', top: '50%', delay: '1.5s', duration: '3.2s' },
                    { left: '15%', top: '80%', delay: '1.8s', duration: '2.4s' },
                    { left: '30%', top: '40%', delay: '2.1s', duration: '2.9s' },
                    { left: '45%', top: '90%', delay: '2.4s', duration: '3.5s' },
                    { left: '60%', top: '25%', delay: '2.7s', duration: '2.6s' },
                    { left: '75%', top: '65%', delay: '0.2s', duration: '3.1s' },
                    { left: '90%', top: '10%', delay: '0.5s', duration: '2.3s' },
                    { left: '20%', top: '55%', delay: '0.8s', duration: '2.7s' },
                    { left: '35%', top: '35%', delay: '1.1s', duration: '3.3s' },
                    { left: '50%', top: '70%', delay: '1.4s', duration: '2.1s' },
                    { left: '65%', top: '45%', delay: '1.7s', duration: '2.8s' },
                    { left: '80%', top: '85%', delay: '2.0s', duration: '3.4s' },
                    { left: '5%', top: '50%', delay: '2.3s', duration: '2.5s' },
                    { left: '95%', top: '60%', delay: '2.6s', duration: '3.0s' },
                    { left: '50%', top: '5%', delay: '2.9s', duration: '2.9s' },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#4ec8ef] rounded-full animate-pulse"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>

            {/* ── Gradient Blobs ── */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-[#4460ef]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#308fef]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4ec8ef]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            {/* ════════════════════════════════════════════════
                SECTION 1: HERO
            ════════════════════════════════════════════════ */}
            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4">
                        {/* Left: Text Content */}
                        <AnimatedSection className="flex-1 text-center lg:text-left">
                            <motion.div variants={fadeUp} className="inline-block mb-6 relative">
                                <div className="absolute inset-0 bg-[#4460ef]/20 blur-xl animate-pulse" />
                                <span className="relative px-6 py-2 bg-[#4460ef]/20 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4460ef]/30 tracking-widest uppercase">
                                    What We Do
                                </span>
                            </motion.div>
                            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                Our{' '}
                                <span className="bg-gradient-to-r from-[#4ec8ef] via-[#308fef] to-[#4460ef] bg-clip-text text-transparent">
                                    Services
                                </span>
                            </motion.h1>
                            <motion.p variants={fadeUp} custom={2} className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                End-to-end digital growth solutions — from strategy to execution — designed to build your brand, drive leads, and scale revenue sustainably.
                            </motion.p>
                            <motion.div variants={fadeUp} custom={3}>
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 bg-[#4460ef] hover:bg-[#308fef] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group"
                                >
                                    Get Started
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </AnimatedSection>

                        {/* Right: Custom Diagram */}
                        <motion.div variants={scaleIn} className="w-full lg:w-7/12 mt-12 lg:mt-0">
                            <MessageFlowDiagram />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2: ASYMMETRIC BENTO GRID
            ════════════════════════════════════════════════ */}
            <section className="py-20 px-6 relative z-10">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <motion.div variants={fadeUp} className="text-center mb-16">
                        <div className="inline-block mb-5">
                            <span className="px-5 py-2 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4ec8ef]/20 tracking-widest uppercase">
                                Our Verticals
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            SERVICES{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">
                                ECOSYSTEM
                            </span>
                        </h2>
                        <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Eight specialized operating systems working in concert to drive every dimension of your digital growth.
                        </p>
                    </motion.div>

                    {/* Featured Services — Large Cards */}
                    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {featured.map((service, idx) => (
                            <ServiceCard key={service.id} service={service} size="large" index={idx} />
                        ))}
                    </motion.div>

                    {/* Remaining Services — 3-Column Grid */}
                    <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {grid.map((service, idx) => (
                            <ServiceCard key={service.id} service={service} size="small" index={idx} />
                        ))}
                    </motion.div>
                </AnimatedSection>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3: PROCESS STRIP — "HOW WE WORK"
            ════════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 relative z-10" ref={processRef}>
                <AnimatedSection className="max-w-6xl mx-auto">
                    <motion.div variants={fadeUp} className="text-center mb-16 md:mb-20">
                        <div className="inline-block mb-5">
                            <span className="px-5 py-2 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4ec8ef]/20 tracking-widest uppercase">
                                Our Process
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            HOW WE{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">
                                WORK
                            </span>
                        </h2>
                    </motion.div>

                    {/* Desktop: Horizontal Process Flow */}
                    <div className="relative">
                        <ProcessLine progress={processScroll} />

                        {/* Desktop view */}
                        <div className="hidden md:grid grid-cols-5 gap-4 relative">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    variants={fadeUp}
                                    custom={i}
                                    className="flex flex-col items-center text-center"
                                >
                                    {/* Number badge */}
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-[#4ec8ef]/40 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_20px_rgba(78,200,239,0.15)]">
                                        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4ec8ef] to-[#308fef]">
                                            {step.num}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed max-w-[180px]">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile: Vertical Timeline */}
                        <div className="md:hidden space-y-8 relative">
                            {/* Vertical track line */}
                            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/5" />
                            <motion.div
                                className="absolute left-6 top-0 w-[2px] bg-gradient-to-b from-[#4ec8ef] via-[#308fef] to-[#4460ef]"
                                style={{
                                    height: useTransform(processScroll, [0, 1], ['0%', '100%']),
                                    transformOrigin: 'top',
                                }}
                            />

                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    variants={fadeUp}
                                    custom={i}
                                    className="flex items-start gap-5 pl-0"
                                >
                                    {/* Number badge */}
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-[#4ec8ef]/40 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_20px_rgba(78,200,239,0.15)]">
                                        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4ec8ef] to-[#308fef]">
                                            {step.num}
                                        </span>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4: FEATURED SERVICE DEEP-DIVES
            ════════════════════════════════════════════════ */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">

                    {/* LinkedIn OS Deep-Dive */}
                    <AnimatedSection className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text */}
                        <div className="flex-1 order-2 lg:order-1">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-[1px] bg-gradient-to-r from-[#4ec8ef] to-[#308fef]" />
                                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4ec8ef]">
                                    Flagship Service
                                </span>
                            </motion.div>

                            <motion.div variants={fadeUp} custom={0.5} className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 30px rgba(78,200,239,0.12)' }}>
                                    <Image src="/service_logos/LINKEDIN_OS.png" width={40} height={40} alt="LinkedIn OS logo" className="object-contain" />
                                </div>
                            </motion.div>

                            <motion.h3 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mb-2 tracking-tight">
                                <span className="text-white">LINKEDIN </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">OS</span>
                            </motion.h3>

                            <motion.div variants={fadeUp} custom={1.5} className="w-20 h-[2px] bg-gradient-to-r from-[#4ec8ef] to-[#308fef] rounded-full mb-6" />

                            <motion.p variants={fadeUp} custom={2} className="text-gray-300/90 text-base leading-relaxed mb-8 max-w-lg">
                                LinkedIn is no longer just a professional networking platform — it&apos;s a powerful engine for inbound leads, brand visibility, and thought leadership. We help founders, startups, and personal brands unlock its full potential.
                            </motion.p>

                            {/* Features grid */}
                            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {linkedinFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="flex items-center gap-2 text-sm text-gray-400"
                                    >
                                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#4ec8ef] rounded-full" />
                                        <span>{feature}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Visual accent */}
                        <motion.div variants={scaleIn} className="flex-1 order-1 lg:order-2 flex items-center justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                {/* Network node animation */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-64 h-64">
                                        {/* Center node */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#4ec8ef]/30 to-[#308fef]/30 border border-[#4ec8ef]/40 flex items-center justify-center z-10">
                                            <Image src="/service_logos/LINKEDIN_OS.png" width={32} height={32} alt="" className="object-contain" />
                                        </div>
                                        {/* Orbiting nodes */}
                                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[#4ec8ef]/60"
                                                style={{
                                                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(100px)`,
                                                }}
                                                animate={{
                                                    opacity: [0.3, 0.8, 0.3],
                                                    scale: [0.8, 1.2, 0.8],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: i * 0.5,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        ))}
                                        {/* Connecting lines */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                                            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                                                const rad = (deg * Math.PI) / 180
                                                const x2 = (128 + 100 * Math.cos(rad)).toFixed(3)
                                                const y2 = (128 + 100 * Math.sin(rad)).toFixed(3)
                                                return (
                                                    <line
                                                        key={i}
                                                        x1="128" y1="128"
                                                        x2={x2} y2={y2}
                                                        stroke="rgba(78,200,239,0.15)"
                                                        strokeWidth="1"
                                                    />
                                                )
                                            })}
                                        </svg>
                                        {/* Ambient glow */}
                                        <div className="absolute inset-0 rounded-full bg-[#308fef]/10 blur-3xl" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    {/* Performance OS Deep-Dive */}
                    <AnimatedSection className="flex flex-col xl:flex-row items-center gap-12 lg:gap-16">
                        
                        {/* Text (Left on Desktop now, since diagram is so wide) */}
                        <div className="flex-1 order-2 xl:order-1">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-[1px] bg-gradient-to-r from-[#308fef] to-[#4460ef]" />
                                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#308fef]">
                                    Performance Marketing
                                </span>
                            </motion.div>

                            <motion.div variants={fadeUp} custom={0.5} className="mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 30px rgba(59,130,246,0.12)' }}>
                                    <Image src="/service_logos/Perf_OS.png" width={40} height={40} alt="Performance OS logo" className="object-contain" />
                                </div>
                            </motion.div>

                            <motion.h3 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mb-2 tracking-tight">
                                <span className="text-white">PERFORMANCE </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#308fef] to-[#4460ef]">OS</span>
                            </motion.h3>

                            <motion.div variants={fadeUp} custom={1.5} className="w-20 h-[2px] bg-gradient-to-r from-[#308fef] to-[#4460ef] rounded-full mb-6" />

                            <motion.p variants={fadeUp} custom={2} className="text-gray-300/90 text-base leading-relaxed mb-8 max-w-lg">
                                PerfOS is our proprietary performance marketing system designed to unlock exponential business growth through precision-engineered funnels, targeted ads, automated nurturing, and optimized sales workflows.
                            </motion.p>

                            {/* Features grid */}
                            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {performanceFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="flex items-center gap-2 text-sm text-gray-400"
                                    >
                                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#308fef] rounded-full" />
                                        <span>{feature}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Visual accent (Right on Desktop) - Custom Diagram */}
                        <motion.div variants={scaleIn} className="flex-1 order-1 xl:order-2 w-full xl:w-7/12">
                            <FunnelJourneyDiagram />
                        </motion.div>

                    </AnimatedSection>

                </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 5: TRUST / CREDIBILITY STRIP
                (COMMENTED OUT — Awaiting CEO approval on stats)
            ════════════════════════════════════════════════ */}
            {/*
            <section className="py-20 px-6 relative z-10 border-t border-b border-white/5">
                <AnimatedSection className="max-w-5xl mx-auto">
                    <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { target: 35, suffix: '+', label: 'Brands Served' },
                            { target: 8, suffix: '', label: 'Service Verticals' },
                            { target: 98, suffix: '%', label: 'Client Retention' },
                            { target: 4, suffix: '+', label: 'Years Experience' },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className="flex flex-col items-center">
                                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef] mb-2">
                                    <CountUpNumber target={stat.target} suffix={stat.suffix} />
                                </span>
                                <span className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatedSection>
            </section>
            */}

            {/* ════════════════════════════════════════════════
                SECTION 6: WHICH SERVICE FITS YOU?
            ════════════════════════════════════════════════ */}
            <section className="py-20 px-6 relative z-10">
                <AnimatedSection className="max-w-5xl mx-auto">
                    <motion.div variants={fadeUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Which Service Fits You?</h2>
                        <p className="text-gray-400 text-lg">Our services are organized into two complementary pillars to cover every growth dimension.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-gradient-to-br from-[#4ec8ef]/10 to-[#308fef]/10 border border-[#4ec8ef]/30 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#4ec8ef]/20 border border-[#4ec8ef]/30 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#4ec8ef]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Growth & Visibility</h3>
                            </div>
                            <p className="text-gray-300 mb-4">Perfect for brands looking to:</p>
                            <ul className="space-y-2 text-gray-400">
                                {[
                                    'Build authority on LinkedIn (LinkedIn OS)',
                                    'Drive organic, sustainable traffic (Organic OS)',
                                    'Dominate social media channels (SMM OS)',
                                    'Build loyal brand communities (Community OS)',
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-[#4ec8ef] mt-1">→</span>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-gradient-to-br from-[#308fef]/10 via-[#4460ef]/10 to-[#023dbb]/10 border border-[#308fef]/30 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#308fef]/20 border border-[#308fef]/30 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#308fef]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Performance & Infrastructure</h3>
                            </div>
                            <p className="text-gray-300 mb-4">Ideal for businesses who want to:</p>
                            <ul className="space-y-2 text-gray-400">
                                {[
                                    'Build scalable digital products (Dev OS)',
                                    'Generate high-quality leads at scale (Lead Gen OS)',
                                    'Craft a memorable brand identity (Branding OS)',
                                    'Maximize paid marketing ROI (Performance OS)',
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-[#4ec8ef] mt-1">→</span>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </AnimatedSection>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 7: FINAL CTA
            ════════════════════════════════════════════════ */}
            <section className="py-20 px-6 relative z-10">
                <AnimatedSection className="max-w-4xl mx-auto text-center">
                    <motion.div
                        variants={scaleIn}
                        className="relative bg-gradient-to-r from-[#4ec8ef]/20 via-[#308fef]/20 to-[#4460ef]/20 border border-[#308fef]/40 rounded-3xl p-12 overflow-hidden"
                    >
                        {/* Animated background shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4ec8ef]/10 to-transparent animate-shimmer" />

                        <div className="relative z-10">
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Build With Us?
                            </motion.h2>
                            <motion.p variants={fadeUp} custom={1} className="text-xl text-gray-300 mb-8">
                                Let&apos;s design the perfect growth stack for your business — from strategy to execution.
                            </motion.p>
                            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact-us" className="bg-[#4460ef] hover:bg-[#308fef] text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center justify-center gap-2 group">
                                    Schedule Consultation
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatedSection>
            </section>

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

/* ═══════════════════════════════════════
   SERVICE CARD COMPONENT
   ═══════════════════════════════════════ */
function ServiceCard({ service, size, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const isLarge = size === 'large'

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="group relative"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ec8ef]/0 via-[#308fef]/0 to-[#4460ef]/0 group-hover:from-[#4ec8ef]/10 group-hover:via-[#308fef]/10 group-hover:to-[#4460ef]/10 blur-2xl transition-all duration-500 rounded-3xl" />

            <div className={`relative bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#4460ef]/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(68,96,239,0.1)] ${isLarge ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4460ef]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                    {/* Header: Logo + Icon */}
                    <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-4">
                            {/* Icon badge */}
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4ec8ef]/15 to-[#308fef]/15 border border-[#4ec8ef]/20 flex items-center justify-center text-[#4ec8ef] group-hover:border-[#4ec8ef]/40 group-hover:scale-110 transition-all duration-500">
                                {serviceIcons[service.id] || serviceIcons.dev}
                            </div>
                            {/* Service logo */}
                            {service.logo && (
                                <div className="w-12 h-12 p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                    <Image
                                        src={service.logo}
                                        alt={`${service.title} logo`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain"
                                        unoptimized
                                    />
                                </div>
                            )}
                        </div>

                        {/* Arrow that slides in on hover */}
                        <div className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#4ec8ef]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-[#4ec8ef] group-hover:to-white transition-all duration-500 mb-2 ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                        {service.title}
                    </h3>

                    {/* Accent line */}
                    <div className="w-10 h-1 bg-gradient-to-r from-[#4ec8ef] to-[#308fef] rounded-full mb-4 opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />

                    {/* Description */}
                    <p className={`text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 ${isLarge ? 'text-base' : 'text-sm line-clamp-3'}`}>
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
