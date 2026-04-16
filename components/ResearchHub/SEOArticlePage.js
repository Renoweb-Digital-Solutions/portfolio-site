"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

/* ─── Reusable glass card wrapper ─────────────────────────── */
const Glass = ({ children, className = '', style = {} }) => (
    <div
        className={`rounded-2xl ${className}`}
        style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(251,146,60,0.18)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            ...style,
        }}
    >
        {children}
    </div>
)

/* ─── Section fade-in wrapper ─────────────────────────────── */
const FadeIn = ({ children, delay = 0, className = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay }}
        className={className}
    >
        {children}
    </motion.div>
)

/* ─── Inline stat pill ────────────────────────────────────── */
const StatPill = ({ value, label }) => (
    <div className="flex flex-col items-center text-center px-6 py-4">
        <span
            className="text-3xl md:text-4xl font-black bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg,#fb923c,#fbbf24)' }}
        >
            {value}
        </span>
        <span className="text-xs mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</span>
    </div>
)

/* ─── CSS Bar chart row ───────────────────────────────────── */
const BarRow = ({ label, pct, value, delay = 0 }) => (
    <FadeIn delay={delay} className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-white/80">{label}</span>
            <span className="text-sm font-bold" style={{ color: '#fbbf24' }}>{value}</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #fb923c, #fbbf24)' }}
            />
        </div>
    </FadeIn>
)

/* ─── Pull quote ──────────────────────────────────────────── */
const PullQuote = ({ text, attribution }) => (
    <FadeIn>
        <div
            className="relative my-10 px-8 py-7 rounded-2xl overflow-hidden"
            style={{
                background: 'rgba(251,146,60,0.07)',
                border: '1px solid rgba(251,146,60,0.25)',
                backdropFilter: 'blur(14px)',
            }}
        >
            <span
                className="absolute top-3 left-5 text-6xl leading-none font-serif select-none"
                style={{ color: 'rgba(251,146,60,0.25)' }}
            >"</span>
            <p className="relative z-10 text-lg md:text-xl font-semibold text-white/90 leading-relaxed pl-4">
                {text}
            </p>
            {attribution && (
                <p className="relative z-10 mt-3 pl-4 text-sm font-medium" style={{ color: 'rgba(251,191,36,0.7)' }}>
                    — {attribution}
                </p>
            )}
        </div>
    </FadeIn>
)

/* ─── Insight card ────────────────────────────────────────── */
const InsightCard = ({ icon, title, body }) => (
    <Glass className="p-5 hover:border-orange-400/40 transition-colors duration-300 group">
        <div className="text-2xl mb-3">{icon}</div>
        <h4 className="text-white font-bold text-sm mb-1.5 group-hover:text-amber-300 transition-colors">{title}</h4>
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>{body}</p>
    </Glass>
)

