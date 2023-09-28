// -----------------------------------------------------------------------------------
/* 
*   VIDEO N° 14: Concatenacion de cadenas 

    CTRL + A -> selecciona TODO el codigo del archivo actual
*/

var nombre = "Ezequiel";
var apellido = "Mamani";

var nombreCompleto = nombre + apellido; //Concatenacion de cadenas

console.log(nombre);
console.log(apellido);
console.log(nombreCompleto);

nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var nombreCompleto3 = "Juan " + "Perez";
console.log(nombreCompleto3);


var x = nombre + 219;
console.log(x);
// JS evalua las expresiones de izq a derecha. Asi que al encontrar primero un string
// trata al valor 219 como un string tambien, y realiza la concatenacion de cadenas

// Aca pasa lo mismo
x = nombre + 2 + 4;
console.log(x); 

// Pordemos usar parentesis para que tome prioridad la suma
x = nombre + (2 + 4);
console.log(x); 


x = 2 + 4 + nombre;
console.log(x); 
// Aca primero encuentra un valor number, y luego otros, asi que los suma, luego detecta el string, y los concatena
// Esto se conoce como CONTEXTO STRING. Si primero encuentra una cadena, toma todo como una cadena, a menos que
// lo pongamos entres parentesis.