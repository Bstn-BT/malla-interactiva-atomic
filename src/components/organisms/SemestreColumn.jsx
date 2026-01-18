import React from 'react';
import { MateriaCard } from '../molecules/MateriaCard';

export const SemestreColumn = ({ numSem, materias, onMateriaClick }) => {
  return (
    <div className="min-w-[220px] bg-[rgba(0,0,0,0.85)] rounded-tr-[15px] rounded-bl-[15px] p-[15px] border-2 border-[#580000] shadow-[0_4px_15px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(139,0,0,0.15)] relative overflow-hidden flex flex-col gap-2">
      
      {/* Efecto de Vidriera Gótica (Background animado) */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_30%,rgba(139,0,0,0.08)_50%,transparent_70%)] animate-gothic-light pointer-events-none"></div>
      
      {/* MODIFICACIÓN: Texto blanco (text-white) y sin borde inferior */}
      <div className="text-white font-sans text-center mb-0 pb-0 relative z-10 text-[14px] tracking-[2px]">
        SEMESTRE {numSem}
      </div>
      
      <div className="flex flex-col gap-2 relative z-10">
        {materias.map(m => (
          <MateriaCard key={m.id} materia={m} onClick={onMateriaClick} />
        ))}
      </div>
    </div>
  );
};