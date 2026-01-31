"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import DesignGallery from './branding/Designgallery';
import { brandingDesignData } from '../data/brandingDesignData';
import InfographicsCarousel from './branding/InfographicsCarousel';
import PDFDownloadButton from '../shared/PDFDownloadButton';


export default function BrandingRecap({ data }) {
    return (
        <div className="max-w-7xl mx-auto space-y-24">
            {/* Industries Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        Industries We Have Served: Branding Design
                    </span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {data.industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-orange-600/50 transition-all duration-300 group"
                        >
                            <div className="text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
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
                    Clients We Have Given <span className="text-orange-400">Branding Design</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 flex items-center justify-center hover:border-orange-600/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

            {/* Results Section - Before/After Transformations */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Some <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Results</span>
                </h2>
                <div className="space-y-12">
                    {data.results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-bold text-orange-400 text-center">{result.title}</h3>

                            {/* Before/After Row - Portrait Images Side by Side */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Before */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                                        <div className="bg-red-600/20 text-red-400 text-sm font-bold px-4 py-2 border-b border-gray-800 text-center">
                                            BEFORE
                                        </div>
                                        <div className="aspect-[3/4] bg-gray-800/50 flex items-center justify-center">
                                            <Image
                                                src={result.beforeImage}
                                                alt="Before"
                                                width={400}
                                                height={533}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* After */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                                        <div className="bg-green-600/20 text-green-400 text-sm font-bold px-4 py-2 border-b border-gray-800 text-center">
                                            AFTER
                                        </div>
                                        <div className="aspect-[3/4] bg-gray-800/50 flex items-center justify-center">
                                            <Image
                                                src={result.afterImage}
                                                alt="After"
                                                width={400}
                                                height={533}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Design Portfolio Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-20"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="text-orange-400">Our</span> Design Portfolio
                </h2>

                {/* Logos - 10 images, 5 columns */}
                <DesignGallery
                    title="Logos"
                    images={brandingDesignData.logos}
                    aspectRatio="square"
                    columns={5}
                />

                {/* Covers - 7 images, portrait, 3 columns */}
                {/* <DesignGallery
                    title="Covers"
                    images={brandingDesignData.covers}
                    aspectRatio="portrait"
                    columns={3}
                /> */}

                {/* Trifolds - PDF with preview images */}
                <div className="space-y-8">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-orange-400"
                    >
                        Tri-folds
                    </motion.h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {brandingDesignData.trifolds.images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-600/50 transition-all duration-300 group"
                            >
                                <div className="aspect-video bg-gray-800/50 flex items-center justify-center relative overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`Trifold page ${index + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 bg-gray-900/50 border-t border-gray-800 text-center">
                                    <p className="text-sm font-medium text-gray-300">Page {index + 1}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.a
                        href={brandingDesignData.trifolds.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Full Tri-fold PDF
                    </motion.a>
                </div>

                {/* Newsletters - 6 images, portrait, 3 columns */}
                <DesignGallery
                    title="Newsletters"
                    images={brandingDesignData.newsletters}
                    aspectRatio="portrait"
                    columns={3}
                />

                {/* Backdrops - 6 images, square, 3 columns */}
                <DesignGallery
                    title="Backdrops"
                    images={brandingDesignData.backdrops}
                    aspectRatio="square"
                    columns={3}
                />

                {/* Static & Infographics - 28 images, mixed, 4 columns */}
                <InfographicsCarousel images={brandingDesignData.staticInfographics} />


                {/* Brochures - PDFs */}
                {/* <PDFGallery
                    title="Brochures"
                    pdfs={brandingDesignData.brochures.pdfs}
                /> */}

                {/* Thumbnails - 5 images, landscape, 3 columns */}
                <DesignGallery
                    title="Thumbnails"
                    images={brandingDesignData.thumbnails}
                    aspectRatio="landscape"
                    columns={3}
                />
            </motion.section>

            {/* Why Our Designs are Best Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Why Our Designs are <span className="text-orange-400">Best</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.whyBest.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-orange-600/50 transition-all duration-300 group overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-orange-600/50">
                                        {item.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
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

            <PDFDownloadButton pdfUrl={brandingDesignData.pdfUrl} label="Download Full PDF" />
        </div>
    );
}