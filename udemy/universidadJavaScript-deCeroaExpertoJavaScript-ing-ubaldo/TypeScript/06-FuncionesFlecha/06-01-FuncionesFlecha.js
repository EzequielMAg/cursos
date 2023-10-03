"use strict";
/*
*   VIDEO N° 247:   Funciones de flecha con Ts
*/
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
let sumaFlecha = (a, b) => a + b;
console.log(sumaFlecha(3, 1));
// Otra funcion simple
let obtenerNombre = function () {
    return "Ezequiel Mamani";
};
console.log(obtenerNombre());
// En version fn flecha
let obtenerNombreFlecha = () => "Ezequiel Mamani";
console.log(obtenerNombreFlecha());
