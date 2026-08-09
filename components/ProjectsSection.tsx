'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Zap, Star } from 'lucide-react';
import { projects, Project } from '@/data/portfolio';
import ProjectModal from './ProjectModal';
import { GithubIcon } from '@/components/SocialIcons';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24" aria-label="Selected projects">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list space-y-12">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                
                {/* Background Hover Card Highlight */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Project Image Column */}
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="relative aspect-video w-full rounded border-2 border-slate-200/10 overflow-hidden transition group-hover:border-teal-400/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Details Column */}
                <div className="z-10 sm:order-2 sm:col-span-6 space-y-3">
                  <h3>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-baseline font-semibold leading-tight text-slate-200 group/link text-base hover:text-teal-300 transition-colors"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px text-teal-300" />
                      </span>
                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Engineering Highlights / Metrics */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20"
                      >
                        <Zap className="w-3 h-3 text-teal-400" />
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium font-mono text-teal-300">
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* System Architecture Detail Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-300 hover:text-teal-300 transition-colors z-20 relative"
                    >
                      <span>View Architecture Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </li>
          ))}
        </ul>

        {/* Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
