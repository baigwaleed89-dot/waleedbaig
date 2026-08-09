'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, Mail, MapPin, Phone, Calendar, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
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
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

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
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070a12]/50 border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/10 via-violet-600/10 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Extraordinary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Looking for a Full-Stack Software Engineer to build high-performance web applications or scalable systems? Contact me directly.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-[#0e1322] border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personalInfo.socials.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Availability</div>
                    <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Full-time Roles & Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-violet-900/20 border border-indigo-500/30 text-xs text-slate-300 space-y-2">
              <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Guaranteed Response Time
              </div>
              <p className="leading-relaxed">
                I aim to reply to all business inquiries within 24 hours. Feel free to send an email or call directly.
              </p>
            </div>

          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1322] border border-white/10 shadow-2xl space-y-6">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Mirza Waleed Baig will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.name ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-medium">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.email ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      Subject / Inquiry Type *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineer Position / Full-Stack Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        errors.subject ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      Message Details *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, team requirements, or technical timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none ${
                        errors.message ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
