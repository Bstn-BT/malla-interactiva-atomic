import React from 'react';

export const SpiralIcon = ({ isCompletada = false }) => {
  return (
    <img 
      src="https://64.media.tumblr.com/d563e0636285b3919ed8b477d9bbdcac/9a5e59d4a20102aa-6d/s75x75_c1/a514a5c93521064070370e2d5e814740c469827f.gifv" 
      alt="spiral"
      className={`w-5 h-5 flex-shrink-0 transition-all
        ${isCompletada 
          ? 'animate-spiral-complete' 
          : 'grayscale-[1] brightness-[1.3] contrast-[1.2] saturate-[0.8] opacity-90'}
      `}
    />
  );
};