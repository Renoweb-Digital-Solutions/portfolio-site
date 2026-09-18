"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
    {
        name: "Quantum Accelerator",
        headline: "Eliminate Growth Barriers",
        description:
            "Using our proprietary Quantum Accelerator Framework, we identify and eliminate the barriers holding your growth back, ensuring every aspect of your business is optimized for success.",
        link: "/products/quantum-accelerator",
        tag: "PROPRIETARY FRAMEWORK",
        image: "/qa_mockup.png",
        accentGroup: "cyan",
    },
    {
        name: "Growth OS",
        headline: "Scale With Precision",
        description:
            "We design a customized Growth Operating System tailored to your digital maturity, creating a foundation for consistent, scalable growth that aligns your brand with audience needs.",
        link: "/products/growth-os",
        tag: "SYSTEM ARCHITECTURE",
        image: "/gos_mockup.png",
        accentGroup: "blue",
    },
];

const Our_Products = () => {
    return (
        <section className="relative bg-[#0a0a0f] py-24 sm:py-32 px-6 lg:px-8 overflow-hidden mb-20">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 md:mb-24"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 bg-white/5 text-gray-300 rounded-full text-xs font-semibold tracking-widest border border-white/10 uppercase">
                            What We Build
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        <span className="text-white block mb-2">Built different.</span>
                        <span className="text-gray-500 block">With purpose.</span>
                    </h2>
                </motion.div>

                {/* 2x2 Grid (or 1x2 on mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                            className="group relative flex flex-col justify-between bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-[20px] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
                        >
                            {/* Inner soft shadow/glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="p-8 pb-0 z-10">
                                <div className="mb-6">
                                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider border ${product.accentGroup === "cyan"
                                            ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                                            : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                        }`}>
                                        {product.tag}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {product.name} <span className="text-gray-500 font-medium">— {product.headline}</span>
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-8">
                                    {product.description}
                                </p>
                            </div>

                            {/* Mockup Image Container */}
                            <div className="relative w-full aspect-[16/10] mt-auto px-6 overflow-hidden z-10">
                                <motion.div
                                    className="w-full h-full relative rounded-t-xl overflow-hidden border border-white/10 border-b-0 shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2"
                                >
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} dashboard mockup`}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Mockup overlay gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none opacity-80" />
                                </motion.div>
                            </div>

                            <Link href={product.link} className="absolute inset-0 z-20">
                                <span className="sr-only">View {product.name}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Our_Products;