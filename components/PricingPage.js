"use client"

import React, { useState } from 'react';
import ContactForm from './shared/ContactForm';
import { pricingPageServices, serviceFeaturesOfPricingPage } from './data/pricingPageData';
import OurPartners from './shared/OurPartners';

export default function PricingPage() {



    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Custom Solutions
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Pricing Built Around
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Your Goals</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Every business is unique. We create custom strategies and pricing that align with your specific needs, goals, and budget.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricingPageServices.map((service, index) => (
                            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition group">
                                <div className="text-blue-400 mb-4 group-hover:scale-110 transition">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content - Two Columns */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Custom Pricing?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            We believe in transparency and fairness. Instead of one-size-fits-all packages, we analyze your unique situation and create a proposal that maximizes your ROI.
                        </p>

                        <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-xl p-8 mb-8">
                            <h3 className="text-xl font-semibold mb-4">What&apos;s Included</h3>
                            <ul className="space-y-3">
                                {serviceFeaturesOfPricingPage.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Quick Response Time
                            </h3>
                            <p className="text-gray-400">We typically respond within 24 hours with a detailed proposal tailored to your needs.</p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <ContactForm />
                </div>
            </section>

            {/* Trust Section */}
            {/* <section className="py-16 px-6 bg-gray-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Trusted by Leading Brands</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-center opacity-50 hover:opacity-100 transition">
                                <div className="text-2xl font-bold text-gray-600">LOGO {i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <OurPartners />

            {/* FAQ Section */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "How long does it take to receive a quote?",
                                a: "Typically within 24-48 hours. We review your requirements carefully to provide an accurate, detailed proposal."
                            },
                            {
                                q: "Are there any setup fees?",
                                a: "Setup fees vary based on project complexity. We'll outline all costs transparently in your custom proposal."
                            },
                            {
                                q: "What if I need to adjust my budget later?",
                                a: "We understand business needs change. We can adjust strategies and pricing as your goals evolve."
                            },
                            {
                                q: "Do you work with startups?",
                                a: "Absolutely! We work with businesses of all sizes and can create solutions that fit startup budgets."
                            }
                        ].map((faq, index) => (
                            <details key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
                                <summary className="font-semibold cursor-pointer flex items-center justify-between">
                                    {faq.q}
                                    <svg className="w-5 h-5 text-blue-400 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-gray-400 mt-3">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}