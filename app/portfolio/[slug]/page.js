import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';

// Fetch project data by slug using Firebase REST API
async function getProject(slug) {
    const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/projects/${slug}.json`;
    const res = await fetch(url, { next: { revalidate: 60 } });
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
            <Navbar />
            
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
                <div className="max-w-4xl mx-auto px-6 mb-20">
                    <div 
                        className="prose prose-invert max-w-none bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-800"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                </div>

                {/* Gallery Section */}
                {galleryImages.length > 0 && (
                    <ProjectGallery images={galleryImages} title={project.title} />
                )}
            </main>

            <Footer />
        </div>
    );
}
