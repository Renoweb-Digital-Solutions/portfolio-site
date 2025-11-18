'use client';
import Image from 'next/image';
import React from 'react';

export default function OurPartners({
    title = "Our Partners",
    subtitle = "Trusted by leading brands around the world"
}) {
    const partners = [
        { name: "numr", logo: "/brand_logos/numr.png" },
        { name: "reccy", logo: "/brand_logos/reccy.png" },
        { name: "moneyview", logo: "/brand_logos/moneyview.png" },
        { name: "nexority_infotech", logo: "/brand_logos/nexority_infotech.png" },
        { name: "community_club", logo: "/brand_logos/community_club.png" },
        { name: "nidaan", logo: "/brand_logos/nidaan.png" },
        { name: "moovana", logo: "/brand_logos/moovana.png" },
        { name: "qcbt", logo: "/brand_logos/qcbt.png" },
        { name: "eco_guard", logo: "/brand_logos/eco_guard.png" },
        { name: "borrowed_pen", logo: "/brand_logos/borrowed_pen.png" },
        { name: "cloudify", logo: "/brand_logos/cloudify.png" },
        { name: "pepper_content", logo: "/brand_logos/pepper_content.png" },
        { name: "cloudredux", logo: "/brand_logos/cloudredux.png" },
        { name: "freight_tiger", logo: "/brand_logos/freight_tiger.png" },
        { name: "draper_nation", logo: "/brand_logos/draper_nation.png" },
        { name: "salus_internazionale_ecm", logo: "/brand_logos/salus_internazionale_ecm.png" },
        { name: "one_life_adventure", logo: "/brand_logos/one_life_adventure.png" },
        { name: "goldberg_kohn", logo: "/brand_logos/goldberg_kohn.png" },
        { name: "racks_and_rollers", logo: "/brand_logos/racks_and_rollers.png" },
        { name: "cub_demolition", logo: "/brand_logos/cub_demolition.png" },
        { name: "providence", logo: "/brand_logos/providence.png" }, // Changed from 'suboxone_providence'
        { name: "manchester_pediatric", logo: "/brand_logos/manchester_pediatric.png" },
        { name: "artshoppy", logo: "/brand_logos/artshoppy.png" },
        { name: "provisas_nz", logo: "/brand_logos/provisas_nz.png" },
        { name: "blockmagic", logo: "/brand_logos/blockmagic.png" },
        { name: "wings", logo: "/brand_logos/wings.png" }, // Changed from 'skyward_wings'
        { name: "jmr", logo: "/brand_logos/jmr.png" },
        { name: "hopium_health", logo: "/brand_logos/hopium_health.png" },
        { name: "rentpost", logo: "/brand_logos/rentpost.png" },
        { name: "drape_fit", logo: "/brand_logos/drape_fit.png" },
        { name: "mmj", logo: "/brand_logos/mmj.png" },
        { name: "saddak", logo: "/brand_logos/saddak.png" },
        { name: "auli", logo: "/brand_logos/auli.png" },
        { name: "novatise", logo: "/brand_logos/novatise.png" },
        { name: "travancore_foundation", logo: "/brand_logos/travancore_foundation.png" }
    ];
    const row1 = [...partners.slice(0, 13), ...partners.slice(0, 13)];
    const row2 = [...partners.slice(13, 25), ...partners.slice(13, 25)];
    const row3 = [...partners.slice(25, 37), ...partners.slice(25, 37)];

    return (
        <section className="py-20 px-6 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto relative z-10">
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

                <div className="space-y-4 md:space-y-8">
                    {[row1, row2, row3].map((row, rowIndex) => (
                        <div key={rowIndex} className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                            <div className="flex overflow-hidden">
                                <div className={`flex ${rowIndex === 1 ? 'animate-scroll-right' : 'animate-scroll-left'} gap-6 md:gap-12
`}>
                                    {row.map((partner, index) => (
                                        <div
                                            key={`${rowIndex}-${index}`}
                                            className="flex-shrink-0 flex items-center justify-center p-2"
                                        >
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={120} sizes="(max-width: 768px) 90px, 120px !important"
                                                height={120}
                                                className="object-contain opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 w-[55px] md:w-[120px]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left { animation: scroll-left 30s linear infinite; }
                .animate-scroll-right { animation: scroll-right 30s linear infinite; }
                .animate-scroll-left:hover,
                .animate-scroll-right:hover { animation-play-state: paused; }
            `}</style>
        </section>
    );
}
