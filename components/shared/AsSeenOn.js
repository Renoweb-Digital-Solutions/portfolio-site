'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AsSeenOn() {
    const presses = [
        {
            name: "TPTV",
            logo: "/as-seen-on/tptv.png",
            url: "https://tptv.in/from-bedridden-civil-engineer-to-building-indias-first-growth-provider-the-gourab-majumder-story"
        },
        {
            name: "FlexiMaps",
            logo: "/as-seen-on/fleximaps.png",
            url: "https://fleximaps.in/renoweb-digital-solutions-indias-growth-provider-redefining-marketing-beyond-digital-advertising"
        },
        {
            name: "Bharat Standard",
            logo: "/as-seen-on/BS.png",
            url: "https://bharat-standard.com/article/6a5a6142f28ab2fe01514ca5"
        },
        {
            name: "The Economic Wires",
            logo: null, 
            url: "https://www.theeconomicwires.com/article/6a5a60b01134b344c2be0772"
        }
    ];

    return (
        <section className="py-20 px-6 relative bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Press & Media
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        As Seen On
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {presses.map((press, index) => (
                        <Link href={press.url} key={index} target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="flex items-center justify-center p-4">
                                {press.logo ? (
                                    <div 
                                        className="relative inline-block shimmer-bg"
                                        style={{
                                            WebkitMaskImage: `url(${press.logo})`,
                                            maskImage: `url(${press.logo})`,
                                            WebkitMaskSize: 'contain',
                                            maskSize: 'contain',
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskPosition: 'center',
                                            maskPosition: 'center',
                                        }}
                                    >
                                        <img 
                                            src={press.logo} 
                                            alt={press.name} 
                                            className="h-16 md:h-20 w-auto opacity-0"
                                        />
                                    </div>
                                ) : (
                                    <h3 className="text-lg md:text-2xl font-bold uppercase tracking-widest whitespace-nowrap shimmer-text">
                                        {press.name}
                                    </h3>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .shimmer-text {
                    background: linear-gradient(110deg, #737373 30%, #ffffff 50%, #737373 70%);
                    background-size: 200% auto;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    animation: shimmer 3.5s ease-in-out infinite;
                }
                .shimmer-bg {
                    background: linear-gradient(110deg, #737373 30%, #ffffff 50%, #737373 70%);
                    background-size: 200% auto;
                    animation: shimmer 3.5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
