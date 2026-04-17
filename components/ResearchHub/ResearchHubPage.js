"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const researchArticles = [
    {
        id: 1,
        category: 'Digital Marketing',
        title: 'The State of SEO in 2025: How AI is Reshaping Search Rankings',
        excerpt: 'A deep-dive into how large language models are redefining search intent, featured snippets, and the zero-click economy — and what it means for your content strategy.',
        author: 'Samara Kline',
        authorRole: 'Head of Research',
        date: 'April 10, 2025',
        readTime: '8 min read',
        tag: 'Trending',
        tagColor: 'from-orange-500 to-amber-400',
        stats: [
            { label: 'Respondents', value: '4,200+' },
            { label: 'Countries', value: '12' },
        ],
        icon: '🔍',
        href: '/research-hub/state-of-seo-2025',
    },
    {
        id: 2,
        category: 'Consumer Behaviour',
        title: 'Trust in Brands: Why 67% of Buyers Research Before Purchasing',
        excerpt: 'Our latest survey reveals the surprising weight of peer reviews, case studies, and social proof in consumer purchasing decisions across B2B and B2C verticals.',
        author: 'Liam Osei',
        authorRole: 'Data Analyst',
        date: 'March 28, 2025',
        readTime: '6 min read',
        tag: 'New',
        tagColor: 'from-yellow-400 to-orange-400',
        stats: [
            { label: 'Respondents', value: '8,100+' },
            { label: 'Industries', value: '9' },
        ],
        icon: '📊',
    },
    {
        id: 3,
        category: 'Social Media',
        title: 'Short-Form Video vs Long-Form: Which Converts Better in 2025?',
        excerpt: 'We analysed over 500 brand campaigns across TikTok, YouTube Shorts, and Instagram Reels to determine which format drives higher ROI for service-based businesses.',
        author: 'Priya Mehta',
        authorRole: 'Content Strategist',
        date: 'March 15, 2025',
        readTime: '10 min read',
        tag: 'Featured',
        tagColor: 'from-amber-500 to-yellow-300',
        stats: [
            { label: 'Campaigns Analysed', value: '500+' },
            { label: 'Platforms', value: '3' },
        ],
        icon: '🎬',
    },
    {
        id: 4,
        category: 'Lead Generation',
        title: 'The Hidden Cost of Cold Outreach: A 2025 Benchmark Report',
        excerpt: 'Cold outreach costs are rising while response rates are falling. Our benchmark report gives you the data to pivot toward inbound lead generation before it\'s too late.',
        author: 'Daniel Roth',
        authorRole: 'Growth Lead',
        date: 'February 22, 2025',
        readTime: '7 min read',
        tag: 'Report',
        tagColor: 'from-orange-600 to-red-400',
        stats: [
            { label: 'Companies Surveyed', value: '1,800+' },
            { label: 'Sectors', value: '6' },
        ],
        icon: '📬',
    },
    {
        id: 5,
        category: 'Branding',
        title: 'Colour Psychology in Digital Branding: What the Data Says',
        excerpt: 'From the warmth of amber to the authority of navy — our study breaks down how colour choices in digital branding affect trust, recall, and purchase likelihood.',
        author: 'Amara Jones',
        authorRole: 'Brand Researcher',
        date: 'February 5, 2025',
        readTime: '5 min read',
        tag: 'Popular',
        tagColor: 'from-yellow-500 to-amber-600',
        stats: [
            { label: 'Participants', value: '3,400+' },
            { label: 'Brands Tested', value: '48' },
        ],
        icon: '🎨',
    },
    {
        id: 6,
        category: 'E-Commerce',
        title: 'Checkout Abandonment: 5 Friction Points Killing Your Conversions',
        excerpt: 'We tracked 50,000 checkout sessions to identify the exact moments users drop off — and the micro-UX improvements that recover up to 23% of lost revenue.',
        author: 'Marcus Chen',
        authorRole: 'UX Researcher',
        date: 'January 18, 2025',
        readTime: '9 min read',
        tag: 'Trending',
        tagColor: 'from-orange-500 to-amber-400',
        stats: [
            { label: 'Sessions Tracked', value: '50,000+' },
            { label: 'Stores', value: '22' },
        ],
        icon: '🛒',
    },
    {
        id: 7,
        category: 'Digital Marketing',
        title: 'Email Isn\'t Dead: Open Rates Hit a 7-Year High in Q1 2025',
        excerpt: 'Amid the noise about AI and social media, email quietly staged a comeback. Our Q1 data shows personalised, segmented emails are outperforming paid ads in several key verticals.',
        author: 'Sophia Williams',
        authorRole: 'Email Marketing Lead',
        date: 'January 9, 2025',
        readTime: '6 min read',
        tag: 'New',
        tagColor: 'from-yellow-400 to-orange-400',
        stats: [
            { label: 'Emails Tracked', value: '12M+' },
            { label: 'Campaigns', value: '340+' },
        ],
        icon: '✉️',
    },
    {
        id: 8,
        category: 'Consumer Behaviour',
        title: 'Gen Z vs Millennials: The Loyalty Gap in Digital Services',
        excerpt: 'Retention strategies that work for Millennials are failing with Gen Z. Our cross-generational study reveals where brands are losing younger customers — and how to win them back.',
        author: 'Aisha Tremblay',
        authorRole: 'Consumer Insights Lead',
        date: 'December 20, 2024',
        readTime: '11 min read',
        tag: 'Featured',
        tagColor: 'from-amber-500 to-yellow-300',
        stats: [
            { label: 'Participants', value: '6,700+' },
            { label: 'Age Groups', value: '4' },
        ],
        icon: '👥',
    },
]

