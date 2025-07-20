import React, { useEffect, useRef } from 'react';

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Code snippets that will fall
    const codeSnippets = [
      'const app = express()',
      'app.listen(3000)',
      'SELECT * FROM users',
      'docker build -t app .',
      'npm install express',
      'git commit -m "feat"',
      'async function getData()',
      'return res.json(data)',
      'mongoose.connect(uri)',
      'app.use(middleware)',
      'const result = await',
      'try { ... } catch(e)',
      'export default class',
      'import React from',
      'useState(false)',
      'useEffect(() => {})',
      'console.log("debug")',
      'process.env.NODE_ENV',
      'JSON.stringify(obj)',
      'Math.random() * 100'
    ];

    const fontSize = 12;
    const columns = Math.floor(canvas.width / 150); // Wider columns for code
    const drops: Array<{y: number, text: string, speed: number}> = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: Math.random() * 2 + 1
      };
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF41';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        
        ctx.fillText(drop.text, i * 150, drop.y);
        
        drop.y += drop.speed;

        if (drop.y > canvas.height && Math.random() > 0.975) {
          drop.y = 0;
          drop.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          drop.speed = Math.random() * 2 + 1;
        }
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default CodeRain;