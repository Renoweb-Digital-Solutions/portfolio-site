"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LeadGenRecap({ data }) {
    return (
        <div className="max-w-7xl mx-auto space-y-24">
            {/* Header with Period */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-600/40 rounded-full px-6 py-3 mb-4">
                    <span className="text-purple-400 font-bold">{data.period}</span>
                </div>
            </motion.div>

            {/* Industries Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Industries We Have Served: Lead Generation
                    </span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {data.industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-600/50 transition-all duration-300 group"
                        >
                            <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                {industry}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Clients Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Clients We Have Served <span className="text-purple-400">Lead Generation</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 flex items-center justify-center hover:border-purple-600/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative w-full h-28 md:h-32 rounded-lg flex items-center justify-center">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    sizes="(max-width: 768px) 140px, 160px"
                                    className="object-contain brightness-125 contrast-125 saturate-110 transition-all duration-300 md:group-hover:brightness-150"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Results Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Some <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Results</span>
                </h2>
                <div className="space-y-16">
                    {data.results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Client Tag */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black px-6 py-2 rounded-full mb-6 shadow-lg shadow-purple-600/50"
                            >
                                {result.client}
                            </motion.div>

                            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-12 hover:border-purple-600/50 transition-all duration-300">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Left: Stats */}
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-purple-400">{result.title}</h3>
                                        <p className="text-gray-400 mb-8 text-lg">{result.period}</p>

                                        <div className="space-y-4">
                                            {result.stats.map((stat, statIndex) => (
                                                <motion.div
                                                    key={statIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: statIndex * 0.1 }}
                                                    className="bg-purple-600/10 border border-purple-600/30 rounded-xl p-4 hover:bg-purple-600/20 transition-all duration-300 group"
                                                >
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex-1">
                                                            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                                                        </div>
                                                        <div className="text-2xl md:text-3xl font-black text-purple-400 group-hover:scale-110 transition-transform">
                                                            {stat.value}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="relative group"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                        <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                                            <div className="aspect-square bg-gray-800/50 flex items-center justify-center">
                                                <Image
                                                    src={result.image}
                                                    alt={result.title}
                                                    width={500}
                                                    height={500}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Our Lead Generation is Best Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Why Our Lead Generation is <span className="text-purple-400">Best</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.whyBest.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-purple-600/50 transition-all duration-300 group overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-xl font-black text-white shadow-lg shadow-purple-600/50">
                                        {item.number}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}