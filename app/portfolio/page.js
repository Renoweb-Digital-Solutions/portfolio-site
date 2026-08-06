"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ref, get } from 'firebase/database';
import { db } from '@/lib/firebase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = ["All", "Web/software dev", "SEO", "Branding", "Marketing"];

export default function PortfolioPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsRef = ref(db, 'projects');
                const snapshot = await get(projectsRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const projectsArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key]
                    }));
                    // Sort by publish date descending
                    projectsArray.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
                    setProjects(projectsArray);
                } else {
                    console.log("No projects found");
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="bg-black min-h-screen poppins-regular text-white">
            <Navbar />
            
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore some of our recent projects and case studies where we've helped businesses achieve their digital goals.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === category 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-900 border border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => {
                            // Find first valid image
                            const coverImage = project.images && Array.isArray(project.images) 
                                ? project.images.find(img => img !== null) 
                                : null;

                            return (
                                <Link 
                                    href={`/portfolio/${project.slug}`} 
                                    key={project.id}
                                    className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-300 flex flex-col h-full"
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                                    
                                    <div className="relative h-56 w-full overflow-hidden bg-gray-800 z-10">
                                        {coverImage ? (
                                            <Image 
                                                src={coverImage} 
                                                alt={project.title} 
                                                fill 
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-600">No Image</div>
                                        )}
                                        {project.featured && (
                                            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow relative z-10">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h2>
                                        <p className="text-gray-400 leading-relaxed line-clamp-3 flex-grow">{project.excerpt}</p>
                                        
                                        <div className="mt-6 inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 font-semibold transition">
                                            Learn More
                                            <svg
                                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500 bg-gray-900/50 rounded-2xl border border-gray-800">
                        <p className="text-lg">No projects found in this category.</p>
                        <button 
                            onClick={() => setActiveCategory("All")}
                            className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
                        >
                            View all projects
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
