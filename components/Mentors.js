"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllMentors } from '@/lib/db';
import AnimatedHeadings from './shared/AnimatedHeadings';
import { FaLinkedinIn, FaBrain, FaCrosshairs, FaLightbulb } from 'react-icons/fa';

const iconMap = {
    'linkedin': <FaLinkedinIn className="w-3 h-3" />,
    'ai': <FaBrain className="w-3 h-3" />,
    'strategy': <FaCrosshairs className="w-3 h-3" />,
    'innovation': <FaLightbulb className="w-3 h-3" />
};

const mockMentors = [
    {
        id: '1',
        name: 'James Reynolds',
        specialty: 'Strategy & Growth',
        iconType: 'strategy',
        image: '/mentor_1.png'
    },
    {
        id: '2',
        name: 'Elena Rostova',
        specialty: 'Business Strategy',
        iconType: 'innovation',
        image: '/mentor_2.png'
    },
    {
        id: '3',
        name: 'Dr. Alan Turing',
        specialty: 'AI Systems',
        iconType: 'ai',
        image: '/mentor_3.png'
    },
    {
        id: '4',
        name: 'Samantha Vance',
        specialty: 'LinkedIn & Content',
        iconType: 'linkedin',
        image: '/mentor_4.png'
    }
];

const Mentors = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const fetchMentors = async () => {
            const data = await getAllMentors();
            if (data && data.length > 0) {
                setMentors(data);
            } else {
                setMentors(mockMentors);
            }
        };
        fetchMentors();
    }, []);

    return (
        <section className="py-24 md:py-32 px-6 overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <AnimatedHeadings triggerOnScroll={true}>
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="px-5 py-2 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4ec8ef]/20 tracking-widest uppercase">
                                Mentorship
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Mentors Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">Guide</span> Our Approach
                        </h2>
                    </div>
                </AnimatedHeadings>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {mentors.slice(0, 8).map((mentor, index) => (
                        <motion.div
                            key={mentor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                            className="group flex flex-col items-center text-center cursor-pointer h-full"
                        >
                            <div className="w-full relative aspect-[4/5] rounded-[16px] overflow-hidden mb-5 border border-white/5 bg-[#0f111a] shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow duration-300">
                                {mentor.image && (
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                )}
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 transition-colors duration-200 group-hover:text-[#60a5fa]">
                                {mentor.name}
                            </h3>
                            
                            {mentor.specialty && (
                                <div className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-400">
                                    <span className="text-[#60a5fa] opacity-80">
                                        {iconMap[mentor.iconType] || <FaLightbulb className="w-3 h-3" />}
                                    </span>
                                    {mentor.specialty}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {mentors.length > 8 && (
                    <div className="mt-16 text-center">
                        <button className="text-[#60a5fa] font-semibold text-sm hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto group">
                            View All Mentors
                            <span className="transform transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Mentors;
