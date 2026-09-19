"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllCommunities } from '@/lib/db';
import AnimatedHeadings from './shared/AnimatedHeadings';

const mockCommunities = [
    {
        id: '1',
        name: 'Tech Founders Hub',
        subtitle: 'by Alex Mercer',
        category: 'Technology',
        image: '/community_logo_tech.png'
    },
    {
        id: '2',
        name: 'Global Business Strategy',
        subtitle: 'by Sarah Chen',
        category: 'Business',
        image: '/community_logo_bus.png'
    },
    {
        id: '3',
        name: 'AI Innovators',
        subtitle: 'Technology Network',
        category: 'Technology',
        image: '/community_logo_tech.png'
    },
    {
        id: '4',
        name: 'Venture Leaders',
        subtitle: 'by David Cohen',
        category: 'Business',
        image: '/community_logo_bus.png'
    },
    {
        id: '5',
        name: 'Future Web Alliance',
        subtitle: 'Technology',
        category: 'Technology',
        image: '/community_logo_tech.png'
    }
];

const Communities = () => {
    const [communities, setCommunities] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const fetchCommunities = async () => {
            const data = await getAllCommunities();
            if (data && data.length > 0) {
                setCommunities(data);
            } else {
                setCommunities(mockCommunities);
            }
        };
        fetchCommunities();
    }, []);

    const categories = ['All', ...new Set(communities.map(c => c.category).filter(Boolean))];

    const filteredCommunities = activeCategory === 'All'
        ? communities
        : communities.filter(c => c.category === activeCategory);

    return (
        <section className="py-24 md:py-32 px-6 overflow-hidden relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <AnimatedHeadings triggerOnScroll={true}>
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <span className="px-5 py-2 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4ec8ef]/20 tracking-widest uppercase">
                                Our Network
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Communities We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">Grow</span> With
                        </h2>
                    </div>
                </AnimatedHeadings>

                {/* Category Switcher */}
                <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-10 md:mb-16 gap-3 hide-scrollbar snap-x">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`snap-center shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#4f46e5] border-transparent text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                                    : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredCommunities.slice(0, 8).map((community, index) => (
                            <motion.div
                                layout
                                key={community.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20
                                }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group bg-[#0f111a] border border-white/5 rounded-[16px] p-[32px] md:p-[40px] flex flex-col items-center justify-center text-center shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-white/10 transition-colors"
                            >
                                <div className="relative w-16 h-16 mb-6">
                                    {community.image && (
                                        <Image 
                                            src={community.image} 
                                            alt={community.name} 
                                            fill 
                                            className="object-contain filter group-hover:brightness-110 transition-all duration-300" 
                                        />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                                    {community.name}
                                </h3>
                                {community.subtitle && (
                                    <p className="text-sm text-gray-400 font-medium">
                                        {community.subtitle}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCommunities.length > 8 && (
                    <div className="mt-16 text-center">
                        <button className="text-[#60a5fa] font-semibold text-sm hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto group">
                            View All Communities
                            <span className="transform transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                )}
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Communities;
