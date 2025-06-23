import { useState, useEffect } from 'react';

export default function Character() {
  const [isMoving, setIsMoving] = useState(false);

  // Simulate occasional movement
  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving(true);
      setTimeout(() => setIsMoving(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className={`w-12 h-16 bg-green-500 rounded-full shadow-lg transition-all duration-300 ${isMoving ? 'translate-y-1' : ''}`}>
        {/* Character details */}
        <div className="absolute top-1 left-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <div className="absolute top-1 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-2 bg-green-700 rounded-full"></div>
      </div>
      {/* Shadow */}
      <div className={`w-8 h-2 bg-black bg-opacity-20 rounded-full mx-auto 
        blur-sm transition-all duration-300 ${isMoving ? 'scale-90' : 'scale-75'}`}></div>
    </div>
  );
}