const categories = ['All', 'Digital Marketing', 'Consumer Behaviour', 'Social Media', 'Lead Generation', 'Branding', 'E-Commerce']

const ArticleCard = ({ article, index }) => {
    const card = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
            style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(251, 146, 60, 0.15)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
            }}
        >
            {/* Hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                    background: 'radial-gradient(ellipse at top left, rgba(251,146,60,0.08) 0%, transparent 60%)',
                }}
            />

            {/* Top accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${article.tagColor}`} />

            <div className="p-6 md:p-7">
                {/* Category + Tag */}
                <div className="flex items-center justify-between mb-4">
                    <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: 'rgba(251,146,60,0.8)' }}
                    >
                        {article.category}
                    </span>
                    <span
                        className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${article.tagColor} text-black`}
                    >
                        {article.tag}
                    </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl mt-0.5 select-none">{article.icon}</span>
                    <h2 className="text-white font-bold text-lg leading-snug group-hover:text-amber-300 transition-colors duration-300">
                        {article.title}
                    </h2>
                </div>

                {/* Excerpt */}
                <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.65' }}>
                    {article.excerpt}
                </p>

                {/* Stats
                <div className="flex gap-5 mb-5">
                    {article.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                            <span
                                className={`text-base font-extrabold bg-gradient-to-r ${article.tagColor} bg-clip-text text-transparent`}
                            >
                                {stat.value}
                            </span>
                            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span>
                        </div>
                    ))}
                </div> */}

                {/* Divider */}
                <div className="h-px mb-4" style={{ background: 'rgba(251,146,60,0.1)' }} />

                {/* Author + Read time */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-7 h-7 rounded-full bg-gradient-to-br ${article.tagColor} flex items-center justify-center text-xs font-bold text-black`}
                        >
                            {article.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-white">{article.author}</p>
                            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{article.authorRole}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{article.date}</p>
                        <p className="text-xs font-medium" style={{ color: 'rgba(251,146,60,0.7)' }}>{article.readTime}</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="px-7 pb-6">
                <div
                    className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                    style={{ color: 'rgba(251,191,36,0.85)' }}
                >
                    Read Full Report
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </motion.div>
    )

    if (article.href) {
        return (
            <Link href={article.href} className="block h-full">
                {card}
            </Link>
        )
    }
    return card
}

