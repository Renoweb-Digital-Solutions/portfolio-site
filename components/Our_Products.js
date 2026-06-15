"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const products = [
    {
        name: "QUANTUM ACCELERATOR",
        image: "/quantam_accelerator.jpg",
        description:
            "Using our proprietary Quantum Accelerator Framework, we identify and eliminate the barriers holding your growth back. From internal inefficiencies to missed opportunities in your customer journey, we ensure every aspect of your business is optimized for success.",
        link: "/products/quantum-accelerator",
        logo: "/qa_logo.png",
        accent: "cyan",
        tagline: "Eliminate Growth Barriers",
    },
    {
        name: "GROWTH OS",
        image: "/growth_os.jpg",
        description:
            "We design a customized Growth Operating System (Growth OS) tailored to your business's digital maturity. This system creates a foundation for consistent, scalable growth by aligning your brand's presence with your audience's needs and expectations.",
        link: "/products/growth-os",
        logo: "/growth_os_logo.png",
        accent: "blue",
        tagline: "Scale With Precision",
    },
];

const accentColors = {
    cyan: {
        gradient: "from-cyan-400 to-blue-500",
        glow: "rgba(6,182,212,0.35)",
        glowSoft: "rgba(6,182,212,0.12)",
        border: "border-cyan-500/30",
        hoverBg: "hover:bg-cyan-500",
        hoverBorder: "hover:border-cyan-500",
        shadow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]",
        text: "text-cyan-400",
        bg: "bg-cyan-500",
        orb: "bg-cyan-500/10",
    },
    blue: {
        gradient: "from-blue-400 to-purple-500",
        glow: "rgba(59,130,246,0.35)",
        glowSoft: "rgba(59,130,246,0.12)",
        border: "border-blue-500/30",
        hoverBg: "hover:bg-blue-500",
        hoverBorder: "hover:border-blue-500",
        shadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]",
        text: "text-blue-400",
        bg: "bg-blue-500",
        orb: "bg-blue-500/10",
    },
};

/* ─── Animated Character Reveal ─── */
const CharReveal = ({ text, className, progress, start, end }) => {
    const chars = text.split("");
    return (
        <span className={className} aria-label={text}>
            {chars.map((char, i) => (
                <CharSpan
                    key={i}
                    char={char}
                    index={i}
                    total={chars.length}
                    progress={progress}
                    start={start}
                    end={end}
                />
            ))}
        </span>
    );
};

