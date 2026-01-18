import React from 'react';
import { MallaLayout } from '../src/components/templates/MallaLayout';
import { SemestreColumn } from '../src/components/organisms/SemestreColumn';
import { VerticalBar } from '../src/components/atoms/VerticalBar';
import { MusicPlayer } from '../src/components/organisms/MusicPlayer';
import { useMaterias } from './hooks/UseMaterias';
import { TRACKS } from './data/tracks';

function App() {
  const { materias, completarMateria } = useMaterias();
  const semestres = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="bat-container relative min-h-screen">
      <MallaLayout musicPlayer={<MusicPlayer tracks={TRACKS} />}>
        {semestres.map(num => (
          <React.Fragment key={num}>
            
            {/* 1. BARRA LICENCIADO: Se inserta antes del Semestre 1 */}
            {num === 1 && (
              <div className="flex-shrink-0">
                <VerticalBar 
                  text="LICENCIADO(A) EN ANIMACIÓN DIGITAL" 
                  isTitle={true} 
                />
              </div>
            )}

            {/* 2. BARRA TÍTULO: Se inserta antes del Semestre 9 (Entre 8 y 9) */}
            {num === 9 && (
              <div className="flex-shrink-0">
                <VerticalBar 
                  text="TÍTULO PROFESIONAL: REALIZADOR(A) EN CINE-ANIMACIÓN" 
                  isTitle={true} 
                />
              </div>
            )}

            {/* Columna del Semestre */}
            <SemestreColumn 
              numSem={num} 
              materias={materias.filter(m => m.sem === num)}
              onMateriaClick={completarMateria}
            />
            
          </React.Fragment>
        ))}
      </MallaLayout>
    </div>
  );
}

export default App;