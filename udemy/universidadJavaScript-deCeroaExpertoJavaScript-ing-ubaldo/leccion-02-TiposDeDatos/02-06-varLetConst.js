/*  
*   VIDEO N°16: uso basico de VAR, LET y CONST
*/

// Declarar variables con la palabra reservarda VAR es una practica que ya NO SE RECOMIENDA
// Para ello estan las palabras reservadas LET para declarar una variable, y CONST para declarar 
// una variable constante, osea que ya no se podra asignar un nuevo valor.

// Aca no estamos usando ni VAR, ni LET ni CONST. Esto es posible en JS.
// Se llaman variables literales. En este caso es una literal de tipo string
// Aunque esto NO ES UNA BUENA PRACTICA
nombre = "Juan";
console.log(nombre);
console.log(typeof nombre);

let nombre2 = ""
console.log(nombre2);
console.log(typeof nombre2);

// Podemos inicializar la variable en una linea, y mas adelante asignarle el valor en otra linea
nombre = "Adrian";

const valor = 10;
valor = "nuevoValor";   
//No es posible porque es una variable constante.