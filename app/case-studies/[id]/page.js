import React from 'react'

import { case_studies_data } from '@/components/data/case_studies';
import { getCaseStudyBySlug } from '@/lib/db';
import InternalCaseStudyPage from '@/components/CaseStudiesPage/InternalCaseStudyPage';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { id } = await params;
    
    // Check DB first for the new SEO structure
    let caseStudy = await getCaseStudyBySlug(id);
    
    // Fallback to local data
    if (!caseStudy) {
        caseStudy = case_studies_data.find(study => study.id === id);
    }
    
    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
        };
    }

    const seo = caseStudy.seo || {};

    return {
        title: seo.metaTitle || caseStudy.title,
        description: seo.metaDescription || caseStudy.about_client,
        alternates: {
            canonical: seo.canonicalUrl,
        },
        openGraph: {
            title: seo.ogTitle || seo.metaTitle || caseStudy.title,
            description: seo.ogDescription || seo.metaDescription || caseStudy.about_client,
            images: seo.ogImageUrl ? [seo.ogImageUrl] : (caseStudy.bannerUrl ? [caseStudy.bannerUrl] : []),
        },
    };
}

const page = async ({ params }) => {
    const { id } = await params;

    // Find the case study by id (local first to ensure InternalCaseStudyPage renders safely with expected fields)
    let caseStudy = case_studies_data.find(study => study.id === id);
    
    // If not in local data, attempt DB fetch (in case DB has full structure)
    if (!caseStudy) {
        caseStudy = await getCaseStudyBySlug(id);
    }

    // Handle case when study is not found
    if (!caseStudy) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
                    <Link href="/case-studies" className="text-blue-400 hover:text-blue-300">
                        Back to Case Studies
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <InternalCaseStudyPage caseStudy={caseStudy} />
        </div>
    )
}

export default page