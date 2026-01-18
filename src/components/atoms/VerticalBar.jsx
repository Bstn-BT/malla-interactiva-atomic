import React from 'react';

export const VerticalBar = ({ text, isTitle = false }) => {
  return (
    <div 
      className={`
        /* Orientación Vertical */
        [writing-mode:vertical-rl] rotate-180 
        flex items-center justify-center
        
        /* CORRECCIÓN: min-h-full permite que flexbox controle la altura */
        min-h-full px-3 py-5 rounded-lg
        
        /* Estética */
        text-white font-bold text-[12px] tracking-[1.5px] whitespace-nowrap z-20
        font-cinzel shadow-[0_2px_10px_rgba(0,0,0,0.5)]
        
        /* Color */
        ${isTitle ? 'bg-[#282729]' : 'bg-[#333]'}
      `}
    >
      {text}
    </div>
  );
};