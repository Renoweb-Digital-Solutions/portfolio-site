import React from 'react';

export default function OurPartners({
    title = "Our Partners",
    subtitle = "Trusted by leading brands around the world"
}) {
    // Sample partner logos - replace with actual logo URLs
    const partners = [
        { name: "Company 1", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+1" },
        { name: "Company 2", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+2" },
        { name: "Company 3", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+3" },
        { name: "Company 4", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+4" },
        { name: "Company 5", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+5" },
        { name: "Company 6", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+6" },
        { name: "Company 7", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+7" },
        { name: "Company 8", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+8" },
        { name: "Company 9", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+9" },
        { name: "Company 10", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+10" },
        { name: "Company 11", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+11" },
        { name: "Company 12", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+12" },
        { name: "Company 13", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+13" },
        { name: "Company 14", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+14" },
        { name: "Company 15", logo: "https://via.placeholder.com/120x60/1e293b/94a3b8?text=Logo+15" },
    ];

    // Split partners into 3 rows
    const row1 = [...partners.slice(0, 5), ...partners.slice(0, 5)]; // Duplicate for seamless loop
    const row2 = [...partners.slice(5, 10), ...partners.slice(5, 10)];
    const row3 = [...partners.slice(10, 15), ...partners.slice(10, 15)];

    return (
        <section className="py-20 px-6 relative overflow-hidden bg-black">
            {/* Sparkly Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[
                    { left: '15%', top: '25%', delay: '0s', duration: '3s' },
                    { left: '35%', top: '60%', delay: '0.5s', duration: '2.5s' },
                    { left: '55%', top: '20%', delay: '1s', duration: '3.2s' },
                    { left: '75%', top: '70%', delay: '1.5s', duration: '2.8s' },
                    { left: '85%', top: '40%', delay: '2s', duration: '3.5s' },
                    { left: '25%', top: '80%', delay: '2.5s', duration: '2.2s' },
                    { left: '65%', top: '15%', delay: '0.8s', duration: '3.8s' },
                    { left: '10%', top: '55%', delay: '1.8s', duration: '2.6s' },
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

                {/* Scrolling Rows Container */}
                <div className="space-y-8">
                    {/* Row 1 - Left to Right */}
                    <div className="relative">
                        {/* Left Mask */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

                        {/* Right Mask */}
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll-left gap-8">
                                {row1.map((partner, index) => (
                                    <div
                                        key={`row1-${index}`}
                                        className="flex-shrink-0 w-40 h-20 bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center p-4 hover:border-blue-600/50 transition group"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex animate-scroll-left gap-8" aria-hidden="true">
                                {row1.map((partner, index) => (
                                    <div
                                        key={`row1-dup-${index}`}
                                        className="flex-shrink-0 w-40 h-20 bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center p-4 hover:border-blue-600/50 transition group"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 2 - Right to Left */}
                    <div className="relative">
                        {/* Left Mask */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

                        {/* Right Mask */}
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll-right gap-8">
                                {row2.map((partner, index) => (
                                    <div
                                        key={`row2-${index}`}
                                        className="flex-shrink-0 w-40 h-20 bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center p-4 hover:border-blue-600/50 transition group"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex animate-scroll-right gap-8" aria-hidden="true">
                                {row2.map((partner, index) => (
                                    <div
                                        key={`row2-dup-${index}`}
                                        className="flex-shrink-0 w-40 h-20 bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center p-4 hover:border-blue-600/50 transition group"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 3 - Left to Right */}
                    <div className="relative">
                        {/* Left Mask */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

                        {/* Right Mask */}
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll-left gap-8">
                                {row3.map((partner, index) => (
                                    <div
                                        key={`row3-${index}`}
                                        className="flex-shrink-0 w-40 h-20 bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center p-4 hover:border-blue-600/50 transition group"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex animate-scroll-left gap-8" aria-hidden="true">
                                {row3.map((partner, index) => (
                                    <div
                                        key={`row3-dup-${index}`}
                                        className="flex-shrink-0 w-40 h-20 bg-gray-900/50 border border-gray-800 rounded-xl flex items-center justify-center p-4 hover:border-blue-600/50 transition group"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}