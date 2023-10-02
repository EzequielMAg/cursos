/* 
*   VIDEO N° 63: OBJETOS EN JS
*/

// En JS casi todo lo que manejamos son objetos
// Un objeto puede temer PROPIEDADES Y METODOS

const persona = {
    nombre: 'Ezequiel',
    apellido: "Mamani",
    email: "ezeq@gmail.com",
    edad: 25
}

// alert(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

console.log(persona);

// ------------------------------------------------------------------------------------------------
/* 
*   VIDEO N° 64: AGREGAR METODOS A OBJETOS
*/

const persona1 = {
    nombre: 'Ezequiel',
    apellido: "Mamani",
    email: "ezeq@gmail.com",
    edad: 25,

    nombreCompleto: function() {

        return this.nombre + " " + this.apellido;
    }

}

console.log(persona1.nombreCompleto());


// ------------------------------------------------------------------------------------------------
/* 
*   VIDEO N° 65: CREACION DE OBJETOS
*/

//* 1° FORMA: Ya vimos una primer forma de crear un objeto en JS en el video n° 63, llamado OBJETO LITERAL

//* 2° FORMA: A traves de la palabras reservadas 'new Object'
//     Esta forma es menos comun 
let persona2 = new Object(); //Se creo el objeto en memoria, pero VACIO
console.log(persona2);
console.log(typeof persona2);

//Ahora podemos agregarle atributos y metodos. es algo dinamico, caracteristico de JS
persona2.nombre = "Carlos";
persona2.edad = 21;
persona2.telefono = 2254411151;

//De la misma forma podemos imprimir todo el objeto o un atributo en particular
console.log(persona2);
console.log(persona2.nombre);

//! NOTA: existen mas formas distintas de crear un objeto, como la funcion constructora o mediante clases
//        temas que se veran en proximos videos