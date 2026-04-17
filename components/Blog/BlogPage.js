"use client"

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { blog_posts, blog_categories } from '@/components/data/blog_posts'

// ─── Star field ──────────────────────────────────────────────────────────────
const STARS = [
    { left: '8%', top: '12%', delay: '0s', dur: '3.2s', size: 2 },
    { left: '22%', top: '7%', delay: '1.1s', dur: '4s', size: 1 },
    { left: '38%', top: '18%', delay: '0.4s', dur: '3.6s', size: 1.5 },
    { left: '54%', top: '9%', delay: '2s', dur: '2.9s', size: 2 },
    { left: '67%', top: '22%', delay: '0.7s', dur: '4.2s', size: 1 },
    { left: '81%', top: '14%', delay: '1.5s', dur: '3.5s', size: 1.5 },
    { left: '91%', top: '30%', delay: '0.2s', dur: '5s', size: 1 },
    { left: '5%', top: '45%', delay: '1.8s', dur: '3.1s', size: 1 },
    { left: '16%', top: '68%', delay: '0.9s', dur: '4.5s', size: 2 },
    { left: '48%', top: '75%', delay: '2.3s', dur: '3.8s', size: 1 },
    { left: '73%', top: '60%', delay: '1.2s', dur: '3s', size: 1.5 },
    { left: '88%', top: '78%', delay: '0.5s', dur: '4.8s', size: 1 },
    { left: '30%', top: '88%', delay: '1.7s', dur: '3.4s', size: 2 },
    { left: '60%', top: '92%', delay: '0.3s', dur: '2.8s', size: 1 },
    { left: '95%', top: '55%', delay: '2.1s', dur: '4.1s', size: 1.5 },
]

// ─── Blog Card ────────────────────────────────────────────────────────────────
const BlogCard = ({ post, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className="group relative h-full"
    >
        <Link href={`/blog/${post.slug}`} className="block h-full">
            {/* Neumorphic card shell */}
            <div
                className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
                style={{
                    background: 'linear-gradient(145deg, #10161a, #0d1215)',
                    boxShadow: `
                        6px 6px 14px rgba(0,0,0,0.55),
                        -4px -4px 10px rgba(255,255,255,0.025),
                        inset 0 1px 0 rgba(255,255,255,0.04)
                    `,
                    border: '1px solid rgba(6,182,212,0.12)',
                }}
            >
                {/* Hover glow overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at top left, rgba(6,182,212,0.07) 0%, transparent 65%)',
                    }}
                />

                {/* Top accent bar */}
                <div className={`h-[3px] w-full bg-gradient-to-r ${post.tagColor}`} />

                <div className="p-6">
                    {/* Category + Tag row */}
                    <div className="flex items-center justify-between mb-4">
                        <span
                            className="text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: 'rgba(103,232,249,0.75)' }}
                        >
                            {post.category}
                        </span>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${post.tagColor} text-black`}>
                            {post.tag}
                        </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-3">
                        <span
                            className="text-2xl mt-0.5 select-none flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl"
                            style={{
                                background: 'rgba(6,182,212,0.08)',
                                boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.4), inset -2px -2px 4px rgba(255,255,255,0.03)',
                            }}
                        >
                            {post.icon}
                        </span>
                        <h2 className="text-white font-bold text-base leading-snug group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                            {post.title}
                        </h2>
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm mb-5 line-clamp-3" style={{ color: 'rgba(255,255,255,0.48)', lineHeight: '1.7' }}>
                        {post.excerpt}
                    </p>


                    {/* Divider */}
                    <div className="h-px mb-4" style={{ background: 'rgba(6,182,212,0.1)' }} />

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.tagColor} flex items-center justify-center text-xs font-black text-black`}
                                style={{
                                    boxShadow: '2px 2px 6px rgba(0,0,0,0.5), -1px -1px 4px rgba(255,255,255,0.04)',
                                }}
                            >
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-white">{post.author}</p>
                                <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{post.authorRole}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{post.date}</p>
                            <p className="text-[11px] font-medium" style={{ color: 'rgba(103,232,249,0.65)' }}>{post.readTime}</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-5">
                    <div
                        className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                        style={{ color: 'rgba(103,232,249,0.8)' }}
                    >
                        Read Article
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    </motion.article>
)

