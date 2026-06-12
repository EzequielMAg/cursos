//* PASAJE POR VALOR
let a = 10;
let b = a;

console.log({a, b});
console.log(typeof a);
console.log(typeof b);

a = 30;
console.log({a, b});

//* PASAJE POR REFERENCIA
let juan = { nombre: 'Juan' }
let ana  = juan;

console.log({juan, ana});

juan.nombre = 'Ezequiel';
console.log({juan, ana});

ana.nombre = 'Ana';
console.log({juan, ana});

// ----------------------------------
const cambiarNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
}

let ezequiel = {nombre: 'Ezequiel'};
let tony = cambiarNombre(ezequiel);
console.log({ezequiel, tony});

// ----------------------------------
let ana2 = { juan };
juan.nombre = 'Mario';
console.log({juan, ana2});

// ----------------------------------
const cambiarNombre2 = (persona) => {
  let otraReferencia = {...persona};
  otraReferencia.nombre = 'Jerry';
  return otraReferencia;
}

let persona1 = { nombre: 'Tom'};
let persona2 = cambiarNombre2(persona1);
console.log({persona1, persona2});

// ----------------------------------
const cambiarNombre3 = ({...persona}) => {
  persona.nombre = 'Hulk';
  return persona;
}

let persona3 = { nombre: 'Iron Man'};
let persona4 = cambiarNombre3(persona3);
console.log({persona3, persona4});

// ----------------------------------
const frutas = ['Manzana', 'Pera','Piña'];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});

const otrasFrutas2 = [...otrasFrutas];
otrasFrutas2.push('Banana');
console.table({frutas, otrasFrutas, otrasFrutas2});

// ----------------------------------
// Otra forma de copiar un arreglo con una nueva referencia 
// Y de medir el tiempo entre dos puntos de la aplicacion
console.time('spread');
const otrasFrutas3 = [...otrasFrutas2]; // mismo que el anterior
console.timeEnd('spread');

otrasFrutas3.push('Sandia')

console.time('slice');
const otrasFrutas4 = otrasFrutas2.slice(); // La otra forma. Slice sin pasarle ningun parametro
console.timeEnd('slice');

otrasFrutas4.push('Uva')

console.table({otrasFrutas2, otrasFrutas3, otrasFrutas4});