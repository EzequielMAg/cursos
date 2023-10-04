/*
    ===== Código de TypeScript =====
*/

//* Nos tira un error que no se puede encontrar el nombre 'Superhero'. Nuestra tarea es crear la interface.
const superHeroe: SuperHero = { 
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );

//! ------------------------  RESOLVIENDO TAREA  ------------------------
// Aca acabo de comprobar que con las interfaces se aplica el concepto de hoisting
/* interface SuperHero {
    name: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    }
    showAddress: () => string;
} */
//Asi lo resolvi, como se ve anteriormente.


// Peeeero, el prof crack Herrera, nos tira la siguiente buena practica:
//* Cuandop se esta trabajando con interfaces que dentro tienen otro objeto, se aconseja que 
//* el objeto interno, tenga tambien otra interface
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

export {};

/* 
*   ATAJOS DE TECLADO:
   
*   ALT + cursor sobre nombres de funciones/interface        -> Nos tira la estructura de la clase o interface
*   clic en el identificador de alguna variable/FN, etc + F2 -> Nos deja sobreescribir el nombre/identificador y lo replica
                                                                en todos los lados que aparece
*/