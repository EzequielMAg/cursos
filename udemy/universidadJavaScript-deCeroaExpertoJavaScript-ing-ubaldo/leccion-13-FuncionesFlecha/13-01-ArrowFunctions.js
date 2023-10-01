/* 
*   VIDEO N° 113: FUNCIONES FLECHA/ARROW FUNCTIONS

*   VIDEO N° 114: MAS DE FN'S FLECHA
*/

// Recordar que por el concepto de hoisting, podemos llamar esta fn comun, antes de la declaracion
// JS ponea las declaraciones de las funciones antes de la llamada
miFuncion();

// UNA FUNCION COMUN
function miFuncion() {
    console.log("saludos desde mi funcion");
}


// UNA FUNCION ANONIMA 
const miFuncionAnonima = function () {
    console.log("Esta es una funcion anonima!");
}

// En las funciones anonimas no se aplica el concepto de hoisting
miFuncionAnonima();


// FUNCION FLECHA / ARROW FUNCTION / FUNCION LITERAL
// Con las fn's flecha, no usamos un nombre -> serian fn's anonimas
const miFuncionFlecha = () => console.log("Esta es una funcion flecha");

// En estas FN's tampoco aplica el concepto de hoisting
miFuncionFlecha();

console.log(typeof miFuncionAnonima);
console.log(typeof miFuncionFlecha);



// -----------------------------  VIDEO N° 114: MAS DE FN'S FLECHA  -----------------------------
// Sabemos que si la arrow function tiene una sola linea de codigo, no hace falta ponerle llaves ni return si es q retorna algo
// Pero si es mas de una linea de codigo, su cuerpo, entonces si, debemos abrir {} y si retorna algo, agregar el return, ya que 
// deja de ser implicito

// Una arrow function que retorna algo, en este caso, una cadena
/* const saludar = () => {
    return "Saludos desde funcion flecha"
};
 */

const saludar = () => "Saludos desde funcion flecha";
console.log(saludar());


// Regresando un objeto. Se pone entre parentesis, porq si no JS lo toma como si fuera el cuerpo de la FN
const regresaObjeto = () => ({nombre: "Ezequiel", apellido: "Mamani", edad: 25});


// FN flecha con parametros
//const fnFlechaConParametros = (mensaje) => console.log(mensaje);

//Si es solo un parametro, podemos omitir los parentesis
const fnFlechaConParametro = mensaje => console.log(mensaje);

fnFlechaConParametro("Hola fn con parametros!");


// FN flecha con varios parametros
const funcionFlechaConParametros = (op1, op2) => op1 + op2;
console.log(funcionFlechaConParametros(5, 2));