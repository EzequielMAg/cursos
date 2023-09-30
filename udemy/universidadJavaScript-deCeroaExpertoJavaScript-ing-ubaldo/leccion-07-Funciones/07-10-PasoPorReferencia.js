/* 
*   VIDEO N° 62: Paso por referencia en funciones
*/

// Creamos un objeto. La variable 'persona' almacena una referencia del objeto
const persona = {
    nombre: "Ezequiel",
    apellido: "Mamani"
}

console.log(persona);

function cambiarValorObjeto(p1) {
    p1.nombre = "Juan";
    p1.apellido = "Perez";
}

//* PASO POR REFERENCIA. A la funcion se le esta pasando la referencia del objeto
// Tanto 'persona' como 'p1' apuntan a la misma direccion de memoria, y podemos modificar su val or en la FN
cambiarValorObjeto(persona)
console.log(persona);