// ─── Featured Card (wide, hero-style) ─────────────────────────────────────────
const FeaturedCard = ({ post }) => (
    <motion.article
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative col-span-full"
    >
        <Link href={`/blog/${post.slug}`} className="block">
            <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
                style={{
                    background: 'linear-gradient(145deg, #0e141a, #0a1014)',
                    boxShadow: `
                        8px 8px 18px rgba(0,0,0,0.6),
                        -4px -4px 12px rgba(255,255,255,0.02),
                        inset 0 1px 0 rgba(255,255,255,0.04)
                    `,
                    border: '1px solid rgba(6,182,212,0.18)',
                }}
            >
                {/* Hover glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.09) 0%, transparent 60%)',
                    }}
                />
                {/* Top accent */}
                <div className={`h-[3px] w-full bg-gradient-to-r ${post.tagColor}`} />

                <div className="p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <span
                                className="text-[10px] font-bold uppercase tracking-widest"
                                style={{ color: 'rgba(103,232,249,0.75)' }}
                            >
                                {post.category}
                            </span>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${post.tagColor} text-black`}>
                                {post.tag}
                            </span>
                            <span
                                className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                                style={{ borderColor: 'rgba(6,182,212,0.35)', color: 'rgba(103,232,249,0.8)', background: 'rgba(6,182,212,0.06)' }}
                            >
                                ✦ Featured
                            </span>
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                            <span
                                className="text-3xl select-none flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl"
                                style={{
                                    background: 'rgba(6,182,212,0.09)',
                                    boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.45), inset -2px -2px 5px rgba(255,255,255,0.03)',
                                }}
                            >
                                {post.icon}
                            </span>
                            <h2 className="text-white font-black text-xl md:text-3xl leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                                {post.title}
                            </h2>
                        </div>

                        <p className="text-sm md:text-base mb-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.75' }}>
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-5 flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.tagColor} flex items-center justify-center text-xs font-black text-black`}>
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-white">{post.author}</p>
                                    <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{post.authorRole}</p>
                                </div>
                            </div>
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
                            <span className="text-xs font-medium" style={{ color: 'rgba(103,232,249,0.65)' }}>{post.readTime}</span>

                        </div>
                    </div>

                    {/* CTA side */}
                    <div className="flex-shrink-0">
                        <div
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 group-hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                                color: '#000',
                                boxShadow: '0 0 28px rgba(6,182,212,0.30)',
                            }}
                        >
                            Read Now
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </motion.article>
)

// ─── Pagination ───────────────────────────────────────────────────────────────
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            pages.push(i)
        }
    }

    const withEllipsis = []
    let prev = null
    for (const p of pages) {
        if (prev !== null && p - prev > 1) withEllipsis.push('...')
        withEllipsis.push(p)
        prev = p
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 mt-14"
        >
            {/* Prev */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                    background: 'linear-gradient(145deg, #111a14, #0d1410)',
                    boxShadow: '4px 4px 10px rgba(0,0,0,0.5), -2px -2px 6px rgba(255,255,255,0.025)',
                    border: '1px solid rgba(6,182,212,0.12)',
                    color: 'rgba(103,232,249,0.7)',
                }}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {withEllipsis.map((item, i) =>
                item === '...' ? (
                    <span key={`ellipsis-${i}`} className="px-1 text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>…</span>
                ) : (
                    <button
                        key={item}
                        onClick={() => onPageChange(item)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300"
                        style={
                            currentPage === item
                                ? {
                                    background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                                    color: '#000',
                                    boxShadow: '0 0 20px rgba(6,182,212,0.35)',
                                    border: '1px solid rgba(6,182,212,0.5)',
                                }
                                : {
                                    background: 'linear-gradient(145deg, #111a14, #0d1410)',
                                    boxShadow: '4px 4px 10px rgba(0,0,0,0.5), -2px -2px 6px rgba(255,255,255,0.025)',
                                    border: '1px solid rgba(6,182,212,0.12)',
                                    color: 'rgba(255,255,255,0.5)',
                                }
                        }
                    >
                        {item}
                    </button>
                )
            )}

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                    background: 'linear-gradient(145deg, #111a14, #0d1410)',
                    boxShadow: '4px 4px 10px rgba(0,0,0,0.5), -2px -2px 6px rgba(255,255,255,0.025)',
                    border: '1px solid rgba(6,182,212,0.12)',
                    color: 'rgba(103,232,249,0.7)',
                }}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </motion.div>
    )
}

