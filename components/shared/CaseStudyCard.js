"use client"
import { case_study_data } from '../data/case_study_data';
import { motion } from "framer-motion";
import Image from 'next/image';

const StatItem = ({ value, label }) => (
    <div className="text-center px-1.5 md:px-3 flex-1">
        <p className="text-base md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 whitespace-nowrap">{value}</p>
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-0.5 md:mt-1">{label}</p>
    </div>
);

const StatsRow = ({ stats, label, labelColor }) => (
    <div className="flex items-center gap-2 md:gap-6">
        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${labelColor} w-12 md:w-16 text-right shrink-0`}>{label}</span>
        <div className="flex items-center gap-1 md:gap-2 flex-1 py-2 md:py-3 px-2 md:px-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5">
            <StatItem value={stats.clicks} label="Clicks" />
            <div className="w-[1px] h-6 md:h-8 bg-gradient-to-b from-transparent via-[#4ec8ef]/40 to-transparent shrink-0" />
            <StatItem value={stats.Impression} label="Impression" />
            <div className="w-[1px] h-6 md:h-8 bg-gradient-to-b from-transparent via-[#4ec8ef]/40 to-transparent shrink-0" />
            <StatItem value={stats.CTR} label="CTR" />
        </div>
    </div>
);

export const CaseStudyCard = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2"
        >
            {/* Gradient border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#308fef]/50 via-[#4460ef]/30 to-[#023dbb]/50 opacity-40 group-hover:opacity-80 transition-opacity duration-700 blur-[0.5px]" />

            <div className="relative rounded-3xl bg-[#0a0a0a] overflow-hidden">
                {/* Category Badge + Title */}
                <div className="p-4 md:p-6 pb-0 flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-xs font-semibold border border-[#4ec8ef]/20 uppercase tracking-wider">
                        {data.category}
                    </span>
                </div>

                {/* Image */}
                <div className="relative mx-4 md:mx-6 mt-5 rounded-2xl overflow-hidden">
                    <Image
                        width={600} height={350}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        src={`/case_studies_${data.id}.png`}
                        alt={data.category}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                </div>

                {/* Stats Comparison */}
                <div className="p-4 md:p-6 pt-5 space-y-3">
                    <StatsRow stats={data.before} label="Before" labelColor="text-gray-500" />

                    {/* Arrow indicator */}
                    <div className="flex justify-center py-1">
                        <svg className="w-5 h-5 text-[#4ec8ef]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>

                    <StatsRow stats={data.after} label="After" labelColor="text-[#4ec8ef]" />
                </div>

                {/* Study description */}
                <div className="px-4 md:px-6 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{data.study}</p>
                </div>

                {/* CTA */}
                <div className="px-4 md:px-6 pb-6">
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white group-hover:bg-[#4ec8ef] group-hover:border-[#4ec8ef] group-hover:text-black transition-all duration-500">
                        Learn more
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-10 bg-gradient-to-br from-[#308fef]/8 via-[#4460ef]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
            </div>
        </motion.div>
    );
};

const CaseStudyList = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {case_study_data.map((study) => (
                <CaseStudyCard key={study.id} data={study} />
            ))}
        </div>
    );
};

export default CaseStudyList;