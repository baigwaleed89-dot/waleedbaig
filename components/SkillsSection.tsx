'use client';

import React from 'react';
import { skillCategories } from '@/data/portfolio';

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24" aria-label="Skills and Toolkit">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Skills
        </h2>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-300 font-mono">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-teal-400/40 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-teal-300">
                      {skill.experience}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="w-full h-1.5 rounded-full bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-teal-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
