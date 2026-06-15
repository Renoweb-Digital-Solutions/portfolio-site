"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Animation Variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
    },
};

/* ─── Animated Section Wrapper ─── */
const AnimatedSection = ({ children, className, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    );
};

export default function MainProductPage() {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            id: 'growth',
            name: 'GROWTH OS',
            tagline: 'Unlock Your Business\'s Full Potential',
            description: 'The ultimate operating system for scaling success. This game-changing framework guides you through seven pivotal stages to navigate complexities and achieve unparalleled success.',
            gradient: 'from-[#4ec8ef] via-[#308fef] to-[#4460ef]',
            logo: '/growth_os_logo.png',
            features: [
                'Listen to Market Data',
                'Analyze Insights',
                'Strategize Roadmap',
                'Customize Approach',
                'Deploy with Precision',
                'Measure Progress',
                'Unlock Value'
            ],
            link: '/products/growth-os'
        },
        {
            id: 'quantum',
            name: 'QUANTUM ACCELERATOR',
            tagline: 'Revolutionize Your Business Growth',
            description: 'The cutting-edge program designed to catapult your success. This transformative framework propels you forward by converging strategy, technology, and innovation.',
            gradient: 'from-[#308fef] via-[#4460ef] to-[#023dbb]',
            logo: '/qa_logo.png',
            features: [
                'Realign Digital Presence',
                'Revitalize Corporate Culture',
                'Reimagine Brand Recognition',
                'Resonate with Messaging',
                'Reinforce Online Reputation',
                'Reoptimize Digital Strategy',
                'Reengage Community',
                'Reignite Growth'
            ],
            link: '/products/quantum-accelerator'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated Background Particles */}
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
                    { left: '50%', top: '5%', delay: '2.9s', duration: '2.9s' }
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#4ec8ef] rounded-full animate-pulse"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration
                        }}
                    />
                ))}
            </div>

            {/* Gradient Blobs */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-[#4460ef]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#308fef]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4ec8ef]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative z-10">
                <AnimatedSection className="max-w-6xl mx-auto text-center">
                    <motion.div variants={fadeUp} className="inline-block mb-6 relative">
                        <div className="absolute inset-0 bg-[#4460ef]/20 blur-xl animate-pulse"></div>
                        <span className="relative px-6 py-2 bg-[#4460ef]/20 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4460ef]/30">
                            Transformative Solutions
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        Our
                        <span className="bg-gradient-to-r from-[#4ec8ef] via-[#308fef] to-[#4460ef] bg-clip-text text-transparent animate-pulse"> Products</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Discover game-changing frameworks designed to accelerate your business growth and unlock unprecedented success.
                    </motion.p>
                </AnimatedSection>
            </section>

            {/* Products Grid */}
            <section className="py-20 px-6 relative z-10">
                <AnimatedSection className="max-w-6xl mx-auto grid grid-cols-1 gap-12">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            variants={fadeUp}
                            custom={idx}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            className="relative group"
                            whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}></div>

                            {/* Card */}
                            <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 hover:border-[#4460ef]/50 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center gap-12">
                                {/* Animated Corner Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4460ef]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                {/* Sparkle Effect */}
                                {hoveredProduct === product.id && (
                                    <>
                                        <div className="absolute top-10 right-10 w-2 h-2 bg-[#4ec8ef] rounded-full animate-ping"></div>
                                        <div className="absolute top-20 right-24 w-1 h-1 bg-[#308fef] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                        <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-[#4460ef] rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                                    </>
                                )}

                                {/* Left Logo */}
                                <div className="flex-shrink-0 relative z-10 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-black/20 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors">
                                    <Image
                                        src={product.logo}
                                        width={200}
                                        height={200}
                                        alt={`${product.name} logo`}
                                        className="object-contain"
                                    />
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    {/* Product Name */}
                                    <h2 className={`text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                                        {product.name}
                                    </h2>

                                    {/* Tagline */}
                                    <p className="text-lg md:text-xl font-semibold text-gray-300 mb-6 group-hover:text-white transition-colors">
                                        {product.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
                                        {product.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {product.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                                className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                                            >
                                                <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#4ec8ef] rounded-full group-hover:animate-pulse"></div>
                                                <span>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={product.link}
                                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${product.gradient} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#4460ef]/50 group-hover:scale-105`}
                                    >
                                        Explore {product.id === 'quantum' ? 'Quantum Accelerator' : 'Growth OS'}
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatedSection>
            </section>

            {/* Comparison Section */}
            <section className="py-20 px-6 relative z-10">
                <AnimatedSection className="max-w-5xl mx-auto">
                    <motion.div variants={fadeUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Which One Is Right for You?</h2>
                        <p className="text-gray-400 text-lg">Both frameworks are designed to transform your business, but serve different needs.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                            className="bg-gradient-to-br from-[#308fef]/10 via-[#4460ef]/10 to-[#023dbb]/10 border border-[#308fef]/30 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/qa_logo.png"
                                        width={60}
                                        height={60}
                                        alt="Quantum Accelerator logo"
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold">Quantum Accelerator</h3>
                            </div>

                            <p className="text-gray-300 mb-4">Perfect for businesses looking to:</p>
                            <ul className="space-y-2 text-gray-400">
                                {["Transform their digital presence", "Unlock new revenue streams", "Build emotional brand connections"].map((item, i) => (
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
                            className="bg-gradient-to-br from-[#4ec8ef]/10 to-[#308fef]/10 border border-[#4ec8ef]/30 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center">
                                    <Image
                                        src="/growth_os_logo.png"
                                        width={50}
                                        height={50}
                                        alt="Growth OS logo"
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold">Growth OS</h3>
                            </div>

                            <p className="text-gray-300 mb-4">Ideal for leaders who want to:</p>
                            <ul className="space-y-2 text-gray-400">
                                {["Scale with a proven framework", "Navigate complexities of growth", "Achieve exponential success"].map((item, i) => (
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
            </section >

            <section className="py-20 px-6 relative z-10" >
                <AnimatedSection className="max-w-4xl mx-auto text-center">
                    <motion.div
                        variants={scaleIn}
                        className="relative bg-gradient-to-r from-[#4ec8ef]/20 via-[#308fef]/20 to-[#4460ef]/20 border border-[#308fef]/40 rounded-3xl p-12 overflow-hidden"
                    >
                        {/* Animated background shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4ec8ef]/10 to-transparent animate-shimmer"></div>

                        <div className="relative z-10">
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Transform Your Business?
                            </motion.h2>
                            <motion.p variants={fadeUp} custom={1} className="text-xl text-gray-300 mb-8">
                                Choose your path to exponential growth and start your transformation today.
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
            </section >

            <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
        </div >
    );
}