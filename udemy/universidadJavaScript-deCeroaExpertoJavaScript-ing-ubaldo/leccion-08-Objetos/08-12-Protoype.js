/* 
*   VIDEO N° 74: USO DE PROTOTYPE
*/

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}

let persona1 = new Persona("Ezequiel", "Mamani", 25);
let persona2 = new Persona("Florencia", "Perez", 25);

console.log(persona1);
console.log(persona2);

// A través de protoype podemos agregar metodos o atributos que puedan pertenecer a todas las instancias, de Persona por ejemplo,
// sin la necesidad de agregar el metodo en la funcion constructora

// Agregaremos la prop tel al tipo de objeto Persona, a traves del prototype
Persona.prototype.tel;

console.log(persona1.tel);
console.log(persona2.tel);

// Agregaremos la prop tel2 al tipo de objeto Persona, a traves del prototype, pero esta vez, la deramos un valor por default
Persona.prototype.tel2 = 2254415455;

console.log(persona1.tel2);
console.log(persona2.tel2);

// Modificamos el valor tel2 a la persona1 para confirmar que son atributos independientes para cada instancia persona
persona1.tel2 = 2254;
persona2.tel2 = 123;
/* //! OBSERVACION: descubri que en realidad.. en las dos lineas anteriores no se esta modificando el atributo
! agregado a traves del prototype, sino que se esta creando un nuevo atributo en tales instancias
! Por lo que, finalmente, va a haber tanto un atributo tel2 en cada instancia, como en el prototype, 
! Y tendran valores distintos... Se pued comprobar a traves del navegador, y no por quokka, este es mas limitado 

! Tambien entendi, que JS busca tal atributo, primero en el constructor, y si no lo encuentra, va hacia arriba, hacia
! la clase padre, en este caso: el prototype, que vendria a ser Object.
! Entonces... Siempre que se agrega algo con proptotype, se esta agregando a la clase padre.
*/

console.log(persona1.tel2);
console.log(persona2.tel2);

console.log(persona1);
console.log(persona2);

