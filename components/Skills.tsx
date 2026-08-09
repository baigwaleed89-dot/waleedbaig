'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode, 
  Palette, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Server, 
  Cpu, 
  Terminal, 
  Network, 
  Database, 
  Zap, 
  Box, 
  Cloud, 
  Bot, 
  Binary, 
  GitBranch, 
  FolderGit2,
  Wrench,
  ShieldCheck
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  FileCode: <FileCode className="w-5 h-5 text-blue-400" />,
  Palette: <Palette className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Terminal: <Terminal className="w-5 h-5 text-yellow-400" />,
  Network: <Network className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-yellow-400" />,
  Box: <Box className="w-5 h-5 text-cyan-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  Bot: <Bot className="w-5 h-5 text-violet-400" />,
  Binary: <Binary className="w-5 h-5 text-purple-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-emerald-400" />,
  FolderGit2: <FolderGit2 className="w-5 h-5 text-indigo-400" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070a12]/50 border-y border-white/5">
      {/* Background Accent Gradient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-medium"
          >
            <Wrench className="w-3.5 h-3.5 text-violet-400" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Tech Stack & <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Core Competencies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Categorized toolkit across modern web architectures, cloud platforms, databases, and enterprise engineering best practices.
          </motion.p>
        </div>

        {/* Skill Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12"
        >
          {skillCategories.map((category, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Selected Category Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="text-center max-w-xl mx-auto text-xs font-mono text-cyan-400">
            {skillCategories[activeTab].description}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-[#0e1322] border border-white/10 p-6 hover:border-cyan-500/40 shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                      {iconMap[skill.iconName] || <Code2 className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        Experience: {skill.experience}
                      </span>
                    </div>
                  </div>

                  {skill.highlightTag && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {skill.highlightTag}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Animated Level Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
