/* 
*   VIDEO N° 71:  FUNCIÓN CONSTRUCTOR DE OBJETOS
*   VIDEO N° 72:  AGREGAR METODOS A UNA FUNCION CONSTRUCTORA
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

// --------
console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());

// --------------------------------------------------------------------
/* 
*   VIDEO N° 73: DIFERENTES FORMAS DE CREAR UN OBJETO (parte2)
*/

// Vimos la forma literal de crear un objeto, a traves de una FN constructora y recordamos la de new Objet()
let miObjeto = new Object();
console.log(typeof miObjeto);

// Una forma mucho mas simple es la siguiente, y es mas recomendada frente a la anterior
let miObjeto2 = {};
console.log(typeof miObjeto2);


//* Veamos que tambien con las variables literales, existe una forma mas formal a traves de new.. Aunque no se recomienda
//A continuacion se mostraran, tanto la forma formal como la forma mas simplificada para varios tipos
let miCadena = new String();
console.log(typeof miCadena);
console.log(miCadena);

let miCadena2 = "";
console.log(typeof miCadena2);
console.log(miCadena2);

//* Lo mismo para los de tipo number
let miNumero = new Number(1);
console.log(typeof miNumero);
console.log(miNumero);

let miNumero2 = 1;
console.log(typeof miNumero2);
console.log(miNumero2);

//* Lo mismo para los booleanos
let miBoolean = new Number(1);
console.log(typeof miBoolean);
console.log(miBoolean);

let miBoolean2 = 1;
console.log(typeof miBoolean2);
console.log(miBoolean2);

//* Recordando en arrays
let miArray = new Array(1, 2, 3);
console.log(typeof miArray);
console.log(miArray);

let miArray2 = [1, 2, 3];
console.log(typeof miArray2);
console.log(miArray2);

// Y asi para todos los tipos. Aunque la mejor practica es usar la forma simplificada.

//* Funciones
let miFuncion = new Function();
console.log(typeof miFuncion);
console.log(miFuncion);

let miFuncion2 = function() {}
console.log(typeof miFuncion2);
console.log(miFuncion2);