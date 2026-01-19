import React from 'react';

// isPaused: la materia está bloqueada
// isCompletada: la materia ya fue aprobada
export const SpiralIcon = ({ isPaused = false, isCompletada = false }) => {
  return (
    <img 
      /* CAMBIO CLAVE: Si está pausado usa la imagen estática, si no, el GIF */
      src={isPaused ? "/gif/spiral-icon.png" : "/gif/spiral.webp"} 
      alt="spiral"
      className={`w-5 h-5 shrink-0 transition-all duration-500
        ${isCompletada 
          ? 'animate-spiral-complete' 
          : isPaused
            ? 'grayscale brightness-[0.5] opacity-30' 
            : 'grayscale-[1] brightness-[1.3] contrast-[1.2] saturate-[0.8] opacity-90'
        }
      `}
      style={{ 
        // Filtro extra de color para el estado bloqueado
        filter: isPaused ? 'sepia(1) saturate(5) hue-rotate(-50deg) brightness(0.4)' : ''
      }}
    />
  );
};