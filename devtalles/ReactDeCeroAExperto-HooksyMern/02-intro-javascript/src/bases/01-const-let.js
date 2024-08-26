console.log("Hola mundo!!!");

// Variables y Constantes

//VAR -> YA NO USARLOS NUNCA MAS... Buscar por que..

// SI ESTOY SEGURO DE QUE UN VALOR DE UNA VARIABLE YA NO LO VOY A CAMBIAR -> uso const
const nombre = 'Ezequiel';
const apellido = 'Mamani';

// Si NO estoy seguro de que un valor de una variable vaya acambiar -> uso let
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//VARIABLES DE SCOPE
if( true) {
    let valorDado = 6;
    const nombre = 'Peter';

    console.log(valorDado);
    console.log(nombre);
}

console.log(valorDado);
// No hay problemas al usar variables con el mis nombre, ya que no estan en el mismo SCOPE.-
// Son las ventajas que tienen el const y el let sobre le var, que es global..