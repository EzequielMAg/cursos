/*
    ===== Código de TypeScript =====
*/

//* Nos tira un error que no se puede encontrar el nombre 'Superhero'. Nuestra tarea es crear la interface.
const superHeroe: SuperHero = { 
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );

//* ------------------------  RESOLVIENDO TAREA  ------------------------
// Aca acabo de comprobar que con las interfaces se aplica el concepto de hoisting
interface SuperHero {
    name: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    }
    showAddress: () => string;
}


export {};