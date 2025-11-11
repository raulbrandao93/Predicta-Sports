
import React from 'react';

interface PredictaLogoProps {
  className?: string;
}

const PredictaLogo: React.FC<PredictaLogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#1E293B"/>
        <circle cx="50" cy="50" r="45" fill="#10B981"/>
        <circle cx="50" cy="50" r="35" fill="#1E40AF"/>
        {/* Soccer Ball Pattern */}
        <polygon points="50,25 65,35 65,55 50,65 35,55 35,35" fill="white" stroke="#1E40AF" strokeWidth="2"/>
        <polygon points="50,25 35,35 25,28" fill="#F0F0F0" stroke="#1E40AF" strokeWidth="2"/>
        <polygon points="50,25 65,35 75,28" fill="#F0F0F0" stroke="#1E40AF" strokeWidth="2"/>
        <polygon points="65,35 65,55 78,50" fill="#F0F0F0" stroke="#1E40AF" strokeWidth="2"/>
        <polygon points="65,55 50,65 58,78" fill="#F0F0F0" stroke="#1E40AF" strokeWidth="2"/>
        <polygon points="50,65 35,55 42,78" fill="#F0F0F0" stroke="#1E40AF" strokeWidth="2"/>
        <polygon points="35,55 35,35 22,50" fill="#F0F0F0" stroke="#1E40AF" strokeWidth="2"/>
        {/* Paintbrush/Graph */}
        <path d="M30 70 Q 50 50, 70 60" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <circle cx="30" cy="70" r="5" fill="#F59E0B"/>
        <path d="M 68 55 L 78 45 Q 82 50, 75 60 Z" fill="#F59E0B"/>
      </svg>
      <div>
        <h1 className="text-2xl font-bold text-[#10B981] tracking-wider">PREDICTA</h1>
        <h2 className="text-2xl font-bold text-[#1E40AF]">Sports</h2>
      </div>
    </div>
  );
};

export default PredictaLogo;
