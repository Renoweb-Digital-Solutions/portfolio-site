"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getResearchBySlug } from '@/lib/db'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ResearchArticlePage = () => {
    const { slug } = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArticle = async () => {
            if (slug) {
                const data = await getResearchBySlug(slug)
                setArticle(data)
                setLoading(false)
            }
        }
        fetchArticle()
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            </div>
        )
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
                <h1 className="text-4xl font-black mb-4 text-amber-500">Report Not Found</h1>
                <p className="text-white/50 mb-8">The research report you are looking for doesn&apos;t exist or has been moved.</p>
                <Link href="/research-hub" className="px-6 py-3 rounded-xl bg-amber-500 text-black font-bold hover:scale-105 transition-transform">
                    Back to Research Hub
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)' }} />
                <div className="absolute top-1/3 -right-40 w-[440px] h-[440px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.1) 0%, transparent 70%)' }} />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link href="/research-hub" className="inline-flex items-center gap-2 text-amber-500/70 hover:text-amber-500 mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Research Hub
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
                            {article.category}
                        </span>
                        <span className="text-white/40 text-xs">{article.publishDate}</span>
                        <span className="text-white/40 text-xs">•</span>
                        <span className="text-amber-400/60 text-xs font-medium">{article.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        {article.title}
                    </h1>

                    <p className="text-xl text-white/60 mb-12 font-medium leading-relaxed italic border-l-4 border-amber-500 pl-6">
                        {article.abstract}
                    </p>

                    <div className="flex items-center gap-4 mb-12 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-black font-black">
                            {typeof article.author === 'string' ? article.author.charAt(0) : (article.author?.name?.charAt(0) || 'R')}
                        </div>
                        <div>
                            <p className="text-sm font-bold">{typeof article.author === 'string' ? article.author : (article.author?.name || 'Renoweb Team')}</p>
                            <p className="text-xs text-white/40">{article.author?.role || 'Head of Research'}</p>
                        </div>
                    </div>

                    {article.bannerUrl && (
                        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                            <img src={article.bannerUrl} alt={article.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    <div 
                        className="prose prose-invert prose-orange max-w-none prose-headings:font-black prose-p:text-white/70 prose-p:leading-relaxed prose-img:rounded-3xl"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {article.tags && (
                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-2">
                            {article.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-white/50 text-xs">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 text-center">
                        <h3 className="text-2xl font-black mb-4">Want more insights?</h3>
                        <p className="text-white/60 mb-8 text-sm">Download the full PDF version of this report along with the raw data files.</p>
                        <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-black font-bold hover:scale-105 transition-transform">
                            Request Full Data Access
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ResearchArticlePage
