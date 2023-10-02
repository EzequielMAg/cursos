/* 
*   VIDEO N° 53: FUNCIONES
*/

miFuncion(3, 124); //HOISTING

// Una funcion es un codigo reutilizable que realiza cierta tarea, y la podemos llamar las veces que queramos
// Conjunto de instrucciones para realizar una tarea especifica, puede tener parametros o no, y puede retornar un valor o no.

//* DECLARACION/DEFINICION DE LA FUNCION
//Tiene dos parametros y no retorna nada, mas bien, dentro de la funcion imprime un msje
function miFuncion (a, b) {
    console.log("Suma:" + (a + b));
}

//* LLAMADA DE LA FUNCION
miFuncion(3, 4); //Se envian 2 argumentos
/* 
* HOISTING: a una funcion la podemos llamar despues de la declaracion, o antes de la declaracion.
*           o tambien se podria decir, que podemos declararla donde queramos en nuestro programa, 
*           y la vamos a poder llamar, antes de definirla, o despues de definirla, ya que el concepto
*           de hoisting lo que va a hacer, es mover la declaracion de la funcion, al inicio del programa  
*           para que la podamos utilizar en cualquier parte del archivo/programa.
*/       

// -------------------------------------------------------------------------------------------------------------
/* 
*   VIDEO N° 54: Palabra RETURN en funciones
*/
function sumar (a, b) {
    return a + b;
}

let resultado = sumar(5, 7)
console.log(resultado );