// ─── Main BlogPage ─────────────────────────────────────────────────────────────
const POSTS_PER_PAGE = 6

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

    // Filter + search
    const filtered = useMemo(() => {
        return blog_posts.filter(p => {
            const matchCat = activeCategory === 'All' || p.category === activeCategory
            const matchSearch =
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.author.toLowerCase().includes(searchQuery.toLowerCase())
            const matchFeatured = !showFeaturedOnly || p.featured
            return matchCat && matchSearch && matchFeatured
        })
    }, [activeCategory, searchQuery, showFeaturedOnly])

    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
    const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

    // featured hero (first featured post, shown only on All / no search)
    const featuredHero = useMemo(() => {
        if (searchQuery || activeCategory !== 'All' || showFeaturedOnly) return null
        return blog_posts.find(p => p.featured)
    }, [searchQuery, activeCategory, showFeaturedOnly])

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat)
        setCurrentPage(1)
    }

    const handleSearch = (val) => {
        setSearchQuery(val)
        setCurrentPage(1)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div
            className="min-h-screen text-white relative overflow-hidden"
            style={{ background: '#050a0f' }}
        >
            {/* ── Stars ─────────────────────────────────────────────────────── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {STARS.map((s, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-pulse"
                        style={{
                            left: s.left,
                            top: s.top,
                            width: s.size,
                            height: s.size,
                            background: 'rgba(103,232,249,0.55)',
                            animationDelay: s.delay,
                            animationDuration: s.dur,
                        }}
                    />
                ))}
            </div>

            {/* ── Background Blobs ───────────────────────────────────────────── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Top-left cyan blob */}
                <div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.05) 55%, transparent 100%)',
                        animationDuration: '6s',
                    }}
                />
                {/* Right-centre blue blob */}
                <div
                    className="absolute top-1/3 -right-48 w-[480px] h-[480px] rounded-full blur-3xl animate-pulse"
                    style={{
                        background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
                        animationDelay: '1.4s',
                        animationDuration: '7s',
                    }}
                />
                {/* Bottom-centre sky blob */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full blur-3xl animate-pulse"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)',
                        animationDelay: '0.7s',
                        animationDuration: '5s',
                    }}
                />
                {/* Mid-left subtle blob */}
                <div
                    className="absolute top-2/3 left-10 w-[320px] h-[320px] rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
                        animationDelay: '2.2s',
                    }}
                />
            </div>

            {/* ── Content ───────────────────────────────────────────────────── */}
            <div className="relative z-10 pt-32 pb-28 px-4 sm:px-6">

                {/* ── Hero Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: -28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto text-center mb-14"
                >
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full text-sm font-semibold"
                        style={{
                            background: 'rgba(6,182,212,0.08)',
                            border: '1px solid rgba(6,182,212,0.25)',
                            color: 'rgba(103,232,249,0.9)',
                            boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(255,255,255,0.03)',
                        }}
                    >
                        <span>✍️</span> Insights, Strategies & Stories from Renoweb
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 leading-none">
                        The Renoweb{' '}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4 0%, #67e8f9 50%, #22d3ee 100%)' }}
                        >
                            Blog
                        </span>
                    </h1>

                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.48)' }}>
                        Practical insights, proven frameworks, and honest takes on digital marketing — written by our team, tested with our clients.
                    </p>
                </motion.div>

                {/* ── Search ── */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="max-w-xl mx-auto mb-10"
                >
                    <div className="relative">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                            style={{ color: 'rgba(103,232,249,0.5)' }}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search posts, topics, authors…"
                            value={searchQuery}
                            onChange={e => handleSearch(e.target.value)}
                            className="w-full pl-12 pr-5 py-4 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                            style={{
                                background: 'linear-gradient(145deg, #0e141a, #0a1014)',
                                border: '1px solid rgba(6,182,212,0.18)',
                                boxShadow: 'inset 3px 3px 8px rgba(0,0,0,0.45), inset -2px -2px 5px rgba(255,255,255,0.02)',
                            }}
                            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.45)')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(6,182,212,0.18)')}
                        />
                    </div>
                </motion.div>

                {/* ── Category Filters ── */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.25 }}
                    className="max-w-5xl mx-auto mb-5 flex flex-wrap gap-2.5 justify-center"
                >
                    {blog_categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className="relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                            style={
                                activeCategory === cat
                                    ? {
                                        background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                                        color: '#000',
                                        boxShadow: '0 0 22px rgba(6,182,212,0.38), inset 0 1px 0 rgba(255,255,255,0.2)',
                                    }
                                    : {
                                        background: 'linear-gradient(145deg, #0e141a, #0a1014)',
                                        border: '1px solid rgba(6,182,212,0.15)',
                                        color: 'rgba(255,255,255,0.5)',
                                        boxShadow: '3px 3px 8px rgba(0,0,0,0.4), -1px -1px 4px rgba(255,255,255,0.02)',
                                    }
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* ── Featured toggle ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="max-w-5xl mx-auto mb-12 flex justify-center"
                >
                    <button
                        onClick={() => { setShowFeaturedOnly(v => !v); setCurrentPage(1) }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300"
                        style={
                            showFeaturedOnly
                                ? {
                                    background: 'rgba(6,182,212,0.1)',
                                    border: '1px solid rgba(6,182,212,0.35)',
                                    color: 'rgba(103,232,249,0.9)',
                                    boxShadow: '0 0 14px rgba(6,182,212,0.15)',
                                }
                                : {
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    color: 'rgba(255,255,255,0.35)',
                                }
                        }
                    >
                        <span>✦</span>
                        {showFeaturedOnly ? 'Showing Featured Only' : 'Show Featured Only'}
                    </button>
                </motion.div>

                {/* ── Results meta ── */}
                <div className="max-w-7xl mx-auto mb-8 flex items-center gap-4">
                    <p className="text-sm flex-shrink-0" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        <span style={{ color: 'rgba(103,232,249,0.85)' }} className="font-semibold">{filtered.length}</span>
                        {' '}post{filtered.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All' && (
                            <> in <span style={{ color: 'rgba(103,232,249,0.85)' }} className="font-semibold">{activeCategory}</span></>
                        )}
                    </p>
                    <div className="h-px flex-1" style={{ background: 'rgba(6,182,212,0.1)' }} />
                    {totalPages > 1 && (
                        <p className="text-xs flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>
                            Page {currentPage} / {totalPages}
                        </p>
                    )}
                </div>

                {/* ── Featured Hero (only on first page, no filter/search) ── */}
                <AnimatePresence>
                    {featuredHero && currentPage === 1 && (
                        <div className="max-w-7xl mx-auto mb-8">
                            <FeaturedCard post={featuredHero} />
                        </div>
                    )}
                </AnimatePresence>

                {/* ── Grid ── */}
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        {paginated.length > 0 ? (
                            <motion.div
                                key={activeCategory + searchQuery + currentPage + showFeaturedOnly}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {paginated.map((post, i) => (
                                    <BlogCard key={post.id} post={post} index={i} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-24"
                            >
                                <div
                                    className="inline-block p-10 rounded-3xl"
                                    style={{
                                        background: 'linear-gradient(145deg, #0e141a, #0a1014)',
                                        border: '1px solid rgba(6,182,212,0.15)',
                                        boxShadow: '6px 6px 16px rgba(0,0,0,0.5), -3px -3px 10px rgba(255,255,255,0.02)',
                                    }}
                                >
                                    <span className="text-5xl block mb-4">🔎</span>
                                    <p className="text-xl font-bold text-white mb-1">No posts found</p>
                                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Try a different keyword or category</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Pagination ── */}
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>

                {/* ── Newsletter CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto mt-28 relative overflow-hidden rounded-3xl"
                    style={{
                        background: 'linear-gradient(145deg, #0e141a, #0a1014)',
                        border: '1px solid rgba(6,182,212,0.22)',
                        boxShadow: `
                            10px 10px 24px rgba(0,0,0,0.6),
                            -4px -4px 14px rgba(255,255,255,0.02),
                            inset 0 1px 0 rgba(255,255,255,0.03)
                        `,
                    }}
                >
                    {/* Inner glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 25% 50%, rgba(6,182,212,0.10) 0%, transparent 60%)',
                        }}
                    />
                    {/* Decorative blob */}
                    <div
                        className="absolute -right-16 -top-16 w-52 h-52 rounded-full blur-2xl pointer-events-none"
                        style={{ background: 'rgba(14,165,233,0.12)' }}
                    />
                    {/* Stars inside CTA */}
                    <div className="absolute top-4 left-8 w-1 h-1 rounded-full bg-cyan-400/40 animate-pulse" />
                    <div className="absolute top-10 right-20 w-1.5 h-1.5 rounded-full bg-blue-300/30 animate-pulse" style={{ animationDelay: '1.3s' }} />
                    <div className="absolute bottom-6 left-1/3 w-1 h-1 rounded-full bg-sky-400/35 animate-pulse" style={{ animationDelay: '0.7s' }} />

                    <div className="relative z-10 text-center px-8 py-16">
                        <span
                            className="block mb-4 text-xs font-bold uppercase tracking-widest"
                            style={{ color: 'rgba(103,232,249,0.7)' }}
                        >
                            Never Miss an Insight
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                            Get the Blog in Your Inbox
                        </h2>
                        <p className="mb-8 max-w-lg mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                            Weekly articles on SEO, content, growth, and what's actually working in digital marketing. No spam — just signal.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{
                                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                                boxShadow: '0 0 32px rgba(6,182,212,0.32)',
                            }}
                        >
                            Subscribe — It&apos;s Free
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default BlogPage
