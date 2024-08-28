//* DESESTRUCTURACION DE ARREGLOS 

const personajes = ['Goku', 'Vegeta', 'Trunks', 'Gohan', 'Piccolo'];

// Accediendo directamente, sin usar la desestructuracion
console.log( personajes[0]);
console.log( personajes[1]);
console.log( personajes[2] );
console.log("-------------");

//* Usando desestructuracion
// Obteniendo al primer elemento
const [ e1 ] = personajes;
console.log( e1 );

// Accedo a los primeros 3 elementos
const [ p1, p2, p3] = personajes;
console.log( p1, p2, p3 );

//* Si quiero un elemento especifico, hago el uso de comas:
// Por ejemplo aqui estoy accediendo al 2do elemento ignorando el primero
const [ , e2] = personajes;
console.log(e2);

// Accedo y obtengo al 3er elemento unicamente
const [ , , e3] = personajes;
console.log(e3);

//* EJERCICIO  -----------------------------------------------
const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log("letras: " + letras, "numeros: " + numeros);

//* TAREA  -----------------------------------------------
// 1. El primer valor del ar se llamara nombre
// 2. el 2do valor se llamara setNombre
const usState = ( valor ) => {
    // Un arreglo con un valor en la posicion 0, y una funcion en la pos1
    return [ valor, () => { console.log('Hola mundo!'); }];
}

const arr = usState('Goku');
console.log(arr);

// Llamando a tal funcion retornada en el arreglo:
arr[1]();

// Resolviendo la tarea
const [nombre, setNombre] = usState('Ezequiel');
console.log( nombre );
setNombre();

//* Mas ejemplos en: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Uno interesante es el siguiente:
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

// me refiere a esta parte en la que captura todos los valores restantes del arreglo en la variable "rest"
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
