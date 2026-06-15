"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthorSection from '../Author/AuthorSection';
import ContactForm from '../shared/ContactForm';


// ── Severity dot ──────────────────────────────────────────────────────────────
const SeverityDot = ({ severity }) => {
    const map = { critical: "bg-red-500", warning: "bg-yellow-500", info: "bg-blue-500" };
    return <span className={`inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[6px] ${map[severity] || "bg-gray-500"}`} />;
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function InternalCaseStudyPage({ caseStudy }) {
    const isDevOS = caseStudy.category === "Dev OS";

    return (
        <div className="min-h-screen bg-black text-white mt-[100px]">
            {isDevOS && (
                <>
                    <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl pointer-events-none" />
                </>
            )}

            <main className="max-w-7xl mx-auto px-6 py-16 relative z-10 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7">

                {/* Back */}
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 group">
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Case Studies
                </Link>

                {/* Category */}
                <div className="mb-6">
                    <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                        {caseStudy.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
                    {caseStudy.title}
                </h1>

                {/* About Client */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">About the Client</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{caseStudy.about_client}</p>
                </section>

                {/* ── DEV OS: Audit metrics ──────────────────────────────── */}
                {isDevOS && caseStudy.website_issues?.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-blue-400 mb-2">What The Audit Revealed</h2>
                        <p className="text-gray-400 mb-8 text-sm">Data pulled from Semrush Site Audit &amp; Google Analytics at time of engagement.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {caseStudy.website_issues.map((item, i) => (
                                <div key={i} className={`rounded-xl p-5 border flex flex-col gap-2 ${item.severity === "critical" ? "bg-red-950/20 border-red-900/40"
                                    : item.severity === "warning" ? "bg-yellow-950/20 border-yellow-900/40"
                                        : "bg-blue-950/20 border-blue-900/40"
                                    }`}>
                                    <p className={`text-3xl font-extrabold ${item.severity === "critical" ? "text-red-400"
                                        : item.severity === "warning" ? "text-yellow-400"
                                            : "text-blue-400"
                                        }`}>{item.stat}</p>
                                    <p className="text-white font-semibold text-sm">{item.label}</p>
                                    {item.note && <p className="text-gray-500 text-xs">{item.note}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Challenges */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Challenges</h2>
                    <div className="space-y-4">
                        {caseStudy.challenges.map((challenge, index) => (
                            isDevOS ? (
                                <div key={index} className="flex gap-3 items-start bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                                    <SeverityDot severity={index < 2 ? "critical" : index < 5 ? "warning" : "info"} />
                                    <p className="text-gray-300 leading-relaxed">{challenge}</p>
                                </div>
                            ) : (
                                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                                    <p className="text-gray-300 text-lg leading-relaxed">{challenge}</p>
                                </div>
                            )
                        ))}
                    </div>
                </section>

                {/* ── DEV OS: UI/UX issues with before screenshots ──────── */}
                {isDevOS && caseStudy.uiux_issues?.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-blue-400 mb-2">UI/UX &amp; Content Issues — Documented</h2>
                        <p className="text-gray-400 text-sm mb-10">Each issue is documented with screenshots from the original website, exactly as we found it.</p>

                        <div className="space-y-16">
                            {caseStudy.uiux_issues.map((issue, idx) => (
                                <div key={issue.id} className="relative">
                                    <div className="flex items-start gap-5">
                                        {/* Number */}
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/20 border border-blue-600/40 flex items-center justify-center font-black text-blue-400 text-sm">
                                            {String(idx + 1).padStart(2, "0")}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-3">{issue.title}</h3>
                                            <p className="text-gray-300 leading-relaxed text-base mb-6">{issue.description}</p>

                                            {/* Before screenshot */}
                                            {issue.beforeImage && <div className="rounded-xl overflow-hidden border border-gray-800">
                                                <div className="bg-red-900/20 border-b border-red-900/40 px-4 py-2">
                                                    <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                                                        ⚠ Before — What We Found
                                                    </span>
                                                </div>
                                                <div className="bg-gray-950">
                                                    {issue.beforeImage ? (
                                                        <Image
                                                            src={issue.beforeImage}
                                                            alt={issue.beforeCaption}
                                                            width={1000}
                                                            height={600}
                                                            className="w-full object-contain max-h-[520px]"
                                                            unoptimized
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                    {issue.beforeCaption && (
                                                        <p className="text-xs text-gray-500 italic text-center py-2 px-4 bg-gray-900/60">
                                                            {issue.beforeCaption}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>}
                                        </div>
                                    </div>

                                    {/* Connector line */}
                                    {idx < caseStudy.uiux_issues.length - 1 && (
                                        <div className="absolute left-5 top-10 bottom-[-64px] w-px bg-gradient-to-b from-blue-600/20 to-transparent" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Solutions */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Our Solution</h2>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Approach</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{caseStudy.solutions.approach}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Process</h3>
                        <div className="space-y-4">
                            {caseStudy.solutions.process.map((step, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results right now only for cquel case study*/}
                {isDevOS && caseStudy.id === "cquel-website-ui-ux-overhaul" && <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Results</h2>
                    <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-xl p-8">
                        <p className="text-gray-300 text-lg leading-relaxed">{caseStudy.conclusion}</p>
                        {isDevOS && (
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="bg-black/40 rounded-lg p-4 border border-blue-900/30 text-center">
                                    <p className="text-3xl font-extrabold text-blue-400">3,000%+</p>
                                    <p className="text-gray-400 text-sm mt-1">Traffic growth on comparable rebuilt sites</p>
                                </div>
                                <div className="bg-black/40 rounded-lg p-4 border border-blue-900/30 text-center">
                                    <p className="text-3xl font-extrabold text-blue-400">19K+</p>
                                    <p className="text-gray-400 text-sm mt-1">Active users in 28 days on a comparable client</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>}

                {/* ── DEV OS: Big Before / After showcase ───────────────── */}
                {isDevOS && caseStudy.beforeAfterShowcase && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-blue-400 mb-2">Before &amp; After</h2>
                        <p className="text-gray-400 text-sm mb-10">The full transformation — side by side.</p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* BEFORE */}
                            <div className="group relative">
                                {/* Radiant glow behind card */}
                                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-red-600/30 via-red-900/10 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <div
                                    className="relative flex flex-col rounded-2xl overflow-hidden border border-red-900/50 shadow-[0_0_40px_-8px_rgba(220,38,38,0.25)] group-hover:shadow-[0_0_60px_-4px_rgba(220,38,38,0.45)] transition-all duration-500"
                                    style={{ transform: "translateY(0)", transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease" }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px) scale(1.015)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}
                                >
                                    {/* Label bar */}
                                    <div className="bg-gradient-to-r from-red-950/80 to-gray-950 border-b border-red-900/40 px-5 py-3 flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.6)] inline-block flex-shrink-0" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-red-400">Before</span>
                                    </div>

                                    {/* Image */}
                                    <div className="bg-gray-950 overflow-hidden">
                                        {caseStudy.beforeAfterShowcase.before.image ? (
                                            <Image
                                                src={caseStudy.beforeAfterShowcase.before.image}
                                                alt="Before"
                                                width={1000}
                                                height={800}
                                                className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                                style={{ minHeight: "560px", maxHeight: "860px" }}
                                                unoptimized
                                            />
                                        ) : (
                                            <div
                                                style={{ minHeight: "560px" }}
                                                className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-red-950/20 via-gray-900 to-gray-950"
                                            >
                                                <svg className="w-14 h-14 text-red-900/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-red-900/50 text-sm font-semibold">Before Screenshot</p>
                                                <p className="text-gray-600 text-xs text-center max-w-[220px] leading-relaxed">
                                                    {caseStudy.beforeAfterShowcase.before.caption}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Caption bar */}
                                    <div className="bg-gradient-to-r from-red-950/40 to-gray-950 px-5 py-3 border-t border-red-900/20">
                                        <p className="text-xs text-gray-500 italic">{caseStudy.beforeAfterShowcase.before.caption}</p>
                                    </div>
                                </div>
                            </div>

                            {/* AFTER */}
                            <div className="group relative">
                                {/* Radiant glow behind card */}
                                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-blue-600/30 via-blue-900/10 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <div
                                    className="relative flex flex-col rounded-2xl overflow-hidden border border-blue-600/50 shadow-[0_0_40px_-8px_rgba(56,119,240,0.25)] group-hover:shadow-[0_0_60px_-4px_rgba(56,119,240,0.50)] transition-all duration-500"
                                    style={{ transform: "translateY(0)", transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease" }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px) scale(1.015)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}
                                >
                                    {/* Label bar */}
                                    <div className="bg-gradient-to-r from-blue-950/80 to-gray-950 border-b border-blue-900/40 px-5 py-3 flex items-center gap-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.7)] inline-block flex-shrink-0" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">After</span>
                                    </div>

                                    {/* Image */}
                                    <div className="bg-gray-950 overflow-hidden">
                                        {caseStudy.beforeAfterShowcase.after.image ? (
                                            <Image
                                                src={caseStudy.beforeAfterShowcase.after.image}
                                                alt="After"
                                                width={1000}
                                                height={800}
                                                className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                                style={{ minHeight: "560px", maxHeight: "860px" }}
                                                unoptimized
                                            />
                                        ) : (
                                            <div
                                                style={{ minHeight: "560px" }}
                                                className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-950/20 via-gray-900 to-gray-950"
                                            >
                                                <svg className="w-14 h-14 text-blue-900/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-blue-900/50 text-sm font-semibold">After Screenshot</p>
                                                <p className="text-gray-600 text-xs text-center max-w-[220px] leading-relaxed">
                                                    {caseStudy.beforeAfterShowcase.after.caption}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Caption bar */}
                                    <div className="bg-gradient-to-r from-blue-950/40 to-gray-950 px-5 py-3 border-t border-blue-900/20">
                                        <p className="text-xs text-gray-500 italic">{caseStudy.beforeAfterShowcase.after.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Key Takeaway */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Key Takeaway</h2>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                        <p className="text-gray-300 text-lg leading-relaxed italic">
                            {caseStudy.takeaway}
                        </p>
                    </div>
                </section>

                {/* PDF Download */}
                {caseStudy.link && (
                    <Link
                        href={caseStudy.link}
                        download
                        className="inline-flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-600/40 px-6 py-3 rounded-lg transition my-8 group relative"
                    >
                        <span className="absolute inset-0 rounded-lg bg-blue-600/20 animate-ping opacity-75" />
                        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="relative z-10 font-medium">Download Case Study PDF</span>
                    </Link>
                )}

                <AuthorSection author={caseStudy.author} coAuthor={caseStudy.coAuthor} />

                {/* CTA */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-gray-400 text-lg mb-8">Let&apos;s discuss how we can help you achieve similar results.</p>
                        <Link href="/contact-us">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-lg font-medium transition">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
                </div>

                {/* Right Sidebar - Sticky Contact Form */}
                <div className="lg:col-span-5 mt-12 lg:mt-0">
                    <div className="sticky top-32">
                        <ContactForm 
                            title="Ready to Transform Your Business?"
                            subtitle="Let's discuss how we can help you achieve similar results."
                            showBudget={false}
                        />
                    </div>
                </div>

            </main>
        </div>
    );
}