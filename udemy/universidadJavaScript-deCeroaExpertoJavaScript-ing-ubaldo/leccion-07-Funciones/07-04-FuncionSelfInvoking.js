/* 
*   VIDEO N° 56: Funciones de tipo Self Invoking
*/

// Este tipo de funciones son, fns que se llaman a si mismas.
(function () {
    console.log("Ejecutando la funcion");
})();

// El detalle de esta funcion, es que no la podemos reutilizar. No podemos volver a llamar a la fn, 
// ya que no la estamos asignando a ninguna variable, ni tampoco tiene un nombre.


// Podemos pasarle parametros tambien porsupuesto
(function (a, b) {
    console.log("Ejecutando la funcion -> " + (a + b));
})(3, 7);





