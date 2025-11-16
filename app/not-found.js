"use client"
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[
                    { left: '10%', top: '20%', delay: '0s', duration: '3s' },
                    { left: '25%', top: '50%', delay: '0.5s', duration: '2.5s' },
                    { left: '40%', top: '15%', delay: '1s', duration: '3.2s' },
                    { left: '60%', top: '70%', delay: '1.5s', duration: '2.8s' },
                    { left: '75%', top: '30%', delay: '2s', duration: '3.5s' },
                    { left: '85%', top: '60%', delay: '2.5s', duration: '2.2s' },
                    { left: '15%', top: '80%', delay: '0.8s', duration: '3.8s' },
                    { left: '50%', top: '40%', delay: '1.8s', duration: '2.6s' },
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* 404 Number */}
                <div className="mb-8 relative">
                    <h1 className="text-[200px] md:text-[280px] font-black leading-none bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent opacity-20 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="inline-block p-6 bg-blue-600/10 rounded-2xl border border-blue-600/30 backdrop-blur-sm">
                                <svg className="w-24 h-24 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Message */}
                <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                        The page you&apos;re looking for seems to have wandered off into the digital void.
                    </p>
                </div>

                {/* Additional Info */}
                <div className="mb-12 max-w-2xl mx-auto">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                        <p className="text-gray-300 mb-4">
                            Don&apos;t worry! Here are some helpful links to get you back on track:
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Home
                            </Link>
                            <span className="text-gray-600">•</span>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                Products
                            </Link>
                            <span className="text-gray-600">•</span>
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Case Studies
                            </Link>
                            <span className="text-gray-600">•</span>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition group"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                    >
                        Go Back
                    </button>
                </div>

                {/* Fun Message */}
                <div className="mt-12">
                    <p className="text-sm text-gray-500">
                        Error Code: 404 | Lost in the matrix 🚀
                    </p>
                </div>
            </div>
        </div>
    );
}