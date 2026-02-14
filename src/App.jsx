import React, { useState } from 'react';
import { MallaLayout } from '../src/components/templates/MallaLayout';
import { SemestreColumn } from '../src/components/organisms/SemestreColumn';
import { VerticalBar } from '../src/components/atoms/VerticalBar';
import { MusicPlayer } from '../src/components/organisms/MusicPlayer';
import { useMaterias } from './hooks/useMaterias'; // Asegúrate que la ruta sea correcta (UseMaterias vs useMaterias)
import { TRACKS } from './data/tracks';
import { Horario } from './components/organisms/Horario';

function App() {
  const { materias, completarMateria } = useMaterias();
  const [mostrarHorario, setMostrarHorario] = useState(false);
  const semestres = Array.from({ length: 9 }, (_, i) => i + 1);

  const renderMalla = () => (
    <>
      {semestres.map(num => (
        <React.Fragment key={num}>
          {num === 1 && (
            <div className="shrink-0">
              <VerticalBar text="LICENCIADO(A) EN ANIMACIÓN DIGITAL" isTitle={true} />
            </div>
          )}
          {num === 9 && (
            <div className="shrink-0">
              <VerticalBar text="TÍTULO PROFESIONAL: REALIZADOR(A) EN CINE-ANIMACIÓN" isTitle={true} />
            </div>
          )}
          <SemestreColumn 
            numSem={num} 
            materias={materias.filter(m => m.sem === num)}
            onMateriaClick={completarMateria}
          />
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="bat-container relative min-h-screen">
      <MallaLayout 
        musicPlayer={<MusicPlayer tracks={TRACKS} />}
        onToggleView={() => setMostrarHorario(!mostrarHorario)}
        isHorario={mostrarHorario}
      >
        {mostrarHorario ? <Horario /> : renderMalla()}
      </MallaLayout>
    </div>
  );
}

export default App;