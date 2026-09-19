"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaWhatsapp, FaLink, FaCheck } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const ShareButton = ({ url, title, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const [fullUrl, setFullUrl] = useState('')
    const menuRef = useRef(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const baseUrl = window.location.origin
            setFullUrl(url.startsWith('http') ? url : `${baseUrl}${url.startsWith('/') ? url : '/' + url}`)
        }
    }, [url])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleCopy = (e) => {
        e.preventDefault()
        e.stopPropagation()
        navigator.clipboard.writeText(fullUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const shareLinks = [
        {
            name: 'Copy Link',
            icon: copied ? <FaCheck className="text-green-500" /> : <FaLink />,
            onClick: handleCopy,
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn />,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`
        },
        {
            name: 'X (Twitter)',
            icon: <FaXTwitter />,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`
        },
        {
            name: 'Facebook',
            icon: <FaFacebookF />,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp />,
            href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(fullUrl)}`
        },
        {
            name: 'Reddit',
            icon: <FaRedditAlien />,
            href: `https://reddit.com/submit?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`
        }
    ]

    const toggleMenu = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    return (
        <div className={`relative ${className}`} ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-white/70 hover:text-amber-500 transition-all duration-300 shadow-lg backdrop-blur-md"
                title="Share this article"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="absolute right-0 bottom-full mb-3 p-1.5 rounded-full bg-[#0f111a]/90 border border-white/10 shadow-2xl z-50 backdrop-blur-xl origin-bottom-right flex items-center gap-1"
                    >
                        {shareLinks.map((link, i) => {
                            const Content = (
                                <span className="flex justify-center text-[1.1rem]">{link.icon}</span>
                            )

                            const commonClasses = "w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-amber-500"

                            if (link.onClick) {
                                return (
                                    <button
                                        key={i}
                                        onClick={(e) => {
                                            link.onClick(e)
                                            if (link.name !== 'Copy Link') setIsOpen(false)
                                        }}
                                        className={commonClasses}
                                        title={link.name}
                                    >
                                        {Content}
                                    </button>
                                )
                            }

                            return (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className={commonClasses}
                                    title={link.name}
                                >
                                    {Content}
                                </a>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ShareButton
