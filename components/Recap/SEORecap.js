"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SEORecap({ data }) {
    return (
        <div className="max-w-7xl mx-auto space-y-24">
            {/* Industries Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Industries We Have Served: SEO
                    </span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {data.industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all duration-300 group"
                        >
                            <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    Clients We Have Given <span className="text-blue-400">SEO SERVICE</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 flex items-center justify-center hover:border-blue-600/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                    Some <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Results</span>
                </h2>
                <div className="space-y-20">
                    {data.results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-12 hover:border-blue-600/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-blue-400">{result.title}</h3>

                            {/* Before/After Images */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                                        <div className="bg-red-600/20 text-red-400 text-sm font-bold px-4 py-2 border-b border-gray-800">
                                            BEFORE
                                        </div>
                                        <div className="aspect-video bg-gray-800/50 flex items-center justify-center">
                                            <Image
                                                src={result.beforeImage}
                                                alt="Before"
                                                width={500}
                                                height={300}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                                        <div className="bg-green-600/20 text-green-400 text-sm font-bold px-4 py-2 border-b border-gray-800">
                                            AFTER
                                        </div>
                                        <div className="aspect-video bg-gray-800/50 flex items-center justify-center">
                                            <Image
                                                src={result.afterImage}
                                                alt="After"
                                                width={500}
                                                height={300}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-4 justify-center">
                                {result.stats.map((stat, statIndex) => (
                                    <motion.div
                                        key={statIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: statIndex * 0.1 }}
                                        className="bg-blue-600/10 border border-blue-600/30 rounded-xl px-6 py-4 text-center"
                                    >
                                        <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Why Our SEO is Best Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Why Our SEO is <span className="text-blue-400">Best</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {data.whyBest.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300 group overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-blue-600/50">
                                        {item.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed pl-16">
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