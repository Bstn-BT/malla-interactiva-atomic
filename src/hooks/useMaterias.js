import { useState, useEffect } from 'react';
import { DATA_MATERIAS } from '../data/materias';

export const useMaterias = () => {
  // Inicializamos el estado directamente con la data
  const [materias, setMaterias] = useState(DATA_MATERIAS);

  const completarMateria = (id) => {
    setMaterias(prevMaterias => {
      // 1. Encontramos la materia que se tocó
      const materiaTarget = prevMaterias.find(m => m.id === id);
      if (!materiaTarget) return prevMaterias;

      // Si está bloqueada, no hacemos nada (seguridad)
      if (materiaTarget.estado === 'bloqueado') return prevMaterias;

      // Determinamos la nueva acción: ¿Vamos a completar o a desmarcar?
      const esDesmarcar = materiaTarget.estado === 'completada';
      
      // Creamos una copia para mutar
      let nuevasMaterias = [...prevMaterias];

      if (esDesmarcar) {
        // --- LÓGICA DE DESMARCAR (Casco de bloqueo) ---
        
        // 1. La materia actual vuelve a disponible
        nuevasMaterias = nuevasMaterias.map(m => 
          m.id === id ? { ...m, estado: 'disponible' } : m
        );

        // 2. Función recursiva para bloquear descendientes
        const bloquearRecursivo = (idPadre, lista) => {
          // Buscamos todas las materias que tienen a idPadre como requisito
          const dependientes = lista.filter(m => m.req.includes(idPadre));
          
          if (dependientes.length === 0) return lista;

          let listaActualizada = [...lista];
          
          dependientes.forEach(dep => {
            // Si la dependiente no está bloqueada, la bloqueamos
            if (dep.estado !== 'bloqueado') {
              // Actualizamos la lista con esta materia bloqueada
              listaActualizada = listaActualizada.map(m => 
                m.id === dep.id ? { ...m, estado: 'bloqueado' } : m
              );
              // Y llamamos recursivamente para bloquear a los hijos de esta dependiente
              listaActualizada = bloquearRecursivo(dep.id, listaActualizada);
            }
          });
          
          return listaActualizada;
        };

        // Ejecutamos el bloqueo en cadena
        nuevasMaterias = bloquearRecursivo(id, nuevasMaterias);

      } else {
        // --- LÓGICA DE COMPLETAR ---
        
        // 1. Marcamos la actual como completada
        nuevasMaterias = nuevasMaterias.map(m => 
          m.id === id ? { ...m, estado: 'completada' } : m
        );

        // 2. Verificamos qué materias se pueden desbloquear ahora
        // Hacemos varias pasadas por si se desbloquean en cadena (aunque en tu malla suele ser 1 nivel)
        let huboCambios = true;
        while (huboCambios) {
          huboCambios = false;
          nuevasMaterias = nuevasMaterias.map(m => {
            if (m.estado === 'bloqueado') {
              // Verificamos si TODOS sus requisitos están completados
              const requisitosCumplidos = m.req.every(reqId => {
                const reqMat = nuevasMaterias.find(rm => rm.id === reqId);
                return reqMat && reqMat.estado === 'completada';
              });

              if (requisitosCumplidos) {
                huboCambios = true;
                return { ...m, estado: 'disponible' };
              }
            }
            return m;
          });
        }
      }

      return nuevasMaterias;
    });
  };

  return { materias, completarMateria };
};