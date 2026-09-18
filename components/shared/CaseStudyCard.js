import Image from 'next/image';
import Link from 'next/link';

export const CaseStudyCard = ({ data }) => {
    return (
        <div className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 w-full h-full flex flex-col bg-[#0b0e14] border border-white/[0.05] shadow-xl p-6 md:p-8 hover:border-[#1e3a8a]/50">
            {/* Category Tag */}
            <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-[#172554]/50 text-[#60a5fa] rounded-full text-[11px] md:text-xs font-medium border border-[#1e3a8a]/30">
                    {data.category || 'Case Study'}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-[22px] font-bold text-white leading-snug mb-5 transition-colors line-clamp-4">
                {data.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed line-clamp-4 mb-8">
                {data.about_client || data.study || data.description}
            </p>

            {/* Footer: Learn More + Author */}
            <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/[0.05]">
                <Link href={data.link || `/case-studies/${data.slug || data.id}`} className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[#3b82f6] hover:text-[#60a5fa] transition-colors">
                    Learn More <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </Link>

                {data.author?.image && (
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/10 shrink-0 bg-gray-800">
                        <Image
                            src={data.author.image}
                            alt={data.author.name || "Author"}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
            
            {/* Ambient hover glow (subtle) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/0 to-[#1e3a8a]/0 group-hover:to-[#1e3a8a]/5 transition-colors duration-500 pointer-events-none" />
        </div>
    );
};