/* 
* VIDEO N° 78: CLASES EN JS
* VIDEO N° 79: METODOS GET Y SET
* VIDEO N° 80: HOISTING Y CLASES
*/

/* 
*   Una clase es una plantilla, para crear objetos
*   Posee atributos y metodos. La clase tiene un nombre

*   Un objeto es una instancia de una clase

*      ___  Persona (Clase)  ___
*     |                         |
*  Karla (objeto)         Armando (objeto)
*/

// Comprobando que no aplica el concepto de hoisting para las clases
let persona3 = new Persona("Clara", "Juarez"); 
// La linea anterior retorna el error -> no se puede acceder a "persona" antes de la inicialización

class Persona {

    // CONSTRUCTOR
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // GETTERS AND SETTERS
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona = new Persona("Ezequiel", "Mamani");
console.log(persona); 

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);


//* ----------------------  VIDEO N° 79: METODOS GET Y SET  ----------------------
// Usando el metodo get. No hace falta usar () tanto para los getters como los setters, no asi para la FN's
console.log(persona.nombre);

// Usando el set
persona.nombre = "Juan";


//* ----------------------  VIDEO N° 80: HOISTING Y CLASES  ----------------------
/* //! ACLARACION:
*   Cuando trabajamos con clases, no se aplica el concepto de hoisting.
*   Esto quiere decir que primero debemos definir la clase y luego usarlas en lineas proximas
*/