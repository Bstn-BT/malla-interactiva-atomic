import React from 'react';

export const Horario = () => {
  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const bloques = [
    '1', '2', '3',
    '4', '5'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 animate-blood-drop">
      <div className="bg-dark-950/90 border-2 border-blood-800 rounded-xl p-6 shadow-[0_0_30px_rgba(139,0,0,0.3)]">
        <h2 className="text-3xl font-cinzel font-bold text-blood-700 mb-8 text-center border-b border-blood-900 pb-4">
          Horario Semestral
        </h2>

        <div className="grid grid-cols-6 gap-2">
          {/* Esquina vacía */}
          <div className="p-2"></div>

          {/* Encabezados */}
          {dias.map(dia => (
            <div key={dia} className="p-2 text-center bg-blood-900/40 border border-blood-800 rounded text-zinc-200 font-cinzel font-bold tracking-wider">
              {dia}
            </div>
          ))}

          {/* Filas de bloques */}
          {bloques.map((bloque, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center p-2 text-xs text-zinc-400 font-mono border-r border-blood-900/50">
                {bloque}
              </div>
              {dias.map((dia) => (
                <div 
                  key={`${dia}-${index}`} 
                  className="min-h-[80px] p-2 bg-dark-900/50 border border-blood-900/30 rounded hover:bg-blood-900/10 transition-colors"
                >
                  {/* Materias */}
                  {dia === 'Martes' && index === 0 && (
                    <div className="bg-blood-800/70 text-zinc-100 p-2 rounded shadow-md text-sm font-semibold text-center">
                      Modelado 3D: Superficies I
                    </div>
                  )}
                  {dia === 'Martes' && index === 1 && (
                    <div className="bg-blood-800/70 text-zinc-100 p-2 rounded shadow-md text-sm font-semibold text-center">
                      Modelado 3D: Superficies I
                    </div>
                  )}
                  {dia === 'Miércoles' && index === 0 && (
                    <div className="bg-blood-800/70 text-zinc-100 p-2 rounded shadow-md text-sm font-semibold">
                      Arte y Dibujo I
                    </div>
                  )}
                  {dia === 'Viernes' && index === 4 && (
                    <div className="bg-blood-800/70 text-zinc-100 p-2 rounded shadow-md text-sm font-semibold"> 
                      Historia del Cine de Animación
                    </div>
                  )}

                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};