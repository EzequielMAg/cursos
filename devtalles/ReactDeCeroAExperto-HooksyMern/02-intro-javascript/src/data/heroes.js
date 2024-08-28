
// Recordar poner el "export" para que esta informacion pueda ser usada en otro file .js
//export const heroes = [
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Exportacion individual
export const owners = ['DC', 'Marvel'];
//const owners = ['DC', 'Marvel'];

export default heroes;

//otra forma
/* export {
    heroes,
    owners
} */

/* export {
    heroes as default,
    owners
} */