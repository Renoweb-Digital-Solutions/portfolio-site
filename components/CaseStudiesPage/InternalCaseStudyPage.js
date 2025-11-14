import React from 'react';
import Link from 'next/link';

export default function InternalCaseStudyPage({ caseStudy }) {

    return (
        <div className="min-h-screen bg-black text-white mt-[100px]">
            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-16">
                {/* Back Button */}
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 group">
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Case Studies
                </Link>



                {/* Category Tag */}
                <div className="mb-6"></div>

                {/* Category Tag */}
                <div className="mb-6">
                    <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                        {caseStudy.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
                    {caseStudy.title}
                </h1>

                {/* About Client Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">About the Client</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {caseStudy.about_client}
                    </p>
                </section>

                {/* Challenges Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Challenges</h2>
                    <div className="space-y-4">
                        {caseStudy.challenges.map((challenge, index) => (
                            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                                <p className="text-gray-300 text-lg leading-relaxed">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Our Solution</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Approach</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {caseStudy.solutions.approach}
                        </p>
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

                {/* Conclusion Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Results</h2>
                    <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-xl p-8">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {caseStudy.conclusion}
                        </p>
                    </div>
                </section>

                {/* Key Takeaway Section */}
                <section>
                    <h2 className="text-2xl font-bold text-blue-400 mb-6">Key Takeaway</h2>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                        <p className="text-gray-300 text-lg leading-relaxed italic">
                            "{caseStudy.takeaway}"
                        </p>
                    </div>
                </section>

                {/* PDF Download Button - Add this after Back button */}
                {caseStudy.link && (
                    <Link
                        href={caseStudy.link}
                        download
                        className="inline-flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-600/40 px-6 py-3 rounded-lg transition my-8 group relative"
                    >
                        {/* Pulsing effect */}
                        <span className="absolute inset-0 rounded-lg bg-blue-600/20 animate-ping opacity-75"></span>

                        {/* Content */}
                        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="relative z-10 font-medium">Download Case Study PDF</span>
                    </Link>
                )}

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                        <p className="text-gray-400 text-lg mb-8">Let's discuss how we can help you achieve similar results.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-lg font-medium transition">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}