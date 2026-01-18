import React from 'react';
import { BatRain } from '../atoms/BatRain';
// ELIMINAMOS el import de VerticalBar de aquí

export const MallaLayout = ({ children, musicPlayer }) => {
  return (
    <div className="bat-container p-5 pt-11 text-center relative min-h-screen">
      <BatRain />
      
      <header className="mb-[30px] relative inline-block px-[30px] py-0 border-b-[3px] border-blood-850 rounded-[10px]
        bg-gradient-to-r from-transparent via-[rgba(139,0,0,0.2)] via-50% to-transparent">
        
        <span className="absolute left-[-15px] top-1/2 -translate-y-1/2 text-[1.8rem] animate-blood-drip opacity-90 delay-[0.5s]">🩸</span>
        <h1 className="text-[2.5rem] font-bold tracking-[3px] text-white font-cinzel drop-shadow-[0_0_15px_rgba(139,0,0,0.7)]">
          ANIMACIÓN DIGITAL
        </h1>
        <span className="absolute right-[-15px] top-1/2 -translate-y-1/2 text-[1.8rem] animate-blood-drip opacity-90">🩸</span>
      </header>
      
      {/* MAIN LIMPIO:
         Ya no incluimos <VerticalBar> aquí.
         Solo renderizamos {children}, que ya trae las barras desde App.jsx
      */}
      <main className="flex gap-2 overflow-x-auto p-5 custom-scrollbar items-stretch text-left">
        {children}
      </main>

      {musicPlayer}
    </div>
  );
};