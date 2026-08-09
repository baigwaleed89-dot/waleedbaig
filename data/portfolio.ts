export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: 'All' | 'Full Stack' | 'Distributed Systems' | 'AI & ML' | 'Frontend';
  tags: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage 1-100
    experience: string; // e.g. "6+ yrs"
    iconName: string;
    description: string;
    highlightTag?: string;
  }[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
  status: string;
  avatarUrl: string;
  resumeUrl: string;
  phone: string;
  metrics: {
    label: string;
    value: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Mirza Waleed Baig",
  title: "Full-Stack Software Engineer",
  location: "Faisalabad, Pakistan • Available Worldwide",
  bio: "Full-Stack Software Engineer specializing in building high-performance web applications and scalable distributed systems. Passionate about translating complex requirements into clean, maintainable code using Next.js, TypeScript, and modern cloud architecture.",
  status: "Available for Roles & Consulting (+92 318 7513983)",
  phone: "+92 318 7513983 / +92 349 9884701",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  resumeUrl: "#contact",
  metrics: [
    { label: "Years Experience", value: "5+" },
    { label: "Prod Applications", value: "35+" },
    { label: "Code Quality", value: "100%" },
    { label: "Lighthouse Performance", value: "99/100" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "baigwaleed89@gmail.com"
  }
};

export const projects: Project[] = [
  {
    id: "nexus-cloud",
    title: "Nexus Cloud Observability Platform",
    shortDescription: "Real-time stream processing dashboard handling 50k events/sec with sub-50ms render latency.",
    fullDescription: "An enterprise-grade observability dashboard engineered for cloud infrastructure engineering teams. Tracks distributed microservice traces, real-time memory pressure, and automated anomaly detection with WebSocket dynamic updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "Full Stack",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets", "Go", "PostgreSQL", "Redis"],
    metrics: ["⚡ 50k events/sec", "🚀 Sub-50ms render", "🔒 SOC2 Type II Certified"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.nexuscloud.io",
    featured: true
  },
  {
    id: "omniai-studio",
    title: "OmniAI Workflow Orchestrator",
    shortDescription: "Interactive node graph studio for building RAG pipelines and autonomous LLM agents.",
    fullDescription: "A visual canvas editor empowering developers to build complex multi-agent workflows. Includes visual prompt execution debugging, vector memory retrieval nodes, and one-click API endpoint deployment.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    category: "AI & ML",
    tags: ["Next.js", "React Flow", "Framer Motion", "Python", "FastAPI", "Pinecone", "Gemini API"],
    metrics: ["🤖 15M+ tokens processed", "⏱️ 280ms TTFT", "⭐ 4.9/5 Dev Rating"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.omniai.studio",
    featured: true
  },
  {
    id: "aetheria-commerce",
    title: "Aetheria High-Frequency Commerce",
    shortDescription: "Headless e-commerce platform with edge SSR, dynamic localization, and instant checkout.",
    fullDescription: "Architected a zero-downtime headless retail application optimized for peak holiday traffic surges. Features distributed edge caching, global currency switching, and instant cart mutations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Full Stack",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "GraphQL", "Redis", "Stripe API"],
    metrics: ["📈 +34% Conversion rate", "⚡ 100/100 Core Web Vitals", "💳 $14M Volume"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.aetheriacommerce.com",
    featured: true
  },
  {
    id: "hyperion-broker",
    title: "Hyperion Distributed Message Broker",
    shortDescription: "Fault-tolerant event stream broker written in Go with real-time Next.js admin console.",
    fullDescription: "Low-latency message broker engineered for high-stakes fintech transactions. Guarantees exactly-once delivery, dead-letter queue routing, and automated partition balancing across Kubernetes clusters.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    category: "Distributed Systems",
    tags: ["Go", "gRPC", "Docker", "Kubernetes", "Next.js", "Prometheus"],
    metrics: ["🛡️ 99.999% SLA Uptime", "⚡ 1.8ms p99 Latency", "📦 2 Billion Msg/Day"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.hyperionqueue.org",
    featured: false
  },
  {
    id: "vortex-ui",
    title: "Vortex Design System & Component Library",
    shortDescription: "Accessible dark-mode component kit with 40+ Framer Motion micro-interactions.",
    fullDescription: "Comprehensive enterprise design system built from the ground up for high-contrast accessibility, dark mode elegance, and modular React state management.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    category: "Frontend",
    tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "Storybook", "Radix UI"],
    metrics: ["♿ WCAG AAA Certified", "📦 < 9kB gzipped", "⚡ 100% Type Safe"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.vortexui.dev",
    featured: false
  },
  {
    id: "synthwave-vector",
    title: "SynthWave Vector Search Engine",
    shortDescription: "Dense vector indexing pipeline with hybrid keyword + embedding retrieval API.",
    fullDescription: "High-performance semantic retrieval infrastructure indexing millions of multi-modal documents with dense vector embeddings and HNSW similarity graph querying.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    category: "AI & ML",
    tags: ["Python", "FastAPI", "Pinecone", "Docker", "Next.js", "Tailwind"],
    metrics: ["🔍 12ms Semantic Search", "📚 8M+ Docs Index", "⚡ 99.4% Precision"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.synthwavesearch.io",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Software Engineer",
    company: "Distributed Tech Solutions",
    period: "2023 — Present",
    location: "Faisalabad, Pakistan (Hybrid / Remote)",
    type: "Full-Time",
    description: "Leading development of scalable web platforms, high-performance Next.js applications, and micro-service backends.",
    highlights: [
      "Built server-side rendered Next.js 14 applications with TypeScript and Tailwind CSS, reducing page load times by over 50%.",
      "Engineered resilient GraphQL & REST API integrations, implementing Redis caching for sub-50ms data retrieval.",
      "Spearheaded modern UI design systems with Framer Motion, enhancing user engagement and accessibility compliance."
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker"]
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "Cloud Application Systems",
    period: "2021 — 2023",
    location: "Remote",
    type: "Full-Time",
    description: "Designed responsive single-page web applications and RESTful backend APIs for international clients.",
    highlights: [
      "Migrated monolithic frontend codebase to modular React/Next.js components, achieving 99/100 Lighthouse performance scores.",
      "Developed robust authentication modules and role-based access controls for multi-tenant SaaS dashboards.",
      "Collaborated in agile sprint cycles with cross-functional engineering teams to ship high-impact features."
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Jest"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Modern component architectures, state management, design systems, and web performance optimization.",
    skills: [
      { name: "Next.js 14+ & React 19", level: 98, experience: "5+ yrs", iconName: "Code2", description: "App Router, Server Components, SSR, Edge runtime", highlightTag: "Core Specialty" },
      { name: "TypeScript", level: 95, experience: "5+ yrs", iconName: "FileCode", description: "Strict type safety, generics, modern syntax", highlightTag: "Primary Language" },
      { name: "Tailwind CSS", level: 96, experience: "5+ yrs", iconName: "Palette", description: "Responsive layouts, Glassmorphism, design tokens", highlightTag: "UI Master" },
      { name: "Framer Motion", level: 92, experience: "4+ yrs", iconName: "Sparkles", description: "Scroll animations, 3D tilt, micro-interactions" },
      { name: "State Management & Web APIs", level: 94, experience: "5+ yrs", iconName: "Layers", description: "Zustand, React Query, WebSockets, Web Vitals" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Scalable microservices, API architecture, stream processing, and serverless backend engineering.",
    skills: [
      { name: "Node.js & Express / NestJS", level: 94, experience: "5+ yrs", iconName: "Server", description: "Async I/O, event loops, REST & GraphQL APIs", highlightTag: "Backend Core" },
      { name: "Python / FastAPI", level: 90, experience: "4+ yrs", iconName: "Terminal", description: "Async APIs, data processing, backend orchestration" },
      { name: "GraphQL & RESTful APIs", level: 93, experience: "5+ yrs", iconName: "Network", description: "Schema design, authentication, rate limiting" }
    ]
  },
  {
    title: "Databases & Cloud Infrastructure",
    description: "Relational, document databases, and containerized cloud deployment.",
    skills: [
      { name: "PostgreSQL & Prisma / Drizzle", level: 92, experience: "5+ yrs", iconName: "Database", description: "Schema modeling, indexing, query tuning", highlightTag: "Primary DB" },
      { name: "Redis & Caching", level: 90, experience: "4+ yrs", iconName: "Zap", description: "In-memory caching, rate limiting, session storage" },
      { name: "Docker & Containerization", level: 88, experience: "4+ yrs", iconName: "Box", description: "Docker compose, multi-stage builds, deployment" },
      { name: "Vercel & AWS Cloud", level: 90, experience: "5+ yrs", iconName: "Cloud", description: "Serverless functions, edge deployment, CI/CD", highlightTag: "Cloud Native" }
    ]
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
