"use client"
import React, { useState } from 'react';

export default function ContactForm({
  title = "Get Your Custom Quote",
  subtitle = "Fill out the details below and we'll get back to you with a tailored proposal.",
  showBudget = true,
  showService = true,
  showWebsite = true,
  buttonText = "Get Custom Quote"
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    projectDetails: '',
    budget: '',
    website: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        fullName: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        projectDetails: formData.projectDetails,
        website: formData.website
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || `Something went wrong (status ${res.status})`);
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        projectDetails: '',
        budget: '',
        website: ''
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
    }
  };

  // Show success state
  if (status === 'success') {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
        <div className="text-center py-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Message Sent!</h3>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
      {/* Subtle Gradient Blob for beauty */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <h2 className="text-2xl font-bold mb-2 relative z-10">{title}</h2>
      <p className="text-gray-400 mb-6 relative z-10">{subtitle}</p>

      {/* Error banner */}
      {status === 'error' && (
        <div className="mb-5 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
          <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-red-400 font-medium text-sm">Failed to send message</p>
            <p className="text-red-400/80 text-sm">{errorMessage}</p>
          </div>
          <button onClick={() => setStatus('idle')} className="ml-auto text-red-400/60 hover:text-red-400 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            placeholder="john@company.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              placeholder="Company Inc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>

        {showService && (
          <div>
            <label className="block text-sm font-medium mb-2">Service Interested In *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            >
              <option value="">Select a service</option>
              <option value="lead-gen">Lead Generation</option>
              <option value="seo">SEO & Organic Growth</option>
              <option value="community">Community Management</option>
              <option value="performance">Performance Marketing</option>
              <option value="multiple">Multiple Services</option>
            </select>
          </div>
        )}

        {showWebsite && (
          <div>
            <label className="block text-sm font-medium mb-2">Website URL</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              placeholder="https://yourwebsite.com"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">Project Details *</label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            rows={4}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none"
            placeholder="Tell us about your project, goals, and challenges..."
          />
        </div>

        {showBudget && (
          <div>
            <label className="block text-sm font-medium mb-2">Monthly Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2 group"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              {buttonText}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to our privacy policy.
        </p>
      </div>
    </div>
  );
}