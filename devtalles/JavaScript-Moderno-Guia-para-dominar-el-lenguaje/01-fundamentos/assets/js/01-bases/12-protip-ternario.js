const elMayor = (a, b) => (a > b) ? a : b;
console.log( elMayor(10, 15) );

const tieneMembresia = ( miembro ) => (miembro) ? 'U$D 2 ' : 'U$D 10';
console.log( tieneMembresia(true) );

const amigo = false;
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  (() => 'Nick Fury')(), //! FN ANONIMA AUTO-INVOCADA
];

console.log( amigosArr );

// ------------------------
const nota = 65; // A+, A, B+, B...

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado});
