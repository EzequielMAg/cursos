"use strict";
/*
*  VIDEO N° 241: Instalacion de TS

*  VIDEO N° 242: Definicion de variables con TS
*/
// De la siguiente forma definimos el tipo de la variable
// Aunque esto no es necesario, ya que en TS existe el concepto de "inferencia de tipos"
// let saludo:string = "Hola mundo desde TypeScript";
let saludo = "Hola mundo desde TypeScript";
console.log(typeof saludo);
function saludar() {
    console.log(saludo);
}
saludar();
// En TS no existe el tipado dinamico como en JS, asi que una vez inicializada la variable, 
// no puede cambiar su tipo de dato. Por esto nos damos cuenta que el tipado de TS es mas riguroso
//saludo = 10;
//Pero si podemos hacer lo siguiente. Ya que sigue siendo una cadena.
saludo = "adios";
saludar();
let numero = 10; //* Igualmente se puede omitir el tipo number (:number)
console.log(numero);
// numero = "Hola";  //Nos tira un error de que no se puede cambiar, ya que debe ser tipo number
//* Si no inicializamos la variable y la usamos luego, nos tira error, y nos obliga a inicialiarla.
// let x:number;
let x = 10;
console.log(x);
