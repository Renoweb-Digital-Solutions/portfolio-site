"use client"

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'

/* ─── Count-Up Component ─── */
const CountUpValue = ({ target, prefix = '', suffix = '' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const motionValue = useMotionValue(0)
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, target, {
                duration: 1.5,
                ease: 'easeOut',
                onUpdate: (v) => setDisplayValue(Math.round(v)),
            })
            return controls.stop
        }
    }, [isInView, target, motionValue])

    return <span>{prefix}{displayValue}{suffix}</span>
}

/* ─── Main Component ─── */
export default function FunnelJourneyDiagram() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    const stages = [
        { id: 1, title: 'DISCOVER', pod: 'POD 01', status: 'High Bounce Rate', riskValue: 12, riskLabel: 'M' },
        { id: 2, title: 'ENGAGE', pod: 'POD 02', status: 'Cart Abandonment', riskValue: 28, riskLabel: 'M' },
        { id: 3, title: 'CONVERT', pod: 'POD 03', status: 'Payment Failed', riskValue: 8, riskLabel: 'M' },
    ]

    return (
        <div ref={containerRef} className="w-full relative group">
            {/* Main Container */}
            <div className="relative bg-[#0A0E1A] border border-blue-500/15 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-blue-500/5 group-hover:border-blue-500/25">
                
                {/* 1px Gradient Top Border Strip */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />

                {/* Subtle Radial Glow */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Faint Grid Background */}
                <div className="absolute inset-0 diagram-grid-bg pointer-events-none opacity-50" />

                <div className="relative z-10 p-6 md:p-8">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div className="text-xs font-mono text-gray-400 tracking-widest uppercase">
                            GROUPING · ONE POD PER DROP-OFF POINT
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-[11px] font-mono text-gray-400 tracking-wider">JOURNEY</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-rose-500" />
                                <span className="text-[11px] font-mono text-gray-400 tracking-wider">DROP-OFF</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-16">
                        <h4 className="text-xs font-mono text-slate-500 tracking-widest">EXAMPLE · E-COMMERCE FUNNEL</h4>
                    </div>

                    {/* Diagram Content */}
                    <div className="relative pt-12 pb-4">
                        
                        {/* Horizontal Animated Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden hidden md:block">
                            {/* Base dashed line */}
                            <div className="absolute inset-0 border-t border-dashed border-blue-500/30" />
                            
                            {/* Animated draw-in solid line */}
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-blue-500/50"
                                initial={{ width: '0%' }}
                                animate={isInView ? { width: '100%' } : { width: '0%' }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />

                            {/* Traveling Pulse */}
                            {isInView && (
                                <motion.div
                                    className="absolute top-1/2 left-0 w-24 h-[3px] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400 to-white"
                                    style={{ boxShadow: '0 0 10px rgba(96,165,250,0.8)' }}
                                    animate={{ left: ['-10%', '110%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            )}
                        </div>
                        
                        {/* Mobile Vertical Line */}
                        <div className="absolute top-0 left-[27px] w-[2px] h-full overflow-hidden md:hidden">
                            <div className="absolute inset-0 border-l border-dashed border-blue-500/30" />
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-blue-500/50"
                                initial={{ height: '0%' }}
                                animate={isInView ? { height: '100%' } : { height: '0%' }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Stages Layout */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 relative z-10">
                            {stages.map((stage, i) => (
                                <div key={stage.id} className="relative flex-1 w-full flex flex-row md:flex-col items-start md:items-center pl-12 md:pl-0">
                                    
                                    {/* Node on the line */}
                                    <div className="absolute md:relative left-0 md:left-auto top-0 md:-mt-[15px] -ml-2 md:ml-0 flex flex-row md:flex-col items-center gap-3 md:gap-0 z-20">
                                        <div className="w-14 h-7 bg-[#111827] border border-blue-500/40 rounded-full flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-105 transition-transform duration-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span className="text-[10px] font-mono text-white font-semibold">S0{stage.id}</span>
                                        </div>
                                        {/* Label beside node on mobile, below on desktop */}
                                        <span className="text-xs font-mono text-blue-400 tracking-wider mt-0 md:mt-3 hidden md:block">
                                            {stage.title}
                                        </span>
                                    </div>
                                    
                                    {/* Desktop Vertical Drop Line */}
                                    <div className="hidden md:flex flex-col items-center w-full h-12 relative my-2">
                                        <div className="w-[1px] h-full border-l border-dashed border-blue-500/40" />
                                        <span className="absolute top-1/4 w-1 h-1 rounded-full bg-blue-500/50" />
                                        <span className="absolute top-3/4 w-1 h-1 rounded-full bg-blue-500/50" />
                                    </div>

                                    {/* Mobile horizontal line from node to card */}
                                    <div className="md:hidden absolute left-[30px] top-[14px] w-6 h-[1px] border-t border-dashed border-blue-500/40" />

                                    {/* Data Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.4 + (i * 0.15) }}
                                        className="w-full bg-[#111827]/80 backdrop-blur-sm border border-slate-800 rounded-xl p-5 mt-2 md:mt-0 group/card hover:border-blue-500/30 transition-colors duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-[10px] font-mono text-slate-400 tracking-widest hidden md:block">{stage.title}</span>
                                            <span className="text-[10px] font-mono text-slate-400 tracking-widest md:hidden">{stage.title}</span>
                                            <span className="text-[9px] font-mono text-blue-400 border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 rounded uppercase">
                                                {stage.pod}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                                            <span className="text-xs font-mono text-slate-300 uppercase">{stage.status}</span>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-mono text-slate-500 tracking-wider">REVENUE AT RISK</span>
                                            <span className="text-3xl font-sans font-bold text-rose-500 tracking-tight">
                                                <CountUpValue target={stage.riskValue} prefix="$" suffix={stage.riskLabel} />
                                            </span>
                                        </div>
                                    </motion.div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
