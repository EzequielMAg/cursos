//Objetos literales

const persona = {

}

console.log( persona ); //Imprimirá en consola un objeto vacio obviamente, solo apareceran unas LLAVEs {}
// Al abrir las llaves veremos el "prototype", el cual existe siempre q creemos cualquier objeto o variable en JS 
// El "prototype" es por decirlo asi, el "adn". Dentro podemos encontrar sus atributos y metodos (tambien 
// getters y setters). En fin, un monton de propiedades que implicitamente tienen todos los objetos.

// Los objetos literales tambien son conocidos como diccionarios segun el lenguaje tienen otro nombre.
// En general los objetos trabajan con pares clave-valor:

const persona2 = {
    nombre: "Tony",
    apellido: 'Stark',
    edad: 45,   //deja una coma al final es una buena practica, no es problema dejarlo ahi
}

// Imprimo la persona2
console.log( persona2 );

// Imprimo la persona2, pero en realidad tambien estoy creando otro objeto a la cual le asigne dentro a la persona2 
console.log( { persona2 } );

// Osea seria lo mismo lo siguiente. Tengo un atributo llamado "persona2" y le asigne el objeto tal, con todos su valores.
console.log( { 
    persona2: persona2 
} );

// A partir del ECMAScript6, es lo mismo tanto la linea 25 y las 28-30. Se puede obviar el atributo.

//Mas mejor hacerlo con un console.table talvez, pera ver mejor la info
console.table( persona2 );

// Tambien porsupuesto podemos tener objetos dentro de los objetos
const persona3 = {
    nombre: 'Ezequiel',
    apellido: "Mamani",
    edad: 26,
    direccion: {                // Objeto direccion
        ciudad: 'New York',
        zip: 56465465,
        lat: 14.546546,
        lng: 64.564654,
    }
}

console.table( persona3 );

// En el siguiente ej, NO ESTAMOS COPIANDO LOS VALORES DEL OBJETO, sino mas bien ESTAMOS COPIANDO LA REFERENCIA AL OBJETO.
const persona4 = persona3;

// Demostracion cambiando alguno de sus atributos:
persona3.nombre = "Adrian";
console.table( persona3 );
console.table( persona4 );


// Si queremos CLONAR un objeto, y tener una referencia distinta, a partir del EE6, Js agrego el SPREAD OPERATOR
const persona5 = { ...persona3 };
persona3.nombre = "Mateo";

console.table( persona3 );
console.table( persona5 );
