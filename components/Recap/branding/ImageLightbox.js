"use client"

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageLightbox({ images, isOpen, onClose, initialIndex = 0 }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) setCurrentIndex(initialIndex);
    }, [initialIndex, isOpen]);

    if (!isOpen) return null;

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'Escape') onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="absolute top-4 right-4 text-white hover:text-orange-400 transition z-50"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Counter */}
                    <div className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded-lg z-50">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Previous Button */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition bg-black/50 p-3 rounded-full z-50"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Main Image */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            width={1200}
                            height={800}
                            className="object-contain max-h-[90vh] w-auto h-auto"
                            priority
                        />
                    </motion.div>

                    {/* Next Button */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 transition bg-black/50 p-3 rounded-full z-50"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Thumbnail Strip */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(idx);
                                    }}
                                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${idx === currentIndex
                                        ? 'border-orange-400 scale-110'
                                        : 'border-gray-600 hover:border-orange-400/50'
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        width={64}
                                        height={64}
                                        className="object-cover w-full h-full"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                    {/* Mobile Close Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className=" fixed bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold z-50 transition"
                    >
                        Close
                    </button>
                </motion.div>
            )}

        </AnimatePresence>
    );
}