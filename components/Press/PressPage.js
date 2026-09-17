"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllPress } from '@/lib/db'

// ─── Star field ──────────────────────────────────────────────────────────────
const STARS = [
    { left: '10%', top: '8%', delay: '0s', dur: '3.4s', size: 2 },
    { left: '25%', top: '15%', delay: '1.2s', dur: '4.1s', size: 1 },
    { left: '42%', top: '5%', delay: '0.5s', dur: '3.7s', size: 1.5 },
    { left: '58%', top: '12%', delay: '2.1s', dur: '2.9s', size: 2 },
    { left: '70%', top: '20%', delay: '0.8s', dur: '4.3s', size: 1 },
    { left: '85%', top: '10%', delay: '1.6s', dur: '3.5s', size: 1.5 },
    { left: '93%', top: '35%', delay: '0.3s', dur: '5.1s', size: 1 },
    { left: '7%', top: '50%', delay: '1.9s', dur: '3.2s', size: 1 },
    { left: '18%', top: '72%', delay: '1s', dur: '4.6s', size: 2 },
    { left: '50%', top: '80%', delay: '2.4s', dur: '3.9s', size: 1 },
    { left: '76%', top: '65%', delay: '1.3s', dur: '3.1s', size: 1.5 },
    { left: '90%', top: '82%', delay: '0.6s', dur: '4.9s', size: 1 },
]

// ─── Helper: format date ─────────────────────────────────────────────────────
const formatDate = (dateStr) => {
    if (!dateStr) return ''
    try {
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    } catch {
        return dateStr
    }
}

