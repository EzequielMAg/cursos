//* FUNCION TRADICIONAL
function saludar(nombre) {
  console.log('Hola ' + nombre);

  return 10;

  // Esto nunca se va a ejecutar:
  console.log('Soy un codigo que esta despues del return');
}

// LLAMADA DE LA FUNCION
const retornoDeSaludar = saludar('Ezequiel');
console.log('retornoDeSaludar:', retornoDeSaludar);

//* FUNCION ANONIMA
const saludar2 = function (nombre) {
  console.log('Hola ' + nombre);
}

saludar2('Ezequiel');

//* ARROW FUNCTION - FUNCION FLECHA
const saludarFlecha = () => {
  console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
  console.log('Hola ' + nombre);
}

saludarFlecha();
saludarFlecha2('Ezequiel');


function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2));

/* const sumar2 = (a, b) => {
  return a+b;
} */

// Se puede simplificar la funcion anterior de la sig forma:
const sumar2 = (a, b) => a + b;

console.log(sumar2(3, 4));

function getAlatorio() {
  return Math.random();
}

console.log(getAlatorio());

const getAleatorioFlecha = () => Math.random();
console.log(getAleatorioFlecha());
