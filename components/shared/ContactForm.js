"use client"
import React, { useState } from 'react';

export default function ContactForm({
  title = "Get Your Custom Quote",
  subtitle = "Fill out the details below and we'll get back to you with a tailored proposal.",
  showBudget = true,
  showService = true,
  buttonText = "Get Custom Quote"
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    projectDetails: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you within 24 hours.');
    // Handle form submission here
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400 mb-6">{subtitle}</p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2 group"
        >
          {buttonText}
          <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to our privacy policy.
        </p>
      </div>
    </div>
  );
}