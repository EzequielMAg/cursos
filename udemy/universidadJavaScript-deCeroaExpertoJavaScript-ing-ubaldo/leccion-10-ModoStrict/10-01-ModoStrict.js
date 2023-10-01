/* 
*   VIDEO N° 106: MODO ESTRICTO

    Como habiamos visto, en JS podemos usar una variable sin haberla declarado con var, let o const.. 
    y no nos va a tirar ningun error, sin embargo, existe el modo estiricto para evitar tales practicas
    Ya se considera una mala practica, sobre todo cuando trabajamos en proyectos grandes.

    Chequear en el navegador tambien por las dudas, porque me di cuenta que quokka a veces no te tira el error
    Y como que te quedas pensando: ¿Anda el modo estricto o no????? jajaj
    El inspeccionador del navegador me tiro los errores siempre

*   Podemos usar el use strict tanto al principio del programa, como al principio dentro de una FN

*/
"use strict";

// x = "stasdf";
let x = 10;

miFuncion();

function miFuncion() {
    y = 15;
    //let y = 15;
}

