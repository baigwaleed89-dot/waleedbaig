import Spotlight from '@/components/Spotlight';
import LeftHeader from '@/components/LeftHeader';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import { personalInfo } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="group/spotlight relative">
      {/* Mouse spotlight glow effect */}
      <Spotlight />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        {/* Skip to content link */}
        <a
          href="#about"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-teal-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0"
        >
          Skip to Content
        </a>

        <div className="lg:flex lg:justify-between lg:gap-8">
          {/* LEFT: Sticky Sidebar */}
          <LeftHeader />

          {/* RIGHT: Scrollable Main Content */}
          <main id="content" className="pt-24 lg:w-[55%] lg:py-24 space-y-4">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />

            {/* Footer */}
            <footer className="pt-12 pb-8 text-xs text-slate-500 leading-relaxed border-t border-slate-800">
              <p>
                Design inspired by{' '}
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-teal-300 transition-colors"
                >
                  Brittany Chiang
                </a>
                . Built by{' '}
                <span className="text-slate-300 font-semibold">{personalInfo.name}</span>{' '}
                using Next.js 14, TypeScript, and Tailwind CSS. All content and code are
                original work.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
