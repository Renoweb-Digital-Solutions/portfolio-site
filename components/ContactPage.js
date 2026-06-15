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
                <div className="max-w-[1400px] mx-auto">
                    {/* Top Row: Email, Phone, WhatsApp */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {contactInfo.slice(0, 3).map((info, index) => (
                            <div key={index} className="relative group overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 border border-blue-500/20">
                                        <div className="scale-125">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-3">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-lg font-medium text-white hover:text-blue-400 transition-colors break-words w-full"
                                            target={info.link.startsWith('http') ? '_blank' : undefined}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-lg font-medium text-white break-words w-full">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: Headquarters, US Office */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactInfo.slice(3, 5).map((info, index) => (
                            <div key={index} className="relative group overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 border border-blue-500/20">
                                        <div className="scale-125">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-2">{info.title}</h3>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-lg font-medium text-white hover:text-blue-400 transition-colors inline-block"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-medium text-white">{info.value}</p>
                                        )}
                                    </div>
                                </div>
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

            {/* Map Section */}
            <section className="py-16 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Find Us on the Map</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Headquarters Map */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-blue-600/30 transition duration-300">
                            <div className="p-4 bg-gray-900/80 border-b border-gray-800 flex items-center justify-between">
                                <span className="font-semibold text-lg text-white">Headquarters (Kolkata, India)</span>
                                <span className="text-xs px-2.5 py-1 bg-blue-600/20 text-blue-400 rounded-full font-medium border border-blue-600/30">Primary</span>
                            </div>
                            <div className="h-80 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1843.1260128248066!2d88.3251612!3d22.4947255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027164df297f4b%3A0x7159820ed6785017!2s63T%2C%20Bamacharan%20Roy%20Rd%2C%20Senhati%20Colony%2C%20Behala%2C%20Kolkata%2C%20West%20Bengal%20700034!5e0!3m2!1sen!2sin!4v1777819499752!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Renoweb Headquarters Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* US Office Map */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-blue-600/30 transition duration-300">
                            <div className="p-4 bg-gray-900/80 border-b border-gray-800 flex items-center justify-between">
                                <span className="font-semibold text-lg text-white">US Office (Lakeland, Florida)</span>
                                <span className="text-xs px-2.5 py-1 bg-blue-600/20 text-blue-400 rounded-full font-medium border border-blue-600/30">US Branch</span>
                            </div>
                            <div className="h-80 w-full">
                                <iframe
                                    src="https://maps.google.com/maps?q=7364+Kathleen+Road,+Lakeland,+FL+33810&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Renoweb US Office Location"
                                ></iframe>
                            </div>
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