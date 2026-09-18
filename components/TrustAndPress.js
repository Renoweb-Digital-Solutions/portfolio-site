"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllPress } from '@/lib/db';

export default function TrustAndPress() {
    const [presses, setPresses] = useState([]);

    useEffect(() => {
        const fetchPress = async () => {
            const data = await getAllPress();
            setPresses(data);
        };
        fetchPress();
    }, []);

    if (presses.length === 0) return null;

    return (
        <section className="py-12 md:py-20 border-b border-white/5 overflow-hidden mb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="px-5 py-2 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4ec8ef]/20 tracking-widest uppercase">
                            Media & Press
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        TRUSTED & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">FEATURED IN</span>
                    </h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-16 gap-y-10">
                    {presses.map((press, index) => (
                        <Link
                            href={press.link || press.url || "#"}
                            key={`${press.id || index}-${index}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0"
                        >
                            {press.logoUrl || press.logo ? (
                                <div className="bg-white/[0.03] px-4 py-3 md:px-5 md:py-4 rounded-xl flex items-center justify-center min-w-[120px]">
                                    <img
                                        src={press.logoUrl || press.logo}
                                        alt={press.title || press.name || "Press Logo"}
                                        className="h-6 md:h-8 w-auto object-contain transition-all duration-300"
                                    />
                                </div>
                            ) : (
                                <div className="bg-white/[0.03] px-4 py-3 md:px-5 md:py-4 rounded-xl flex items-center justify-center min-w-[120px]">
                                    <h3 className="text-sm md:text-base font-bold uppercase tracking-widest whitespace-nowrap text-gray-400 hover:text-white transition-colors">
                                        {press.title || press.name || "Press"}
                                    </h3>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
