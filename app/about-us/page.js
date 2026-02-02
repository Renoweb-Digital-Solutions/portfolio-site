"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Innovation First",
            description: "We embrace cutting-edge technologies and creative solutions to drive unprecedented growth for our clients."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Client Partnership",
            description: "Your success is our success. We build lasting relationships based on trust, transparency, and shared goals."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Results Driven",
            description: "We measure our impact through tangible outcomes—increased revenue, enhanced brand presence, and sustainable growth."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Continuous Evolution",
            description: "The digital landscape never stops changing, and neither do we. We stay ahead of trends to keep you competitive."
        }
    ];

    const stats = [
        { number: "100+", label: "Successful Projects" },
        { number: "50+", label: "Happy Clients" },
        { number: "5+", label: "Years of Excellence" },
        { number: "95%", label: "Client Retention Rate" }
    ];

    const timeline = [
        {
            year: "2019",
            title: "The Beginning",
            description: "Renoweb was founded with a vision to transform how businesses approach digital growth."
        },
        {
            year: "2020",
            title: "Expansion",
            description: "Launched our signature Growth OS framework, helping businesses scale systematically."
        },
        {
            year: "2022",
            title: "Innovation",
            description: "Introduced Quantum Accelerator, revolutionizing business transformation strategies."
        },
        {
            year: "2024",
            title: "Global Reach",
            description: "Expanded our services globally, serving clients across continents with proven results."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Our Story
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                    >
                        Transforming Businesses
                        <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Through Innovation
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        At Renoweb, we don't just provide services—we architect transformation. Our mission is to empower businesses to unlock their full potential through data-driven strategies, innovative frameworks, and unwavering commitment to excellence.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-600/50 transition group"
                            >
                                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-3xl p-10"
                    >
                        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To revolutionize business growth by delivering innovative, data-driven solutions that create measurable impact. We exist to help companies break through barriers, scale sustainably, and achieve extraordinary results in an ever-evolving digital landscape.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-600/30 rounded-3xl p-10"
                    >
                        <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To become the global leader in business transformation, recognized for our ability to turn ambitious visions into reality. We envision a future where every business, regardless of size, has access to world-class growth strategies and the tools to execute them flawlessly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            These principles guide everything we do, from strategy to execution
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600/50 transition group"
                            >
                                <div className="text-blue-400 mb-4 group-hover:scale-110 transition">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
                        <p className="text-gray-400 text-lg">
                            From humble beginnings to global impact
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600/30 md:-translate-x-1/2"></div>

                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative mb-12"
                            >
                                {/* Container for positioning */}
                                <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className="md:w-[calc(50%-2rem)] w-full">
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-[1.9rem] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 bg-blue-600 rounded-full border-[3px] border-black z-10`}></div>

                                        {/* Card */}
                                        <div className="ml-16 md:ml-0 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600/50 transition">
                                            <div className="text-blue-400 font-bold text-3xl mb-2">{item.year}</div>
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-3xl p-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's work together to unlock your company's full potential and achieve extraordinary growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center justify-center gap-2 group">
                                Get Started
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/our-team" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                                Meet Our Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}