"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function MessageFlowDiagram() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    // Stagger timings
    const col1Delay = 0.2
    const conn1Delay = 0.5
    const col2Delay = 0.9
    const conn2Delay = 1.2
    const col3Delay = 1.5
    const conn3Delay = 1.8
    const col4Delay = 2.4

    return (
        <div ref={containerRef} className="w-full relative group">
            {/* Main Container */}
            <div className="relative bg-[#0A0E1A] border border-blue-500/15 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-blue-500/5 group-hover:border-blue-500/25 p-6 md:p-8">
                
                {/* 1px Gradient Top Border Strip */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />

                {/* Subtle Radial Glow */}
                <div className="absolute top-1/2 left-1/4 w-80 h-80 -translate-y-1/2 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 w-80 h-80 -translate-y-1/2 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Faint Grid Background */}
                <div className="absolute inset-0 diagram-grid-bg pointer-events-none opacity-50" />

                <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                        <div className="text-xs font-mono text-gray-400 tracking-widest uppercase">
                            ACTIVATING · A MESSAGE PER CUSTOMER
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-rose-500" />
                                <span className="text-[11px] font-mono text-gray-400 tracking-wider">PROBLEM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-[11px] font-mono text-gray-400 tracking-wider">SOLUTION</span>
                            </div>
                        </div>
                    </div>

                    {/* Diagram Flex Container */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-6 lg:gap-0 relative">
                        
                        {/* =========================================
                            COLUMN 1: PAIN POINT
                        ========================================= */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: col1Delay }}
                            className="flex flex-col items-center w-full lg:w-auto relative z-10"
                        >
                            <span className="text-[10px] font-mono text-slate-500 tracking-widest mb-4">PAIN POINT</span>
                            <div className="w-full sm:w-64 bg-[#111827] border border-slate-800 rounded-xl p-5 hover:border-rose-500/30 transition-colors">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                                    <span className="text-[10px] font-mono text-slate-400 tracking-wider">FROM SCREEN</span>
                                </div>
                                <h3 className="text-xl font-sans font-bold text-white mb-6">Document Confusion</h3>
                                
                                {/* Scattered red dots */}
                                <div className="relative w-full h-12 mb-4 bg-slate-900/50 rounded-lg overflow-hidden border border-white/5">
                                    <div className="absolute top-2 left-4 w-1 h-1 bg-rose-500 rounded-full" />
                                    <div className="absolute top-6 left-8 w-1.5 h-1.5 bg-rose-500 rounded-full" />
                                    <div className="absolute top-3 left-16 w-1 h-1 bg-rose-500/60 rounded-full" />
                                    <div className="absolute top-8 left-20 w-1 h-1 bg-rose-500 rounded-full" />
                                    <div className="absolute top-4 left-28 w-1.5 h-1.5 bg-rose-500 rounded-full" />
                                    <div className="absolute top-7 left-36 w-1 h-1 bg-rose-500/60 rounded-full" />
                                </div>

                                <div className="text-[10px] font-mono text-slate-500 tracking-wider text-center">STUCK COHORT</div>
                            </div>
                        </motion.div>

                        {/* =========================================
                            CONNECTOR 1 (Red Dashed)
                        ========================================= */}
                        <div className="hidden lg:flex flex-1 items-center justify-center relative min-w-[60px]">
                            <svg className="w-full h-4" preserveAspectRatio="none">
                                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(244,63,94,0.15)" strokeWidth="2" strokeDasharray="4 4" />
                                <motion.line 
                                    x1="0" y1="50%" x2="100%" y2="50%" 
                                    stroke="rgb(244,63,94)" 
                                    strokeWidth="2" 
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: conn1Delay, ease: "linear" }}
                                />
                            </svg>
                        </div>
                        {/* Mobile connector */}
                        <div className="lg:hidden h-8 w-[2px] relative overflow-hidden">
                            <div className="absolute inset-0 border-l-2 border-dashed border-rose-500/20" />
                            <motion.div className="absolute top-0 left-0 w-full bg-rose-500"
                                initial={{ height: '0%' }} animate={isInView ? { height: '100%' } : {}} transition={{ duration: 0.5, delay: conn1Delay }}
                            />
                        </div>

                        {/* =========================================
                            COLUMN 2: COMPOSE
                        ========================================= */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: col2Delay }}
                            className="flex flex-col items-center w-full lg:w-auto relative z-10"
                        >
                            <span className="text-[10px] font-mono text-slate-500 tracking-widest mb-4">COMPOSE</span>
                            <div className="w-full sm:w-64 bg-[#111827] border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <span className="text-[10px] font-mono text-slate-400 tracking-wider">COMPOSITION</span>
                                    </div>
                                    <span className="text-[9px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">3 VARIANTS</span>
                                </div>
                                
                                <div className="space-y-2 mb-6">
                                    <div className="w-full bg-slate-800/50 rounded flex items-center px-3 py-2 border border-white/5">
                                        <span className="text-[10px] font-mono text-slate-300">Spend 4 days ago</span>
                                    </div>
                                    <div className="w-full bg-slate-800/50 rounded flex items-center px-3 py-2 border border-white/5">
                                        <span className="text-[10px] font-mono text-slate-300">Book an ID upload</span>
                                    </div>
                                    <div className="w-full bg-slate-800/50 rounded flex items-center px-3 py-2 border border-white/5">
                                        <span className="text-[10px] font-mono text-slate-300">Record eligible</span>
                                    </div>
                                </div>

                                <div className="w-full flex justify-center">
                                    <button className="flex items-center gap-1.5 text-[10px] font-mono bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-3 py-1.5 rounded border border-blue-500/20 transition-colors uppercase tracking-wider">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                        Assemble
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* =========================================
                            CONNECTOR 2 (Blue Dashed)
                        ========================================= */}
                        <div className="hidden lg:flex flex-1 items-center justify-center relative min-w-[60px]">
                            <svg className="w-full h-4" preserveAspectRatio="none">
                                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(59,130,246,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                                <motion.line 
                                    x1="0" y1="50%" x2="100%" y2="50%" 
                                    stroke="rgb(59,130,246)" 
                                    strokeWidth="1.5" 
                                    strokeDasharray="3 3"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: conn2Delay, ease: "linear" }}
                                />
                            </svg>
                        </div>
                        {/* Mobile connector */}
                        <div className="lg:hidden h-8 w-[1.5px] relative overflow-hidden">
                            <div className="absolute inset-0 border-l-[1.5px] border-dashed border-blue-500/20" />
                            <motion.div className="absolute top-0 left-0 w-full bg-blue-500"
                                initial={{ height: '0%' }} animate={isInView ? { height: '100%' } : {}} transition={{ duration: 0.5, delay: conn2Delay }}
                            />
                        </div>

                        {/* =========================================
                            COLUMN 3: TEST
                        ========================================= */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: col3Delay }}
                            className="flex flex-col items-center w-full lg:w-auto relative z-10"
                        >
                            <span className="text-[10px] font-mono text-slate-500 tracking-widest mb-4">TEST</span>
                            <div className="h-full flex flex-col lg:justify-center items-center gap-6">
                                {/* Control Node */}
                                <div className="flex flex-col items-center gap-2 group/node">
                                    <div className="w-12 h-12 rounded-xl bg-[#111827] border border-slate-700 group-hover/node:border-blue-500/40 flex items-center justify-center transition-colors shadow-lg">
                                        <svg className="w-5 h-5 text-slate-400 group-hover/node:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <span className="text-[9px] font-mono text-slate-400 tracking-wider">CONTROL</span>
                                </div>
                                
                                {/* Vertical connection between test nodes */}
                                <div className="w-[1.5px] h-6 bg-slate-700/50 lg:hidden" />

                                {/* Test Node */}
                                <div className="flex flex-col items-center gap-2 group/node">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 group-hover/node:border-blue-400 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(59,130,246,0.15)] relative">
                                        <div className="absolute inset-0 bg-blue-500/5 blur-md rounded-xl" />
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <span className="text-[9px] font-mono text-blue-400 tracking-wider font-semibold">TEST</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* =========================================
                            CONNECTOR 3 (Fan-out branching)
                        ========================================= */}
                        {/* Desktop Fan-out */}
                        <div className="hidden lg:block absolute left-[calc(100%-80px)] top-1/2 -translate-y-1/2 w-[80px] h-full -z-10" style={{ left: 'calc(100% - 150px - 80px)' }}> 
                             {/* Note: positioning this is tricky with flex, will use absolute overlay for lines */}
                        </div>

                        <div className="hidden lg:block flex-1 min-w-[80px] relative">
                            <svg className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2" viewBox="0 0 100 300" preserveAspectRatio="none">
                                {/* Base lines */}
                                <path d="M 0 150 C 40 150, 40 40, 100 40" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1.5" />
                                <path d="M 0 150 C 40 150, 40 110, 100 110" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1.5" />
                                <path d="M 0 150 C 40 150, 40 190, 100 190" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1.5" />
                                <path d="M 0 150 C 40 150, 40 260, 100 260" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1.5" />
                                
                                {/* Animated paths */}
                                {[
                                    { d: "M 0 150 C 40 150, 40 40, 100 40", delay: 0 },
                                    { d: "M 0 150 C 40 150, 40 110, 100 110", delay: 0.05 },
                                    { d: "M 0 150 C 40 150, 40 190, 100 190", delay: 0.1 },
                                    { d: "M 0 150 C 40 150, 40 260, 100 260", delay: 0.15 },
                                ].map((path, i) => (
                                    <motion.path 
                                        key={i}
                                        d={path.d}
                                        fill="none" stroke="rgb(59,130,246)" strokeWidth="1.5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                        transition={{ duration: 0.8, delay: conn3Delay + path.delay, ease: "easeOut" }}
                                    />
                                ))}

                                {/* Traveling dots */}
                                {[
                                    { d: "M 0 150 C 40 150, 40 40, 100 40" },
                                    { d: "M 0 150 C 40 150, 40 110, 100 110" },
                                    { d: "M 0 150 C 40 150, 40 190, 100 190" },
                                    { d: "M 0 150 C 40 150, 40 260, 100 260" },
                                ].map((path, i) => (
                                    isInView && (
                                        <g key={`dot-${i}`}>
                                            <motion.circle r="3" fill="#60A5FA" filter="drop-shadow(0 0 4px #3B82F6)">
                                                <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} path={path.d} calcMode="linear" />
                                                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                                            </motion.circle>
                                        </g>
                                    )
                                ))}
                            </svg>
                        </div>
                        
                        {/* Mobile connector - single drop down to a horizontal bar */}
                        <div className="lg:hidden w-full flex flex-col items-center">
                            <div className="h-8 w-[1.5px] bg-blue-500/20" />
                            <div className="w-[80%] h-[1.5px] bg-blue-500/20 relative">
                                <div className="absolute top-0 left-0 w-[1.5px] h-4 bg-blue-500/20" />
                                <div className="absolute top-0 left-1/3 w-[1.5px] h-4 bg-blue-500/20" />
                                <div className="absolute top-0 left-2/3 w-[1.5px] h-4 bg-blue-500/20" />
                                <div className="absolute top-0 right-0 w-[1.5px] h-4 bg-blue-500/20" />
                            </div>
                        </div>

                        {/* =========================================
                            COLUMN 4: PUBLISH (Channels)
                        ========================================= */}
                        <div className="flex flex-col items-center w-full lg:w-auto z-10 relative">
                            <motion.span 
                                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: col4Delay }}
                                className="text-[10px] font-mono text-slate-500 tracking-widest mb-4 lg:mb-0 lg:absolute lg:-top-[34px]"
                            >
                                PUBLISH
                            </motion.span>
                            
                            <div className="flex flex-row lg:flex-col justify-between w-full lg:h-[280px] gap-4 lg:gap-0 lg:py-2">
                                {[
                                    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />, label: "EMAIL" },
                                    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />, label: "SMS" },
                                    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />, label: "APP" },
                                    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />, label: "PUSH" },
                                ].map((channel, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 200, 
                                            damping: 15, 
                                            delay: col4Delay + (i * 0.1) 
                                        }}
                                        className="flex flex-col items-center gap-2 group/icon"
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#111827] border border-blue-500/30 flex items-center justify-center group-hover/icon:bg-blue-500/10 group-hover/icon:border-blue-400 group-hover/icon:scale-105 transition-all shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {channel.icon}
                                            </svg>
                                        </div>
                                        <span className="text-[9px] font-mono text-slate-400 tracking-wider hidden lg:block">{channel.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Caption */}
                    <div className="mt-12 text-center">
                        <span className="text-[10px] font-mono text-slate-500 tracking-widest">
                            MESSAGE THE PAIN POINT, TEST, PUBLISH WHAT WORKS
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}
