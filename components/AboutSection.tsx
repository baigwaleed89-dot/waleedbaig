'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24" aria-label="About me">
      {/* Mobile Sticky Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
        <p>
          Back in 2019, I started my journey into web development, fascinated by how lines of code could transform into interactive software used by people across the globe. Today, I am a <strong className="text-slate-200 font-semibold">Full-Stack Software Engineer</strong> focused on building accessible, high-performance web applications and scalable distributed systems.
        </p>

        <p>
          My main focus these days is engineering enterprise frontend and full-stack solutions using <strong className="text-slate-200 font-semibold">Next.js, TypeScript, React, Node.js</strong>, and modern cloud technologies. I enjoy working at the intersection of complex architecture and refined UI design — ensuring that application backends are resilient while frontend interfaces deliver sub-second performance.
        </p>

        <p>
          Throughout my career, I've had the opportunity to build products across diverse industries — from high-throughput analytics dashboards processing 50k events/sec to AI agent workflow tools and headless e-commerce platforms. I take pride in translating complex business requirements into clean, maintainable code.
        </p>

        <p>
          When I'm not in front of a code editor, you can find me exploring tech articles, experimenting with new open-source libraries, or refining developer tooling.
        </p>
      </div>
    </section>
  );
}