/* ─── Main component ──────────────────────────────────────── */
export default function SEOArticlePage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">

            {/* ══ Background blobs ══════════════════════════════════ */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full blur-3xl animate-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.16) 0%, transparent 70%)' }} />
                <div className="absolute top-1/2 -right-48 w-[480px] h-[480px] rounded-full blur-3xl animate-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)', animationDelay: '1.4s', animationDuration: '6s' }} />
                <div className="absolute bottom-0 left-1/3 w-[500px] h-[260px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(ellipse, rgba(253,224,71,0.07) 0%, transparent 70%)' }} />
                {[
                    { l: '8%', t: '18%', d: '0s', s: '4s' }, { l: '28%', t: '62%', d: '1s', s: '3.5s' },
                    { l: '52%', t: '12%', d: '0.5s', s: '5s' }, { l: '70%', t: '78%', d: '2s', s: '3.2s' },
                    { l: '90%', t: '40%', d: '1.8s', s: '4.5s' }, { l: '42%', t: '90%', d: '2.5s', s: '3.8s' },
                ].map((p, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ left: p.l, top: p.t, background: 'rgba(251,191,36,0.5)', animationDelay: p.d, animationDuration: p.s }} />
                ))}
            </div>

            {/* ══ Content ══════════════════════════════════════════ */}
            <div className="relative z-10 pt-32 pb-28 px-6">
                <div className="max-w-3xl mx-auto">

                    {/* ── Breadcrumb ── */}
                    <FadeIn className="mb-8">
                        <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                            <Link href="/research-hub" className="hover:text-amber-400 transition-colors">Research Hub</Link>
                            <span>/</span>
                            <span style={{ color: 'rgba(251,191,36,0.75)' }}>Digital Marketing</span>
                        </div>
                    </FadeIn>

                    {/* ── Category badge ── */}
                    <FadeIn delay={0.05} className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-black"
                            style={{ background: 'linear-gradient(90deg,#fb923c,#fbbf24)' }}>
                            Trending
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-widest"
                            style={{ color: 'rgba(251,146,60,0.75)' }}>
                            Digital Marketing
                        </span>
                    </FadeIn>

                    {/* ── Title ── */}
                    <FadeIn delay={0.1}>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
                            The State of SEO in 2025:{' '}
                            <span className="bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(90deg,#fb923c,#fbbf24)' }}>
                                How AI is Reshaping Search Rankings
                            </span>
                        </h1>
                    </FadeIn>

                    {/* ── Meta row ── */}
                    <FadeIn delay={0.15} className="flex flex-wrap items-center gap-4 mb-10 pb-8"
                        style={{ borderBottom: '1px solid rgba(251,146,60,0.12)' }}>
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-black"
                                style={{ background: 'linear-gradient(135deg,#fb923c,#fbbf24)' }}>
                                S
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Samara Kline</p>
                                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Head of Research</p>
                            </div>
                        </div>
                        <div className="h-4 w-px" style={{ background: 'rgba(255,255,255,0.12)' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>April 10, 2025</span>
                        <div className="h-4 w-px" style={{ background: 'rgba(255,255,255,0.12)' }} />
                        <span className="text-xs font-semibold" style={{ color: 'rgba(251,146,60,0.8)' }}>8 min read</span>
                        <div className="h-4 w-px" style={{ background: 'rgba(255,255,255,0.12)' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>4,200+ respondents · 12 countries</span>
                    </FadeIn>

                    {/* ══════════════════════════════════════════════════
                        ── KEY FINDINGS (glass callout) ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn delay={0.18} className="mb-12">
                        <Glass className="p-6 md:p-8" style={{ border: '1px solid rgba(251,146,60,0.3)' }}>
                            <div className="flex items-center gap-2 mb-5">
                                <span className="text-lg">📌</span>
                                <span className="text-xs font-bold uppercase tracking-widest"
                                    style={{ color: 'rgba(251,191,36,0.85)' }}>Key Findings at a Glance</span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    '62% of surveyed marketers say AI Overviews have reduced their organic CTR by at least 15%.',
                                    'E-E-A-T signals are now the single biggest ranking differentiator for informational content.',
                                    'Sites with structured data mark-up are 2.3× more likely to appear in AI-generated answers.',
                                    'Long-tail keyword traffic is up 34%, while broad informational queries are down 18%.',
                                    'Brand search volume is emerging as a proxy ranking signal in several verticals.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-black text-[10px] font-black"
                                            style={{ background: 'linear-gradient(135deg,#fb923c,#fbbf24)' }}>
                                            {i + 1}
                                        </span>
                                        <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Glass>
                    </FadeIn>

                    {/* ── Stat strip ── */}
                    <FadeIn className="mb-14">
                        <Glass className="overflow-hidden">
                            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
                                style={{ divideColor: 'rgba(251,146,60,0.1)' }}>
                                <StatPill value="4,200+" label="Respondents surveyed" />
                                <StatPill value="12" label="Countries" />
                                <StatPill value="62%" label="Saw CTR drop from AI Overviews" />
                                <StatPill value="2.3×" label="Structured-data ranking lift" />
                            </div>
                        </Glass>
                    </FadeIn>

                    {/* ══════════════════════════════════════════════════
                        ── SECTION 1 ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn className="mb-4">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                            The AI Search Revolution Is Already Here
                        </h2>
                    </FadeIn>
                    <FadeIn className="prose-custom mb-6">
                        <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            When Google quietly expanded its AI Overviews rollout to all U.S. users in May 2024, SEO practitioners noticed an almost immediate shift in traffic patterns. Our survey, conducted across Q1 2025 with 4,200+ digital marketers, in‑house SEO managers, and agency leads across 12 countries, confirms what many feared: <strong className="text-white">the rules of organic search have fundamentally changed.</strong>
                        </p>
                        <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            Large language models are no longer just a feature on the horizon — they are the interface through which a growing share of users receive search results. Instead of ten blue links, users increasingly see a synthesised paragraph at the top of the page, generated by Gemini or a GPT-based engine. The source sites that feed that paragraph may receive attribution, but crucially, the user never has to click.
                        </p>
                    </FadeIn>

                    <PullQuote
                        text="We went from 12,000 monthly organic visits to 8,400 almost overnight. The content hadn't changed. The AI had simply started answering our audience's questions itself."
                        attribution="SEO Director, B2B SaaS company · 280 employees"
                    />

                    {/* ══════════════════════════════════════════════════
                        ── SECTION 2: Ranking factor bar chart ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
                            How Ranking Signals Have Shifted
                        </h2>
                        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
                            % of respondents ranking each factor as "High Impact" in 2025 vs. 2023
                        </p>
                    </FadeIn>

                    <FadeIn className="mb-14">
                        <Glass className="p-6 md:p-8">
                            <BarRow label="E-E-A-T (Experience, Expertise, Authoritativeness, Trust)" pct={91} value="91%" delay={0} />
                            <BarRow label="Structured data & schema markup" pct={84} value="84%" delay={0.06} />
                            <BarRow label="Core Web Vitals / Page experience" pct={78} value="78%" delay={0.12} />
                            <BarRow label="Topical authority & content depth" pct={76} value="76%" delay={0.18} />
                            <BarRow label="Brand search volume" pct={68} value="68%" delay={0.24} />
                            <BarRow label="Backlink profile" pct={61} value="61%" delay={0.30} />
                            <BarRow label="Keyword density" pct={19} value="19%" delay={0.36} />
                            <p className="text-xs mt-5 pt-4" style={{ color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(251,146,60,0.08)' }}>
                                Source: Renoweb Research Hub · Q1 2025 SEO Benchmark Survey (n = 4,214)
                            </p>
                        </Glass>
                    </FadeIn>

                    {/* ══════════════════════════════════════════════════
                        ── SECTION 3: Zero-click economy ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn className="mb-4">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                            The Zero-Click Economy Accelerates
                        </h2>
                    </FadeIn>
                    <FadeIn className="mb-8">
                        <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            Zero-click searches — where the user's query is satisfied directly on the results page — are not new. Featured snippets, knowledge panels, and local packs have existed for years. What is new is the <em className="text-amber-300">scale and completeness</em> of AI-generated answers, which can synthesise answers to complex multi-step queries that previously required clicking into three or four sources.
                        </p>
                        <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            Our analysis of 820 tracked keywords across seven industries found that zero-click rates for informational queries climbed from an average of 42% in Q1 2023 to <strong className="text-white">61% in Q1 2025</strong>. Transactional and navigational queries remain largely click-driven — for now.
                        </p>
                    </FadeIn>

                    {/* ── Zero-click visualisation ── */}
                    <FadeIn className="mb-14">
                        <Glass className="p-6 md:p-8">
                            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'rgba(251,191,36,0.8)' }}>
                                Zero-Click Rate by Query Intent (Q1 2025)
                            </p>
                            {[
                                { label: 'Informational', pct: 61, value: '61%' },
                                { label: 'Commercial investigation', pct: 38, value: '38%' },
                                { label: 'Transactional', pct: 14, value: '14%' },
                                { label: 'Navigational', pct: 9, value: '9%' },
                            ].map((r, i) => (
                                <BarRow key={i} label={r.label} pct={r.pct} value={r.value} delay={i * 0.07} />
                            ))}
                        </Glass>
                    </FadeIn>

                    {/* ══════════════════════════════════════════════════
                        ── SECTION 4: What's actually working ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                            What's Actually Working Right Now
                        </h2>
                        <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            Despite the disruption, a subset of sites in our survey consistently grew organic traffic. We identified four common characteristics:
                        </p>
                    </FadeIn>

                    <FadeIn className="mb-14">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <InsightCard
                                icon="🧑‍💼"
                                title="First-hand expertise signals"
                                body="Pages authored by named, credentialed experts with clear bio pages, linked social profiles, and direct-experience language consistently outperformed anonymously authored content."
                            />
                            <InsightCard
                                icon="🔗"
                                title="Structured data implementation"
                                body="Sites that implemented Article, FAQ, HowTo, and Product schema saw a 2.3× higher citation rate inside AI Overviews — even when they didn't rank #1 organically."
                            />
                            <InsightCard
                                icon="🏷️"
                                title="Brand search investment"
                                body="Brands running awareness campaigns saw correlated improvements in organic ranking for competitive head terms — suggesting Google treats brand search volume as a trust proxy."
                            />
                            <InsightCard
                                icon="📐"
                                title="Topical cluster architecture"
                                body="Sites that reorganised content into deep topical clusters — pillar page + 8–15 supporting articles — outperformed scattered blog strategies in every vertical we tracked."
                            />
                        </div>
                    </FadeIn>

                    <PullQuote
                        text="Schema didn't just help us rank. It got us cited in the AI Overview for a term we didn't even rank top-5 for. That changed everything about how we think about structured data."
                        attribution="Head of Organic, E-Commerce Brand · UK"
                    />

                    {/* ══════════════════════════════════════════════════
                        ── SECTION 5: Strategy recommendations ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                            5 Strategic Shifts for 2025 and Beyond
                        </h2>
                    </FadeIn>

                    <FadeIn className="mb-14">
                        <div className="space-y-4">
                            {[
                                {
                                    n: '01',
                                    title: 'Optimise for AI citation, not just position 1',
                                    body: 'Study which sources appear in AI Overviews for your target queries. Reverse-engineer their E-E-A-T signals, schema usage, and content depth. Being cited at position 5 in the AI answer may outperform ranking #1 organically for CTR.'
                                },
                                {
                                    n: '02',
                                    title: 'Build a named-author content strategy',
                                    body: 'Anonymous "staff writer" content is losing ground fast. Invest in visible authors with expertise pages, social proof, and consistent bylines. Consider byline policies for all published content.'
                                },
                                {
                                    n: '03',
                                    title: 'Implement schema comprehensively',
                                    body: 'Go beyond Article schema. Add SpeakableSpecification, FAQPage, HowTo, and ClaimReview where relevant. AI models parse structured data aggressively when forming answers.'
                                },
                                {
                                    n: '04',
                                    title: 'Invest in brand-building alongside SEO',
                                    body: 'Run paid and social campaigns that drive brand awareness — not just for conversion, but as a deliberate signal to search engines. Track branded search volume monthly as an SEO KPI.'
                                },
                                {
                                    n: '05',
                                    title: 'Double down on long-tail & BOFU content',
                                    body: 'Broad informational queries are increasingly zero-click. Bottom-of-funnel, high-intent long-tail keywords remain click-driven. Redirect content investment accordingly.'
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -14 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.07 }}
                                >
                                    <Glass className="p-5 md:p-6 flex gap-5 hover:border-orange-400/35 transition-colors duration-300 group">
                                        <span
                                            className="shrink-0 text-2xl font-black leading-none bg-clip-text text-transparent"
                                            style={{ backgroundImage: 'linear-gradient(135deg,#fb923c,#fbbf24)' }}
                                        >
                                            {item.n}
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1.5 group-hover:text-amber-300 transition-colors">{item.title}</h4>
                                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.body}</p>
                                        </div>
                                    </Glass>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* ══════════════════════════════════════════════════
                        ── Methodology ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn className="mb-16">
                        <Glass className="p-5 md:p-7" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                            <p className="text-xs font-bold uppercase tracking-widest mb-3"
                                style={{ color: 'rgba(251,191,36,0.65)' }}>Methodology</p>
                            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                                Data collected via online survey (n = 4,214) between January 6 – February 28, 2025. Respondents self-identified as in-house SEO specialists, digital marketing managers, or agency practitioners with ≥2 years of experience. Countries represented: USA, UK, Canada, Australia, Germany, France, India, Brazil, Netherlands, UAE, South Africa, Singapore. Keyword data drawn from a panel of 820 tracked keywords across Healthcare, SaaS, E-Commerce, Finance, Legal, Travel, and Home Services verticals. Margin of error ±1.8% at 95% confidence.
                            </p>
                        </Glass>
                    </FadeIn>

                    {/* ══════════════════════════════════════════════════
                        ── Author bio ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn className="mb-16">
                        <div className="flex items-start gap-5 pt-8" style={{ borderTop: '1px solid rgba(251,146,60,0.12)' }}>
                            <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-black"
                                style={{ background: 'linear-gradient(135deg,#fb923c,#fbbf24)' }}>
                                S
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm mb-0.5">Samara Kline</p>
                                <p className="text-xs mb-2" style={{ color: 'rgba(251,146,60,0.7)' }}>Head of Research · Renoweb Digital Solutions</p>
                                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                    Samara leads Renoweb's research division, specialising in organic growth, search algorithm shifts, and content-led acquisition. She has 9 years of experience across agency and in-house roles, and has contributed to publications including Search Engine Land and Moz Blog.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* ══════════════════════════════════════════════════
                        ── Back / CTA row ──
                    ══════════════════════════════════════════════════ */}
                    <FadeIn>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href="/research-hub"
                                className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                                style={{ color: 'rgba(251,191,36,0.8)' }}
                            >
                                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                Back to Research Hub
                            </Link>
                            <div className="hidden sm:block h-4 w-px" style={{ background: 'rgba(255,255,255,0.12)' }} />
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-black transition-all duration-300 hover:scale-105"
                                style={{ background: 'linear-gradient(90deg,#fb923c,#fbbf24)', boxShadow: '0 0 24px rgba(251,146,60,0.3)' }}
                            >
                                Get a Free SEO Audit
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </div>
    )
}
