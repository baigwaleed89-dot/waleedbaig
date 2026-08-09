'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Progression</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Professional <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Track record of driving technical leadership, scaling cloud platforms, and engineering enterprise web products.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-violet-600 -translate-x-1/2 rounded-full opacity-30 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#0e1322] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="group rounded-2xl bg-[#0e1322] border border-white/10 p-6 sm:p-8 hover:border-cyan-500/40 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 space-y-4">
                      
                      {/* Header Info */}
                      <div className="space-y-2 border-b border-white/10 pb-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-cyan-400" />
                            {exp.period}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {exp.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>

                        <div className="text-sm font-semibold text-indigo-400">
                          {exp.company}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Bullet Highlights */}
                      <div className="space-y-2 pt-1">
                        {exp.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
