import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Zap } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Quiet',
      subtitle: 'Anonymous Social Media Platform',
      description: 'A full-stack anonymous social media application designed for college users to share thoughts and create topic-specific discussion rooms.',
      longDescription: 'Built with Node.js, React, Redux, and PostgreSQL, this platform enables secure anonymous posting within college communities. Features include nested comment systems, real-time interactions, and robust authentication.',
      tech: ['Node.js', 'React', 'Redux', 'PostgreSQL', 'Docker', 'Redis', 'Azure', 'GitHub Actions'],
      achievements: [
        'Enhanced user engagement by 20% through nested comments implementation',
        'Implemented Redis caching for improved backend performance',
        'Deployed with CI/CD pipelines using GitHub Actions',
        'Containerized backend with Docker and deployed on Azure'
      ],
      liveUrl: 'https://bequiet.live',
      githubUrl: 'https://github.com/imdeveshshukla/quiet',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Cold Email Generator',
      subtitle: 'AI-Powered Email Crafting Tool',
      description: 'An intelligent tool that generates personalized cold emails for job applications by analyzing resumes and job descriptions using LLM technology.',
      longDescription: 'Leveraging Flask, React, LangChain, and Groq, this application uses advanced AI to create professional, personalized emails. The system analyzes job requirements and user profiles to generate contextually relevant content.',
      tech: ['Flask', 'React', 'LangChain', 'Groq', 'LLM', 'Python', 'AI/ML'],
      achievements: [
        'Optimized AI inference speed by 25% using Groq queries',
        'Integrated LLM using LangChain for personalized content generation',
        'Created intuitive user interface for seamless email crafting',
        'Implemented efficient processing of resume and job description data'
      ],
      liveUrl: 'https://writemail.vercel.app/',
      githubUrl: 'https://github.com/imdeveshshukla/cold-email-backend',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 font-mono">
          <span className="text-green-400">&gt;</span> Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    selectedProject === index
                      ? 'bg-green-400/10 border-green-400 text-green-400'
                      : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {project.icon}
                    <h3 className="font-mono font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-sm opacity-75">{project.subtitle}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                {projects[selectedProject].icon}
                <h3 className="text-2xl font-bold text-green-400 font-mono">
                  {projects[selectedProject].title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {projects[selectedProject].longDescription}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 font-mono">Key Achievements:</h4>
                <div className="space-y-2">
                  {projects[selectedProject].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1 font-mono">▸</span>
                      <p className="text-gray-300 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 font-mono">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-green-400 rounded-full text-sm font-mono border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[selectedProject].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200 font-mono"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={projects[selectedProject].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 font-mono border border-gray-600"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;