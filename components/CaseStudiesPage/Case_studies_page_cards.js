"use client"
import { useState } from "react";
import { motion } from "motion/react"
import Link from "next/link";
import Image from "next/image";

const Case_studies_page_cards = ({ studies }) => {
    const [isHovered, setIsHovered] = useState(false);

    const AuthorAvatars = ({ author, coAuthor }) => {
        if (!author) return null;

        const Avatar = ({ person, isStacked = false, zIndex = 0 }) => {
            const initials = person.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);

            return (
                <div
                    className={`relative ${isStacked ? '-ml-3' : ''}`}
                    style={{ zIndex }}
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 border-2 border-gray-800 flex items-center justify-center overflow-hidden group-hover:border-blue-600/50 transition">
                        {person.image ? (
                            <Image
                                src={person.image}
                                alt={person.name}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        ) : (
                            <span className="text-xs font-bold text-blue-400">
                                {initials}
                            </span>
                        )}
                    </div>
                </div>
            );
        };

        return (
            <div className="flex items-center">
                <Avatar person={author} zIndex={2} />
                {coAuthor && <Avatar person={coAuthor} isStacked={true} zIndex={1} />}
            </div>
        );
    };


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
            <div className="relative z-10 mt-6 flex items-center justify-between">

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

                {studies.author && (
                    <AuthorAvatars author={studies.author} coAuthor={studies.coAuthor} />
                )}
            </div>

        </motion.div>
    );
};

export default Case_studies_page_cards;