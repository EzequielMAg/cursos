/* 
*   VIDEO N° 278: Decoradores en TS

    Caracteristica agergada a ES6. Nos permite agregar funcionalidad a una clase sin modificarla.
    Tambien se pueden aplicar decoradores a metodos o atributos, ademas de las clases.
*/


function Saludar(target: Function):void {
    target.prototype.saludos = function():void {
        console.log("Hola desde decoradores");
    }
}

@Saludar 
class Hola {
    constructor() {

    }
}

let hola1 = new Hola();

hola1.saludos(); 