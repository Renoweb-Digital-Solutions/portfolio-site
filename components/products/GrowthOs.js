import React from 'react';

export default function GrowthOs() {
    const stages = [
        {
            title: "Listen",
            description: "Tune in to your customers, market, and data.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            )
        },
        {
            title: "Analyze",
            description: "Uncover insights that inform your growth strategy.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Strategize",
            description: "Develop a fitting roadmap that drives results.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            title: "Customize",
            description: "Tailor your approach to your unique business needs.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            )
        },
        {
            title: "Deploy",
            description: "Put your strategy into action with precision and speed.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Measure",
            description: "Track your progress and adjust your course as needed.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Value",
            description: "Unlock the full potential of your growth strategy and realize tangible results.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Gradient Blobs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-block mb-6">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="text-6xl md:text-7xl font-black tracking-tight">G</div>
                            <div className="text-6xl md:text-7xl font-black tracking-tight">R</div>
                            <div className="text-6xl md:text-7xl font-black tracking-tight">O</div>
                            <div className="text-6xl md:text-7xl font-black tracking-tight">W</div>
                            <div className="text-6xl md:text-7xl font-black tracking-tight">T</div>
                            <div className="text-6xl md:text-7xl font-black tracking-tight">H</div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">O</div>
                            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">S</div>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
                        UNLOCK YOUR BUSINESS&apos;S FULL POTENTIAL WITH GROWTH OS
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Unlock your business&apos;s full potential with GROWTH OS, the ultimate operating system for scaling success. This game-changing framework guides you through seven pivotal stages:
                    </p>
                    <a href="https://calendly.com/renowebhq/growth-os-business-scale-session" target="_blank"
                        rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center gap-2 group">
                        Start Your Journey
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Stages Section - Circular Flow */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {stages.map((stage, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-600/50 transition group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-blue-400 group-hover:scale-110 transition">
                                            {stage.icon}
                                        </div>
                                        <div className="text-4xl font-black text-gray-800 group-hover:text-gray-700 transition">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                        {stage.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {stage.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-600/10 via-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-3xl p-12">
                        <p className="text-2xl text-gray-200 mb-6 leading-relaxed">
                            GROWTH OS is more than just a strategy - it&apos;s a mindset.
                        </p>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            It&apos;s for leaders who refuse to settle for status quo and are hungry for exponential growth. By harnessing the power of GROWTH OS, you&apos;ll be equipped to navigate the complexities of scaling, outmaneuver the competition, and achieve unparalleled success.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-blue-600/20 via-blue-600/20 to-blue-800/20 border border-blue-600/40 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/5"></div>
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-6xl font-black mb-8">
                                ARE YOU READY?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Join the leaders who are transforming their businesses with GROWTH OS.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-flex items-center justify-center gap-2 group">
                                    Get Started Now
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}