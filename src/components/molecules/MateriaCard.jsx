import React from 'react';
import { SpiralIcon } from '../atoms/SpiralIcon';
import { StatusIcon } from '../atoms/StatusIcon';

export const MateriaCard = ({ materia, onClick }) => {
  const isBloqueado = materia.estado === 'bloqueado';
  const isCompletada = materia.estado === 'completada';
  const isDisponible = materia.estado === 'disponible';

  // Lógica de estilos EXACTA a tu CSS original
  let cardClasses = "relative p-[15px] my-[10px] rounded-[8px] border-l-[5px] transition-all duration-300 flex items-center gap-[10px] z-10 ";
  
  if (isBloqueado) {
    cardClasses += "opacity-50 grayscale cursor-not-allowed bg-card-bg border-l-[#666] ";
  } else if (isCompletada) {
    cardClasses += "bg-card-completada-bg border-l-card-completada-border shadow-[0_0_10px_rgba(0,100,0,0.2)] hover:shadow-[0_0_15px_rgba(0,100,0,0.4)] cursor-pointer hover:scale-105 ";
  } else if (isDisponible) {
    cardClasses += "bg-card-disponible-bg border-l-card-disponible-border shadow-[0_0_10px_rgba(139,0,0,0.3)] hover:shadow-[0_0_15px_rgba(139,0,0,0.5)] cursor-pointer hover:scale-105 ";
    
    switch (materia.area) {
      case 'disciplinar': cardClasses += "!border-l-border-disciplinar "; break;
      case 'basica': cardClasses += "!border-l-border-basica "; break;
      case 'electiva': cardClasses += "!border-l-border-electiva "; break;
    }
    
    cardClasses += "after:content-[''] after:absolute after:bottom-[-2px] after:right-[10px] after:w-[8px] after:h-[8px] after:bg-[radial-gradient(circle,#8B0000_30%,transparent_70%)] after:rounded-full after:animate-blood-drop ";
  }

  return (
    <div 
      onClick={() => !isBloqueado && onClick(materia.id)}
      className={cardClasses}
    >
      <div className="flex-shrink-0">
        {/* APLICACIÓN DEL CAMBIO: 
            Pasamos isPaused={isBloqueado} para que se detenga si está bloqueada.
            Mantenemos isCompletada para tu animación de finalización. 
        */}
        <SpiralIcon 
          isPaused={isBloqueado} 
          isCompletada={isCompletada} 
        />
      </div>
      
      <span className="text-[14px] font-medium leading-tight text-left flex-1 text-[#d0d0d0]">
        {materia.nombre}
      </span>
      
      <div className="ml-auto flex-shrink-0">
        <StatusIcon estado={materia.estado} />
      </div>
    </div>
  );
};