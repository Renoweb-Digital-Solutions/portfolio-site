"use client"

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

export default function InfographicsCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const itemsPerPage = {
        mobile: 2,
        tablet: 4,
        desktop: 6
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(images.length / itemsPerPage.desktop));
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(images.length / itemsPerPage.desktop)) % Math.ceil(images.length / itemsPerPage.desktop));
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            goToNext();
        }
        if (touchStart - touchEnd < -75) {
            goToPrevious();
        }
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const getCurrentPageImages = () => {
        const start = currentIndex * itemsPerPage.desktop;
        return images.slice(start, start + itemsPerPage.desktop);
    };

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                    Static & Infographics
                </h3>
                <div className="text-sm text-gray-400">
                    {currentIndex + 1} / {Math.ceil(images.length / itemsPerPage.desktop)}
                </div>
            </motion.div>

            <div className="relative">
                {/* Navigation Buttons - Desktop */}
                <button
                    onClick={goToPrevious}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 bg-gray-900 border border-gray-800 hover:border-orange-600 rounded-full items-center justify-center text-white hover:text-orange-400 transition"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 bg-gray-900 border border-gray-800 hover:border-orange-600 rounded-full items-center justify-center text-white hover:text-orange-400 transition"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Carousel Container */}
                <div
                    className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
                        >
                            {getCurrentPageImages().map((image, index) => (
                                <motion.div
                                    key={currentIndex * itemsPerPage.desktop + index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    onClick={() => openLightbox(currentIndex * itemsPerPage.desktop + index)}
                                    className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-600/50 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                                    <div className="aspect-square bg-gray-800/50 flex items-center justify-center relative overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={`Infographic ${currentIndex * itemsPerPage.desktop + index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-20">
                                            <div className="flex items-center gap-2 text-orange-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                                <span className="font-semibold text-sm">View</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex md:hidden justify-center gap-4 mt-6">
                    <button
                        onClick={goToPrevious}
                        className="w-12 h-12 bg-gray-900 border border-gray-800 hover:border-orange-600 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="w-12 h-12 bg-gray-900 border border-gray-800 hover:border-orange-600 rounded-full flex items-center justify-center text-white hover:text-orange-400 transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {[...Array(Math.ceil(images.length / itemsPerPage.desktop))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-orange-400 w-8'
                                : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
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