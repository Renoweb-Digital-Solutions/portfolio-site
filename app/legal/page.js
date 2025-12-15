"use client"
import { policiesData } from '@/components/data/legal';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PoliciesContent() {
    const searchParams = useSearchParams();
    const policyParam = searchParams.get('policy');

    // Valid policy IDs
    const validPolicies = ['terms', 'privacy', 'cancellation', 'shipping'];

    // Initialize with URL param if valid, otherwise default to 'terms'
    const initialPolicy = policyParam && validPolicies.includes(policyParam)
        ? policyParam
        : 'terms';

    const [activePolicy, setActivePolicy] = useState(initialPolicy);

    // Update active policy when URL param changes
    useEffect(() => {
        if (policyParam && validPolicies.includes(policyParam)) {
            setActivePolicy(policyParam);
        }
    }, [policyParam, validPolicies]);

    const tabs = [
        { id: 'terms', label: 'Terms & Conditions' },
        { id: 'privacy', label: 'Privacy Policy' },
        { id: 'cancellation', label: 'Cancellation & Refund' },
        { id: 'shipping', label: 'Shipping & Delivery' }
    ];

    const renderSection = (section, index) => (
        <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">{section.heading}</h3>

            {section.content && (
                <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">{section.content}</p>
            )}

            {section.points && (
                <ul className="space-y-3 mb-4">
                    {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>
            )}

            {section.note && (
                <p className="text-gray-400 italic mt-2">{section.note}</p>
            )}

            {section.subsections && section.subsections.map((sub, subIdx) => (
                <div key={subIdx} className="ml-4 mt-4">
                    <h4 className="text-lg font-medium text-gray-200 mb-3">{sub.title}</h4>
                    <ul className="space-y-2">
                        {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-gray-300">
                                <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    const currentPolicy = policiesData[activePolicy];

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Legal Information
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Policies & Terms
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Please read our policies carefully to understand how we operate and protect your rights.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActivePolicy(tab.id)}
                                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${activePolicy === tab.id
                                    ? 'bg-blue-600 text-white border border-blue-600'
                                    : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-blue-600 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {currentPolicy.title}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Last Updated: {currentPolicy.lastUpdated}
                        </p>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        {currentPolicy.sections.map((section, index) => renderSection(section, index))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                        <p className="text-gray-300 mb-4">
                            If you have any questions about this policy, please contact us:
                        </p>
                        <div className="space-y-2 text-gray-400">
                            <p>Email: <a href="mailto:renowebhq@gmail.com" className="text-blue-400 hover:text-blue-300">renowebhq@gmail.com</a></p>
                            {/* <p>Website: <a href="https://renoweb.com" className="text-blue-400 hover:text-blue-300">www.renoweb.com</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PoliciesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        }>
            <PoliciesContent />
        </Suspense>
    );
}