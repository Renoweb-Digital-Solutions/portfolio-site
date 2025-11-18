"use client"
import React from 'react';
import Image from 'next/image';
import { testimonials } from '../data/testimonials';

export default function Testimonials({
    title = "What Our Clients Say",
    subtitle = "Trusted by businesses worldwide"
}) {
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-20 px-6 relative overflow-hidden bg-black">
            {/* Sparkly Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[
                    { left: '10%', top: '30%', delay: '0s', duration: '3s' },
                    { left: '30%', top: '70%', delay: '0.5s', duration: '2.5s' },
                    { left: '50%', top: '20%', delay: '1s', duration: '3.2s' },
                    { left: '70%', top: '60%', delay: '1.5s', duration: '2.8s' },
                    { left: '90%', top: '40%', delay: '2s', duration: '3.5s' },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration
                        }}
                    />
                ))}
            </div>

            {/* Gradient Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            {subtitle}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {title}
                    </h2>
                </div>

                {/* Testimonials Slider */}
                <div className="relative">
                    {/* Left Mask */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Right Mask */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll-testimonials gap-8 items-stretch py-4">
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <div
                                    key={`testimonial-${index}`}
                                    className="flex-shrink-0 w-[320px] md:w-[600px] bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-300 group"
                                >
                                    {/* Mobile: Column, Desktop: Row */}
                                    <div className="flex flex-col md:flex-row md:h-[320px]">
                                        {/* Image */}
                                        <div className="w-full md:w-2/5 h-48 md:h-full relative">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                                            {/* Quote Icon */}
                                            <div className="mb-3">
                                                <svg className="w-8 h-8 text-blue-400/30" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                            </div>

                                            {/* Testimonial Text - Scrollable if needed */}
                                            <div className="flex-grow overflow-y-auto pr-2 mb-4 custom-scrollbar max-h-32 md:max-h-none">
                                                <p className="text-gray-300 leading-relaxed text-sm italic">
                                                    &quot;{testimonial.testimonial}&quot;
                                                </p>
                                            </div>

                                            {/* Author Info */}
                                            <div className="border-t border-gray-800 pt-4">
                                                <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                                                <p className="text-xs text-gray-400">{testimonial.position}</p>
                                                <p className="text-xs text-blue-400">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-testimonials {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll-testimonials {
                    animation: scroll-testimonials 50s linear infinite;
                }

                .animate-scroll-testimonials:hover {
                    animation-play-state: paused;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(55, 65, 81, 0.3);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.5);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(59, 130, 246, 0.7);
                }
            `}</style>
        </section>
    );
}