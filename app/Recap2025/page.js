"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEORecap from '@/components/Recap/SEORecap';
import recapData from '../../components/data/recapData';
import LeadGenRecap from '@/components/Recap/LeadGenRecap';
import BrandingRecap from '@/components/Recap/BrandingRecap';
import Link from 'next/link';
// import SEORecap from './recap-sections/SEORecap';
// import LeadGenRecap from './recap-sections/LeadGenRecap';
// import BrandingRecap from './recap-sections/BrandingRecap';

export default function RecapPage() {
    const [activeCategory, setActiveCategory] = useState('seo');

    const categories = [
        { id: 'seo', label: 'SEO', gradient: 'from-blue-500 to-cyan-500' },
        { id: 'leadGeneration', label: 'Lead Generation', gradient: 'from-purple-500 to-pink-500' },
        { id: 'branding', label: 'Branding', gradient: 'from-orange-500 to-red-500' }
    ];

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Sparkly Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[
                    { left: '15%', top: '25%', delay: '0s', duration: '3s' },
                    { left: '35%', top: '60%', delay: '0.5s', duration: '2.5s' },
                    { left: '55%', top: '20%', delay: '1s', duration: '3.2s' },
                    { left: '75%', top: '70%', delay: '1.5s', duration: '2.8s' },
                    { left: '85%', top: '40%', delay: '2s', duration: '3.5s' },
                    { left: '25%', top: '80%', delay: '2.5s', duration: '2.2s' },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative z-10 pt-32 pb-20 px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Year in Review
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
                        2025 <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">RECAP</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of our achievements, innovations, and the incredible results we&apos;ve delivered for our clients.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryChange(category.id)}
                                className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden group ${activeCategory === category.id
                                    ? 'bg-gradient-to-r ' + category.gradient + ' text-white scale-105 shadow-lg shadow-blue-600/50'
                                    : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-blue-600 hover:text-white'
                                    }`}
                            >
                                {activeCategory === category.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                                        style={{ borderRadius: '0.75rem' }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{category.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Content Sections */}
                <AnimatePresence mode="wait">
                    {activeCategory === 'seo' && (
                        <motion.div
                            key="seo"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <SEORecap data={recapData.seo} />
                        </motion.div>
                    )}

                    {activeCategory === 'leadGeneration' && (
                        <motion.div
                            key="leadGen"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <LeadGenRecap data={recapData.leadGeneration} />
                        </motion.div>
                    )}

                    {activeCategory === 'branding' && (
                        <motion.div
                            key="branding"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <BrandingRecap data={recapData.branding} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mt-32 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-800/20 border border-blue-600/40 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Create Your Own Success Story?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Let&apos;s make 2026 even more remarkable together.
                            </p>
                            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center justify-center gap-2 group">
                                Get Started Now
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}