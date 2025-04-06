
import { useState, useEffect } from 'react';

interface ImpactCounterProps {
  startValue: number;
  endValue: number;
  label: string;
  duration?: number;
  suffix?: string;
}

const ImpactCounter = ({ 
  startValue, 
  endValue, 
  label,
  duration = 2000,
  suffix = ''
}: ImpactCounterProps) => {
  const [count, setCount] = useState(startValue);
  
  useEffect(() => {
    // Calculate the increment per frame to reach endValue in the given duration
    const totalFrames = duration / 16; // Approx 60 fps (16ms per frame)
    const increment = (endValue - startValue) / totalFrames;
    
    let currentCount = startValue;
    let frameCount = 0;
    
    const interval = setInterval(() => {
      frameCount++;
      
      if (frameCount <= totalFrames) {
        currentCount += increment;
        setCount(Math.floor(currentCount));
      } else {
        setCount(endValue);
        clearInterval(interval);
      }
    }, 16);
    
    return () => clearInterval(interval);
  }, [startValue, endValue, duration]);
  
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-eco-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};

export default ImpactCounter;
