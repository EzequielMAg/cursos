/* 
*   VIDEO N° 57: Funciones como objetos
*/

// Sabemos que una funcion, en JS, es de tipo FUNCTION
// Pero tambien podemos representarla como un objeto, y estos sabemos que pueden tener prop's y metodos

function miFuncion(a, b) {
    // ARGUMENTS solo la podemos usar dentro de la funcion
    console.log(arguments);
    console.log(arguments.length);

    return a + b;
}

console.log(typeof miFuncion);

let resultado = miFuncion(1, 3);
console.log(resultado);

// transforma la FN en texto
let miFuncionTexto = miFuncion.toString(); 
console.log(miFuncionTexto);

// Lo que nos tiene que quedar de esta clase es:
// que las funciones, se pueden describir como objetos y tienen propiedades y metodos