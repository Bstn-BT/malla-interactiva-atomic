import React from 'react';
import { BatRain } from '../atoms/BatRain';

export const MallaLayout = ({ children, musicPlayer }) => {
  return (
    <div className="bat-container p-5 pt-11 text-center relative min-h-screen">
      <BatRain />

      {/* FONDO CALAVERA LLAMEANTE */}
      <div className="fixed left-5 top-5 -translate-y-1/2 z-0 pointer-events-none opacity-60 filter contrast-125">
         <img 
             src="/gif/calavera.webp" 
             alt="Skull Background" 
             className="w-auto h-100 object-contain"
         />
      </div>
      
      <header className="mb-7.5 relative inline-block px-7.5 py-0 rounded-[10px]
        bg-linear-to-r from-transparent via-[rgba(139,0,0,0.2)] via-50% to-transparent overflow-hidden">
        
        {/* Efecto de sangre animada en el header */}
        <div 
          style={{
            backgroundImage: 'url("/gif/borde-sangre.webp")',
            backgroundPosition: 'center top',
            backgroundRepeat: 'repeat-x',
          }}
          className="absolute bottom-11 left-0 w-full h-6 z-10 pointer-events-none opacity-90"
        />
        {/* Efecto de sangre animada en el header (parte superior, invertida) */}
        <div 
          style={{
            backgroundImage: 'url("/gif/borde-sangre.webp")',
            backgroundPosition: 'center top',
            backgroundRepeat: 'repeat-x',
          }}
          className="absolute top-11 left-0 w-full h-6 z-10 pointer-events-none opacity-90 rotate-180"
        />

        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-[2.5rem] font-bold tracking-[3px] text-shadow-zinc-400 font-cinzel relative z-20">
          ANIMACIÓN DIGITAL
        </h1>
        
      </header>
      
      <main className="flex gap-2 overflow-x-auto p-5 custom-scrollbar items-stretch text-left">
        {children}
      </main>

      {musicPlayer}
    </div>
  );
};