import React from 'react';
import { BatRain } from '../atoms/BatRain';

export const MallaLayout = ({ children, musicPlayer, onToggleView, isHorario }) => {
  return (
    <div className="bat-container p-5 pt-11 text-center relative min-h-screen">
      <BatRain />

      {/* FONDO CALAVERA LLAMEANTE (Clickeable, permite alternar entre horario y malla interactiva) */}
      <div 
         onClick={onToggleView}
         className="fixed left-5 top-5 -translate-y-1/2 z-0 opacity-60 filter contrast-125 select-none cursor-pointer hover:scale-105 transition-transform"
      >
         <img 
             src="/gif/calavera.webp" 
             alt="Skull Background" 
             className="w-auto h-100 object-contain"
         />
      </div>
      
      {/* ENCABEZADO CON BORDES ANIMADOS */}
      <header className="mb-7.5 relative inline-block px-7.5 py-0 rounded-[10px]
        bg-linear-to-r from-transparent via-[rgba(139,0,0,0.2)] via-50% to-transparent overflow-hidden">
        
        <div 
          style={{
            backgroundImage: 'url("/gif/borde-sangre.webp")',
            backgroundPosition: 'center top',
            backgroundRepeat: 'repeat-x',
          }}
          className="absolute bottom-11 left-0 w-full h-6 z-10 pointer-events-none opacity-90"
        />
        <div 
          style={{
            backgroundImage: 'url("/gif/borde-sangre.webp")',
            backgroundPosition: 'center top',
            backgroundRepeat: 'repeat-x',
          }}
          className="absolute top-11 left-0 w-full h-6 z-10 pointer-events-none opacity-90 rotate-180"
        />

        {/* Título que alterna entre horario y animacion digital */}
        <h1 className="text-[2.5rem] font-bold tracking-[3px] text-shadow-zinc-400 font-cinzel relative z-20">
          {isHorario ? "HORARIO" : "ANIMACIÓN DIGITAL"}
        </h1>
        
      </header>
      
      {/* Ajuste de alineación para el horario */}
      <main className={`flex gap-2 overflow-x-auto p-5 custom-scrollbar items-stretch text-left ${isHorario ? 'justify-center' : ''}`}>
        {children}
      </main>

      {musicPlayer}
    </div>
  );
};