const ResearchHubPage = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filtered = researchArticles.filter(a => {
        const matchCat = activeCategory === 'All' || a.category === activeCategory
        const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCat && matchSearch
    })

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* ── Background Blobs ───────────────────────────────── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Large amber blob – top left */}
                <div
                    className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl animate-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.18) 0%, rgba(245,158,11,0.06) 60%, transparent 100%)' }}
                />
                {/* Orange blob – centre right */}
                <div
                    className="absolute top-1/3 -right-40 w-[440px] h-[440px] rounded-full blur-3xl animate-pulse"
                    style={{
                        background: 'radial-gradient(circle, rgba(234,88,12,0.14) 0%, transparent 70%)',
                        animationDelay: '1.2s',
                        animationDuration: '5s',
                    }}
                />
                {/* Yellow blob – bottom centre */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(253,224,71,0.08) 0%, transparent 70%)',
                        animationDelay: '0.6s',
                    }}
                />
                {/* Floating particles */}
                {[
                    { left: '10%', top: '20%', delay: '0s', dur: '4s', size: 'w-1.5 h-1.5' },
                    { left: '30%', top: '65%', delay: '1s', dur: '3.5s', size: 'w-1 h-1' },
                    { left: '55%', top: '15%', delay: '0.5s', dur: '4.5s', size: 'w-2 h-2' },
                    { left: '72%', top: '75%', delay: '2s', dur: '3s', size: 'w-1 h-1' },
                    { left: '88%', top: '35%', delay: '1.5s', dur: '5s', size: 'w-1.5 h-1.5' },
                    { left: '45%', top: '88%', delay: '2.5s', dur: '3.8s', size: 'w-1 h-1' },
                ].map((p, i) => (
                    <div
                        key={i}
                        className={`absolute ${p.size} rounded-full animate-pulse`}
                        style={{
                            left: p.left, top: p.top,
                            background: 'rgba(251,191,36,0.45)',
                            animationDelay: p.delay,
                            animationDuration: p.dur,
                        }}
                    />
                ))}
            </div>

            {/* ── Content ────────────────────────────────────────── */}
            <div className="relative z-10 pt-32 pb-24 px-6">

                {/* ── Hero ── */}
                <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="max-w-4xl mx-auto text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-sm font-semibold border"
                        style={{
                            background: 'rgba(251,146,60,0.12)',
                            borderColor: 'rgba(251,146,60,0.3)',
                            color: 'rgba(251,191,36,1)',
                        }}
                    >
                        <span>📡</span> Data-driven Insights & Reports
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5 leading-none">
                        Research{' '}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(90deg, #fb923c 0%, #fbbf24 50%, #f59e0b 100%)' }}
                        >
                            Hub
                        </span>
                    </h1>

                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        Original research, industry benchmarks, and data-backed insights to help you make smarter decisions — the way YouGov does, but built for digital growth.
                    </p>
                </motion.div>

                {/* ── Search Bar ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="max-w-xl mx-auto mb-10"
                >
                    <div className="relative">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                            style={{ color: 'rgba(251,146,60,0.6)' }}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search reports, topics, categories…"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-5 py-3.5 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(251,146,60,0.2)',
                                backdropFilter: 'blur(12px)',
                            }}
                            onFocus={e => e.currentTarget.style.borderColor = 'rgba(251,146,60,0.5)'}
                            onBlur={e => e.currentTarget.style.borderColor = 'rgba(251,146,60,0.2)'}
                        />
                    </div>
                </motion.div>

                {/* ── Category Filters ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.25 }}
                    className="max-w-5xl mx-auto mb-12 flex flex-wrap gap-3 justify-center"
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden"
                            style={
                                activeCategory === cat
                                    ? {
                                        background: 'linear-gradient(90deg, #fb923c, #fbbf24)',
                                        color: '#000',
                                        boxShadow: '0 0 20px rgba(251,146,60,0.40)',
                                    }
                                    : {
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(251,146,60,0.2)',
                                        color: 'rgba(255,255,255,0.55)',
                                    }
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* ── Results meta ── */}
                <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Showing <span style={{ color: 'rgba(251,191,36,0.9)' }} className="font-semibold">{filtered.length}</span> report{filtered.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All' && <> in <span style={{ color: 'rgba(251,191,36,0.9)' }} className="font-semibold">{activeCategory}</span></>}
                    </p>
                    <div className="h-px flex-1 mx-6" style={{ background: 'rgba(251,146,60,0.12)' }} />
                </div>

                {/* ── Articles Grid ── */}
                <AnimatePresence mode="wait">
                    {filtered.length > 0 ? (
                        <motion.div
                            key={activeCategory + searchQuery}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filtered.map((article, i) => (
                                <ArticleCard key={article.id} article={article} index={i} />
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
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(251,146,60,0.15)',
                                    backdropFilter: 'blur(12px)',
                                }}
                            >
                                <span className="text-5xl block mb-4">🔎</span>
                                <p className="text-xl font-bold text-white mb-1">No results found</p>
                                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Try a different keyword or category</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Newsletter / CTA Glassmorphism Banner ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto mt-28 relative overflow-hidden rounded-3xl"
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(251,146,60,0.25)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                    }}
                >
                    {/* Inner glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 30% 50%, rgba(251,146,60,0.12) 0%, transparent 60%)',
                        }}
                    />
                    {/* Decorative blob */}
                    <div
                        className="absolute -right-16 -top-16 w-52 h-52 rounded-full blur-2xl pointer-events-none"
                        style={{ background: 'rgba(245,158,11,0.15)' }}
                    />

                    <div className="relative z-10 text-center px-8 py-16">
                        <span
                            className="block mb-5 text-xs font-bold uppercase tracking-widest"
                            style={{ color: 'rgba(251,191,36,0.8)' }}
                        >
                            Stay Ahead of the Curve
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                            Get Research Delivered to Your Inbox
                        </h2>
                        <p className="mb-8 max-w-lg mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            New reports, benchmarks, and data insights — delivered monthly. No fluff, just signals worth acting on.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{
                                background: 'linear-gradient(90deg, #fb923c 0%, #fbbf24 100%)',
                                boxShadow: '0 0 30px rgba(251,146,60,0.35)',
                            }}
                        >
                            Subscribe for Free
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

export default ResearchHubPage
