import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'Frontend & Frameworks',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 80 },
        { name: 'Express.js', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS/Azure', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800/50 hidden md:block">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 font-mono">
          <span className="text-green-400">&gt;</span> Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-green-400">{category.icon}</div>
                <h3 className="text-xl font-semibold font-mono">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-mono">{skill.name}</span>
                      <span className="text-green-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 font-mono">Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">380+</div>
              <div className="text-gray-300">LeetCode Problems Solved</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">966</div>
              <div className="text-gray-300">All India Rank in CUET-PG</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">8.71</div>
              <div className="text-gray-300">GPA in Master's</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;