"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../lib/firebase';
import { FaTimes, FaSpinner, FaCheckCircle, FaEnvelope } from 'react-icons/fa';

const THEMES = {
  purple: {
    button: "bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/30 hover:shadow-purple-500/50 focus:ring-purple-500",
    buttonHover: "from-blue-600 to-purple-600",
    inputFocus: "focus:border-purple-500 peer-focus:text-purple-400",
    modalButton: "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-purple-500/25",
    modalButtonHover: "from-blue-600 to-purple-600",
    text: "text-white"
  },
  amber: {
    button: "bg-gradient-to-r from-orange-400 to-amber-500 shadow-amber-500/30 hover:shadow-amber-500/50 focus:ring-amber-500 text-black",
    buttonHover: "from-amber-500 to-orange-400",
    inputFocus: "focus:border-amber-500 peer-focus:text-amber-400",
    modalButton: "bg-gradient-to-r from-orange-400 to-amber-500 hover:shadow-amber-500/25 text-black",
    modalButtonHover: "from-amber-500 to-orange-400",
    text: "text-black"
  },
  cyan: {
    button: "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500/30 hover:shadow-cyan-500/50 focus:ring-cyan-500",
    buttonHover: "from-blue-500 to-cyan-500",
    inputFocus: "focus:border-cyan-500 peer-focus:text-cyan-400",
    modalButton: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/25",
    modalButtonHover: "from-blue-500 to-cyan-500",
    text: "text-white"
  },
  blue: {
    button: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 hover:shadow-blue-500/50 focus:ring-blue-500",
    buttonHover: "bg-blue-700",
    inputFocus: "focus:border-blue-500 peer-focus:text-blue-400",
    modalButton: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25",
    modalButtonHover: "bg-blue-700",
    text: "text-white"
  }
};

export default function NewsletterForm({ 
  children,
  buttonText = "Subscribe to Newsletter", 
  buttonClassName = "",
  theme = "purple"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = THEMES[theme] || THEMES.purple;

  const handleOpen = () => setIsOpen(true);
  
  const handleClose = () => {
    setIsOpen(false);
    // Optional: reset form after a delay so the closing animation is smooth
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', phone: '' });
      setError('');
      setIsSuccess(false);
    }, 300);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Name and Email are required.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Duplicate Check
      const subscribersRef = collection(firestore, "newsletterSubscribers");
      let isDuplicate = false;
      
      try {
        const q = query(subscribersRef, where("email", "==", formData.email.trim()));
        const querySnapshot = await getDocs(q);
        isDuplicate = !querySnapshot.empty;
      } catch (checkErr) {
        // Firebase Security Rules block read access for non-admins.
        // We will swallow this error and bypass the duplicate check
        console.warn("Bypassing duplicate check due to read error:", checkErr);
      }

      if (isDuplicate) {
        throw new Error("This email is already subscribed.");
      }

      // 2. Save Document
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || "",
        phone: formData.phone.trim() || "",
        subscribedAt: new Date().toISOString()
      };

      await addDoc(subscribersRef, payload);
      setIsSuccess(true);
    } catch (err) {
      console.error("Error subscribing:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:px-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
          >
            {/* Inner glow effect for extreme glassmorphism */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,0.03)' }} />
            
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white z-10"
            >
              <FaTimes />
            </button>

            <div className="mb-6 text-center relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">Stay Updated</h2>
              <p className="mt-2 text-sm text-gray-400">Join our newsletter for the latest insights and news.</p>
            </div>

            <div className="relative z-10">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
                  >
                    <FaCheckCircle className="mb-4 text-6xl text-emerald-400" />
                  </motion.div>
                  <h3 className="mb-2 text-2xl font-bold text-white">Thanks for subscribing!</h3>
                  <p className="text-gray-400">We've added your email to our list.</p>
                  <button
                    onClick={handleClose}
                    className="mt-8 rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="group relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className={`peer w-full rounded-xl border border-white/10 bg-black/20 px-4 pt-6 pb-2 text-white outline-none transition-all focus:bg-white/10 ${activeTheme.inputFocus}`}
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 top-4 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs`}
                    >
                      Full Name *
                    </label>
                  </div>

                  <div className="group relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className={`peer w-full rounded-xl border border-white/10 bg-black/20 px-4 pt-6 pb-2 text-white outline-none transition-all focus:bg-white/10 ${activeTheme.inputFocus}`}
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 top-4 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs`}
                    >
                      Email Address *
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full rounded-xl border border-white/10 bg-black/20 px-4 pt-6 pb-2 text-white outline-none transition-all focus:bg-white/10 ${activeTheme.inputFocus}`}
                      />
                      <label
                        htmlFor="company"
                        className={`absolute left-4 top-4 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs`}
                      >
                        Company
                      </label>
                    </div>

                    <div className="group relative">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full rounded-xl border border-white/10 bg-black/20 px-4 pt-6 pb-2 text-white outline-none transition-all focus:bg-white/10 ${activeTheme.inputFocus}`}
                      />
                      <label
                        htmlFor="phone"
                        className={`absolute left-4 top-4 text-xs text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs`}
                      >
                        Phone
                      </label>
                    </div>
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-400"
                    >
                      {error}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl py-3.5 font-semibold shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-70 ${activeTheme.modalButton} ${activeTheme.text}`}
                  >
                    <div className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${activeTheme.modalButtonHover}`}></div>
                    {isLoading ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <span>Subscribe Now</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {children ? (
        <div onClick={handleOpen} className="inline-block cursor-pointer">
          {children}
        </div>
      ) : (
        <button
          onClick={handleOpen}
          className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${activeTheme.button} ${buttonClassName}`}
        >
          <FaEnvelope className="transition-transform duration-300 group-hover:-rotate-12" />
          <span>{buttonText}</span>
          <div className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activeTheme.buttonHover}`}></div>
        </button>
      )}

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
