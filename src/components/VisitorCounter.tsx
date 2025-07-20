import React, { useState, useEffect } from 'react';
import { Eye, Users } from 'lucide-react';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);
  const [isOnline, setIsOnline] = useState(1);

  useEffect(() => {
    // Simulate visitor count (in real app, this would come from analytics)
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 1000) + 500;
    
    // Increment visitor count
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitors(newCount);

    // Simulate online users
    const interval = setInterval(() => {
      setIsOnline(Math.floor(Math.random() * 5) + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-6 bottom-6 z-40 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-400" />
          <span className="text-gray-300">Visitors:</span>
          <span className="text-green-400 font-semibold">{visitors.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <Users className="w-4 h-4 text-green-400" />
          <span className="text-green-400">{isOnline}</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;