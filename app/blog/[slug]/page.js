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

    const authorName = typeof post.author === 'string' ? post.author : (post.author?.name || 'Renoweb Team')
    const authorRole = post.author?.role || 'Expert'
    const authorInitial = authorName.charAt(0)

    return (
        <div className="min-h-screen bg-[#050a0f] text-white pt-32 pb-20 px-6">
            <style>{`
                .article-content h1,
                .article-content h2,
                .article-content h3,
                .article-content h4,
                .article-content h5,
                .article-content h6 {
                    font-weight: 800;
                    color: #ffffff;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    line-height: 1.3;
                }
                .article-content h1 { font-size: 2rem; }
                .article-content h2 { font-size: 1.6rem; }
                .article-content h3 { font-size: 1.35rem; }
                .article-content h4 { font-size: 1.15rem; }
                .article-content p {
                    color: rgba(255,255,255,0.72);
                    line-height: 1.85;
                    margin-bottom: 1.25rem;
                }
                .article-content strong, .article-content b {
                    font-weight: 700;
                    color: #ffffff;
                }
                .article-content em, .article-content i {
                    font-style: italic;
                }
                .article-content a {
                    color: #22d3ee;
                    text-decoration: underline;
                }
                .article-content ul, .article-content ol {
                    padding-left: 1.5rem;
                    margin-bottom: 1.25rem;
                    color: rgba(255,255,255,0.72);
                }
                .article-content ul { list-style-type: disc; }
                .article-content ol { list-style-type: decimal; }
                .article-content li { margin-bottom: 0.4rem; line-height: 1.75; }
                .article-content blockquote {
                    border-left: 4px solid #06b6d4;
                    padding-left: 1.25rem;
                    margin: 1.5rem 0;
                    color: rgba(255,255,255,0.6);
                    font-style: italic;
                }
                .article-content img {
                    border-radius: 1rem;
                    max-width: 100%;
                    margin: 1.5rem 0;
                }
                .article-content pre, .article-content code {
                    background: rgba(255,255,255,0.06);
                    border-radius: 0.5rem;
                    padding: 0.2em 0.5em;
                    font-size: 0.9em;
                    color: #67e8f9;
                }
                .article-content pre { padding: 1rem; overflow-x: auto; }
                .article-content hr {
                    border-color: rgba(6,182,212,0.2);
                    margin: 2rem 0;
                }
            `}</style>

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

                    {post.bannerUrl && (
                        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                            <img src={post.bannerUrl} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    <div
                        className="article-content"
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

                    {/* Author — shown below the article */}
                    <div className="flex items-center gap-4 mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-black font-black">
                            {authorInitial}
                        </div>
                        <div>
                            <p className="text-sm font-bold">{authorName}</p>
                            <p className="text-xs text-white/40">{authorRole}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default BlogPostPage
