/* 
*   VIDEO N° 67: AGREGAR Y ELIMINAR PROPIEDADES
    Estos es posible, ya que JS es muy flexible
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

// Agregando propiedades
persona.tel = "2254411159";
persona.pais = "Argentina";

console.log(persona);

// Ya que se agrega tan facilmente una nueva prop, debemos tener cuidado, por ej, si queremos modificar la prop
// si nos equivocamos con el nombre de la prop, vamos a crear otro atributo!
persona.te1 = "2254415339";
console.log(persona);

// Forma correcta de cambiar un valor del atributo tel
persona.tel = "2254123456";
console.log(persona);


// Eliminando propiedades
delete persona.te1;
delete persona.tel;
delete persona.email;
console.log(persona);
