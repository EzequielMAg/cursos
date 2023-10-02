/* 
*   VIDEO N° 115: Funciones callback

    Este concepto, significa que vamos a tener una FN que tiene como parametro otra FN
    y dentro de la FN principal, se llama a la FN que se pasa como argumento
*/

function miFuncion1() {
    console.log("funcion 1");
}

function miFuncion2() {
    console.log("funcion 2");
}

//Las llamadas de las FN's suceden de manera secuencial, va, el codigo en general tambien..
miFuncion1();
miFuncion2();

function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let resultado = op1 + op2;

    //console.log(funcionCallback);
    funcionCallback("El resultado es -> " + resultado);
}

// No hace falta poner parentersis cuando se pasa la funcion por argumento, ya se esta pasando la referencia de la fn
sumar(5, 2, imprimir);



