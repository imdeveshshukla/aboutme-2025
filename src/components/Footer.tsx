import { Code, Bot } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-gray-400 font-mono">Made with</span>
            <div className="flex items-center gap-1">
              <Bot className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono font-semibold">AI</span>
            </div>
            <span className="text-gray-400 font-mono">and</span>
            <div className="flex items-center gap-1">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-mono font-semibold">TypeScript</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 font-mono text-sm">
              © {currentYear} Devesh Shukla. All rights reserved.
            </p>
            <p className="text-gray-600 font-mono text-xs mt-1">
              Built with React, Tailwind CSS & Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;