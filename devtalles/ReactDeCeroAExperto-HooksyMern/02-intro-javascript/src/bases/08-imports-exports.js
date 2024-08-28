//* IMPORT, EXPORT Y FUNCIONES COMUNES DE ARREGLOS

// Recordar que el path es relativo al archivo en el que estamos en este momento. 
// Notar que no le pone la extension .js (es opcional ponerlo). Por defecto el compilador buscar un archivo .js
// Con el import traemos la info que fue exportada en el archivo con tal path 
// No en todos lados veremos que se le pone el ; al final del import, pero es buena practica hacerlo

//import { heroes } from './data/heroes';
//import heroes from './data/heroes';
import heroes, { owners } from '../data/heroes';
//import { heroes, owners }  from './data/heroes';

console.log( heroes );

const getHeroeById = (id) => {
    return heroes.find(element => element.id === id );
}

const getHeroesOlderById = (id) => {
    return heroes.find(element => element.id > id );
}

//console.log(getHeroeById(1));
//console.log(getHeroeById(2));
//console.log(getHeroeById(3));
console.log(getHeroeById(4));
console.log(getHeroeById(47));
//console.log(getHeroesOlderById(1));

console.log(getHeroesOlderById(1));

// HERRERA EN LA CLASE HIZO:
const getHeroeById2 = (id) => {
    return heroes.find( (heroe) => {
        if(heroe.id === id ) {
            return true;
        } else {
            return false;
        }
    });
}

// Se puede simplificar asi tambien menciono:
const getHeroeById3 = (id) => {
    return heroes.find( (heroe) => heroe.id === id);       // Bueno.. Al fin y al cabo es igual a como lo hice yo...
}; 

// VA.. Terminando de ver el video, en verdad la dejo asi:
const getHeroeById4 = (id) => heroes.find( (heroe) => heroe.id === id);

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner )
console.log( getHeroesByOwner("DC"));
console.log( getHeroesByOwner("Marvel"));
console.log( getHeroesByOwner("melectro18arvel"));

console.log( owners );