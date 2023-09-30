/* 
*   VIDEO N° 66: ACCEDER A LAS PROPIEDADES DE LOS OBJETOS
*/

const persona = {
    nombre: 'Ezequiel',
    apellido: "Mamani",
    email: "ezeq@gmail.com",
    edad: 25,
    nombreCompleto: function() {

        return this.nombre + " " + this.apellido;
    }
}

// Ya vimos la forma mas comun de acceder a las propiedades
console.log(persona);

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

// Tambien podemos acceder a las propiedades de un objeto, como si fuera un arreglo
console.log(persona['nombre']);
console.log(persona['apellido']);
console.log(persona['email']);
console.log(persona['edad']);

// for in
// Recorre el objeto como si fuera un arreglo. A traves de la palabra reservad 'in' se obtiene cada uno de los atributos en cada iteracion
for(const nombreAtributo in persona) {
    console.log(persona[nombreAtributo]);
}

