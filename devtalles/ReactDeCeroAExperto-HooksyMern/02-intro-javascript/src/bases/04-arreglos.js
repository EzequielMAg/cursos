// Arreglos en JS
// Sabemos que es una coleccion de informacion que se encuentra dentro de una misma variable

const arreglo = new Array(); //Esta sintaxis es poco comun, pero sepamos q existe
console.log(arreglo);

// Se puede usar mas para crearla con un tamaño definido al comenzar, aunque no significa que es estatico.
// Igualmente el arreglo puede seguir expandiendose en tamaño.
const arreglo2 = new Array( 100 ); 
arreglo2.push(1);
console.log(arreglo2);

// Asi es como normalmente declarariamos un arreglo:
const arreglo3 = [];
arreglo3.push(1);
console.log(arreglo3);

arreglo3.push(2);
arreglo3.push(3);
arreglo3.push(4);
console.log(arreglo3);

// NO ES RECOMENDABLE USAR EL PUSH, ya que modifica el objeto principal. SI, los arreglos tambien son OBJETOS en js
// Mejor lo haremos usando el operador spread, para agregar elementos..

// Otra forma de inicializar un arreglo. (anteriormente fue inicializado vacio)
const arreglo4 = [10,20,30,40];
console.log("Arreglo4: [" + arreglo4 + "]");
console.log(arreglo4);


// EJERCICIO: clonacion de un arreglo y agregacion de un valor
let arreglo5 = [...arreglo4, 50];
console.log("Arreglo4: ");
console.log(arreglo4);

console.log("Arreglo5: ");
console.log(arreglo5);

// EJERCICIO 2: uso del metodo .map(). Este esta contenido en el prototype del arreglo.
// Algo muy importante del .map() es que crea un nuevo arreglo y lo retorna, entonces NO modifica el original. 
const arreglo6 = arreglo5.map( function(numero) 
{ 
    return numero * 2 
});

console.log( arreglo6 );

//* ESTUDIANDO UN POCO MAS CON CHATGPT: Las distintas formas de declarar una arreglo
//* 1. Usando literales de arreglo (visto en clase):
//La forma más simple y directa de crear un arreglo es usando corchetes [].
const numeros = [1, 2, 3, 4, 5];
const frutas = ["manzana", "naranja", "banana"];
const mixto = [1, "dos", true, { nombre: "Juan" }, [5, 6]];

//* 2. Usando la función Array (visto en clase):
// Puedes usar el constructor Array para crear un arreglo, aunque esta forma es menos común.
const numeros2 = new Array(1, 2, 3, 4, 5);
const frutas2 = new Array("manzana", "naranja", "banana");

// También puedes crear un arreglo vacío o con un tamaño específico, aunque los elementos estarán undefined si solo especificas la longitud:
const vacio = new Array(); // Arreglo vacío
const tamanoEspecifico = new Array(5); // Arreglo con 5 posiciones, todas `undefined`

//* 3. Arreglos vacíos y llenado posterior (visto en clase):
// Puedes crear un arreglo vacío y luego agregar elementos a él:

const numeros3 = [];
numeros.push(1);
numeros.push(2);
numeros.push(3);

//* 4. Usando el método Array.of:
//Este método crea un nuevo arreglo con los elementos pasados como argumentos.
const numeros4 = Array.of(1, 2, 3, 4, 5);
const frutas3 = Array.of("manzana", "naranja", "banana");

//* 5. Usando Array.from:
// Este método crea un nuevo arreglo a partir de un objeto iterable (como un NodeList, Set, o incluso un string).
const texto = "hola";
const caracteres = Array.from(texto); // ["h", "o", "l", "a"]

const conjunto = new Set([1, 2, 3, 3]);
const arreglo7 = Array.from(conjunto); // [1, 2, 3]

// Ejemplo práctico de un arreglo de objetos:
const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Pedro", edad: 40 }
];
//Esto te permite almacenar y manipular colecciones de datos en tus programas de JavaScript de manera eficiente.