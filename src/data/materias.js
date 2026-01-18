// src/data/materias.js
export const DATA_MATERIAS = [
  // SEMESTRE 1
  { id: 1, nombre: "Storyboard: fundamentos", sem: 1, area: "disciplinar", req: [], estado: "disponible" },
  { id: 2, nombre: "Principios de animación I", sem: 1, area: "disciplinar", req: [], estado: "disponible" },
  { id: 3, nombre: "Arte y dibujo I", sem: 1, area: "basica", req: [], estado: "disponible" },
  { id: 4, nombre: "Modelado 3D: superficies I", sem: 1, area: "basica", req: [], estado: "disponible" },
  { id: 5, nombre: "Storytelling", sem: 1, area: "basica", req: [], estado: "disponible" },

  // SEMESTRE 2
  { id: 6, nombre: "Animatic: construcción narrativa", sem: 2, area: "disciplinar", req: [1], estado: "bloqueado" },
  { id: 7, nombre: "Principios de animación II", sem: 2, area: "disciplinar", req: [2], estado: "bloqueado" },
  { id: 8, nombre: "Arte y dibujo II", sem: 2, area: "basica", req: [3], estado: "bloqueado" },
  { id: 9, nombre: "Modelado 3D: superficies II", sem: 2, area: "basica", req: [4], estado: "bloqueado" },
  { id: 10, nombre: "Historia: animación y videojuegos", sem: 2, area: "basica", req: [5], estado: "bloqueado" },

  // SEMESTRE 3
  { id: 11, nombre: "Taller de proyecto I", sem: 3, area: "disciplinar", req: [6, 7], estado: "bloqueado" },
  { id: 12, nombre: "Mecánica del movimiento I", sem: 3, area: "disciplinar", req: [7], estado: "bloqueado" },
  { id: 13, nombre: "Desarrollo visual I", sem: 3, area: "basica", req: [8], estado: "bloqueado" },
  { id: 14, nombre: "Modelado 3D: orgánico I", sem: 3, area: "basica", req: [9], estado: "bloqueado" },
  { id: 15, nombre: "Electivo 1", sem: 3, area: "electiva", req: [], estado: "disponible" },

  // SEMESTRE 4
  { id: 16, nombre: "Taller de proyecto II", sem: 4, area: "disciplinar", req: [11], estado: "bloqueado" },
  { id: 17, nombre: "Mecánica del movimiento II", sem: 4, area: "disciplinar", req: [12], estado: "bloqueado" },
  { id: 18, nombre: "Desarrollo visual II", sem: 4, area: "basica", req: [13], estado: "bloqueado" },
  { id: 19, nombre: "Modelado 3D: orgánico II", sem: 4, area: "basica", req: [14], estado: "bloqueado" },
  { id: 20, nombre: "Electivo 2", sem: 4, area: "electiva", req: [], estado: "disponible" },

  // SEMESTRE 5
  { id: 21, nombre: "Cortometraje I: preproducción", sem: 5, area: "disciplinar", req: [16, 18], estado: "bloqueado" },
  { id: 22, nombre: "Acting I", sem: 5, area: "disciplinar", req: [17], estado: "bloqueado" },
  { id: 23, nombre: "Cinematic 3D I", sem: 5, area: "disciplinar", req: [19], estado: "bloqueado" },
  { id: 24, nombre: "Electivo 3", sem: 5, area: "electiva", req: [], estado: "disponible" },

  // SEMESTRE 6
  { id: 25, nombre: "Cortometraje II: producción", sem: 6, area: "disciplinar", req: [21], estado: "bloqueado" },
  { id: 26, nombre: "Acting II", sem: 6, area: "disciplinar", req: [22], estado: "bloqueado" },
  { id: 27, nombre: "Cinematic 3D II", sem: 6, area: "disciplinar", req: [23], estado: "bloqueado" },

  // SEMESTRE 7
  { id: 28, nombre: "Optativo de profundización I", sem: 7, area: "disciplinar", req: [25], estado: "bloqueado" },
  { id: 29, nombre: "Investigación para creación", sem: 7, area: "disciplinar", req: [25], estado: "bloqueado" },
  { id: 30, nombre: "Electivo 4", sem: 7, area: "electiva", req: [], estado: "disponible" },

  // SEMESTRE 8
  { id: 31, nombre: "Optativo de profundización II", sem: 8, area: "disciplinar", req: [28], estado: "bloqueado" },
  { id: 32, nombre: "Seminario de titulación I", sem: 8, area: "disciplinar", req: [29], estado: "bloqueado" },

  // SEMESTRE 9
  { id: 33, nombre: "Práctica profesional", sem: 9, area: "disciplinar", req: [25], estado: "bloqueado" },
  { id: 34, nombre: "Seminario de titulación II", sem: 9, area: "disciplinar", req: [32], estado: "bloqueado" }
];