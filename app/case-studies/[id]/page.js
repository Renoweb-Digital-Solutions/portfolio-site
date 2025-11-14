import React from 'react'

import { case_studies_data } from '@/components/data/case_studies';
import InternalCaseStudyPage from '@/components/CaseStudiesPage/InternalCaseStudyPage';

const page = async ({ params }) => {
    const { id } = await params;

    // Find the case study by id
    const caseStudy = case_studies_data.find(study => study.id === id);

    // Handle case when study is not found
    if (!caseStudy) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
                    <a href="/case-studies" className="text-blue-400 hover:text-blue-300">
                        Back to Case Studies
                    </a>
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