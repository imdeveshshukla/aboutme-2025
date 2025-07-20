import { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';

const EasterEgg = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);
  
  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    console.log("INside");
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default behavior for arrow keys
      if (e.code.startsWith('Arrow')) {
        e.preventDefault();
      }
      
      const newSequence = [...sequence, e.code].slice(-konamiCode.length);
      setSequence(newSequence);

      console.log('Key pressed:', e.code);
      if (newSequence.length === konamiCode.length && 
          newSequence.every((key, index) => key === konamiCode[index])) {
        console.log('Cheat code activated!');
        setIsActivated(true);
        
        // Reset after showing
        setTimeout(() => {
          setSequence([]);
          setIsActivated(false);
        }, 5000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  const secretMessages = [
    "🎮 Konami Code Activated!",
    "🚀 You found the secret!",
    "💻 True developer detected!",
    "🎯 Achievement Unlocked!",
    "⚡ Power-up activated!"
  ];

  if (!isActivated) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-gray-900 border border-green-400 rounded-lg p-8 text-center max-w-md mx-4 animate-pulse">
        <Gamepad2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
          {secretMessages[Math.floor(Math.random() * secretMessages.length)]}
        </h2>
        <p className="text-gray-300 mb-4">
          You discovered the hidden easter egg! Only true developers know the Konami Code.
        </p>
        <div className="text-sm text-gray-400 font-mono">
          <p>Sequence: ↑↑↓↓←→←→BA</p>
          <p className="mt-2">Thanks for exploring! 🎉</p>
        </div>
        <button
          onClick={() => setIsActivated(false)}
          className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded font-mono transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EasterEgg;