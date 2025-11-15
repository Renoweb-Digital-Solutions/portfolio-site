"use client"

import Link from 'next/link';
import React, { useState } from 'react';

export default function MainProductPage() {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            id: 'quantum',
            name: 'QUANTUM ACCELERATOR',
            tagline: 'Revolutionize Your Business Growth',
            description: 'The cutting-edge program designed to catapult your success. This transformative framework propels you forward by converging strategy, technology, and innovation.',
            gradient: 'from-blue-500 via-purple-500 to-blue-600',
            features: [
                'Realign Digital Presence',
                'Revitalize Corporate Culture',
                'Reimagine Brand Recognition',
                'Resonate with Messaging',
                'Reinforce Online Reputation',
                'Reoptimize Digital Strategy',
                'Reengage Community',
                'Reignite Growth'
            ],
            link: '/products/quantum-accelerator'
        },
        {
            id: 'growth',
            name: 'GROWTH OS',
            tagline: 'Unlock Your Business\'s Full Potential',
            description: 'The ultimate operating system for scaling success. This game-changing framework guides you through seven pivotal stages to navigate complexities and achieve unparalleled success.',
            gradient: 'from-blue-400 via-blue-500 to-blue-600',
            features: [
                'Listen to Market Data',
                'Analyze Insights',
                'Strategize Roadmap',
                'Customize Approach',
                'Deploy with Precision',
                'Measure Progress',
                'Unlock Value'
            ],
            link: '/products/growth-os'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { left: '10%', top: '20%', delay: '0s', duration: '2s' },
                    { left: '25%', top: '60%', delay: '0.3s', duration: '2.5s' },
                    { left: '40%', top: '15%', delay: '0.6s', duration: '3s' },
                    { left: '55%', top: '75%', delay: '0.9s', duration: '2.2s' },
                    { left: '70%', top: '30%', delay: '1.2s', duration: '2.8s' },
                    { left: '85%', top: '50%', delay: '1.5s', duration: '3.2s' },
                    { left: '15%', top: '80%', delay: '1.8s', duration: '2.4s' },
                    { left: '30%', top: '40%', delay: '2.1s', duration: '2.9s' },
                    { left: '45%', top: '90%', delay: '2.4s', duration: '3.5s' },
                    { left: '60%', top: '25%', delay: '2.7s', duration: '2.6s' },
                    { left: '75%', top: '65%', delay: '0.2s', duration: '3.1s' },
                    { left: '90%', top: '10%', delay: '0.5s', duration: '2.3s' },
                    { left: '20%', top: '55%', delay: '0.8s', duration: '2.7s' },
                    { left: '35%', top: '35%', delay: '1.1s', duration: '3.3s' },
                    { left: '50%', top: '70%', delay: '1.4s', duration: '2.1s' },
                    { left: '65%', top: '45%', delay: '1.7s', duration: '2.8s' },
                    { left: '80%', top: '85%', delay: '2.0s', duration: '3.4s' },
                    { left: '5%', top: '50%', delay: '2.3s', duration: '2.5s' },
                    { left: '95%', top: '60%', delay: '2.6s', duration: '3.0s' },
                    { left: '50%', top: '5%', delay: '2.9s', duration: '2.9s' }
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
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
            <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-block mb-6 relative">
                        <div className="absolute inset-0 bg-blue-600/20 blur-xl animate-pulse"></div>
                        <span className="relative px-6 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Transformative Solutions
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        Our
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-pulse"> Products</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Discover game-changing frameworks designed to accelerate your business growth and unlock unprecedented success.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            className="relative group"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}></div>

                            {/* Card */}
                            <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 hover:border-blue-600/50 transition-all duration-500 overflow-hidden">
                                {/* Animated Corner Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                {/* Sparkle Effect */}
                                {hoveredProduct === product.id && (
                                    <>
                                        <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                                        <div className="absolute top-20 right-24 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                        <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                                    </>
                                )}

                                <div className="relative z-10">
                                    {/* Product Name */}
                                    <h2 className={`text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                                        {product.name}
                                    </h2>

                                    {/* Tagline */}
                                    <p className="text-xl font-semibold text-gray-300 mb-6 group-hover:text-white transition-colors">
                                        {product.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        {product.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {product.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={product.link}
                                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${product.gradient} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/50 group-hover:scale-105`}
                                    >
                                        Explore {product.id === 'quantum' ? 'Quantum Accelerator' : 'Growth OS'}
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Which One Is Right for You?</h2>
                        <p className="text-gray-400 text-lg">Both frameworks are designed to transform your business, but serve different needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-800/10 border border-blue-600/30 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Quantum Accelerator</h3>
                            </div>
                            <p className="text-gray-300 mb-4">Perfect for businesses looking to:</p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>Transform their digital presence</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>Unlock new revenue streams</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>Build emotional brand connections</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Growth OS</h3>
                            </div>
                            <p className="text-gray-300 mb-4">Ideal for leaders who want to:</p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>Scale with a proven framework</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>Navigate complexities of growth</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>Achieve exponential success</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-800/20 border border-blue-600/40 rounded-3xl p-12 overflow-hidden">
                        {/* Animated background shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Choose your path to exponential growth and start your transformation today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center justify-center gap-2 group">
                                    Schedule Consultation
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
        </div>
    );
}