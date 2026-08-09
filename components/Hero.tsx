'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, Sparkles, Code2, Rocket, Award, ShieldCheck, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner shadow-white/5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">{personalInfo.name}</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-2">
                  Building High-Performance Web Applications & Scalable Systems
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2 group"
              >
                <Code2 className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
                <span>Explore Projects</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start space-x-4 pt-2"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-1">
                Connect:
              </span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

          </div>

          {/* Right Hero Visual Card & Metrics Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 opacity-30 blur-xl group-hover:opacity-50 transition duration-1000" />
              
              <div className="relative rounded-2xl bg-[#0e1322] border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Profile Header Header */}
                <div className="flex items-center space-x-4 border-b border-white/10 pb-6">
                  <div className="relative">
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0e1322] rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      {personalInfo.location}
                    </p>
                    <div className="mt-1 flex items-center space-x-1">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Principal Engineer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {personalInfo.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="text-2xl font-black bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Tech Snapshot */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 mb-2.5 flex items-center justify-between">
                    <span>Primary Stack:</span>
                    <span className="text-cyan-400 font-semibold">100% Type Safe</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js 14', 'TypeScript', 'Tailwind', 'Node.js', 'Go', 'GraphQL', 'PostgreSQL', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="flex flex-col items-center space-y-2 text-slate-500 hover:text-cyan-400 transition-colors group"
            aria-label="Scroll down to projects"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-slate-400 group-hover:text-cyan-400">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </div>

      </div>
    </section>
  );
}
