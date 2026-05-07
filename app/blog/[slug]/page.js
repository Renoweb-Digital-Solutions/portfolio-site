"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getBlogBySlug } from '@/lib/db'
import { motion } from 'framer-motion'
import Link from 'next/link'

const BlogPostPage = () => {
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            if (slug) {
                const data = await getBlogBySlug(slug)
                setPost(data)
                setLoading(false)
            }
        }
        fetchPost()
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050a0f] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
            </div>
        )
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-[#050a0f] flex flex-col items-center justify-center text-white px-6">
                <h1 className="text-4xl font-black mb-4 text-cyan-400">Post Not Found</h1>
                <p className="text-white/50 mb-8">The article you are looking for doesn&apos;t exist or has been moved.</p>
                <Link href="/blog" className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition-transform">
                    Back to Blog
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#050a0f] text-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400/70 hover:text-cyan-400 mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Insights
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                            {post.category}
                        </span>
                        <span className="text-white/40 text-xs">{post.publishDate}</span>
                        <span className="text-white/40 text-xs">•</span>
                        <span className="text-cyan-400/60 text-xs font-medium">{post.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 mb-12 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-black font-black">
                            {typeof post.author === 'string' ? post.author.charAt(0) : (post.author?.name?.charAt(0) || 'R')}
                        </div>
                        <div>
                            <p className="text-sm font-bold">{typeof post.author === 'string' ? post.author : (post.author?.name || 'Renoweb Team')}</p>
                            <p className="text-xs text-white/40">{post.author?.role || 'Expert'}</p>
                        </div>
                    </div>

                    {post.bannerUrl && (
                        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                            <img src={post.bannerUrl} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    <div 
                        className="prose prose-invert prose-cyan max-w-none prose-headings:font-black prose-p:text-white/70 prose-p:leading-relaxed prose-img:rounded-3xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {post.tags && (
                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-2">
                            {post.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-white/50 text-xs">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default BlogPostPage
