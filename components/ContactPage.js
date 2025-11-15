import { contactInfo } from "./data/ContactPageData";
import ContactForm from "./shared/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Subtle Gradient Blobs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                            Let&apos;s Connect
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Get in Touch
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> With Us</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? We&apos;re here to help turn your vision into reality. Reach out and let&apos;s start the conversation.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition group">
                                <div className="text-blue-400 mb-4 group-hover:scale-110 transition">
                                    {info.icon}
                                </div>
                                <h3 className="text-sm font-medium text-gray-400 mb-2">{info.title}</h3>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="text-white hover:text-blue-400 transition break-words"
                                        target={info.link.startsWith('http') ? '_blank' : undefined}
                                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-white break-words">{info.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content - Two Columns */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Additional Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            We&apos;re committed to delivering exceptional results and building lasting partnerships. Our team brings expertise, dedication, and a proven track record of success.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Fast Response Time</h3>
                                    <p className="text-gray-400">We typically respond to all inquiries within 24 hours during business days.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                                    <p className="text-gray-400">Work directly with experienced professionals who understand your industry.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-600/30">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                                    <p className="text-gray-400">Clear, honest pricing with no hidden fees or surprises.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span className="font-medium">Closed</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                All times are in PST (Pacific Standard Time)
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <ContactForm
                            title="Send Us a Message"
                            subtitle="Fill out the form below and we'll get back to you as soon as possible."
                            showBudget={false}
                            showService={true}
                            buttonText="Send Message"
                        />
                    </div>
                </div>
            </section>

            {/* Map Section (Optional) */}
            <section className="py-16 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-16 h-16 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-500">Map integration placeholder</p>
                            <p className="text-sm text-gray-600 mt-2">Google Maps or custom map can be embedded here</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-2xl p-12">
                        <h2 className="text-3xl font-bold mb-4">Prefer a Quick Call?</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Sometimes a conversation is the best way to get started. Book a free consultation with our team.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-lg font-medium transition inline-flex items-center gap-2 group">
                            Schedule a Call
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}