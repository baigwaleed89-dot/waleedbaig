'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons';
import { personalInfo } from '@/data/portfolio';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' }
];

export default function LeftHeader() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 40;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Name & Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
            {personalInfo.name}
          </a>
        </h1>

        <h2 className="mt-3 text-lg font-semibold tracking-tight text-teal-300 sm:text-xl">
          {personalInfo.title}
        </h2>

        <p className="mt-4 max-w-sm leading-relaxed text-slate-400 text-sm sm:text-base">
          {personalInfo.bio}
        </p>

        {/* Location & Status Indicator */}
        <div className="mt-4 flex flex-col space-y-1.5 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>
        </div>

        {/* Navigation Jump Links (Brittany Chiang Line Indicator Style) */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-12 w-max space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`group flex items-center py-2.5 transition-all ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-slate-100'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-all ${
                        isActive
                          ? 'text-slate-100'
                          : 'text-slate-500 group-hover:text-slate-200'
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links at Bottom of Left Header */}
      <div className="mt-8 lg:mt-0 flex flex-col space-y-4">
        <ul className="flex items-center space-x-5" aria-label="Social media">
          <li>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Profile"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email Me"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>

    </header>
  );
}
