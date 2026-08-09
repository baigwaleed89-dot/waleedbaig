'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experiences } from '@/data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24" aria-label="Work experience">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list space-y-12">
          {experiences.map((exp) => (
            <li key={exp.id}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                
                {/* Background Hover Highlight Card */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Period Column */}
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2 font-mono"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                {/* Role Details Column */}
                <div className="z-10 sm:col-span-6 space-y-3">
                  <h3 className="font-semibold leading-snug text-slate-200 text-base">
                    <div>
                      <span className="inline-flex items-baseline font-semibold leading-tight text-slate-200 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.role} ·{' '}
                          <span className="inline-block text-teal-300">
                            {exp.company}
                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px text-teal-300" />
                          </span>
                        </span>
                      </span>
                    </div>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start space-x-2">
                        <span className="text-teal-400 mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <ul className="flex flex-wrap gap-1.5 pt-2" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium font-mono text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
