"use strict";
/*
*   VIDEO N°243: Definicion de clases y objetos con TS
*/
class Persona {
    //Pero no hace falta porque en el constructor ya esta, y TS infiere en el tipo de dato a traves de el
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Ezequiel");
//console.log(persona1.nombre);   // Imprime el nombre, pero nos tira un error diciend oque tal prop es privada
// En ese caso podemos sacarle el private, ponerle public, u omitirlo.. Si no, debemos crear el getter
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
/*
    Si vemos el archivo transpilado de este, a .js, veremos que se transformo correctamente, y segun la version de EcmaScript que
    tengamos configurado en el tsconfig.json, se tendra el codigo en ES5 u ES6, y la ventaja de esto, es q podemos adaptar el codigo
    o otra version anterior muy facilmente y por lo tanto, este codigo podria ser compatible con navegadores que aceptan ES5, ya que
    las clases ni metodos estaticos, recien fueron incorporadas en ES6.
*/ 
