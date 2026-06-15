"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


import { getAllResearch, getAllBlogs, getAllCaseStudies } from '@/lib/db';

// Component imports
import { BlogCard } from '@/components/Blog/BlogPage';
import { ArticleCard } from '@/components/ResearchHub/ResearchHubPage';

export default function ResourcePage() {
    const [caseStudies, setCaseStudies] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);
    const [researchArticles, setResearchArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [researchData, blogData, caseData] = await Promise.all([
                    getAllResearch(),
                    getAllBlogs(),
                    getAllCaseStudies()
                ]);

                // Map Research Data
                const mappedResearch = researchData.map(article => ({
                    ...article,
                    id: article.id,
                    category: article.category || 'Research',
                    title: article.title || 'Untitled',
                    excerpt: article.abstract || article.excerpt || '',
                    author: typeof article.author === 'string' ? article.author : (article.author?.name || 'Renoweb Team'),
                    authorRole: article.author?.role || 'Head of Research',
                    date: article.publishDate || '',
                    readTime: article.readTime || '5 min read',
                    tag: article.tags?.[0] || 'Report',
                    tagColor: article.tagColor || 'from-orange-500 to-amber-400',
                    icon: article.icon || '📊',
                    href: `/research-hub/${article.slug || article.id}`
                }));

                // Map Blog Data
                const mappedBlogs = blogData.map(blog => ({
                    ...blog,
                    id: blog.id,
                    category: blog.category || 'Blog',
                    title: blog.title || 'Untitled',
                    excerpt: blog.excerpt || '',
                    author: typeof blog.author === 'string' ? blog.author : (blog.author?.name || 'Renoweb Team'),
                    authorRole: blog.author?.role || 'Expert',
                    date: blog.publishDate || '',
                    readTime: blog.readTime || '5 min read',
                    tag: blog.tags?.[0] || 'Article',
                    tagColor: blog.tagColor || 'from-cyan-500 to-sky-400',
                    icon: blog.icon || '📝',
                    href: `/blog/${blog.slug || blog.id}`
                }));

                // Map Case Study Data
                const mappedCases = caseData.map(cs => ({
                    ...cs,
                    id: cs.id,
                    category: cs.category || 'Case Study',
                    title: cs.title || cs.client || 'Untitled',
                    excerpt: cs.excerpt || cs.challenge || cs.summary || '',
                    author: typeof cs.author === 'string' ? cs.author : (cs.author?.name || 'Renoweb Team'),
                    authorRole: cs.author?.role || 'Strategist',
                    date: cs.publishDate || cs.date || '',
                    readTime: cs.readTime || '10 min read',
                    tag: cs.tags?.[0] || 'Success Story',
                    tagColor: cs.tagColor || 'from-blue-500 to-indigo-400',
                    icon: cs.icon || '📈',
                    href: `/case-studies/${cs.slug || cs.id}`
                }));

                setResearchArticles(mappedResearch.slice(0, 3));
                setBlogPosts(mappedBlogs.slice(0, 3));
                setCaseStudies(mappedCases.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch resource data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);


    const SectionHeader = ({ title, link, linkText }) => (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
            </div>
            <Link href={link} className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 group transition-colors">
                {linkText}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                </svg>
            </Link>
        </div>
    );

    const EmptyState = ({ message }) => (
        <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-12 text-center">
            <span className="text-4xl mb-4 block opacity-50">📂</span>
            <h3 className="text-xl font-bold text-white mb-2">No items found</h3>
            <p className="text-gray-400">{message}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden pt-32 pb-24">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold mb-6 tracking-wide uppercase">
                        Resource Center
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                        Insights to Fuel Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Growth</span>
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Explore our latest case studies, blog posts, and research reports. Everything you need to stay ahead in the digital landscape.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {/* Case Studies Section */}
                    <section>
                        <SectionHeader 
                            title="Recent Case Studies" 
                            link="/case-studies" 
                            linkText="View All Case Studies" 
                        />
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mb-4" />
                                <p className="text-sm text-gray-400 animate-pulse">Loading case studies...</p>
                            </div>
                        ) : caseStudies.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {caseStudies.map((study, index) => (
                                    <div key={study.id} className="h-full">
                                        <BlogCard post={study} index={index} basePath="/case-studies" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <EmptyState message="More case studies coming soon." />
                        )}
                    </section>

                    {/* Blog Posts Section */}
                    <section>
                        <SectionHeader 
                            title="Latest from the Blog" 
                            link="/blog" 
                            linkText="Read More Articles" 
                        />
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mb-4" />
                                <p className="text-sm text-gray-400 animate-pulse">Loading blog posts...</p>
                            </div>
                        ) : blogPosts.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogPosts.map((post, index) => (
                                    <div key={post.id} className="h-full">
                                        <BlogCard post={post} index={index} basePath="/blog" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <EmptyState message="More blog posts coming soon." />
                        )}
                    </section>

                    {/* Research Hub Section */}
                    <section>
                        <SectionHeader 
                            title="Research & Reports" 
                            link="/research-hub" 
                            linkText="Explore Research Hub" 
                        />
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4" />
                                <p className="text-sm text-gray-400 animate-pulse">Loading research reports...</p>
                            </div>
                        ) : researchArticles.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {researchArticles.map((article, index) => (
                                    <div key={article.id} className="h-full">
                                        <ArticleCard article={article} index={index} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <EmptyState message="More research reports coming soon." />
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
