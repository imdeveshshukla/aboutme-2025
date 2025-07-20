import  { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Backend Developer',
    'Full-Stack Engineer',
    'Frontend Developer',
    'System Architect',
    'API Designer'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6">
        <VisitorCounter/>
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-2xl font-semibold text-white">
              <span className="text-green-400">&gt;</span> Devesh Shukla
            </div>
            {/* <span className="text-sm md:text-lg text-gray-500 block mt-2">aka dev6sh</span> */}
            <h1 className="mt-4 text-xl md:text-2xl text-gray-300">
              <span className="text-green-400">&gt;</span> {currentText}
              <span className="animate-pulse text-green-400">|</span>
            </h1>
          </div>

          <p className="text-xl md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building resilient backends that scale and don’t break.<br/>
            Turning complex problems into elegant solutions.
            <br />
            <span className="text-sm text-green-400 font-mono mt-2 block">
              💡 Tip: Try the Konami Code (↑↑↓↓←→←→BA) or click the terminal icon!
            </span>
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/imdeveshshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-green-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/imdeveshshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:deveshshukla1603@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-red-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-green-400 hover:text-green-300 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;