"use client"
import { useState } from "react";
import Case_studies_page_cards from "./Case_studies_page_cards";
import CategoryFilter from "./CategoryFilter";

const Case_studies_page = ({ case_studies }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const studiesPerPage = 6;

    // Filter case studies
    const filterCaseStudies = activeCategory === 'All'
        ? case_studies
        : case_studies.filter(study => study.category === activeCategory);

    // Pagination logic
    const indexOfLastStudy = currentPage * studiesPerPage;
    const indexOfFirstStudy = indexOfLastStudy - studiesPerPage;
    const currentStudies = filterCaseStudies.slice(indexOfFirstStudy, indexOfLastStudy);
    const totalPages = Math.ceil(filterCaseStudies.length / studiesPerPage);

    // Reset to page 1 when category changes
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Sparkly Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[
                    { left: '15%', top: '25%', delay: '0s', duration: '3s' },
                    { left: '35%', top: '60%', delay: '0.5s', duration: '2.5s' },
                    { left: '55%', top: '20%', delay: '1s', duration: '3.2s' },
                    { left: '75%', top: '70%', delay: '1.5s', duration: '2.8s' },
                    { left: '85%', top: '40%', delay: '2s', duration: '3.5s' },
                    { left: '25%', top: '80%', delay: '2.5s', duration: '2.2s' },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration
                        }}
                    />
                ))}
            </div>

            {/* Gradient Blobs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative z-10 pt-32 pb-20 px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Success Stories
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        CASE STUDIES
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Real results from real businesses. Discover how we&apos;ve helped companies achieve extraordinary growth.
                    </p>
                </div>

                {/* Category Filter */}
                <CategoryFilter
                    activeCategory={activeCategory}
                    setActiveCategory={handleCategoryChange}
                />

                {/* Results Count */}
                <div className="max-w-6xl mx-auto mb-8">
                    <p className="text-gray-400 text-sm">
                        Showing {indexOfFirstStudy + 1}-{Math.min(indexOfLastStudy, filterCaseStudies.length)} of {filterCaseStudies.length} results
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="max-w-6xl mx-auto">
                    {currentStudies.length !== 0 ? (
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {currentStudies.map((studies) => (
                                <Case_studies_page_cards studies={studies} key={studies.id} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-block p-8 bg-gray-900/50 border border-gray-800 rounded-2xl">
                                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p className="text-xl font-semibold text-gray-300 mb-2">
                                    No case studies found
                                </p>
                                <p className="text-gray-500">
                                    Try selecting a different category
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12">
                            {/* Previous Button */}
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Page Numbers */}
                            {[...Array(totalPages)].map((_, index) => {
                                const pageNumber = index + 1;

                                // Show first page, last page, current page, and pages around current
                                if (
                                    pageNumber === 1 ||
                                    pageNumber === totalPages ||
                                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                ) {
                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => goToPage(pageNumber)}
                                            className={`px-4 py-2 rounded-lg border transition ${currentPage === pageNumber
                                                ? 'bg-blue-600 border-blue-600 text-white'
                                                : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white hover:border-blue-600'
                                                }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    );
                                } else if (
                                    pageNumber === currentPage - 2 ||
                                    pageNumber === currentPage + 2
                                ) {
                                    return <span key={pageNumber} className="text-gray-600">...</span>;
                                }
                                return null;
                            })}

                            {/* Next Button */}
                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Case_studies_page;