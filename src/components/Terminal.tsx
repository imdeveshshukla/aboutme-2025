import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface Command {
  input: string;
  output: string[];
  timestamp: string;
}

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: [
      'Available commands:',
      '  about       - Learn more about Devesh',
      '  skills      - View technical skills',
      '  projects    - List all projects',
      '  experience  - Show work experience',
      '  contact     - Get contact information',
      '  github      - Open GitHub profile',
      '  linkedin    - Open LinkedIn profile',
      '  resume      - Download resume',
      '  clear       - Clear terminal',
      '  whoami      - Display current user',
      '  date        - Show current date',
      '  ls          - List available sections',
      '  exit        - Exit Terminal'
      
    ],
    about: [
      'Devesh Shukla - Full-Stack Developer',
      'Master of Computer Applications (GPA: 8.71/10.00)',
      'Specializing in backend architecture and system design',
      'Currently working as SDE Intern at Swiftbl',
      'Passionate about building scalable applications'
    ],
    skills: [
      'Languages: JavaScript, TypeScript, Python, Java',
      'Backend: Node.js, Express.js, Flask',
      'Databases: PostgreSQL, MongoDB, Redis',
      'Frontend: React.js, Next.js, Tailwind CSS',
      'DevOps: Docker, AWS, Azure, GitHub Actions',
      'Tools: Git, NGINX, LangChain, Cloudflare Workers'
    ],
    projects: [
      '1. Quiet - Anonymous Social Media Platform',
      '   Tech: Node.js, React, Redux, PostgreSQL, Docker',
      '   Live: bequiet.live',
      '',
      '2. Cold Email Generator - AI-Powered Email Tool',
      '   Tech: Flask, React, LangChain, Groq, LLM',
      '   Live: writemail.vercel.app'
    ],
    experience: [
      'Swiftbl - SDE Intern (May 2025 - Present)',
      '• Multi-party document workflow with SHA-256 hashing',
      '• Refactored Context API to Redux',
      '• Optimized performance with DB indexing',
      '',
      'Tranzita Systems - SDE Intern (Nov 2024 - Dec 2024)',
      '• CRUD operations in Next.js',
      '• Typesense integration for search',
      '• MVC architecture implementation'
    ],
    contact: [
      'Email: deveshshukla1603@gmail.com',
      'Location: Mirzapur, UP, India',
      'GitHub: github.com/imdeveshshukla',
      'LinkedIn: linkedin.com/in/imdeveshshukla'
    ],
    whoami: ['devesh@portfolio:~$ Full-Stack Developer'],
    date: [new Date().toLocaleString()],
    ls: ['about/', 'skills/', 'projects/', 'experience/', 'contact/'],
    github: ['Opening GitHub profile...'],
    linkedin: ['Opening LinkedIn profile...'],
    resume: ['Resume download initiated...'],
    clear: [],
    exit:[]
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const downloadDevResume = ()=>{
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/195Dgz_0aTBC3roshszXFDdg8kcLMYtlk/view?usp=sharing";
    link.download = "Devesh-Shukla.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const timestamp = new Date().toLocaleTimeString();
    
    if (command === 'clear') {
      setHistory([]);
      return;
    }

    let output: string[] = [];
    
    if (commands[command as keyof typeof commands]) {
      output = commands[command as keyof typeof commands];
      
      // Handle special commands
      if (command === 'github') {
        setTimeout(() => window.open('https://github.com/imdeveshshukla', '_blank'), 1000);
      } else if (command === 'linkedin') {
        setTimeout(() => window.open('https://linkedin.com/in/imdeveshshukla', '_blank'), 1000);
      }
      else if(command === 'resume'){
        setTimeout(()=>window.open('https://drive.google.com/file/d/195Dgz_0aTBC3roshszXFDdg8kcLMYtlk/view?usp=sharing', '_blank'),500);
      }
      else if(command === 'exit'){
        setIsOpen(false);
      }
    } else {
      output = [`Command not found: ${cmd}`, 'Type "help" for available commands'];
    }

    const newCommand: Command = {
      input: cmd,
      output,
      timestamp
    };

    setHistory(prev => [...prev, newCommand]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6 text-white" />
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed inset-4 z-50 bg-gray-900 border border-green-400 rounded-lg shadow-2xl flex flex-col max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-green-400 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-400 font-mono">devesh@portfolio:~</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="flex-1 p-4 overflow-y-auto bg-black text-green-400 font-mono text-sm"
          >
            <div className="mb-4">
              <p>Welcome to Devesh's Interactive Portfolio Terminal</p>
              <p>Type 'help' to see available commands</p>
              <p>---</p>
            </div>

            {history.map((cmd, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">devesh@portfolio:~$</span>
                  <span className="text-white">{cmd.input}</span>
                  <span className="text-gray-500 text-xs ml-auto">{cmd.timestamp}</span>
                </div>
                {cmd.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="ml-4 text-green-300">
                    {line}
                  </div>
                ))}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-blue-400">devesh@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-white"
                placeholder="Type a command..."
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Terminal;