// ─── Press Card ──────────────────────────────────────────────────────────────
const PressCard = ({ article, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group relative h-full"
    >
        <div
            className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1.5 flex flex-col"
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
            <div className="h-[3px] w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500" />

            {/* Cover image */}
            {article.imageUrl && (
                <div className="w-full aspect-[16/9] overflow-hidden relative">
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay on image */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(180deg, transparent 40%, rgba(13,18,21,0.9) 100%)',
                        }}
                    />
                </div>
            )}

            <div className="p-6 flex flex-col flex-1">
                {/* Source logo + date row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        {article.logoUrl && (
                            <div
                                className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <img
                                    src={article.logoUrl}
                                    alt="Source"
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                        )}
                        <span
                            className="text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: 'rgba(103,232,249,0.75)' }}
                        >
                            Press Coverage
                        </span>
                    </div>
                    {article.date && (
                        <span
                            className="text-[11px] font-medium flex-shrink-0"
                            style={{ color: 'rgba(255,255,255,0.35)' }}
                        >
                            {formatDate(article.date)}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h2 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-3">
                    {article.title}
                </h2>

                {/* Description */}
                <p
                    className="text-sm mb-5 flex-1"
                    style={{
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: '1.7',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {article.description}
                </p>

                {/* Divider */}
                <div className="h-px mb-4" style={{ background: 'rgba(6,182,212,0.1)' }} />

                {/* CTA Button */}
                <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                    style={{ color: 'rgba(103,232,249,0.8)' }}
                >
                    Read Full Article
                    <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </motion.article>
)

// ─── Featured Press Card (hero-style for latest article) ─────────────────────
const FeaturedPressCard = ({ article }) => (
    <motion.article
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative col-span-full"
    >
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
            <div className="h-[3px] w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500" />

            <div className="grid md:grid-cols-[1.2fr_1fr] gap-0">
                {/* Image side */}
                {article.imageUrl && (
                    <div className="w-full aspect-video md:aspect-auto md:h-full overflow-hidden relative">
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div
                            className="absolute inset-0 md:hidden"
                            style={{
                                background: 'linear-gradient(180deg, transparent 40%, rgba(13,18,21,0.95) 100%)',
                            }}
                        />
                        <div
                            className="absolute inset-0 hidden md:block"
                            style={{
                                background: 'linear-gradient(90deg, transparent 50%, rgba(13,18,21,0.95) 100%)',
                            }}
                        />
                    </div>
                )}

                {/* Content side */}
                <div className="p-7 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                        {article.logoUrl && (
                            <div
                                className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <img
                                    src={article.logoUrl}
                                    alt="Source"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                        )}
                        <span
                            className="text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: 'rgba(103,232,249,0.75)' }}
                        >
                            Featured Coverage
                        </span>
                        <span
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                            style={{
                                borderColor: 'rgba(6,182,212,0.35)',
                                color: 'rgba(103,232,249,0.8)',
                                background: 'rgba(6,182,212,0.06)',
                            }}
                        >
                            ✦ Latest
                        </span>
                    </div>

                    <h2 className="text-white font-black text-xl md:text-2xl lg:text-3xl leading-tight mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        {article.title}
                    </h2>

                    <p
                        className="text-sm md:text-base mb-6 max-w-xl"
                        style={{
                            color: 'rgba(255,255,255,0.48)',
                            lineHeight: '1.75',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >
                        {article.description}
                    </p>

                    {article.date && (
                        <p className="text-xs mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
                            {formatDate(article.date)}
                        </p>
                    )}

                    <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 group-hover:scale-105 w-fit"
                        style={{
                            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                            color: '#000',
                            boxShadow: '0 0 28px rgba(6,182,212,0.30)',
                        }}
                    >
                        Read Full Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </motion.article>
)

// ─── Main PressPage ──────────────────────────────────────────────────────────
const PressPage = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPress = async () => {
            setLoading(true)
            const data = await getAllPress()
            setArticles(data)
            setLoading(false)
        }
        loadPress()
    }, [])

    const featuredArticle = articles.length > 0 ? articles[0] : null
    const restArticles = articles.length > 1 ? articles.slice(1) : []

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
                <div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.05) 55%, transparent 100%)',
                        animationDuration: '6s',
                    }}
                />
                <div
                    className="absolute top-1/3 -right-48 w-[480px] h-[480px] rounded-full blur-3xl animate-pulse"
                    style={{
                        background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
                        animationDelay: '1.4s',
                        animationDuration: '7s',
                    }}
                />
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full blur-3xl animate-pulse"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)',
                        animationDelay: '0.7s',
                        animationDuration: '5s',
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
                    className="max-w-4xl mx-auto text-center mb-16"
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
                        <span>📰</span> Renoweb in the News
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 leading-none">
                        Press{' '}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4 0%, #67e8f9 50%, #22d3ee 100%)' }}
                        >
                            Coverage
                        </span>
                    </h1>

                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.48)' }}>
                        See what leading publications are saying about Renoweb Digital Solutions — our story, our impact, and the vision driving us forward.
                    </p>
                </motion.div>

                {/* ── Results meta ── */}
                {!loading && articles.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-7xl mx-auto mb-8 flex items-center gap-4"
                    >
                        <p className="text-sm flex-shrink-0" style={{ color: 'rgba(255,255,255,0.35)' }}>
                            <span style={{ color: 'rgba(103,232,249,0.85)' }} className="font-semibold">{articles.length}</span>
                            {' '}article{articles.length !== 1 ? 's' : ''} published
                        </p>
                        <div className="h-px flex-1" style={{ background: 'rgba(6,182,212,0.1)' }} />
                    </motion.div>
                )}

                {/* ── Featured Hero ── */}
                <AnimatePresence>
                    {featuredArticle && !loading && (
                        <div className="max-w-7xl mx-auto mb-10">
                            <FeaturedPressCard article={featuredArticle} />
                        </div>
                    )}
                </AnimatePresence>

                {/* ── Grid ── */}
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24">
                            <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mb-4" />
                            <p className="text-sm text-white/40 animate-pulse">Loading press coverage...</p>
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            {restArticles.length > 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {restArticles.map((article, i) => (
                                        <PressCard key={article.id} article={article} index={i} />
                                    ))}
                                </motion.div>
                            ) : articles.length === 0 ? (
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
                                        <span className="text-5xl block mb-4">📰</span>
                                        <p className="text-xl font-bold text-white mb-1">No press articles yet</p>
                                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Check back soon for the latest coverage</p>
                                    </div>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    )}
                </div>

                {/* ── CTA Section ── */}
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
                            Media Inquiries
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                            Want to Feature Renoweb?
                        </h2>
                        <p className="mb-8 max-w-lg mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                            We&apos;re always happy to share our story. For press inquiries, interviews, or media kits — reach out to our team.
                        </p>
                        <a
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{
                                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                                boxShadow: '0 0 32px rgba(6,182,212,0.32)',
                            }}
                        >
                            Get in Touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PressPage
