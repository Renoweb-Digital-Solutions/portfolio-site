import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';

// Fetch project data by slug using Firebase REST API
async function getProject(slug) {
    const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/projects/${slug}.json?_t=${Date.now()}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
}

export async function generateMetadata({ params }) {
    // Next.js 15 requires awaiting params
    const resolvedParams = await params;
    const project = await getProject(resolvedParams.slug);

    if (!project) {
        return {
            title: 'Project Not Found | Renoweb',
        };
    }

    return {
        title: project.seoTitle || `${project.title} | Renoweb`,
        description: project.seoDescription || project.excerpt,
        keywords: project.seoKeywords || 'portfolio, web dev, SEO, branding, marketing',
    };
}

export default async function ProjectDetailPage({ params }) {
    const resolvedParams = await params;
    const project = await getProject(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    // Filter valid images
    const validImages = Array.isArray(project.images) ? project.images.filter(img => img !== null) : [];
    const coverImage = validImages.length > 0 ? validImages[0] : null;
    const galleryImages = validImages.slice(1);

    return (
        <div className="bg-[#000000] min-h-screen poppins-regular text-white">
            
            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Portfolio
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-600/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
                                    {project.category}
                                </span>
                                {project.publishDate && (
                                    <span className="text-gray-400 text-sm">
                                        {new Date(project.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-400">
                                {project.excerpt}
                            </p>
                        </div>

                        {coverImage && (
                            <div className="w-full md:w-1/2 relative aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-900/20">
                                <Image 
                                    src={coverImage} 
                                    alt={`${project.title} Cover`} 
                                    fill 
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <div 
                        className="prose prose-invert max-w-none bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-800"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                </div>

                {/* Author Section */}
                {project.author && (
                    <div className="max-w-4xl mx-auto px-6 mb-20">
                        <div className="bg-gray-900/30 border border-gray-800/80 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
                            {/* Subtle Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Avatar */}
                            <div className="w-20 h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-900/20 relative z-10 border-2 border-gray-800">
                                {project.author.name.charAt(0)}
                            </div>
                            
                            {/* Author Info */}
                            <div className="flex-grow relative z-10">
                                <div className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-1">Authored By</div>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.author.name}</h3>
                                <p className="text-blue-400 font-medium mb-4">{project.author.role}</p>
                                
                                {project.author.bio && (
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {project.author.bio}
                                    </p>
                                )}
                                
                                {/* Social Links */}
                                {project.author.social && (
                                    <div className="flex items-center gap-4 mt-auto">
                                        {project.author.social.linkedin && (
                                            <a 
                                                href={project.author.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-blue-600/20 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all"
                                                aria-label="LinkedIn Profile"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                        )}
                                        {project.author.social.email && (
                                            <a 
                                                href={`mailto:${project.author.social.email}`}
                                                className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-blue-600/20 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all"
                                                aria-label="Email"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Gallery Section */}
                {galleryImages.length > 0 && (
                    <ProjectGallery images={galleryImages} title={project.title} />
                )}
            </main>
        </div>
    );
}
