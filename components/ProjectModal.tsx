'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Zap, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e1322] border border-white/10 shadow-2xl z-10 p-6 sm:p-8 space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Header */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1322] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Metrics List */}
            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                Key Engineering Highlights & Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-400" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-xs flex items-center space-x-2 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs flex items-center space-x-2 shadow-lg shadow-indigo-500/20 transition-all"
            >
              <span>Live Application Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
