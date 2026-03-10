import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Server, Database, FileCode, Sparkles } from 'lucide-react';
const roles = ['Software Developer', 'Backend Engineer', 'DevOps Engineer', 'AI Enthusiast'];
export default function Portfolio() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const skills = {
    languages: ['Java', 'Python'],
    frameworks: ['Spring Boot', 'FastAPI'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
    devops: ['Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'GitHub Actions'],
    testing: ['Playwright (E2E)', 'JUnit', 'Pytest'],
    ai: ['LLM Integration', 'Model Context Protocol (MCP)', 'Prompt Engineering', 'GenAI Application Development']
  };

  const projects = [
    {
      title: 'Edge Sentinel: AI-Powered Self-Healing Orchestrator',
      tech: 'FastAPI, PostgreSQL, Redis, Docker, Model Context Protocol (MCP), LLMs',
      description: 'An autonomous infrastructure platform that closes the loop between monitoring and remediation using AI-driven root cause analysis and secure automated fixes.',
      features: [
        'Real-time distributed monitoring with edge agents pushing telemetry (CPU, Memory, Disk) to centralized orchestrator',
        'AI-driven root cause analysis using LLMs to distinguish between transient spikes and actual failures',
        'Secure remediation via Model Context Protocol (MCP) for sandboxed, auditable infrastructure command execution',
        'Resilient architecture with local caching and sync capabilities during network outages',
        'Built with FastAPI, PostgreSQL for state management, Redis for event bus, and SQLAlchemy ORM'
      ]
    },
    {
      title: 'Code Base Explorer',
      tech: 'React, Spring Boot, Docker',
      description: 'A tool to explore and visualize remote codebases in structured, tabular format.',
      features: [
        'Backend indexes repository structure, modules, and dependencies for easy querying and navigation',
        'Supports real-time fetching from GitHub/GitLab with caching',
        'Dockerized for deployment flexibility',
        'Planned extensions for multi-language parsing and dependency heatmaps'
      ]
    }
  ];

  const experience = {
    company: 'Thoughtworks Technologies',
    role: 'Software Engineer',
    period: 'June 2024 - Present',
    highlights: [
      'Built a registry-agnostic image query platform supporting 2 container registries, reducing image lookup time by ~30%',
      'Streamlined dataset usage by introducing PV/PVC mounting, cutting redundant data copies and improving cluster resource utilization by ~15%',
      'Designed and implemented a service-agnostic integration testing framework adopted by 8+ microservices',
      'Developed a dynamic resource provisioning tool that improved job placement time by ~25%',
      'Centralized access control across 4+ APIs, reducing permission-related errors'
    ]
  };

  const scrollToSection = (id : any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-indigo-500/20 z-50 shadow-lg shadow-indigo-900/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sayan Roy
          </h1>
          <div className="flex gap-6">
            {[
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Resources', id: 'resources' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-indigo-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-indigo-400 animate-pulse" size={24} />
              <span className="text-indigo-400 font-medium">Welcome to my portfolio</span>
            </div>
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-slate-100 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Hi, I'm Sayan Roy
            </h2>
            <div className="h-12 mb-2 relative overflow-hidden">
              {roles.map((role, index) => (
                <p 
                  key={role}
                  className={`text-2xl text-indigo-300 font-semibold absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                    index === currentRole 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  {role}
                </p>
              ))}
            </div>
            <p className="text-lg text-slate-400">Building scalable, containerized services with Java, Python & Spring Boot</p>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/sayanroy44617" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-lg transition-all shadow-lg shadow-slate-900/50 border border-slate-700/50">
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/rozsayan01" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-lg transition-all shadow-lg shadow-slate-900/50 border border-slate-700/50">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:sayanroy44617@gmail.com"
               className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all shadow-lg shadow-indigo-900/50">
              <Mail size={20} /> Email
            </a>
            <a href="tel:+918967952604"
               className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-lg transition-all shadow-lg shadow-slate-900/50 border border-slate-700/50">
              <Phone size={20} /> +91 8967952604
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Code className="text-indigo-400" /> About Me
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Software Developer with 1.5 years of experience building scalable backend systems and GenAI applications. 
            Proficient in Java, Python, Spring Boot, FastAPI, Docker, and Kubernetes. Specialized in distributed systems, 
            LLM integration, infrastructure automation, and CI/CD pipelines. Passionate about leveraging AI to solve 
            real-world challenges and improve developer workflows.
          </p>
          
          <div className="mt-8 p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-xl font-mono text-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-slate-400 text-xs">~/life/coffee.py</span>
            </div>
            <pre className="text-indigo-300">
              <span className="text-purple-400">def</span> <span className="text-cyan-400">solve_problems</span>():
              {'\n'}  <span className="text-slate-500"># First, apply the universal fix</span>
              {'\n'}  coffee = <span className="text-green-400">True</span>
              {'\n'}  <span className="text-purple-400">while</span> coffee:
              {'\n'}    <span className="text-purple-400">return</span> <span className="text-orange-400">"elegant_solution"</span>
            </pre>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-xl border border-indigo-500/20 backdrop-blur-sm shadow-xl">
            <h4 className="text-xl font-semibold mb-3 text-indigo-300 flex items-center gap-2">
              <Sparkles size={20} /> Achievement
            </h4>
            <p className="text-slate-300">🏆 Awarded the "Nurture Tek Knight" title by Cognizant Technology Solutions</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Server className="text-purple-400" /> Experience
          </h3>
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{experience.role}</h4>
                <p className="text-xl text-slate-300 italic">{experience.company}</p>
              </div>
              <span className="text-slate-400 bg-slate-800/50 px-4 py-1 rounded-full border border-slate-700/50">{experience.period}</span>
            </div>
            <ul className="space-y-3 mt-6">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300">
                  <span className="text-indigo-400 mt-1">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FileCode className="text-pink-400" /> Projects
          </h3>
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-xl mb-6 hover:border-indigo-500/30 transition-all">
              <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">{project.title}</h4>
              <p className="text-slate-400 mb-4 flex items-center gap-2">
                <Code size={16} className="text-purple-400" />
                {project.tech}
              </p>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-400">
                    <span className="text-indigo-400">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
          
          <div className="space-y-8">
            {/* Languages */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-indigo-400 flex items-center gap-2">
                <Code size={20} /> Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-lg text-sm font-medium shadow-lg hover:shadow-indigo-500/50 transition-all border border-indigo-500/30 backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-purple-400 flex items-center gap-2">
                <Server size={20} /> Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium shadow-lg hover:shadow-purple-500/50 transition-all border border-purple-500/30 backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-pink-400 flex items-center gap-2">
                <Database size={20} /> Databases
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-pink-600/80 to-rose-600/80 rounded-lg text-sm font-medium shadow-lg hover:shadow-pink-500/50 transition-all border border-pink-500/30 backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-indigo-400 flex items-center gap-2">
                <Sparkles size={20} /> Generative AI
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.ai.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-indigo-600/80 to-cyan-600/80 rounded-lg text-sm font-medium shadow-lg hover:shadow-cyan-500/50 transition-all border border-cyan-500/30 backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-purple-400 flex items-center gap-2">
                <FileCode size={20} /> Testing & Automation
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.testing.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 rounded-lg text-sm font-medium shadow-lg hover:shadow-purple-500/50 transition-all border border-purple-500/30 backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-pink-400 flex items-center gap-2">
                <Server size={20} /> Infrastructure & DevOps
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.devops.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-pink-600/80 to-purple-600/80 rounded-lg text-sm font-medium shadow-lg hover:shadow-pink-500/50 transition-all border border-pink-500/30 backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Resources Section */}
      <section id="resources" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FileCode className="text-cyan-400" /> Resources & Notes
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://sayanroy44617.github.io/KnowledgeBase/" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-xl hover:border-indigo-500/30 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  📝 My Notes Collection
                </h4>
                <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-slate-300 mb-4">
                Centralized knowledge base with personal notes on software development, system design, architecture patterns, and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-700/30">System Design</span>
                <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-700/30">Architecture</span>
                <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs border border-indigo-700/30">Best Practices</span>
              </div>
            </a>

            <a href="https://sayanroy44617.github.io/KnowledgeBase/dsa/dsa-decision-tree.html" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-xl hover:border-purple-500/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    🧠 DSA Pattern Navigator
                  </h4>
                  <svg className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-slate-300 mb-4">
                  Interactive tree-based tool to identify which DSA pattern a coding problem belongs to. Navigate through questions to classify problems and understand the right approach.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs border border-purple-700/30">Interactive Tool</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs border border-purple-700/30">Pattern Classifier</span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs border border-purple-700/30">Problem Solving</span>
                </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:sayanroy44617@gmail.com"
               className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all font-semibold shadow-lg shadow-indigo-900/50">
              Send Email
            </a>
            <a href="https://linkedin.com/in/roysayan01" target="_blank" rel="noopener noreferrer"
               className="px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-lg transition-all font-semibold shadow-lg border border-slate-700/50">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Sayan Roy. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
