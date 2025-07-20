import { Code, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 font-mono">
          <span className="text-green-400">&gt;</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a strong focus on backend architecture 
              and system design. Currently pursuing my Master's in Computer Applications with 
              an impressive 8.71 GPA, I bring both academic excellence and practical experience 
              to every project.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My expertise lies in building scalable backend systems, designing robust APIs, 
              and implementing efficient database solutions. I've worked with cutting-edge 
              technologies and have a proven track record of optimizing performance and 
              delivering high-quality software solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Node.js', 'React', 'PostgreSQL', 'Docker', 'Redis', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm font-mono border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-400 transition-all duration-300">
              <Code className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-mono">Full-Stack Development</h3>
              <p className="text-gray-400">
                Creating end-to-end solutions with modern frameworks and best practices for maintainable code.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300">
              <Server className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-mono">Backend Architecture</h3>
              <p className="text-gray-400">
                Designing and implementing scalable server-side solutions with focus on performance and reliability.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-mono">Database Design</h3>
              <p className="text-gray-400">
                Optimizing database performance, implementing indexing strategies, and ensuring data integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;