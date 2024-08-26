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
// Mejor lo haremos usando el operacion spread, para agregar elementos..



// Otra forma de inicializar un objeto. (anteriormente fue inicializado vacio)
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
