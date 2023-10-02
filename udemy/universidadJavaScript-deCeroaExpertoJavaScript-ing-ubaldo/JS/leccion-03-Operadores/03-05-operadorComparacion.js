/*  NOTAS:

    omiti la realizacion de varios videos de esta seccion de operadores y otros del anterior
    exactamente omiti los videos desde el 16 hasta el 21 inclusive. Los mire rapido pero no realice 
    la replicacion de la clase...

    La clase anterior me parecio interesante: "Precedencia de operadores" donde se muestra una tabla 
    con la jerarquia de cada operador, ordenados por niveles
*/

/* 
*   VIDEO 21: Precedencia de operadores
*/

let a = 3, b = 2, c = 3, d = '3';

// OPERADOR DE COMPARACION -> == //Se revisa el valor sin importa el tipo
let z = a == b;
console.log(z);

z = a == c;
console.log(z);

// En este caso, JS transforma el string d, a tipo number para realizar la comparacion
z = a == d;
console.log(z);

// OPERADOR DE COMPARACION ESTRICTA -> ===  //Se revisa el valor y el tipo
z = a === d;
console.log(z);
//Revisa primero los tipos, y ya como son distintos, no hace falta revisar los valores, -> retorna false


/*  EN RESUMEN:
    == NO COMPARA TIPOS, de dato obvio
    === SI COMPARA TIPOS

    En el siguiente video se toca el tema del OPERADOR DISTINTO A
    !=      NO COMPARA TIPOS
    !==     SI COMPARA TIPOS
*/