const CharSpan = ({ char, index, total, progress, start, end }) => {
    const charStart = start + (index / total) * (end - start) * 0.6;
    const charEnd = charStart + (end - start) * 0.4;
    const opacity = useTransform(progress, [charStart, charEnd], [0, 1]);
    const y = useTransform(progress, [charStart, charEnd], [40, 0]);

    return (
        <motion.span
            style={{ opacity, y }}
            className="inline-block"
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};

/* ─── Horizontal Animated Line ─── */
const AnimatedLine = ({ progress, start, end, color, className }) => {
    const scaleX = useTransform(progress, [start, end], [0, 1]);
    const opacity = useTransform(progress, [start, end - 0.02], [0, 1]);

    return (
        <motion.div
            style={{ scaleX, opacity }}
            className={`h-[2px] origin-left bg-gradient-to-r ${color} ${className}`}
        />
    );
};

/* ─── Header Overlay (inside sticky viewport, fades out as products appear) ─── */
const HeaderOverlay = ({ scrollProgress }) => {
    const headerOpacity = useTransform(scrollProgress, [0, 0.08], [1, 0]);
    const headerY = useTransform(scrollProgress, [0, 0.08], [0, -60]);
    const headerScale = useTransform(scrollProgress, [0, 0.08], [1, 0.95]);

    return (
        <motion.div
            style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
            className="absolute inset-0 z-25 flex items-center justify-center pointer-events-none"
        >
            <div className="relative px-6 text-center">
                {/* Ambient glows */}
                <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <div className="inline-block mb-5">
                        <span className="px-5 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20 tracking-widest uppercase">
                            What We Build
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
                        OUR{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            PRODUCTS
                        </span>
                    </h2>
                    <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Proprietary frameworks designed to unlock exponential growth for your business.
                    </p>

                    {/* Scroll cue */}
                    <div className="mt-12 flex flex-col items-center gap-2 text-white/30">
                        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

/* ─── Single Product Showcase (used inside the sticky container) ─── */
const ProductShowcase = ({ product, index, scrollProgress }) => {
    const colors = accentColors[product.accent];
    const isFirst = index === 0;

    // Header occupies 0.0 → 0.1 of scroll progress (fading out)
    // Product 0: 0.08 → 0.5  (overlaps slightly with header fade-out)
    // Product 1: 0.5 → 1.0
    const segStart = isFirst ? 0.08 : 0.5;
    const segEnd = isFirst ? 0.5 : 1.0;

    // --- Image transforms ---
    const imgScale = useTransform(
        scrollProgress,
        [segStart, segStart + 0.08, segEnd - 0.08, segEnd],
        [1.2, 1.0, 1.0, 0.95]
    );
    const imgOpacity = useTransform(
        scrollProgress,
        [segStart, segStart + 0.05, segEnd - 0.05, segEnd],
        [0, 1, 1, 0]
    );
    const imgFilter = useTransform(
        scrollProgress,
        [segStart, segStart + 0.06, segEnd - 0.06, segEnd],
        ["blur(8px) brightness(0.4)", "blur(0px) brightness(1)", "blur(0px) brightness(1)", "blur(8px) brightness(0.3)"]
    );

    // --- Clip-path reveal (circle expanding from center) ---
    const clipProgress = useTransform(
        scrollProgress,
        [segStart, segStart + 0.15],
        [0, 100]
    );

    // --- Content transforms ---
    const contentOpacity = useTransform(
        scrollProgress,
        [segStart + 0.03, segStart + 0.1, segEnd - 0.08, segEnd - 0.03],
        [0, 1, 1, 0]
    );
    const contentX = useTransform(
        scrollProgress,
        [segStart + 0.03, segStart + 0.1, segEnd - 0.08, segEnd - 0.03],
        [isFirst ? -60 : 60, 0, 0, isFirst ? -40 : 40]
    );

    // --- Floating elements ---
    const orbY = useTransform(scrollProgress, [segStart, segEnd], ["15%", "-15%"]);
    const orbScale = useTransform(
        scrollProgress,
        [segStart, segStart + 0.1, segEnd - 0.06, segEnd],
        [0.5, 1.3, 1.3, 0.5]
    );
    const orbOpacity = useTransform(
        scrollProgress,
        [segStart, segStart + 0.06, segEnd - 0.06, segEnd],
        [0, 1, 1, 0]
    );

    // --- Vertical accent line draw ---
    const lineScaleY = useTransform(
        scrollProgress,
        [segStart + 0.04, segStart + 0.12],
        [0, 1]
    );
    const lineOpacity = useTransform(
        scrollProgress,
        [segStart + 0.04, segStart + 0.08, segEnd - 0.06, segEnd],
        [0, 0.6, 0.6, 0]
    );

    // --- Product number counter animation ---
    const numOpacity = useTransform(
        scrollProgress,
        [segStart + 0.02, segStart + 0.08, segEnd - 0.06, segEnd - 0.02],
        [0, 1, 1, 0]
    );
    const numY = useTransform(
        scrollProgress,
        [segStart + 0.02, segStart + 0.08],
        [30, 0]
    );

    // Logo pulse
    const logoPulse = useTransform(
        scrollProgress,
        [segStart + 0.05, segStart + 0.1],
        [0.8, 1]
    );
    const logoOpacity = useTransform(
        scrollProgress,
        [segStart + 0.04, segStart + 0.1, segEnd - 0.06, segEnd - 0.02],
        [0, 1, 1, 0]
    );

    // CTA button
    const ctaOpacity = useTransform(
        scrollProgress,
        [segStart + 0.08, segStart + 0.14, segEnd - 0.08, segEnd - 0.03],
        [0, 1, 1, 0]
    );
    const ctaY = useTransform(
        scrollProgress,
        [segStart + 0.08, segStart + 0.14],
        [20, 0]
    );

    const words = product.name.split(" ");
    const firstWord = words[0];
    const restWords = words.slice(1).join(" ");

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* ── Background Image with Clip-Path Reveal ── */}
            <motion.div
                style={{
                    scale: imgScale,
                    opacity: imgOpacity,
                    filter: imgFilter,
                }}
                className="absolute inset-0 origin-center"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                />
            </motion.div>

            {/* ── Cinematic Overlays ── */}
            <motion.div
                style={{ opacity: imgOpacity }}
                className="absolute inset-0 bg-black/50"
            />
            <motion.div
                style={{ opacity: imgOpacity }}
                className={`absolute inset-0 ${
                    isFirst
                        ? "bg-gradient-to-r from-black/90 via-black/50 to-transparent"
                        : "bg-gradient-to-l from-black/90 via-black/50 to-transparent"
                }`}
            />

            {/* ── Grid Pattern ── */}
            <motion.div style={{ opacity: imgOpacity }} className="absolute inset-0 product-grid-bg pointer-events-none" />

            {/* ── Floating Orbs ── */}
            <motion.div
                style={{ y: orbY, scale: orbScale, opacity: orbOpacity }}
                className={`absolute ${isFirst ? "right-[10%] top-[15%]" : "left-[10%] top-[15%]"} w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] pointer-events-none`}
            >
                <div className={`w-full h-full rounded-full ${colors.orb} blur-[100px]`} />
            </motion.div>
            <motion.div
                style={{ y: orbY, scale: orbScale, opacity: orbOpacity }}
                className={`absolute ${isFirst ? "left-[5%] bottom-[10%]" : "right-[5%] bottom-[10%]"} w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] pointer-events-none`}
            >
                <div className={`w-full h-full rounded-full ${colors.orb} blur-[80px]`} />
            </motion.div>

            {/* ── Vertical Accent Line ── */}
            <motion.div
                style={{ scaleY: lineScaleY, opacity: lineOpacity }}
                className={`absolute ${isFirst ? "left-[7%]" : "right-[7%]"} top-[15%] w-[1px] h-[70%] origin-top bg-gradient-to-b ${colors.gradient} hidden lg:block`}
            />

            {/* ── Large Background Number ── */}
            <motion.div
                style={{ opacity: numOpacity, y: numY }}
                className={`absolute ${isFirst ? "right-[8%]" : "left-[8%]"} top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none`}
            >
                <span className="text-[20vw] font-black text-white/[0.03] leading-none tracking-tighter">
                    0{index + 1}
                </span>
            </motion.div>

            {/* ── Content Panel ── */}
            <motion.div
                style={{ x: contentX, opacity: contentOpacity }}
                className={`absolute inset-0 flex items-center ${isFirst ? "justify-start" : "justify-end"}`}
            >
                <div className={`w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex ${isFirst ? "justify-start" : "justify-end"}`}>
                    <div className="product-glass-panel w-full max-w-lg p-8 sm:p-10 lg:p-12 rounded-3xl relative overflow-hidden pointer-events-auto">
                        {/* Inner glow effect */}
                        <div
                            className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none"
                            style={{ background: colors.glowSoft }}
                        />

                        {/* Tagline */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-8 h-[1px] bg-gradient-to-r ${colors.gradient}`} />
                            <span className={`text-xs font-semibold tracking-[0.25em] uppercase ${colors.text}`}>
                                {product.tagline}
                            </span>
                        </div>

                        {/* Logo */}
                        {product.logo && (
                            <motion.div style={{ scale: logoPulse, opacity: logoOpacity }} className="mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center"
                                    style={{ boxShadow: `0 0 30px ${colors.glowSoft}` }}
                                >
                                    <Image
                                        src={product.logo}
                                        width={40}
                                        height={40}
                                        alt={`${product.name} logo`}
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Title with character animation */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mb-1 tracking-tight">
                            <CharReveal
                                text={firstWord}
                                className="text-white drop-shadow-lg"
                                progress={scrollProgress}
                                start={segStart + 0.04}
                                end={segStart + 0.1}
                            />
                        </h2>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mb-4 tracking-tight">
                            <CharReveal
                                text={restWords}
                                className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}
                                progress={scrollProgress}
                                start={segStart + 0.06}
                                end={segStart + 0.12}
                            />
                        </h2>

                        {/* Animated accent line */}
                        <AnimatedLine
                            progress={scrollProgress}
                            start={segStart + 0.06}
                            end={segStart + 0.12}
                            color={colors.gradient}
                            className="w-20 mb-6 rounded-full"
                        />

                        {/* Description */}
                        <motion.p
                            style={{
                                opacity: useTransform(
                                    scrollProgress,
                                    [segStart + 0.06, segStart + 0.12, segEnd - 0.08, segEnd - 0.03],
                                    [0, 1, 1, 0]
                                ),
                                y: useTransform(
                                    scrollProgress,
                                    [segStart + 0.06, segStart + 0.12],
                                    [15, 0]
                                ),
                            }}
                            className="text-gray-300/90 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
                        >
                            {product.description}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div style={{ opacity: ctaOpacity, y: ctaY }}>
                            <Link
                                href={product.link}
                                className={`group/btn inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold rounded-full border backdrop-blur-sm transition-all duration-500 ${colors.border} text-white ${colors.hoverBg} ${colors.hoverBorder} hover:text-black ${colors.shadow}`}
                            >
                                Explore Product
                                <svg
                                    className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

/* ─── Scroll Progress Dots ─── */
const ScrollDots = ({ scrollProgress }) => {
    const opacity = useTransform(scrollProgress, [0.08, 0.12, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-1"
        >
            {products.map((p, i) => {
                const dotStart = i === 0 ? 0.08 : 0.5;
                const dotEnd = i === 0 ? 0.5 : 1.0;
                return <ScrollDot key={i} index={i} accent={p.accent} scrollProgress={scrollProgress} dotStart={dotStart} dotEnd={dotEnd} />;
            })}
        </motion.div>
    );
};

const ScrollDot = ({ index, accent, scrollProgress, dotStart, dotEnd }) => {
    const colors = accentColors[accent];
    const isActive = useTransform(
        scrollProgress,
        [dotStart, dotStart + 0.05, dotEnd - 0.05, dotEnd],
        [0.3, 1, 1, 0.3]
    );
    const dotScale = useTransform(
        scrollProgress,
        [dotStart, dotStart + 0.05, dotEnd - 0.05, dotEnd],
        [0.6, 1, 1, 0.6]
    );
    const lineScaleY = useTransform(
        scrollProgress,
        [dotStart + 0.05, dotEnd - 0.05],
        [0, 1]
    );

    return (
        <div className="flex flex-col items-center">
            <motion.span
                style={{ opacity: isActive, scale: dotScale }}
                className="text-[10px] font-bold tracking-[0.2em] text-white mb-2"
            >
                0{index + 1}
            </motion.span>
            <motion.div
                style={{ opacity: isActive, scale: dotScale }}
                className={`w-2.5 h-2.5 rounded-full border-2 ${colors.border} mb-1`}
                // Inner fill
            >
                <motion.div
                    style={{ opacity: isActive }}
                    className={`w-full h-full rounded-full ${colors.bg}`}
                />
            </motion.div>
            {index < products.length - 1 && (
                <motion.div
                    style={{ scaleY: lineScaleY, opacity: isActive }}
                    className={`w-[1px] h-12 origin-top bg-gradient-to-b ${colors.gradient} my-1`}
                />
            )}
        </div>
    );
};

/* ─── Main Products Component ─── */
const Our_Products = () => {
    // The sticky scroll container — header is now INSIDE this container
    const stickyContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stickyContainerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div className="relative bg-black">
            {/* ── Sticky Parallax Scroll Container ── */}
            {/*
                Header + Products all live inside one scroll-tracked container.
                Header fades out at 0-8% progress, products occupy the rest.
                Total height = 250vh → 150vh scrollable distance.
            */}
            <div
                ref={stickyContainerRef}
                className="relative"
                style={{ height: "250vh" }}
            >
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {/* Header overlay — visible initially, fades as you scroll */}
                    <HeaderOverlay scrollProgress={scrollYProgress} />

                    {/* Product layers stack on top of each other; visibility controlled by scroll */}
                    {products.map((product, index) => (
                        <ProductShowcase
                            key={index}
                            product={product}
                            index={index}
                            scrollProgress={scrollYProgress}
                        />
                    ))}

                    {/* Scroll progress dots */}
                    <ScrollDots scrollProgress={scrollYProgress} />

                    {/* Top vignette */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
                    {/* Bottom vignette */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
                </div>
            </div>

            {/* Bottom gradient to merge with next homepage section */}
            <div className="h-16 bg-gradient-to-b from-black to-black pointer-events-none" />
        </div>
    );
};

export default Our_Products;