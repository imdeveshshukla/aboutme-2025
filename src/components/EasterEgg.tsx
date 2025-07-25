import { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';

const EasterEgg = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);

  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  const secretMessages = [
    "🎮 Konami Code Activated!",
    "🚀 You found the secret!",
    "💻 True Hacker detected!",
    "🎯 Achievement Unlocked!",
    "⚡ Power-up activated!"
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code.startsWith('Arrow')) e.preventDefault();

      const newSequence = [...sequence, e.code].slice(-konamiCode.length);
      setSequence(newSequence);

      if (
        newSequence.length === konamiCode.length &&
        newSequence.every((key, index) => key === konamiCode[index])
      ) {
        setIsActivated(true);
        setSequence([]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  if (!isActivated) return null;

  const randomMessage = secretMessages[Math.floor(Math.random() * secretMessages.length)];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-gray-900 border border-green-400 rounded-lg p-6 md:p-8 text-center max-w-lg w-full mx-4">
        <Gamepad2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h2 className="text-xl md:text-2xl font-bold text-green-400 font-mono mb-2 animate-pulse">
          {randomMessage}
        </h2>
        <p className="text-gray-300 font-mono text-sm mb-4">
          You're a true coder for discovering the legendary Konami Code!
        </p>
        <p className="text-green-300 font-mono text-sm mb-4">
          Want to play my very first game — made with just HTML, CSS & JS?
        </p>
        <a
          href="https://imdeveshshukla.github.io/Snakee/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-mono transition-colors duration-200"
        >
          🎮 Launch Snake Game
        </a>
        <div className="text-xs text-gray-400 font-mono mt-4">
          Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
        </div>
        <button
          onClick={() => setIsActivated(false)}
          className="mt-4 px-4 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 rounded font-mono"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EasterEgg;
