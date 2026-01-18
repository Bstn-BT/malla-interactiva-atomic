import React from 'react';

export const VerticalBar = ({ text, isTitle = false }) => {
  return (
    <div 
      className={`

        /* Orientación Vertical */
        [writing-mode:vertical-rl] rotate-180 
        flex items-center justify-center
        
        /* Tamaño y Forma */
        h-140 max-h-[90vh] px-3 py-5 rounded-lg
        
        /* Estilo de Texto */
        text-white font-sans font-bold text-center relative z-100 text-[14px] tracking-[2px]
          shadow-[0_2px_10px_rgba(0,0,0,0.5)]
        
        /* Color */
        ${isTitle ? 'bg-[#282729]' : 'bg-[#333]'}
      `}
    >
      {text}
    </div>
  );
};