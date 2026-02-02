"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FoundersPage() {
    const [activeFounder, setActiveFounder] = useState(0);
    const [dots, setDots] = useState([]);

    const founders = [
        {
            name: "Gourab Majumder",
            role: "Founder & CEO",
            image: "/profile_photos/gourab_majumder.jpg",
            bio: "With over 15 years of experience in digital transformation, John leads Renoweb with a vision to revolutionize how businesses approach growth. His expertise in strategic planning and business development has helped hundreds of companies scale exponentially.",
            quote: "Innovation isn't just about technology—it's about reimagining what's possible for your business.",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            expertise: ["Strategic Planning", "Business Development", "Digital Transformation", "Leadership"],
            achievements: [
                "Led 100+ successful business transformations",
                "Featured in Forbes 30 Under 30",
                "TEDx Speaker on Digital Innovation",
                "Former VP at Fortune 500 Tech Company"
            ]
        },
        // {
        //     name: "Sarah Chen",
        //     role: "Co-Founder & CTO",
        //     image: "/founders/founder2.jpg", // Placeholder - add actual images
        //     bio: "Sarah brings deep technical expertise and a passion for building scalable systems. As CTO, she oversees all technical operations and product development, ensuring our solutions are both innovative and practical.",
        //     quote: "The best technology is invisible—it just makes everything work better.",
        //     linkedin: "https://linkedin.com",
        //     twitter: "https://twitter.com",
        //     expertise: ["Software Architecture", "AI/ML Integration", "Product Development", "Team Building"],
        //     achievements: [
        //         "Built systems serving 10M+ users",
        //         "Published researcher in AI/ML",
        //         "Former Tech Lead at Google",
        //         "Multiple successful exits"
        //     ]
        // },
        // {
        //     name: "Michael Rodriguez",
        //     role: "Co-Founder & CMO",
        //     image: "/founders/founder3.jpg", // Placeholder - add actual images
        //     bio: "Michael is a growth marketing expert who has helped scale multiple startups from zero to millions in revenue. His data-driven approach to marketing combines creativity with analytics to deliver exceptional results.",
        //     quote: "Great marketing isn't about being everywhere—it's about being unforgettable.",
        //     linkedin: "https://linkedin.com",
        //     twitter: "https://twitter.com",
        //     expertise: ["Growth Marketing", "Brand Strategy", "Performance Marketing", "Analytics"],
        //     achievements: [
        //         "Scaled 5+ companies to $10M+ ARR",
        //         "Built marketing teams of 50+ people",
        //         "Award-winning campaign creator",
        //         "Keynote speaker at major conferences"
        //     ]
        // }
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Collaborative Spirit",
            description: "We believe the best solutions come from diverse perspectives working together."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Relentless Innovation",
            description: "We're never satisfied with the status quo—there's always a better way."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Impact Over Everything",
            description: "We measure success by the tangible results we deliver for our clients."
        }
    ];

    useEffect(() => {
        setDots(
            Array.from({ length: 15 }).map(() => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 3}s`,
                duration: `${2 + Math.random() * 2}s`,
            }))
        );
    }, []);

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dots.map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                        style={{
                            left: dot.left,
                            top: dot.top,
                            animationDelay: dot.animationDelay,
                            animationDuration: dot.animationDuration,
                        }}
                    />
                ))}

            </div>

            {/* Gradient Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

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
                            Meet the Team
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                    >
                        The Minds Behind
                        <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Renoweb
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        A diverse team of innovators, strategists, and builders united by a shared mission: to transform businesses through cutting-edge solutions and unwavering dedication to client success.
                    </motion.p>
                </div>
            </section>

            {/* Founders Showcase */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Founder Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {founders.map((founder, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFounder(index)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFounder === index
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                                    : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-blue-600 hover:text-white'
                                    }`}
                            >
                                {founder.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Founder Details */}
                    <motion.div
                        key={activeFounder}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-start"
                    >
                        {/* Left: Image & Quick Info */}
                        <div className="space-y-6">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition"></div>
                                <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 overflow-hidden">
                                    {/* Placeholder for founder image */}
                                    <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mb-6 flex items-center justify-center">
                                        <Image
                                            src={founders[activeFounder].image}
                                            alt={founders[activeFounder].name}
                                            width={200}
                                            height={200}
                                            className="rounded-2xl object-cover w-full h-full"
                                        />
                                    </div>

                                    <h2 className="text-3xl font-bold mb-2">{founders[activeFounder].name}</h2>
                                    <p className="text-blue-400 text-lg mb-6">{founders[activeFounder].role}</p>

                                    {/* Social Links */}
                                    <div className="flex gap-3">
                                        <a
                                            href={founders[activeFounder].linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/40 flex items-center justify-center hover:bg-blue-600/30 transition group"
                                        >
                                            <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M4.5 3C3.67157 3 3 3.67157 3 4.5V15.5C3 16.3284 3.67157 17 4.5 17H15.5C16.3284 17 17 16.3284 17 15.5V4.5C17 3.67157 16.3284 3 15.5 3H4.5ZM8 8V14H6V8H8ZM8 6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5C7.55228 5 8 5.44772 8 6ZM14 13.5V14H12V11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11V14H8V8H10V8.5C10.3137 8.08839 10.8324 7.85714 11.4286 7.85714C12.5964 7.85714 13.5 8.76071 13.5 9.92857V13.5H14Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={founders[activeFounder].twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/40 flex items-center justify-center hover:bg-blue-600/30 transition group"
                                        >
                                            <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Expertise Tags */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                                <h3 className="text-lg font-bold mb-4">Areas of Expertise</h3>
                                <div className="flex flex-wrap gap-2">
                                    {founders[activeFounder].expertise.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-sm border border-blue-600/30"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Bio & Achievements */}
                        <div className="space-y-6">
                            {/* Quote */}
                            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-2xl p-8">
                                <svg className="w-10 h-10 text-blue-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-xl text-gray-200 italic leading-relaxed">
                                    {founders[activeFounder].quote}
                                </p>
                            </div>

                            {/* Bio */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4">Biography</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {founders[activeFounder].bio}
                                </p>
                            </div>

                            {/* Achievements */}
                            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
                                <div className="space-y-4">
                                    {founders[activeFounder].achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-300 flex-1">{achievement}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Values */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Drives Us</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            The principles that unite our founding team and guide our company culture
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600/50 transition group text-center"
                            >
                                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                                    <div className="text-blue-400">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-3xl p-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">Want to Work With Us?</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center justify-center gap-2 group">
                                View Open Positions
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                                Learn About Our Culture
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}