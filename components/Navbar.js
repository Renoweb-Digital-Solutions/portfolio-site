"use client"

import { useState } from 'react'
import Image from 'next/image'
import Button from './shared/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosMenu, IoMdClose } from "react-icons/io"
import Link from 'next/link'
import useMobileView from './shared/useMobileView'
import { usePathname } from 'next/navigation'
import ContactForm from './shared/ContactForm'

const DropdownItem = ({ title, subtitle, iconPath, href }) => {
    const content = (
        <>
            <div className="flex-shrink-0 mt-0.5 text-white/50 group-hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} /></svg>
            </div>
            <div className="flex flex-col flex-1 transform transition-transform duration-300 group-hover:translate-x-1">
                <span className="font-semibold text-sm text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">{title}</span>
                {subtitle && <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{subtitle}</span>}
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
        </>
    );
    const className = "group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3877F0]/15 hover:to-transparent relative overflow-hidden cursor-pointer";
    
    if (href) {
        return <Link href={href} className={className}>{content}</Link>;
    }
    return <div className={className}>{content}</div>;
};

const MobileDropdownItem = ({ title, subtitle, iconPath, href, onClick }) => {
    const content = (
        <>
            <svg className="w-4 h-4 flex-shrink-0 text-white/50 group-hover:text-[#3877F0] transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} /></svg>
            <div className="flex flex-col">
                <span className="font-medium text-white group-hover:text-[#3877F0] transition-colors">{title}</span>
                {subtitle && <span className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">{subtitle}</span>}
            </div>
        </>
    );
    const className = "group flex items-start gap-3 px-4 py-3 cursor-pointer rounded-lg hover:bg-white/5 transition-all";
    if (href) {
        return <Link href={href} onClick={onClick} className={className}>{content}</Link>;
    }
    return <div onClick={onClick} className={className}>{content}</div>;
};

const Navbar = () => {
    const isMobile = useMobileView()
    const pathname = usePathname()
    const isServicesPage = pathname === '/services'
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isVerticalsOpen, setIsVerticalsOpen] = useState(false)
    const [isCompanyOpen, setIsCompanyOpen] = useState(false)
    
    const [isPillarsOpen, setIsPillarsOpen] = useState(false)
    const [isFrameworksOpen, setIsFrameworksOpen] = useState(false)
    const [isStagesOpen, setIsStagesOpen] = useState(false)
    
    const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false)

    return (
        <>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: isMobile ? 0 : 0.4, ease: "easeOut" }}
                className="bg-[#1D1A1A]/80 backdrop-blur-xl text-white md:rounded-lg md:border-4 md:border-[#3877F0]/20 w-auto h-18 lg:w-[98%] md:mx-5 md:my-5 flex items-center justify-between px-4 md:px-0 fixed top-0 left-0 right-0 z-50"
            >
                {/* Logo */}
                <Link href="/">
                    <Image src="/renoweb_logo_2.png" width={70} height={70} alt="Renoweb logo" className="w-[50px] h-[50px] mt-3 md:mt-2 ml-2 md:ml-5" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    {isServicesPage ? (
                        <>
                            <div className="relative" onMouseEnter={() => setIsPillarsOpen(true)} onMouseLeave={() => setIsPillarsOpen(false)}>
                                <div className="cursor-pointer hover:text-[#3877F0] transition flex items-center gap-1 font-medium">Pillars</div>
                                <AnimatePresence>
                                    {isPillarsOpen && (
                                        <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-10 left-0 bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 flex flex-col gap-1 overflow-hidden shadow-xl min-w-[280px]">
                                            <DropdownItem title="Design" subtitle="UI/UX & Web" iconPath="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            <DropdownItem title="Branding" subtitle="Brand Identity" iconPath="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            <DropdownItem title="Development" subtitle="Web & App Engineering" iconPath="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            <DropdownItem title="Marketing" subtitle="SEO & Performance" iconPath="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            
                            <div className="relative" onMouseEnter={() => setIsFrameworksOpen(true)} onMouseLeave={() => setIsFrameworksOpen(false)}>
                                <div className="cursor-pointer hover:text-[#3877F0] transition flex items-center gap-1 font-medium">Frameworks</div>
                                <AnimatePresence>
                                    {isFrameworksOpen && (
                                        <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-10 left-0 bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 flex flex-col gap-1 overflow-hidden shadow-xl min-w-[280px]">
                                            <DropdownItem title="Quantum Accelerator" subtitle="High-Velocity Growth" iconPath="M13 10V3L4 14h7v7l9-11h-7z" />
                                            <DropdownItem title="Renoweb Prism" subtitle="Founder-Voice Content" href="/services/frameworks/renoweb-prism" iconPath="M12 3l-8 18h16L12 3zm0 4l5.5 12h-11L12 7z" />
                                            <DropdownItem title="Waterfall OS" subtitle="Content Repurposing" href="/services/frameworks/renoweb-waterfall" iconPath="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7M4 7h16M4 7c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="relative" onMouseEnter={() => setIsStagesOpen(true)} onMouseLeave={() => setIsStagesOpen(false)}>
                                <div className="cursor-pointer hover:text-[#3877F0] transition flex items-center gap-1 font-medium">Stages</div>
                                <AnimatePresence>
                                    {isStagesOpen && (
                                        <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-10 left-0 bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 flex flex-col gap-1 overflow-hidden shadow-xl min-w-[280px]">
                                            <DropdownItem title="Early Stage Startups" subtitle="0 to 1 scaling" iconPath="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            <DropdownItem title="Established Enterprises" subtitle="Market Dominance" iconPath="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Renoweb Verticals Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsVerticalsOpen(true)}
                                onMouseLeave={() => setIsVerticalsOpen(false)}
                            >
                                <div className="cursor-pointer hover:text-[#3877F0] transition flex items-center gap-1 font-medium">
                                    Renoweb Verticals
                                </div>

                                <AnimatePresence>
                                    {isVerticalsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute top-10 left-0 bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 flex flex-col gap-1 overflow-hidden shadow-xl min-w-[280px]"
                                        >
                                                <Link href="/products" className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3877F0]/15 hover:to-transparent relative overflow-hidden">
                                                    <div className="flex-shrink-0 mt-0.5 text-white/50 group-hover:text-cyan-400 transition-colors duration-300">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                                    </div>
                                                    <div className="flex flex-col flex-1 transform transition-transform duration-300 group-hover:translate-x-1">
                                                        <span className="font-semibold text-sm text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">Products</span>
                                                        <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Explore our verticals</span>
                                                    </div>
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </div>
                                                </Link>

                                                <Link href="/services" className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3877F0]/15 hover:to-transparent relative overflow-hidden">
                                                    <div className="flex-shrink-0 mt-0.5 text-white/50 group-hover:text-cyan-400 transition-colors duration-300">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    </div>
                                                    <div className="flex flex-col flex-1 transform transition-transform duration-300 group-hover:translate-x-1">
                                                        <span className="font-semibold text-sm text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">Services</span>
                                                        <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">What we offer</span>
                                                    </div>
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </div>
                                                </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Company Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsCompanyOpen(true)}
                                onMouseLeave={() => setIsCompanyOpen(false)}
                            >
                                <div className="cursor-pointer hover:text-[#3877F0] transition flex items-center gap-1 font-medium">
                                    Company
                                </div>

                                <AnimatePresence>
                                    {isCompanyOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute top-10 left-0 bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 flex flex-col gap-1 overflow-hidden shadow-xl min-w-[280px]"
                                        >
                                                <Link href="/press" className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3877F0]/15 hover:to-transparent relative overflow-hidden">
                                                    <div className="flex-shrink-0 mt-0.5 text-white/50 group-hover:text-cyan-400 transition-colors duration-300">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4" /></svg>
                                                    </div>
                                                    <div className="flex flex-col flex-1 transform transition-transform duration-300 group-hover:translate-x-1">
                                                        <span className="font-semibold text-sm text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">Press & Media</span>
                                                        <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Our latest news</span>
                                                    </div>
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </div>
                                                </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    )}

                    <Link href="/Recap2025" className="relative group mr-2">
                        <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#3877F0] via-[#5B8CFF] to-[#3877F0] opacity-40 blur-md group-hover:opacity-70 transition"></span>
                        <span className="relative px-5 py-2 rounded-full bg-[#0F0F0F] border border-[#3877F0]/40 text-sm font-medium text-white tracking-wide group-hover:border-[#3877F0] transition">
                            Recap ✨
                        </span>
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center mr-3">
                    {isServicesPage ? (
                        <div onClick={() => setIsContactDrawerOpen(true)}>
                            <Button classname="duration-300 ease-in cursor-pointer">Get in Touch</Button>
                        </div>
                    ) : (
                        <Link href="/contact-us">
                            <Button classname="duration-300 ease-in">Get in Touch</Button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden my-auto p-3">
                    {isMenuOpen ? (
                        <IoMdClose className="text-3xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <IoIosMenu className="text-3xl cursor-pointer" onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-[70px] left-0 right-0 bg-[#1D1A1A]/90 backdrop-blur-xl z-40 text-white overflow-y-auto max-h-[calc(100vh-70px)]"
                    >
                        {isServicesPage ? (
                            <>
                                <div className="px-6 py-4">
                                    <div className="flex justify-between items-center hover:text-[#3877F0]">
                                        <span className="cursor-pointer" onClick={() => setIsPillarsOpen(!isPillarsOpen)}>Pillars</span>
                                        <motion.span animate={{ rotate: isPillarsOpen ? 180 : 0 }} transition={{ duration: 0.3 }} onClick={() => setIsPillarsOpen(!isPillarsOpen)} className="cursor-pointer px-4 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white/70 hover:text-[#3877F0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </motion.span>
                                    </div>
                                    <AnimatePresence>
                                        {isPillarsOpen && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-2 ml-3 border-l border-[#3877F0]/20 flex flex-col gap-1">
                                                <MobileDropdownItem title="Design" subtitle="UI/UX & Web" iconPath="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                <MobileDropdownItem title="Branding" subtitle="Brand Identity" iconPath="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                <MobileDropdownItem title="Development" subtitle="Web & App Engineering" iconPath="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                <MobileDropdownItem title="Marketing" subtitle="SEO & Performance" iconPath="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                
                                <div className="px-6 py-4">
                                    <div className="flex justify-between items-center hover:text-[#3877F0]">
                                        <span className="cursor-pointer" onClick={() => setIsFrameworksOpen(!isFrameworksOpen)}>Frameworks</span>
                                        <motion.span animate={{ rotate: isFrameworksOpen ? 180 : 0 }} transition={{ duration: 0.3 }} onClick={() => setIsFrameworksOpen(!isFrameworksOpen)} className="cursor-pointer px-4 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white/70 hover:text-[#3877F0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </motion.span>
                                    </div>
                                    <AnimatePresence>
                                        {isFrameworksOpen && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-2 ml-3 border-l border-[#3877F0]/20 flex flex-col gap-1">
                                                <MobileDropdownItem title="Quantum Accelerator" subtitle="High-Velocity Growth" iconPath="M13 10V3L4 14h7v7l9-11h-7z" />
                                                <MobileDropdownItem title="Renoweb Prism" subtitle="Founder-Voice Content" href="/services/frameworks/renoweb-prism" onClick={() => setIsMenuOpen(false)} iconPath="M12 3l-8 18h16L12 3zm0 4l5.5 12h-11L12 7z" />
                                                <MobileDropdownItem title="Waterfall OS" subtitle="Content Repurposing" href="/services/frameworks/renoweb-waterfall" onClick={() => setIsMenuOpen(false)} iconPath="M4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7M4 7h16M4 7c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="px-6 py-4">
                                    <div className="flex justify-between items-center hover:text-[#3877F0]">
                                        <span className="cursor-pointer" onClick={() => setIsStagesOpen(!isStagesOpen)}>Stages</span>
                                        <motion.span animate={{ rotate: isStagesOpen ? 180 : 0 }} transition={{ duration: 0.3 }} onClick={() => setIsStagesOpen(!isStagesOpen)} className="cursor-pointer px-4 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white/70 hover:text-[#3877F0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </motion.span>
                                    </div>
                                    <AnimatePresence>
                                        {isStagesOpen && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-2 ml-3 border-l border-[#3877F0]/20 flex flex-col gap-1">
                                                <MobileDropdownItem title="Early Stage Startups" subtitle="0 to 1 scaling" iconPath="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                <MobileDropdownItem title="Established Enterprises" subtitle="Market Dominance" iconPath="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Mobile Verticals */}
                                <div className="px-6 py-4">
                                    <div className="flex justify-between items-center hover:text-[#3877F0]">
                                        <span className="cursor-pointer" onClick={() => setIsVerticalsOpen(!isVerticalsOpen)}>Renoweb Verticals</span>
                                        <motion.span 
                                            animate={{ rotate: isVerticalsOpen ? 180 : 0 }} 
                                            transition={{ duration: 0.3 }}
                                            onClick={() => setIsVerticalsOpen(!isVerticalsOpen)} 
                                            className="cursor-pointer px-4 flex items-center justify-center"
                                        >
                                            <svg className="w-5 h-5 text-white/70 hover:text-[#3877F0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </motion.span>
                                    </div>

                                    <AnimatePresence>
                                        {isVerticalsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-2 ml-3 border-l border-[#3877F0]/20"
                                            >
                                                <Link href="/products" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm hover:text-[#3877F0]">Products</Link>
                                                <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm hover:text-[#3877F0]">Services</Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Mobile Company */}
                                <div className="px-6 py-4">
                                    <div className="flex justify-between items-center hover:text-[#3877F0]">
                                        <span className="cursor-pointer" onClick={() => setIsCompanyOpen(!isCompanyOpen)}>Company</span>
                                        <motion.span 
                                            animate={{ rotate: isCompanyOpen ? 180 : 0 }} 
                                            transition={{ duration: 0.3 }}
                                            onClick={() => setIsCompanyOpen(!isCompanyOpen)} 
                                            className="cursor-pointer px-4 flex items-center justify-center"
                                        >
                                            <svg className="w-5 h-5 text-white/70 hover:text-[#3877F0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </motion.span>
                                    </div>

                                    <AnimatePresence>
                                        {isCompanyOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-2 ml-3 border-l border-[#3877F0]/20"
                                            >
                                                <Link href="/press" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm hover:text-[#3877F0]">Press & Media</Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        )}

                        <div className="px-6 py-6">
                            {isServicesPage ? (
                                <div onClick={() => { setIsContactDrawerOpen(true); setIsMenuOpen(false); }}>
                                    <Button classname="w-full cursor-pointer">Get in Touch</Button>
                                </div>
                            ) : (
                                <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                                    <Button classname="w-full">Get in Touch</Button>
                                </Link>
                            )}
                        </div>
                        <Link href="/Recap2025" onClick={() => setIsMenuOpen(false)} className="block mx-6 my-3 pb-6">
                            <div className="relative group px-3">
                                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#3877F0] to-[#5B8CFF] opacity-40 blur-md"></div>
                                <div className="relative px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#3877F0]/40 text-center text-white font-medium">
                                    ✨ Recap 2025
                                </div>
                            </div>
                        </Link>

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Slide-in Contact Drawer for Services Page */}
            <AnimatePresence>
                {isContactDrawerOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsContactDrawerOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#0F0F0F] text-white z-[70] overflow-y-auto border-l border-white/10 shadow-2xl p-6"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Let&apos;s Build Together</h2>
                                <button onClick={() => setIsContactDrawerOpen(false)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition">
                                    <IoMdClose className="text-2xl text-white" />
                                </button>
                            </div>
                            <ContactForm 
                                title="Get in Touch" 
                                subtitle="Fill out the details below and we'll get back to you with a tailored proposal."
                                buttonText="Send Message"
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
