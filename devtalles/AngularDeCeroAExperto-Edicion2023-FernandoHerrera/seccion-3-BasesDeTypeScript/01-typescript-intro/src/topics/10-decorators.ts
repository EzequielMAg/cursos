/* 
*   DECORADORES: 
    Usualmente nosotros no vamos a sentarnos a crearlos, si no mas bien a utilizar los que ya existem.

    Los decoradores no son mas que funciones especiales que se adjuntan a determinado objetos.

*   El 99% de cosas que vamos a hacer en Angular, o que estan construidad en Agnular son clases, lo unico que
    varia es el decorador que se le pone, para que tal clase, sea un servicio, un modulo, un componente, una 
    directiva personailazada, etc, todo todo siguen siendo simples clases, lo unico que cambia es el decorador

*   Los decoradores no son mas que funciones que pueden modificar el comportamiento de clases/objetos/atributos/metodos
*   para que sea algo en particular, agregarle cierta funcionalidad. 
*/

function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {

    //@classDecorator
    public myProperty: string = 'Abc123';

    //@classDecorator
    print() {
        console.log("Hola mundo");
    }
}

console.log(SuperClass);

const instancia = new SuperClass();
console.log(instancia);