'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24" aria-label="Contact">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Contact
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-200">
            Get In Touch
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-teal-400/40 transition-colors flex items-center space-x-3 group"
          >
            <div className="p-2.5 rounded-lg bg-teal-400/10 text-teal-300 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500">Email</div>
              <div className="text-xs font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                {personalInfo.socials.email}
              </div>
            </div>
          </a>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-emerald-400/10 text-emerald-300">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500">Phone / WhatsApp</div>
              <div className="text-xs font-semibold text-slate-200">
                {personalInfo.phone}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/30">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-200">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-slate-400">
                Thank you for reaching out. Mirza Waleed Baig will get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-mono text-teal-300 hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                      errors.name ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                      errors.email ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Subject *</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject / Opportunity"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400 ${
                    errors.subject ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Message *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message details..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400 resize-none ${
                    errors.message ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 border border-teal-400/30 text-teal-300 font-semibold text-xs transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="w-3.5 h-3.5 border-2 border-teal-300 border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
