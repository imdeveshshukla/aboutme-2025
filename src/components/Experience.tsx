import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Swiftbl',
      role: 'SDE Intern',
      period: 'May 2025–Present',
      location: 'Remote',
      achievements: [
        'Architected a multi-party document workflow with transactional integrity',
        'Implemented SHA-256 hashing of PDF documents for secure verification',
        'Refactored state management from Context API to Redux',
        'Optimized load time and search speed by reducing API calls and adding DB indexing'
      ]
    },
    {
      company: 'Tranzita Systems',
      role: 'SDE Intern',
      period: 'Nov 2024–Dec 2024',
      location: 'Lucknow (on-site)',
      achievements: [
        'Implemented CRUD operations in a Next.js project',
        'Performed Typesense Integration for search as a POC',
        'Adopted MVC architecture for structured development',
        'Developed and maintained features in a React.js project with focus on responsiveness'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 font-mono">
          <span className="text-green-400">&gt;</span> Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 font-mono">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-xl text-white mt-1">
                    <Building className="w-5 h-5" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-3">
                    <span className="text-green-400 mt-2 font-mono">▸</span>
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;