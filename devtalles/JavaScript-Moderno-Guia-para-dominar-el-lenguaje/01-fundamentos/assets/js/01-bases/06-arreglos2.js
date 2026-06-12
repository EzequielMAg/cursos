
let juegos = ['Mario Bross', 'Megaman', 'GTA', 'Half Life'];

console.log('Largo', juegos.length);

let primero = juegos[0];
console.log(primero);

let ultimo = juegos[juegos.length-1];
console.log(ultimo);


juegos.forEach( (elemento, indice, arr) => {
  console.log({elemento, indice, arr});
})