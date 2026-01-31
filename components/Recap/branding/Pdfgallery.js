"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PDFGallery({ title, pdfs }) {
    return (
        <div className="space-y-8">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-orange-400"
            >
                {title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfs.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl p-8 hover:border-orange-600/50 transition-all duration-300 group cursor-pointer overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative z-10 flex flex-col items-center gap-4">
                            {/* PDF Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/50 group-hover:scale-110 transition-transform">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* PDF Name */}
                            <div className="text-center">
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                    {item.name}
                                </h4>
                                <div className="flex items-center gap-2 text-sm text-gray-400 justify-center">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Download PDF</span>
                                </div>
                            </div>

                            {/* Download Badge */}
                            <div className="absolute top-4 right-4 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-xs font-bold border border-orange-600/30">
                                PDF
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}