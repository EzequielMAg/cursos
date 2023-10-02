/* 
*   VIDEO N° 119: Funcion setTimeOut y promesas
*/

// No es obligatorio agrega el segundo parametro de rejected, osea, el callback de "en caso de error"
//Omitiendo la funcion de rechazar, no se estaria manejando el error, haremos eso:
let miPromesa = new Promise((resolver) => {
    console.log("inicio promesa");
    setTimeout(() => resolver("Saludos con promesa y timeOut"), 3000);
    console.log("fin promesa");
});

console.log("Esto es un msje fuera de la promesa");
miPromesa.then((mensaje) => console.log(mensaje));


// Tambien podemos tener una promesa dentro de otra promesa, o.. Promesas dentro de promesas...


