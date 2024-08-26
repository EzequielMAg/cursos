// TEMPLATE STRINGS
// Sirve para concatenar strings junto con valores de variables, o resultados de operaciones, caracteres multilinea

// Las siguientes dos lines son exactamete iguales.
const saludo = ' Hola mundo! ';
const saludo2 = ` Hola mundo! `;
console.log(saludo);
console.log(saludo2);

const nombre = 'Ezequiel'
const apellido = 'Mamani'

// Las siguientes dos lines son exactamete iguales.
const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);
console.log(nombreCompleto2);

// Saltos de linea. En resumen, todo lo que esta dentro de los ${ } es codigo js. Lo que esta fuera un String. 
// Siempre usando back sticks
const otroEjemplo = `
${ nombre }
${ apellido }
${ 1 + 1 }
`;
console.log(otroEjemplo);

// Usando el resultado de una funcion
function getSaludo() {
    return "Hola mundo!";
}

console.log(`Este es un texto: ${ getSaludo() }`);


// Usando el resultado de una funcion
function getSaludo2(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto2: ${ getSaludo2() }`); // Retorna undefined, ya que no le pasamos el parametro a la funcion
console.log(`Este es un texto3: ${ getSaludo2(nombre) }`); 



