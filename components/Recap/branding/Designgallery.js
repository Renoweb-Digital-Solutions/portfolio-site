"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

export default function DesignGallery({ title, images, aspectRatio = 'square', columns = 4 }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const getAspectClass = () => {
        switch (aspectRatio) {
            case 'portrait':
                return 'aspect-[3/4]';
            case 'landscape':
                return 'aspect-video';
            case 'square':
            default:
                return 'aspect-square';
        }
    };

    const getGridCols = () => {
        switch (columns) {
            case 2:
                return 'grid-cols-1 md:grid-cols-2';
            case 3:
                return 'grid-cols-2 md:grid-cols-3';
            case 4:
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
            case 5:
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
            default:
                return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
        }
    };

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

            <div className={`grid ${getGridCols()} gap-4 md:gap-6`}>
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        onClick={() => openLightbox(index)}
                        className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-600/50 transition-all duration-300 group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                        <div className={`${getAspectClass()} bg-gray-800/50 flex items-center justify-center relative overflow-hidden`}>
                            <Image
                                src={image}
                                alt={`${title} ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-20">
                                <div className="flex items-center gap-2 text-orange-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                    <span className="font-semibold">View Full</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <ImageLightbox
                images={images}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                initialIndex={lightboxIndex}
            />
        </div>
    );
}