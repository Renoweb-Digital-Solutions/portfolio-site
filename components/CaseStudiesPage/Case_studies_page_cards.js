"use client"
import { useState } from "react";
import { motion } from "motion/react"
import Link from "next/link";

const Case_studies_page_cards = ({ studies }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300 h-full flex flex-col overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* Category Badge */}
            <div className="relative z-10 mb-4">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                    {studies.category}
                </span>
            </div>

            {/* Title */}
            <Link href={`/case-studies/${studies.id}`} className="relative z-10 flex-grow">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {studies.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {studies.about_client}
                </p>
            </Link>

            {/* Learn More Link */}
            <Link
                href={`/case-studies/${studies.id}`}
                className="relative z-10 mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition group"
            >
                Learn More
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </motion.div>
    );
};

export default Case_studies_page_cards;