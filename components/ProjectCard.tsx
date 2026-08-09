'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Zap, Star } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-[#0e1322]/90 border border-white/10 hover:border-cyan-500/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Glow Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-cyan-500/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card Content Container */}
      <div>
        {/* Project Cover Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1322] via-[#0e1322]/20 to-transparent" />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono font-medium text-cyan-300 flex items-center gap-1">
              <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              Featured System
            </div>
          )}

          {/* Quick External Links overlay */}
          <div className="absolute top-3 right-3 flex items-center space-x-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
              aria-label="View Source Code on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              aria-label="Visit Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              {project.category}
            </span>
            <h3
              onClick={() => onSelect(project)}
              className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Metrics Pill Highlights */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.metrics.map((metric, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-medium font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              >
                <Zap className="w-3 h-3 text-cyan-400" />
                {metric}
              </span>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 text-slate-400">
                +{project.tags.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={() => onSelect(project)}
          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 group-hover:border-cyan-500/30 text-xs font-semibold text-slate-200 group-hover:text-white transition-all flex items-center justify-center space-x-1.5"
        >
          <span>View System Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </motion.div>
  );
}
